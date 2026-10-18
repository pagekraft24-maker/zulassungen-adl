import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import WhatsAppWidget from '@/components/feature/WhatsAppWidget';
import useSEO from '@/hooks/useSEO';

interface CheckItem {
  id: string;
  titel: string;
  details?: string[];
  hinweis?: string;
  important?: boolean;
}

const anmeldungItems: CheckItem[] = [
  {
    id: 'a1',
    titel: 'Zulassungsbescheinigung Teil I (Fahrzeugschein) – alle 3 Seiten',
    details: ['Sicherheitscode auf der Rückseite freirubbeln oder abziehen'],
  },
  {
    id: 'a2',
    titel: 'Zulassungsbescheinigung Teil II (Fahrzeugbrief)',
    details: ['Sicherheitscode (Hologramm-Code) freirubbeln oder abziehen'],
  },
  {
    id: 'a3',
    titel: 'eVB-Nummer (Versicherung)',
    hinweis: 'Muss exakt mit den Halterdaten übereinstimmen (Name, Vorname, Adresse, ggf. Firma / Rechtsform)',
    important: true,
  },
  {
    id: 'a4',
    titel: 'Ausweisdokument des Halters',
    details: [
      'Personalausweis oder Aufenthaltstitel (Vorder- und Rückseite)',
      'Gültigkeit prüfen (Ablaufdatum)',
    ],
    hinweis: 'Zusätzlich bei juristischen Personen (KG, GmbH usw.): Handelsregisterauszug (z. B. HRB / HRA / PR / VR / GnR), Gewerbeanmeldung sowie Ausweiskopie des Geschäftsführers',
  },
  {
    id: 'a5',
    titel: 'Bankverbindung für die Kfz-Steuer',
    details: [
      'IBAN + Kontoinhaber (kann vom Fahrzeughalter abweichen)',
      'SEPA-Lastschriftmandat erforderlich (digital oder unterschrieben)',
    ],
  },
  {
    id: 'a6',
    titel: 'Kennzeichen',
    details: [
      'Zufallskennzeichen oder Wunschkennzeichen inkl. Reservierungs-PIN',
    ],
    hinweis: 'WICHTIG: Wunschkennzeichen ohne Reservierungs-PIN → NICHT möglich',
    important: true,
  },
  {
    id: 'a7',
    titel: 'E-Mail-Adresse',
    details: ['Erforderlich für die digitale Legitimation'],
  },
  {
    id: 'a8',
    titel: 'Mobilfunknummer',
    details: ['Erforderlich für die digitale Legitimation'],
  },
  {
    id: 'a9',
    titel: 'HU (Hauptuntersuchung)',
    details: ['Muss gültig sein', 'Ein Nachweis ist nicht zwingend erforderlich'],
  },
];

const abmeldungItems: CheckItem[] = [
  {
    id: 'b1',
    titel: 'Zulassungsbescheinigung Teil I (Fahrzeugschein) – alle 3 Seiten',
    details: ['Sicherheitscode auf der Rückseite freirubbeln oder abziehen'],
  },
  {
    id: 'b2',
    titel: 'Sicherheitscodes beider Kennzeichen',
    details: ['Codes befinden sich unter dem Siegel (Plakette) auf den Kennzeichen'],
  },
];

interface ChecklistCardProps {
  item: CheckItem;
  index: number;
  checked: boolean;
  onToggle: () => void;
}

