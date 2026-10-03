// This checks broken local asset/page links, not layout or accessibility quality.
import { readFile, access } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const file = fileURLToPath(new URL('../public/index.html', import.meta.url));
const text = await readFile(file, 'utf8');
let checked = 0;
for (const [, target] of text.matchAll(/(?:href|src)="([^"]+)"/g)) {
  if (/^(?:https?:|mailto:|#)/.test(target)) continue;
  await access(resolve(dirname(file), target.split('#')[0])); checked++;
}
console.log(`PASS: ${checked} local page/asset links exist. Follow docs/VERIFICATION.md for browser checks.`);
