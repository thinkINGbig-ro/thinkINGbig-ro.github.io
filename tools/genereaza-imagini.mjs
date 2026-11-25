// Regenerează favicon-urile și imaginea Open Graph din assets/logo.svg.
// Rulare, din rădăcina repo-ului:  node tools/genereaza-imagini.mjs
// Are nevoie de Node 18+ și Playwright:
//   npm i -g playwright && npx playwright install chromium
//   NODE_PATH=$(npm root -g) node tools/genereaza-imagini.mjs
//
// Iconița (favicon) se face din assets/logo-icon.svg dacă există, altfel din assets/logo.svg.
// Imaginea OG (1200×630) pune assets/logo.svg (și assets/wordmark.svg, dacă există) pe fundalul mov,
// cu misiunea dedesubt.

import { createRequire } from 'node:module';
import { readFileSync, writeFileSync, existsSync, copyFileSync } from 'node:fs';
import { resolve } from 'node:path';

// Playwright se ia din node_modules local sau global (NODE_PATH=$(npm root -g)).
const { chromium } = createRequire(import.meta.url)('playwright');

const root = resolve(new URL('..', import.meta.url).pathname);
const a = (p) => resolve(root, 'assets', p);
const dataUrl = (p, type) => `data:${type};base64,${readFileSync(p).toString('base64')}`;

const iconSrc = existsSync(a('logo-icon.svg')) ? a('logo-icon.svg') : a('logo.svg');
const logo = dataUrl(a('logo.svg'), 'image/svg+xml');
const icon = dataUrl(iconSrc, 'image/svg+xml');
const font = dataUrl(a('fonts/newsreader.woff2'), 'font/woff2');
const wordmark = existsSync(a('wordmark.svg')) ? dataUrl(a('wordmark.svg'), 'image/svg+xml') : null;

const browser = await chromium.launch();
const page = await browser.newPage();

async function shot(html, w, h, out) {
  await page.setViewportSize({ width: w, height: h });
  await page.setContent(html, { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  const buf = await page.screenshot({ type: 'png', omitBackground: true });
  if (out) writeFileSync(out, buf);
  return buf;
}

// Iconițe: logo-ul încadrat într-un pătrat. Un logo lat (wordmark) primește fundal mov și margini.
const iconHtml = (s) => `<!doctype html><style>html,body{margin:0;width:${s}px;height:${s}px;background:transparent}
body{display:grid;place-items:center}img{max-width:${s}px;max-height:${s}px}</style>
<body><img src="${icon}"></body>`;
const apple = (s) => `<!doctype html><style>html,body{margin:0;width:${s}px;height:${s}px;background:#1E1638}
body{display:grid;place-items:center}img{width:${Math.round(s * .86)}px;height:${Math.round(s * .86)}px;object-fit:contain}</style>
<body><img src="${icon}"></body>`;

const png32 = await shot(iconHtml(32), 32, 32, a('favicon-32.png'));
await shot(apple(180), 180, 180, a('apple-touch-icon.png'));

// favicon.ico în rădăcină: un singur PNG de 32×32 împachetat în format ICO.
const hdr = Buffer.alloc(22);
hdr.writeUInt16LE(0, 0); hdr.writeUInt16LE(1, 2); hdr.writeUInt16LE(1, 4);
hdr.writeUInt8(32, 6); hdr.writeUInt8(32, 7); hdr.writeUInt8(0, 8); hdr.writeUInt8(0, 9);
hdr.writeUInt16LE(1, 10); hdr.writeUInt16LE(32, 12);
hdr.writeUInt32LE(png32.length, 14); hdr.writeUInt32LE(22, 18);
writeFileSync(resolve(root, 'favicon.ico'), Buffer.concat([hdr, png32]));
copyFileSync(iconSrc, a('favicon.svg'));

// Imaginea Open Graph.
await shot(`<!doctype html><style>
@font-face{font-family:N;src:url(${font}) format('woff2')}
html,body{margin:0;width:1200px;height:630px;background:#1E1638;color:#F3EEFF}
body{display:flex;flex-direction:column;justify-content:center;padding:0 96px;box-sizing:border-box;gap:44px}
.marca{display:flex;align-items:center;gap:40px}
.simbol{height:240px;width:auto}
.nume{height:100px;width:auto}
.marca img:only-child{height:300px;max-width:1000px}
p{font:400 40px/1.3 N,serif;margin:0;max-width:900px;color:#F3EEFF}
small{display:block;margin-top:14px;font-size:28px;color:#C9BFE8}
</style><body><div class="marca"><img class="simbol" src="${logo}" alt="">${wordmark ? `<img class="nume" src="${wordmark}" alt="">` : ''}</div><p>Educație financiară explicată simplu.<small>Un proiect thinkINGbig, Baia Mare</small></p></body>`,
  1200, 630, a('og-image.png'));

await browser.close();
console.log('Gata: favicon.ico, assets/favicon.svg, favicon-32.png, apple-touch-icon.png, og-image.png');
