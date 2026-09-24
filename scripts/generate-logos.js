const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function processAll() {
  const rootDir = path.resolve(__dirname, '..');
  const artifactsDir = 'C:/Users/Pahmi/.gemini/antigravity-ide/brain/4e64ae83-a149-438e-96f6-3138ca8ec772';
  const outDir = path.join(rootDir, 'public/images');

  // 1. Process dark seal mark (nira_logo_mark)
  const markInput = path.join(artifactsDir, 'nira_logo_mark_1790269980466.jpg');
  const cropSize = 694;
  const cropLeft = 165;
  const cropTop = 165;
  const maskSvg = Buffer.from(
    '<svg width="' + cropSize + '" height="' + cropSize + '">' +
    '<circle cx="' + (cropSize / 2) + '" cy="' + (cropSize / 2) + '" r="342" fill="white"/>' +
    '</svg>'
  );

  const cropped = await sharp(markInput)
    .extract({ left: cropLeft, top: cropTop, width: cropSize, height: cropSize })
    .toBuffer();

  const circlePng = await sharp(cropped)
    .composite([{ input: maskSvg, blend: 'dest-in' }])
    .png()
    .toBuffer();

  await sharp(circlePng).toFile(path.join(outDir, 'nira-logo-mark.png'));
  await sharp(circlePng).resize(256, 256).webp({ quality: 95 }).toFile(path.join(outDir, 'nira-logo-mark.webp'));
  await sharp(circlePng).resize(128, 128).webp({ quality: 95 }).toFile(path.join(outDir, 'nira-logo-mark-sm.webp'));
  await sharp(circlePng).resize(128, 128).png({ quality: 95 }).toFile(path.join(outDir, 'nira-logo-mark-sm.png'));

  // 2. Process Option B (nira_logo_v2) - Full logo with text
  const v2Input = path.join(artifactsDir, 'nira_logo_v2_1790269704933.jpg');
  await sharp(v2Input).resize(800, 800).webp({ quality: 95 }).toFile(path.join(outDir, 'nira-logo-badge.webp'));
  await sharp(v2Input).resize(800, 800).png({ quality: 95 }).toFile(path.join(outDir, 'nira-logo-badge.png'));

  // 3. Process Option C (nira_logo_v3)
  const v3Input = path.join(artifactsDir, 'nira_logo_v3_1790269728360.jpg');
  await sharp(v3Input).resize(800, 800).webp({ quality: 95 }).toFile(path.join(outDir, 'nira-logo-v3.webp'));

  console.log('ALL LOGO ASSETS CREATED SUCCESSFULLY IN public/images!');
}

processAll().catch(e => {
  console.error('Error generating logos:', e);
  process.exit(1);
});
