import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import useSEO from '@/hooks/useSEO';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import WhatsAppWidget from '@/components/feature/WhatsAppWidget';
import { staedte } from '@/mocks/staedte';
import { leistungen } from '@/mocks/leistungen';

const lokalInfoMap: Record<string, { text1: string; text2: string; text3: string }> = {
  dortmund: {
    text1: 'Aus dem Norden Dortmunds erreichen Sie uns über die A1 in rund 15 Minuten. Unser Büro liegt zentral am Willy-Brandt-Platz in Lünen — mit direkter Autobahnanbindung und ausreichend Parkmöglichkeiten vor Ort.',
    text2: 'Wir übernehmen die komplette Kfz-Zulassung für Dortmunder Kunden — Sie können wahlweise persönlich vorbeikommen oder unseren Hol- und Bringservice nutzen, der besonders für Autohäuser im Raum Dortmund attraktiv ist. Typische Anfahrtszeit per A1: ca. 15–20 Minuten.',
    text3: 'Die Dortmunder Zulassungsstelle ist oft wochenlang ausgebucht. Bei uns erledigen Sie Kfz-Anmeldung, Ummeldung oder Abmeldung schnell und unkompliziert — ohne Warteschlange, ohne Terminsuche.',
  },
  bergkamen: {
    text1: 'Bergkamen grenzt direkt an Lünen — von Bergkamen-Mitte sind es nur etwa 10 Minuten Fahrzeit zu unserem Büro am Willy-Brandt-Platz. Kaum eine Region profitiert so stark von unserer Lage wie die Bergkamener.',
    text2: 'Für alle Kfz-Zulassungen im Kreis Unna — also auch für UN-Kennzeichen — sind wir bestens gerüstet. Unser Team kennt die lokalen Besonderheiten der Zulassungsstelle Kreis Unna und erledigt Ihre Anmeldung, Ummeldung oder Abmeldung zuverlässig und zügig.',
    text3: 'Nutzen Sie unseren Hol- & Bringservice direkt nach Bergkamen — ideal für Berufstätige, die tagsüber keine Zeit für Behördengänge haben. Einfach per WhatsApp Termin vereinbaren, wir kommen zu Ihnen.',
  },
  werne: {
    text1: 'Werner Kunden erreichen uns in etwa 15 Minuten über die B54 oder die Umgehungsstraße nach Lünen. Alternativ bieten wir einen Hol- & Bringservice, der bis nach Werne fährt.',
    text2: 'Werne an der Lippe liegt in unserem Kerngebiet — wir kennen die Region und können schnell und zuverlässig reagieren. Ob Kfz-Anmeldung nach einem Gebrauchtwagenkauf oder Ummeldung nach einem Umzug nach Werne: Wir erledigen alles für Sie schnell und unkompliziert.',
    text3: 'Besonders praktisch: Für Werner Kunden bieten wir auch die bundesweite Online-Zulassung an. Dokumente einfach per WhatsApp einschicken — kein Behördengang, kein Zeitaufwand.',
  },
  selm: {
    text1: 'Selm im Kreis Unna ist einer der schnell wachsenden Wohnorte in der Region. Von Selm aus sind es ca. 15 Minuten zu unserem Büro in Lünen — oder Sie nutzen unseren Hol- & Bringservice.',
    text2: 'Als erfahrener Zulassungsdienst im Kreis Unna kennen wir alle Anforderungen der Zulassungsstelle Unna. Wir übernehmen Ihre Kfz-Anmeldung, Ummeldung und Abmeldung — zuverlässig, schnell und zu Festpreisen.',
    text3: 'Unsere bundesweite Online-Zulassung ist auch für Selmer Kunden eine Top-Option: Dokumente fotografieren, per WhatsApp senden — wir erledigen alles digital. Sie müssen keinen einzigen Behördengang machen.',
  },
  'kreis-unna': {
    text1: 'Der Kreis Unna ist unser Heimrevier — von Bergkamen über Kamen und Werne bis Schwerte kennen wir jede Zulassungsstelle und jeden lokalen Prozess. Unser Büro in Lünen liegt zentral im Kreisgebiet.',
    text2: 'Für Kunden aus dem Kreis Unna bieten wir alle Leistungen an: Kfz-Anmeldung, Ummeldung, Abmeldung, Wunschkennzeichen und Kennzeichenprägung — zu günstigen Festpreisen und mit zügiger Bearbeitung.',
    text3: 'Unser Hol- & Bringservice deckt das gesamte Kreisgebiet ab. Besonders für Gewerbekunden und Autohäuser im Kreis Unna ist dieser Service attraktiv: Rahmenvertrag abschließen, wir kümmern uns um alles.',
  },
  kamen: {
    text1: 'Kamen — das Tor zum Ruhrgebiet — liegt nur etwa 12 Minuten von unserem Büro entfernt. Die A2 macht Kamen ideal erreichbar für unseren Hol- & Bringservice und für persönliche Termine.',
    text2: 'Für Kamener Kunden erledigen wir alle Kfz-Zulassungen: Ob Neuzulassung eines Fahrzeugs, Ummeldung nach Umzug oder schnelle Abmeldung eines Gebrauchtfahrzeugs — zügig und zuverlässig erledigt.',
    text3: 'Die Zulassungsstelle Kamen im Kreis Unna kennen wir bestens. Wir vertreten Sie dort mit einer Vollmacht, sodass Sie selbst keinen einzigen Schritt in die Behörde machen müssen. Einfach, schnell, zuverlässig.',
  },
  schwerte: {
    text1: 'Schwerte an der Ruhr liegt südlich von Dortmund und ist über die A45 in etwa 25 Minuten von Lünen aus erreichbar. Für Schwerter Kunden empfehlen wir besonders unsere Online-Zulassung oder unseren Hol- & Bringservice.',
    text2: 'Mit unserer bundesweiten Online-Zulassung müssen Sie als Schwerter Kunde nicht einmal zu uns fahren: Dokumente per WhatsApp einsenden, wir erledigen die Zulassung bei der zuständigen Stelle, Kennzeichen kommen per Post — oder wir liefern sie mit unserem Bringservice.',
    text3: 'Für Autohäuser in Schwerte bieten wir besonders attraktive Gewerbe-Rahmenverträge an: regelmäßige Zulassungen mit Mengenrabatt, monatliche Sammelabrechnung und einem festen Ansprechpartner.',
  },
  luenen: {
    text1: 'Lünen ist unser Heimatstandort — hier sind wir zu Hause. Unser Büro am Willy-Brandt-Platz 6 ist zentral gelegen, gut mit öffentlichen Verkehrsmitteln erreichbar und hat Parkplätze direkt vor der Tür.',
    text2: 'Als lokaler Zulassungsdienst in Lünen kennen wir alle Wege zur Zulassungsstelle und alle lokalen Anforderungen. Keine Wartezeit, keine Terminsuche — wir erledigen Ihre Kfz-Anmeldung, Ummeldung oder Abmeldung schnell und unkompliziert.',
    text3: 'Tausende Lünener Kunden vertrauen uns jährlich ihre Kfz-Zulassungen an. Mit unserer eigenen Kennzeichenprägung vor Ort, 24/7 WhatsApp-Erreichbarkeit und transparenten Festpreisen sind wir die erste Wahl in Lünen.',
  },
};

