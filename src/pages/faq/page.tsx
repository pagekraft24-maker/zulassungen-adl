import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import WhatsAppWidget from '@/components/feature/WhatsAppWidget';
import useSEO from '@/hooks/useSEO';

const kategorien = [
  {
    id: 'allgemein',
    label: 'Allgemeines & Ablauf',
    icon: 'ri-question-line',
    fragen: [
      {
        frage: 'Wie läuft eine Kfz-Zulassung bei Ihnen ab?',
        antwort: 'Sie nehmen Kontakt auf — per WhatsApp, Telefon oder Kontaktformular. Wir prüfen Ihre Unterlagen vorab kostenlos, übernehmen den Behördengang bei der Zulassungsstelle und übergeben Kennzeichen sowie Fahrzeugpapiere. Wir bearbeiten Ihren Auftrag schnellstmöglich.',
      },
      {
        frage: 'Muss ich selbst zur Zulassungsstelle gehen?',
        antwort: 'Nein. Wir übernehmen den kompletten Behördengang für Sie — mit einer Vollmacht, die wir gemeinsam aufsetzen. Sie müssen keinen einzigen Schritt in eine Behörde machen.',
      },
      {
        frage: 'Wie lange dauert eine Zulassung?',
        antwort: 'Wir bearbeiten Ihren Auftrag schnellstmöglich nach Eingang aller vollständigen Unterlagen. Kurzzeitkennzeichen und Abmeldungen sind oft noch am selben Tag möglich. Bei unvollständigen Unterlagen informieren wir Sie sofort.',
      },
      {
        frage: 'Werden Kennzeichenschilder direkt vor Ort gefertigt?',
        antwort: 'Ja. Wir prägen Ihre Kennzeichen selbst in unserer eigenen Werkstatt — Standard, Carbon-Optik oder 3D-Kennzeichen — sofort vor Ort. Kein Umweg zu einem anderen Anbieter nötig.',
      },
      {
        frage: 'Was passiert, wenn Unterlagen fehlen?',
        antwort: 'Wir prüfen alle Unterlagen vorab und melden uns sofort, falls etwas fehlt. So vermeiden wir Verzögerungen und doppelte Wege. Unsere Unterlagen-Checkliste finden Sie auf der jeweiligen Leistungsseite.',
      },
    ],
  },
  {
    id: 'preise',
    label: 'Preise & Service',
    icon: 'ri-price-tag-3-line',
    fragen: [
      {
        frage: 'Was kostet eine Kfz-Anmeldung?',
        antwort: 'Die Kfz-Anmeldung kostet ab 129,90 € Festpreis. Ummeldung ab 99,00 €, Abmeldung ab 29,90 €. Alle weiteren Preise finden Sie auf unserer Leistungsübersicht — transparent, keine Überraschungen.',
      },
      {
        frage: 'Gibt es versteckte Kosten?',
        antwort: 'Nein. Unsere Preise sind vollständig transparent — was wir nennen, ist was Sie zahlen. Behördengebühren und Kennzeichen sind im angegebenen Preis enthalten. Keine Nachberechnungen.',
      },
      {
        frage: 'Was ist in den Festpreisen enthalten?',
        antwort: 'Unsere Festpreise umfassen: die Servicepauschale, alle Behördengebühren sowie — je nach Leistung — die Kennzeichenschilder. Die Feinstaubplakette ist bei der Anmeldung inklusive. Details auf der jeweiligen Leistungsseite.',
      },
      {
        frage: 'Wie bezahle ich?',
        antwort: 'Barzahlung, EC-Karte oder auf Rechnung für Gewerbekunden. Auf Anfrage auch Überweisung vor der Bearbeitung möglich. Bei Firmenkunden mit Rahmenvertrag erfolgt die Abrechnung monatlich per Sammelrechnung.',
      },
      {
        frage: 'Gibt es eine Geld-zurück-Garantie?',
        antwort: 'Ja. Wenn wir eine Leistung trotz vollständiger Unterlagen nicht erfüllen können, erstatten wir Ihnen den vollen Servicebetrag. Diese Garantie gilt für alle unsere Leistungen ohne Einschränkung.',
      },
    ],
  },
  {
    id: 'spezial',
    label: 'Spezialfälle',
    icon: 'ri-settings-3-line',
    fragen: [
      {
        frage: 'Können Sie auch ein Wunschkennzeichen reservieren?',
        antwort: 'Ja. Wir prüfen die Verfügbarkeit beim Kreis Unna und reservieren das Kennzeichen für bis zu 90 Tage. Wichtig: Ohne Reservierungs-PIN ist die weitere Bearbeitung nicht möglich — wir kümmern uns um alles.',
      },
      {
        frage: 'Können Sie ein Kurzzeitkennzeichen für eine Probefahrt erstellen?',
        antwort: 'Ja. 5-Tages-Kennzeichen für Probe- und Überführungsfahrten innerhalb Deutschlands. Die Kurzzeitversicherung ist im Festpreis enthalten — keine separate Buchung nötig.',
      },
      {
        frage: 'Welche Fahrzeuge können bearbeitet werden?',
        antwort: 'Alle gängigen Fahrzeugklassen: Pkw, Motorrad, Anhänger, Wohnmobil, Lkw und Sonderfahrzeuge. Bei Spezialfahrzeugen bitte vorab anfragen — wir klären die Möglichkeiten kostenlos.',
      },
      {
        frage: 'Bearbeiten Sie auch juristische Personen (GmbH, KG)?',
        antwort: 'Ja. Für juristische Personen benötigen wir zusätzlich: Handelsregisterauszug (max. 6 Monate alt), Gewerbeanmeldung und Ausweiskopie des Geschäftsführers. Wir führen die Zulassung auf das Unternehmen aus.',
      },
    ],
  },
  {
    id: 'region',
    label: 'Region & Erreichbarkeit',
    icon: 'ri-map-pin-line',
    fragen: [
      {
        frage: 'Für welche Regionen ist der Vor-Ort-Service möglich?',
        antwort: 'Unser Vor-Ort-Service und Hol- & Bringservice sind verfügbar für: Lünen, Dortmund, Bergkamen, Werne, Selm, Kreis Unna, Kamen, Schwerte und Umgebung. Bundesweit ist die Zulassung über unseren Online-Service möglich.',
      },
      {
        frage: 'Können Kunden aus anderen Bundesländern zu Ihnen kommen?',
        antwort: 'Ja. Über unsere bundesweite Online-Zulassung bedienen wir Kunden aus ganz Deutschland. Dokumente per WhatsApp oder E-Mail einschicken — wir erledigen alles und versenden Kennzeichen per Post.',
      },
      {
        frage: 'Bieten Sie einen Hol- und Bringservice an?',
        antwort: 'Ja, besonders für Autohäuser und Gewerbekunden attraktiv. Wir holen die Unterlagen bei Ihnen ab und bringen alle Dokumente sowie Kennzeichen direkt zurück. Termin einfach per WhatsApp vereinbaren.',
      },
      {
        frage: 'Kann ich die Zulassung bundesweit online erledigen?',
        antwort: 'Ja. Bei der Online-Zulassung schicken Sie uns Ihre Dokumente per WhatsApp oder E-Mail. Wir erledigen alles digital und versenden Kennzeichen + Papiere per Express-Post zu Ihnen nach Hause.',
      },
      {
        frage: 'Wo genau befindet sich Ihr Büro?',
        antwort: 'Willy-Brandt-Platz 6, 44532 Lünen. Gut erreichbar über die A1 und A2 — mit Parkplätzen direkt vor der Tür. Öffnungszeiten: Mo–Fr 09:30–13:30 & 15:00–19:00 Uhr, Sa 12:00–16:00 Uhr.',
      },
    ],
  },
  {
    id: 'gewerbe',
    label: 'Gewerbe & Fuhrpark',
    icon: 'ri-building-2-line',
    fragen: [
      {
        frage: 'Können Firmen und Gewerbekunden den Service nutzen?',
        antwort: 'Ja. Für Autohäuser, Flotten und Gewerbekunden bieten wir individuelle Rahmenverträge mit Sammelabwicklung, Hol- & Bringservice und prioritärer Bearbeitung.',
      },
      {
        frage: 'Bekomme ich eine Gewerbe-Rechnung?',
        antwort: 'Ja. Alle Rechnungen für Gewerbekunden werden mit ausgewiesener Mehrwertsteuer ausgestellt — für den vollständigen Vorsteuerabzug. Auf Wunsch auch als Sammelrechnung am Monatsende.',
      },
      {
        frage: 'Gibt es Mengenrabatte für Autohäuser?',
        antwort: 'Ja. Wir bieten individuelle Konditionen je Auftragsvolumen an. Ab 3–5 Fahrzeugen pro Monat sind attraktive Rahmenverträge möglich. Bitte direkt anfragen für ein unverbindliches Angebot.',
      },
      {
        frage: 'Können Sie SEPA-Lastschriftmandate für Firmen erstellen?',
        antwort: 'Ja. Im Rahmen der Kfz-Zulassung erstellen wir alle erforderlichen Vollmachten und SEPA-Mandate für Ihr Unternehmen. Das erspart Ihnen unnötigen Papierkram.',
      },
      {
        frage: 'Wie starte ich mit einem Rahmenvertrag?',
        antwort: 'Kontaktieren Sie uns per WhatsApp oder Telefon für ein unverbindliches Erstgespräch. Wir klären Umfang, Konditionen und Abläufe — und starten innerhalb weniger Tage mit der gemeinsamen Zusammenarbeit.',
      },
    ],
  },
];

