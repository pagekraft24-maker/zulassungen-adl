export interface Bewertung {
  id: number;
  name: string;
  ort: string;
  datum: string;
  sterne: number;
  text: string;
  initialen: string;
  farbe: string;
}

export const bewertungen: Bewertung[] = [
  {
    id: 1,
    name: 'Sarah K.',
    ort: 'Lünen',
    datum: 'März 2026',
    sterne: 5,
    text: 'Absolut top! Ich hatte keine Zeit für die Zulassungsstelle und wollte mein neues Auto schnell anmelden. Alles per WhatsApp, innerhalb von 24 Stunden fertig. Preis war fair und transparent. Nie wieder Behördengang!',
    initialen: 'SK',
    farbe: 'bg-emerald-500',
  },
  {
    id: 2,
    name: 'Mehmet Y.',
    ort: 'Dortmund',
    datum: 'Februar 2026',
    sterne: 5,
    text: 'Als Autohaus nutzen wir den Service regelmäßig für 8–10 Fahrzeuge pro Monat. Immer zuverlässig, schnell und fair berechnet. Der Rahmenvertrag macht die Abwicklung super einfach. Klare Empfehlung für Gewerbekunden!',
    initialen: 'MY',
    farbe: 'bg-orange-500',
  },
  {
    id: 3,
    name: 'Familie Schneider',
    ort: 'Bergkamen',
    datum: 'April 2026',
    sterne: 5,
    text: 'Nach dem Umzug mussten wir das Auto ummelden. Der Hol- & Bringservice war genial — jemand kam zu uns, holte alles ab und brachte die fertigen Unterlagen zurück. Wir haben nichts selbst gemacht und trotzdem alles war perfekt.',
    initialen: 'FS',
    farbe: 'bg-violet-500',
  },
  {
    id: 4,
    name: 'Thomas B.',
    ort: 'Kamen',
    datum: 'Januar 2026',
    sterne: 5,
    text: 'Wunschkennzeichen beantragt und eigene Prägung direkt vor Ort gemacht. Alles an einem Tag erledigt. Das Team war extrem freundlich und hat mir sogar bei der Reservierung geholfen. Hammer Service!',
    initialen: 'TB',
    farbe: 'bg-sky-600',
  },
  {
    id: 5,
    name: 'Tanja M.',
    ort: 'Berlin',
    datum: 'März 2026',
    sterne: 5,
    text: 'Online-Zulassung von Berlin aus — klingt unmöglich, funktioniert aber perfekt! Alles per WhatsApp und E-Mail, Kennzeichen kamen per Post. Einfach, günstig, schnell. Werde immer diesen Service nutzen!',
    initialen: 'TM',
    farbe: 'bg-rose-500',
  },
  {
    id: 6,
    name: 'Kevin R.',
    ort: 'Werne',
    datum: 'April 2026',
    sterne: 5,
    text: 'Abmeldung innerhalb eines Tages erledigt. Preis war günstiger als gedacht und der Prozess war so einfach. Einfach WhatsApp schreiben, Fotos schicken, fertig. Ich frage mich, warum ich das nicht schon früher gemacht habe!',
    initialen: 'KR',
    farbe: 'bg-teal-500',
  },
];
