# zulassungen-adl.de – Zulassungsdienst an der Lippe

Nachbau der Readdy-Seite (React/Vite), als **vorgerendertes HTML** auf Vercel.

- Quellcode: `src/` (React, Tailwind)
- Ausgelieferte Seite: `site/` (jede Seite als fertige HTML-Datei, Inhalt direkt im Quelltext)
- Vercel liefert `site/` ohne Build aus (siehe `vercel.json`, inkl. Security-Header)

## Änderungen veröffentlichen
```bash
npm install
CHROMIUM_PATH=/pfad/zu/chromium npm run build:static   # baut + rendert alle Seiten nach /site
git add -A && git commit -m "Update" && git push
```
`build:static` erzeugt automatisch `sitemap.xml`, `llms.txt` und `llms-full.txt` (nur indexierbare Seiten).
