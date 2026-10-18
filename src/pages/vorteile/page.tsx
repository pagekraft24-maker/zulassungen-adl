import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import WhatsAppWidget from '@/components/feature/WhatsAppWidget';
import useSEO from '@/hooks/useSEO';

const BASE_URL = (typeof import.meta.env !== 'undefined' && import.meta.env.VITE_SITE_URL)
  ? import.meta.env.VITE_SITE_URL
  : 'https://zulassungen-adl.de';

const vorteile = [
  {
    id: 'zeitersparnis',
    titel: 'Zeitersparnis ohne Behördengang',
    beschreibung:
      'Sie sparen sich lange Wartezeiten, Terminbuchungen und unnötige Wege. Wir übernehmen die komplette Abwicklung für Sie — von der Unterlagenprüfung bis zur Übergabe der Kennzeichen.',
    icon: 'ri-time-line',
    image:
      '/images/relaxed-person-handing-car-keys-to-professional-se-6f508b.jpg',
    linkTo: '/leistungen',
    linkLabel: 'Alle Leistungen ansehen',
  },
  {
    id: 'persoenlich',
    titel: 'Persönlicher Service im regionalen Einzugsgebiet',
    beschreibung:
      'Vor Ort sind wir persönlich für Sie da — mit festen Ansprechpartnern und klaren Abläufen. Keine Hotline, kein Weiterleiten, kein Stress. Lünen, Dortmund, Bergkamen, Werne, Selm und Umgebung.',
    icon: 'ri-map-pin-user-line',
    image:
      '/images/two-professional-business-men-in-formal-suits-shak-000151.jpg',
    linkTo: '/standorte',
    linkLabel: 'Standorte in Ihrer Nähe',
  },
  {
    id: 'online',
    titel: 'Online-Zulassung bundesweit',
    beschreibung:
      'Unabhängig vom Standort können Sie Ihre Zulassung digital und strukturiert starten. Dokumente per WhatsApp oder E-Mail — wir erledigen alles und versenden per Express-Post.',
    icon: 'ri-global-line',
    image:
      '/images/online-digital-vehicle-registration-on-laptop-smar-9884a5.jpg',
    linkTo: '/leistungen',
    linkLabel: 'Online-Zulassung starten',
  },
  {
    id: 'praegung',
    titel: 'Eigene Kennzeichenprägung vor Ort',
    beschreibung:
      'Dank eigener Prägemaschine erhalten Sie Ihre Kennzeichenschilder direkt vor Ort — Standard, Carbon-Optik oder 3D. Kein Umweg zu einem anderen Anbieter nötig.',
    icon: 'ri-tools-line',
    image:
      '/images/license-plate-embossing-machine-german-kennzeichen-49d9d1.jpg',
    linkTo: '/leistungen',
    linkLabel: 'Kennzeichen-Optionen ansehen',
  },
  {
    id: 'checklisten',
    titel: 'Klare Checklisten & geprüfte Unterlagen',
    beschreibung:
      'Alle Vorgänge basieren auf festen, praxisbewährten Checklisten. Wir prüfen Ihre Unterlagen vorab kostenlos — so vermeiden wir Rückfragen, Verzögerungen und Fehler.',
    icon: 'ri-file-list-3-line',
    image:
      '/images/organized-document-checklist-professional-car-regi-389060.jpg',
    linkTo: '/kontakt',
    linkLabel: 'Kostenlose Unterlagenprüfung',
  },
  {
    id: 'privat-gewerbe',
    titel: 'Für Privat- und Geschäftskunden',
    beschreibung:
      'Ob Einzelzulassung oder mehrere Fahrzeuge: Wir betreuen Privatkunden, Autohäuser, Händler und Unternehmen zuverlässig und diskret — mit individuellen Rahmenverträgen.',
    icon: 'ri-user-star-line',
    image:
      '/images/diverse-customers-group-private-and-business-clien-233cc2.jpg',
    linkTo: '/leistungen',
    linkLabel: 'Für Geschäftskunden',
  },
  {
    id: 'transparent',
    titel: 'Transparent & zuverlässig',
    beschreibung:
      'Klare Kommunikation, nachvollziehbare Abläufe und eine saubere Abwicklung — darauf können Sie sich verlassen. Festpreise, keine versteckten Kosten, Geld-zurück-Garantie.',
    icon: 'ri-shield-check-line',
    image:
      '/images/transparent-reliable-service-trust-badge-handshake-c23449.jpg',
    linkTo: '/kontakt',
    linkLabel: 'Festpreis anfragen',
  },
];

