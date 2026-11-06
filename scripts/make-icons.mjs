// Genera favicons, íconos PWA e imagen Open Graph a partir del logo oficial.
// Uso: node scripts/make-icons.mjs
import sharp from 'sharp';
import { writeFileSync } from 'node:fs';

const SRC = 'src/assets/logo-red.png';
const OUT = 'public';

// 1) Recortar solo el emblema (engranaje + círculo), sin el texto
const cropped = await sharp(SRC).extract({ left: 0, top: 0, width: 880, height: 932 }).png().toBuffer();
const trimmed = await sharp(cropped).trim().png().toBuffer();
const meta = await sharp(trimmed).metadata();
const side = Math.max(meta.width, meta.height);
const square = await sharp(trimmed)
  .extend({
    top: Math.floor((side - meta.height) / 2),
    bottom: Math.ceil((side - meta.height) / 2),
    left: Math.floor((side - meta.width) / 2),
    right: Math.ceil((side - meta.width) / 2),
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .png()
  .toBuffer();

const png = (size, opts = {}) => {
  const { pad = 0, bg = { r: 0, g: 0, b: 0, alpha: 0 } } = opts;
  const inner = Math.round(size * (1 - pad * 2));
  return sharp(square)
    .resize(inner, inner)
    .extend({
      top: Math.floor((size - inner) / 2),
      bottom: Math.ceil((size - inner) / 2),
      left: Math.floor((size - inner) / 2),
      right: Math.ceil((size - inner) / 2),
      background: bg,
    })
    .png({ compressionLevel: 9 })
    .toBuffer();
};

const white = { r: 255, g: 255, b: 255, alpha: 1 };
writeFileSync(`${OUT}/favicon-32.png`, await png(32));
writeFileSync(`${OUT}/icon-192.png`, await png(192, { pad: 0.06 }));
writeFileSync(`${OUT}/icon-512.png`, await png(512, { pad: 0.06 }));
writeFileSync(`${OUT}/icon-maskable-512.png`, await png(512, { pad: 0.14, bg: white }));
writeFileSync(`${OUT}/apple-touch-icon.png`, await png(180, { pad: 0.1, bg: white }));

// 2) favicon.ico con PNG embebidos (16, 32, 48)
const sizes = [16, 32, 48];
const images = await Promise.all(sizes.map((s) => png(s)));
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(sizes.length, 4);
let offset = 6 + 16 * sizes.length;
const dir = sizes.map((s, i) => {
  const e = Buffer.alloc(16);
  e.writeUInt8(s, 0);
  e.writeUInt8(s, 1);
  e.writeUInt16LE(1, 4);
  e.writeUInt16LE(32, 6);
  e.writeUInt32LE(images[i].length, 8);
  e.writeUInt32LE(offset, 12);
  offset += images[i].length;
  return e;
});
writeFileSync(`${OUT}/favicon.ico`, Buffer.concat([header, ...dir, ...images]));

// 3) Imagen Open Graph 1200x630: logo completo sobre fondo claro + barra degradada
const W = 1200, H = 630;
const bar = Buffer.from(
  `<svg width="${W}" height="14"><defs><linearGradient id="g"><stop offset="0" stop-color="#0B8E6B"/><stop offset=".33" stop-color="#13B3A0"/><stop offset=".66" stop-color="#1D8FE8"/><stop offset="1" stop-color="#6D4FE0"/></linearGradient></defs><rect width="${W}" height="14" fill="url(#g)"/></svg>`,
);
const caption = Buffer.from(
  `<svg width="${W}" height="80"><text x="50%" y="50" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="34" font-weight="700" fill="#4A4870">Inclusión laboral de personas con discapacidad · Perú</text></svg>`,
);
const logo = await sharp(SRC).resize(860).png().toBuffer();
const lm = await sharp(logo).metadata();
await sharp({ create: { width: W, height: H, channels: 4, background: '#FBFBFD' } })
  .composite([
    { input: bar, top: 0, left: 0 },
    { input: logo, top: 90, left: Math.round((W - lm.width) / 2) },
    { input: caption, top: 90 + lm.height + 20, left: 0 },
  ])
  .png({ compressionLevel: 9 })
  .toFile(`${OUT}/og.png`);

console.log('OK', { emblem: `${meta.width}x${meta.height}`, logo: `${lm.width}x${lm.height}` });
