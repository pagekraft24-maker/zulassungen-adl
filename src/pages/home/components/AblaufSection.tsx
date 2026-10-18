import { useState } from 'react';
import ServiceModal from '@/components/feature/ServiceModal';

const nrColors = [
  'text-emerald-400',
  'text-sky-400',
  'text-violet-400',
  'text-orange-400',
  'text-rose-400',
];

const schritte = [
  {
    nr: '01',
    icon: 'ri-smartphone-line',
    titel: 'Online starten oder anrufen',
    beschreibung: 'Anfrage online stellen oder kurz anrufen — wir melden uns innerhalb von Minuten.',
  },
  {
    nr: '02',
    icon: 'ri-file-upload-line',
    titel: 'Unterlagen übermitteln',
    beschreibung: 'Digital hochladen oder persönlich vorbeibringen. Wir sagen Ihnen genau, was gebraucht wird.',
  },
  {
    nr: '03',
    icon: 'ri-search-eye-line',
    titel: 'Prüfung & Vorbereitung',
    beschreibung: 'Wir prüfen alles vollständig: Unterlagen, Vollmachten, SEPA, Kennzeichen-Abstimmung.',
  },
  {
    nr: '04',
    icon: 'ri-government-line',
    titel: 'Zulassung abwickeln',
    beschreibung: 'Klassisch oder digital — kein Termin, kein Warten. Wir erledigen den Behördengang für Sie.',
  },
  {
    nr: '05',
    icon: 'ri-car-line',
    titel: 'Übergabe & fertig',
    beschreibung: 'Unterlagen und Kennzeichen direkt vor Ort oder per Versand. Vollständig erledigt.',
  },
];

const AblaufSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="text-center mb-12 md:mb-20">
            <span className="text-xs font-semibold text-navy-700 uppercase tracking-widest bg-navy-50 px-3 py-1 rounded-lg">
              So funktioniert&apos;s
            </span>
            <h2 className="text-3xl md:text-6xl font-black text-navy-900 mt-4 md:mt-5 mb-3 md:mb-4 leading-tight">
              So einfach läuft&apos;s ab.
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto text-base md:text-lg">
              5 Schritte — kein Behördengang nötig.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-6">
            {schritte.map((s, idx) => (
              <div
                key={s.nr}
                className="relative flex flex-col md:flex-row items-center md:items-stretch gap-0 group"
              >
                {/* Riesige Zahl — links */}
                <div className="hidden md:flex items-center justify-center w-64 shrink-0 relative overflow-hidden">
                  <span className={`font-black text-[10rem] leading-none select-none tracking-tighter opacity-30 ${nrColors[idx]}`}>
                    {s.nr}
                  </span>
                </div>

                {/* Karte */}
                <div className="flex-1 flex items-center gap-8 bg-offwhite group-hover:bg-navy-950 rounded-3xl px-8 py-8 transition-all duration-300 border-2 border-transparent group-hover:border-navy-800">
                  {/* Icon-Kreis */}
                  <div className="w-20 h-20 flex items-center justify-center bg-navy-100 group-hover:bg-navy-800 rounded-2xl shrink-0 transition-colors">
                    <i className={`${s.icon} text-navy-800 group-hover:text-white text-4xl transition-colors`}></i>
                  </div>

                  {/* Inhalt */}
                  <div className="flex-1 min-w-0">
                    {/* Mobile Nummer */}
                    <div className={`md:hidden font-black text-4xl leading-none mb-2 tracking-tighter select-none opacity-25 ${nrColors[idx]}`}>
                      {s.nr}
                    </div>
                    <div className="font-black text-navy-900 group-hover:text-white text-lg md:text-3xl leading-tight mb-2 transition-colors">
                      {s.titel}
                    </div>
                    <p className="text-gray-500 group-hover:text-navy-300 text-sm md:text-base leading-relaxed transition-colors">
                      {s.beschreibung}
                    </p>
                  </div>

                  {/* Schritt-Badge rechts */}
                  <div className="hidden lg:flex items-center justify-center w-14 h-14 rounded-2xl bg-navy-900/5 group-hover:bg-white/10 transition-colors shrink-0">
                    <span className="font-black text-navy-900/30 group-hover:text-white/40 text-xl transition-colors">
                      {idx + 1}
                    </span>
                  </div>
                </div>

                {/* Connector-Linie */}
                {idx < schritte.length - 1 && (
                  <div className="hidden md:block absolute left-[127px] -bottom-3 w-0.5 h-6 bg-navy-100 z-10"></div>
                )}
              </div>
            ))}
          </div>

          {/* Abschluss */}
          <div className="mt-10 md:mt-16 bg-navy-950 rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
            <div className="flex items-center gap-4 md:gap-5">
              <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-whatsapp rounded-2xl shrink-0">
                <i className="ri-check-double-line text-white text-2xl md:text-3xl"></i>
              </div>
              <div>
                <div className="font-black text-white text-xl md:text-3xl mb-1 whitespace-nowrap">Schnell. Digital. Zugelassen.</div>
                <p className="text-white/50 text-sm md:text-base">Zuverlässig, strukturiert und ohne unnötigen Aufwand.</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="https://wa.me/4923063548896"
                target="_blank"
                rel="nofollow noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-whatsapp text-white font-bold text-base px-7 py-4 rounded-2xl hover:bg-green-600 transition-colors whitespace-nowrap cursor-pointer"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <img src="/images/whatsapp-bf1279.svg" className="w-full h-full object-contain" alt="WhatsApp" loading="lazy" decoding="async" />
                </div>
                Per WhatsApp starten
              </a>
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 bg-white text-navy-900 font-bold text-base px-7 py-4 rounded-2xl hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer"
              >
                Leistung auswählen
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-arrow-right-line"></i>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {modalOpen && <ServiceModal onClose={() => setModalOpen(false)} />}
    </>
  );
};

export default AblaufSection;
