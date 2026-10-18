# Zulassungsdienst an der Lippe · Lünen

## 1. Projektbeschreibung
Offizielle Website für den Kfz-Zulassungsdienst an der Lippe in Lünen (NRW). Bürokratie-Outsourcing für Privatpersonen und Gewerbetreibende: Anmeldung, Ummeldung, Abmeldung, Wunschkennzeichen, Kennzeichenprägung, Hol- & Bringservice sowie Online-Zulassung bundesweit. Zielregion: Lünen, Dortmund, Bergkamen, Werne, Selm, Kreis Unna, Kamen, Schwerte. Markenfarben: Tiefblau #0A1F44 · WhatsApp-Grün #25D366 · Off-White #F8F9FA.

## 2. Seitenstruktur
- `/` — Startseite (Hero, Trust, Vorteile, Leistungen, Standort, Einsatzgebiet, Bewertungen, CTA)
- `/leistungen` — Leistungen-Übersicht (10 Leistungen)
- `/leistungen/:slug` — Leistung Detail (Ablauf, Preis, Unterlagen, FAQ)
- `/staedte/:slug` — Stadt-Landing-Pages (8 Städte)
- `*` — 404 NotFound

## 3. Core Features
- [x] Startseite mit allen Sections
- [x] Leistungen-Übersichtsseite
- [x] Leistungs-Detailseite (Template, 10 Leistungen)
- [x] Stadt-Landing-Pages (Template, 8 Städte)
- [x] Header (sticky, transparent → weiß beim Scroll, Dropdown-Mega-Menu)
- [x] Footer (kombiniert, eine Leiste)
- [x] WhatsApp-Widget (floating, global)
- [x] Kontakt-/Anfrage-Formular (readdy.ai form)
- [ ] Ratgeber-Hub (Phase 2)
- [ ] FAQ-Seite (Phase 2)
- [ ] Impressum / Datenschutz (Phase 2)

## 4. Datenmodell
Kein Datenbankbedarf — alle Inhalte als Mock-Daten in src/mocks/.

## 5. Backend / Third-party Integrationen
- Supabase: nicht benötigt
- Shopify: nicht benötigt
- Stripe: nicht benötigt
- Formulare: readdy.ai Formular-Service (https://readdy.ai/api/form/d7nrp1nu2vahpmebfrog)

## 6. Entwicklungsphasen

### Phase 1: Startseite + globale Elemente + Leistungen + Städte ✅
- Ziel: Vollständig nutzbare Website mit allen 3 Seitentypen
- Deliverable: Startseite, Leistungen-Übersicht, Leistungs-Detail-Template, Stadt-Landing-Template

### Phase 2: Info-Seiten, FAQ, Ratgeber-Hub
- Ziel: Zusatzseiten für SEO und Konversion
- Deliverable: FAQ, Ratgeber-Hub, Impressum, Datenschutz, Kontaktseite
