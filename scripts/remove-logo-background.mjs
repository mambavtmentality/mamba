import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const inputPath = path.resolve("sources/mamba_mentality.png");
const backupPath = path.resolve("sources/mamba_mentality_with_checkerboard.png");

function isCheckerboardPixel(r, g, b) {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const chroma = max - min;
  const lightness = (max + min) / 2;

  // Checkerboard squares are neutral light grays/whites.
  if (chroma > 28) return false;
  if (lightness >= 205) return true;
  if (lightness >= 118 && lightness <= 198) return true;

  return false;
}

function isBlackBackdropPixel(r, g, b) {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const chroma = max - min;
  const lightness = (max + min) / 2;

  // Treat near-neutral dark pixels as backdrop black.
  return lightness <= 28 && chroma <= 18;
}

if (!fs.existsSync(inputPath)) {
  console.error("Logo file not found:", inputPath);
  process.exit(1);
}

if (!fs.existsSync(backupPath)) {
  fs.copyFileSync(inputPath, backupPath);
  console.log("Backed up original to", backupPath);
}

const { data, info } = await sharp(inputPath)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const pixels = Uint8Array.from(data);

for (let i = 0; i < pixels.length; i += 4) {
  const r = pixels[i];
  const g = pixels[i + 1];
  const b = pixels[i + 2];

  if (isCheckerboardPixel(r, g, b) || isBlackBackdropPixel(r, g, b)) {
    pixels[i + 3] = 0;
  }
}

await sharp(pixels, {
  raw: {
    width: info.width,
    height: info.height,
    channels: 4,
  },
})
  .png()
  .toFile(inputPath);

console.log("Saved transparent logo:", inputPath);
