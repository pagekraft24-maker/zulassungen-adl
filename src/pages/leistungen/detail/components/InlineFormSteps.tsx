import { Link } from 'react-router-dom';
import { leistungen } from '@/mocks/leistungen';

export interface InlineFormData {
  vorname: string;
  nachname: string;
  kundentyp: 'privat' | 'gewerbe';
  firmenname: string;
  telefon: string;
  email: string;
  plz: string;
  kennzeichen: string;
  fahrzeugmarke: string;
  fahrzeugmodell: string;
  fahrzeugeProMonat: string;
  erstzulassung: string;
  terminOption: string;
  wunschtermin: string;
  nachricht: string;
  selectedSlug: string;
}

export const initialInlineData: InlineFormData = {
  vorname: '',
  nachname: '',
  kundentyp: 'privat',
  firmenname: '',
  telefon: '',
  email: '',
  plz: '',
  kennzeichen: '',
  fahrzeugmarke: '',
  fahrzeugmodell: '',
  fahrzeugeProMonat: '',
  erstzulassung: '',
  terminOption: '',
  wunschtermin: '',
  nachricht: '',
  selectedSlug: '',
};

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
  const handleWeiter = () => {
    if (!data.selectedSlug) return;
    onNext();
  };

  return (
    <div className="space-y-5">
      <div>
        <p className="text-xs font-bold text-navy-600 uppercase tracking-widest mb-1">Schritt 1 von 5</p>
        <h3 className="text-xl md:text-3xl font-extrabold text-navy-900 leading-tight mb-1">
          Welche Leistung benötigen Sie?
        </h3>
        <p className="text-gray-400 text-sm">Wählen Sie eine Leistung — Sie können Ihre Wahl später noch ändern.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[420px] overflow-y-auto pr-1">
        {leistungen.map((l) => (
          <button
            key={l.slug}
            type="button"
            onClick={() => onChange({ selectedSlug: l.slug })}
            className={`flex items-start gap-3 p-3.5 rounded-xl border-2 text-left transition-all cursor-pointer ${
              data.selectedSlug === l.slug
                ? 'border-navy-900 bg-navy-50'
                : 'border-gray-100 bg-white hover:border-navy-200'
            }`}
          >
            <div
              className={`w-9 h-9 flex items-center justify-center rounded-lg shrink-0 ${
                data.selectedSlug === l.slug ? 'bg-navy-900' : 'bg-gray-50'
              }`}
            >
              <i className={`${l.icon} text-base ${data.selectedSlug === l.slug ? 'text-white' : 'text-gray-400'}`}></i>
            </div>
            <div className="flex-1 min-w-0 text-left">
              <div className="text-sm font-bold text-navy-900">{l.titel}</div>
              <p className="text-xs text-gray-400 mt-0.5 line-clamp-1">{l.kurzbeschreibung}</p>
            </div>
            <div className="flex flex-col items-end shrink-0">
              <span className="text-xs font-bold text-whatsapp whitespace-nowrap">{l.preis}</span>
              {data.selectedSlug === l.slug && (
                <div className="w-5 h-5 flex items-center justify-center rounded-full bg-navy-900 mt-2">
                  <i className="ri-check-line text-white text-xs"></i>
                </div>
              )}
            </div>
          </button>
        ))}
      </div>

      <button
        type="button"
        disabled={!data.selectedSlug}
        onClick={handleWeiter}
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

// ── SCHRITT 2: NAME ───────────────────────────────────────────────
interface Step2Props {
  data: InlineFormData;
  onChange: (d: Partial<InlineFormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export const StepName = ({ data, onChange, onNext, onBack }: Step2Props) => {
  const [errs, setErrs] = useState<Partial<Record<keyof InlineFormData, string>>>();

  const validate = () => {
    const e: typeof errs = {};
    if (!data.vorname.trim()) e.vorname = 'Bitte ausfüllen.';
    if (!data.nachname.trim()) e.nachname = 'Bitte ausfüllen.';
    if (data.kundentyp === 'gewerbe' && !data.firmenname.trim()) e.firmenname = 'Bitte ausfüllen.';
    setErrs(e);
    return Object.keys(e).length === 0;
  };

  return (
    <div className="space-y-5">
      <div>
        <p className="text-xs font-bold text-navy-600 uppercase tracking-widest mb-1">Schritt 2 von 5</p>
        <h3 className="text-xl md:text-3xl font-extrabold text-navy-900 leading-tight mb-1">
          Wie dürfen wir Sie ansprechen?
        </h3>
        <p className="text-gray-400 text-sm">Einfach Ihren Namen eintragen — weiter geht&apos;s in Sekunden.</p>
      </div>

      {/* Privat / Gewerbe */}
      <div className="flex gap-2 p-1.5 bg-gray-50 rounded-2xl">
        {(['privat', 'gewerbe'] as const).map((typ) => (
          <button
            key={typ}
            type="button"
            onClick={() => onChange({ kundentyp: typ })}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
              data.kundentyp === typ ? 'bg-navy-900 text-white' : 'text-gray-500 hover:text-navy-800'
            }`}
          >
            <div className="w-4 h-4 flex items-center justify-center">
              <i className={typ === 'privat' ? 'ri-user-3-line' : 'ri-building-2-line'}></i>
            </div>
            {typ === 'privat' ? 'Privatperson' : 'Gewerbekunde'}
          </button>
        ))}
      </div>

      {data.kundentyp === 'gewerbe' && (
        <div>
          <label className="text-sm font-semibold text-gray-700 block mb-1.5">
            Firmenname <span className="text-red-500 text-xs">*</span>
          </label>
          <input
            type="text"
            value={data.firmenname}
            onChange={(e) => {
              onChange({ firmenname: e.target.value });
              setErrs((p) => ({ ...p, firmenname: '' }));
            }}
            placeholder="Mustermann GmbH"
            className={inputCls(!!errs?.firmenname)}
          />
          <ErrMsg msg={errs?.firmenname} />
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-semibold text-gray-700 block mb-1.5">
            Vorname <span className="text-red-500 text-xs">*</span>
          </label>
          <input
            type="text"
            value={data.vorname}
            onChange={(e) => {
              onChange({ vorname: e.target.value });
              setErrs((p) => ({ ...p, vorname: '' }));
            }}
            placeholder="Max"
            className={inputCls(!!errs?.vorname)}
          />
          <ErrMsg msg={errs?.vorname} />
        </div>
        <div>
          <label className="text-sm font-semibold text-gray-700 block mb-1.5">
            Nachname <span className="text-red-500 text-xs">*</span>
          </label>
          <input
            type="text"
            value={data.nachname}
            onChange={(e) => {
              onChange({ nachname: e.target.value });
              setErrs((p) => ({ ...p, nachname: '' }));
            }}
            placeholder="Mustermann"
            className={inputCls(!!errs?.nachname)}
          />
          <ErrMsg msg={errs?.nachname} />
        </div>
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-2 border-2 border-gray-100 text-gray-500 font-semibold px-5 py-3.5 rounded-2xl text-sm hover:border-gray-200 cursor-pointer whitespace-nowrap transition-colors"
        >
          <div className="w-4 h-4 flex items-center justify-center">
            <i className="ri-arrow-left-line"></i>
          </div>
          Zurück
        </button>
        <button
          type="button"
          onClick={() => {
            if (validate()) onNext();
          }}
          className="flex-1 bg-navy-900 text-white font-bold py-3.5 rounded-2xl text-sm hover:bg-navy-800 transition-colors cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
        >
          Weiter
          <div className="w-4 h-4 flex items-center justify-center">
            <i className="ri-arrow-right-line"></i>
          </div>
        </button>
      </div>
    </div>
  );
};

// ── SCHRITT 3: KONTAKT ────────────────────────────────────────────
interface Step3Props {
  data: InlineFormData;
  onChange: (d: Partial<InlineFormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export const StepKontakt = ({ data, onChange, onNext, onBack }: Step3Props) => {
  const [errs, setErrs] = useState<Partial<Record<keyof InlineFormData, string>>>();

  const validate = () => {
    const e: typeof errs = {};
    if (!data.telefon.trim()) e.telefon = 'Bitte ausfüllen.';
    if (!data.email.trim()) e.email = 'Bitte ausfüllen.';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email))
      e.email = 'Gültige E-Mail erforderlich.';
    setErrs(e);
    return Object.keys(e).length === 0;
  };

  return (
    <div className="space-y-5">
      <div>
        <p className="text-xs font-bold text-navy-600 uppercase tracking-widest mb-1">Schritt 3 von 5</p>
        <h3 className="text-xl md:text-3xl font-extrabold text-navy-900 leading-tight mb-1">
          Wie erreichen wir Sie, {data.vorname}?
        </h3>
        <p className="text-gray-400 text-sm">Wir melden uns innerhalb von Minuten bei Ihnen.</p>
      </div>

      <div>
        <label className="text-sm font-semibold text-gray-700 block mb-1.5">
          Telefon <span className="text-red-500 text-xs">*</span>
        </label>
        <input
          type="tel"
          value={data.telefon}
          onChange={(e) => {
            onChange({ telefon: e.target.value });
            setErrs((p) => ({ ...p, telefon: '' }));
          }}
          placeholder="+49 ..."
          className={inputCls(!!errs?.telefon)}
        />
        <ErrMsg msg={errs?.telefon} />
        {!errs?.telefon && (
          <p className="text-xs text-whatsapp font-medium mt-1.5 flex items-center gap-1">
            <i className="ri-time-line text-xs"></i>
            Wir rufen meist innerhalb von 5 Min. zurück.
          </p>
        )}
      </div>

      <div>
        <label className="text-sm font-semibold text-gray-700 block mb-1.5">
          E-Mail <span className="text-red-500 text-xs">*</span>
        </label>
        <input
          type="email"
          value={data.email}
          onChange={(e) => {
            onChange({ email: e.target.value });
            setErrs((p) => ({ ...p, email: '' }));
          }}
          placeholder="max@beispiel.de"
          className={inputCls(!!errs?.email)}
        />
        <ErrMsg msg={errs?.email} />
      </div>

      <div>
        <label className="text-sm font-semibold text-gray-700 block mb-1.5">
          PLZ <span className="text-gray-400 font-normal text-xs">(optional)</span>
        </label>
        <input
          type="text"
          value={data.plz}
          maxLength={5}
          onChange={(e) => onChange({ plz: e.target.value.replace(/\D/g, '') })}
          placeholder="44532"
          className={inputCls()}
        />
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-2 border-2 border-gray-100 text-gray-500 font-semibold px-5 py-3.5 rounded-2xl text-sm hover:border-gray-200 cursor-pointer whitespace-nowrap transition-colors"
        >
          <div className="w-4 h-4 flex items-center justify-center">
            <i className="ri-arrow-left-line"></i>
          </div>
          Zurück
        </button>
        <button
          type="button"
          onClick={() => {
            if (validate()) onNext();
          }}
          className="flex-1 bg-navy-900 text-white font-bold py-3.5 rounded-2xl text-sm hover:bg-navy-800 transition-colors cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
        >
          Weiter
          <div className="w-4 h-4 flex items-center justify-center">
            <i className="ri-arrow-right-line"></i>
          </div>
        </button>
      </div>
    </div>
  );
};

// ── SCHRITT 4: FAHRZEUG ───────────────────────────────────────────
interface Step4Props {
  data: InlineFormData;
  onChange: (d: Partial<InlineFormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export const StepFahrzeugInline = ({ data, onChange, onNext, onBack }: Step4Props) => {
  const isKennzeichen = data.selectedSlug === 'kennzeichenschilder' || data.selectedSlug === 'kennzeichenpraegung';
  const isGewerbe = data.selectedSlug === 'hol-bringservice' || data.selectedSlug === 'gewerbekunden';

  return (
    <div className="space-y-5">
      <div>
        <p className="text-xs font-bold text-navy-600 uppercase tracking-widest mb-1">Schritt 4 von 5</p>
        <h3 className="text-xl md:text-3xl font-extrabold text-navy-900 leading-tight mb-1">
          {isGewerbe ? 'Ihr Bedarf.' : 'Ihr Fahrzeug.'}
        </h3>
        <p className="text-gray-400 text-sm">
          {isGewerbe
            ? 'Damit wir Ihnen das beste Angebot machen können.'
            : 'Optionale Angaben — helfen uns bei der schnellen Vorbereitung.'}
        </p>
      </div>

      {!isGewerbe && (
        <>
          <div>
            <label className="text-sm font-semibold text-gray-700 block mb-1.5">
              {isKennzeichen ? 'Kennzeichen das geprägt wird' : 'Kennzeichen (aktuell)'}{' '}
              <span className="text-gray-400 font-normal text-xs">(optional)</span>
            </label>
            <input
              type="text"
              value={data.kennzeichen}
              onChange={(e) => onChange({ kennzeichen: e.target.value.toUpperCase() })}
              placeholder="LÜN-AB 1234"
              className={`${inputCls()} font-mono`}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-semibold text-gray-700 block mb-1.5">
                Hersteller <span className="text-gray-400 font-normal text-xs">(optional)</span>
              </label>
              <input
                type="text"
                value={data.fahrzeugmarke}
                onChange={(e) => onChange({ fahrzeugmarke: e.target.value })}
                placeholder="z.B. Volkswagen"
                className={inputCls()}
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700 block mb-1.5">
                Modell <span className="text-gray-400 font-normal text-xs">(optional)</span>
              </label>
              <input
                type="text"
                value={data.fahrzeugmodell}
                onChange={(e) => onChange({ fahrzeugmodell: e.target.value })}
                placeholder="z.B. Golf 8"
                className={inputCls()}
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-700 block mb-1.5">
              Erstzulassung <span className="text-gray-400 font-normal text-xs">(optional)</span>
            </label>
            <input
              type="month"
              value={data.erstzulassung}
              onChange={(e) => onChange({ erstzulassung: e.target.value })}
              className={inputCls()}
            />
          </div>
        </>
      )}

      {isGewerbe && (
        <div>
          <label className="text-sm font-semibold text-gray-700 block mb-1.5">
            Fahrzeuge pro Monat (geschätzt)
          </label>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
            {['1–5', '5–15', '15–30', '30–50', '50+'].map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => onChange({ fahrzeugeProMonat: v })}
                className={`py-2.5 rounded-xl border-2 text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  data.fahrzeugeProMonat === v
                    ? 'border-navy-900 bg-navy-50 text-navy-900'
                    : 'border-gray-100 text-gray-500 hover:border-navy-200'
                }`}
              >
                {v}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex gap-3">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-2 border-2 border-gray-100 text-gray-500 font-semibold px-5 py-3.5 rounded-2xl text-sm hover:border-gray-200 cursor-pointer whitespace-nowrap transition-colors"
        >
          <div className="w-4 h-4 flex items-center justify-center">
            <i className="ri-arrow-left-line"></i>
          </div>
          Zurück
        </button>
        <button
          type="button"
          onClick={onNext}
          className="flex-1 bg-navy-900 text-white font-bold py-3.5 rounded-2xl text-sm hover:bg-navy-800 transition-colors cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
        >
          Weiter
          <div className="w-4 h-4 flex items-center justify-center">
            <i className="ri-arrow-right-line"></i>
          </div>
        </button>
      </div>
    </div>
  );
};

// ── SCHRITT 5: TERMIN ─────────────────────────────────────────────
interface Step5Props {
  data: InlineFormData;
  onChange: (d: Partial<InlineFormData>) => void;
  onBack: () => void;
  onSubmit: () => void;
  loading: boolean;
  error: string;
}

export const StepTerminUpload = ({ data, onChange, onBack, onSubmit, loading, error }: Step5Props) => {
  const [datenschutz, setDatenschutz] = useState(false);
  const [dsErr, setDsErr] = useState('');

  const selectedService = leistungen.find((l) => l.slug === data.selectedSlug);
  const serviceName = selectedService?.titel || 'Ihre Leistung';

  const handleSubmitClick = () => {
    if (!datenschutz) {
      setDsErr('Bitte stimmen Sie der Datenschutzerklärung zu.');
      return;
    }
    setDsErr('');
    onSubmit();
  };

  const terminOptions = [
    { id: 'sofort', label: 'So schnell wie möglich', sub: 'Heute oder morgen', icon: 'ri-flashlight-line' },
    { id: 'woche', label: 'Diese Woche', sub: 'Termin frei wählbar', icon: 'ri-calendar-2-line' },
    { id: '2wochen', label: 'In den nächsten 2 Wochen', sub: 'Flexibler Termin', icon: 'ri-calendar-schedule-line' },
  ];

  return (
    <div className="space-y-5">
      <div>
        <p className="text-xs font-bold text-navy-600 uppercase tracking-widest mb-1">Schritt 5 von 5</p>
        <h3 className="text-xl md:text-3xl font-extrabold text-navy-900 leading-tight mb-1">
          Wann passt es Ihnen?
        </h3>
        <p className="text-gray-400 text-sm">Unverbindliche Wunschangabe — wir bestätigen nach Ihrer Anfrage.</p>
      </div>

      {/* Termin-Optionen */}
      <div className="grid grid-cols-1 gap-2">
        {terminOptions.map((opt) => (
          <button
            key={opt.id}
            type="button"
            onClick={() => onChange({ terminOption: opt.id })}
            className={`flex items-center gap-4 p-4 rounded-2xl border-2 text-left transition-all cursor-pointer ${
              data.terminOption === opt.id
                ? 'border-navy-900 bg-navy-50'
                : 'border-gray-100 bg-white hover:border-navy-200'
            }`}
          >
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-xl shrink-0 ${
                data.terminOption === opt.id ? 'bg-navy-900' : 'bg-gray-50'
              }`}
            >
              <i className={`${opt.icon} text-lg ${data.terminOption === opt.id ? 'text-white' : 'text-gray-400'}`}></i>
            </div>
            <div>
              <div
                className={`text-sm font-bold ${data.terminOption === opt.id ? 'text-navy-900' : 'text-gray-700'}`}
              >
                {opt.label}
              </div>
              <div className="text-xs text-gray-400">{opt.sub}</div>
            </div>
            {data.terminOption === opt.id && (
              <div className="ml-auto w-5 h-5 flex items-center justify-center rounded-full bg-navy-900 shrink-0">
                <i className="ri-check-line text-white text-xs"></i>
              </div>
            )}
          </button>
        ))}
      </div>

      {(data.terminOption === 'woche' || data.terminOption === '2wochen') && (
        <div>
          <label className="text-sm font-semibold text-gray-700 block mb-1.5">Wunschdatum</label>
          <input
            type="date"
            value={data.wunschtermin}
            onChange={(e) => onChange({ wunschtermin: e.target.value })}
            min={new Date().toISOString().split('T')[0]}
            className={inputCls()}
          />
        </div>
      )}

      {/* Nachricht */}
      <div>
        <label className="text-sm font-semibold text-gray-700 block mb-1.5">
          Anmerkungen <span className="text-gray-400 font-normal text-xs">(optional)</span>
        </label>
        <textarea
          value={data.nachricht}
          onChange={(e) => onChange({ nachricht: e.target.value })}
          rows={3}
          maxLength={500}
          placeholder="Gibt es etwas, das wir vorab wissen sollten?"
          className={`${inputCls()} resize-none`}
        />
        <p className="text-xs text-gray-400 mt-1 text-right">{data.nachricht.length}/500</p>
      </div>

      {/* Zusammenfassung */}
      <div className="bg-navy-50 border border-navy-100 rounded-2xl p-4 space-y-2">
        <p className="text-xs font-bold text-navy-700 uppercase tracking-wide mb-2">Ihre Anfrage</p>
        <div className="flex items-start gap-2 text-sm">
          <i className="ri-service-line text-navy-400 mt-0.5 shrink-0"></i>
          <span className="text-navy-800">{serviceName}</span>
        </div>
        <div className="flex items-start gap-2 text-sm">
          <i className="ri-user-line text-navy-400 mt-0.5 shrink-0"></i>
          <span className="text-navy-800">
            {data.vorname} {data.nachname}
          </span>
        </div>
        <div className="flex items-start gap-2 text-sm">
          <i className="ri-phone-line text-navy-400 mt-0.5 shrink-0"></i>
          <span className="text-navy-800">{data.telefon}</span>
        </div>
        <div className="flex items-start gap-2 text-sm">
          <i className="ri-mail-line text-navy-400 mt-0.5 shrink-0"></i>
          <span className="text-navy-800">{data.email}</span>
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
              setDsErr('');
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
        {dsErr && (
          <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
            <i className="ri-error-warning-line text-xs"></i>
            {dsErr}
          </p>
        )}
      </div>

      {/* Fehler */}
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
          `Hallo, ich möchte eine ${serviceName} anfragen. Mein Name ist ${data.vorname} ${data.nachname}. Telefon: ${data.telefon}.`
        )}`}
        target="_blank"
        rel="nofollow noreferrer"
        className="flex items-center justify-center gap-2 text-gray-400 hover:text-whatsapp text-xs transition-colors cursor-pointer"
      >
        <div className="w-4 h-4 flex items-center justify-center">
          <img
            src="/images/whatsapp-bf1279.svg"
            className="w-full h-full object-contain"
            alt="WhatsApp"
            loading="lazy"
            decoding="async"
          />
        </div>
        Lieber per WhatsApp anfragen?
      </a>
    </div>
  );
};