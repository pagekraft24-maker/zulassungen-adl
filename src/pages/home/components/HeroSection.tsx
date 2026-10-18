import { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';

const leistungen = [
  { slug: 'kfz-anmeldung', icon: 'ri-car-fill', name: 'Kfz-Anmeldung', preis: 'ab 129,90 €', desc: 'Neues Fahrzeug zulassen' },
  { slug: 'kfz-ummeldung', icon: 'ri-arrow-left-right-line', name: 'Kfz-Ummeldung', preis: 'ab 99,00 €', desc: 'Halterwechsel oder Umzug' },
  { slug: 'kfz-abmeldung', icon: 'ri-close-circle-fill', name: 'Kfz-Abmeldung', preis: 'ab 29,90 €', desc: 'Fahrzeug stilllegen' },
  { slug: 'wunschkennzeichen', icon: 'ri-hashtag', name: 'Wunschkennzeichen', preis: 'auf Anfrage', desc: 'Kennzeichen reservieren' },
  { slug: 'kurzzeitkennzeichen', icon: 'ri-time-line', name: 'Kurzzeitkennzeichen', preis: 'auf Anfrage', desc: 'Temporäres Kennzeichen' },
];

/* Typewriter hook */
function useTypewriter(text: string, speed = 60, startDelay = 300, enabled = true) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    let idx = 0;
    setDisplayed('');
    setDone(false);
    const startTimer = setTimeout(() => {
      const interval = setInterval(() => {
        idx += 1;
        if (idx >= text.length) {
          setDisplayed(text);
          setDone(true);
          clearInterval(interval);
        } else {
          setDisplayed(text.slice(0, idx));
        }
      }, speed);
      return () => clearInterval(interval);
    }, startDelay);
    return () => clearTimeout(startTimer);
  }, [text, speed, startDelay, enabled]);

  return { displayed, done };
}