const vergleich = [
  { label: 'Selbst zur Behörde fahren', behoerde: true, wir: false },
  { label: 'Lange Wartezeiten', behoerde: true, wir: false },
  { label: 'Unterlagen selbst prüfen', behoerde: true, wir: false },
  { label: 'Kennzeichen extern bestellen', behoerde: true, wir: false },
  { label: 'Persönliche Betreuung', behoerde: false, wir: true },
  { label: 'Online von überall starten', behoerde: false, wir: true },
  { label: 'Prägung direkt vor Ort', behoerde: false, wir: true },
  { label: 'Geprüfte Unterlagen-Checkliste', behoerde: false, wir: true },
  { label: 'Festpreis ohne Überraschungen', behoerde: false, wir: true },
  { label: 'Hol- & Bringservice', behoerde: false, wir: true },
];

const ablauf = [
  {
    step: '01',
    titel: 'Anfrage stellen',
    text: 'Per WhatsApp, Telefon oder Kontaktformular — wir melden uns innerhalb von 15 Minuten.',
    icon: 'ri-chat-3-line',
  },
  {
    step: '02',
    titel: 'Unterlagen prüfen',
    text: 'Wir prüfen Ihre Dokumente vorab kostenlos und melden uns, falls etwas fehlt.',
    icon: 'ri-file-search-line',
  },
  {
    step: '03',
    titel: 'Behördengang',
    text: 'Wir übernehmen den kompletten Behördengang mit Ihrer Vollmacht — Sie müssen nichts tun.',
    icon: 'ri-building-4-line',
  },
  {
    step: '04',
    titel: 'Kennzeichen & Papiere',
    text: 'Kennzeichen prägen wir direkt vor Ort. Fahrzeugschein & Co. erhalten Sie bei uns oder per Post.',
    icon: 'ri-key-2-line',
  },
];

function AnimatedCounter({ target, suffix = '', duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const step = Math.ceil(target / (duration / 16));
          const timer = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 16);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-extrabold text-white mb-1">
      {count.toLocaleString('de-DE')}
      {suffix}
    </div>
  );
}

