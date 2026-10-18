import { Link } from 'react-router-dom';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import WhatsAppWidget from '@/components/feature/WhatsAppWidget';
import useSEO from '@/hooks/useSEO';

const BASE_URL = (typeof import.meta.env !== 'undefined' && import.meta.env.VITE_SITE_URL)
  ? import.meta.env.VITE_SITE_URL
  : 'https://zulassungen-adl.de';

interface BlogPost {
  slug: string;
  titel: string;
  beschreibung: string;
  datum: string;
  lesezeit: string;
  kategorie: string;
  icon: string;
}

const beitraege: BlogPost[] = [
  {
    slug: 'auto-anmelden-luenen',
    titel: 'Auto anmelden in Lünen: Kosten, Unterlagen & Ablauf 2026',
    beschreibung:
      'Auto in Lünen anmelden? Alle Kosten, benötigte Unterlagen und der genaue Ablauf – mit dem Zulassungsdienst an der Lippe stressfrei zum Festpreis.',
    datum: '16. August 2026',
    lesezeit: '6 Min. Lesezeit',
    kategorie: 'Kfz-Anmeldung',
    icon: 'ri-car-line',
  },
  {
    slug: 'kfz-zulassung-luenen-kosten-2026',
    titel: 'Kfz-Zulassung Lünen Kosten 2026 – Preise, Ablauf & Services',
    beschreibung:
      'Was kostet die Anmeldung & Ummeldung in Lünen 2026? Der Zulassungsdienst an der Lippe zeigt Preise, Festpreise und den genauen Ablauf.',
    datum: '16. August 2026',
    lesezeit: '7 Min. Lesezeit',
    kategorie: 'Kosten & Preise',
    icon: 'ri-price-tag-3-line',
  },
];

const BlogPage = () => {
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Ratgeber – Zulassungsdienst an der Lippe',
    url: `${BASE_URL}/blog`,
    blogPost: beitraege.map((b) => ({
      '@type': 'BlogPosting',
      headline: b.titel,
      url: `${BASE_URL}/blog/${b.slug}`,
      datePublished: '2026-08-16',
      author: { '@type': 'Organization', name: 'Zulassungsdienst an der Lippe' },
    })),
  };

  useSEO({
    title: 'Blog & Ratgeber – Kfz-Zulassung | Zulassungsdienst an der Lippe',
    description:
      'Ratgeber und hilfreiche Artikel rund um Kfz-Anmeldung, Ummeldung, Abmeldung und Wunschkennzeichen in Lünen und dem Kreis Unna.',
    canonical: '/blog',
    ogLocale: 'de_DE',
    ogType: 'website',
    schema: blogSchema,
  });

  return (
    <div className="font-sans">
      <Header />
      <main className="pt-20">

        {/* Hero */}
        <section className="bg-navy-900 py-16 text-center">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <span className="text-xs font-bold text-white/40 uppercase tracking-widest">Blog</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-4 leading-tight">
              Ratgeber & Wissen.
              <span className="sr-only"> rund um die Kfz-Zulassung</span>
            </h1>
            <p className="text-white/60 text-base max-w-lg mx-auto">
              Hilfreiche Artikel rund um die Kfz-Zulassung — verständlich erklärt, damit Sie genau
              wissen, was auf Sie zukommt.
            </p>
          </div>
        </section>

        {/* Beitragsliste */}
        <section className="bg-offwhite py-14">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <div className="space-y-5">
              {beitraege.map((b) => (
                <Link
                  key={b.slug}
                  to={`/blog/${b.slug}`}
                  className="block bg-white border border-gray-100 rounded-2xl p-6 md:p-8 hover:border-navy-100 hover:shadow-sm transition-all cursor-pointer group"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-navy-50 rounded-2xl shrink-0 group-hover:bg-navy-100 transition-colors">
                      <i className={`${b.icon} text-navy-700 text-2xl`}></i>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy-700 bg-navy-50 px-3 py-1 rounded-full">
                          {b.kategorie}
                        </span>
                        <span className="text-xs text-gray-400">{b.datum}</span>
                        <span className="text-xs text-gray-400">· {b.lesezeit}</span>
                      </div>
                      <h2 className="text-lg md:text-xl font-extrabold text-navy-900 leading-snug mb-2 group-hover:text-navy-700 transition-colors">
                        {b.titel}
                      </h2>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4">{b.beschreibung}</p>
                      <span className="inline-flex items-center gap-2 text-sm font-bold text-navy-700">
                        Weiterlesen
                        <div className="w-4 h-4 flex items-center justify-center">
                          <i className="ri-arrow-right-line text-sm"></i>
                        </div>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white py-16 border-t border-gray-100">
          <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
            <h2 className="text-2xl font-extrabold text-navy-900 mb-3">
              Direkt loslegen?
            </h2>
            <p className="text-gray-500 text-base mb-6">
              Sparen Sie sich die Suche und lassen Sie Ihre Zulassung einfach von uns erledigen —
              zum Festpreis, ohne Wartezeit.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/leistungen"
                className="inline-flex items-center gap-2 bg-navy-900 text-white font-bold px-7 py-4 rounded-xl text-base whitespace-nowrap cursor-pointer hover:bg-navy-800 transition-colors"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-list-check-2"></i>
                </div>
                Alle Leistungen
              </Link>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 border-2 border-navy-100 text-navy-900 font-semibold px-7 py-4 rounded-xl text-base whitespace-nowrap cursor-pointer hover:border-navy-300 hover:bg-navy-50 transition-colors"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-mail-line"></i>
                </div>
                Anfrage senden
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default BlogPage;