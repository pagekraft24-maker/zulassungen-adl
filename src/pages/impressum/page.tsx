import { Link } from 'react-router-dom';
import useSEO from '@/hooks/useSEO';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';

const BASE_URL = (typeof import.meta.env !== 'undefined' && import.meta.env.VITE_SITE_URL)
  ? import.meta.env.VITE_SITE_URL
  : 'https://zulassungen-adl.de';

const ImpressumPage = () => {
  useSEO({
    title: 'Impressum · Zulassungsdienst an der Lippe',
    description: 'Impressum des Zulassungsdienst an der Lippe in Lünen. Angaben gemäß § 5 TMG. Kontakt: +49 2306 3548896, service@zulassungen-adl.de',
    keywords: 'Impressum Zulassungsdienst Lünen, Kontakt TMG',
    canonical: '/impressum',
    noindex: true,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zulassungsdienst an der Lippe',
      legalName: 'HSZ Digital GmbH',
      url: BASE_URL,
      telephone: '+4923063548896',
      email: 'service@zulassungen-adl.de',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Willy-Brandt-Platz 6',
        addressLocality: 'Lünen',
        postalCode: '44532',
        addressCountry: 'DE',
      },
    },
  });

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-18">
        {/* Hero */}
        <section className="bg-navy-950 py-14 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors cursor-pointer"
            >
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-arrow-left-line"></i>
              </div>
              Zurück zur Startseite
            </Link>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              Impressum
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 md:px-6 flex flex-col gap-6">
            {/* § 5 TMG */}
            <div className="bg-gray-50 rounded-xl border border-gray-100 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-extrabold text-navy-950 mb-6">
                Angaben gemäß § 5 TMG
              </h2>
              <div className="flex flex-col gap-5">
                <div>
                  <p className="font-semibold text-navy-900 mb-1">Betreiber und inhaltlich Verantwortlicher</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    HSZ Digital GmbH<br />
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-navy-100 rounded-lg shrink-0 mt-0.5">
                    <i className="ri-map-pin-line text-navy-700 text-sm"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900 mb-1 text-sm">Adresse</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Willy-Brandt-Platz 6<br />
                      44532 Lünen<br />
                      Deutschland
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-navy-100 rounded-lg shrink-0 mt-0.5">
                    <i className="ri-mail-line text-navy-700 text-sm"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900 mb-1 text-sm">E-Mail</p>
                    <a
                      href="mailto:service@zulassungen-adl.de"
                      className="text-navy-700 hover:underline text-sm"
                    >
                      service@zulassungen-adl.de
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-navy-100 rounded-lg shrink-0 mt-0.5">
                    <i className="ri-phone-line text-navy-700 text-sm"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900 mb-1 text-sm">Telefon</p>
                    <a
                      href="tel:+4923063548896"
                      className="text-navy-700 hover:underline text-sm"
                    >
                      023063548896
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-navy-100 rounded-lg shrink-0 mt-0.5">
                    <i className="ri-building-line text-navy-700 text-sm"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900 mb-1 text-sm">Handelsregister</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Amtsgericht Hamburg<br />
                      HRB 196648
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-navy-100 rounded-lg shrink-0 mt-0.5">
                    <i className="ri-user-line text-navy-700 text-sm"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900 mb-1 text-sm">Vertreten durch</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Sezgin Yüksek und Harun Cakir
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Berufsbezeichnung */}
            <div className="bg-gray-50 rounded-xl border border-gray-100 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-extrabold text-navy-950 mb-4">
                Berufsbezeichnung und berufsrechtliche Regelungen
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Berufsbezeichnung: Kfz-Zulassungsdienst<br />
                Zuständige Aufsichtsbehörde: Kreis Unna, Straßenverkehrsamt
              </p>
            </div>

            {/* Streitschlichtung */}
            <div className="bg-gray-50 rounded-xl border border-gray-100 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-extrabold text-navy-950 mb-4">
                Streitschlichtung
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-navy-700 hover:underline"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            {/* Haftung für Inhalte */}
            <div className="bg-gray-50 rounded-xl border border-gray-100 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-extrabold text-navy-950 mb-4">
                Haftung für Inhalte
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
            </div>

            {/* Haftung für Links */}
            <div className="bg-gray-50 rounded-xl border border-gray-100 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-extrabold text-navy-950 mb-4">
                Haftung für Links
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
            </div>

            {/* Urheberrecht */}
            <div className="bg-gray-50 rounded-xl border border-gray-100 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-extrabold text-navy-950 mb-4">
                Urheberrecht
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
            </div>

            {/* CTA */}
            <div className="text-center py-6">
              <p className="text-gray-500 text-sm mb-4">Haben Sie Fragen zu unserem Impressum?</p>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 bg-navy-900 text-white text-sm font-bold px-6 py-3 rounded-lg hover:bg-navy-800 transition-colors cursor-pointer whitespace-nowrap"
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-mail-send-line"></i>
                </div>
                Kontakt aufnehmen
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ImpressumPage;