const VorteilePage = () => {
  const todayISO = new Date().toISOString().split('T')[0];
  const ogImage =
    '/images/professional-german-vehicle-registration-service-b-1f2e02.jpg';

  useSEO({
    title: 'Kfz-Zulassung Vorteile Lünen | Zulassungsdienst an der Lippe – 7 Gründe',
    description:
      'Die 7 Vorteile der Kfz-Zulassung mit dem Zulassungsdienst an der Lippe in Lünen: Zeitersparnis ohne Behördengang, persönlicher Service, Online-Zulassung bundesweit, eigene Kennzeichenprägung, geprüfte Checklisten, Privat- & Gewerbekunden, transparente Festpreise. Lokal in Lünen, Dortmund, Bergkamen, Werne, Selm, Kamen, Schwerte und Kreis Unna.',
    keywords:
      'Kfz-Zulassung Vorteile Lünen, Zulassungsdienst Vorteile, Vorteile Zulassungsdienst an der Lippe, Zeitersparnis Kfz-Zulassung, Auto zulassen Vorteile, Kfz-Anmeldung Vorteile, Online-Zulassung Vorteile, Kennzeichenprägung Vorteile, Zulassungsdienst Lünen Gründe, persönlicher Service Kfz, Zulassung ohne Behördengang Vorteile, Festpreis Zulassung Vorteile, Hol- und Bringservice Vorteile, Kfz-Ummeldung Vorteile, Zulassungsservice NRW Vorteile',
    canonical: '/vorteile',
    ogTitle: 'Kfz-Zulassung Vorteile – 7 Gründe für den Zulassungsdienst an der Lippe Lünen',
    ogDescription:
      'Zeitersparnis, persönlicher Service, Online-Zulassung bundesweit, eigene Kennzeichenprägung, geprüfte Checklisten — entdecken Sie alle Vorteile der Kfz-Zulassung mit dem Zulassungsdienst an der Lippe in Lünen.',
    ogLocale: 'de_DE',
    ogImage,
    ogType: 'website',
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Start',
            item: `${BASE_URL}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Vorteile',
            item: `${BASE_URL}/vorteile`,
          },
        ],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `${BASE_URL}/vorteile#webpage`,
        name: 'Kfz-Zulassung Vorteile – Zulassungsdienst an der Lippe Lünen',
        description:
          'Mit dem Zulassungsdienst an der Lippe in Lünen entscheiden Sie sich für eine strukturierte, zuverlässige und zeitsparende Lösung rund um Ihre Kfz-Zulassung — lokal oder bundesweit online.',
        url: `${BASE_URL}/vorteile`,
        dateModified: todayISO,
        image: ogImage,
        mainEntity: [
          {
            '@type': 'ItemList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Zeitersparnis ohne Behördengang',
                description: 'Sie sparen sich lange Wartezeiten, Terminbuchungen und unnötige Wege. Wir übernehmen die komplette Abwicklung für Sie.',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Persönlicher Service im regionalen Einzugsgebiet',
                description: 'Vor Ort sind wir persönlich für Sie da — mit festen Ansprechpartnern und klaren Abläufen. Keine Hotline, kein Weiterleiten, kein Stress.',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Online-Zulassung bundesweit',
                description: 'Unabhängig vom Standort können Sie Ihre Zulassung digital und strukturiert starten. Ideal für Privatkunden, Unternehmen und Fuhrparks.',
              },
              {
                '@type': 'ListItem',
                position: 4,
                name: 'Eigene Kennzeichenprägung vor Ort',
                description: 'Dank eigener Prägemaschine erhalten Sie Ihre Kennzeichenschilder direkt vor Ort — ohne zusätzliche Wege oder externe Anbieter.',
              },
              {
                '@type': 'ListItem',
                position: 5,
                name: 'Klare Checklisten & geprüfte Unterlagen',
                description: 'Alle Vorgänge basieren auf festen, praxisbewährten Checklisten. So vermeiden wir Rückfragen, Verzögerungen und Fehler.',
              },
              {
                '@type': 'ListItem',
                position: 6,
                name: 'Für Privat- und Geschäftskunden',
                description: 'Ob Einzelzulassung oder mehrere Fahrzeuge: Wir betreuen Privatkunden, Autohäuser, Händler und Unternehmen zuverlässig und diskret.',
              },
              {
                '@type': 'ListItem',
                position: 7,
                name: 'Transparent & zuverlässig',
                description: 'Klare Kommunikation, nachvollziehbare Abläufe und eine saubere Abwicklung — darauf können Sie sich verlassen.',
              },
            ],
          },
          {
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Wie lange dauert eine Kfz-Zulassung über den Zulassungsdienst Lünen?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'In der Regel erhalten Sie Ihre Kennzeichen noch am selben Tag — oft innerhalb weniger Stunden. Bei der Online-Zulassung versenden wir alles per Express-Post, sodass Sie Ihre Papiere am nächsten Werktag in der Hand halten.',
                },
              },
              {
                '@type': 'Question',
                name: 'Welche Unterlagen benötige ich für die Kfz-Zulassung?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Sie brauchen: Personalausweis oder Reisepass, die eVB-Nummer Ihrer Kfz-Versicherung, die Zulassungsbescheinigung Teil II (Fahrzeugbrief) und Teil I (Fahrzeugschein), sowie den Prüfbericht der letzten Hauptuntersuchung.',
                },
              },
              {
                '@type': 'Question',
                name: 'Kann ich mein Auto auch online zulassen ohne persönlich vorbeizukommen?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Ja! Unsere Online-Zulassung funktioniert bundesweit. Sie schicken uns Ihre Dokumente per WhatsApp oder E-Mail, wir kümmern uns um den kompletten Behördengang in Lünen und versenden Kennzeichen und Papiere per Express-Post.',
                },
              },
              {
                '@type': 'Question',
                name: 'Was kostet die Kfz-Zulassung beim Zulassungsdienst an der Lippe?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Wir arbeiten mit transparenten Festpreisen — keine versteckten Kosten. Der Preis hängt vom Fahrzeugtyp und der gewünschten Kennzeichenart ab. Geld-zurück-Garantie inklusive.',
                },
              },
              {
                '@type': 'Question',
                name: 'In welchen Städten ist der Zulassungsdienst an der Lippe tätig?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Persönlich vor Ort in Lünen, Dortmund, Bergkamen, Werne, Selm, Kamen, Schwerte und dem Kreis Unna. Online-Zulassung bundesweit verfügbar.',
                },
              },
              {
                '@type': 'Question',
                name: 'Kann ich Wunschkennzeichen über den Zulassungsdienst reservieren?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Ja, Wunschkennzeichen sind möglich. Wir prüfen die Verfügbarkeit und prägen es direkt vor Ort mit eigener Prägemaschine — in Standard, Carbon-Optik oder 3D.',
                },
              },
              {
                '@type': 'Question',
                name: 'Ist der Zulassungsdienst auch für Geschäftskunden und Autohäuser geeignet?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Absolut. Wir betreuen Privat- und Geschäftskunden zuverlässig und diskret. Für Autohäuser, Händler und Unternehmen mit mehreren Fahrzeugen bieten wir individuelle Rahmenverträge.',
                },
              },
            ],
          },
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5.0',
          reviewCount: '157',
          bestRating: '5',
          worstRating: '1',
          itemReviewed: {
            '@type': 'LocalBusiness',
            name: 'Zulassungsdienst an der Lippe',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Willy-Brandt-Platz 6',
              addressLocality: 'Lünen',
              postalCode: '44532',
              addressCountry: 'DE',
            },
          },
        },
      },
    ],
  });

  return (
    <div className="font-sans">
      <Header />
      <main className="pt-18">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="bg-white border-b border-gray-100">
          <ol className="max-w-6xl mx-auto px-4 md:px-6 py-3 flex items-center gap-2 text-xs text-gray-400">
            <li><Link to="/" className="hover:text-navy-700 transition-colors cursor-pointer">Start</Link></li>
            <li className="w-3 h-3 flex items-center justify-center"><i className="ri-arrow-right-s-line text-gray-300"></i></li>
            <li className="text-navy-700 font-medium">Vorteile</li>
          </ol>
        </nav>

        {/* Hero mit Hintergrundbild */}
        <section className="relative min-h-[480px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
          {/* Hintergrundbild */}
          <div className="absolute inset-0">
            <img
              src="/images/dark-professional-abstract-background-with-vehicle-4c257c.jpg"
              alt="Kfz-Zulassung Vorteile — Zulassungsdienst an der Lippe Lünen NRW"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
          </div>

          <div className="relative max-w-4xl mx-auto px-4 md:px-6 text-center py-20">
            <span className="inline-flex items-center gap-2 bg-whatsapp/20 text-whatsapp text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <div className="w-1.5 h-1.5 bg-whatsapp rounded-full animate-pulse"></div>
              Ihre Vorteile
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Kfz-Zulassung ohne Behördengang — <br className="hidden md:block" />7 Vorteile des Zulassungsdienst Lünen
            </h1>
            <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Mit dem <strong>Zulassungsdienst an der Lippe</strong> in <strong>Lünen</strong> entscheiden Sie sich für eine strukturierte,
              zuverlässige und zeitsparende Lösung rund um Ihre <strong>Kfz-Zulassung</strong> — lokal persönlich
              in Lünen, Dortmund, Bergkamen, Werne, Selm, Kamen, Schwerte oder online bundesweit.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://wa.me/4923063548896"
                target="_blank"
                rel="nofollow noreferrer"
                className="inline-flex items-center gap-2 bg-whatsapp text-white font-bold px-6 py-3.5 rounded-xl text-sm whitespace-nowrap cursor-pointer hover:bg-green-600 transition-colors"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <img src="/images/whatsapp-bf1279.svg" className="w-full h-full object-contain" alt="WhatsApp" loading="lazy" decoding="async" />
                </div>
                Jetzt starten
              </a>
              <Link
                to="/leistungen"
                className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-6 py-3.5 rounded-xl text-sm whitespace-nowrap cursor-pointer hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-file-list-line"></i>
                </div>
                Alle Leistungen &amp; Preise
              </Link>
            </div>
            {/* Google Bewertung Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mt-5">
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <div key={s} className="w-3.5 h-3.5 flex items-center justify-center">
                    <i className="ri-star-fill text-yellow-400 text-xs"></i>
                  </div>
                ))}
              </div>
              <span className="text-white/80 text-xs font-medium">5.0 · 157+ Bewertungen · Google</span>
            </div>
          </div>
        </section>

        {/* Vorher / Nachher Vergleich */}
        <section className="bg-white py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
              <span className="text-xs font-bold text-navy-400 uppercase tracking-widest">Vergleich</span>
              <h2 className="text-2xl md:text-4xl font-extrabold text-navy-900 mt-3 mb-4">
                Zulassungsstelle <span className="text-gray-300">vs.</span> Zulassungsdienst Lünen
              </h2>
              <p className="text-gray-500 text-base max-w-lg mx-auto">
                Ein direkter Vergleich zeigt, warum die Kfz-Zulassung über uns schneller und einfacher ist.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-gray-100 shadow-sm">
              {/* Linke Spalte: Selbst zur Behörde */}
              <div className="bg-gray-50 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                    <i className="ri-close-circle-line text-red-500 text-lg"></i>
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">Selbst zur Behörde</div>
                    <div className="text-xs text-gray-400">Zeitaufwand: 3–6 Stunden</div>
                  </div>
                </div>
                <div className="space-y-3">
                  {vergleich
                    .filter((v) => v.behoerde)
                    .map((v) => (
                      <div key={v.label} className="flex items-center gap-3 text-sm text-gray-600">
                        <div className="w-5 h-5 flex items-center justify-center shrink-0">
                          <i className="ri-close-line text-red-400"></i>
                        </div>
                        {v.label}
                      </div>
                    ))}
                </div>
              </div>

              {/* Rechte Spalte: Mit uns */}
              <div className="bg-navy-900 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-whatsapp/20 rounded-xl flex items-center justify-center">
                    <i className="ri-check-double-line text-whatsapp text-lg"></i>
                  </div>
                  <div>
                    <div className="font-bold text-white">Mit dem Zulassungsdienst</div>
                    <div className="text-xs text-white/50">Ihr Aufwand: 5 Minuten</div>
                  </div>
                </div>
                <div className="space-y-3">
                  {vergleich
                    .filter((v) => v.wir)
                    .map((v) => (
                      <div key={v.label} className="flex items-center gap-3 text-sm text-white/80">
                        <div className="w-5 h-5 flex items-center justify-center shrink-0">
                          <i className="ri-check-line text-whatsapp"></i>
                        </div>
                        {v.label}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vorteile — Alternating Layout */}
        <section className="bg-offwhite py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
              <span className="text-xs font-bold text-navy-400 uppercase tracking-widest">Warum wir?</span>
              <h2 className="text-2xl md:text-4xl font-extrabold text-navy-900 mt-3 mb-4">
                7 Gründe für die Kfz-Zulassung mit dem Zulassungsdienst an der Lippe
              </h2>
            </div>

            <div className="space-y-16 md:space-y-24">
              {vorteile.map((v, i) => {
                const isEven = i % 2 === 0;
                return (
                  <article
                    key={v.id}
                    className={`flex flex-col ${
                      isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    } gap-8 md:gap-12 items-center`}
                  >
                    {/* Bild */}
                    <div className="w-full lg:w-1/2">
                      <div className="relative rounded-2xl overflow-hidden shadow-sm">
                        <img
                          src={v.image}
                          alt={`${v.titel} — Zulassungsdienst an der Lippe Lünen`}
                          className="w-full h-64 md:h-72 object-cover"
                        />
                        <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md">
                          <span className="text-xl font-extrabold text-navy-900">{String(i + 1).padStart(2, '0')}</span>
                        </div>
                      </div>
                    </div>

                    {/* Text */}
                    <div className="w-full lg:w-1/2">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-navy-900 rounded-xl flex items-center justify-center">
                          <i className={`${v.icon} text-white text-xl`}></i>
                        </div>
                        <h3 className="text-xl md:text-2xl font-extrabold text-navy-900">{v.titel}</h3>
                      </div>
                      <p className="text-gray-500 text-base leading-relaxed mb-5">{v.beschreibung}</p>
                      <Link
                        to={v.linkTo}
                        className="inline-flex items-center gap-2 text-navy-700 font-semibold text-sm hover:text-navy-900 transition-colors cursor-pointer"
                      >
                        {v.linkLabel}
                        <div className="w-4 h-4 flex items-center justify-center">
                          <i className="ri-arrow-right-line"></i>
                        </div>
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Ablauf Timeline */}
        <section className="bg-white py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
              <span className="text-xs font-bold text-navy-400 uppercase tracking-widest">So funktioniert's</span>
              <h2 className="text-2xl md:text-4xl font-extrabold text-navy-900 mt-3 mb-4">
                So funktioniert Ihre Kfz-Zulassung in 4 Schritten
              </h2>
              <p className="text-gray-500 text-base max-w-md mx-auto">
                Von der ersten Nachricht bis zum fertigen Kennzeichen — so einfach läuft Ihre Zulassung beim Zulassungsdienst Lünen.
              </p>
            </div>

            <div className="relative">
              {/* Verbindungslinie */}
              <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gray-100"></div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
                {ablauf.map((a) => (
                  <div key={a.step} className="relative text-center">
                    <div className="w-14 h-14 bg-navy-900 rounded-2xl flex items-center justify-center mx-auto mb-5 relative z-10 shadow-sm">
                      <i className={`${a.icon} text-white text-xl`}></i>
                    </div>
                    <div className="text-xs font-bold text-navy-400 mb-1">Schritt {a.step}</div>
                    <h4 className="text-base font-bold text-navy-900 mb-2">{a.titel}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">{a.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Kundenstimme */}
        <section className="bg-offwhite py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
              <i className="ri-double-quotes-l text-navy-700 text-2xl"></i>
            </div>
            <blockquote className="text-xl md:text-2xl font-semibold text-navy-900 leading-relaxed mb-6">
              "Ich musste nichts weiter tun als meine Unterlagen per WhatsApp schicken.
              Am nächsten Tag hatte ich meine Kennzeichen in der Hand. Unfassbar einfach."
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 bg-navy-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-navy-700">MK</span>
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-navy-900">Marcus K.</div>
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <i key={s} className="ri-star-fill text-whatsapp text-xs"></i>
                  ))}
                  <span className="text-xs text-gray-400 ml-1">· Lünen</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats-Band — animiert */}
        <section className="bg-navy-900 py-14 md:py-20">
          <div className="max-w-5xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 text-center">
              <div>
                <AnimatedCounter target={5} suffix={',0'} />
                <div className="flex items-center justify-center gap-0.5 mb-2">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <div key={s} className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-star-fill text-whatsapp text-sm"></i>
                    </div>
                  ))}
                </div>
                <div className="text-white/50 text-xs font-medium">Bewertung bei Google</div>
              </div>
              <div>
                <AnimatedCounter target={1000} suffix="+" />
                <div className="text-white/50 text-xs font-medium mt-2">Erledigte Zulassungen</div>
              </div>
              <div>
                <AnimatedCounter target={15} suffix=" min" />
                <div className="text-white/50 text-xs font-medium mt-2">Durchschnittliche Antwortzeit</div>
              </div>
              <div>
                <AnimatedCounter target={100} suffix="%" />
                <div className="text-white/50 text-xs font-medium mt-2">Transparente Festpreise</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ — Häufige Fragen zur Kfz-Zulassung */}
        <section className="bg-offwhite py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-bold text-navy-400 uppercase tracking-widest">FAQ</span>
              <h2 className="text-2xl md:text-4xl font-extrabold text-navy-900 mt-3 mb-4">
                Häufige Fragen zur Kfz-Zulassung in Lünen
              </h2>
              <p className="text-gray-500 text-base max-w-lg mx-auto">
                Antworten auf die wichtigsten Fragen rund um den Zulassungsdienst an der Lippe.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  frage: 'Wie lange dauert eine Kfz-Zulassung über den Zulassungsdienst Lünen?',
                  antwort: 'In der Regel erhalten Sie Ihre Kennzeichen noch am selben Tag — oft innerhalb weniger Stunden. Bei der Online-Zulassung versenden wir alles per Express-Post, sodass Sie Ihre Papiere am nächsten Werktag in der Hand halten. Die Behörde selbst benötigt meist 3–6 Stunden Wartezeit, die Sie sich komplett sparen.',
                },
                {
                  frage: 'Welche Unterlagen benötige ich für die Kfz-Zulassung?',
                  antwort: 'Sie brauchen: Personalausweis oder Reisepass, die eVB-Nummer Ihrer Kfz-Versicherung, die Zulassungsbescheinigung Teil II (Fahrzeugbrief) und Teil I (Fahrzeugschein), sowie den Prüfbericht der letzten Hauptuntersuchung. Bei gewerblichen Zulassungen zusätzlich den Handelsregisterauszug. Wir prüfen Ihre Unterlagen vorab kostenlos.',
                },
                {
                  frage: 'Kann ich mein Auto auch online zulassen ohne persönlich vorbeizukommen?',
                  antwort: 'Ja! Unsere Online-Zulassung funktioniert bundesweit. Sie schicken uns Ihre Dokumente per WhatsApp oder E-Mail, wir kümmern uns um den kompletten Behördengang in Lünen und versenden Kennzeichen und Papiere per Express-Post direkt zu Ihnen nach Hause.',
                },
                {
                  frage: 'Was kostet die Kfz-Zulassung beim Zulassungsdienst an der Lippe?',
                  antwort: 'Wir arbeiten mit transparenten Festpreisen — keine versteckten Kosten. Der Preis hängt vom Fahrzeugtyp und der gewünschten Kennzeichenart ab. Standard-Kennzeichen sind günstiger als Carbon- oder 3D-Optik. Eine genaue Preisliste finden Sie auf unserer Leistungsseite. Und: Geld-zurück-Garantie, falls wir Ihre Zulassung nicht durchführen können.',
                },
                {
                  frage: 'In welchen Städten ist der Zulassungsdienst an der Lippe tätig?',
                  antwort: 'Persönlich vor Ort betreuen wir Kunden in Lünen, Dortmund, Bergkamen, Werne, Selm, Kamen, Schwerte und dem gesamten Kreis Unna. Unsere Online-Zulassung ist deutschlandweit verfügbar — unabhängig von Ihrem Wohnort.',
                },
                {
                  frage: 'Kann ich Wunschkennzeichen über den Zulassungsdienst reservieren?',
                  antwort: 'Ja, Wunschkennzeichen sind selbstverständlich möglich. Sie teilen uns Ihr Wunschkennzeichen mit, wir prüfen die Verfügbarkeit und prägen es direkt vor Ort mit unserer eigenen Prägemaschine — in Standard, Carbon-Optik oder 3D.',
                },
                {
                  frage: 'Ist der Zulassungsdienst auch für Geschäftskunden und Autohäuser geeignet?',
                  antwort: 'Absolut. Wir betreuen Privat- und Geschäftskunden gleichermaßen zuverlässig und diskret. Für Autohäuser, Händler und Unternehmen mit mehreren Fahrzeugen bieten wir individuelle Rahmenverträge und Sonderkonditionen — sprechen Sie uns einfach an.',
                },
              ].map((faq, idx) => (
                <details key={idx} className="bg-white rounded-2xl border border-gray-100 group">
                  <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer list-none">
                    <span className="text-sm md:text-base font-bold text-navy-900 pr-4">{faq.frage}</span>
                    <div className="w-6 h-6 flex items-center justify-center shrink-0 rounded-full bg-navy-50 group-open:bg-navy-900 transition-colors">
                      <i className="ri-add-line text-navy-700 group-open:text-white text-sm transition-colors group-open:hidden"></i>
                      <i className="ri-subtract-line text-white text-sm hidden group-open:block"></i>
                    </div>
                  </summary>
                  <div className="px-5 md:px-6 pb-5 md:pb-6">
                    <p className="text-gray-500 text-sm leading-relaxed">{faq.antwort}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
            <div className="w-16 h-16 bg-navy-50 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <i className="ri-checkbox-circle-line text-navy-700 text-2xl"></i>
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-navy-900 mb-3">
              Überzeugt? Starten Sie Ihre Kfz-Zulassung
            </h2>
            <p className="text-gray-500 text-base max-w-md mx-auto mb-8">
              Starten Sie jetzt Ihren Zulassungsvorgang beim Zulassungsdienst an der Lippe — per WhatsApp, Telefon oder direkt online.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://wa.me/4923063548896"
                target="_blank"
                rel="nofollow noreferrer"
                className="inline-flex items-center gap-2 bg-whatsapp text-white font-bold px-7 py-4 rounded-xl text-base whitespace-nowrap cursor-pointer hover:bg-green-600 transition-colors"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <img src="/images/whatsapp-bf1279.svg" className="w-full h-full object-contain" alt="WhatsApp" loading="lazy" decoding="async" />
                </div>
                Jetzt per WhatsApp starten
              </a>
              <Link
                to="/leistungen"
                className="inline-flex items-center gap-2 border-2 border-navy-100 text-navy-900 font-semibold px-7 py-4 rounded-xl text-base whitespace-nowrap cursor-pointer hover:border-navy-300 hover:bg-navy-50 transition-colors"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-file-list-line"></i>
                </div>
              Alle Leistungen &amp; Preise
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

export default VorteilePage;