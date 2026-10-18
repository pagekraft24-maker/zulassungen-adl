import { Link } from 'react-router-dom';
import useSEO from '@/hooks/useSEO';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import WhatsAppWidget from '@/components/feature/WhatsAppWidget';
import { leistungen } from '@/mocks/leistungen';

const BASE_URL = (typeof import.meta.env !== 'undefined' && import.meta.env.VITE_SITE_URL)
  ? import.meta.env.VITE_SITE_URL
  : 'https://zulassungen-adl.de';

const LeistungenPage = () => {
  useSEO({
    title: 'Alle Leistungen & Preise | Zulassungsdienst an der Lippe',
    description: 'Übersicht aller Kfz-Zulassungsservices mit Festpreisen in Lünen. Anmeldung ab 129,90 €, Ummeldung ab 99,00 €, Abmeldung ab 29,90 €. TÜV-zertifiziert.',
    keywords: 'Kfz-Zulassung Leistungen, Zulassungsdienst Preise Lünen, Festpreis Kfz-Anmeldung',
    canonical: '/leistungen',
    ogLocale: 'de_DE',
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'OfferCatalog',
      name: 'Kfz-Zulassungsservices Lünen',
      itemListElement: leistungen.map((l) => ({
        '@type': 'Offer',
        name: l.titel,
        description: l.kurzbeschreibung,
        price: l.preis.replace(/[^\d.,]/g, '').replace(',', '.').split(' ')[0] || undefined,
        priceCurrency: 'EUR',
        url: `${BASE_URL}/leistungen/${l.slug}`,
        availability: 'https://schema.org/InStock',
      })),
    },
  });

  return (
    <div className="font-sans">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-navy-900 py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
            <span className="text-xs font-semibold text-white/50 uppercase tracking-widest">
              Übersicht
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mt-3 mb-4">
              Alle Leistungen & Preise
            </h1>
            <p className="text-white/60 text-base max-w-xl mx-auto">
              Festpreise, transparente Abrechnung, zertifizierter Service — für Privatkunden und Gewerbe.
            </p>
          </div>
        </section>

        {/* Privatkunden */}
        <section className="bg-offwhite py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold text-navy-900 mb-6">Privatkunden</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {leistungen.filter((l) => l.kategorie !== 'gewerbe').map((l) => (
                <Link
                  key={l.slug}
                  to={`/leistungen/${l.slug}`}
                  className="group bg-white rounded-2xl p-5 border border-gray-100 hover:border-navy-200 hover:shadow-sm transition-all cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-navy-900 rounded-xl shrink-0">
                      <i className={`${l.icon} text-white text-xl`}></i>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-0.5 mb-1">
                        <h3 className="font-bold text-navy-900 text-base">{l.titel}</h3>
                        <span className="font-bold text-whatsapp text-xl whitespace-nowrap">{l.preis}</span>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed mb-2">{l.kurzbeschreibung}</p>
                      <div className="flex items-center gap-3 text-xs text-gray-400">
                        <span className="flex items-center gap-1">
                          <i className="ri-time-line"></i>
                          {l.bearbeitungszeit}
                        </span>
                      </div>
                    </div>
                    <div className="w-5 h-5 flex items-center justify-center text-gray-300 group-hover:text-navy-700 transition-colors shrink-0">
                      <i className="ri-arrow-right-line"></i>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Gewerbe */}
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold text-navy-900 mb-6">Gewerbe & Autohäuser</h2>
            {leistungen.filter((l) => l.kategorie === 'gewerbe').map((l) => (
              <Link
                key={l.slug}
                to={`/leistungen/${l.slug}`}
                className="group flex items-start gap-4 bg-navy-50 rounded-2xl p-5 border border-navy-100 hover:bg-navy-900 hover:border-navy-900 transition-all cursor-pointer"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-navy-900 group-hover:bg-white/10 rounded-xl shrink-0">
                  <i className={`${l.icon} text-white text-xl`}></i>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-start gap-x-3 gap-y-0.5 mb-1">
                    <h3 className="font-bold text-navy-900 group-hover:text-white text-base transition-colors">{l.titel}</h3>
                    <span className="font-bold text-whatsapp text-xl whitespace-nowrap transition-colors">{l.preis}</span>
                  </div>
                  <p className="text-gray-600 group-hover:text-white/70 text-sm leading-relaxed mb-2 transition-colors line-clamp-3">{l.beschreibung}</p>
                  <div className="flex items-center gap-2 text-navy-700 group-hover:text-whatsapp text-sm font-semibold transition-colors">
                    Jetzt Angebot anfordern
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-arrow-right-line"></i>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy-900 py-12">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Nicht sicher, welche Leistung Sie brauchen?</h2>
            <p className="text-white/60 mb-6">Schreiben Sie uns — wir beraten Sie kostenlos und empfehlen die passende Lösung.</p>
            <a
              href="https://wa.me/4923063548896"
              target="_blank"
              rel="nofollow noreferrer"
              className="inline-flex items-center gap-2 bg-whatsapp text-white font-semibold px-6 py-3 rounded-lg whitespace-nowrap cursor-pointer hover:opacity-90 transition-opacity"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <img src="/images/whatsapp-bf1279.svg" className="w-full h-full object-contain" alt="WhatsApp" loading="lazy" decoding="async" />
              </div>
              Kostenlos beraten lassen
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default LeistungenPage;