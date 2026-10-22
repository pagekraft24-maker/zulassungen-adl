import { Link } from 'react-router-dom';
import { leistungen } from '@/mocks/leistungen';

export interface InlineFormData {
  vorname: string;
  nachname: string;
  telefon: string;
  selectedSlug: string;
  website: string; // Spam-Falle (unsichtbar)
}

export const initialInlineData: InlineFormData = {
  vorname: '',
  nachname: '',
  telefon: '',
  selectedSlug: '',
  website: '',
};

// Hauptleistungen als Kacheln – alle übrigen Leistungen unter „Sonstiges“
export const HAUPT_SLUGS = ['kfz-anmeldung', 'kfz-abmeldung', 'kfz-ummeldung', 'kurzzeitkennzeichen'];
const hauptLeistungen = HAUPT_SLUGS.map((s) => leistungen.find((l) => l.slug === s)!).filter(Boolean);
const sonstigeLeistungen = leistungen.filter((l) => !HAUPT_SLUGS.includes(l.slug));

const inputCls = (err?: boolean) =>
  `w-full border-2 rounded-xl px-4 py-3.5 text-sm focus:outline-none transition-colors bg-white ${
    err ? 'border-red-300 bg-red-50 focus:border-red-400' : 'border-gray-100 focus:border-navy-400'
  }`;

const ErrMsg = ({ msg }: { msg?: string }) =>
  msg ? (
    <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
      <i className="ri-error-warning-line text-xs"></i>
      {msg}
    </p>
  ) : null;

// ── SCHRITT 1: LEISTUNG AUSWÄHLEN ──────────────────────────────────
interface StepLeistungProps {
  data: InlineFormData;
  onChange: (d: Partial<InlineFormData>) => void;
  onNext: () => void;
}

export const StepLeistung = ({ data, onChange, onNext }: StepLeistungProps) => {
  const isSonstiges = !!data.selectedSlug && !HAUPT_SLUGS.includes(data.selectedSlug);
  const [sonstigesOffen, setSonstigesOffen] = useState(isSonstiges);
  const sonstigesAktiv = sonstigesOffen || isSonstiges;

  return (
    <div className="space-y-5">
      <div>
        <p className="text-xs font-bold text-navy-600 uppercase tracking-widest mb-1">Schritt 1 von 2</p>
        <h3 className="text-xl md:text-3xl font-extrabold text-navy-900 leading-tight mb-1">
          Welche Leistung benötigen Sie?
        </h3>
        <p className="text-gray-400 text-sm">Wählen Sie eine Leistung — Sie können Ihre Wahl später noch ändern.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {hauptLeistungen.map((l) => {
          const aktiv = data.selectedSlug === l.slug;
          return (
            <button
              key={l.slug}
              type="button"
              onClick={() => {
                onChange({ selectedSlug: l.slug });
                setSonstigesOffen(false);
              }}
              className={`flex items-start gap-3 p-3.5 rounded-xl border-2 text-left transition-all cursor-pointer ${
                aktiv ? 'border-navy-900 bg-navy-50' : 'border-gray-100 bg-white hover:border-navy-200'
              }`}
            >
              <div className={`w-9 h-9 flex items-center justify-center rounded-lg shrink-0 ${aktiv ? 'bg-navy-900' : 'bg-gray-50'}`}>
                <i className={`${l.icon} text-base ${aktiv ? 'text-white' : 'text-gray-400'}`}></i>
              </div>
              <div className="flex-1 min-w-0 text-left">
                <div className="text-sm font-bold text-navy-900">{l.titel}</div>
                <p className="text-xs text-gray-400 mt-0.5 line-clamp-1">{l.kurzbeschreibung}</p>
              </div>
              <div className="flex flex-col items-end shrink-0">
                <span className="text-xs font-bold text-whatsapp whitespace-nowrap">{l.preis}</span>
                {aktiv && (
                  <div className="w-5 h-5 flex items-center justify-center rounded-full bg-navy-900 mt-2">
                    <i className="ri-check-line text-white text-xs"></i>
                  </div>
                )}
              </div>
            </button>
          );
        })}

        {/* Sonstiges mit Dropdown */}
        <div
          className={`sm:col-span-2 p-3.5 rounded-xl border-2 transition-all ${
            sonstigesAktiv ? 'border-navy-900 bg-navy-50' : 'border-gray-100 bg-white hover:border-navy-200'
          }`}
        >
          <button
            type="button"
            onClick={() => {
              setSonstigesOffen(true);
              if (!isSonstiges) onChange({ selectedSlug: '' });
            }}
            className="w-full flex items-center gap-3 text-left cursor-pointer"
          >
            <div className={`w-9 h-9 flex items-center justify-center rounded-lg shrink-0 ${sonstigesAktiv ? 'bg-navy-900' : 'bg-gray-50'}`}>
              <i className={`ri-more-2-line text-base ${sonstigesAktiv ? 'text-white' : 'text-gray-400'}`}></i>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-bold text-navy-900">Sonstiges</div>
              <p className="text-xs text-gray-400 mt-0.5 line-clamp-1">Weitere Leistungen auswählen</p>
            </div>
            {isSonstiges && (
              <div className="w-5 h-5 flex items-center justify-center rounded-full bg-navy-900 shrink-0">
                <i className="ri-check-line text-white text-xs"></i>
              </div>
            )}
          </button>
          {sonstigesAktiv && (
            <div className="relative mt-3">
              <select
                value={isSonstiges ? data.selectedSlug : ''}
                onChange={(e) => onChange({ selectedSlug: e.target.value })}
                aria-label="Sonstige Leistung auswählen"
                className={`${inputCls()} appearance-none pr-10 cursor-pointer ${isSonstiges ? 'text-navy-900 font-semibold' : 'text-gray-400'}`}
              >
                <option value="" disabled>
                  Bitte Leistung wählen …
                </option>
                {sonstigeLeistungen.map((l) => (
                  <option key={l.slug} value={l.slug}>
                    {l.titel}
                  </option>
                ))}
              </select>
              <i className="ri-arrow-down-s-line absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></i>
            </div>
          )}
        </div>
      </div>

      <button
        type="button"
        disabled={!data.selectedSlug}
        onClick={() => data.selectedSlug && onNext()}
        className="w-full bg-navy-900 text-white font-bold py-4 rounded-2xl text-sm hover:bg-navy-800 transition-colors cursor-pointer whitespace-nowrap flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Weiter
        <div className="w-4 h-4 flex items-center justify-center">
          <i className="ri-arrow-right-line"></i>
        </div>
      </button>
    </div>
  );
};

