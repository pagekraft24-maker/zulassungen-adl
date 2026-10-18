import { Link } from 'react-router-dom';
import useSEO from '@/hooks/useSEO';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import WhatsAppWidget from '@/components/feature/WhatsAppWidget';

const quickLinks = [
  { icon: 'ri-home-4-fill', label: 'Startseite', to: '/', sub: 'Zurück zur Übersicht' },
  { icon: 'ri-list-check-2', label: 'Alle Leistungen', to: '/leistungen', sub: 'Preise & Services' },
  { icon: 'ri-send-plane-fill', label: 'Anfrage stellen', to: '/leistungen', sub: 'Direkt anfragen' },
  { icon: 'ri-question-answer-fill', label: 'FAQ', to: '/faq', sub: 'Häufige Fragen' },
];

const NotFoundPage = () => {
  useSEO({
    title: '404 · Seite nicht gefunden | Zulassungsdienst an der Lippe',
    description: 'Diese Seite wurde leider nicht gefunden. Nutzen Sie unsere Schnelllinks oder rufen Sie uns direkt an: +49 2306 3548896.',
    canonical: '/404',
  });

  return (
    <div className="font-sans">
      <Header />
      <main className="pt-20 min-h-[80vh] flex items-center justify-center relative overflow-hidden">

        {/* Hintergrund-404 */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span
            className="font-black text-gray-50"
            style={{ fontSize: 'clamp(160px, 30vw, 380px)', lineHeight: 1 }}
          >
            404
          </span>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 py-16 text-center">

          {/* Icon */}
          <div className="w-16 h-16 flex items-center justify-center bg-navy-900 rounded-2xl mx-auto mb-6">
            <i className="ri-compass-discover-line text-white text-3xl"></i>
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-3 leading-tight">
            Diese Seite konnten wir nicht finden.
          </h1>
          <p className="text-gray-500 text-base max-w-md mx-auto mb-10">
            Vielleicht war der Link falsch oder die Seite wurde verschoben.
            Probieren Sie einen der folgenden Schnelllinks:
          </p>

          {/* Quick Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {quickLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="flex flex-col items-center gap-3 p-5 bg-white border border-gray-100 rounded-2xl hover:border-navy-200 hover:bg-offwhite transition-all cursor-pointer group"
              >
                <div className="w-11 h-11 flex items-center justify-center bg-navy-50 rounded-xl group-hover:bg-navy-100 transition-colors">
                  <i className={`${l.icon} text-navy-700 text-xl`}></i>
                </div>
                <div>
                  <div className="font-bold text-navy-900 text-sm">{l.label}</div>
                  <div className="text-gray-400 text-xs mt-0.5">{l.sub}</div>
                </div>
              </Link>
            ))}
          </div>

          {/* Kontakt */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://wa.me/4923063548896"
              target="_blank"
              rel="nofollow noreferrer"
              className="inline-flex items-center gap-2 bg-whatsapp text-white font-bold px-7 py-3.5 rounded-xl text-sm whitespace-nowrap cursor-pointer hover:bg-green-600 transition-colors"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <img src="/images/whatsapp-bf1279.svg" className="w-full h-full object-contain" alt="WhatsApp" loading="lazy" decoding="async" />
              </div>
              WhatsApp öffnen
            </a>
            <a
              href="tel:+4923063548896"
              className="inline-flex items-center gap-2 border-2 border-navy-100 text-navy-900 font-semibold px-7 py-3.5 rounded-xl text-sm whitespace-nowrap cursor-pointer hover:border-navy-300 hover:bg-navy-50 transition-colors"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-phone-fill text-sm"></i>
              </div>
              023063548896
            </a>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default NotFoundPage;
