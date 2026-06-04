import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const root = process.cwd();
const inputPath = resolve(root, 'presentation.html');
const outputPath = resolve(root, 'dist/presentation.html');

let html = await readFile(inputPath, 'utf8');

html = html.replaceAll('public/', './');

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, html);

console.log('Prepared dist/presentation.html with GitHub Pages-safe asset paths.');
