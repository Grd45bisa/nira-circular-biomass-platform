import { spawn } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";

const root = "C:/Users/Pahmi/AppData/Local/Temp/nira-phase4-qa";
mkdirSync(root, { recursive: true });
const port = 9400 + Math.floor(Math.random() * 1000);
const browser = spawn(
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  [
    "--headless=new",
    "--disable-gpu",
    "--no-first-run",
    `--user-data-dir=${root}/profile-${port}`,
    `--remote-debugging-port=${port}`,
    "about:blank",
  ],
  { windowsHide: true, stdio: "ignore" },
);
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
let socket;

try {
  let ready = false;
  for (let i = 0; i < 80; i++) {
    try {
      ready = (await fetch(`http://127.0.0.1:${port}/json/version`)).ok;
      if (ready) break;
    } catch {}
    await sleep(100);
  }
  if (!ready) throw new Error("Chrome did not start");
  const target = await (
    await fetch(`http://127.0.0.1:${port}/json/new?http://localhost:3000`, {
      method: "PUT",
    })
  ).json();
  socket = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((resolve) =>
    socket.addEventListener("open", resolve, { once: true }),
  );
  let id = 0;
  const pending = new Map();
  socket.addEventListener("message", (event) => {
    const message = JSON.parse(event.data);
    if (!message.id) return;
    const task = pending.get(message.id);
    if (!task) return;
    pending.delete(message.id);
    message.error
      ? task.reject(new Error(message.error.message))
      : task.resolve(message.result);
  });
  const send = (method, params = {}) =>
    new Promise((resolve, reject) => {
      const current = ++id;
      pending.set(current, { resolve, reject });
      socket.send(JSON.stringify({ id: current, method, params }));
    });
  const evaluate = async (expression) =>
    (
      await send("Runtime.evaluate", {
        expression,
        returnByValue: true,
        awaitPromise: true,
      })
    ).result.value;
  await send("Page.enable");

  const routes = [
    "/",
    "/about",
    "/transformation",
    "/products",
    "/impact",
    "/journal",
    "/journal/beyond-the-shell",
    "/partnership",
  ];
  const viewports = [
    { name: "mobile", width: 375, height: 812 },
    { name: "tablet-portrait", width: 1024, height: 1366 },
    { name: "tablet-landscape", width: 1024, height: 768 },
    { name: "desktop", width: 1366, height: 900 },
  ];
  for (const viewport of viewports) {
    await send("Emulation.setDeviceMetricsOverride", {
      ...viewport,
      deviceScaleFactor: 1,
      mobile: true,
    });
    for (const route of routes) {
      await send("Page.navigate", { url: `http://localhost:3000${route}` });
      await sleep(650);
      const state = await evaluate(
        "({path:location.pathname,width:innerWidth,scrollWidth:document.documentElement.scrollWidth,h1:document.querySelectorAll('h1').length,menu:getComputedStyle(document.querySelector('.nira-menu-trigger')).display,images:[...document.images].filter(i=>i.loading!=='lazy').map(i=>({src:i.currentSrc,ok:i.complete&&i.naturalWidth>0}))})",
      );
      console.log(JSON.stringify({ viewport: viewport.name, ...state }));
      if (
        (viewport.name === "mobile" || viewport.name === "desktop") &&
        ["/products", "/partnership"].includes(route)
      ) {
        const shot = await send("Page.captureScreenshot", {
          format: "png",
          captureBeyondViewport: false,
        });
        writeFileSync(
          `${root}/${viewport.name}-${route.slice(1)}.png`,
          Buffer.from(shot.data, "base64"),
        );
      }
    }
  }
  await send("Emulation.setDeviceMetricsOverride", {
    width: 1366,
    height: 900,
    deviceScaleFactor: 1,
    mobile: true,
  });
  await send("Page.navigate", { url: "http://localhost:3000/products" });
  await sleep(700);
  await evaluate("document.querySelector('#energy').scrollIntoView()");
  await sleep(900);
  const shot = await send("Page.captureScreenshot", {
    format: "png",
    captureBeyondViewport: false,
  });
  writeFileSync(`${root}/desktop-energy.png`, Buffer.from(shot.data, "base64"));
  console.log(
    JSON.stringify({
      productImageLoaded: await evaluate(
        "({loaded:[...document.querySelectorAll('#energy img')].every(i=>i.complete&&i.naturalWidth>0)})",
      ),
    }),
  );
  await send("Page.navigate", { url: "http://localhost:3000/partnership" });
  await sleep(900);
  const inquiry = await evaluate(`(async () => {
    window.__copiedInquiry = '';
    navigator.clipboard.writeText = async (value) => { window.__copiedInquiry = value; };
    document.querySelector('[name="name"]').value = 'Test Partner';
    document.querySelector('[name="interest"]').value = 'Material sourcing';
    document.querySelector('[name="message"]').value = 'Explore coconut husk collection.';
    document.querySelector('form').requestSubmit();
    await new Promise(resolve => setTimeout(resolve, 350));
    return { copied: window.__copiedInquiry.includes('Test Partner') && window.__copiedInquiry.includes('coconut husk'), status: document.querySelector('[role="status"]').textContent };
  })()`);
  console.log(JSON.stringify({ inquiry }));
} finally {
  socket?.close();
  browser.kill();
}
