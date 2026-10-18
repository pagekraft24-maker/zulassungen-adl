import { useState } from 'react';
import { Link } from 'react-router-dom';
import { leistungen } from '@/mocks/leistungen';

const Footer = () => {
  const hauptLeistungen = leistungen.slice(0, 6);
  // Alle 7 Städte: Lünen, Dortmund, Bergkamen, Werne, Selm, Kamen, Schwerte
  const stadtLinks: { slug: string; label: string }[] = [
    { slug: 'luenen', label: 'Kfz-Zulassung Lünen' },
    { slug: 'dortmund', label: 'Auto anmelden Dortmund' },
    { slug: 'bergkamen', label: 'Kfz-Zulassung Bergkamen' },
    { slug: 'werne', label: 'Zulassungsdienst Werne' },
    { slug: 'selm', label: 'Kfz-Anmeldung Selm' },
    { slug: 'kamen', label: 'Auto zulassen Kamen' },
    { slug: 'schwerte', label: 'Kfz-Zulassung Schwerte' },
  ];
  const [leistungenOpen, setLeistungenOpen] = useState(false);
  const [regionenOpen, setRegionenOpen] = useState(false);

  return (
    <footer className="bg-navy-950 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">

        {/* Top Grid: Marke breit links, Maps mittig, Akkordeons rechts */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1.4fr_1.4fr] gap-10 md:gap-12 mb-10 md:mb-14">

          {/* ── Spalte 1: Marke + Kontakt ── */}
          <div className="flex flex-col gap-5">
            {/* Logo */}
            <Link to="/" className="inline-flex cursor-pointer">
              <img
                src="/images/3b-bildschirmfoto-2026-05-11-um-16-51-48-3edb9e.png"
                alt="Zulassungsdienst an der Lippe Logo"
                className="h-12 w-auto rounded-lg object-contain"
              />
            </Link>

            <p className="text-white/45 text-xs leading-relaxed">
              Ihr Kfz-Zulassungsdienst in Lünen — schnell, digital und ohne Behördengang.
            </p>

            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map((s) => (
                  <div key={s} className="w-3.5 h-3.5 flex items-center justify-center">
                    <i className="ri-star-fill text-yellow-400 text-xs"></i>
                  </div>
                ))}
              </div>
              <span className="text-white/35 text-xs">5,0 · 157+ Bewertungen</span>
            </div>

            {/* Kontakt */}
            <ul className="flex flex-col gap-2">
              <li className="flex items-start gap-2 text-white/45">
                <div className="w-4 h-4 flex items-center justify-center mt-0.5 shrink-0">
                  <i className="ri-map-pin-line text-white/30 text-xs"></i>
                </div>
                <address className="not-italic text-xs leading-relaxed">
                  Willy-Brandt-Platz 6 · 44532 Lünen
                </address>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-4 h-4 flex items-center justify-center shrink-0">
                  <i className="ri-phone-line text-white/30 text-xs"></i>
                </div>
                <a href="tel:+4923063548896" className="text-white/45 text-xs hover:text-white transition-colors whitespace-nowrap">
                  023063548896
                </a>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-4 h-4 flex items-center justify-center shrink-0">
                  <i className="ri-mail-line text-white/30 text-xs"></i>
                </div>
                <a href="mailto:service@zulassungen-adl.de" className="text-white/45 text-xs hover:text-white transition-colors break-all">
                  service@zulassungen-adl.de
                </a>
              </li>
            </ul>

            {/* Öffnungszeiten */}
            <div className="flex flex-col gap-1.5">
              <p className="text-white/25 text-xs font-bold uppercase tracking-wider mb-1">Öffnungszeiten</p>
              <div className="text-xs space-y-1">
                <div className="flex items-start gap-2">
                  <span className="text-white/45 font-medium w-16 shrink-0">Mo bis Fr</span>
                  <span className="text-white/20">|</span>
                  <div className="text-white/40">
                    <div>09.30 – 13.30 Uhr</div>
                    <div>15.00 – 19.00 Uhr</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-white/45 font-medium w-16 shrink-0">Samstag</span>
                  <span className="text-white/20">|</span>
                  <span className="text-white/40">12.00 – 16.00 Uhr</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-white/20 w-16 shrink-0">Sonntag</span>
                  <span className="text-white/10">|</span>
                  <span className="text-white/20">Geschlossen</span>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/4923063548896"
              target="_blank"
              rel="nofollow noreferrer"
              className="inline-flex items-center gap-2 bg-whatsapp text-white text-xs font-bold px-4 py-2.5 rounded-xl whitespace-nowrap cursor-pointer hover:bg-green-600 transition-colors self-start"
            >
              <div className="w-4 h-4 flex items-center justify-center">
                <img src="/images/whatsapp-bf1279.svg" className="w-full h-full object-contain" alt="WhatsApp" loading="lazy" decoding="async" />
              </div>
              WhatsApp schreiben
            </a>


          </div>

          {/* ── Spalte 2: Google Maps ── */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-white text-sm">Unser Standort</h4>
            <div className="rounded-xl overflow-hidden border border-white/10 w-full" style={{ height: '220px' }}>
              <iframe
                title="Zulassungsdienst an der Lippe – Standort Lünen"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.0!2d7.5257!3d51.6175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b91b7e2b2b2b2b%3A0x0!2sWilly-Brandt-Platz+6%2C+44532+L%C3%BCnen!5e0!3m2!1sde!2sde!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(30%) invert(5%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <a
              href="https://maps.google.com/?q=Willy-Brandt-Platz+6,+44532+Lünen"
              target="_blank"
              rel="nofollow noreferrer"
              className="inline-flex items-center gap-2 text-white/40 text-xs hover:text-white transition-colors cursor-pointer"
            >
              <div className="w-3.5 h-3.5 flex items-center justify-center">
                <i className="ri-external-link-line text-xs"></i>
              </div>
              In Google Maps öffnen
            </a>
          </div>

          {/* ── Spalte 3: Akkordeons Leistungen + Regionen ── */}
          <div className="flex flex-col gap-3">

            {/* Leistungen Akkordeon */}
            <div className="border border-white/10 rounded-xl overflow-hidden">
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-3 hover:bg-white/5 transition-colors cursor-pointer"
                onClick={() => { setLeistungenOpen((v) => { if (!v) setRegionenOpen(false); return !v; }); }}
              >
                <Link
                  to="/leistungen"
                  className="font-bold text-white text-sm hover:text-white/70 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  Leistungen
                </Link>
                <div className="w-5 h-5 flex items-center justify-center shrink-0">
                  <i className={`ri-arrow-down-s-line text-white/40 text-lg transition-transform duration-200 ${leistungenOpen ? 'rotate-180' : ''}`}></i>
                </div>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${leistungenOpen ? 'max-h-80' : 'max-h-0'}`}>
                <ul className="px-4 pb-3 flex flex-col gap-2 border-t border-white/10 pt-3">
                  {hauptLeistungen.map((l) => (
                    <li key={l.slug}>
                      <Link
                        to={`/leistungen/${l.slug}`}
                        className="text-white/45 text-xs hover:text-white transition-colors leading-snug block"
                      >
                        {l.titel}
                      </Link>
                    </li>
                  ))}
                  <li className="pt-1">
                    <Link to="/leistungen" className="text-white/25 text-xs font-semibold hover:text-white/60 transition-colors">
                      Alle ansehen →
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Regionen Akkordeon */}
            <div className="border border-white/10 rounded-xl overflow-hidden">
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-3 hover:bg-white/5 transition-colors cursor-pointer"
                onClick={() => { setRegionenOpen((v) => { if (!v) setLeistungenOpen(false); return !v; }); }}
              >
                <Link
                  to="/standorte"
                  className="font-bold text-white text-sm hover:text-white/70 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  Regionen
                </Link>
                <div className="w-5 h-5 flex items-center justify-center shrink-0">
                  <i className={`ri-arrow-down-s-line text-white/40 text-lg transition-transform duration-200 ${regionenOpen ? 'rotate-180' : ''}`}></i>
                </div>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${regionenOpen ? 'max-h-80' : 'max-h-0'}`}>
                <ul className="px-4 pb-3 flex flex-col gap-2 border-t border-white/10 pt-3">
                  {stadtLinks.map((s) => (
                    <li key={s.slug}>
                      <Link
                        to={`/kfz-zulassung/${s.slug}`}
                        className="text-white/45 text-xs hover:text-white transition-colors leading-snug block"
                      >
                        {s.label}
                      </Link>
                    </li>
                  ))}
                  <li className="pt-1">
                    <Link to="/standorte" className="text-white/25 text-xs font-semibold hover:text-white/60 transition-colors">
                      Alle ansehen →
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* FAQ — eigener Akkordeon */}
            <div className="border border-white/10 rounded-xl overflow-hidden">
              <Link
                to="/faq"
                className="flex items-center justify-between w-full px-4 py-3 hover:bg-white/5 transition-colors cursor-pointer"
              >
                <span className="font-bold text-white text-sm">FAQ</span>
                <div className="w-5 h-5 flex items-center justify-center shrink-0">
                  <i className="ri-arrow-right-s-line text-white/40 text-lg"></i>
                </div>
              </Link>
            </div>
          </div>

        </div>

        {/* SEO-Städte-Linkreihe */}
        <div className="border-t border-white/10 pt-6 mb-4 flex flex-wrap justify-center gap-x-5 gap-y-2">
          {stadtLinks.map((s) => (
            <Link
              key={s.slug}
              to={`/kfz-zulassung/${s.slug}`}
              className="text-white/30 text-xs hover:text-white/60 transition-colors cursor-pointer whitespace-nowrap"
            >
              {s.label}
            </Link>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center">
          <p className="text-white/25 text-xs text-center sm:text-left">
            © 2026 Zulassungsdienst an der Lippe · Alle Rechte vorbehalten
          </p>
          <div className="flex justify-center sm:justify-end gap-4 md:gap-6">
            <Link to="/impressum" className="text-white/25 text-xs hover:text-white/60 transition-colors cursor-pointer whitespace-nowrap">Impressum</Link>
            <Link to="/datenschutz" className="text-white/25 text-xs hover:text-white/60 transition-colors cursor-pointer whitespace-nowrap">Datenschutz</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;