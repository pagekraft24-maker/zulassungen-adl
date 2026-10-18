import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const STORAGE_KEY = 'adl-cookie-consent-v1';

export interface ConsentState {
  essential: true;
  analytics: boolean;
  maps: boolean;
  decided: boolean;
}

const DEFAULT_CONSENT: ConsentState = {
  essential: true,
  analytics: false,
  maps: false,
  decided: false,
};

export const getConsent = (): ConsentState => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return { ...DEFAULT_CONSENT, ...JSON.parse(raw) };
  } catch { /* ignore */ }
  return DEFAULT_CONSENT;
};

export const dispatchConsentUpdate = () => {
  window.dispatchEvent(new CustomEvent('adl-consent-updated'));
};

const saveConsent = (state: ConsentState) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  dispatchConsentUpdate();
};

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [maps, setMaps] = useState(false);

  useEffect(() => {
    const c = getConsent();
    if (!c.decided) setVisible(true);
  }, []);

  const accept = () => {
    saveConsent({ essential: true, analytics: true, maps: true, decided: true });
    setVisible(false);
  };

  const reject = () => {
    saveConsent({ essential: true, analytics: false, maps: false, decided: true });
    setVisible(false);
  };

  const saveCustom = () => {
    saveConsent({ essential: true, analytics, maps, decided: true });
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Cookie-Einstellungen"
      className="fixed bottom-0 left-0 right-0 z-[200] font-sans"
    >
      <div className="bg-white border-t-2 border-navy-100">
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-5">

          {/* Einfache Ansicht (Step 1) */}
          {!showDetail ? (
            <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-shield-check-line text-navy-700 text-base"></i>
                  </div>
                  <span className="font-bold text-navy-900 text-sm">Datenschutz & Cookies</span>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Wir nutzen notwendige Cookies für den Betrieb dieser Website. Mit Ihrer Zustimmung
                  laden wir außerdem Google Maps und Analyse-Tools. Ihre Daten bleiben in Deutschland.{' '}
                  <Link to="/datenschutz" className="text-navy-700 underline hover:text-navy-900">
                    Datenschutzerklärung
                  </Link>
                </p>
              </div>
              {/* Buttons — gleiches visuelles Gewicht (kein Dark Pattern) */}
              <div className="flex flex-wrap gap-2 shrink-0">
                <button
                  type="button"
                  onClick={reject}
                  className="px-5 py-2.5 rounded-xl border-2 border-gray-200 text-gray-700 text-sm font-semibold hover:border-navy-200 hover:bg-offwhite transition-colors cursor-pointer whitespace-nowrap"
                >
                  Ablehnen
                </button>
                <button
                  type="button"
                  onClick={() => setShowDetail(true)}
                  className="px-5 py-2.5 rounded-xl border-2 border-navy-100 text-navy-700 text-sm font-semibold hover:border-navy-300 hover:bg-navy-50 transition-colors cursor-pointer whitespace-nowrap"
                >
                  Einstellungen
                </button>
                <button
                  type="button"
                  onClick={accept}
                  className="px-5 py-2.5 rounded-xl bg-navy-900 text-white text-sm font-bold hover:bg-navy-800 transition-colors cursor-pointer whitespace-nowrap"
                >
                  Alle akzeptieren
                </button>
              </div>
            </div>
          ) : (
            /* Detail-Ansicht (Step 2) */
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-bold text-navy-900 text-base">Cookie-Einstellungen</span>
                <button type="button" onClick={() => setShowDetail(false)}
                  className="text-gray-400 hover:text-navy-700 cursor-pointer text-sm">
                  ← Zurück
                </button>
              </div>

              <div className="space-y-3 mb-5">
                {/* Notwendig — immer aktiv */}
                <div className="flex items-start gap-4 p-4 bg-offwhite rounded-xl">
                  <div className="mt-0.5 shrink-0">
                    <div className="w-10 h-6 bg-navy-900 rounded-full relative cursor-not-allowed">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-navy-900 text-sm">Notwendig <span className="text-xs text-gray-400 font-normal">(immer aktiv)</span></div>
                    <p className="text-gray-500 text-xs mt-0.5">Session-Cookie, Formular-Schutz, Spracheinstellungen. Keine Tracking-Daten.</p>
                  </div>
                </div>

                {/* Analytics */}
                <div className="flex items-start gap-4 p-4 bg-offwhite rounded-xl">
                  <button type="button" onClick={() => setAnalytics(!analytics)} className="mt-0.5 shrink-0 cursor-pointer">
                    <div className={`w-10 h-6 rounded-full relative transition-colors ${analytics ? 'bg-navy-900' : 'bg-gray-200'}`}>
                      <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${analytics ? 'right-1' : 'left-1'}`}></div>
                    </div>
                  </button>
                  <div>
                    <div className="font-semibold text-navy-900 text-sm">Statistik & Analyse</div>
                    <p className="text-gray-500 text-xs mt-0.5">Anonyme Nutzungsstatistiken zur Verbesserung unseres Angebots. Kein Cross-Site-Tracking.</p>
                  </div>
                </div>

                {/* Maps */}
                <div className="flex items-start gap-4 p-4 bg-offwhite rounded-xl">
                  <button type="button" onClick={() => setMaps(!maps)} className="mt-0.5 shrink-0 cursor-pointer">
                    <div className={`w-10 h-6 rounded-full relative transition-colors ${maps ? 'bg-navy-900' : 'bg-gray-200'}`}>
                      <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${maps ? 'right-1' : 'left-1'}`}></div>
                    </div>
                  </button>
                  <div>
                    <div className="font-semibold text-navy-900 text-sm">Google Maps</div>
                    <p className="text-gray-500 text-xs mt-0.5">Interaktive Karte auf der Kontakt- und Standortseite. Daten werden an Google übermittelt.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <button type="button" onClick={reject}
                  className="px-5 py-2.5 rounded-xl border-2 border-gray-200 text-gray-700 text-sm font-semibold hover:border-navy-200 cursor-pointer whitespace-nowrap">
                  Alle ablehnen
                </button>
                <button type="button" onClick={saveCustom}
                  className="flex-1 px-5 py-2.5 rounded-xl bg-navy-900 text-white text-sm font-bold hover:bg-navy-800 cursor-pointer whitespace-nowrap">
                  Auswahl speichern
                </button>
                <button type="button" onClick={accept}
                  className="px-5 py-2.5 rounded-xl bg-whatsapp text-white text-sm font-bold hover:bg-green-600 cursor-pointer whitespace-nowrap">
                  Alle akzeptieren
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
