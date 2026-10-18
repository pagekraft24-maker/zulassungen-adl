// Zentrale Unternehmensdaten für strukturierte Daten (Schema.org)
export const SITE_URL = 'https://zulassungen-adl.de';
export const BUSINESS_ID = `${SITE_URL}/#business`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

const leistung = (name: string, slug: string) => ({
  '@type': 'Offer',
  itemOffered: { '@type': 'Service', name, url: `${SITE_URL}/leistungen/${slug}` },
});

export const BUSINESS = {
  '@type': 'AutomotiveBusiness',
  '@id': BUSINESS_ID,
  name: 'Zulassungsdienst an der Lippe',
  alternateName: 'ADL Zulassungsdienst',
  legalName: 'HSZ Digital GmbH',
  description:
    'Kfz-Zulassungsdienst in Lünen – Anmeldung, Ummeldung, Abmeldung, Wunschkennzeichen und Kennzeichenprägung mit Festpreisen. Hol- & Bringservice im Kreis Unna und Online-Zulassung bundesweit.',
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/images/3b-bildschirmfoto-2026-05-11-um-16-51-48-3edb9e.png`,
  image: [OG_IMAGE, `${SITE_URL}/images/professional-kfz-zulassungsdienst-office-interior-0595d1.jpg`],
  telephone: '+49 2306 3548896',
  email: 'service@zulassungen-adl.de',
  priceRange: '€€',
  currenciesAccepted: 'EUR',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Willy-Brandt-Platz 6',
    addressLocality: 'Lünen',
    postalCode: '44532',
    addressRegion: 'NRW',
    addressCountry: 'DE',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 51.6158, longitude: 7.5268 },
  hasMap: 'https://maps.google.com/?q=Willy-Brandt-Platz+6,+44532+L%C3%BCnen',
  areaServed: [
    { '@type': 'City', name: 'Lünen' },
    { '@type': 'City', name: 'Dortmund' },
    { '@type': 'City', name: 'Bergkamen' },
    { '@type': 'City', name: 'Werne' },
    { '@type': 'City', name: 'Selm' },
    { '@type': 'City', name: 'Kamen' },
    { '@type': 'City', name: 'Schwerte' },
    { '@type': 'AdministrativeArea', name: 'Kreis Unna' },
    { '@type': 'Country', name: 'Deutschland' },
  ],
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:30', closes: '13:30' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '15:00', closes: '19:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '12:00', closes: '16:00' },
  ],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '137', bestRating: '5', worstRating: '1' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Leistungen',
    itemListElement: [
      leistung('Kfz-Anmeldung', 'kfz-anmeldung'),
      leistung('Kfz-Ummeldung', 'kfz-ummeldung'),
      leistung('Kfz-Abmeldung', 'kfz-abmeldung'),
      leistung('Wunschkennzeichen', 'wunschkennzeichen'),
      leistung('Kurzzeitkennzeichen', 'kurzzeitkennzeichen'),
      leistung('Kennzeichenprägung', 'kennzeichenpraegung'),
      leistung('Hol- & Bringservice', 'hol-bringservice'),
      leistung('Adress-/Namensänderung', 'adress-aenderung'),
      leistung('Gewerbe-Service', 'gewerbekunden'),
    ],
  },
};

export const WEBSITE = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: 'Zulassungsdienst an der Lippe',
  inLanguage: 'de-DE',
  publisher: { '@id': BUSINESS_ID },
};

const SEGMENT_NAMES: Record<string, { name: string; url: string }> = {
  leistungen: { name: 'Leistungen', url: '/leistungen' },
  'kfz-zulassung': { name: 'Standorte', url: '/standorte' },
  blog: { name: 'Blog', url: '/blog' },
};

type Node = Record<string, unknown>;
const isObj = (v: unknown): v is Node => !!v && typeof v === 'object' && !Array.isArray(v);
const BUSINESS_TYPES = ['LocalBusiness', 'Organization', 'AutomotiveBusiness'];
const absolutize = (v: string) => (v.startsWith('/') && !v.startsWith('//') ? `${SITE_URL}${v}` : v);

// Bereinigt Seiten-Schemas: ein einheitliches Unternehmen (@id), keine doppelten Firmen-Einträge,
// keine Produkt-Markups für Dienstleistungen, absolute URLs.
const clean = (node: unknown, top: boolean): unknown => {
  if (typeof node === 'string') return absolutize(node);
  if (Array.isArray(node)) return node.map((n) => clean(n, false)).filter((n) => n !== null);
  if (!isObj(node)) return node;
  const n: Node = { ...node };
  delete n['@context'];
  const type = n['@type'] as string | undefined;

  if (type && BUSINESS_TYPES.includes(type)) {
    const area = n.areaServed as Node | undefined;
    if (top && isObj(area) && area['@type'] === 'City') {
      // Stadt-Landingpage → Dienstleistung im Einzugsgebiet statt Doppel-Firma
      return {
        '@type': 'Service',
        name: `Kfz-Zulassung ${area.name}`,
        serviceType: 'Kfz-Zulassungsdienst',
        description: n.description,
        image: n.image ? absolutize(String(n.image)) : undefined,
        url: n.url,
        areaServed: clean(area, false),
        provider: { '@id': BUSINESS_ID },
      };
    }
    return top ? null : { '@id': BUSINESS_ID };
  }
  if (type === 'BreadcrumbList' && top) return null; // wird zentral erzeugt
  if (type === 'Product') {
    n['@type'] = 'Service';
    n.provider = { '@id': BUSINESS_ID };
    n.areaServed = { '@type': 'Country', name: 'Deutschland' };
    delete n.brand;
    delete n.aggregateRating;
  }
  if (type === 'Offer') {
    const p = String(n.price ?? '');
    if (n.price !== undefined && !(parseFloat(p) > 0)) {
      delete n.price;
      delete n.priceCurrency;
    }
  }
  if (type !== 'AutomotiveBusiness') delete n.aggregateRating;
  for (const k of Object.keys(n)) {
    if (k === '@type' || k === '@id') continue;
    n[k] = clean(n[k], false);
    if (n[k] === undefined) delete n[k];
  }
  return n;
};

export const buildGraph = (opts: {
  path: string;
  title: string;
  description: string;
  image: string;
  pageSchema?: object | object[];
}) => {
  const url = `${SITE_URL}${opts.path === '/' ? '/' : opts.path}`;
  const segs = opts.path.split('/').filter(Boolean);
  const crumbs: Node[] = [{ '@type': 'ListItem', position: 1, name: 'Startseite', item: `${SITE_URL}/` }];
  segs.forEach((s, i) => {
    const last = i === segs.length - 1;
    const mapped = SEGMENT_NAMES[s];
    if (!last && mapped) {
      crumbs.push({ '@type': 'ListItem', position: crumbs.length + 1, name: mapped.name, item: `${SITE_URL}${mapped.url}` });
    } else if (last) {
      crumbs.push({ '@type': 'ListItem', position: crumbs.length + 1, name: opts.title.split('|')[0].split(' · ')[0].trim(), item: url });
    }
  });

  const page = (Array.isArray(opts.pageSchema) ? opts.pageSchema : opts.pageSchema ? [opts.pageSchema] : [])
    .map((s) => clean(s, true))
    .filter(Boolean) as Node[];
  const hasOwnPage = page.some((p) => ['WebPage', 'FAQPage', 'Blog', 'ContactPage', 'AboutPage', 'CollectionPage'].includes(String(p['@type'])));

  const graph: Node[] = [BUSINESS, WEBSITE];
  const webPage: Node = {
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: opts.title,
    description: opts.description,
    inLanguage: 'de-DE',
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': BUSINESS_ID },
    primaryImageOfPage: { '@type': 'ImageObject', url: absolutize(opts.image) },
  };
  if (segs.length) {
    webPage.breadcrumb = { '@id': `${url}#breadcrumb` };
    graph.push({ '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`, itemListElement: crumbs });
  }
  if (!hasOwnPage) graph.push(webPage);
  else {
    // Eigene Seitentypen (z. B. FAQPage) mit WebPage-Basisdaten anreichern
    page.forEach((p) => {
      if (['WebPage', 'FAQPage', 'Blog', 'ContactPage', 'AboutPage', 'CollectionPage'].includes(String(p['@type']))) {
        Object.assign(p, { ...webPage, ...p, '@type': p['@type'] });
      }
    });
  }
  graph.push(...page);
  return { '@context': 'https://schema.org', '@graph': graph };
};
