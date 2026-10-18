import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getConsent, dispatchConsentUpdate } from './CookieBanner';

interface ConsentMapsProps {
  src: string;
  title: string;
  height?: number | string;
  className?: string;
}

const ConsentMaps = ({ src, title, height = 480, className = '' }: ConsentMapsProps) => {
  const [mapsAllowed, setMapsAllowed] = useState(false);

  useEffect(() => {
    setMapsAllowed(getConsent().maps);

    const handler = () => setMapsAllowed(getConsent().maps);
    window.addEventListener('adl-consent-updated', handler);
    return () => window.removeEventListener('adl-consent-updated', handler);
  }, []);

  const acceptMaps = () => {
    const current = getConsent();
    localStorage.setItem(
      'adl-cookie-consent-v1',
      JSON.stringify({ ...current, maps: true, decided: true }),
    );
    dispatchConsentUpdate();
  };

  if (mapsAllowed) {
    return (
      <iframe
        title={title}
        src={src}
        width="100%"
        height={height}
        className={`w-full ${className}`}
        style={{ border: 0, height: typeof height === 'number' ? `${height}px` : height }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    );
  }

  return (
    <div
      className={`w-full flex flex-col items-center justify-center bg-navy-50 border border-navy-100 rounded-xl ${className}`}
      style={{ height: typeof height === 'number' ? `${height}px` : height }}
    >
      <div className="text-center px-6 py-10 max-w-sm">
        <div className="w-14 h-14 flex items-center justify-center bg-navy-100 rounded-2xl mx-auto mb-4">
          <i className="ri-map-2-line text-navy-700 text-2xl"></i>
        </div>
        <h3 className="font-bold text-navy-900 text-base mb-2">Karte nicht geladen</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-5">
          Für die interaktive Karte sind Google Maps-Cookies erforderlich.
          Ihre Daten werden dabei an Google übermittelt.
        </p>
        <button
          type="button"
          onClick={acceptMaps}
          className="inline-flex items-center gap-2 bg-navy-900 text-white font-semibold px-6 py-3 rounded-xl text-sm cursor-pointer hover:bg-navy-800 transition-colors whitespace-nowrap"
        >
          <div className="w-4 h-4 flex items-center justify-center">
            <i className="ri-map-pin-fill text-sm"></i>
          </div>
          Karte jetzt laden
        </button>
        <p className="text-xs text-gray-400 mt-3">
          <Link to="/datenschutz" className="underline hover:text-navy-700">Datenschutzerklärung</Link>
        </p>
      </div>
    </div>
  );
};

export default ConsentMaps;
