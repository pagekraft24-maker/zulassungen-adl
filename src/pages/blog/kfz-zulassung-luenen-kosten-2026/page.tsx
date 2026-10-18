import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import WhatsAppWidget from '@/components/feature/WhatsAppWidget';
import useSEO from '@/hooks/useSEO';

const BASE_URL = (typeof import.meta.env !== 'undefined' && import.meta.env.VITE_SITE_URL)
  ? import.meta.env.VITE_SITE_URL
  : 'https://zulassungen-adl.de';

const faqs = [
  {
    frage: 'Was kostet die Kfz-Zulassung in Lünen insgesamt?',
    antwort:
      'Die Gesamtkosten setzen sich aus der amtlichen Zulassungsgebühr, den Kosten für die Kennzeichenschilder samt Prägung und optionalen Zusätzen wie der Wunschkennzeichen-Reservierung zusammen. Beim Zulassungsdienst an der Lippe zahlen Sie einen transparenten Festpreis, in dem Service und Behördengang bereits enthalten sind — ohne versteckte Kosten.',
  },
  {
    frage: 'Wie schnell ist die Zulassung erledigt?',
    antwort:
      'Sobald uns alle Unterlagen vollständig vorliegen, arbeiten wir in der Regel sehr zügig — oft am selben oder nächsten Werktag. Bei eiligen Fällen sprechen Sie uns direkt an, dann finden wir gemeinsam eine schnelle Lösung.',
  },
  {
    frage: 'Muss ich selbst zur Zulassungsstelle des Kreises Unna?',
    antwort:
      'Nein. Genau das nehmen wir Ihnen ab. Sie reichen die Unterlagen ein oder lassen sie über unseren Hol- und Bringservice abholen — den Gang zur Behörde und die Wartezeit übernehmen wir für Sie.',
  },
  {
    frage: 'Kann ich die Kosten vorab genau erfahren?',
    antwort:
      'Ja. Nennen Sie uns einfach Ihr Anliegen, dann erhalten Sie vorab eine transparente Aufstellung aller Kosten — Festpreis plus amtliche Gebühren. So gibt es keine Überraschungen, bevor wir loslegen.',
  },
];

