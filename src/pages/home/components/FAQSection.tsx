import { useState } from 'react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    frage: 'Wie läuft eine Kfz-Zulassung ab?',
    antwort:
      'Sie nehmen Kontakt mit uns auf — per WhatsApp, Telefon oder Kontaktformular. Wir prüfen Ihre Unterlagen, klären alle Details und übernehmen dann die komplette Abwicklung bei der Zulassungsstelle. Sie erhalten Kennzeichen und Fahrzeugpapiere direkt bei uns oder per Hol- & Bringservice.',
  },
  {
    frage: 'Für welche Regionen ist der Vor-Ort-Service möglich?',
    antwort:
      'Unser Hol- & Bringservice ist verfügbar für: Lünen, Dortmund, Bergkamen, Werne, Selm, Kreis Unna, Kamen und Schwerte. Für alle anderen Regionen bieten wir unseren bundesweiten Online-Zulassungsservice an.',
  },
  {
    frage: 'Wie lange dauert eine Zulassung?',
    antwort:
      'Nach Eingang aller vollständigen Unterlagen bearbeiten wir Ihren Auftrag schnellstmöglich. Bei Kurzzeitkennzeichen und Abmeldungen ist oft auch eine Bearbeitung am gleichen Tag möglich.',
  },
  {
    frage: 'Muss ich selbst zur Zulassungsstelle gehen?',
    antwort:
      'Nein — das ist unser Service! Sie müssen nicht persönlich zur Zulassungsstelle. Wir erledigen alles mit einer Vollmacht für Sie. Entweder geben Sie die Unterlagen bei uns ab, senden Sie per WhatsApp, oder wir holen sie mit unserem Hol- & Bringservice bei Ihnen ab.',
  },
  {
    frage: 'Können auch Firmen den Service nutzen?',
    antwort:
      'Ja, wir arbeiten aktiv mit Autohäusern, Leasinggesellschaften und Fuhrparkbetreibern zusammen. Für regelmäßige Zulassungen bieten wir individuelle Rahmenverträge mit Mengenrabatten, priorisierten Bearbeitungszeiten und monatlicher Sammelabrechnung an.',
  },
];

const FAQSection = () => {
  const [offen, setOffen] = useState<number | null>(null);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.frage,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.antwort,
      },
    })),
  };

  return (
    <section className="bg-white py-20">
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-navy-700 uppercase tracking-widest bg-navy-50 px-3 py-1 rounded-lg">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 mt-4 mb-3">
            Häufige Fragen.
          </h2>
          <p className="text-gray-500 text-base max-w-lg mx-auto">
            Die wichtigsten Fragen rund um unseren Service — verständlich beantwortet.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((f, idx) => (
            <div
              key={idx}
              className="border border-gray-100 rounded-2xl overflow-hidden hover:border-navy-100 transition-colors"
            >
              <button
                type="button"
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer bg-white hover:bg-offwhite transition-colors"
                onClick={() => setOffen(offen === idx ? null : idx)}
              >
                <span className="font-semibold text-navy-900 text-base">{f.frage}</span>
                <div className={`w-7 h-7 flex items-center justify-center shrink-0 rounded-full transition-colors ${offen === idx ? 'bg-navy-900' : 'bg-navy-50'}`}>
                  <i className={`ri-${offen === idx ? 'subtract' : 'add'}-line text-sm ${offen === idx ? 'text-white' : 'text-navy-700'}`}></i>
                </div>
              </button>
              {offen === idx && (
                <div className="px-6 pb-5 bg-white">
                  <p className="text-gray-500 text-sm leading-relaxed border-t border-gray-50 pt-4">
                    {f.antwort}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/faq"
            className="inline-flex items-center gap-2 border-2 border-navy-100 text-navy-900 font-semibold text-sm px-6 py-3 rounded-xl hover:border-navy-300 hover:bg-navy-50 transition-all whitespace-nowrap cursor-pointer"
          >
            Alle Fragen ansehen
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-arrow-right-line"></i>
            </div>
          </Link>
          <a
            href="https://wa.me/4923063548896"
            target="_blank"
            rel="nofollow noreferrer"
            className="inline-flex items-center gap-2 bg-whatsapp text-white font-semibold text-sm px-6 py-3 rounded-xl hover:bg-green-600 transition-colors whitespace-nowrap cursor-pointer"
          >
            <div className="w-4 h-4 flex items-center justify-center">
              <img src="/images/whatsapp-bf1279.svg" className="w-full h-full object-contain" alt="WhatsApp" loading="lazy" decoding="async" />
            </div>
            Direkt fragen per WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
