// Rendert jede Route der React-App zu einer fertigen HTML-Datei (Inhalt direkt im Quelltext).
// Nutzung: npm run build:static  → Ergebnis im Ordner /site (wird von Vercel ausgeliefert)
import { chromium } from 'playwright';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const OUT = path.resolve('out');
const SITE = path.resolve('site');
const read = (f) => fs.readFileSync(f, 'utf8');
const slugs = (file) => [...read(file).matchAll(/slug: ?'([^']+)'/g)].map((m) => m[1]);

export const ROUTES = [
  '/', '/leistungen', '/standorte', '/vorteile', '/unterlagen', '/faq', '/kontakt',
  '/blog', '/blog/auto-anmelden-luenen', '/blog/kfz-zulassung-luenen-kosten-2026',
  '/impressum', '/datenschutz', '/danke', '/404',
  ...slugs('src/mocks/leistungen.ts').map((s) => `/leistungen/${s}`),
  ...slugs('src/mocks/staedte.ts').map((s) => `/kfz-zulassung/${s}`),
];

const mime = { '.js': 'text/javascript', '.css': 'text/css', '.html': 'text/html', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.woff': 'font/woff', '.ttf': 'font/ttf', '.ico': 'image/x-icon', '.json': 'application/json' };
const server = http.createServer((req, res) => {
  let f = path.join(OUT, decodeURIComponent(req.url.split('?')[0]));
  if (!f.startsWith(OUT) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) f = path.join(OUT, 'index.html');
  res.writeHead(200, { 'Content-Type': mime[path.extname(f)] || 'application/octet-stream' });
  fs.createReadStream(f).pipe(res);
});
await new Promise((r) => server.listen(4173, r));

fs.rmSync(SITE, { recursive: true, force: true });
fs.cpSync(OUT, SITE, { recursive: true });

const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
// Cookie-Banner nicht ins HTML backen (erscheint im Browser weiterhin per JS)
await ctx.addInitScript(() => {
  try { localStorage.setItem('adl-cookie-consent-v1', JSON.stringify({ essential: true, analytics: false, maps: false, decided: true })); } catch { /* */ }
});
// Externe Anfragen beim Rendern blockieren
await ctx.route(/^https?:\/\/(?!localhost:4173)/, (r) => r.abort());

const pages = [];
for (const route of ROUTES) {
  const page = await ctx.newPage();
  await page.goto(`http://localhost:4173${route}`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2500); // Typewriter-/Einblend-Animationen abschließen
  let html = await page.evaluate(() => '<!doctype html>\n' + document.documentElement.outerHTML);
  if (route === '/404') html = html.replace(/<meta name="robots" content="[^"]*">/, '<meta name="robots" content="noindex, follow">');
  const file = route === '/' ? 'index.html' : route === '/404' ? '404.html' : `${route.slice(1)}.html`;
  fs.mkdirSync(path.dirname(path.join(SITE, file)), { recursive: true });
  fs.writeFileSync(path.join(SITE, file), html);
  const h1 = await page.$$eval('h1', (els) => els.map((e) => e.textContent.trim()));
  const info = await page.evaluate(() => ({
    title: document.title,
    description: document.querySelector('meta[name="description"]')?.content || '',
    robots: document.querySelector('meta[name="robots"]')?.content || '',
    text: (document.querySelector('main') || document.body).innerText,
  }));
  if (route !== '/404') pages.push({ route, ...info, noindex: /noindex/.test(info.robots) });
  console.log(route.padEnd(45), 'H1:', JSON.stringify(h1));
  await page.close();
}
await browser.close();
server.close();

// ── sitemap.xml, llms.txt, llms-full.txt aus den gerenderten Seiten ──
const BASE = 'https://zulassungen-adl.de';
const today = new Date().toISOString().slice(0, 10);
const idx = pages.filter((p) => !p.noindex);
const prio = (r) => (r === '/' ? '1.0' : r.split('/').length === 2 ? '0.9' : '0.8');
fs.writeFileSync(path.join(SITE, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  idx.map((p) => `  <url>\n    <loc>${BASE}${p.route}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${prio(p.route)}</priority>\n  </url>`).join('\n') +
  `\n</urlset>\n`);

const group = (pre) => idx.filter((p) => pre(p.route));
const line = (p) => `- [${p.title.split('|')[0].trim()}](${BASE}${p.route}): ${p.description}`;
const intro = `# Zulassungsdienst an der Lippe

> Kfz-Zulassungsdienst in Lünen (NRW, Kreis Unna): Anmeldung, Ummeldung, Abmeldung, Wunschkennzeichen, Kurzzeitkennzeichen, Kennzeichenprägung, Hol- & Bringservice sowie Online-Zulassung bundesweit – zu Festpreisen.

- Adresse: Willy-Brandt-Platz 6, 44532 Lünen
- Telefon / WhatsApp: +49 2306 3548896
- E-Mail: service@zulassungen-adl.de
- Öffnungszeiten: Mo–Fr 09:30–13:30 und 15:00–19:00, Sa 12:00–16:00
- Einzugsgebiet: Lünen, Dortmund, Bergkamen, Werne, Selm, Kamen, Schwerte, Kreis Unna
- Betreiber: HSZ Digital GmbH
`;
fs.writeFileSync(path.join(SITE, 'llms.txt'), intro +
  `\n## Hauptseiten\n${group((r) => !/^\/(leistungen|kfz-zulassung|blog)\//.test(r)).map(line).join('\n')}\n` +
  `\n## Leistungen\n${group((r) => r.startsWith('/leistungen/')).map(line).join('\n')}\n` +
  `\n## Standorte\n${group((r) => r.startsWith('/kfz-zulassung/')).map(line).join('\n')}\n` +
  `\n## Ratgeber\n${group((r) => r.startsWith('/blog/')).map(line).join('\n')}\n` +
  `\n## Optional\n- [Vollständiger Seiteninhalt](${BASE}/llms-full.txt): Alle Seiteninhalte als Text\n`);
const clean = (s) => s.replace(/\n{3,}/g, '\n\n').replace(/[ \t]+\n/g, '\n').trim();
fs.writeFileSync(path.join(SITE, 'llms-full.txt'), intro + '\n' +
  idx.map((p) => `\n---\n\n# ${p.title}\nURL: ${BASE}${p.route}\n\n${p.description}\n\n${clean(p.text)}\n`).join(''));
console.log('sitemap/llms:', idx.length, 'indexierbare Seiten,', pages.length - idx.length, 'noindex');