const KfzZulassungLuenenKostenPage = () => {
  const [offenIdx, setOffenIdx] = useState<number | null>(null);

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Kfz-Zulassung Lünen Kosten 2026 – Preise, Ablauf & Services',
    description:
      'Kfz-Zulassung Lünen Kosten 2026: Was kostet Anmeldung & Ummeldung? Zulassungsdienst an der Lippe zeigt Preise, Ablauf und Festpreise.',
    datePublished: '2026-08-16',
    dateModified: '2026-08-16',
    author: { '@type': 'Organization', name: 'Zulassungsdienst an der Lippe' },
    publisher: { '@type': 'Organization', name: 'Zulassungsdienst an der Lippe' },
    mainEntityOfPage: `${BASE_URL}/blog/kfz-zulassung-luenen-kosten-2026`,
    inLanguage: 'de-DE',
  };

  useSEO({
    title: 'Kfz-Zulassung Lünen Kosten 2026 – Preise & Ablauf | ADL',
    description:
      'Kfz-Zulassung Lünen Kosten 2026: Was kostet Anmeldung & Ummeldung? Zulassungsdienst an der Lippe zeigt Preise, Ablauf und Festpreise.',
    canonical: '/blog/kfz-zulassung-luenen-kosten-2026',
    ogLocale: 'de_DE',
    ogType: 'article',
    schema: blogSchema,
  });

  return (
    <div className="font-sans">
      <Header />
      <main className="pt-20">

        {/* Artikel-Header */}
        <section className="bg-navy-900 py-14 md:py-20">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <nav className="flex items-center gap-2 text-xs text-white/50 mb-6" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-white transition-colors cursor-pointer">Start</Link>
              <span className="text-white/30">/</span>
              <Link to="/blog" className="hover:text-white transition-colors cursor-pointer">Blog</Link>
              <span className="text-white/30">/</span>
              <span className="text-white/80">Kfz-Zulassung Lünen Kosten</span>
            </nav>
            <span className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-price-tag-3-line text-sm"></i>
              </div>
              Kosten &amp; Preise
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-5">
              Kfz-Zulassung Lünen Kosten 2026 – Preise, Ablauf &amp; Services
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/50">
              <span>16. August 2026</span>
              <span>·</span>
              <span>7 Min. Lesezeit</span>
              <span>·</span>
              <span>Zulassungsdienst an der Lippe</span>
            </div>
          </div>
        </section>

        {/* Artikel-Inhalt */}
        <article className="bg-white py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            {/* Einleitung */}
            <p className="text-lg text-gray-700 leading-relaxed mb-10">
              Wer ein Fahrzeug in Lünen an- oder ummeldet, steht schnell vor denselben Fragen: Was
              kostet die Kfz-Zulassung eigentlich? Welche Gebühren kommen auf mich zu? Und lohnt sich
              ein Zulassungsdienst — oder mache ich es besser selbst? In diesem Ratgeber beantworten
              wir diese Fragen transparent und zeigen Ihnen, welche Kosten 2026 auf Sie zukommen und
              wie der Ablauf beim Zulassungsdienst an der Lippe funktioniert. So wissen Sie vorab
              genau, woran Sie sind — ohne böse Überraschungen an der Zulassungsstelle.
            </p>

            {/* Was kostet eine Kfz-Zulassung */}
            <h2 className="text-2xl md:text-3xl font-extrabold text-navy-900 mb-6">
              Was kostet eine Kfz-Zulassung in Lünen 2026?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Die Kosten einer Kfz-Zulassung setzen sich aus mehreren Bausteinen zusammen. Wer den
              Behördengang selbst übernimmt, zahlt in der Regel folgende Posten:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                'Amtliche Zulassungsgebühr der Zulassungsstelle des Kreises Unna',
                'Kosten für die Kennzeichenschilder inklusive Prägung',
                'Optional: Reservierungsgebühr für ein Wunschkennzeichen',
                'Optional: Kosten für ein Kurzzeitkennzeichen bei Überführungen',
              ].map((punkt) => (
                <li key={punkt} className="flex items-start gap-3 text-gray-600">
                  <div className="w-5 h-5 flex items-center justify-center mt-0.5 shrink-0">
                    <i className="ri-checkbox-circle-fill text-navy-700 text-base"></i>
                  </div>
                  <span className="leading-relaxed">{punkt}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-600 leading-relaxed mb-10">
              Deutlich entspannter wird es mit einem Zulassungsdienst: Bei uns zahlen Sie einen
              transparenten Festpreis, in dem Service, Behördengänge und Kennzeichen bereits enthalten
              sind. Einen vollständigen Überblick über alle Leistungen und Preise finden Sie auf
              unserer Seite{' '}
              <Link to="/leistungen" className="text-navy-700 font-semibold hover:text-navy-900 underline underline-offset-2 cursor-pointer">
                Unsere Leistungen
              </Link>.
            </p>

            {/* Was ist im Service enthalten */}
            <h2 className="text-2xl md:text-3xl font-extrabold text-navy-900 mb-6">
              Was ist im Service enthalten?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Beim Zulassungsdienst an der Lippe bündeln wir den kompletten Behördengang in einem
              Service. Das spart Ihnen Zeit, Wege und Wartezeit — und Sie haben einen festen
              Ansprechpartner, der sich um alles kümmert.
            </p>

            <div className="space-y-5 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-navy-50 rounded-xl shrink-0">
                  <i className="ri-refresh-line text-navy-700 text-lg"></i>
                </div>
                <div>
                  <h3 className="font-bold text-navy-900 mb-1">Anmeldung und Ummeldung</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Ob Neuwagen, Gebrauchtwagen oder Halterwechsel — wir übernehmen die komplette
                    An- oder Ummeldung Ihres Fahrzeugs. Dazu gehört die{' '}
                    <Link to="/leistungen/kfz-anmeldung" className="text-navy-700 font-semibold hover:text-navy-900 underline underline-offset-2 cursor-pointer">
                      Kfz-Anmeldung Lünen
                    </Link>{' '}
                    ebenso wie die Ummeldung bei Umzug oder Verkauf. Sie reichen die Unterlagen ein,
                    wir erledigen den Rest.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-navy-50 rounded-xl shrink-0">
                  <i className="ri-file-3-line text-navy-700 text-lg"></i>
                </div>
                <div>
                  <h3 className="font-bold text-navy-900 mb-1">Wunschkennzeichen &amp; Kurzzeitkennzeichen</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Sie möchten Ihr Wunschkennzeichen reservieren oder benötigen ein Kurzzeitkennzeichen
                    für Probefahrt oder Überführung? Beides organisieren wir für Sie — inklusive
                    Reservierung, Prägung und Zulassung in einem Vorgang.
                  </p>
                </div>
              </div>
            </div>

            {/* Ablauf Schritt für Schritt */}
            <h2 className="text-2xl md:text-3xl font-extrabold text-navy-900 mb-6">
              Der Ablauf Schritt für Schritt
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Die Zulassung über den Zulassungsdienst an der Lippe folgt einem klaren, einfachen
              Ablauf — damit Sie genau wissen, was als Nächstes passiert:
            </p>

            <div className="space-y-6 mb-10">
              {[
                {
                  nummer: '1',
                  titel: 'Kontakt aufnehmen',
                  text: 'Sie melden sich telefonisch, per WhatsApp oder über das Formular und schildern uns Ihr Anliegen. Wir ordnen Ihren Fall ein und nennen Ihnen den Festpreis.',
                },
                {
                  nummer: '2',
                  titel: 'Unterlagen einreichen',
                  text: 'Sie reichen die Unterlagen persönlich, per Post oder über unseren Hol- und Bringservice ein. Fehlt etwas, klären wir das vorab mit Ihnen.',
                },
                {
                  nummer: '3',
                  titel: 'Wir übernehmen den Behördengang',
                  text: 'Wir gehen für Sie zur Zulassungsstelle des Kreises Unna, prägen die Kennzeichen und erledigen sämtliche Formalitäten.',
                },
                {
                  nummer: '4',
                  titel: 'Papiere & Kennzeichen zurück',
                  text: 'Sie erhalten Fahrzeugschein und Kennzeichen fertig zurück — und können direkt losfahren. Ohne selbst anstehen zu müssen.',
                },
              ].map((s) => (
                <div key={s.nummer} className="flex items-start gap-4">
                  <div className="w-11 h-11 flex items-center justify-center bg-navy-900 text-white rounded-xl shrink-0 font-extrabold text-base">
                    {s.nummer}
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-900 mb-1">{s.titel}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Für wen lohnt sich */}
            <h2 className="text-2xl md:text-3xl font-extrabold text-navy-900 mb-6">
              Für wen lohnt sich ein Zulassungsdienst?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Ein Zulassungsdienst lohnt sich besonders, wenn Ihnen Zeit und Nerven wichtig sind.
              Typische Fälle sind:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                { icon: 'ri-briefcase-line', titel: 'Berufstätige', text: 'Sie sparen sich Termin und Wartezeit während der Arbeitszeit.' },
                { icon: 'ri-home-line', titel: 'Neuzuzüge', text: 'Frisch nach Lünen gezogen? Wir übernehmen die Ummeldung für Sie.' },
                { icon: 'ri-car-line', titel: 'Neuwagenkäufer', text: 'Anmeldung direkt nach dem Kauf — ohne Behördengang.' },
                { icon: 'ri-team-line', titel: 'Gewerbekunden', text: 'Händler und Flotten profitieren von Sammelabwicklung.' },
              ].map((v) => (
                <div key={v.titel} className="bg-offwhite border border-gray-100 rounded-2xl p-5">
                  <div className="w-10 h-10 flex items-center justify-center bg-navy-50 rounded-xl mb-3">
                    <i className={`${v.icon} text-navy-700 text-lg`}></i>
                  </div>
                  <h3 className="font-bold text-navy-900 mb-1">{v.titel}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.text}</p>
                </div>
              ))}
            </div>

            {/* FAQ */}
            <h2 className="text-2xl md:text-3xl font-extrabold text-navy-900 mb-6">
              Häufige Fragen (FAQ)
            </h2>
            <div className="space-y-2 mb-10">
              {faqs.map((f, i) => (
                <div
                  key={i}
                  className="bg-offwhite border border-gray-100 rounded-2xl overflow-hidden hover:border-navy-100 transition-colors"
                >
                  <button
                    type="button"
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => setOffenIdx(offenIdx === i ? null : i)}
                  >
                    <span className="font-semibold text-navy-900 text-base leading-snug">{f.frage}</span>
                    <div className={`w-8 h-8 flex items-center justify-center shrink-0 rounded-full transition-colors ${offenIdx === i ? 'bg-navy-900' : 'bg-navy-50'}`}>
                      <i className={`ri-${offenIdx === i ? 'subtract' : 'add'}-line text-sm ${offenIdx === i ? 'text-white' : 'text-navy-700'}`}></i>
                    </div>
                  </button>
                  {offenIdx === i && (
                    <div className="px-6 pb-5 border-t border-gray-50 pt-3">
                      <p className="text-gray-600 text-sm leading-relaxed">{f.antwort}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA-Box */}
            <div className="bg-navy-900 rounded-3xl p-8 md:p-10 text-center mb-4">
              <h2 className="text-xl md:text-2xl font-extrabold text-white mb-3">
                Zulassung in Lünen — ohne Wartezeit, zum Festpreis
              </h2>
              <p className="text-white/60 text-sm leading-relaxed max-w-md mx-auto mb-6">
                Überlassen Sie uns den Behördengang. Wir melden Ihr Fahrzeug schnell und zuverlässig
                an — transparent im Preis, ohne versteckte Kosten.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  to="/kontakt"
                  className="inline-flex items-center gap-2 bg-whatsapp text-white font-bold px-6 py-3.5 rounded-xl text-sm whitespace-nowrap cursor-pointer hover:bg-green-600 transition-colors"
                >
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-send-plane-line"></i>
                  </div>
                  Anfrage senden
                </Link>
                <a
                  href="tel:+4923063548896"
                  className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-6 py-3.5 rounded-xl text-sm whitespace-nowrap cursor-pointer hover:bg-white/20 transition-colors"
                >
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-phone-line"></i>
                  </div>
                  02306 3548896
                </a>
              </div>
            </div>

            {/* Autorenbox */}
            <div className="bg-offwhite border border-gray-100 rounded-2xl p-6 md:p-7 flex items-start gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-navy-900 rounded-full shrink-0">
                <i className="ri-shield-check-line text-white text-xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-navy-900 mb-1">Zulassungsdienst an der Lippe</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Geschrieben vom Zulassungsdienst an der Lippe – TÜV-zertifizierte Kfz-Zulassung in
                  Lünen und Umgebung.
                </p>
              </div>
            </div>

            {/* Zurück zu Blog */}
            <div className="flex items-center justify-between pt-2">
              <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-navy-700 hover:text-navy-900 cursor-pointer">
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-arrow-left-line text-sm"></i>
                </div>
                Zurück zur Blog-Übersicht
              </Link>
              <Link to="/leistungen" className="inline-flex items-center gap-2 text-sm font-semibold text-navy-700 hover:text-navy-900 cursor-pointer">
                Alle Leistungen
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-arrow-right-line text-sm"></i>
                </div>
              </Link>
            </div>

          </div>
        </article>

      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default KfzZulassungLuenenKostenPage;