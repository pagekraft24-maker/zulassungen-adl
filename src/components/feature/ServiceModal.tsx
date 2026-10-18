import { useNavigate } from 'react-router-dom';

interface ServiceOption {
  slug: string;
  label: string;
  kurz: string;
  preis: string;
  icon: string;
}

const serviceOptions: ServiceOption[] = [
  { slug: 'kfz-anmeldung', label: 'Kfz-Anmeldung', kurz: 'Neuzulassung & Wiederzulassung', preis: 'ab 129,90 €', icon: 'ri-car-line' },
  { slug: 'kfz-ummeldung', label: 'Kfz-Ummeldung', kurz: 'Halterwechsel & Umzug', preis: 'ab 99,00 €', icon: 'ri-swap-line' },
  { slug: 'kfz-abmeldung', label: 'Kfz-Abmeldung', kurz: 'Stilllegung', preis: 'ab 29,90 €', icon: 'ri-indeterminate-circle-line' },
  { slug: 'wunschkennzeichen', label: 'Wunschkennzeichen', kurz: 'Reservierung & Prägung', preis: 'auf Anfrage', icon: 'ri-vip-crown-line' },
  { slug: 'kurzzeitkennzeichen', label: 'Kurzzeitkennzeichen', kurz: 'Probefahrt & Überführung', preis: 'ab 149,00 €', icon: 'ri-timer-line' },

  { slug: 'kennzeichenpraegung', label: 'Kennzeichenschilder', kurz: 'Eigene Prägung vor Ort', preis: 'ab 15,00 €', icon: 'ri-tools-line' },
  { slug: 'hol-bringservice', label: 'Hol- & Bringservice', kurz: 'Wir kommen zu Ihnen', preis: 'auf Anfrage', icon: 'ri-truck-line' },
  { slug: 'adress-aenderung', label: 'Adress-/Namensänderung', kurz: 'Umzug & Heirat', preis: 'ab 49,90 €', icon: 'ri-user-settings-line' },
  { slug: 'gewerbekunden', label: 'Gewerbe-Service', kurz: 'B2B & Flotten', preis: 'auf Anfrage', icon: 'ri-building-2-line' },
];

interface ServiceModalProps {
  onClose: () => void;
}

const ServiceModal = ({ onClose }: ServiceModalProps) => {
  const navigate = useNavigate();

  const handleSelect = (slug: string) => {
    onClose();
    navigate(`/leistungen/${slug}`);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div
        className="relative bg-white rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col"
        style={{ boxShadow: '0 8px 48px rgba(0,0,0,0.18)' }}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between shrink-0">
          <div>
            <h3 className="text-xl font-extrabold text-navy-900">Welche Leistung möchten Sie?</h3>
            <p className="text-sm text-gray-400 mt-0.5">
              Wählen Sie einen Service — wir führen Sie Schritt für Schritt durch den Prozess.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer shrink-0"
          >
            <i className="ri-close-line text-gray-600 text-lg"></i>
          </button>
        </div>

        {/* Service Grid */}
        <div className="overflow-y-auto p-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {serviceOptions.map((s) => (
              <button
                key={s.slug}
                onClick={() => handleSelect(s.slug)}
                className="flex items-center gap-3 bg-white border border-gray-100 hover:border-navy-700 hover:bg-navy-50/30 rounded-xl px-4 py-3.5 text-left transition-all group cursor-pointer"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-[#f5f5f2] group-hover:bg-navy-100 rounded-xl shrink-0 transition-colors">
                  <i className={`${s.icon} text-navy-700 text-xl`}></i>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-navy-900 text-sm leading-tight group-hover:text-navy-700">{s.label}</div>
                  <div className="text-gray-400 text-[11px] mt-0.5 truncate">{s.kurz}</div>
                </div>
                <div className="shrink-0 text-right">
                  <div className="text-xs font-semibold text-navy-700 whitespace-nowrap">{s.preis}</div>
                  <div className="w-5 h-5 flex items-center justify-center ml-auto mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <i className="ri-arrow-right-s-line text-navy-700"></i>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Footer hint */}
          <div className="mt-4 flex items-center gap-2 bg-[#f8f8f6] rounded-xl px-4 py-3">
            <div className="w-5 h-5 flex items-center justify-center shrink-0">
              <i className="ri-information-line text-navy-600 text-base"></i>
            </div>
            <p className="text-xs text-gray-500">
              Nicht sicher, was Sie benötigen?{' '}
              <a
                href="https://wa.me/4923063548896?text=Hallo%2C%20ich%20bin%20mir%20nicht%20sicher%2C%20welchen%20Service%20ich%20brauche."
                target="_blank"
                rel="nofollow noreferrer"
                className="text-[#25D366] font-semibold hover:underline cursor-pointer"
                onClick={onClose}
              >
                Fragen Sie uns einfach per WhatsApp
              </a>{' '}
              — kostenlos &amp; unverbindlich.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
