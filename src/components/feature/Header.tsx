import { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { leistungen } from '@/mocks/leistungen';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [leistungenOpen, setLeistungenOpen] = useState(false);
  const [dropdownStyle, setDropdownStyle] = useState({ top: 0, left: 0, width: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setLeistungenOpen(false);
  }, [location]);

  const privatLeistungen = leistungen.filter((l) => l.kategorie !== 'gewerbe').slice(0, 6);
  const gewerbeLeistungen = leistungen.filter((l) => l.kategorie === 'gewerbe');

  // Click outside to close
  useEffect(() => {
    if (!leistungenOpen) return;
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;
      if (buttonRef.current?.contains(target) || dropdownRef.current?.contains(target)) {
        return;
      }
      setLeistungenOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [leistungenOpen]);

  const updatePosition = useCallback(() => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const dropW = Math.min(560, window.innerWidth - 32);
      let left = rect.left + rect.width / 2 - dropW / 2;
      if (left < 16) left = 16;
      if (left + dropW > window.innerWidth - 16) left = window.innerWidth - dropW - 16;
      setDropdownStyle({
        top: rect.bottom + 8,
        left,
        width: dropW,
      });
    }
  }, []);

  useEffect(() => {
    if (leistungenOpen) {
      updatePosition();
      const scrollHandler = () => setLeistungenOpen(false);
      window.addEventListener('scroll', scrollHandler, { once: true, passive: true });
      window.addEventListener('resize', updatePosition);
      return () => {
        window.removeEventListener('scroll', scrollHandler);
        window.removeEventListener('resize', updatePosition);
      };
    }
  }, [leistungenOpen, updatePosition]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer">
            <img
              src="/images/3b-bildschirmfoto-2026-05-11-um-16-51-48-3edb9e.png"
              alt="Zulassungsdienst an der Lippe Logo"
              className="h-12 w-auto rounded-lg object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-base font-extrabold text-gray-900 hover:text-navy-700 transition-colors whitespace-nowrap cursor-pointer">
              Start
            </Link>
            <Link to="/vorteile" className="text-base font-extrabold text-gray-900 hover:text-navy-700 transition-colors whitespace-nowrap cursor-pointer">
              Vorteile
            </Link>
            {/* Leistungen Dropdown */}
            <div className="relative">
              <button
                ref={buttonRef}
                className="flex items-center gap-1 text-base font-extrabold text-gray-900 hover:text-navy-700 transition-colors cursor-pointer whitespace-nowrap"
                onClick={() => setLeistungenOpen((v) => !v)}
                onMouseEnter={() => setLeistungenOpen(true)}
              >
                Leistungen
                <i className={`ri-arrow-down-s-line text-base transition-transform ${leistungenOpen ? 'rotate-180' : ''}`}></i>
              </button>

              {/* Dropdown Panel — Portal to body, fixed position */}
              {leistungenOpen && createPortal(
                <div
                  ref={dropdownRef}
                  className="bg-white rounded-xl shadow-lg border border-gray-100 p-5"
                  style={{
                    position: 'fixed',
                    top: dropdownStyle.top,
                    left: dropdownStyle.left,
                    width: dropdownStyle.width,
                    zIndex: 99999,
                  }}
                  onMouseLeave={() => setLeistungenOpen(false)}
                >
                  <div className="grid grid-cols-2 gap-1">
                    <div>
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-2">
                        Privatkunden
                      </div>
                      {privatLeistungen.map((l) => (
                        <Link
                          key={l.slug}
                          to={`/leistungen/${l.slug}`}
                          className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-gray-50 cursor-pointer"
                        >
                          <div className="w-7 h-7 flex items-center justify-center bg-navy-50 rounded-md">
                            <i className={`${l.icon} text-navy-700 text-sm`}></i>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-800">{l.titel}</div>
                            <div className="text-xs text-gray-500">{l.preis}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-2">
                        Gewerbe
                      </div>
                      {gewerbeLeistungen.map((l) => (
                        <Link
                          key={l.slug}
                          to={`/leistungen/${l.slug}`}
                          className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-gray-50 cursor-pointer"
                        >
                          <div className="w-7 h-7 flex items-center justify-center bg-navy-50 rounded-md">
                            <i className={`${l.icon} text-navy-700 text-sm`}></i>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-800">{l.titel}</div>
                            <div className="text-xs text-gray-500">{l.preis}</div>
                          </div>
                        </Link>
                      ))}
                      <div className="mt-3 pt-3 border-t border-gray-100">
                        <Link
                          to="/leistungen"
                          className="flex items-center gap-2 px-2 py-2 rounded-lg bg-navy-900 text-white text-sm font-medium hover:bg-navy-800 cursor-pointer"
                        >
                          <i className="ri-list-check-2 text-sm"></i>
                          Alle Leistungen
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>,
                document.body
              )}
            </div>

            <Link to="/unterlagen" className="text-base font-extrabold text-gray-900 hover:text-navy-700 transition-colors whitespace-nowrap cursor-pointer">
              Unterlagen
            </Link>
            <Link to="/blog" className="text-base font-extrabold text-gray-900 hover:text-navy-700 transition-colors whitespace-nowrap cursor-pointer">
              Blog
            </Link>
            <Link to="/kontakt" className="text-base font-extrabold text-gray-900 hover:text-navy-700 transition-colors whitespace-nowrap cursor-pointer">
              Kontakt
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+4923063548896"
              className="flex items-center gap-2 text-sm font-bold text-navy-900 hover:text-navy-500 transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-phone-line text-base"></i>
              </div>
              023063548896
            </a>
            <a
              href="https://wa.me/4923063548896?text=Hallo%2C%20ich%20m%C3%B6chte%20eine%20Kfz-Zulassung%20anfragen."
              target="_blank"
              rel="nofollow noreferrer"
              className="flex items-center gap-2 bg-whatsapp text-white text-sm font-extrabold px-4 py-2 rounded-full whitespace-nowrap cursor-pointer hover:opacity-90 transition-opacity"
            >
              <div className="w-4 h-4 flex items-center justify-center">
                <img src="/images/whatsapp-bf1279.svg" className="w-full h-full object-contain" alt="WhatsApp" loading="lazy" decoding="async" />
              </div>
              WhatsApp
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 cursor-pointer text-navy-900"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <i className={`${mobileOpen ? 'ri-close-line' : 'ri-menu-line'} text-xl`}></i>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4">
            {/* Hauptnavigation */}
            <div className="space-y-0.5 mb-3">
              <Link to="/" className="flex items-center gap-3 px-3 py-3 rounded-lg text-navy-900 font-bold text-sm hover:bg-gray-50 cursor-pointer">
                <div className="w-8 h-8 flex items-center justify-center bg-navy-50 rounded-lg shrink-0">
                  <i className="ri-home-4-line text-navy-700"></i>
                </div>
                Start
              </Link>
              <Link to="/vorteile" className="flex items-center gap-3 px-3 py-3 rounded-lg text-navy-900 font-bold text-sm hover:bg-gray-50 cursor-pointer">
                <div className="w-8 h-8 flex items-center justify-center bg-navy-50 rounded-lg shrink-0">
                  <i className="ri-shield-check-line text-navy-700"></i>
                </div>
                Vorteile
              </Link>
              <Link to="/leistungen" className="flex items-center gap-3 px-3 py-3 rounded-lg text-navy-900 font-bold text-sm hover:bg-gray-50 cursor-pointer">
                <div className="w-8 h-8 flex items-center justify-center bg-navy-50 rounded-lg shrink-0">
                  <i className="ri-list-check-2 text-navy-700"></i>
                </div>
                Alle Leistungen
              </Link>
              <Link to="/unterlagen" className="flex items-center gap-3 px-3 py-3 rounded-lg text-navy-900 font-bold text-sm hover:bg-gray-50 cursor-pointer">
                <div className="w-8 h-8 flex items-center justify-center bg-navy-50 rounded-lg shrink-0">
                  <i className="ri-file-list-3-line text-navy-700"></i>
                </div>
                Unterlagen
              </Link>
              <Link to="/blog" className="flex items-center gap-3 px-3 py-3 rounded-lg text-navy-900 font-bold text-sm hover:bg-gray-50 cursor-pointer">
                <div className="w-8 h-8 flex items-center justify-center bg-navy-50 rounded-lg shrink-0">
                  <i className="ri-article-line text-navy-700"></i>
                </div>
                Blog
              </Link>
              <Link to="/kontakt" className="flex items-center gap-3 px-3 py-3 rounded-lg text-navy-900 font-bold text-sm hover:bg-gray-50 cursor-pointer">
                <div className="w-8 h-8 flex items-center justify-center bg-navy-50 rounded-lg shrink-0">
                  <i className="ri-mail-line text-navy-700"></i>
                </div>
                Kontakt
              </Link>
            </div>

            {/* Leistungen Schnellzugriff */}
            <div className="border-t border-gray-100 pt-3 mb-3">
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mb-2">Leistungen</div>
              <div className="grid grid-cols-2 gap-1">
                {leistungen.filter((l) => l.kategorie !== 'gewerbe').slice(0, 6).map((l) => (
                  <Link
                    key={l.slug}
                    to={`/leistungen/${l.slug}`}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-lg hover:bg-gray-50 cursor-pointer"
                  >
                    <div className="w-6 h-6 flex items-center justify-center shrink-0">
                      <i className={`${l.icon} text-navy-700 text-sm`}></i>
                    </div>
                    <span className="text-xs font-medium text-gray-700 leading-tight">{l.titel}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="border-t border-gray-100 pt-3 flex flex-col gap-2">
              <a
                href="https://wa.me/4923063548896"
                target="_blank"
                rel="nofollow noreferrer"
                className="flex items-center justify-center gap-2 py-3 bg-whatsapp text-white rounded-xl font-bold text-sm cursor-pointer whitespace-nowrap"
              >
                <div className="w-5 h-5 flex items-center justify-center"><img src="/images/whatsapp-bf1279.svg" className="w-full h-full object-contain" alt="WhatsApp" loading="lazy" decoding="async" /></div>
                WhatsApp schreiben
              </a>
              <a
                href="tel:+4923063548896"
                className="flex items-center justify-center gap-2 py-3 bg-navy-900 text-white rounded-xl font-bold text-sm cursor-pointer whitespace-nowrap"
              >
                <div className="w-5 h-5 flex items-center justify-center"><i className="ri-phone-line"></i></div>
                023063548896
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;