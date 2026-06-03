import { readFileSync } from 'node:fs';
import { basename, resolve } from 'node:path';

const input = resolve(process.cwd(), process.argv[2] ?? 'presentation.html');
const source = readFileSync(input, 'utf8');

function readTag(html, start) {
  let quote = null;

  for (let i = start + 1; i < html.length; i += 1) {
    const char = html[i];

    if (quote) {
      if (char === quote) quote = null;
      continue;
    }

    if (char === '"' || char === "'") {
      quote = char;
      continue;
    }

    if (char === '>') {
      return { start, end: i + 1, raw: html.slice(start, i + 1) };
    }
  }

  throw new Error(`Unclosed HTML tag near byte ${start}`);
}

function tags(html) {
  const result = [];

  for (let i = 0; i < html.length; i += 1) {
    if (html.startsWith('<!--', i)) {
      const end = html.indexOf('-->', i + 4);
      if (end === -1) throw new Error(`Unclosed HTML comment near byte ${i}`);
      i = end + 2;
      continue;
    }

    if (html[i] !== '<') continue;

    const tag = readTag(html, i);
    result.push(tag);
    i = tag.end - 1;
  }

  return result;
}

function isOpeningDiv(raw) {
  return /^<div(?:\s|>)/i.test(raw);
}

function isClosingDiv(raw) {
  return /^<\/div\s*>/i.test(raw);
}

function classList(raw) {
  const match = raw.match(/\bclass\s*=\s*(['"])(.*?)\1/i);
  return match ? match[2].split(/\s+/).filter(Boolean) : [];
}

const parsedTags = tags(source);
const slides = parsedTags.filter((tag) => isOpeningDiv(tag.raw) && classList(tag.raw).includes('slide'));
const dots = parsedTags.find((tag) => isOpeningDiv(tag.raw) && classList(tag.raw).includes('dots'));

if (slides.length === 0) {
  throw new Error(`No slides found in ${basename(input)}`);
}

const errors = [];

for (let i = 0; i < slides.length; i += 1) {
  const start = slides[i].start;
  const end = slides[i + 1]?.start ?? dots?.start ?? source.length;
  const slideTags = parsedTags.filter((tag) => tag.start >= start && tag.start < end);
  const balance = slideTags.reduce((count, tag) => {
    if (isOpeningDiv(tag.raw)) return count + 1;
    if (isClosingDiv(tag.raw)) return count - 1;
    return count;
  }, 0);

  if (balance !== 0) {
    const titleMatch = source.slice(start, end).match(/<div class="(?:ey|dsub)"[^>]*>([^<]+)/);
    const title = titleMatch ? ` (${titleMatch[1].trim()})` : '';
    errors.push(`slide ${i + 1}${title}: div balance ${balance}`);
  }
}

if (errors.length > 0) {
  throw new Error(`Invalid presentation HTML:\n${errors.join('\n')}`);
}

console.log(`Presentation HTML OK: ${slides.length} slides`);
