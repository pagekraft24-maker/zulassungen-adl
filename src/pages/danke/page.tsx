import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useSEO from '@/hooks/useSEO';
import Header from '@/components/feature/Header';
import WhatsAppWidget from '@/components/feature/WhatsAppWidget';

const DankePage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const vorname = params.get('name') ?? '';
  const service = params.get('service') ?? '';

  useSEO({
    title: 'Danke für Ihre Anfrage | Zulassungsdienst an der Lippe',
    description: 'Vielen Dank für Ihre Anfrage! Wir melden uns innerhalb von Minuten bei Ihnen — telefonisch oder per WhatsApp.',
    canonical: '/danke',
    noindex: true,
  });

  // Konfetti-Effekt (CSS-basiert)
  const konfettiRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = konfettiRef.current;
    if (!el) return;
    const farben = ['#0f172a', '#25D366', '#f59e0b', '#6366f1', '#f43f5e'];
    const stuecke = Array.from({ length: 36 }, (_, i) => {
      const d = document.createElement('div');
      const farbe = farben[i % farben.length];
      const links = Math.random() * 100;
      const delay = Math.random() * 0.8;
      const dauer = 1.8 + Math.random() * 1;
      d.style.cssText = `
        position:absolute;left:${links}%;top:-10px;
        width:8px;height:8px;border-radius:2px;
        background:${farbe};opacity:0.9;
        animation:konfetti ${dauer}s ${delay}s ease-in forwards;
        transform:rotate(${Math.random() * 360}deg);
      `;
      return d;
    });
    stuecke.forEach((s) => el.appendChild(s));
    const style = document.createElement('style');
    style.textContent = `@keyframes konfetti{0%{transform:translateY(0) rotate(0deg);opacity:1;}100%{transform:translateY(600px) rotate(720deg);opacity:0;}}`;
    document.head.appendChild(style);
    return () => {
      stuecke.forEach((s) => s.remove());
      style.remove();
    };
  }, []);

  return (
    <div className="font-sans min-h-screen bg-offwhite flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center pt-20 pb-16 px-4">
        <div className="max-w-2xl w-full">

          {/* Konfetti-Container */}
          <div ref={konfettiRef} className="fixed inset-x-0 top-0 pointer-events-none overflow-hidden h-screen z-50"></div>

          {/* Erfolgs-Box */}
          <div className="bg-white rounded-3xl border border-gray-100 p-8 md:p-12 text-center">
            {/* Icon */}
            <div className="relative inline-flex mb-6">
              <div className="w-24 h-24 flex items-center justify-center bg-whatsapp/10 rounded-3xl">
                <i className="ri-check-double-line text-whatsapp text-5xl"></i>
              </div>
              <div className="absolute -top-1 -right-1 w-7 h-7 flex items-center justify-center bg-whatsapp rounded-full">
                <i className="ri-check-line text-white text-sm"></i>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-3xl md:text-4xl font-extrabold text-navy-900 leading-tight mb-3">
              Vielen Dank{vorname ? `, ${vorname}` : ''} — <br className="hidden sm:block" />
              Ihre Anfrage ist angekommen.
            </h1>

            {/* Subline */}
            <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-8 max-w-md mx-auto">
              Wir melden uns innerhalb von Minuten bei Ihnen —{' '}
              <strong className="text-navy-900">telefonisch oder per WhatsApp</strong>.
              Versprochen.
            </p>

            {/* Anfrage-Info Box */}
            <div className="bg-offwhite rounded-2xl px-6 py-4 mb-8 border border-gray-100 text-left">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 flex items-center justify-center bg-navy-50 rounded-lg shrink-0 mt-0.5">
                  <i className="ri-file-list-3-line text-navy-700 text-sm"></i>
                </div>
                <div>
                  <div className="font-bold text-navy-900 text-sm mb-1">Ihre Anfrage</div>
                  {service && (
                    <div className="text-gray-600 text-sm">
                      Service: <span className="font-semibold text-navy-900">{service}</span>
                    </div>
                  )}
                  <div className="text-gray-500 text-xs mt-1.5 flex items-center gap-1.5">
                    <div className="w-3 h-3 flex items-center justify-center">
                      <i className="ri-time-line text-xs"></i>
                    </div>
                    Bearbeitung: Mo–Fr 09:30–19:00 · Sa 12:00–16:00
                  </div>
                </div>
              </div>
            </div>

            {/* Nächste Schritte */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 text-left">
              {[
                { icon: 'ri-phone-fill', nr: '1', text: 'Wir rufen Sie an oder schreiben per WhatsApp', farbe: 'bg-navy-50 text-navy-700' },
                { icon: 'ri-file-check-line', nr: '2', text: 'Sie schicken uns die benötigten Unterlagen', farbe: 'bg-navy-50 text-navy-700' },
                { icon: 'ri-car-fill', nr: '3', text: 'Wir erledigen alles — Sie erhalten Ihr Kennzeichen', farbe: 'bg-whatsapp/10 text-whatsapp' },
              ].map((s) => (
                <div key={s.nr} className={`flex items-start gap-3 p-3 rounded-xl ${s.farbe.split(' ')[0]}`}>
                  <div className={`w-7 h-7 flex items-center justify-center rounded-lg shrink-0 ${s.farbe}`}>
                    <i className={`${s.icon} text-sm`}></i>
                  </div>
                  <p className="text-gray-700 text-xs leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="https://wa.me/4923063548896" target="_blank" rel="nofollow noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-whatsapp text-white font-bold px-7 py-4 rounded-xl text-sm whitespace-nowrap cursor-pointer hover:bg-green-600 transition-colors">
                <div className="w-5 h-5 flex items-center justify-center">
                  <img src="/images/whatsapp-bf1279.svg" className="w-full h-full object-contain" alt="WhatsApp" loading="lazy" decoding="async" />
                </div>
                Per WhatsApp bestätigen
              </a>
              <Link to="/" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-navy-100 text-navy-900 font-semibold px-7 py-4 rounded-xl text-sm whitespace-nowrap cursor-pointer hover:border-navy-300 hover:bg-navy-50 transition-colors">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-home-line"></i>
                </div>
                Zur Startseite
              </Link>
              <Link to="/leistungen" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-navy-700 font-semibold px-7 py-4 rounded-xl text-sm whitespace-nowrap cursor-pointer hover:text-navy-900 transition-colors">
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-add-line"></i>
                </div>
                Weitere Anfrage starten
              </Link>
            </div>
          </div>

          {/* Kontakt-Fallback */}
          <p className="text-center text-gray-400 text-sm mt-6">
            Dringend? Rufen Sie uns an:{' '}
            <a href="tel:+4923063548896" className="text-navy-700 font-semibold hover:text-navy-900">
              02306 3548896
            </a>
          </p>
        </div>
      </main>
      <WhatsAppWidget />
    </div>
  );
};

export default DankePage;
