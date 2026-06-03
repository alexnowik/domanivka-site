import { execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { basename, dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const require = createRequire(import.meta.url);
const pptxgen = require('pptxgenjs');

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const options = new Set(process.argv.slice(2).filter((arg) => arg.startsWith('--')));
const positional = process.argv.slice(2).filter((arg) => !arg.startsWith('--'));

const input = resolve(root, positional[0] ?? 'presentation.html');
const out = resolve(root, positional[1] ?? 'dist/presentation.pptx');
const exportDir = resolve(root, 'dist/pptx-export');
const chrome = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const widthPx = 1920;
const heightPx = 1080;
const reuseImages = options.has('--reuse-images');

mkdirSync(exportDir, { recursive: true });
mkdirSync(dirname(out), { recursive: true });

execFileSync(process.execPath, [resolve(__dirname, 'validate-presentation.mjs'), input], { stdio: 'inherit' });

const source = readFileSync(input, 'utf8');
const slideCount = (source.match(/<div class="slide\b/g) ?? []).length;

if (slideCount === 0) {
  throw new Error(`No slides found in ${basename(input)}`);
}

const injected = source.replace(
  '</head>',
  `<style>
    .dots,.arr,.ctr{display:none!important}
    @media print{.dots,.arr,.ctr{display:none!important}}
  </style>
  </head>`,
).replace(
  '</body>',
  `<script>
    (() => {
      const slide = Number(new URLSearchParams(location.search).get('slide') || 0);
      if (typeof go === 'function') {
        go(slide);
      }
    })();
  </script>
  </body>`,
);

const exportHtml = resolve(exportDir, 'presentation-export.html');
writeFileSync(exportHtml, injected);

const images = [];
const htmlUrl = pathToFileURL(exportHtml).href;

for (let i = 0; i < slideCount; i += 1) {
  const imagePath = resolve(exportDir, `slide-${String(i + 1).padStart(2, '0')}.png`);
  const url = `${htmlUrl}?slide=${i}`;

  if (reuseImages && existsSync(imagePath) && statSync(imagePath).size > 0) {
    images.push(imagePath);
    continue;
  }

  const args = [
    '--headless=new',
    '--disable-gpu',
    '--disable-background-networking',
    '--disable-component-update',
    '--disable-crash-reporter',
    '--disable-default-apps',
    '--disable-extensions',
    '--disable-features=OptimizationHints,Translate,MediaRouter',
    '--disable-sync',
    '--hide-scrollbars',
    '--metrics-recording-only',
    '--no-first-run',
    '--noerrdialogs',
    '--password-store=basic',
    '--run-all-compositor-stages-before-draw',
    '--use-mock-keychain',
    '--allow-file-access-from-files',
    `--user-data-dir=${resolve(exportDir, `chrome-profile-${i + 1}`)}`,
    '--timeout=5000',
    `--window-size=${widthPx},${heightPx}`,
    `--screenshot=${imagePath}`,
    url,
  ];

  try {
    execFileSync(chrome, args, { stdio: 'inherit', timeout: 11000 });
  } catch (error) {
    const imageExists = existsSync(imagePath) && statSync(imagePath).size > 0;
    if (!imageExists) {
      throw error;
    }

    console.warn(`Chrome did not exit cleanly after writing ${imagePath}; continuing.`);
  }

  images.push(imagePath);
}

const pptx = new pptxgen();
pptx.layout = 'LAYOUT_WIDE';
pptx.author = 'Codex';
pptx.company = 'Domanivka';
pptx.subject = 'Converted from HTML presentation';
pptx.title = basename(input, '.html');
pptx.lang = 'uk-UA';
pptx.theme = {
  headFontFace: 'Aptos Display',
  bodyFontFace: 'Aptos',
  lang: 'uk-UA',
};
pptx.defineLayout({ name: 'LAYOUT_WIDE', width: 13.333333, height: 7.5 });

for (const image of images) {
  const slide = pptx.addSlide();
  slide.background = { color: '0E1322' };
  slide.addImage({ path: image, x: 0, y: 0, w: 13.333333, h: 7.5 });
}

await pptx.writeFile({ fileName: out });

console.log(`Created ${out}`);
console.log(`Slides: ${slideCount}`);
