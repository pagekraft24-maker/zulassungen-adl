const logos = [
  {
    src: '/images/f91bab1d297631ed57afb7cd532584c0-bc1378.jpg',
    alt: 'IHK Logo',
    label: 'DIN Geprüft',
    desc: 'DIN Certco Zertifizierung',
  },
  {
    src: '/images/9f2a6cb9e30a951253b3219a2599a811-e284ba.png',
    alt: 'TÜV Badge',
    label: 'TÜV-geprüft',
    desc: 'Geprüftes und zugelassenes Zulassungsunternehmen',
  },
  {
    src: '/images/4d6e-45c0-8b3f-45e6241a1859-dekra-badge-11a946.png',
    alt: 'DEKRA Badge',
    label: 'DEKRA-zertifiziert',
    desc: 'Zertifiziertes Unternehmen nach DEKRA-Standard',
  },
  {
    src: '/images/de790880f70f8d3e935ca3638744506-2101df57-0913ca.jpg',
    alt: 'Zertifizierung Logo',
    label: 'Geprüfte Qualität',
    desc: 'Zertifiziert nach höchsten Standards',
  },
];

const TrustLogos = () => (
  <section className="bg-offwhite border-b border-gray-100 py-6 md:py-8">
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      {/* Überschrift */}
      <h2 className="text-center text-lg md:text-xl font-black text-navy-900 mb-4 md:mb-6">
        Mehrfach geprüft.
      </h2>

      {/* Logos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {logos.map((l) => (
          <div
            key={l.alt}
            className="flex flex-col items-center justify-center bg-white border border-gray-100 rounded-2xl px-4 md:px-6 py-5 md:py-6 hover:border-navy-200 transition-colors gap-2"
          >
            <img
              src={l.src}
              alt={l.alt}
              className="h-14 md:h-16 w-auto object-contain"
              loading="lazy"
              decoding="async"
            />
            <div className="text-center border-t border-gray-100 pt-2 w-full">
              <div className="text-xs font-extrabold text-navy-900">{l.label}</div>
              <div className="text-[11px] text-gray-400 leading-relaxed">{l.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustLogos;