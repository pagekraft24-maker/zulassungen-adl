export interface HeroLogo {
  label: string;
  subtext?: string;
  imageUrl: string;
  aspectRatio?: 'square' | 'wide';
}

export interface Leistung {
  slug: string;
  titel: string;
  eyebrow: string;
  kurzbeschreibung: string;
  beschreibung: string;
  preis: string;
  preisDetail: string;
  icon: string;
  bild: string;
  kategorie: 'privat' | 'gewerbe' | 'kfz';
  bearbeitungszeit: string;
  highlights: string[];
  heroLogos?: HeroLogo[];
  schritte: { titel: string; beschreibung: string }[];
  unterlagen: string[];
  faq: { frage: string; antwort: string }[];
}

export const leistungen: Leistung[] = [
  {
    slug: 'kfz-anmeldung',
    titel: 'Kfz-Anmeldung',
    eyebrow: 'NEUZULASSUNG & WIEDERZULASSUNG',
    kurzbeschreibung: 'Neues Fahrzeug anmelden ohne Behördengang — wir übernehmen alles für Sie.',
    beschreibung: 'Sie haben ein neues oder gebrauchtes Fahrzeug gekauft? Wir melden Ihr Fahrzeug schnell und unkompliziert an — ohne Wartezeiten, ohne Stress. Einfach Unterlagen einreichen, wir erledigen den Rest.',
    preis: '129,90 €',
    preisDetail: '129,90 € Basis · 159,90 € inkl. Hol- & Bringservice',
    icon: 'ri-car-line',
    bild: '/images/professional-car-registration-service-office-moder-39e24f.jpg',
    kategorie: 'kfz',
    bearbeitungszeit: 'Schnelle Bearbeitung',
    highlights: ['Feinstaubplakette inklusive', 'Inkl. Kennzeichenschilder vor Ort', 'Wunschkennzeichen möglich'],
    heroLogos: [
      {
        label: 'Feinstaubplakette',
        subtext: 'Wird direkt ausgestellt',
        imageUrl: '/images/german-feinstaubplakette-umweltplakette-green-roun-cb8d0c.jpg',
        aspectRatio: 'square',
      },
      {
        label: 'Kennzeichenschilder',
        subtext: 'Sofort vor Ort geprägt',
        imageUrl: '/images/german-official-vehicle-license-plate-white-alumin-3bb6d2.jpg',
        aspectRatio: 'wide',
      },
    ],
    schritte: [
      { titel: 'Anfrage stellen', beschreibung: 'Per WhatsApp, Telefon oder Formular anfragen — wir melden uns innerhalb von 2 Stunden.' },
      { titel: 'Unterlagen einreichen', beschreibung: 'Foto der erforderlichen Dokumente per WhatsApp oder persönliche Abgabe bei uns.' },
      { titel: 'Bearbeitung', beschreibung: 'Wir kümmern uns um alles bei der Zulassungsstelle — ohne Wartezeiten für Sie.' },
      { titel: 'Fahrzeug fertig', beschreibung: 'Kennzeichen und Fahrzeugschein erhalten Sie direkt bei uns oder per Hol- & Bringservice.' },
    ],
    unterlagen: [
      'Personalausweis oder Reisepass',
      'Fahrzeugbrief (Zulassungsbescheinigung Teil II)',
      'eVB-Nummer (elektronische Versicherungsbestätigung)',
      'SEPA-Lastschriftmandat für Kfz-Steuer',
      'Hauptuntersuchungsbericht (bei Gebrauchtfahrzeugen)',
    ],
    faq: [
      { frage: 'Wie lange dauert die Kfz-Anmeldung?', antwort: 'Nach Eingang aller vollständigen Unterlagen bearbeiten wir Ihren Auftrag schnellstmöglich.' },
      { frage: 'Kann ich das Fahrzeug trotzdem fahren?', antwort: 'Nein, ohne Zulassung darf das Fahrzeug nicht am öffentlichen Straßenverkehr teilnehmen. Bei Bedarf bieten wir Kurzzeitkennzeichen an.' },
      { frage: 'Welches Kennzeichen bekomme ich?', antwort: 'Sie erhalten ein LÜN-Kennzeichen oder können ein Wunschkennzeichen reservieren lassen.' },
    ],
  },
  {
    slug: 'kfz-ummeldung',
    titel: 'Kfz-Ummeldung',
    eyebrow: 'HALTERWECHSEL & UMZUG',
    kurzbeschreibung: 'Wohnortwechsel oder neuer Halter — wir ummelden Ihr Fahrzeug schnell und unkompliziert.',
    beschreibung: 'Umgezogen oder das Auto übernommen? Eine Kfz-Ummeldung muss innerhalb einer Woche erfolgen. Wir erledigen das für Sie — schnell, korrekt und ohne Behördengang.',
    preis: '99,00 €',
    preisDetail: '99,00 € Basis · 129,00 € inkl. Hol- & Bringservice',
    icon: 'ri-swap-line',
    bild: '/images/car-registration-transfer-process-professional-ser-a7e9d8.jpg',
    kategorie: 'kfz',
    bearbeitungszeit: 'Schnelle Bearbeitung',
    highlights: ['Inkl. Hol- & Bringservice möglich', 'Kennzeichenmitnahme möglich', 'Rechtssichere Abwicklung'],
    schritte: [
      { titel: 'Anfrage stellen', beschreibung: 'Per WhatsApp oder Formular — wir prüfen Ihre Unterlagen vorab kostenlos.' },
      { titel: 'Unterlagen einreichen', beschreibung: 'Foto der Dokumente per WhatsApp oder Abgabe bei uns.' },
      { titel: 'Ummeldung durchführen', beschreibung: 'Wir nehmen die Ummeldung für Sie vor — ohne Wartezeit für Sie.' },
      { titel: 'Fahrzeugschein erhalten', beschreibung: 'Aktualisierten Fahrzeugschein erhalten Sie direkt bei uns.' },
    ],
    unterlagen: [
      'Personalausweis oder Reisepass',
      'Zulassungsbescheinigung Teil I und II',
      'eVB-Nummer (falls neues Kennzeichen gewünscht)',
      'SEPA-Lastschriftmandat (bei Änderung der Bankverbindung)',
    ],
    faq: [
      { frage: 'Muss ich das Kennzeichen bei einer Ummeldung wechseln?', antwort: 'Nicht unbedingt. Bei Wohnortwechsel innerhalb desselben Zulassungsbezirks können Sie Ihr Kennzeichen behalten.' },
      { frage: 'Wie schnell muss ich ummelden?', antwort: 'Gesetzlich sind Sie verpflichtet, die Ummeldung innerhalb von einer Woche vorzunehmen.' },
    ],
  },
  {
    slug: 'kfz-abmeldung',
    titel: 'Kfz-Abmeldung',
    eyebrow: 'STILLLEGUNG',
    kurzbeschreibung: 'Fahrzeug verkauft oder außer Betrieb? Wir melden ab 29,90 € für Sie ab.',
    beschreibung: 'Sie haben Ihr Fahrzeug verkauft oder möchten es stilllegen? Wir kümmern uns um die korrekte Abmeldung bei der Zulassungsstelle — inkl. Kennzeichenentsorgung auf Wunsch.',
    preis: '29,90 €',
    preisDetail: '29,90 € Basis · 49,90 € inkl. Hol- & Bringservice',
    icon: 'ri-indeterminate-circle-line',
    bild: '/images/vehicle-deregistration-service-professional-office-1c542c.jpg',
    kategorie: 'kfz',
    bearbeitungszeit: 'Schnelle Bearbeitung',
    highlights: ['Stilllegung & Außerbetriebsetzung', 'Kennzeichen-Entsorgung inklusive', 'Kfz-Steuer Rückerstattung'],
    schritte: [
      { titel: 'Anfrage stellen', beschreibung: 'Kurze Nachricht per WhatsApp genügt — wir klären alle Details.' },
      { titel: 'Kennzeichen abgeben', beschreibung: 'Bringen Sie Ihr Kennzeichen und die Unterlagen zu uns oder nutzen Sie unseren Holservice.' },
      { titel: 'Abmeldung durchführen', beschreibung: 'Wir melden das Fahrzeug für Sie ab und übersenden die Abmeldebestätigung.' },
      { titel: 'Bestätigung erhalten', beschreibung: 'Sie erhalten die offizielle Abmeldebestätigung zum Vorlegen bei Versicherung und Finanzamt.' },
    ],
    unterlagen: [
      'Personalausweis oder Reisepass',
      'Zulassungsbescheinigung Teil I und II',
      'Kennzeichen des Fahrzeugs',
    ],
    faq: [
      { frage: 'Was passiert mit meinem Kennzeichen?', antwort: 'Das Kennzeichen wird eingezogen und vernichtet, es sei denn, Sie möchten das Wunschkennzeichen reservieren.' },
      { frage: 'Bekomme ich die Kfz-Steuer zurück?', antwort: 'Ja, die anteilige Kfz-Steuer für den restlichen Zeitraum wird vom Finanzamt automatisch erstattet.' },
    ],
  },
  {
    slug: 'wunschkennzeichen',
    titel: 'Wunschkennzeichen',
    eyebrow: 'RESERVIERUNG',
    kurzbeschreibung: 'Ihr persönliches Kennzeichen — wir reservieren und prägen es für Sie.',
    beschreibung: 'Mit einem Wunschkennzeichen geben Sie Ihrem Fahrzeug eine persönliche Note. Wir prüfen die Verfügbarkeit, reservieren das Kennzeichen und prägen es in unserer eigenen Prägewerkstatt.',
    preis: 'auf Anfrage',
    preisDetail: 'Reservierungsgebühr nach Tarif · Prägung ab 15 €',
    icon: 'ri-vip-crown-line',
    bild: '/images/custom-license-plate-german-wunschkennzeichen-prof-548885.jpg',
    kategorie: 'kfz',
    bearbeitungszeit: 'Schnelle Bearbeitung',
    highlights: ['Verfügbarkeitsprüfung kostenlos', 'Reservierung bis 90 Tage', 'Eigene Prägung ab 15 €', 'Alle LÜN-Kombinationen'],
    schritte: [
      { titel: 'Wunschkennzeichen anfragen', beschreibung: 'Teilen Sie uns Ihren Wunsch mit — wir prüfen sofort die Verfügbarkeit.' },
      { titel: 'Reservierung', beschreibung: 'Verfügbares Kennzeichen wird von uns für Sie online reserviert.' },
      { titel: 'Prägung', beschreibung: 'Kennzeichen wird in unserer eigenen Prägewerkstatt hergestellt — ab 15 € extra.' },
      { titel: 'Zulassung', beschreibung: 'Kombiniert mit der Zulassung Ihres Fahrzeugs — alles aus einer Hand.' },
    ],
    unterlagen: ['Zulassungsunterlagen je nach Vorgang (Anmeldung/Ummeldung)'],
    faq: [
      { frage: 'Welche Kombinationen sind erlaubt?', antwort: 'Buchstaben-Zahl-Kombinationen gem. StVZO, max. 8 Zeichen inkl. Unterscheidungszeichen LÜN.' },
      { frage: 'Wie lange gilt die Reservierung?', antwort: 'Reservierungen sind in der Regel 90 Tage gültig und können verlängert werden.' },
    ],
  },
  {
    slug: 'kurzzeitkennzeichen',
    titel: 'Kurzzeitkennzeichen',
    eyebrow: '5-TAGES-KENNZEICHEN',
    kurzbeschreibung: 'Probefahrt, Überführung oder kurzer Einsatz — 5 Tage gültig ab 149,00 €.',
    beschreibung: 'Für Probefahrten, Überführungen oder den kurzfristigen Betrieb eines Fahrzeugs bieten wir Kurzzeitkennzeichen mit 5-tägiger Gültigkeit an — inkl. Kurzzeitversicherung.',
    preis: '149,00 €',
    preisDetail: '149,00 € inkl. Behördengebühren · Versicherung optional',
    icon: 'ri-timer-line',
    bild: '/images/short-term-license-plate-german-kurzzeitkennzeiche-84a2a7.jpg',
    kategorie: 'kfz',
    bearbeitungszeit: 'Gleicher Tag',
    highlights: ['5 Tage gültig', 'Inkl. Behördengebühren', 'Gleicher Tag möglich'],
    schritte: [
      { titel: 'Anfrage stellen', beschreibung: 'Gewünschten Zeitraum und Fahrzeugdaten mitteilen.' },
      { titel: 'Versicherung', beschreibung: 'eVB-Nummer einer Kurzzeitversicherung vorweisen.' },
      { titel: 'Ausstellung', beschreibung: 'Kennzeichen und Kurzzulassung werden sofort ausgestellt.' },
      { titel: 'Nutzung', beschreibung: '5 Tage freie Fahrt mit dem Fahrzeug.' },
    ],
    unterlagen: ['Personalausweis', 'Fahrzeugbrief', 'eVB-Nummer Kurzzeitversicherung'],
    faq: [
      { frage: 'Wie lange gilt ein Kurzzeitkennzeichen?', antwort: 'Kurzzeitkennzeichen sind 5 Tage gültig und nicht verlängerbar.' },
      { frage: 'Kann ich mehrere Fahrzeuge mit einem Kurzzeitkennzeichen fahren?', antwort: 'Nein, ein Kurzzeitkennzeichen gilt immer nur für ein bestimmtes Fahrzeug.' },
    ],
  },
  {
    slug: 'kennzeichenpraegung',
    titel: 'Kennzeichenschilder',
    eyebrow: 'EIGENE PRÄGUNG',
    kurzbeschreibung: 'Eigene Prägung vor Ort — Standardschilder, Carbon-Optik, 3D-Kennzeichen.',
    beschreibung: 'Wir prägen Ihr Kennzeichen direkt vor Ort in unserer eigenen Prägewerkstatt. Schnell, günstig und amtlich zugelassen — kein Umweg zu einem anderen Anbieter nötig.',
    preis: '15,00 €',
    preisDetail: '15,00 € Einzel-Kennzeichen · 25,00 € Kennzeichen-Paar',
    icon: 'ri-tools-line',
    bild: '/images/professional-license-plate-embossing-workshop-germ-035b3d.jpg',
    kategorie: 'kfz',
    bearbeitungszeit: 'Sofort vor Ort',
    highlights: ['Inkl. Sicherheitssticker', 'Carbon-Optik & 3D verfügbar', 'Sofort geprägt vor Ort'],
    heroLogos: [
      {
        label: 'Kennzeichenschilder',
        subtext: 'Standard, Carbon & 3D',
        imageUrl: '/images/german-official-vehicle-license-plate-white-alumin-af325e.jpg',
        aspectRatio: 'wide',
      },
    ],
    schritte: [
      { titel: 'Vorbeikommen oder anrufen', beschreibung: 'Kein Termin nötig — einfach vorbeikommen während der Öffnungszeiten.' },
      { titel: 'Kennzeichen auswählen', beschreibung: 'Standard oder Wunschkennzeichen — wir haben alle gängigen Größen.' },
      { titel: 'Prägung', beschreibung: 'Prägung dauert wenige Minuten direkt vor Ihren Augen.' },
      { titel: 'Fertig', beschreibung: 'Sofort einsatzbereit — amtlich zugelassen und mit Sicherheitssticker versehen.' },
    ],
    unterlagen: ['Zulassungsbescheinigung Teil I (Fahrzeugschein) zum Abgleich der Kennzeichendaten'],
    faq: [
      { frage: 'Welche Kennzeichengrößen bieten Sie an?', antwort: 'Standard (520×110mm), kurzes Kennzeichen (340×200mm), Carbon-Optik und 3D-Kennzeichen in allen Standardgrößen.' },
      { frage: 'Kann ich ein Kennzeichen ohne Zulassung prägen lassen?', antwort: 'Nein, das Kennzeichen muss einem zugelassenen Fahrzeug zugeordnet sein.' },
    ],
  },
  {
    slug: 'hol-bringservice',
    titel: 'Hol- & Bringservice',
    eyebrow: 'FÜR GEWERBE & PRIVAT',
    kurzbeschreibung: 'Wir kommen zu Ihnen — Dokumente abholen und fertig zurückbringen.',
    beschreibung: 'Keine Zeit, zu uns zu kommen? Kein Problem! Unser Hol- & Bringservice holt Ihre Unterlagen bei Ihnen ab und liefert alle Dokumente und Kennzeichen direkt zurück zu Ihnen.',
    preis: 'auf Anfrage',
    preisDetail: 'Preise nach Entfernung & Vereinbarung',
    icon: 'ri-truck-line',
    bild: '/images/professional-car-document-delivery-service-employe-df6c94.jpg',
    kategorie: 'kfz',
    bearbeitungszeit: 'Nach Vereinbarung',
    highlights: ['Abholung & Lieferung', 'Flexible Zeiten buchbar', 'Gesamte Region Lünen'],
    schritte: [
      { titel: 'Termin vereinbaren', beschreibung: 'Wunschtermin per WhatsApp vereinbaren — auch kurzfristig möglich.' },
      { titel: 'Unterlagen bereithalten', beschreibung: 'Wir teilen Ihnen vorab mit, was benötigt wird.' },
      { titel: 'Abholung', beschreibung: 'Unser Mitarbeiter holt Unterlagen und ggf. Kennzeichen bei Ihnen ab.' },
      { titel: 'Rücklieferung', beschreibung: 'Fertige Dokumente und neues Kennzeichen werden direkt zu Ihnen gebracht.' },
    ],
    unterlagen: ['Abhängig vom jeweiligen Zulassungsvorgang'],
    faq: [
      { frage: 'In welchem Gebiet fahren Sie?', antwort: 'Lünen, Dortmund, Bergkamen, Werne, Selm, Kamen, Schwerte und Umgebung.' },
      { frage: 'Wie schnell kann ich einen Termin bekommen?', antwort: 'Sehr schnell — schreiben Sie uns einfach per WhatsApp, wir melden uns umgehend.' },
    ],
  },
  {
    slug: 'adress-aenderung',
    titel: 'Adress-/Namensänderung',
    eyebrow: 'UMZUG / HEIRAT',
    kurzbeschreibung: 'Umzug oder Namensänderung — Fahrzeugschein schnell aktualisieren.',
    beschreibung: 'Nach einem Umzug oder einer Namensänderung (z.B. nach Heirat) muss der Fahrzeugschein aktualisiert werden. Wir erledigen das für Sie — schnell und unkompliziert.',
    preis: '49,90 €',
    preisDetail: '49,90 € Basis · inkl. Behördengebühren',
    icon: 'ri-user-settings-line',
    bild: '/images/address-name-change-german-vehicle-registration-do-9a5d56.jpg',
    kategorie: 'kfz',
    bearbeitungszeit: 'Schnelle Bearbeitung',
    highlights: ['Umzug & Namensänderung', 'Schnelle Bearbeitung', 'Persönlich oder digital'],
    schritte: [
      { titel: 'Anfrage stellen', beschreibung: 'Kurze Nachricht genügt — wir klären alles für Sie.' },
      { titel: 'Unterlagen einreichen', beschreibung: 'Personalausweis, Fahrzeugschein und Nachweis der Änderung (z.B. Meldebestätigung).' },
      { titel: 'Bearbeitung', beschreibung: 'Wir aktualisieren den Fahrzeugschein bei der Zulassungsstelle.' },
      { titel: 'Fertig', beschreibung: 'Aktualisierter Fahrzeugschein direkt bei uns abholbereit.' },
    ],
    unterlagen: [
      'Personalausweis',
      'Zulassungsbescheinigung Teil I',
      'Bei Adressänderung: aktuelles Meldedokument',
      'Bei Namensänderung: Heiratsurkunde oder Namensänderungsdokument',
    ],
    faq: [
      { frage: 'Muss ich nach jedem Umzug den Fahrzeugschein ändern lassen?', antwort: 'Ja, die Adresse im Fahrzeugschein muss aktuell sein. Dies hat keine Auswirkungen auf das Kennzeichen.' },
      { frage: 'Was benötige ich bei einer Namensänderung?', antwort: 'Personalausweis mit neuem Namen, Zulassungsbescheinigung Teil I und den Nachweis der Namensänderung (z.B. Heiratsurkunde).' },
    ],
  },
  {
    slug: 'gewerbekunden',
    titel: 'Gewerbe-Service',
    eyebrow: 'B2B & FLOTTEN',
    kurzbeschreibung: 'Autohäuser und Fuhrparkbetreiber — regelmäßiger Service mit Mengenrabatten.',
    beschreibung: 'Für Autohäuser, Leasinggesellschaften und Fuhrparkbetreiber bieten wir individuelle Rahmenverträge mit Mengenrabatten, priorisierten Bearbeitungszeiten und monatlicher Abrechnung.',
    preis: 'auf Anfrage',
    preisDetail: 'Preise nach Vereinbarung · Mengenrabatte ab 5 Fahrzeugen/Monat',
    icon: 'ri-building-2-line',
    bild: '/images/car-dealership-fleet-management-german-registratio-1acdfc.jpg',
    kategorie: 'gewerbe',
    bearbeitungszeit: 'Priorität-Bearbeitung',
    highlights: ['Rahmenverträge verfügbar', 'Sammelabwicklung möglich', 'Gewerbe-Rechnung inklusive'],
    schritte: [
      { titel: 'Erstgespräch', beschreibung: 'Unverbindliches Beratungsgespräch — Umfang und Konditionen klären.' },
      { titel: 'Rahmenvertrag', beschreibung: 'Individueller Vertrag mit festen Preisen und SLA.' },
      { titel: 'Laufender Betrieb', beschreibung: 'Regelmäßige Abwicklung Ihrer Zulassungen mit direktem Ansprechpartner.' },
      { titel: 'Monatliche Abrechnung', beschreibung: 'Übersichtliche Sammelrechnung mit Gewerbebeleg.' },
    ],
    unterlagen: ['Gewerbeanmeldung', 'Handelsregisterauszug', 'Vollmacht für Zulassungsvorgänge'],
    faq: [
      { frage: 'Ab wie vielen Fahrzeugen lohnt sich ein Rahmenvertrag?', antwort: 'Ab 3–5 Fahrzeugen pro Monat bieten wir attraktive Konditionen an.' },
      { frage: 'Gibt es einen festen Ansprechpartner?', antwort: 'Ja, Gewerbekunden erhalten einen dedizierten Ansprechpartner mit direkter Mobil-Nummer.' },
    ],
  },
];