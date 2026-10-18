import useSEO from '@/hooks/useSEO';
import { useState, useEffect, useRef } from 'react';

const BASE_URL = (typeof import.meta.env !== 'undefined' && import.meta.env.VITE_SITE_URL)
  ? import.meta.env.VITE_SITE_URL
  : 'https://zulassungen-adl.de';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import WhatsAppWidget from '@/components/feature/WhatsAppWidget';
import HeroSection from './components/HeroSection';
import TrustLogos from './components/TrustLogos';
import SchnellstartSection from './components/SchnellstartSection';
import BewertungenSection from './components/BewertungenSection';
import AblaufSection from './components/AblaufSection';
import WhatsAppSection from './components/WhatsAppSection';
import FAQSection from './components/FAQSection';

const KIBanner = () => {
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: 'Hallo! Ich bin dein KI-Berater. Frag mich zu Anmeldung, Ummeldung, Preisen, Unterlagen oder Terminen.' },
  ]);
  const chatRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll to bottom on new messages
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const getBotResponse = (userText: string): string | null => {
    const t = userText.toLowerCase();

    // ── Begrüßungen ──
    if (/^\s*(hallo|hi|hey|moin|servus|guten\s+(morgen|tag|abend))\s*[!.?]*\s*$/i.test(userText)) {
      const greetings = [
        'Hallo! Schön, dass du da bist. Wie kann ich dir heute helfen?',
        'Hey! Bereit für deine Zulassungsfragen?',
        'Moin! Alles klar? Frag mich gerne zu Preisen, Unterlagen oder Terminen.',
        'Hallo! Ich bin dein KI-Berater — schieß los!',
      ];
      return greetings[Math.floor(Math.random() * greetings.length)];
    }

    // ANMELDUNG
    if (t.includes('anmeldung') || t.includes('zulassung') || t.includes('neu') || t.includes('anmelden')) {
      if (t.includes('preis') || t.includes('kostet') || t.includes('€') || t.includes('euro')) {
        return 'Kfz-Anmeldung kostet 129,90 € Basis. Mit Hol- & Bringservice: 159,90 €. Inklusive Feinstaubplakette und Kennzeichenschilder vor Ort.';
      }
      if (t.includes('unterlagen') || t.includes('dokumente') || t.includes('brauche ich') || t.includes('benötige')) {
        return 'Für die Anmeldung brauchst du: Personalausweis, Fahrzeugbrief (Teil II), eVB-Nummer deiner Versicherung, SEPA-Lastschriftmandat für die Kfz-Steuer und den Hauptuntersuchungsbericht (bei Gebrauchtfahrzeugen).';
      }
      return 'Kfz-Anmeldung für 129,90 € — wir melden dein neues oder gebrauchtes Fahrzeug an. Inkl. Feinstaubplakette, Kennzeichenschilder vor Ort, Wunschkennzeichen möglich. Dauer: Schnelle Bearbeitung.';
    }

    // UMMELDUNG
    if (t.includes('ummeldung') || t.includes('halter') || t.includes('halterwechsel') || t.includes('umzug') || t.includes('ummelden')) {
      if (t.includes('preis') || t.includes('kostet')) {
        return 'Kfz-Ummeldung kostet 99,00 € Basis. Mit Hol- & Bringservice: 129,00 €. Du musst innerhalb einer Woche ummelden!';
      }
      if (t.includes('unterlagen') || t.includes('dokumente')) {
        return 'Für die Ummeldung brauchst du: Personalausweis, Zulassungsbescheinigung Teil I und II, eVB-Nummer (falls neues Kennzeichen), SEPA-Lastschriftmandat (bei Bankänderung).';
      }
      return 'Kfz-Ummeldung ab 99,00 €. Für Halterwechsel oder Wohnortwechsel — musst innerhalb einer Woche erfolgen. Kennzeichenmitnahme möglich.';
    }

    // ABMELDUNG
    if (t.includes('abmeldung') || t.includes('abmelden') || t.includes('stilllegen') || t.includes('stilllegung')) {
      if (t.includes('preis') || t.includes('kostet')) {
        return 'Kfz-Abmeldung kostet nur 29,90 € Basis. Mit Hol- & Bringservice: 49,90 €. Inklusive Kennzeichen-Entsorgung. Die Kfz-Steuer wird anteilig rückerstattet.';
      }
      if (t.includes('unterlagen') || t.includes('dokumente')) {
        return 'Für die Abmeldung brauchst du: Personalausweis, Zulassungsbescheinigung Teil I und II, sowie die Kennzeichen des Fahrzeugs (werden eingezogen und vernichtet).';
      }
      return 'Kfz-Abmeldung ab 29,90 €. Wir melden dein Fahrzeug ab — inkl. Kennzeichen-Entsorgung. Die Kfz-Steuer wird automatisch anteilig vom Finanzamt erstattet.';
    }

    // WUNSCHKENNZEICHEN
    if (t.includes('wunschkennzeichen') || t.includes('wunsch') || t.includes('reservierung')) {
      if (t.includes('preis') || t.includes('kostet')) {
        return 'Wunschkennzeichen-Reservierung: Preis auf Anfrage (nach Tarif). Prägung ab 15 €. Reservierung 90 Tage gültig. Alle LÜN-Kombinationen möglich.';
      }
      return 'Wunschkennzeichen: Wir prüfen Verfügbarkeit kostenlos, reservieren bis 90 Tage und prägen in unserer eigenen Werkstatt ab 15 €. Alle LÜN-Kombinationen.';
    }

    // KURZZEITKENNZEICHEN
    if (t.includes('kurzzeit') || t.includes('kurz') || t.includes('5 tage') || t.includes('überführung')) {
      if (t.includes('preis') || t.includes('kostet')) {
        return 'Kurzzeitkennzeichen kostet 149,00 € inkl. aller Behördengebühren. 5 Tage gültig — gleicher Tag möglich!';
      }
      return 'Kurzzeitkennzeichen (5-Tages-Kennzeichen) für 149,00 € inkl. Behördengebühren. Für Probefahrten und Überführungen. Gültig 5 Tage, gleicher Tag möglich.';
    }

    // KENNZEICHENPRÄGUNG
    if (t.includes('prägung') || t.includes('kennzeichen') || t.includes('schilder') || t.includes('schild')) {
      if (t.includes('preis') || t.includes('kostet')) {
        return 'Kennzeichenschilder-Prägung: 15,00 € für ein Schild, 25,00 € für das Paar. Sofort vor Ort geprägt. Inkl. Sicherheitssticker. Carbon-Optik & 3D verfügbar.';
      }
      return 'Eigene Prägung vor Ort: Einzel-Kennzeichen 15 €, Paar 25 €. Sofort geprägt, inkl. Sicherheitssticker. Carbon-Optik und 3D-Kennzeichen verfügbar.';
    }

    // HOL-BRINGSERVICE
    if (t.includes('hol') || t.includes('bring') || t.includes('service') || t.includes('abholung') || t.includes('lieferung')) {
      if (t.includes('preis') || t.includes('kostet')) {
        return 'Hol- & Bringservice: Preis auf Anfrage, je nach Entfernung. Wir fahren im Raum Lünen, Dortmund, Bergkamen, Werne, Selm, Kamen und Schwerte.';
      }
      return 'Hol- & Bringservice: Wir holen Unterlagen bei dir ab und bringen fertige Dokumente & Kennzeichen zurück. Im Raum Lünen, Dortmund, Bergkamen, Werne, Selm, Kamen, Schwerte.';
    }

    // ADRESSÄNDERUNG
    if (t.includes('adress') || t.includes('namens') || t.includes('heirat') || t.includes('name ändern')) {
      if (t.includes('preis') || t.includes('kostet')) {
        return 'Adress- oder Namensänderung: 49,90 € inkl. aller Behördengebühren. Nach Umzug oder Heirat.';
      }
      return 'Adress-/Namensänderung für 49,90 € inkl. Behördengebühren. Nach Umzug oder Heirat. Unterlagen: Personalausweis, Fahrzeugschein, Meldebestätigung oder Heiratsurkunde.';
    }

    // GEWERBE
    if (t.includes('gewerbe') || t.includes('flotte') || t.includes('b2b') || t.includes('autohaus') || t.includes('leasing')) {
      if (t.includes('preis') || t.includes('kostet')) {
        return 'Gewerbe-Service: Preise auf Anfrage. Mengenrabatte ab 5 Fahrzeugen pro Monat. Rahmenverträge mit festen Konditionen.';
      }
      return 'Gewerbe-Service für Autohäuser und Flottenbetreiber. Rahmenverträge, Sammelabwicklung, Gewerbe-Rechnung, Mengenrabatte ab 5 Fahrzeugen/Monat. Priorisierter Ansprechpartner.';
    }

    // PREISE ALLGEMEIN
    if (t.includes('preis') || t.includes('kostet') || t.includes('was kostet') || t.includes('wie viel') || t.includes('€') || t.includes('euro')) {
      return 'Unsere Preise: Anmeldung 129,90 € · Ummeldung 99,00 € · Abmeldung 29,90 € · Kurzzeitkennzeichen 149,00 € · Kennzeichenprägung ab 15,00 € · Adressänderung 49,90 €. Wunschkennzeichen, Hol- & Bringservice und Gewerbe-Service auf Anfrage.';
    }

    // UNTERLAGEN ALLGEMEIN
    if (t.includes('unterlagen') || t.includes('dokumente') || t.includes('papiere') || t.includes('brauche ich')) {
      return 'Meist brauchst du: Personalausweis, Zulassungsbescheinigung Teil I und II (Fahrzeugschein & Fahrzeugbrief), eVB-Nummer der Versicherung und SEPA-Lastschriftmandat. Je nach Vorgang variiert das leicht — welche Leistung interessiert dich?';
    }

    // TERMIN / ÖFFNUNGSZEITEN
    if (t.includes('termin') || t.includes('wann') || t.includes('öffnungszeit') || t.includes('uhrzeit') || t.includes('offen')) {
      return 'Unsere Öffnungszeiten: Mo–Fr 09:30–13:30 & 15:00–19:00, Sa 12:00–16:00. Termine kannst du per WhatsApp (023063548896) oder Telefon vereinbaren — auch kurzfristig!';
    }

    // STANDORT
    if (t.includes('standort') || t.includes('adresse') || t.includes('wo') || t.includes('lunen') || t.includes('lünen') || t.includes('finden')) {
      return 'Unser Standort ist Lünen in Nordrhein-Westfalen, Kreis Unna. Wir betreuen Kunden aus Lünen, Dortmund, Bergkamen, Werne, Selm, Kamen und Schwerte. Für alle, die nicht persönlich vorbeikommen können, bieten wir unseren Hol- & Bringservice an.';
    }

    // KONTAKT
    if (t.includes('kontakt') || t.includes('telefon') || t.includes('anrufen') || t.includes('mail') || t.includes('whatsapp') || t.includes('nummer')) {
      return 'Du erreichst uns direkt über unsere Kontaktseite, per E-Mail oder WhatsApp. Wir sind für dich da und beantworten alle Fragen zu Anmeldung, Ummeldung, Abmeldung, Wunschkennzeichen, Kurzzeitkennzeichen und unserem Hol- & Bringservice. Termine können flexibel vereinbart werden.';
    }

    // ZERTIFIZIERUNGEN
    if (t.includes('zertifiziert') || t.includes('tüv') || t.includes('dekra') || t.includes('din') || t.includes('geprüft')) {
      return 'Wir sind TÜV-geprüft, DEKRA-zertifiziert und DIN-geprüft. Ein zugelassenes Zulassungsunternehmen mit höchsten Qualitätsstandards. 5,0 Sterne Bewertung · 82 Kundenbewertungen.';
    }

    // eVB-NUMMER / VERSICHERUNG
    if (t.includes('evb') || t.includes('versicherung') || t.includes('versicherungs') || t.includes('elektronisch') || t.includes('bestätigung')) {
      return 'Die eVB-Nummer (elektronische Versicherungsbestätigung) wird von deiner Kfz-Versicherung ausgestellt. Du brauchst sie für jede Anmeldung, Ummeldung und Kurzzeitkennzeichen-Ausstellung. Sie wird direkt von der Versicherung an die Zulassungsstelle übermittelt — du erhältst sie als Bestätigungscode.';
    }

    // KFZ-STEUER / STEUER
    if (t.includes('kfz-steuer') || t.includes('steuer') || t.includes('kraftfahrzeugsteuer') || t.includes('fahrzeugsteuer')) {
      return 'Die Kfz-Steuer wird über ein SEPA-Lastschriftmandat eingezogen, das bei der Anmeldung oder Ummeldung hinterlegt wird. Bei einer Abmeldung wird die Steuer anteilig vom Finanzamt automatisch erstattet. Die Höhe richtet sich nach Hubraum, CO₂-Ausstoß und Erstzulassung des Fahrzeugs.';
    }

    // FEINSTAUBPLAKETTE / UMWELTPLAKETTE
    if (t.includes('feinstaub') || t.includes('umwelt') || t.includes('plakette') || t.includes('grüne plakette') || t.includes('umweltzone')) {
      return 'Die Feinstaubplakette (Umweltplakette) ist bei jeder Kfz-Anmeldung bei uns inklusive. Sie wird automatisch beantragt und gehört dir. Es gibt vier Farben: keine (Rot 1–2), gelb (3), grün (4) und blau (E-Fahrzeuge). Ohne Plakette darfst du in deutsche Umweltzonen nicht einfahren.';
    }

    // HALTUNGSBERICHT / HU / TÜV
    if (t.includes('hu') || t.includes('tüv') || t.includes('hauptuntersuchung') || t.includes('abgas') || t.includes('untersuchung')) {
      return 'Bei einer Anmeldung eines Gebrauchtfahrzeugs benötigst du einen gültigen Hauptuntersuchungsbericht (HU). Die nächste Untersuchung ist nach zwei Jahren (Neuwagen) bzw. jährlich bei älteren Fahrzeugen fällig. Ohne gültige HU darf das Fahrzeug nicht zugelassen werden.';
    }

    // EXPORT / ABFUHR / AUSLAND
    if (t.includes('export') || t.includes('ausfuhr') || t.includes('ausland') || t.includes('import') || t.includes('reimport') || t.includes('eu-kennzeichen')) {
      return 'Für Exporte ins Ausland bieten wir Kurzzeitkennzeichen (149,00 €, 5 Tage gültig) und Ausfuhrkennzeichen an. Bei EU-Reimporten kümmern wir uns um die komplette Ummeldung und deutsche Zulassung. EU-Kennzeichen werden bei einer deutschen Zulassung durch LÜN-Kennzeichen ersetzt.';
    }

    // KENNZEICHEN / NUMMERNSCHILD
    if (t.includes('kennzeichen') || t.includes('nummernschild') || t.includes('lün') || t.includes('lun')) {
      if (t.includes('preis') || t.includes('kostet')) {
        return 'Standard-Kennzeichen sind bei der Anmeldung inklusive. Eigenprägung ab 15,00 € (Einzel) / 25,00 € (Paar). Wunschkennzeichen-Reservierung auf Anfrage nach Tarif. Alle LÜN-Kombinationen möglich, max. 8 Zeichen.';
      }
      return 'Unsere Kennzeichen: Standard inklusive bei Anmeldung, eigenprägt vor Ort ab 15 € (Sofort-Service), Wunschkennzeichen reservierbar. Alle LÜN-Kombinationen, amtlich zugelassen mit Sicherheitssticker. Carbon-Optik und 3D-Kennzeichen verfügbar.';
    }

    // FALLBACK: generische Antwort — niemals auf Telefon/Website verweisen
    return 'Gute Frage! Wir unterstützen dich bei allen Kfz-Zulassungsangelegenheiten — von der Anmeldung (129,90 €) über die Ummeldung (99,00 €) bis zur Abmeldung (29,90 €). Dazu gehören auch Wunschkennzeichen-Reservierung, Kurzzeitkennzeichen (149,00 €), eigene Kennzeichenprägung (ab 15,00 €) und unser Hol- & Bringservice im Raum Lünen und Umgebung. TÜV-geprüft, DEKRA-zertifiziert, 5,0 Sterne Bewertung. Welcher Vorgang betrifft dich aktuell?';
  };

  const handleSend = () => {
    const msg = inputValue.trim();
    if (!msg) return;

    // User-Nachricht hinzufügen
    setMessages((prev) => [...prev, { role: 'user', text: msg }]);
    setInputValue('');

    // Bot-Antwort generieren
    const botResponse = getBotResponse(msg);

    // Inline-Antwort im Chat — immer auf der Seite, niemals Widget öffnen
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: 'bot', text: botResponse }]);
      setIsTyping(false);
    }, 600 + Math.random() * 400);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section className="relative bg-navy-900 border-y-2 border-whatsapp/40 overflow-hidden">
      {/* Animated gradient glow behind */}
      <div className="absolute inset-0 bg-gradient-to-r from-whatsapp/5 via-transparent to-whatsapp/5 animate-pulse pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        {/* Collapsed Header / Chat Toggle */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full flex items-center gap-4 cursor-pointer transition-all ${isOpen ? 'py-5 border-b border-white/10' : 'py-5 md:py-6'}`}
        >
          <div className="relative shrink-0">
            <div className="w-12 h-12 flex items-center justify-center bg-whatsapp/20 rounded-xl border border-whatsapp/30">
              <div className="w-7 h-7 flex items-center justify-center">
                <i className="ri-magic-line text-whatsapp text-xl"></i>
              </div>
            </div>
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-whatsapp animate-pulse border-2 border-navy-900 shadow-[0_0_8px_rgba(37,211,102,0.6)]"></span>
          </div>
          <div className="flex-1 text-left">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-white font-bold text-base md:text-lg">KI-Berater · Jetzt live</span>
              <span className="hidden sm:inline-flex items-center gap-1 bg-whatsapp/15 text-whatsapp text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-whatsapp/20">
                <span className="w-1.5 h-1.5 rounded-full bg-whatsapp animate-pulse"></span>
                Online
              </span>
            </div>
            <span className="text-white/50 text-sm mt-1 block">{messages.length > 1 ? `${messages.length - 1} Nachrichten` : 'Frag zu Preisen, Unterlagen & Terminen — direkt hier im Chat'}</span>
          </div>
          <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-xl hover:bg-white/20 transition-colors border border-white/10">
            <div className="w-5 h-5 flex items-center justify-center">
              <i className={`ri-arrow-down-s-line text-white text-lg transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}></i>
            </div>
          </div>
        </button>

        {/* Expanded Chat Area */}
        {isOpen && (
          <>
            {/* Messages */}
            <div
              ref={chatRef}
              className="py-4 space-y-3 max-h-80 overflow-y-auto"
            >
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] md:max-w-[75%] rounded-2xl px-5 py-3 text-sm leading-relaxed ${
                      m.role === 'user'
                        ? 'bg-whatsapp text-white rounded-br-md'
                        : 'bg-white/10 text-white/90 rounded-bl-md border border-white/5'
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/10 rounded-2xl rounded-bl-md px-5 py-3 border border-white/5">
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-white/40 animate-bounce"></span>
                      <span className="w-2 h-2 rounded-full bg-white/40 animate-bounce [animation-delay:0.15s]"></span>
                      <span className="w-2 h-2 rounded-full bg-white/40 animate-bounce [animation-delay:0.3s]"></span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="pb-4 pt-1">
              <div className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus-within:border-whatsapp/50 focus-within:bg-white/15 focus-within:shadow-[0_0_20px_rgba(37,211,102,0.1)] transition-all">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Deine Frage..."
                  className="flex-1 bg-transparent text-white text-base placeholder-white/40 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={handleSend}
                  disabled={!inputValue.trim() || isTyping}
                  className="w-10 h-10 flex items-center justify-center bg-whatsapp rounded-lg hover:bg-green-500 transition-colors disabled:opacity-40 cursor-pointer shrink-0 shadow-lg shadow-whatsapp/20"
                >
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-send-plane-fill text-white text-sm"></i>
                  </div>
                </button>
              </div>
              <p className="text-white/30 text-xs mt-2 text-center">
                KI-gestützt · Bei komplexen Fragen verbinden wir dich mit unserem Team
              </p>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

const HomePage = () => {
  useSEO({
    title: 'Kfz-Zulassung Lünen · ohne Wartezeit | Zulassungsdienst an der Lippe',
    description: 'Zulassung, Ummeldung, Abmeldung in Lünen und deutschlandweit online — TÜV-zertifiziert, Festpreise, 24h-Bearbeitung. WhatsApp +49 2306 3548896. Auch für Dortmund, Bergkamen, Werne, Selm, Kamen und Schwerte.',
    keywords: 'Kfz-Zulassung Lünen, Zulassungsdienst Kreis Unna, Kennzeichen Lünen, Kfz Anmeldung Lünen, Kfz Ummeldung Lünen, Kfz Abmeldung Lünen, Auto anmelden Lünen, Zulassungsservice NRW, Kfz-Zulassung Dortmund, Kfz-Zulassung online deutschlandweit, Festpreis Zulassung, Wunschkennzeichen Lünen, Kurzzeitkennzeichen Lünen, Kennzeichenprägung Lünen, Hol und Bringservice Lünen, Zulassungsdienst Bergkamen, Zulassungsdienst Werne, Zulassungsdienst Selm, Zulassungsdienst Kamen, Zulassungsdienst Schwerte',
    canonical: '/',
    ogLocale: 'de_DE',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Zulassungsdienst an der Lippe',
      description: 'Kfz-Zulassungsdienst in Lünen – Anmeldung, Ummeldung, Abmeldung mit Festpreisen und 24/7 WhatsApp-Service.',
      url: BASE_URL,
      telephone: '+4923063548896',
      email: 'service@zulassungen-adl.de',
      priceRange: '€€',
      image: '/images/professional-kfz-zulassungsdienst-office-interior-0595d1.jpg',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Willy-Brandt-Platz 6',
        addressLocality: 'Lünen',
        postalCode: '44532',
        addressCountry: 'DE',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 51.6158, longitude: 7.5268 },
      areaServed: [
        { '@type': 'City', name: 'Lünen' },
        { '@type': 'City', name: 'Dortmund' },
        { '@type': 'City', name: 'Bergkamen' },
        { '@type': 'City', name: 'Werne' },
        { '@type': 'City', name: 'Selm' },
        { '@type': 'City', name: 'Kamen' },
        { '@type': 'City', name: 'Schwerte' },
        { '@type': 'Place', name: 'Kreis Unna' },
      ],
      openingHoursSpecification: [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:30', closes: '13:30' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '15:00', closes: '19:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '12:00', closes: '16:00' },
      ],
      aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '82' },
      '@id': `${BASE_URL}/#business`,
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Leistungen',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kfz-Anmeldung', url: `${BASE_URL}/leistungen/kfz-anmeldung` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kfz-Ummeldung', url: `${BASE_URL}/leistungen/kfz-ummeldung` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kfz-Abmeldung', url: `${BASE_URL}/leistungen/kfz-abmeldung` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wunschkennzeichen', url: `${BASE_URL}/leistungen/wunschkennzeichen` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kurzzeitkennzeichen', url: `${BASE_URL}/leistungen/kurzzeitkennzeichen` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kennzeichenschilder', url: `${BASE_URL}/leistungen/kennzeichenpraegung` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hol- & Bringservice', url: `${BASE_URL}/leistungen/hol-bringservice` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Adress-/Namensänderung', url: `${BASE_URL}/leistungen/adress-aenderung` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gewerbe-Service', url: `${BASE_URL}/leistungen/gewerbekunden` } },
        ],
      },
    },
  });

  return (
    <div className="font-sans">
      <Header />
      <main>
        {/* 01 — Hero */}
        <HeroSection />
        {/* 01b — KBA Mitgliedschaft */}
        <section className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8">
            <div className="flex flex-col sm:flex-row items-center gap-5 md:gap-7">
              <div className="shrink-0">
                <img
                  src="/images/ressed-screenshot-2026-07-23-at-18-02-51-d029b9.webp"
                  alt="KBA Logo – Kraftfahrt-Bundesamt"
                  className="h-20 md:h-24 w-auto object-contain"
                  loading="lazy"
                />
              </div>
              <p className="text-foreground-700 text-sm md:text-[15px] leading-relaxed max-w-3xl">
                Offizielles, nicht-behördliches Mitglied des Digitalisierungsprojekts vom Kraftfahrt-Bundesamt (KBA). Als offizielles Mitglied stehen wir in engem Austausch mit dem Kraftfahrt-Bundesamt (KBA) und dem fachaufsichtsführenden Bundesministerium für Verkehr (BMV) und unterstützen die Behörden dabei, die digitalen Zulassungsprozesse in Deutschland voranzubringen.
              </p>
            </div>
          </div>
        </section>

        {/* 01b — KI-Agent Banner */}
        <KIBanner />
        {/* 02 — Zertifizierungen */}
        <TrustLogos />
        {/* 03 — Schnellstart */}
        <SchnellstartSection />
        {/* 04 — Bewertungen */}
        <BewertungenSection />
        {/* 05 — Ablauf */}
        <AblaufSection />
        {/* 06 — WhatsApp-Soforthilfe */}
        <WhatsAppSection />
        {/* 07 — FAQ */}
        <FAQSection />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default HomePage;