// Fails if any relative link in the site points at a missing file, or any #anchor at a missing id.
// Run: node scripts/check-links.mjs
import { readFileSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const pages = ['index.html', 'client-map.html'];
let bad = 0;

for (const page of pages) {
  const html = readFileSync(resolve(root, page), 'utf8');
  const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map(m => m[1]));
  for (const [, url] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (/^(https?:|mailto:|data:|\{\{)/.test(url)) continue;
    if (url.startsWith('#')) {
      if (!ids.has(url.slice(1))) { console.error(`${page}: missing anchor ${url}`); bad++; }
    } else if (!existsSync(resolve(root, url.split(/[?#]/)[0]))) {
      console.error(`${page}: missing file ${url}`); bad++;
    }
  }
}

// The page must not depend on the Claude Design preview to work: chat and form need real fallbacks.
const index = readFileSync(resolve(root, 'index.html'), 'utf8');
for (const must of ['botOffline', 'FORM_ENDPOINT', '<noscript>', '__dcContentKeyed']) {
  if (!index.includes(must)) { console.error(`index.html: missing ${must}`); bad++; }
}

console.log(bad ? `${bad} problem(s)` : 'links ok');
process.exit(bad ? 1 : 0);
