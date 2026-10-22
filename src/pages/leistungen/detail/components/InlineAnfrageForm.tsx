import { useNavigate } from 'react-router-dom';
import { leistungen } from '@/mocks/leistungen';
import { StepLeistung, StepKontakt, initialInlineData, type InlineFormData } from './InlineFormSteps';

interface Props {
  serviceSlug: string;
  serviceName: string;
  servicePreis: string;
}

const FORM_URL = '/api/anfrage'; // Vercel-Funktion → Telegram-Bot

const stepLabels = ['Leistung', 'Kontakt'];

const InlineAnfrageForm = ({ serviceSlug, serviceName, servicePreis }: Props) => {
  const [schritt, setSchritt] = useState(1);
  const [daten, setDaten] = useState<InlineFormData>(() => ({
    ...initialInlineData,
    selectedSlug: serviceSlug,
  }));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const update = (d: Partial<InlineFormData>) => setDaten((p) => ({ ...p, ...d }));

  const handleNext = () => {
    setSchritt((s) => {
      if (s >= 2) return s;
      return s + 1;
    });
  };

  const handleBack = () => {
    setSchritt((s) => {
      if (s <= 1) return s;
      return s - 1;
    });
  };

  const selectedLeistung = leistungen.find((l) => l.slug === daten.selectedSlug);

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    try {
      const svcName = selectedLeistung?.titel || serviceName;
      const svcPreis = selectedLeistung?.preis || servicePreis;

      const res = await fetch(FORM_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          leistung: `${svcName} (${svcPreis})`,
          vorname: daten.vorname,
          nachname: daten.nachname,
          telefon: daten.telefon,
          website: daten.website,
        }),
      });

      if (!res.ok) throw new Error(`Form submission failed with status ${res.status}`);

      navigate(`/danke?name=${encodeURIComponent(daten.vorname)}&service=${encodeURIComponent(svcName)}`);
    } catch {
      setError('Etwas ist schiefgegangen. Bitte rufen Sie an: 02306 3548896.');
    } finally {
      setLoading(false);
    }
  };

  const renderStep = () => {
    switch (schritt) {
      case 1:
        return <StepLeistung key="s1" data={daten} onChange={update} onNext={handleNext} />;
      case 2:
        return (
          <StepKontakt
            key="s2"
            data={daten}
            onChange={update}
            onBack={handleBack}
            onSubmit={handleSubmit}
            loading={loading}
            error={error}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div id="anfrage-formular" className="bg-white rounded-3xl border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-navy-900 px-5 md:px-10 py-6 md:py-8">
        <p className="text-xs font-bold text-navy-300 uppercase tracking-widest mb-1">Jetzt starten</p>
        <h2 className="text-xl md:text-3xl font-extrabold text-white leading-tight mb-1">
          Jetzt Prozess starten
        </h2>
        <p className="text-navy-300 text-xs md:text-sm">In 2 kurzen Schritten — dauert unter 1 Minute.</p>

        {/* Progress Steps */}
        <div className="flex items-center gap-0 mt-5">
          {stepLabels.map((label, i) => {
            const stepNum = i + 1;
            const isDone = schritt > stepNum;
            const isActive = schritt === stepNum;
            return (
              <div key={label} className="flex items-center flex-1 last:flex-none">
                <div className="flex flex-col items-center gap-1">
                  <div
                    className={`w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full text-xs font-bold transition-all ${
                      isDone ? 'bg-whatsapp text-white' : isActive ? 'bg-white text-navy-900' : 'bg-navy-700 text-navy-300'
                    }`}
                  >
                    {isDone ? <i className="ri-check-line text-xs md:text-sm"></i> : stepNum}
                  </div>
                  <span
                    className={`text-xs whitespace-nowrap hidden sm:block ${isActive ? 'text-white font-semibold' : 'text-navy-400'}`}
                  >
                    {label}
                  </span>
                </div>
                {i < stepLabels.length - 1 && (
                  <div
                    className={`flex-1 h-px mx-1.5 md:mx-2 mb-0 sm:mb-5 transition-colors ${
                      schritt > stepNum ? 'bg-whatsapp/50' : 'bg-navy-700'
                    }`}
                  ></div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Form Content */}
      <div className="px-6 md:px-10 py-8">{renderStep()}</div>

      {/* Footer Vertrauen */}
      <div className="border-t border-gray-50 px-6 md:px-10 py-4 bg-gray-50/50">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {[
            { icon: 'ri-shield-check-line', text: 'DSGVO-konform' },
            { icon: 'ri-lock-2-line', text: 'SSL-verschlüsselt' },
            { icon: 'ri-time-line', text: 'Antwort in Minuten' },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-1.5 text-xs text-gray-400">
              <div className="w-4 h-4 flex items-center justify-center">
                <i className={`${item.icon} text-xs text-navy-400`}></i>
              </div>
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InlineAnfrageForm;