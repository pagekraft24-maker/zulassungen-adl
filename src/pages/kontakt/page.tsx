import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import WhatsAppWidget from '@/components/feature/WhatsAppWidget';
import useSEO from '@/hooks/useSEO';
import ConsentMaps from '@/components/feature/ConsentMaps';

const BASE_URL = (typeof import.meta.env !== 'undefined' && import.meta.env.VITE_SITE_URL)
  ? import.meta.env.VITE_SITE_URL
  : 'https://zulassungen-adl.de';

const kontaktWege = [
  {
    icon: 'ri-phone-fill',
    farbe: 'bg-navy-50',
    ikonFarbe: 'text-navy-700',
    label: 'Anrufen',
    wert: '02306 3548896',
    link: 'tel:+4923063548896',
    sub: 'Mo–Fr 09:30–19:00 · Sa 12:00–16:00',
    hervorgehoben: false,
  },
  {
    icon: 'ri-whatsapp-fill',
    farbe: 'bg-whatsapp',
    ikonFarbe: 'text-white',
    label: 'WhatsApp',
    wert: 'Sofort starten',
    link: 'https://wa.me/4923063548896',
    sub: 'Schnellste Option — 24/7 erreichbar',
    hervorgehoben: true,
  },
  {
    icon: 'ri-mail-fill',
    farbe: 'bg-navy-50',
    ikonFarbe: 'text-navy-700',
    label: 'E-Mail',
    wert: 'service@zulassungen-adl.de',
    link: 'mailto:service@zulassungen-adl.de',
    sub: 'Wir melden uns schnellstmöglich',
    hervorgehoben: false,
  },
];

const KontaktPage = () => {
  useSEO({
    title: 'Kontakt · WhatsApp & Telefon | Zulassungsdienst an der Lippe',
    description: 'Anrufen, WhatsApp oder E-Mail — drei Wege zu Ihrem Zulassungsservice in Lünen. +49 2306 3548896 · service@zulassungen-adl.de',
    keywords: 'Kontakt Zulassungsdienst Lünen, WhatsApp Kfz-Zulassung',
    canonical: '/kontakt',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Zulassungsdienst an der Lippe',
      description: 'Kfz-Zulassungsdienst in Lünen – Anmeldung, Ummeldung, Abmeldung mit Festpreisen und 24/7 WhatsApp-Service.',
      url: BASE_URL,
      telephone: '+4923063548896',
      email: 'service@zulassungen-adl.de',
      priceRange: '€€',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Willy-Brandt-Platz 6',
        addressLocality: 'Lünen',
        postalCode: '44532',
        addressCountry: 'DE',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 51.6158, longitude: 7.5268 },
      openingHoursSpecification: [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:30', closes: '13:30' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '15:00', closes: '19:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '12:00', closes: '16:00' },
      ],
      aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '82' },
    },
  });

  return (
    <div className="font-sans">
      <Header />
      <main className="pt-20">

        {/* Hero */}
        <section className="bg-navy-900 py-16 text-center">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <span className="text-xs font-bold text-white/40 uppercase tracking-widest">Kontakt</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-4 leading-tight">
              Wir sind für Sie da.
            </h1>
            <p className="text-white/60 text-base max-w-lg mx-auto">
              Wählen Sie den für Sie passenden Weg — per WhatsApp, Telefon oder E-Mail.
            </p>
          </div>
        </section>

        {/* 3-Spalten Kontakt-Block */}
        <section className="bg-white py-14 border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {kontaktWege.map((k) => (
                <a
                  key={k.label}
                  href={k.link}
                  target={k.link.startsWith('http') ? '_blank' : undefined}
                  rel={k.link.startsWith('http') ? 'nofollow noreferrer' : undefined}
                  className={`flex flex-col items-center gap-3 p-6 rounded-2xl border transition-all cursor-pointer text-center group ${
                    k.hervorgehoben
                      ? 'bg-whatsapp/5 border-whatsapp/20 hover:bg-whatsapp/10'
                      : 'bg-offwhite border-gray-100 hover:border-navy-200 hover:bg-white'
                  }`}
                >
                  <div className={`w-14 h-14 flex items-center justify-center ${k.farbe} rounded-2xl`}>
                    {k.icon === 'ri-whatsapp-fill' ? (
                      <img src="/images/whatsapp-bf1279.svg" className="w-full h-full object-contain" alt="WhatsApp" loading="lazy" decoding="async" />
                    ) : (
                      <i className={`${k.icon} text-2xl ${k.ikonFarbe}`}></i>
                    )}
                  </div>
                  <div>
                    <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${k.hervorgehoben ? 'text-whatsapp' : 'text-gray-400'}`}>
                      {k.label}
                    </div>
                    <div className={`font-extrabold text-lg ${k.hervorgehoben ? 'text-whatsapp' : 'text-navy-900'}`}>
                      {k.wert}
                    </div>
                    <div className="text-gray-400 text-xs mt-1">{k.sub}</div>
                  </div>
                  {k.hervorgehoben && (
                    <div className="inline-flex items-center gap-1.5 bg-whatsapp text-white text-xs font-bold px-4 py-2 rounded-lg mt-1">
                      <div className="w-3 h-3 flex items-center justify-center">
                        <i className="ri-arrow-right-line text-xs"></i>
                      </div>
                      Jetzt starten
                    </div>
                  )}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Karte + Info */}
        <section className="bg-offwhite py-14">
          <div className="max-w-7xl mx-auto px-4 md:px-6">

            {/* Maps */}
            <div className="rounded-2xl overflow-hidden relative mb-5">
              <ConsentMaps
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2476.4!2d7.5248!3d51.6168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8e0a11e4a5c0d%3A0x1!2sWilly-Brandt-Platz+6%2C+44532+L%C3%BCnen!5e0!3m2!1sde!2sde!4v1699000000000!5m2!1sde!2sde"
                title="Zulassungsdienst an der Lippe — Lünen"
                height={420}
                className="rounded-2xl"
              />
              <div className="absolute bottom-4 left-4 z-10">
                <a
                  href="https://maps.google.com/?q=Willy-Brandt-Platz+6+44532+Lünen"
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-navy-900 font-semibold text-xs px-4 py-2.5 rounded-xl hover:bg-navy-50 transition-colors cursor-pointer whitespace-nowrap"
                  style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.12)' }}
                >
                  <div className="w-3 h-3 flex items-center justify-center">
                    <i className="ri-navigation-fill text-navy-700 text-xs"></i>
                  </div>
                  Route planen
                </a>
              </div>
            </div>

            {/* Info Karten */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-white rounded-xl p-4 border border-gray-100">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 flex items-center justify-center bg-navy-50 rounded-lg">
                    <i className="ri-map-pin-2-fill text-navy-700 text-sm"></i>
                  </div>
                  <span className="font-bold text-navy-900 text-xs">Adresse</span>
                </div>
                <address className="not-italic text-gray-600 text-xs leading-relaxed">
                  Willy-Brandt-Platz 6<br />44532 Lünen (NRW)
                </address>
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-100">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 flex items-center justify-center bg-navy-50 rounded-lg">
                    <i className="ri-time-fill text-navy-700 text-sm"></i>
                  </div>
                  <span className="font-bold text-navy-900 text-xs">Öffnungszeiten</span>
                </div>
                <div className="text-xs space-y-1">
                  <div className="flex items-start gap-2">
                    <span className="text-gray-700 font-medium w-16 shrink-0">Mo bis Fr</span>
                    <span className="text-gray-300">|</span>
                    <div className="text-gray-600">
                      <div>09.30 – 13.30 Uhr</div>
                      <div>15.00 – 19.00 Uhr</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-700 font-medium w-16 shrink-0">Samstag</span>
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-600">12.00 – 16.00 Uhr</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400 w-16 shrink-0">Sonntag</span>
                    <span className="text-gray-200">|</span>
                    <span className="text-gray-400">Geschlossen</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-100">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 flex items-center justify-center bg-navy-50 rounded-lg">
                    <i className="ri-car-fill text-navy-700 text-sm"></i>
                  </div>
                  <span className="font-bold text-navy-900 text-xs">Parken</span>
                </div>
                <div className="text-gray-600 text-xs leading-relaxed">
                  Parkhaus direkt<br />auf dem Platz<br />(kostenpflichtig)
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default KontaktPage;