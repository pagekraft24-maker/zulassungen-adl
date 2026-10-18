import { Link } from 'react-router-dom';
import useSEO from '@/hooks/useSEO';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import WhatsAppWidget from '@/components/feature/WhatsAppWidget';
import { staedte } from '@/mocks/staedte';

const BASE_URL = (typeof import.meta.env !== 'undefined' && import.meta.env.VITE_SITE_URL)
  ? import.meta.env.VITE_SITE_URL
  : 'https://zulassungen-adl.de';

const StandortePage = () => {
  const regionen = staedte.filter((s) => s.slug !== 'luenen');

  useSEO({
    title: 'Standorte & Einsatzgebiet | Zulassungsdienst an der Lippe',
    description: 'Kfz-Zulassungsdienst für Lünen, Dortmund, Bergkamen, Werne, Selm, Kamen, Schwerte und Kreis Unna. Vor-Ort-Service, Hol- & Bringservice oder bundesweit online.',
    keywords: 'Kfz-Zulassung Lünen, Standorte Zulassungsdienst, Einsatzgebiet Kreis Unna',
    canonical: '/standorte',
    ogLocale: 'de_DE',
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Place',
      name: 'Einsatzgebiet Zulassungsdienst an der Lippe',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Willy-Brandt-Platz 6',
        addressLocality: 'Lünen',
        postalCode: '44532',
        addressCountry: 'DE',
      },
      containsPlace: regionen.map((s) => ({
        '@type': 'City',
        name: s.name,
        description: s.beschreibung,
      })),
    },
  });

  return (
    <div className="font-sans">
      <Header />
      <main className="pt-20">

        {/* Hero */}
        <section className="bg-navy-900 py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
            <span className="text-xs font-semibold text-white/50 uppercase tracking-widest">
              Unser Einsatzgebiet
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-4 mb-4 leading-tight">
              In Ihrer Region.<br />Schnell vor Ort.
              <span className="sr-only"> Kfz-Zulassung in Lünen, Dortmund und im Kreis Unna</span>
            </h1>
            <p className="text-white/60 text-base max-w-xl mx-auto mb-8">
              Wir betreuen Kunden aus dem gesamten östlichen Ruhrgebiet — vom Kreis Unna über
              Dortmund bis Schwerte.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://wa.me/4923063548896"
                target="_blank"
                rel="nofollow noreferrer"
                className="inline-flex items-center gap-2 bg-whatsapp text-white font-bold px-6 py-3.5 rounded-xl text-sm whitespace-nowrap cursor-pointer hover:bg-green-600 transition-colors"
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  <img src="/images/whatsapp-bf1279.svg" className="w-full h-full object-contain" alt="WhatsApp" loading="lazy" decoding="async" />
                </div>
                Jetzt anfragen
              </a>
              <a
                href="tel:+4923063548896"
                className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-6 py-3.5 rounded-xl text-sm whitespace-nowrap cursor-pointer hover:bg-white/10 transition-colors"
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-phone-fill"></i>
                </div>
                023063548896
              </a>
            </div>
          </div>
        </section>

        {/* Trust-Leiste */}
        <section className="bg-white border-b border-gray-100 py-6">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-wrap items-center justify-center gap-8 text-center">
              {[
                { icon: 'ri-map-pin-2-fill', text: 'Standort Lünen', sub: 'Willy-Brandt-Platz 6' },
                { icon: 'ri-time-fill', text: '7 Regionen', sub: 'Hol- & Bringservice' },
                { icon: 'ri-global-line', text: 'Bundesweit', sub: 'Online-Zulassung' },
                { icon: 'ri-whatsapp-fill', text: '24/7 WhatsApp', sub: 'Sofort erreichbar' },
              ].map((f) => (
                <div key={f.text} className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-navy-50 rounded-xl shrink-0">
                    {f.icon === 'ri-whatsapp-fill' ? (
                      <img src="/images/whatsapp-bf1279.svg" className="w-full h-full object-contain" alt="WhatsApp" loading="lazy" decoding="async" />
                    ) : (
                      <i className={`${f.icon} text-navy-700 text-lg`}></i>
                    )}
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-navy-900 text-sm">{f.text}</div>
                    <div className="text-gray-400 text-xs">{f.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Regionen-Grid */}
        <section className="bg-offwhite py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold text-navy-700 uppercase tracking-widest bg-navy-50 px-3 py-1 rounded-lg">
                Servicegebiet
              </span>
              <h2 className="text-3xl font-extrabold text-navy-900 mt-4 mb-3">
                Alle Regionen im \u00dcberblick
              </h2>
              <p className="text-gray-500 text-base max-w-lg mx-auto">
                Klicken Sie auf Ihre Stadt und erfahren Sie alles über unseren Service in Ihrer Region.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {regionen.map((s) => (
                <Link
                  key={s.slug}
                  to={`/kfz-zulassung/${s.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-navy-200 transition-all cursor-pointer flex flex-col"
                >
                  {/* Bild */}
                  <div className="relative w-full overflow-hidden" style={{ paddingBottom: '60%' }}>
                    <img
                      src={s.bild}
                      alt={`Kfz-Zulassung ${s.name}`}
                      className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent"></div>
                    <div className="absolute bottom-3 left-3">
                      <span className="bg-white/90 text-navy-900 text-xs font-bold px-2.5 py-1 rounded-full">
                        {s.region}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-extrabold text-navy-900 text-xl mb-1">{s.name}</h3>
                    <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-3">
                      <div className="w-3 h-3 flex items-center justify-center">
                        <i className="ri-map-pin-line text-xs"></i>
                      </div>
                      {s.entfernung}
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed flex-1 line-clamp-2 mb-4">
                      {s.beschreibung}
                    </p>
                    <div className="flex items-center gap-2 text-navy-700 font-semibold text-sm group-hover:text-navy-900 transition-colors">
                      Mehr erfahren
                      <div className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-arrow-right-line"></i>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Unser Standort */}
        <section className="bg-white py-16 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-xs font-semibold text-navy-700 uppercase tracking-widest bg-navy-50 px-3 py-1 rounded-lg">
                  Unser Standort
                </span>
                <h2 className="text-3xl font-extrabold text-navy-900 mt-4 mb-4">
                  Zentral in Lünen, nah bei Ihnen.
                </h2>
                <p className="text-gray-500 text-base leading-relaxed mb-6">
                  Unser Büro am Willy-Brandt-Platz 6 in Lünen ist der zentrale Anlaufpunkt für alle
                  Kfz-Zulassungen im östlichen Ruhrgebiet. Gut erreichbar über die A2 und A1 —
                  mit Parkplätzen direkt vor der Tür.
                </p>
                <div className="space-y-3 mb-6">
                  {[
                    { icon: 'ri-map-pin-2-fill', text: 'Willy-Brandt-Platz 6, 44532 Lünen' },
                    { icon: 'ri-time-fill', text: 'Mo\u2013Fr 09:30\u201313:30 & 15:00\u201319:00 \u00b7 Sa 12:00\u201316:00' },
                    { icon: 'ri-phone-fill', text: '023063548896' },
                  ].map((f) => (
                    <div key={f.text} className="flex items-start gap-3">
                      <div className="w-8 h-8 flex items-center justify-center bg-navy-50 rounded-lg shrink-0">
                        <i className={`${f.icon} text-navy-700 text-sm`}></i>
                      </div>
                      <span className="text-gray-700 text-sm pt-1">{f.text}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="https://maps.google.com/?q=Willy-Brandt-Platz+6+44532+Lünen"
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="inline-flex items-center gap-2 bg-navy-900 text-white font-semibold px-6 py-3 rounded-xl text-sm whitespace-nowrap cursor-pointer hover:bg-navy-800 transition-colors"
                >
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-navigation-fill"></i>
                  </div>
                  Route planen →
                </a>
              </div>
              <div className="rounded-2xl overflow-hidden h-80">
                <iframe
                  title="Zulassungsdienst an der Lippe — Lünen"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2476.4!2d7.5248!3d51.6168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8e0a11e4a5c0d%3A0x1!2sWilly-Brandt-Platz+6%2C+44532+L%C3%BCnen!5e0!3m2!1sde!2sde!4v1699000000000!5m2!1sde!2sde"
                  width="100%"
                  height="100%"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
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

export default StandortePage;