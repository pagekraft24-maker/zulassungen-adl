export interface Stadt {
  slug: string;
  name: string;
  region: string;
  entfernung: string;
  beschreibung: string;
  metaTitle: string;
  metaDescription: string;
  bild: string;
  highlights: string[];
  faq: { frage: string; antwort: string }[];
}

export const staedte: Stadt[] = [
  {
    slug: 'dortmund',
    name: 'Dortmund',
    region: 'Ruhrgebiet',
    entfernung: 'ca. 20 Min. von Dortmund-Mitte',
    beschreibung: 'Als größte Stadt im Ruhrgebiet ist Dortmund unser wichtigstes Einzugsgebiet. Tausende Dortmunder nutzen unseren Service jährlich — statt stundenlanger Wartezeit bei der Dortmunder Zulassungsstelle.',
    metaTitle: 'Kfz-Zulassung Dortmund | Auto zulassen Dortmund – Zulassungsdienst',
    metaDescription: 'Auto zulassen in Dortmund ohne Behördengang. Kfz-Anmeldung, Ummeldung & Abmeldung ab 29,90 €. Schneller als die Zulassungsstelle Dortmund. TÜV & DEKRA zertifiziert. Jetzt anfragen!',
    bild: '/images/dortmund-city-skyline-westfalenhalle-modern-urban-01b5c8.jpg',
    highlights: ['Keine Wartezeiten bei der Dortmunder Zulassungsstelle', 'Hol- & Bringservice im gesamten Dortmunder Stadtgebiet', '24/7 WhatsApp erreichbar', 'Festpreise für Dortmunder Kunden'],
    faq: [
      { frage: 'Wie lange dauert die Fahrt von Dortmund zu Ihnen?', antwort: 'Von Dortmund-Mitte sind es ca. 20–25 Minuten zu uns nach Lünen. Mit unserem Hol- & Bringservice müssen Sie gar nicht kommen.' },
      { frage: 'Kann ich auch als Dortmunder ein LÜN-Kennzeichen bekommen?', antwort: 'Nein — für in Dortmund wohnhafte Personen wird ein DO-Kennzeichen ausgestellt. Oder wählen Sie ein Wunschkennzeichen.' },
      { frage: 'Warum nicht direkt zur Dortmunder Zulassungsstelle?', antwort: 'Die Wartezeiten in Dortmund sind oft mehrere Wochen. Bei uns erledigen Sie alles schnell und ohne Wartezeit.' },
    ],
  },
  {
    slug: 'bergkamen',
    name: 'Bergkamen',
    region: 'Kreis Unna',
    entfernung: 'ca. 10 Min. von Bergkamen',
    beschreibung: 'Bergkamen liegt direkt vor unserer Haustür — schnelle Erreichbarkeit und persönlicher Service für alle Bergkamener Kfz-Zulassungen.',
    metaTitle: 'Kfz-Zulassung Bergkamen | Auto zulassen Bergkamen – Zulassungsdienst',
    metaDescription: 'Auto zulassen in Bergkamen – Kfz-Anmeldung, Ummeldung & Abmeldung ohne Wartezeit. Nur 10 Min. von Bergkamen. Schneller als die Zulassungsstelle. Ab 29,90 €. Jetzt anfragen!',
    bild: '/images/bergkamen-kreis-unna-german-town-residential-area-0de0b4.jpg',
    highlights: ['Kürzeste Wege von Bergkamen nach Lünen', 'Kenntnis der lokalen Zulassungsstelle Kreis Unna', 'Schnelle Abwicklung ohne Wartezeit', 'Kompetente Beratung vor Ort'],
    faq: [
      { frage: 'Wie weit ist Bergkamen von Ihnen entfernt?', antwort: 'Bergkamen liegt direkt benachbart zu Lünen — ca. 10 Minuten Fahrzeit.' },
      { frage: 'Bearbeiten Sie auch Bergkamener Kennzeichen (UN)?', antwort: 'Ja, wir kümmern uns um alle Zulassungen im Kreis Unna inkl. UN-Kennzeichen.' },
    ],
  },
  {
    slug: 'werne',
    name: 'Werne',
    region: 'Kreis Unna',
    entfernung: 'ca. 15 Min. von Werne',
    beschreibung: 'Für Werne-Kunden bieten wir einen schnellen, unkomplizierten Zulassungsservice mit optionalem Hol- & Bringservice direkt nach Werne.',
    metaTitle: 'Kfz-Zulassung Werne | Auto zulassen Werne – Zulassungsdienst',
    metaDescription: 'Auto zulassen in Werne – Kfz-Anmeldung, Ummeldung & Abmeldung mit Festpreisen ab 29,90 €. Hol- & Bringservice bis Werne. Ohne Zulassungsstelle. Jetzt per WhatsApp anfragen!',
    bild: '/images/werne-an-der-lippe-german-small-town-market-square-6a41e7.jpg',
    highlights: ['Hol- & Bringservice bis nach Werne', '24/7 WhatsApp-Erreichbarkeit', 'Alle Kfz-Zulassungen aus einer Hand', 'Kennzeichenprägung vor Ort'],
    faq: [
      { frage: 'Fahren Sie auch bis Werne für den Hol- & Bringservice?', antwort: 'Ja, wir fahren nach Werne. Bitte anfragen für aktuelle Preise.' },
      { frage: 'Was kostet die Anmeldung für ein Werner Fahrzeug?', antwort: 'Die Preise sind unabhängig vom Wohnort — Anmeldung ab 129,90 €.' },
    ],
  },
  {
    slug: 'selm',
    name: 'Selm',
    region: 'Kreis Unna',
    entfernung: 'ca. 15 Min. von Selm',
    beschreibung: 'Selm im Kreis Unna — wir kennen die Region und bieten Selmer Kunden denselben erstklassigen Zulassungsservice wie allen anderen.',
    metaTitle: 'Kfz-Zulassung Selm | Auto zulassen Selm – Zulassungsdienst',
    metaDescription: 'Auto zulassen in Selm ohne Behördengang – Kfz-Anmeldung, Ummeldung & Abmeldung mit Festpreisen. Bundesweite Online-Zulassung. TÜV zertifiziert. Jetzt anfragen!',
    bild: '/images/selm-kreis-unna-german-town-quiet-residential-stre-5f7658.jpg',
    highlights: ['Keine langen Wartezeiten mehr', 'Bundesweit online möglich', 'Festpreise keine Überraschungen', 'Zertifizierter Fachbetrieb'],
    faq: [
      { frage: 'Kann ich die Zulassung für Selm auch online erledigen?', antwort: 'Ja, unser Online-Zulassungsservice funktioniert bundesweit und damit auch aus Selm.' },
    ],
  },
  {
    slug: 'kreis-unna',
    name: 'Kreis Unna',
    region: 'Kreis Unna',
    entfernung: 'je nach Ort 10–25 Min.',
    beschreibung: 'Der gesamte Kreis Unna ist unser Heimrevier — wir kennen alle lokalen Zulassungsstellen und helfen Ihnen im gesamten Kreisgebiet.',
    metaTitle: 'Kfz-Zulassung Kreis Unna | Auto zulassen Kreis Unna – Zulassungsdienst',
    metaDescription: 'Auto zulassen im gesamten Kreis Unna – Kfz-Anmeldung, Ummeldung & Abmeldung ab 29,90 €. Bergkamen, Kamen, Werne, Selm, Schwerte. Eigene Kennzeichenprägung. 5,0 Google. Jetzt anfragen!',
    bild: '/images/kreis-unna-nrw-german-district-landscape-green-fie-da9ced.jpg',
    highlights: ['Gesamten Kreis Unna abdeckend', 'Vertrauter Umgang mit UN-Kennzeichen', 'Lokale Expertise seit Jahren', 'Schnellstes Team in der Region'],
    faq: [
      { frage: 'Welche Städte im Kreis Unna bedienen Sie?', antwort: 'Wir bedienen das gesamte Kreisgebiet: Bergkamen, Bönen, Fröndenberg, Holzwickede, Kamen, Lünen, Schwerte, Selm, Unna und Werne.' },
    ],
  },
  {
    slug: 'kamen',
    name: 'Kamen',
    region: 'Kreis Unna',
    entfernung: 'ca. 12 Min. von Kamen',
    beschreibung: 'Kamen — Tor zum Ruhrgebiet und direkt in unserem Servicegebiet. Kamener Kunden schätzen unsere Schnelligkeit und Zuverlässigkeit.',
    metaTitle: 'Kfz-Zulassung Kamen | Auto zulassen Kamen – Zulassungsdienst',
    metaDescription: 'Auto zulassen in Kamen – Kfz-Anmeldung & Ummeldung ab 29,90 €. Nur 12 Min. entfernt. Hol- & Bringservice. Ohne Wartezeit bei der Zulassungsstelle. Jetzt anfragen!',
    bild: '/images/kamen-nrw-westfalen-german-town-city-center-with-m-cfa1f7.jpg',
    highlights: ['Direkt von Kamen gut erreichbar', 'Zügige Bearbeitung garantiert', 'Hol- & Bringservice nach Kamen', 'Alle Kennzeichentypen verfügbar'],
    faq: [
      { frage: 'Wie schnell sind Sie für Kamener Kunden?', antwort: 'Wir bearbeiten Ihren Auftrag schnellstmöglich nach Eingang aller Unterlagen — egal ob aus Kamen oder anderswo.' },
    ],
  },
  {
    slug: 'schwerte',
    name: 'Schwerte',
    region: 'Ennepe-Ruhr-Kreis',
    entfernung: 'ca. 25 Min. von Schwerte',
    beschreibung: 'Auch für Schwerte-Kunden bieten wir unseren vollen Service — mit Hol- & Bringservice oder Online-Zulassung ganz bequem von zu Hause.',
    metaTitle: 'Kfz-Zulassung Schwerte | Auto zulassen Schwerte – Zulassungsdienst',
    metaDescription: 'Auto zulassen in Schwerte – Online-Zulassung oder Hol- & Bringservice. Kfz-Anmeldung, Ummeldung & Abmeldung ab 29,90 €. 24/7 WhatsApp. Bundesweit. Jetzt anfragen!',
    bild: '/images/schwerte-ruhr-nrw-german-town-with-ruhr-river-vall-44cd82.jpg',
    highlights: ['Online-Zulassung von Schwerte aus möglich', 'Hol- & Bringservice buchbar', 'Keine Bindung an lokale Zulassungsstelle', 'Bundesweite Kompetenz'],
    faq: [
      { frage: 'Lohnt sich der Weg von Schwerte?', antwort: 'Sie müssen gar nicht kommen! Nutzen Sie unseren Hol- & Bringservice oder die Online-Zulassung.' },
    ],
  },
  {
    slug: 'luenen',
    name: 'Lünen',
    region: 'Kreis Unna',
    entfernung: 'Direkt vor Ort',
    beschreibung: 'Lünen ist unser Heimatstandort — hier sind wir zu Hause und kennen jeden Weg zur Zulassungsstelle. Kein Bürger soll mehr warten müssen.',
    metaTitle: 'Kfz-Zulassung Lünen | Zulassungsstelle Lünen Alternative – Zulassungsdienst',
    metaDescription: 'Kfz-Zulassung Lünen ohne Wartezeit bei der Zulassungsstelle Lünen. Auto zulassen, anmelden, ummelden & abmelden ab 29,90 €. Eigene Kennzeichenprägung vor Ort. 5,0 Google. 24/7 WhatsApp. Jetzt anfragen – schneller als die Zulassungsstelle!',
    bild: '/images/luenen-nrw-westfalen-german-town-lippe-river-water-e925f4.jpg',
    highlights: ['Direkt in Lünen ansässig', 'Persönlicher Service vor Ort', 'Eigene Kennzeichenprägung', 'Bekannt und vertraut in der Region'],
    faq: [
      { frage: 'Wo genau sind Sie in Lünen?', antwort: 'Wir befinden uns am Willy-Brandt-Platz 6, 44532 Lünen — gut erreichbar und mit Parkplätzen direkt vor der Tür.' },
      { frage: 'Wann haben Sie geöffnet?', antwort: 'Mo–Fr 09:30–13:30 und 15:00–19:00 Uhr · Sa 12:00–16:00 Uhr.' },
    ],
  },
];
