const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function processLogo() {
  const rootDir = path.resolve(__dirname, '..');
  const input = path.join(rootDir, 'public/images/Logo.png');
  const outDir = path.join(rootDir, 'public/images');

  // 1. Extract centered square
  const left = 90;
  const top = 109;
  const size = 1080;

  const cropped = await sharp(input)
    .extract({ left, top, width: size, height: size })
    .toBuffer();

  // Save clean cropped transparent logo
  await sharp(cropped)
    .resize(512, 512)
    .png()
    .toFile(path.join(outDir, 'panda-logo-mark.png'));

  await sharp(cropped)
    .resize(512, 512)
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'panda-logo-mark.webp'));

  // 2. Create the badge version: warm cream circular background with refined amber rim
  const badgeSize = 512;
  const pad = 28; // padding inside badge
  const logoInnerSize = badgeSize - (pad * 2); // 456

  const resizedLogo = await sharp(cropped)
    .resize(logoInnerSize, logoInnerSize)
    .toBuffer();

  const circleBgSvg = Buffer.from(
    `<svg width="${badgeSize}" height="${badgeSize}" xmlns="http://www.w3.org/2000/svg">
      <circle cx="${badgeSize / 2}" cy="${badgeSize / 2}" r="${(badgeSize / 2) - 4}" fill="#FAF7F2" stroke="#D8A25E" stroke-width="5" stroke-opacity="0.6"/>
    </svg>`
  );

  const badgePng = await sharp(circleBgSvg)
    .composite([
      { input: resizedLogo, left: pad, top: pad }
    ])
    .png()
    .toBuffer();

  await sharp(badgePng).toFile(path.join(outDir, 'panda-logo-badge.png'));
  await sharp(badgePng).webp({ quality: 95 }).toFile(path.join(outDir, 'panda-logo-badge.webp'));

  // 3. Also update nira-logo-mark with badge version so any dark background immediately gets the badge contrast!
  await sharp(badgePng).resize(256, 256).webp({ quality: 95 }).toFile(path.join(outDir, 'nira-logo-mark.webp'));
  await sharp(badgePng).resize(256, 256).png().toFile(path.join(outDir, 'nira-logo-mark.png'));
  await sharp(badgePng).resize(128, 128).webp({ quality: 95 }).toFile(path.join(outDir, 'nira-logo-mark-sm.webp'));
  await sharp(badgePng).resize(128, 128).png().toFile(path.join(outDir, 'nira-logo-mark-sm.png'));

  // 4. Update app/icon.svg (favicon) with embedded base64
  const icon32 = await sharp(badgePng).resize(64, 64).png().toBuffer();
  const b64 = icon32.toString('base64');
  const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><image href="data:image/png;base64,${b64}" width="64" height="64"/></svg>\n`;
  fs.writeFileSync(path.join(rootDir, 'app/icon.svg'), faviconSvg, 'utf8');

  console.log('ALL PANDA COCO LOGO ASSETS GENERATED SUCCESSFULLY!');
}

processLogo().catch(err => {
  console.error('Error generating logo assets:', err);
  process.exit(1);
});
