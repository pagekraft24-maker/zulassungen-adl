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
    frage: 'Wie lange dauert die Anmeldung?',
    antwort:
      'Mit dem Zulassungsdienst an der Lippe geht es oft innerhalb von 24 Stunden. Sobald uns alle Unterlagen vollständig vorliegen, übernehmen wir den Behördengang und Sie erhalten Ihre fertigen Papiere und Kennzeichen — ohne selbst anstehen zu müssen.',
  },
  {
    frage: 'Kann ich ein Wunschkennzeichen bekommen?',
    antwort:
      'Ja. Gegen eine geringe Gebühr reservieren wir Ihr Wunschkennzeichen vorab und prägen es direkt mit. So erhalten Sie Ihre Wunschkombination in einem Vorgang — zusammen mit der Zulassung.',
  },
  {
    frage: 'Was ist eine eVB-Nummer?',
    antwort:
      'Die eVB-Nummer ist die elektronische Versicherungsbestätigung Ihrer Kfz-Versicherung. Sie ist für jede Zulassung erforderlich und bestätigt, dass für Ihr Fahrzeug ein gültiger Versicherungsschutz besteht. Ihre Versicherung stellt sie Ihnen kostenlos aus.',
  },
  {
    frage: 'Muss ich persönlich zur Zulassungsstelle?',
    antwort:
      'Nein. Ein bevollmächtigter Zulassungsdienst wie wir kann die komplette Anmeldung für Sie übernehmen. Sie reichen die Unterlagen ein oder lassen sie abholen — den Gang zur Behörde erledigen wir für Sie.',
  },
];