// ── SCHRITT 2: NAME & RUFNUMMER ───────────────────────────────────
interface StepKontaktProps {
  data: InlineFormData;
  onChange: (d: Partial<InlineFormData>) => void;
  onBack: () => void;
  onSubmit: () => void;
  loading: boolean;
  error: string;
}

export const StepKontakt = ({ data, onChange, onBack, onSubmit, loading, error }: StepKontaktProps) => {
  const [errs, setErrs] = useState<Partial<Record<keyof InlineFormData | 'datenschutz', string>>>({});
  const [datenschutz, setDatenschutz] = useState(false);

  const serviceName = leistungen.find((l) => l.slug === data.selectedSlug)?.titel || 'Ihre Leistung';

  const handleSubmitClick = () => {
    const e: typeof errs = {};
    if (!data.vorname.trim()) e.vorname = 'Bitte ausfüllen.';
    if (!data.nachname.trim()) e.nachname = 'Bitte ausfüllen.';
    if (!data.telefon.trim()) e.telefon = 'Bitte ausfüllen.';
    else if (data.telefon.replace(/\D/g, '').length < 6) e.telefon = 'Bitte gültige Rufnummer eingeben.';
    if (!datenschutz) e.datenschutz = 'Bitte stimmen Sie der Datenschutzerklärung zu.';
    setErrs(e);
    if (Object.keys(e).length === 0) onSubmit();
  };

  return (
    <div className="space-y-5">
      <div>
        <p className="text-xs font-bold text-navy-600 uppercase tracking-widest mb-1">Schritt 2 von 2</p>
        <h3 className="text-xl md:text-3xl font-extrabold text-navy-900 leading-tight mb-1">
          Wie erreichen wir Sie?
        </h3>
        <p className="text-gray-400 text-sm">Name und Rufnummer genügen — wir melden uns in wenigen Minuten.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="anfrage-vorname" className="text-sm font-semibold text-gray-700 block mb-1.5">
            Vorname <span className="text-red-500 text-xs">*</span>
          </label>
          <input
            id="anfrage-vorname"
            type="text"
            autoComplete="given-name"
            value={data.vorname}
            onChange={(e) => {
              onChange({ vorname: e.target.value });
              setErrs((p) => ({ ...p, vorname: '' }));
            }}
            placeholder="Max"
            className={inputCls(!!errs.vorname)}
          />
          <ErrMsg msg={errs.vorname} />
        </div>
        <div>
          <label htmlFor="anfrage-nachname" className="text-sm font-semibold text-gray-700 block mb-1.5">
            Nachname <span className="text-red-500 text-xs">*</span>
          </label>
          <input
            id="anfrage-nachname"
            type="text"
            autoComplete="family-name"
            value={data.nachname}
            onChange={(e) => {
              onChange({ nachname: e.target.value });
              setErrs((p) => ({ ...p, nachname: '' }));
            }}
            placeholder="Mustermann"
            className={inputCls(!!errs.nachname)}
          />
          <ErrMsg msg={errs.nachname} />
        </div>
      </div>

      <div>
        <label htmlFor="anfrage-telefon" className="text-sm font-semibold text-gray-700 block mb-1.5">
          Rufnummer <span className="text-red-500 text-xs">*</span>
        </label>
        <input
          id="anfrage-telefon"
          type="tel"
          autoComplete="tel"
          value={data.telefon}
          onChange={(e) => {
            onChange({ telefon: e.target.value });
            setErrs((p) => ({ ...p, telefon: '' }));
          }}
          placeholder="+49 ..."
          className={inputCls(!!errs.telefon)}
        />
        <ErrMsg msg={errs.telefon} />
        {!errs.telefon && (
          <p className="text-xs text-whatsapp font-medium mt-1.5 flex items-center gap-1">
            <i className="ri-time-line text-xs"></i>
            Wir rufen meist innerhalb von 5 Min. zurück.
          </p>
        )}
      </div>

      {/* Spam-Falle: für Menschen unsichtbar */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={data.website}
        onChange={(e) => onChange({ website: e.target.value })}
        className="absolute -left-[9999px] w-px h-px opacity-0"
      />

      {/* Zusammenfassung */}
      <div className="bg-navy-50 border border-navy-100 rounded-2xl p-4">
        <p className="text-xs font-bold text-navy-700 uppercase tracking-wide mb-2">Ihre Anfrage</p>
        <div className="flex items-start gap-2 text-sm">
          <i className="ri-service-line text-navy-400 mt-0.5 shrink-0"></i>
          <span className="text-navy-800">{serviceName}</span>
        </div>
      </div>

      {/* Datenschutz */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={datenschutz}
            onChange={(e) => {
              setDatenschutz(e.target.checked);
              setErrs((p) => ({ ...p, datenschutz: '' }));
            }}
            className="mt-1 w-4 h-4 rounded accent-navy-900 cursor-pointer shrink-0"
          />
          <span className="text-xs text-gray-500 leading-relaxed">
            Ich stimme der Verarbeitung meiner Daten gemäß{' '}
            <Link to="/datenschutz" className="text-navy-700 underline" onClick={(e) => e.stopPropagation()}>
              Datenschutzerklärung
            </Link>{' '}
            zu. <span className="text-red-500">*</span>
          </span>
        </label>
        <ErrMsg msg={errs.datenschutz} />
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-3 flex items-center gap-3">
          <div className="w-5 h-5 flex items-center justify-center shrink-0">
            <i className="ri-error-warning-line text-red-500"></i>
          </div>
          <p className="text-red-700 text-sm">{error}</p>
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-3">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center justify-center gap-2 border-2 border-gray-100 text-gray-500 font-semibold px-5 py-3.5 rounded-2xl text-sm hover:border-gray-200 cursor-pointer whitespace-nowrap transition-colors"
        >
          <div className="w-4 h-4 flex items-center justify-center">
            <i className="ri-arrow-left-line"></i>
          </div>
          Zurück
        </button>
        <button
          type="button"
          onClick={handleSubmitClick}
          disabled={loading}
          className="flex-1 bg-navy-900 text-white font-bold py-3.5 rounded-2xl text-sm hover:bg-navy-800 transition-colors cursor-pointer whitespace-nowrap flex items-center justify-center gap-2 disabled:opacity-60"
        >
          {loading ? (
            <>
              <i className="ri-loader-4-line animate-spin"></i>
              Wird gesendet …
            </>
          ) : (
            <>
              <i className="ri-send-plane-line"></i>
              Anfrage absenden
            </>
          )}
        </button>
      </div>

      <a
        href={`https://wa.me/4923063548896?text=${encodeURIComponent(
          `Hallo, ich möchte eine ${serviceName} anfragen.${data.vorname ? ` Mein Name ist ${data.vorname} ${data.nachname}.` : ''}`
        )}`}
        target="_blank"
        rel="nofollow noreferrer"
        className="flex items-center justify-center gap-2 text-gray-400 hover:text-whatsapp text-xs transition-colors cursor-pointer"
      >
        <div className="w-4 h-4 flex items-center justify-center">
          <img src="/images/whatsapp-bf1279.svg" className="w-full h-full object-contain" alt="WhatsApp" loading="lazy" decoding="async" />
        </div>
        Lieber per WhatsApp anfragen?
      </a>
    </div>
  );
};