const HeroSection = () => {
  const [visible, setVisible] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownStyle, setDropdownStyle] = useState({ top: 0, left: 0, width: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const line1 = 'Kfz-Zulassung';
  const line2 = 'jetzt online.';
  const { displayed: d1, done: done1 } = useTypewriter(line1, 55, 400, visible);
  const { displayed: d2 } = useTypewriter(line2, 55, done1 ? 200 : 999999, done1);

  // Click outside to close (checks button and dropdown)
  useEffect(() => {
    if (!dropdownOpen) return;
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        buttonRef.current?.contains(target) ||
        dropdownRef.current?.contains(target)
      ) {
        return;
      }
      setDropdownOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [dropdownOpen]);

  const updatePosition = useCallback(() => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const dropW = Math.min(Math.max(rect.width, 384), window.innerWidth - 32);
      let left = rect.left + rect.width / 2 - dropW / 2;
      // Clamp to viewport
      if (left < 16) left = 16;
      if (left + dropW > window.innerWidth - 16) left = window.innerWidth - dropW - 16;
      setDropdownStyle({
        top: rect.bottom + 12,
        left,
        width: dropW,
      });
    }
  }, []);

  useEffect(() => {
    if (dropdownOpen) {
      updatePosition();
      const scrollHandler = () => setDropdownOpen(false);
      window.addEventListener('scroll', scrollHandler, { once: true, passive: true });
      window.addEventListener('resize', updatePosition);
      return () => {
        window.removeEventListener('scroll', scrollHandler);
        window.removeEventListener('resize', updatePosition);
      };
    }
  }, [dropdownOpen, updatePosition]);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/4da44a64ed27dace151a4fcb19c2948-2101df57-3c6395.jpg"
          alt="Kfz-Zulassung online Lünen — Zulassungsdienst an der Lippe"
          className="w-full h-full object-cover object-top"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/85 to-navy-900/60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-navy-950/50"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 pt-28 pb-20">
        <div className="max-w-3xl">

          {/* Online-Badge */}
          <div className={`inline-flex items-center gap-2 bg-whatsapp/20 border border-whatsapp/40 text-white text-xs md:text-base px-3 md:px-5 py-2 md:py-2.5 rounded-lg mb-6 md:mb-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="w-2 h-2 rounded-full bg-whatsapp animate-pulse shrink-0"></span>
            <span className="whitespace-nowrap">100 % online — kein Behördengang nötig</span>
          </div>

          {/* H1 Typewriter */}
          <h1 className="text-5xl md:text-8xl font-black text-white leading-[1.05] mb-6">
            <span className="inline-block min-w-[1ch]">
              {d1}
              {!done1 && <span className="inline-block w-[3px] h-[0.8em] bg-whatsapp ml-1 animate-pulse align-middle"></span>}
            </span>
            <br />
            <span className="text-whatsapp whitespace-nowrap inline-block min-w-[1ch]">
              {d2}
              {done1 && d2.length < line2.length && (
                <span className="inline-block w-[3px] h-[0.8em] bg-whatsapp ml-1 animate-pulse align-middle"></span>
              )}
              {d2.length === line2.length && (
                <span className="relative inline-block">
                  <span className={`absolute bottom-1 left-0 h-[2px] bg-whatsapp transition-[width] duration-700 ease-out delay-300 ${visible ? 'w-full' : 'w-0'}`}></span>
                </span>
              )}
            </span>
            <span className="sr-only"> – Zulassungsdienst in Lünen &amp; Kreis Unna</span>
          </h1>

          {/* Subline */}
          <p className={`text-white/70 text-base md:text-2xl leading-relaxed mb-8 md:mb-10 max-w-xl transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Anmeldung, Ummeldung &amp; Abmeldung — 100% online
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 mb-10 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>

            {/* Primär */}
            <Link
              to="/leistungen/kfz-anmeldung"
              className="inline-flex items-center justify-center gap-2 bg-white text-navy-900 font-black text-base md:text-xl px-6 md:px-9 py-4 md:py-5 rounded-2xl whitespace-nowrap cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
                <i className="ri-car-fill text-base md:text-xl"></i>
              </div>
              Jetzt anmelden
              <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
                <i className="ri-arrow-right-line text-base md:text-xl"></i>
              </div>
            </Link>

            {/* Dropdown: Alle Leistungen */}
            <div className="relative">
              <button
                ref={buttonRef}
                type="button"
                onClick={toggleDropdown}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 border-2 border-white/25 text-white font-black text-base md:text-xl px-6 md:px-9 py-4 md:py-5 rounded-2xl whitespace-nowrap cursor-pointer hover:bg-white/20 transition-colors"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-list-check-3 text-xl"></i>
                </div>
                Alle Leistungen
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className={`ri-arrow-down-s-line text-xl transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}></i>
                </div>
              </button>

              {/* Dropdown Panel — Portal to body, fixed position, max z-index */}
              {dropdownOpen && createPortal(
                <div
                  ref={dropdownRef}
                  className="bg-white rounded-2xl border border-gray-100 shadow-2xl max-h-[70vh] overflow-y-auto"
                  style={{
                    position: 'fixed',
                    top: dropdownStyle.top,
                    left: dropdownStyle.left,
                    width: dropdownStyle.width,
                    zIndex: 99999,
                  }}
                >
                  {leistungen.map((l) => (
                    <Link
                      key={l.slug}
                      to={`/leistungen/${l.slug}`}
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center gap-4 px-5 py-4 hover:bg-navy-50 transition-colors cursor-pointer border-b border-gray-50 last:border-0"
                    >
                      <div className="w-10 h-10 flex items-center justify-center bg-navy-100 rounded-xl shrink-0">
                        <i className={`${l.icon} text-navy-800 text-lg`}></i>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-navy-900 text-sm">{l.name}</div>
                        <div className="text-gray-400 text-xs truncate">{l.desc}</div>
                      </div>
                      <div className="font-bold text-navy-700 text-sm whitespace-nowrap">{l.preis}</div>
                    </Link>
                  ))}
                  <Link
                    to="/leistungen"
                    onClick={() => setDropdownOpen(false)}
                    className="flex items-center justify-center gap-2 px-5 py-4 bg-navy-950 text-white font-bold text-sm hover:bg-navy-800 transition-colors cursor-pointer"
                  >
                    Alle Leistungen ansehen
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-arrow-right-line"></i>
                    </div>
                  </Link>
                </div>,
                document.body
              )}
            </div>
          </div>

          {/* Trust-Zeile */}
          <div className={`flex flex-wrap items-center gap-3 transition-all duration-700 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 px-4 py-2 rounded-lg">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map((s) => (
                  <div key={s} className="w-3.5 h-3.5 flex items-center justify-center">
                    <i className="ri-star-fill text-yellow-400 text-xs"></i>
                  </div>
                ))}
              </div>
              <span className="text-white font-bold text-sm">5,0 · 137 Bewertungen</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 px-4 py-2 rounded-lg">
              <div className="w-3.5 h-3.5 flex items-center justify-center">
                <i className="ri-car-fill text-whatsapp text-xs"></i>
              </div>
              <span className="text-white font-bold text-sm">1.000+ Zulassungen</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 px-4 py-2 rounded-lg">
              <div className="w-3.5 h-3.5 flex items-center justify-center">
                <i className="ri-shield-check-fill text-whatsapp text-xs"></i>
              </div>
              <span className="text-white font-bold text-sm">Festpreise garantiert</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Card */}
      <div className="hidden lg:block absolute right-12 bottom-20 z-10">
        <div className={`bg-white rounded-2xl p-5 w-64 transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 flex items-center justify-center bg-whatsapp rounded-xl">
              <img src="/images/whatsapp-bf1279.svg" className="w-full h-full object-contain" alt="WhatsApp" loading="lazy" decoding="async" />
            </div>
            <div>
              <div className="text-sm font-bold text-gray-800">WhatsApp Service</div>
              <div className="text-xs text-whatsapp font-semibold">Jetzt aktiv</div>
            </div>
            <span className="w-2.5 h-2.5 rounded-full bg-whatsapp ml-auto animate-pulse"></span>
          </div>
          <p className="text-xs text-gray-500 leading-relaxed mb-3">
            Antwort innerhalb von 5 Minuten — auch abends und am Wochenende.
          </p>
          <a
            href="https://wa.me/4923063548896?text=Hallo%2C%20ich%20m%C3%B6chte%20eine%20Kfz-Zulassung%20anfragen."
            target="_blank"
            rel="nofollow noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-whatsapp text-white font-bold text-sm py-2.5 rounded-xl hover:bg-green-600 transition-colors cursor-pointer whitespace-nowrap"
          >
            <div className="w-4 h-4 flex items-center justify-center">
              <img src="/images/whatsapp-bf1279.svg" className="w-full h-full object-contain" alt="WhatsApp" loading="lazy" decoding="async" />
            </div>
            Per WhatsApp anfragen
          </a>
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30 animate-bounce">
        <div className="w-5 h-5 flex items-center justify-center">
          <i className="ri-arrow-down-line text-lg"></i>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;