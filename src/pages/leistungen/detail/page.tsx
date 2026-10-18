import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import useSEO from '@/hooks/useSEO';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import WhatsAppWidget from '@/components/feature/WhatsAppWidget';
import { leistungen } from '@/mocks/leistungen';
import InlineAnfrageForm from './components/InlineAnfrageForm';

type OeffnungRow = { tag: string; zeiten: string[]; geschlossen?: boolean };
const oeffnungszeiten: OeffnungRow[] = [
  { tag: 'Mo bis Fr', zeiten: ['09.30 – 13.30 Uhr', '15.00 – 19.00 Uhr'] },
  { tag: 'Samstag', zeiten: ['12.00 – 16.00 Uhr'] },
  { tag: 'Sonntag', zeiten: ['Geschlossen'], geschlossen: true },
];

// Flatten into individual grid rows so every text pair shares the exact same row
type FlatRow = { tag: string | null; zeit: string; geschlossen?: boolean; isFirst: boolean };
const flatRows: FlatRow[] = oeffnungszeiten.flatMap((o) =>
  o.zeiten.map((z, j) => ({
    tag: j === 0 ? o.tag : null,
    zeit: z,
    geschlossen: o.geschlossen,
    isFirst: j === 0,
  }))
);

const regionen = ['Dortmund', 'Bergkamen', 'Werne', 'Selm', 'Kreis Unna', 'Kamen', 'Schwerte'];

const BASE_URL = (typeof import.meta.env !== 'undefined' && import.meta.env.VITE_SITE_URL)
  ? import.meta.env.VITE_SITE_URL
  : 'https://zulassungen-adl.de';

const LeistungDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const leistung = leistungen.find((l) => l.slug === slug);
  const andereLeistungen = leistungen.filter((l) => l.slug !== slug).slice(0, 5);

  useSEO({
    title: leistung
      ? `${leistung.titel} — ${leistung.preis} | Zulassungsdienst an der Lippe`
      : 'Leistung nicht gefunden | Zulassungsdienst an der Lippe',
    description: leistung?.beschreibung ?? 'Diese Leistung wurde nicht gefunden.',
    keywords: leistung
      ? `${leistung.titel} Lünen, ${leistung.slug.replace(/-/g, ' ')} Zulassungsdienst`
      : 'Zulassungsdienst Lünen',
    canonical: slug ? `/leistungen/${slug}` : '/leistungen',
    ogType: 'product',
    ogLocale: 'de_DE',
    ogImage: leistung?.bild,
    schema: leistung
      ? {
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: leistung.titel,
          description: leistung.beschreibung,
          url: `${BASE_URL}/leistungen/${leistung.slug}`,
          brand: { '@type': 'Brand', name: 'Zulassungsdienst an der Lippe' },
          offers: {
            '@type': 'Offer',
            priceCurrency: 'EUR',
            price: leistung.preis.replace(/[^\d.,]/g, '').replace(',', '.').split(' ')[0] || '0',
            availability: 'https://schema.org/InStock',
            url: `${BASE_URL}/leistungen/${leistung.slug}`,
          },
          aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '157' },
        }
      : undefined,
  });

  if (!leistung) {
    return (
      <div className="font-sans">
        <Header />
        <div className="pt-32 text-center min-h-screen">
          <h1 className="text-2xl font-bold text-navy-900">Leistung nicht gefunden</h1>
          <Link to="/leistungen" className="text-navy-700 underline mt-4 inline-block cursor-pointer">
            Zurück zur \u00dcbersicht
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="font-sans">
      <Header />
      <main className="pt-20">
        {/* — HERO ——————————————————————————————————————— */}
        <section className="bg-navy-950 pt-10 pb-12">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-white/40 text-sm mb-8">
              <Link to="/" className="hover:text-white/70 cursor-pointer transition-colors">Startseite</Link>
              <div className="w-3 h-3 flex items-center justify-center">
                <i className="ri-arrow-right-s-line"></i>
              </div>
              <Link to="/leistungen" className="hover:text-white/70 cursor-pointer transition-colors">Leistungen</Link>
              <div className="w-3 h-3 flex items-center justify-center">
                <i className="ri-arrow-right-s-line"></i>
              </div>
              <span className="text-white/70">{leistung.titel}</span>
            </nav>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <div className="max-w-2xl">
                <p className="text-xs font-bold text-whatsapp uppercase tracking-widest mb-3">
                  {leistung.eyebrow}
                </p>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4">
                  {leistung.titel}
                  <span className="sr-only"> in Lünen</span>
                </h1>
                <div className="flex flex-wrap gap-3 mb-6">
                  {leistung.highlights.map((h) => {
                    const isInklusive = h.startsWith('Inkl. ');
                    return (
                      <div
                        key={h}
                        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm whitespace-nowrap ${
                          isInklusive
                            ? 'bg-whatsapp/15 border-whatsapp/30 text-white'
                            : 'bg-white/10 border-white/15 text-white/70'
                        }`}
                      >
                        <div className="w-4 h-4 flex items-center justify-center shrink-0">
                          <i className="ri-checkbox-circle-fill text-whatsapp text-sm"></i>
                        </div>
                        {isInklusive ? (
                          <>
                            <span className="text-whatsapp font-bold text-xs">Inkl.</span>
                            <span>{h.slice(6)}</span>
                          </>
                        ) : (
                          <span>{h}</span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="#anfrage-formular"
                    className="inline-flex items-center justify-center gap-2 bg-whatsapp text-white font-bold px-6 py-3.5 rounded-xl text-sm whitespace-nowrap cursor-pointer hover:bg-green-600 transition-colors"
                  >
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-file-list-3-line"></i>
                    </div>
                    Jetzt starten
                  </a>
                  <a
                    href="tel:+4923063548896"
                    className="inline-flex items-center justify-center gap-2 border border-white/20 bg-white/5 text-white font-bold px-6 py-3.5 rounded-xl text-sm whitespace-nowrap cursor-pointer hover:bg-white/10 transition-colors"
                  >
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-phone-fill"></i>
                    </div>
                    02306 3548896
                  </a>
                </div>
              </div>

              {/* Preis-Badge rechts */}
              <div className="hidden lg:flex flex-col items-end gap-3 shrink-0">
                <div className="bg-white/5 border border-white/10 rounded-2xl px-10 py-8 text-right">
                  <div className="text-6xl font-mono font-extrabold text-whatsapp">{leistung.preis}</div>
                  <p className="text-white/30 text-xs mt-2">{leistung.bearbeitungszeit}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* —— MULTI-STEP ANFRAGE-FORMULAR (direkt nach Hero) ——— */}
        <section className="bg-navy-950 py-8 md:py-14">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 items-start">

              {/* Form — 3/5 Breite */}
              <div className="lg:col-span-3">
                <InlineAnfrageForm
                  serviceSlug={leistung.slug}
                  serviceName={leistung.titel}
                  servicePreis={leistung.preis}
                />
              </div>

              {/* Rechte Info-Spalte — 2/5 Breite */}
              <div className="lg:col-span-2 space-y-4">
                {/* Preis-Highlight */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <div className="space-y-2.5">
                    {leistung.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2.5">
                        <div className="w-5 h-5 flex items-center justify-center shrink-0">
                          <i className="ri-checkbox-circle-fill text-whatsapp text-base"></i>
                        </div>
                        <span className="text-white/70 text-sm">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Vertrauen */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-3">Warum Zulassungsdienst an der Lippe?</p>
                  <div className="space-y-3">
                    {[
                      { icon: 'ri-time-line', text: 'Rückruf meist innerhalb von 5 Minuten' },
                      { icon: 'ri-shield-check-line', text: 'T\u00dcV-zertifizierter Zulassungsdienst' },
                      { icon: 'ri-map-pin-2-line', text: 'Vor Ort in Lünen · Kreis Unna' },
                      { icon: 'ri-whatsapp-fill', text: 'WhatsApp 24/7 verfügbar' },
                    ].map((item) => (
                      <div key={item.text} className="flex items-center gap-3">
                        <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-lg shrink-0">
                          {item.icon === 'ri-whatsapp-fill' ? (
                            <img src="/images/whatsapp-bf1279.svg" className="w-full h-full object-contain" alt="WhatsApp" loading="lazy" decoding="async" />
                          ) : (
                            <i className={`${item.icon} text-white/60 text-sm`}></i>
                          )}
                        </div>
                        <span className="text-white/60 text-sm">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* WhatsApp Alternative */}
                <a
                  href={`https://wa.me/4923063548896?text=${encodeURIComponent(`Hallo, ich möchte ${leistung.titel} anfragen.`)}`}
                  target="_blank" rel="nofollow noreferrer"
                  className="flex items-center gap-3 bg-whatsapp/10 border border-whatsapp/20 rounded-2xl p-4 hover:bg-whatsapp/20 transition-colors cursor-pointer group"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-whatsapp rounded-xl shrink-0">
                    <img src="/images/whatsapp-bf1279.svg" className="w-full h-full object-contain" alt="WhatsApp" loading="lazy" decoding="async" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Lieber per WhatsApp?</p>
                    <p className="text-white/50 text-xs">Antwort innerhalb von 5 Min.</p>
                  </div>
                  <div className="ml-auto w-5 h-5 flex items-center justify-center">
                    <i className="ri-arrow-right-line text-white/40 group-hover:text-white/70 transition-colors"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* —— HAUPTINHALT + SIDEBAR ——————————————————————————————————————— */}
        <section className="bg-offwhite py-14">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

              {/* Hauptinhalt */}
              <div className="lg:col-span-2 space-y-8">

                {/* Ablauf */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100">
                  <h2 className="text-xl font-extrabold text-navy-900 mb-6">So funktioniert's</h2>
                  <div className="space-y-5">
                    {leistung.schritte.map((s, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="w-9 h-9 flex items-center justify-center bg-navy-900 text-white rounded-full font-bold text-sm shrink-0">
                            {i + 1}
                          </div>
                          {i < leistung.schritte.length - 1 && (
                            <div className="w-px flex-1 bg-navy-100 mt-2 mb-0 min-h-[24px]"></div>
                          )}
                        </div>
                        <div className="pb-4 flex-1">
                          <div className="font-bold text-navy-900 text-base mb-1">{s.titel}</div>
                          <p className="text-gray-500 text-sm leading-relaxed">{s.beschreibung}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Unterlagen */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100">
                  <h2 className="text-xl font-extrabold text-navy-900 mb-4">Benötigte Unterlagen</h2>
                  <ul className="space-y-2.5">
                    {leistung.unterlagen.map((u, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 flex items-center justify-center text-whatsapp mt-0.5 shrink-0">
                          <i className="ri-checkbox-circle-fill text-lg"></i>
                        </div>
                        <span className="text-gray-700 text-sm">{u}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 p-4 bg-navy-50 rounded-xl flex items-start gap-3">
                    <div className="w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                      <i className="ri-information-line text-navy-700 text-base"></i>
                    </div>
                    <p className="text-navy-700 text-xs leading-relaxed">
                      Nicht sicher, ob Ihre Unterlagen vollständig sind? Schicken Sie uns einfach eine
                      WhatsApp — wir prüfen kostenlos vorab.
                    </p>
                  </div>
                </div>

                {/* FAQ */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100">
                  <h2 className="text-xl font-extrabold text-navy-900 mb-4">Häufige Fragen</h2>
                  <div className="space-y-2">
                    {leistung.faq.map((f, i) => (
                      <div key={i} className="border border-gray-100 rounded-xl overflow-hidden">
                        <button
                          type="button"
                          className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left cursor-pointer hover:bg-offwhite transition-colors"
                          onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        >
                          <span className="font-semibold text-navy-900 text-sm">{f.frage}</span>
                          <div className={`w-6 h-6 flex items-center justify-center shrink-0 rounded-full transition-colors ${openFaq === i ? 'bg-navy-900' : 'bg-navy-50'}`}>
                            <i className={`ri-${openFaq === i ? 'subtract' : 'add'}-line text-xs ${openFaq === i ? 'text-white' : 'text-navy-700'}`}></i>
                          </div>
                        </button>
                        {openFaq === i && (
                          <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-3">
                            {f.antwort}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-4">
                {/* Preis-Box */}
                <div className="bg-navy-900 rounded-2xl p-6">
                  <a
                    href="#anfrage-formular"
                    className="w-full flex items-center justify-center gap-2 bg-whatsapp text-white font-bold py-3.5 rounded-xl text-sm whitespace-nowrap cursor-pointer hover:bg-green-600 transition-colors"
                  >
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-file-list-3-line"></i>
                    </div>
                    {leistung.titel} starten
                  </a>
                  <a
                    href="tel:+4923063548896"
                    className="w-full flex items-center justify-center gap-2 mt-2 border border-white/20 text-white font-semibold py-3 rounded-xl text-sm whitespace-nowrap cursor-pointer hover:bg-white/10 transition-colors"
                  >
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-phone-fill"></i>
                    </div>
                    02306 3548896
                  </a>
                </div>

                {/* Weitere Leistungen */}
                <div className="bg-white rounded-2xl p-5 border border-gray-100">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                    Weitere Leistungen
                  </div>
                  <div className="space-y-1">
                    {andereLeistungen.map((l) => (
                      <Link
                        key={l.slug}
                        to={`/leistungen/${l.slug}`}
                        className="flex items-center gap-3 px-2 py-2.5 rounded-lg hover:bg-offwhite cursor-pointer group"
                      >
                        <div className="w-7 h-7 flex items-center justify-center bg-navy-50 rounded-lg shrink-0">
                          <i className={`${l.icon} text-navy-700 text-sm`}></i>
                        </div>
                        <span className="text-sm text-gray-700 flex-1 group-hover:text-navy-900 transition-colors">{l.titel}</span>
                        <span className="text-xs text-gray-400 whitespace-nowrap">{l.preis}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* —— SECTION 07 — BERATUNGS-CTA ——————————————————————————————————————— */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={leistung.bild}
              alt={`${leistung.titel} - Beratung`}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-navy-950/85"></div>
          </div>
          <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-6 text-center">
            <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-3 md:mb-4">
              Noch Fragen? Wir beraten Sie gerne.
            </h2>
            <p className="text-white/60 text-sm md:text-base leading-relaxed mb-7 md:mb-10 max-w-xl mx-auto">
              Rufen Sie uns an oder schreiben Sie uns per WhatsApp. Unser Team hilft Ihnen bei allen
              Fragen rund um Ihre Kfz-Anmeldung in Lünen.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/4923063548896"
                target="_blank"
                rel="nofollow noreferrer"
                className="inline-flex items-center gap-2 bg-whatsapp text-white font-bold px-7 py-4 rounded-xl text-base whitespace-nowrap cursor-pointer hover:bg-green-600 transition-colors"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <img src="/images/whatsapp-bf1279.svg" className="w-full h-full object-contain" alt="WhatsApp" loading="lazy" decoding="async" />
                </div>
                WhatsApp schreiben
              </a>
              <a
                href="tel:+4923063548896"
                className="inline-flex items-center gap-2 border border-white/30 bg-white/10 text-white font-bold px-7 py-4 rounded-xl text-base whitespace-nowrap cursor-pointer hover:bg-white/20 transition-colors"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-phone-fill text-lg"></i>
                </div>
                02306 3548896
              </a>
            </div>
          </div>
        </section>

        {/* —— SECTION 08 — STANDORT ——————————————————————————————————————— */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-10">
              <span className="text-xs font-semibold text-navy-700 uppercase tracking-widest bg-navy-50 px-3 py-1 rounded-lg">
                Standort
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-navy-900 mt-4 mb-2">
                Besuchen Sie uns in Lünen.
              </h2>
              <p className="text-gray-500 text-sm max-w-lg mx-auto">
                Unser Büro befindet sich zentral am Willy-Brandt-Platz mit guter Anbindung und
                Parkmöglichkeiten in der Nähe.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">
              {/* Links 40% */}
              <div className="lg:col-span-2 flex flex-col gap-4">
                <div className="bg-offwhite rounded-2xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 flex items-center justify-center bg-navy-900 rounded-xl shrink-0">
                      <i className="ri-map-pin-2-fill text-white text-sm"></i>
                    </div>
                    <div className="font-bold text-navy-900 text-sm">Adresse</div>
                  </div>
                  <address className="not-italic text-gray-700 text-sm leading-relaxed mb-2">
                    <strong className="text-navy-900 block">Zulassungsdienst an der Lippe</strong>
                    Willy-Brandt-Platz 6 · 44532 Lünen
                  </address>
                  <a
                    href="https://maps.google.com/?q=Willy-Brandt-Platz+6+44532+Lünen"
                    target="_blank"
                    rel="nofollow noreferrer"
                    className="inline-flex items-center gap-1 text-navy-700 text-xs font-semibold hover:text-navy-900 cursor-pointer"
                  >
                    <div className="w-3 h-3 flex items-center justify-center">
                      <i className="ri-navigation-line text-xs"></i>
                    </div>
                    Route planen →
                  </a>
                </div>

                <div className="bg-offwhite rounded-2xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 flex items-center justify-center bg-navy-900 rounded-xl shrink-0">
                      <i className="ri-time-fill text-white text-sm"></i>
                    </div>
                    <div className="font-bold text-navy-900 text-sm">Öffnungszeiten&nbsp;</div>
                  </div>
                  <div>
                    <p className="text-[10px] font-extrabold text-navy-700 uppercase tracking-widest mb-3">Öffnungszeiten</p>
                    {/* CSS-Grid: jede Zeile bekommt exakt dieselbe Zeilenhöhe */}
                    <div
                      className="grid gap-y-2"
                      style={{ gridTemplateColumns: '5rem 1px 1fr' }}
                    >
                      {flatRows.map((row, idx) => (
                        <>
                          {/* Spalte 1: Wochentag (nur bei erster Zeile eines Eintrags) */}
                          <div key={`tag-${idx}`} className="flex items-center pr-2">
                            {row.tag !== null && (
                              <span className={`text-sm font-semibold leading-none ${row.geschlossen ? 'text-gray-400' : 'text-navy-900'}`}>
                                {row.tag}
                              </span>
                            )}
                          </div>
                          {/* Spalte 2: Trennlinie */}
                          <div key={`sep-${idx}`} className="flex items-center justify-center">
                            <div className={`w-px h-3.5 ${row.geschlossen ? 'bg-gray-300' : 'bg-navy-300'}`}></div>
                          </div>
                          {/* Spalte 3: Uhrzeit */}
                          <div key={`zeit-${idx}`} className="flex items-center pl-3">
                            <span className={`text-sm leading-none ${row.geschlossen ? 'text-gray-400' : 'text-navy-800 font-medium'}`}>
                              {row.zeit}
                            </span>
                          </div>
                        </>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-offwhite rounded-2xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 flex items-center justify-center bg-navy-900 rounded-xl shrink-0">
                      <i className="ri-phone-fill text-white text-sm"></i>
                    </div>
                    <div className="font-bold text-navy-900 text-sm">Kontakt</div>
                  </div>
                  <div className="space-y-1.5">
                    <a href="tel:+4923063548896" className="flex items-center gap-2 text-navy-700 text-sm font-semibold hover:text-navy-900 cursor-pointer">
                      <div className="w-3 h-3 flex items-center justify-center">
                        <i className="ri-phone-line text-xs"></i>
                      </div>
                      02306 3548896
                    </a>
                    <a href="mailto:service@zulassungen-adl.de" className="flex items-center gap-2 text-navy-700 text-sm font-semibold hover:text-navy-900 cursor-pointer">
                      <div className="w-3 h-3 flex items-center justify-center">
                        <i className="ri-mail-line text-xs"></i>
                      </div>
                      service@zulassungen-adl.de
                    </a>
                  </div>
                </div>

                <div className="bg-navy-900 rounded-2xl p-5">
                  <div className="font-bold text-white text-sm mb-2">Auch für Kunden aus der Region</div>
                  <div className="flex flex-wrap gap-1.5">
                    {regionen.map((r) => (
                      <span key={r} className="bg-white/10 text-white/70 text-xs px-2.5 py-1 rounded-full">
                        {r}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Rechts 60% — Google Maps */}
              <div className="lg:col-span-3 rounded-2xl overflow-hidden relative min-h-[360px] lg:min-h-[480px]">
                <iframe
                  title="Zulassungsdienst an der Lippe Lünen"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2476.4!2d7.5248!3d51.6168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8e0a11e4a5c0d%3A0x1!2sWilly-Brandt-Platz+6%2C+44532+L%C3%BCnen!5e0!3m2!1sde!2sde!4v1699000000000!5m2!1sde!2sde"
                  width="100%"
                  height="100%"
                  className="w-full h-full absolute inset-0"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="absolute bottom-4 left-4">
                  <a
                    href="https://maps.google.com/?q=Willy-Brandt-Platz+6+44532+Lünen"
                    target="_blank"
                    rel="nofollow noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-navy-900 font-semibold text-xs px-4 py-2.5 rounded-xl hover:bg-navy-50 transition-colors cursor-pointer whitespace-nowrap"
                    style={{ boxShadow: '0 2px 12px 0 rgba(0,0,0,0.12)' }}
                  >
                    <div className="w-3 h-3 flex items-center justify-center">
                      <i className="ri-navigation-fill text-navy-700 text-xs"></i>
                    </div>
                    Route planen
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default LeistungDetailPage;