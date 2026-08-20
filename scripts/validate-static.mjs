import { readFile, readdir, stat } from 'node:fs/promises';
import { extname, join } from 'node:path';

const root = new URL('../', import.meta.url);
const requiredFiles = [
  'index.html',
  'styles.css',
  'app.js',
  'schema/openapi.yaml',
  'public/assets/hero.webp',
  'public/assets/hero-768.webp',
  'public/assets/hero-1440.webp',
  'public/assets/merchant-bg.jpg',
  'public/assets/personal-service.png',
];

const errors = [];

for (const file of requiredFiles) {
  try {
    const info = await stat(new URL(file, root));
    if (!info.isFile() || info.size === 0) errors.push(`${file} is missing or empty`);
  } catch {
    errors.push(`${file} is missing`);
  }
}

for (const file of ['index.html', 'styles.css', 'app.js']) {
  const text = await readFile(new URL(file, root), 'utf8');
  if (/https?:\/\//i.test(text)) errors.push(`${file} contains a runtime external URL`);
}

const html = await readFile(new URL('index.html', root), 'utf8');
for (const id of ['site-header', 'main-content', 'tracking-input', 'merchant', 'franchise', 'news', 'service-dialog']) {
  if (!html.includes(`id="${id}"`)) errors.push(`index.html is missing #${id}`);
}

const dataDirectory = new URL('public/data/', root);
for (const file of await readdir(dataDirectory)) {
  if (extname(file) !== '.json') continue;
  try {
    JSON.parse(await readFile(join(dataDirectory.pathname, file), 'utf8'));
  } catch (error) {
    errors.push(`${file} is not valid JSON: ${error.message}`);
  }
}

if (errors.length) {
  console.error(errors.map((error) => `- ${error}`).join('\n'));
  process.exit(1);
}

console.log('Static boundary, required assets, DOM hooks, and JSON fixtures validated.');