const BASE_URL = (typeof import.meta.env !== 'undefined' && import.meta.env.VITE_SITE_URL)
  ? import.meta.env.VITE_SITE_URL
  : 'https://zulassungen-adl.de';

const FAQPage = () => {
  const alleFragen = kategorien.flatMap((k) => k.fragen);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: alleFragen.map((f) => ({
      '@type': 'Question',
      name: f.frage,
      acceptedAnswer: { '@type': 'Answer', text: f.antwort },
    })),
  };

  useSEO({
    title: 'FAQ Kfz-Zulassung Lünen | Zulassungsdienst an der Lippe',
    description: 'Antworten auf die häufigsten Fragen zu Kfz-Zulassung, Kosten, Ablauf, Region und Gewerbeservice in Lünen.',
    keywords: 'FAQ Kfz-Zulassung Lünen, Fragen Zulassungsdienst, Kosten Anmeldung',
    canonical: '/faq',
    ogLocale: 'de_DE',
    ogType: 'website',
    schema: faqSchema,
  });

  const [aktivKategorie, setAktivKategorie] = useState('allgemein');
  const [offenIdx, setOffenIdx] = useState<number | null>(null);

  const aktFragen = kategorien.find((k) => k.id === aktivKategorie)?.fragen ?? [];

  return (
    <div className="font-sans">
      <Header />
      <main className="pt-20">

        {/* Hero */}
        <section className="bg-navy-900 py-16 text-center">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <span className="text-xs font-bold text-white/40 uppercase tracking-widest">FAQ</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-4 leading-tight">
              Häufige Fragen.
              <span className="sr-only"> zur Kfz-Zulassung in Lünen</span>
            </h1>
            <p className="text-white/60 text-base max-w-lg mx-auto">
              Alle wichtigen Fragen rund um Kfz-Zulassung, Preise, Regionen und Gewerbeservice —
              verständlich beantwortet.
            </p>
          </div>
        </section>

        {/* Kategorie-Tabs + Accordion */}
        <section className="bg-offwhite py-14">
          <div className="max-w-4xl mx-auto px-4 md:px-6">

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-8 bg-white p-1.5 rounded-2xl border border-gray-100">
              {kategorien.map((k) => (
                <button
                  key={k.id}
                  type="button"
                  onClick={() => { setAktivKategorie(k.id); setOffenIdx(null); }}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                    aktivKategorie === k.id
                      ? 'bg-navy-900 text-white'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-navy-900'
                  }`}
                >
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className={`${k.icon} text-sm`}></i>
                  </div>
                  {k.label}
                </button>
              ))}
            </div>

            {/* Accordion */}
            <div className="space-y-2">
              {aktFragen.map((f, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-navy-100 transition-colors"
                >
                  <button
                    type="button"
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer hover:bg-offwhite transition-colors"
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
          </div>
        </section>

        {/* Noch Fragen CTA */}
        <section className="bg-white py-16 border-t border-gray-100">
          <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-whatsapp rounded-2xl mx-auto mb-5">
              <img src="/images/whatsapp-bf1279.svg" className="w-full h-full object-contain" alt="WhatsApp" loading="lazy" decoding="async" />
            </div>
            <h2 className="text-2xl font-extrabold text-navy-900 mb-3">
              Ihre Frage ist nicht dabei?
            </h2>
            <p className="text-gray-500 text-base mb-6">
              Schreiben Sie uns per WhatsApp — wir antworten meist innerhalb von 5 Minuten.
              Kostenlos, unverbindlich, direkt.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://wa.me/4923063548896"
                target="_blank"
                rel="nofollow noreferrer"
                className="inline-flex items-center gap-2 bg-whatsapp text-white font-bold px-7 py-4 rounded-xl text-base whitespace-nowrap cursor-pointer hover:bg-green-600 transition-colors"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <img src="/images/whatsapp-bf1279.svg" className="w-full h-full object-contain" alt="WhatsApp" loading="lazy" decoding="async" />
                </div>
                Direkt fragen per WhatsApp
              </a>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 border-2 border-navy-100 text-navy-900 font-semibold px-7 py-4 rounded-xl text-base whitespace-nowrap cursor-pointer hover:border-navy-300 hover:bg-navy-50 transition-colors"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-mail-line"></i>
                </div>
                Kontaktformular
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default FAQPage;