const AutoAnmeldenLuenenPage = () => {
  const [offenIdx, setOffenIdx] = useState<number | null>(null);

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Auto anmelden in Lünen: Kosten, Unterlagen & Ablauf 2026',
    description:
      'Auto in Lünen anmelden? Alle Kosten, benötigte Unterlagen und der genaue Ablauf. Mit Zulassungsdienst an der Lippe stressfrei – Festpreis, 24h.',
    datePublished: '2026-08-16',
    dateModified: '2026-08-16',
    author: { '@type': 'Organization', name: 'Zulassungsdienst an der Lippe' },
    publisher: { '@type': 'Organization', name: 'Zulassungsdienst an der Lippe' },
    mainEntityOfPage: `${BASE_URL}/blog/auto-anmelden-luenen`,
    inLanguage: 'de-DE',
  };

  useSEO({
    title: 'Auto anmelden in Lünen: Kosten, Unterlagen & Ablauf 2026',
    description:
      'Auto in Lünen anmelden? Alle Kosten, benötigte Unterlagen und der genaue Ablauf. Mit Zulassungsdienst an der Lippe stressfrei – Festpreis, 24h.',
    canonical: '/blog/auto-anmelden-luenen',
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
              <span className="text-white/80">Auto anmelden in Lünen</span>
            </nav>
            <span className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-car-line text-sm"></i>
              </div>
              Kfz-Anmeldung
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-5">
              Auto anmelden in Lünen: Kosten, Unterlagen &amp; Ablauf 2026
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/50">
              <span>16. August 2026</span>
              <span>·</span>
              <span>6 Min. Lesezeit</span>
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
              Ein neues Auto ist gekauft — und jetzt kommt der Teil, auf den niemand Lust hat: die
              Zulassung. Ob Sie frisch nach Lünen gezogen sind oder gerade einen Neuwagen übernommen
              haben, die Kfz-Anmeldung gehört dazu. Doch genau hier hakt es bei vielen: Welche
              Unterlagen brauche ich eigentlich? Was kostet die Anmeldung? Und muss ich dafür wirklich
              Stunden bei der Zulassungsstelle verbringen? Genau dafür gibt es den{' '}
              <Link to="/" className="text-navy-700 font-semibold hover:text-navy-900 underline underline-offset-2 cursor-pointer">
                Zulassungsdienst an der Lippe
              </Link>
              : Wir übernehmen den kompletten Behördengang für Sie — zum Festpreis, ohne Wartezeit.
              In diesem Ratgeber zeigen wir Ihnen Schritt für Schritt, was eine Auto-Anmeldung in
              Lünen kostet, welche Unterlagen nötig sind und wie der Ablauf funktioniert.
            </p>

            {/* Unterlagen */}
            <h2 className="text-2xl md:text-3xl font-extrabold text-navy-900 mb-6">
              Welche Unterlagen brauche ich für die Kfz-Anmeldung?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Bevor es zur Zulassungsstelle geht, sollten Sie alle Dokumente zusammen haben. Fehlt
              etwas, verzögert sich der gesamte Vorgang. Diese Unterlagen sind in Lünen — wie überall
              in Deutschland — die wichtigsten:
            </p>

            <div className="space-y-5 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-navy-50 rounded-xl shrink-0">
                  <i className="ri-file-text-line text-navy-700 text-lg"></i>
                </div>
                <div>
                  <h3 className="font-bold text-navy-900 mb-1">Fahrzeugbrief und Fahrzeugschein (oder Zulassungsbescheinigung Teil I &amp; II)</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Diese beiden Dokumente sind das Herzstück jeder Zulassung. Der Fahrzeugbrief (Teil II)
                    weist den Eigentümer aus, der Fahrzeugschein (Teil I) die technischen Daten des Autos.
                    Ohne sie läuft gar nichts.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-navy-50 rounded-xl shrink-0">
                  <i className="ri-id-card-line text-navy-700 text-lg"></i>
                </div>
                <div>
                  <h3 className="font-bold text-navy-900 mb-1">Personalausweis oder Reisepass</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Ein gültiges Ausweisdokument des Halters ist Pflicht. Bei juristischen Personen
                    (GmbH, KG &amp; Co.) kommen zusätzlich Handelsregisterauszug und Gewerbeanmeldung hinzu.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-navy-50 rounded-xl shrink-0">
                  <i className="ri-shield-check-line text-navy-700 text-lg"></i>
                </div>
                <div>
                  <h3 className="font-bold text-navy-900 mb-1">eVB-Nummer (elektronische Versicherungsbestätigung)</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Die eVB-Nummer bestätigt, dass Ihr Fahrzeug versichert ist. Ihre Versicherung stellt
                    sie Ihnen auf Anfrage sofort und kostenlos aus — meist telefonisch oder online.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-navy-50 rounded-xl shrink-0">
                  <i className="ri-tools-line text-navy-700 text-lg"></i>
                </div>
                <div>
                  <h3 className="font-bold text-navy-900 mb-1">HU/AU-Bericht (falls vorhanden)</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Die gültige Hauptuntersuchung (TÜV) ist für die Anmeldung relevant. Liegt ein
                    Nachweis vor, legen Sie ihn am besten gleich bei — so sparen Sie sich Rückfragen.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-navy-50 rounded-xl shrink-0">
                  <i className="ri-bank-line text-navy-700 text-lg"></i>
                </div>
                <div>
                  <h3 className="font-bold text-navy-900 mb-1">SEPA-Lastschriftmandat für die Kfz-Steuer</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Für den Einzug der Kfz-Steuer wird ein SEPA-Lastschriftmandat mit Ihrer IBAN
                    benötigt. So wird die Steuer bequem automatisch abgebucht — ohne Mahnungen.
                  </p>
                </div>
              </div>
            </div>

            {/* Kosten */}
            <h2 className="text-2xl md:text-3xl font-extrabold text-navy-900 mb-6">
              Was kostet die Auto-Anmeldung in Lünen?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Die Gesamtkosten einer Kfz-Anmeldung setzen sich aus mehreren Bausteinen zusammen.
              Wer den Behördengang selbst übernimmt, zahlt in der Regel:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                'Zulassungsgebühr der Zulassungsstelle des Kreises Unna',
                'Kosten für die Kennzeichenschilder (inklusive Prägung)',
                'Optional: Reservierungsgebühr für ein Wunschkennzeichen',
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
              sind — ohne versteckte Zusatzkosten. Einen Überblick über alle Preise finden Sie auf
              unserer{' '}
              <Link to="/leistungen" className="text-navy-700 font-semibold hover:text-navy-900 underline underline-offset-2 cursor-pointer">
                Leistungsseite
              </Link>.
            </p>

            {/* Ablauf */}
            <h2 className="text-2xl md:text-3xl font-extrabold text-navy-900 mb-6">
              Der Ablauf: So melden Sie Ihr Auto in Lünen an
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Die Auto-Anmeldung folgt einem klaren Ablauf. Mit dem Zulassungsdienst an der Lippe
              übernehmen wir die meisten Schritte für Sie — hier der Überblick:
            </p>

            <div className="space-y-6 mb-10">
              {[
                {
                  nummer: '1',
                  titel: 'Schritt 1 – Unterlagen sammeln',
                  text: 'Legen Sie Fahrzeugbrief, Fahrzeugschein, Ausweis, eVB-Nummer und IBAN bereit. Fehlt etwas, klären wir das vorab kostenlos mit Ihnen.',
                },
                {
                  nummer: '2',
                  titel: 'Schritt 2 – Termin bei der Zulassungsstelle oder beim Zulassungsdienst',
                  text: 'Entweder Sie vereinbaren selbst einen Termin bei der Zulassungsstelle — oder Sie geben alles bei uns ab und wir erledigen den Gang für Sie. Kein Anstehen, keine Wartezeit.',
                },
                {
                  nummer: '3',
                  titel: 'Schritt 3 – Kennzeichen auswählen und prägen lassen',
                  text: 'Zufallskennzeichen oder Wunschkennzeichen? Wir prüfen die Verfügbarkeit, prägen die Schilder direkt in unserer Werkstatt und kümmern uns um alles.',
                },
                {
                  nummer: '4',
                  titel: 'Schritt 4 – Fahrzeugschein erhalten und losfahren',
                  text: 'Sobald die Zulassung durch ist, erhalten Sie Fahrzeugschein und Kennzeichen zurück. Dann heißt es: losfahren!',
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

            {/* Zulassungsdienst vs. selbst */}
            <h2 className="text-2xl md:text-3xl font-extrabold text-navy-900 mb-6">
              Zulassungsdienst vs. Zulassungsstelle selbst: Was lohnt sich?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Wer sein Auto selbst anmeldet, investiert Zeit: Termin suchen, Warten in der Behörde,
              Kennzeichen prägen lassen. Ein Zulassungsdienst nimmt Ihnen genau das ab.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                { icon: 'ri-time-line', titel: 'Zeitersparnis', text: 'Kein Anstehen, keine Behördengänge.' },
                { icon: 'ri-hourglass-line', titel: 'Wartezeit vermeiden', text: 'Wir erledigen es für Sie — oft binnen 24 Stunden.' },
                { icon: 'ri-price-tag-3-line', titel: 'Festpreis', text: 'Transparente Kosten, keine Überraschungen.' },
                { icon: 'ri-truck-line', titel: 'Hol- und Bringservice', text: 'Unterlagen abholen, Papiere zurückbringen.' },
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
              FAQ
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
                Auto anmelden in Lünen — ohne Wartezeit
              </h2>
              <p className="text-white/60 text-sm leading-relaxed max-w-md mx-auto mb-6">
                Überlassen Sie uns den Behördengang. Wir melden Ihr Auto zum Festpreis an — oft
                innerhalb von 24 Stunden.
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

export default AutoAnmeldenLuenenPage;