const BASE_URL = (typeof import.meta.env !== 'undefined' && import.meta.env.VITE_SITE_URL)
  ? import.meta.env.VITE_SITE_URL
  : 'https://zulassungen-adl.de';

const StadtDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const stadt = staedte.find((s) => s.slug === slug);
  const andereStaedte = staedte.filter((s) => s.slug !== slug && s.slug !== 'luenen');
  const hauptLeistungen = leistungen.slice(0, 6);
  const lokalInfo = slug ? lokalInfoMap[slug] : null;

  // Build rich keyword strings per city — covers all search variations
  const kwFein = [
    `Kfz-Zulassung ${stadt.name}`,
    `Zulassungsstelle ${stadt.name}`,
    `Zulassungsdienst ${stadt.name}`,
    `Auto zulassen ${stadt.name}`,
    `Auto anmelden ${stadt.name}`,
    `Kfz-Anmeldung ${stadt.name}`,
    `Kfz-Ummeldung ${stadt.name}`,
    `Fahrzeugzulassung ${stadt.name}`,
    `Zulassungsservice ${stadt.name}`,
    `Online-Zulassung ${stadt.name}`,
    `Kennzeichen ${stadt.name}`,
    `Kfz-Abmeldung ${stadt.name}`,
    `Wunschkennzeichen ${stadt.name}`,
    `Zulassungsdienst an der Lippe`,
    `Kfz-Zulassung ohne Behördengang ${stadt.name}`,
  ];
  const keywordsRich = kwFein.join(', ');

  useSEO({
    title: stadt?.metaTitle ?? `Kfz-Zulassung ${stadt.name} | Zulassungsdienst an der Lippe`,
    description: stadt?.metaDescription ?? `Kfz-Zulassung ${stadt.name} ohne Behördengang. Anmeldung, Ummeldung, Abmeldung mit Festpreisen. Jetzt anfragen!`,
    keywords: keywordsRich,
    canonical: slug ? `/kfz-zulassung/${slug}` : '/standorte',
    ogLocale: 'de_DE',
    ogImage: stadt?.bild,
    schema: stadt
      ? [
          {
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: `Zulassungsdienst an der Lippe — ${stadt.name}`,
            description: stadt.beschreibung,
            image: stadt.bild,
            '@id': `${BASE_URL}/kfz-zulassung/${stadt.slug}#localbusiness`,
            url: `${BASE_URL}/kfz-zulassung/${stadt.slug}`,
            areaServed: {
              '@type': 'City',
              name: stadt.name,
              containedInPlace: {
                '@type': 'AdministrativeArea',
                name: stadt.region,
              },
            },
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Willy-Brandt-Platz 6',
              addressLocality: 'Lünen',
              postalCode: '44532',
              addressCountry: 'DE',
            },
            geo: { '@type': 'GeoCoordinates', latitude: 51.6158, longitude: 7.5268 },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '5.0',
              reviewCount: '82',
              bestRating: '5',
              worstRating: '1',
            },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: stadt.faq.map((f) => ({
              '@type': 'Question',
              name: f.frage,
              acceptedAnswer: { '@type': 'Answer', text: f.antwort },
            })),
          },
        ]
      : undefined,
  });

  if (!stadt) {
    return (
      <div className="font-sans">
        <Header />
        <div className="pt-32 text-center min-h-screen">
          <h1 className="text-2xl font-bold text-navy-900">Stadt nicht gefunden</h1>
          <Link to="/standorte" className="text-navy-700 underline mt-4 inline-block cursor-pointer">
            Zurück zur Übersicht
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

        {/* ── HERO ─────────────────────────────────── */}
        <section className="relative min-h-[480px] md:min-h-[560px] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={stadt.bild}
              alt={`Kfz-Zulassung ${stadt.name}`}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-900/60 to-navy-900/10"></div>
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 pb-14">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-white/40 text-sm mb-8">
              <Link to="/" className="hover:text-white cursor-pointer">Startseite</Link>
              <div className="w-3 h-3 flex items-center justify-center">
                <i className="ri-arrow-right-s-line"></i>
              </div>
              <Link to="/standorte" className="hover:text-white cursor-pointer">Standorte</Link>
              <div className="w-3 h-3 flex items-center justify-center">
                <i className="ri-arrow-right-s-line"></i>
              </div>
              <span className="text-white">{stadt.name}</span>
            </nav>

            <div className="max-w-2xl">
              {/* Eyebrow */}
              <p className="text-xs font-bold text-whatsapp uppercase tracking-widest mb-3">
                Standort {stadt.name}
              </p>

              {/* H1 */}
              <h1 className="text-2xl md:text-5xl font-extrabold text-white leading-tight mb-3">
                Kfz-Zulassung {stadt.name} — {stadt.slug === 'luenen' ? 'direkt vor Ort.' : 'bequem über Lünen.'}
              </h1>

              <p className="text-white/70 text-base leading-relaxed mb-6">
                Wir übernehmen die komplette Zulassung für Kunden aus {stadt.name} — ohne dass
                Sie selbst zur Zulassungsstelle müssen.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-7">
                <span className="bg-white/10 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full">
                  {stadt.region}
                </span>
                <span className="bg-white/10 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full">
                  {stadt.entfernung}
                </span>
                <span className="bg-white/10 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full">
                  Schnelle Bearbeitung
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/4923063548896"
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="inline-flex items-center gap-2 bg-whatsapp text-white font-bold px-6 py-3.5 rounded-xl text-sm whitespace-nowrap cursor-pointer hover:bg-green-600 transition-colors"
                >
                  <div className="w-4 h-4 flex items-center justify-center">
                    <img src="/images/whatsapp-bf1279.svg" className="w-full h-full object-contain" alt="WhatsApp" loading="lazy" decoding="async" />
                  </div>
                  Jetzt anfragen
                </a>
                <Link
                  to="/leistungen"
                  className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-6 py-3.5 rounded-xl text-sm whitespace-nowrap cursor-pointer hover:bg-white/10 transition-colors"
                >
                  Alle Preise ansehen
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── HIGHLIGHTS ───────────────────────────── */}
        <section className="bg-white py-10 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {stadt.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-3 bg-offwhite rounded-xl p-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-navy-900 rounded-lg shrink-0">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <p className="text-gray-700 text-sm leading-snug">{h}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WIE ES FUNKTIONIERT FÜR [STADT]-KUNDEN ── */}
        <section className="bg-offwhite py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div>
                <span className="text-xs font-semibold text-navy-700 uppercase tracking-widest bg-navy-50 px-3 py-1 rounded-lg">
                  Für {stadt.name}-Kunden
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-navy-900 mt-4 mb-4">
                  Warum wir die beste Wahl für {stadt.name} sind
                </h2>

                {lokalInfo && (
                  <div className="space-y-4">
                    <p className="text-gray-600 text-sm leading-relaxed">{lokalInfo.text1}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{lokalInfo.text2}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{lokalInfo.text3}</p>
                  </div>
                )}

                <div className="mt-6 space-y-3">
                  {[
                    { icon: 'ri-time-fill', titel: 'Schnelle Bearbeitung', text: 'Schneller als jede Zulassungsstelle in der Region.' },
                    { icon: 'ri-truck-line', titel: 'Hol- & Bringservice', text: `Wir kommen zu Ihnen nach ${stadt.name} — kein Fahrtaufwand.` },
                    { icon: 'ri-global-line', titel: 'Online-Zulassung', text: 'Dokumente per WhatsApp, Kennzeichen per Post — bundesweit.' },
                  ].map((f) => (
                    <div key={f.titel} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100">
                      <div className="w-9 h-9 flex items-center justify-center bg-navy-50 rounded-lg shrink-0">
                        <i className={`${f.icon} text-navy-700 text-base`}></i>
                      </div>
                      <div>
                        <div className="font-semibold text-navy-900 text-sm">{f.titel}</div>
                        <p className="text-gray-500 text-xs mt-0.5">{f.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="https://wa.me/4923063548896"
                    target="_blank"
                    rel="nofollow noreferrer"
                    className="inline-flex items-center gap-2 bg-whatsapp text-white font-semibold px-5 py-3 rounded-xl text-sm whitespace-nowrap cursor-pointer hover:bg-green-600 transition-colors"
                  >
                    <div className="w-4 h-4 flex items-center justify-center">
                      <img src="/images/whatsapp-bf1279.svg" className="w-full h-full object-contain" alt="WhatsApp" loading="lazy" decoding="async" />
                    </div>
                    WhatsApp anfragen
                  </a>
                  <Link
                    to="/leistungen/hol-bringservice"
                    className="inline-flex items-center gap-2 border-2 border-navy-100 text-navy-900 font-semibold px-5 py-3 rounded-xl text-sm whitespace-nowrap cursor-pointer hover:border-navy-300 hover:bg-navy-50 transition-colors"
                  >
                    Hol- &amp; Bringservice
                  </Link>
                </div>
              </div>

              {/* Karte */}
              <div className="rounded-2xl overflow-hidden min-h-[360px]">
                <iframe
                  title={`Anfahrt von ${stadt.name} nach Lünen`}
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30000!2d7.5!3d51.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${encodeURIComponent(stadt.name + ', Deutschland')}!5e0!3m2!1sde!2sde`}
                  width="100%"
                  height="100%"
                  className="w-full h-full"
                  style={{ border: 0, minHeight: '360px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* ── UNSERE LEISTUNGEN ────────────────────── */}
        <section className="bg-white py-14">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-extrabold text-navy-900 mb-6">
              Unsere Leistungen für {stadt.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {hauptLeistungen.map((l) => (
                <Link
                  key={l.slug}
                  to={`/leistungen/${l.slug}`}
                  className="group flex items-center gap-3 p-4 bg-offwhite rounded-xl border border-transparent hover:border-navy-100 hover:bg-white transition-all cursor-pointer"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-navy-900 rounded-xl shrink-0">
                    <i className={`${l.icon} text-white text-base`}></i>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-navy-900 text-sm">{l.titel}</div>
                    <div className="text-xs text-navy-700 font-bold mt-0.5">{l.preis}</div>
                  </div>
                  <div className="w-4 h-4 flex items-center justify-center text-gray-300 group-hover:text-navy-700 transition-colors shrink-0">
                    <i className="ri-arrow-right-line text-sm"></i>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────── */}
        <section className="bg-offwhite py-14">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-extrabold text-navy-900 mb-6">
              Häufige Fragen — Kfz-Zulassung in {stadt.name}
            </h2>
            <div className="space-y-2">
              {stadt.faq.map((f, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
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
        </section>

        {/* ── KONTAKT CTA ──────────────────────────── */}
        <section className="bg-navy-900 py-16">
          <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
              Kfz-Zulassung {stadt.name} — einfach starten.
            </h2>
            <p className="text-white/60 text-base mb-8 leading-relaxed">
              Kontaktieren Sie uns per WhatsApp oder Telefon — wir beraten Sie kostenlos und
              erledigen Ihre Zulassung schnell und zuverlässig.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href="https://wa.me/4923063548896"
                target="_blank"
                rel="nofollow noreferrer"
                className="inline-flex items-center gap-2 bg-whatsapp text-white font-bold px-7 py-4 rounded-xl text-base whitespace-nowrap cursor-pointer hover:bg-green-600 transition-colors"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <img src="/images/whatsapp-bf1279.svg" className="w-full h-full object-contain" alt="WhatsApp" loading="lazy" decoding="async" />
                </div>
                WhatsApp anfragen
              </a>
              <a
                href="tel:+4923063548896"
                className="inline-flex items-center gap-2 border border-white/30 bg-white/5 text-white font-bold px-7 py-4 rounded-xl text-base whitespace-nowrap cursor-pointer hover:bg-white/10 transition-colors"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-phone-fill text-lg"></i>
                </div>
                02306 3548896
              </a>
            </div>
            <div className="flex items-center justify-center gap-3 text-white/40 text-xs">
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-shield-check-fill text-whatsapp text-sm"></i>
              </div>
              TÜV Rheinland · DEKRA · DIN CERTCO · DIN Geprüft zertifiziert
            </div>
          </div>
        </section>

        {/* ── WEITERE STÄDTE ───────────────────────── */}
        <section className="bg-white py-12 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <h3 className="text-base font-bold text-navy-900 mb-4">
              Weitere Regionen in unserem Servicegebiet
            </h3>
            <div className="flex flex-wrap gap-2">
              {andereStaedte.map((s) => (
                <Link
                  key={s.slug}
                  to={`/kfz-zulassung/${s.slug}`}
                  className="flex items-center gap-2 px-4 py-2 border border-navy-100 text-navy-700 rounded-full text-sm font-semibold hover:bg-navy-900 hover:text-white hover:border-navy-900 transition-all cursor-pointer whitespace-nowrap"
                >
                  <div className="w-3 h-3 flex items-center justify-center">
                    <i className="ri-map-pin-line text-xs"></i>
                  </div>
                  {s.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default StadtDetailPage;