const ChecklistCard = ({ item, index, checked, onToggle }: ChecklistCardProps) => (
  <div
    className={`group relative rounded-2xl border transition-all duration-300 cursor-pointer ${
      checked
        ? 'border-green-200 bg-green-50/60'
        : 'border-gray-100 bg-white hover:border-navy-100 hover:bg-navy-50/30'
    }`}
    onClick={onToggle}
    role="checkbox"
    aria-checked={checked}
    tabIndex={0}
    onKeyDown={(e) => e.key === ' ' && onToggle()}
  >
    <div className="p-5 flex gap-4 items-start">
      {/* Nummer / Checkmark */}
      <div
        className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 font-extrabold text-sm transition-all duration-300 ${
          checked
            ? 'bg-green-500 text-white'
            : 'bg-navy-50 text-navy-700 group-hover:bg-navy-100'
        }`}
      >
        {checked ? (
          <i className="ri-check-line text-base"></i>
        ) : (
          <span>{String(index + 1).padStart(2, '0')}</span>
        )}
      </div>

      {/* Inhalt */}
      <div className="flex-1 min-w-0">
        <p className={`font-bold text-sm leading-snug mb-2 transition-colors ${checked ? 'text-green-700 line-through decoration-green-400' : 'text-navy-900'}`}>
          {item.titel}
        </p>
        {item.details && item.details.length > 0 && (
          <ul className="space-y-1 mb-2">
            {item.details.map((d) => (
              <li key={d} className="flex items-start gap-2 text-gray-500 text-xs">
                <div className="w-3.5 h-3.5 flex items-center justify-center mt-0.5 shrink-0">
                  <i className="ri-corner-down-right-line text-gray-300 text-xs"></i>
                </div>
                {d}
              </li>
            ))}
          </ul>
        )}
        {item.hinweis && (
          <div className={`flex items-start gap-2 mt-2 px-3 py-2 rounded-lg text-xs leading-relaxed ${
            item.important
              ? 'bg-amber-50 text-amber-700 border border-amber-100'
              : 'bg-blue-50 text-blue-700 border border-blue-100'
          }`}>
            <div className="w-3.5 h-3.5 flex items-center justify-center mt-0.5 shrink-0">
              <i className={`${item.important ? 'ri-alert-line' : 'ri-information-line'} text-xs`}></i>
            </div>
            <span>{item.hinweis}</span>
          </div>
        )}
      </div>
    </div>
  </div>
);

const UntlerlagenPage = () => {
  const [anmeldungChecked, setAnmeldungChecked] = useState<Record<string, boolean>>({});
  const [abmeldungChecked, setAbmeldungChecked] = useState<Record<string, boolean>>({});
  const [activeTab, setActiveTab] = useState<'anmeldung' | 'abmeldung'>('anmeldung');

  const toggleAnmeldung = (id: string) =>
    setAnmeldungChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  const toggleAbmeldung = (id: string) =>
    setAbmeldungChecked((prev) => ({ ...prev, [id]: !prev[id] }));

  const anmeldungDone = anmeldungItems.filter((i) => anmeldungChecked[i.id]).length;
  const abmeldungDone = abmeldungItems.filter((i) => abmeldungChecked[i.id]).length;

  useSEO({
    title: 'Benötigte Unterlagen & Checkliste | Zulassungsdienst an der Lippe – Lünen',
    description:
      'Alle erforderlichen Unterlagen für Kfz-Anmeldung, Ummeldung und Abmeldung auf einen Blick. Checkliste für Zulassung in Lünen – Fahrzeugschein, Fahrzeugbrief, eVB-Nummer, IBAN, Kennzeichen und mehr.',
    keywords:
      'Unterlagen Kfz-Zulassung, Checkliste Anmeldung Fahrzeug, benötigte Dokumente Zulassungsstelle Lünen',
    canonical: '/unterlagen',
    ogTitle: 'Benötigte Unterlagen & Checkliste – Kfz-Zulassung Lünen',
    ogDescription:
      'Alle erforderlichen Unterlagen für An- und Abmeldung auf einen Blick. Interaktive Checkliste für Ihre Kfz-Zulassung.',
    ogType: 'website',
  });

  return (
    <div className="font-sans">
      <Header />
      <main className="pt-18">

        {/* Hero */}
        <section className="relative bg-navy-900 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-whatsapp/[0.04] rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
          </div>
          <div className="relative max-w-4xl mx-auto px-4 md:px-6 py-16 md:py-24 text-center">
            <span className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-file-list-3-line text-sm"></i>
              </div>
              Checkliste
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-5">
              Benötigte Unterlagen
              <span className="sr-only"> für die Kfz-Zulassung</span>
            </h1>
            <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Alle erforderlichen Dokumente für Anmeldung, Ummeldung und Abmeldung — übersichtlich
              aufgelistet. Haken Sie einfach ab, was Sie bereits haben.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://wa.me/4923063548896?text=Hallo%2C%20ich%20m%C3%B6chte%20meine%20Unterlagen%20prüfen%20lassen."
                target="_blank"
                rel="nofollow noreferrer"
                className="inline-flex items-center gap-2 bg-whatsapp text-white font-bold px-6 py-3.5 rounded-xl text-sm whitespace-nowrap cursor-pointer hover:bg-green-600 transition-colors"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <img src="/images/whatsapp-bf1279.svg" className="w-full h-full object-contain" alt="WhatsApp" loading="lazy" decoding="async" />
                </div>
                Unterlagen kostenlos prüfen lassen
              </a>
              <Link
                to="/leistungen"
                className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-6 py-3.5 rounded-xl text-sm whitespace-nowrap cursor-pointer hover:bg-white/20 transition-colors"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-send-plane-line"></i>
                </div>
                Anfrage stellen
              </Link>
            </div>
          </div>
        </section>

        {/* Tab Switcher */}
        <section className="bg-white border-b border-gray-100 sticky top-18 z-30">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 gap-2 py-3 w-full md:flex md:items-center md:gap-1 md:w-fit">
              <button
                className={`flex items-center justify-center md:justify-start gap-1.5 md:gap-2 px-3 md:px-5 py-2.5 rounded-2xl md:rounded-full text-[13px] md:text-sm font-bold leading-tight transition-all duration-200 md:whitespace-nowrap cursor-pointer ${
                  activeTab === 'anmeldung'
                    ? 'bg-navy-900 text-white'
                    : 'text-gray-500 hover:text-navy-900 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('anmeldung')}
              >
                <div className="w-4 h-4 flex items-center justify-center shrink-0">
                  <i className="ri-car-line text-sm"></i>
                </div>
                Anmeldung / Ummeldung
                <span className={`shrink-0 text-xs px-2 py-0.5 rounded-full font-semibold ${activeTab === 'anmeldung' ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'}`}>
                  {anmeldungDone}/{anmeldungItems.length}
                </span>
              </button>
              <button
                className={`flex items-center justify-center md:justify-start gap-1.5 md:gap-2 px-3 md:px-5 py-2.5 rounded-2xl md:rounded-full text-[13px] md:text-sm font-bold leading-tight transition-all duration-200 md:whitespace-nowrap cursor-pointer ${
                  activeTab === 'abmeldung'
                    ? 'bg-navy-900 text-white'
                    : 'text-gray-500 hover:text-navy-900 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('abmeldung')}
              >
                <div className="w-4 h-4 flex items-center justify-center shrink-0">
                  <i className="ri-logout-box-line text-sm"></i>
                </div>
                Abmeldung
                <span className={`shrink-0 text-xs px-2 py-0.5 rounded-full font-semibold ${activeTab === 'abmeldung' ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'}`}>
                  {abmeldungDone}/{abmeldungItems.length}
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Checkliste */}
        <section className="bg-gray-50/60 py-12 md:py-20 min-h-[60vh]">
          <div className="max-w-4xl mx-auto px-4 md:px-6">

            {activeTab === 'anmeldung' && (
              <div>
                {/* Fortschrittsanzeige */}
                <div className="bg-white rounded-2xl border border-gray-100 p-5 mb-8 flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-bold text-navy-900">Fortschritt</span>
                      <span className="text-sm font-extrabold text-navy-700">{anmeldungDone} / {anmeldungItems.length}</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-500 rounded-full transition-all duration-500"
                        style={{ width: `${(anmeldungDone / anmeldungItems.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  {anmeldungDone === anmeldungItems.length && (
                    <div className="flex items-center gap-2 bg-green-50 text-green-700 text-sm font-bold px-4 py-2 rounded-xl whitespace-nowrap">
                      <i className="ri-checkbox-circle-fill text-green-500"></i>
                      Alles vollständig!
                    </div>
                  )}
                  {anmeldungDone < anmeldungItems.length && (
                    <button
                      className="text-xs text-gray-400 hover:text-gray-600 transition-colors whitespace-nowrap cursor-pointer"
                      onClick={() => setAnmeldungChecked({})}
                    >
                      Zurücksetzen
                    </button>
                  )}
                </div>

                <div className="mb-5">
                  <h2 className="text-xl md:text-2xl font-extrabold text-navy-900 flex items-center gap-3">
                    <div className="w-9 h-9 bg-navy-900 rounded-xl flex items-center justify-center">
                      <i className="ri-car-line text-white text-base"></i>
                    </div>
                    Anmeldung / Ummeldung
                  </h2>
                  <p className="text-gray-500 text-sm mt-2 ml-12">Klicken Sie auf einen Punkt um ihn abzuhaken</p>
                </div>

                <div className="space-y-3">
                  {anmeldungItems.map((item, i) => (
                    <ChecklistCard
                      key={item.id}
                      item={item}
                      index={i}
                      checked={!!anmeldungChecked[item.id]}
                      onToggle={() => toggleAnmeldung(item.id)}
                    />
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'abmeldung' && (
              <div>
                {/* Fortschrittsanzeige */}
                <div className="bg-white rounded-2xl border border-gray-100 p-5 mb-8 flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-bold text-navy-900">Fortschritt</span>
                      <span className="text-sm font-extrabold text-navy-700">{abmeldungDone} / {abmeldungItems.length}</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-500 rounded-full transition-all duration-500"
                        style={{ width: `${(abmeldungDone / abmeldungItems.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  {abmeldungDone === abmeldungItems.length && (
                    <div className="flex items-center gap-2 bg-green-50 text-green-700 text-sm font-bold px-4 py-2 rounded-xl whitespace-nowrap">
                      <i className="ri-checkbox-circle-fill text-green-500"></i>
                      Alles vollständig!
                    </div>
                  )}
                  {abmeldungDone < abmeldungItems.length && (
                    <button
                      className="text-xs text-gray-400 hover:text-gray-600 transition-colors whitespace-nowrap cursor-pointer"
                      onClick={() => setAbmeldungChecked({})}
                    >
                      Zurücksetzen
                    </button>
                  )}
                </div>

                <div className="mb-5">
                  <h2 className="text-xl md:text-2xl font-extrabold text-navy-900 flex items-center gap-3">
                    <div className="w-9 h-9 bg-navy-900 rounded-xl flex items-center justify-center">
                      <i className="ri-logout-box-line text-white text-base"></i>
                    </div>
                    Abmeldung
                  </h2>
                  <p className="text-gray-500 text-sm mt-2 ml-12">Klicken Sie auf einen Punkt um ihn abzuhaken</p>
                </div>

                <div className="space-y-3">
                  {abmeldungItems.map((item, i) => (
                    <ChecklistCard
                      key={item.id}
                      item={item}
                      index={i}
                      checked={!!abmeldungChecked[item.id]}
                      onToggle={() => toggleAbmeldung(item.id)}
                    />
                  ))}
                </div>

                {/* Hinweis Abmeldung */}
                <div className="mt-6 bg-amber-50 border border-amber-100 rounded-2xl p-5 flex items-start gap-3">
                  <div className="w-8 h-8 flex items-center justify-center shrink-0 mt-0.5">
                    <i className="ri-lightbulb-line text-amber-500 text-lg"></i>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-amber-800 mb-1">Hinweis zur Abmeldung</p>
                    <p className="text-xs text-amber-700 leading-relaxed">
                      Bei der Abmeldung werden die Kennzeichen entstempelt und eingezogen. Stellen Sie sicher,
                      dass die Sicherheitscodes unter den Plaketten noch intakt und lesbar sind.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Info-Banner: Unterlagen per WhatsApp schicken */}
        <section className="bg-white py-14 md:py-20">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <div className="bg-navy-900 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-white/10 text-white/70 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
                  <i className="ri-shield-check-line"></i>
                  Kostenlose Vorprüfung
                </div>
                <h2 className="text-xl md:text-2xl font-extrabold text-white mb-3 leading-snug">
                  Unsicher ob alles vollständig ist?
                </h2>
                <p className="text-white/60 text-sm leading-relaxed max-w-md">
                  Schicken Sie uns Ihre Unterlagen einfach per WhatsApp. Wir prüfen alles kostenlos
                  vorab und melden uns, falls noch etwas fehlt — bevor Sie bei uns vorbeikommen.
                </p>
              </div>
              <div className="flex flex-col gap-3 shrink-0 w-full md:w-auto">
                <a
                  href="https://wa.me/4923063548896?text=Hallo%2C%20ich%20m%C3%B6chte%20meine%20Unterlagen%20vor%20der%20Zulassung%20prüfen%20lassen."
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-whatsapp text-white font-bold px-6 py-3.5 rounded-xl text-sm whitespace-nowrap cursor-pointer hover:bg-green-600 transition-colors"
                >
                  <div className="w-5 h-5 flex items-center justify-center">
                    <img src="/images/whatsapp-bf1279.svg" className="w-full h-full object-contain" alt="WhatsApp" loading="lazy" decoding="async" />
                  </div>
                  Unterlagen per WhatsApp senden
                </a>
                <Link
                  to="/leistungen"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-semibold px-6 py-3.5 rounded-xl text-sm whitespace-nowrap cursor-pointer hover:bg-white/20 transition-colors"
                >
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-file-list-line"></i>
                  </div>
                  Online-Anfrage stellen
                </Link>
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

export default UntlerlagenPage;