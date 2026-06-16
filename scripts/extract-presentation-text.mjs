import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { execFileSync } from 'node:child_process';

const root = process.cwd();
const inputPath = path.join(root, 'presentation.html');
const outputPath = path.join(root, 'work', 'presentation_text_by_slide.html');
const docxPath = path.join(root, 'work', 'presentation_text_by_slide.docx');

const html = fs.readFileSync(inputPath, 'utf8');

const slideMarker = '<div class="slide';
const starts = [];
let idx = html.indexOf(slideMarker);
while (idx !== -1) {
  starts.push(idx);
  idx = html.indexOf(slideMarker, idx + slideMarker.length);
}

const decode = (text) => (
  text
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&#8592;/g, '←')
    .replace(/&#8594;/g, '→')
);

const cleanup = (chunk) => {
  const noScripts = chunk
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '');

  const withBreaks = noScripts
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/(div|p|li|tr|h1|h2|h3|h4|ul|ol|table|thead|tbody|section)>/gi, '\n')
    .replace(/<(td|th)\b[^>]*>/gi, ' ')
    .replace(/<\/(td|th)>/gi, '\n');

  const plain = decode(withBreaks.replace(/<[^>]+>/g, ' '));

  const lines = plain
    .split('\n')
    .map((line) => line.replace(/\s+/g, ' ').trim())
    .filter(Boolean)
    .filter((line) => !['←', '→'].includes(line));

  const deduped = [];
  for (const line of lines) {
    if (deduped[deduped.length - 1] !== line) deduped.push(line);
  }
  return deduped;
};

const slides = starts.map((start, i) => {
  const end = starts[i + 1] ?? html.indexOf('<div class="dots"', start);
  return cleanup(html.slice(start, end === -1 ? undefined : end));
});

const body = slides.map((lines, i) => {
  const paragraphs = lines.map((line) => `<p>${line}</p>`).join('\n');
  return `<section>
  <h2>Слайд ${i + 1}</h2>
  ${paragraphs}
</section>`;
}).join('\n<hr/>\n');

const output = `<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8"/>
  <title>Текст презентації по слайдах</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 32px; color: #111; }
    h1 { font-size: 24px; margin: 0 0 24px; }
    h2 { font-size: 18px; margin: 28px 0 12px; }
    p { margin: 0 0 8px; line-height: 1.45; }
    hr { margin: 24px 0; border: 0; border-top: 1px solid #ccc; }
  </style>
</head>
<body>
  <h1>Текст презентації по слайдах</h1>
  ${body}
</body>
</html>`;

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, output);

const escapeXml = (text) => text
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;');

const paragraph = (text, opts = {}) => {
  const size = opts.size ? `<w:sz w:val="${opts.size}"/><w:szCs w:val="${opts.size}"/>` : '';
  const boldOpen = opts.bold ? '<w:b/>' : '';
  const boldCs = opts.bold ? '<w:bCs/>' : '';
  return `<w:p><w:r><w:rPr>${boldOpen}${boldCs}${size}</w:rPr><w:t xml:space="preserve">${escapeXml(text)}</w:t></w:r></w:p>`;
};

const docBody = [
  paragraph('Текст презентації по слайдах', { bold: true, size: 32 }),
  ...slides.flatMap((lines, i) => [
    paragraph(''),
    paragraph(`Слайд ${i + 1}`, { bold: true, size: 26 }),
    ...lines.map((line) => paragraph(line)),
  ]),
].join('');

const documentXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:wpc="http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas"
 xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
 xmlns:o="urn:schemas-microsoft-com:office:office"
 xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"
 xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math"
 xmlns:v="urn:schemas-microsoft-com:vml"
 xmlns:wp14="http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing"
 xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing"
 xmlns:w10="urn:schemas-microsoft-com:office:word"
 xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"
 xmlns:w14="http://schemas.microsoft.com/office/word/2010/wordml"
 xmlns:wpg="http://schemas.microsoft.com/office/word/2010/wordprocessingGroup"
 xmlns:wpi="http://schemas.microsoft.com/office/word/2010/wordprocessingInk"
 xmlns:wne="http://schemas.microsoft.com/office/word/2006/wordml"
 xmlns:wps="http://schemas.microsoft.com/office/word/2010/wordprocessingShape"
 mc:Ignorable="w14 wp14">
  <w:body>
    ${docBody}
    <w:sectPr>
      <w:pgSz w:w="11906" w:h="16838"/>
      <w:pgMar w:top="1440" w:right="1440" w:bottom="1440" w:left="1440" w:header="708" w:footer="708" w:gutter="0"/>
    </w:sectPr>
  </w:body>
</w:document>`;

const contentTypesXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
</Types>`;

const relsXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
</Relationships>`;

const docRelsXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"/>`;

const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'presentation-docx-'));
fs.mkdirSync(path.join(tmpDir, '_rels'), { recursive: true });
fs.mkdirSync(path.join(tmpDir, 'word', '_rels'), { recursive: true });

fs.writeFileSync(path.join(tmpDir, '[Content_Types].xml'), contentTypesXml);
fs.writeFileSync(path.join(tmpDir, '_rels', '.rels'), relsXml);
fs.writeFileSync(path.join(tmpDir, 'word', 'document.xml'), documentXml);
fs.writeFileSync(path.join(tmpDir, 'word', '_rels', 'document.xml.rels'), docRelsXml);

try {
  fs.rmSync(docxPath, { force: true });
} catch (_) {}

const archiveName = 'presentation_text_by_slide.docx';
execFileSync('/usr/bin/zip', ['-qr', archiveName, '[Content_Types].xml', '_rels', 'word'], { cwd: tmpDir });
fs.copyFileSync(path.join(tmpDir, archiveName), docxPath);

console.log(outputPath);
console.log(docxPath);
