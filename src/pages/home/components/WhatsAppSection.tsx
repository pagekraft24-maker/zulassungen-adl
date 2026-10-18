import { useState } from 'react';
import ServiceModal from '@/components/feature/ServiceModal';

const chatMessages = [
  { seite: 'ein', text: 'Hallo! Ich möchte mein Fahrzeug ummelden. Was benötige ich?', zeit: '09:14' },
  {
    seite: 'aus',
    text: 'Kein Problem — schicken Sie uns Fotos von Personalausweis, ZB I & II per WhatsApp. Wir erledigen alles für Sie!',
    zeit: '09:15',
  },
  { seite: 'ein', text: 'Super! Was kostet das?', zeit: '09:16' },
  {
    seite: 'aus',
    text: 'Ab 99,00 € Festpreis — alles inklusive, keine Überraschungen. 🚗✅',
    zeit: '09:16',
  },
];

const shopSteps = [
  { icon: 'ri-file-list-3-line', label: 'Service wählen' },
  { icon: 'ri-upload-cloud-line', label: 'Dokumente hochladen' },
  { icon: 'ri-bank-card-line', label: 'Sicher bezahlen' },
  { icon: 'ri-checkbox-circle-line', label: 'Fertig — wir kümmern uns!' },
];

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

const WhatsAppSection = () => {
  const [hovered, setHovered] = useState<'whatsapp' | 'shop' | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="bg-navy-950 py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="text-xs font-semibold text-whatsapp uppercase tracking-widest bg-whatsapp/10 border border-whatsapp/20 px-3 py-1 rounded-lg">
              Zulassung online starten
            </span>
            <h2 className="text-2xl md:text-5xl font-black text-white mt-5 mb-4 leading-tight">
              Wählen Sie Ihren Weg.
            </h2>
            <p className="text-white/45 max-w-lg mx-auto text-base">
              Beide Wege sind schnell, sicher und 100 % online — Sie entscheiden, wie Sie am liebsten starten.
            </p>
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* ODER-Divider */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 items-center justify-center bg-navy-900 border-2 border-white/20 rounded-full z-20 flex-col gap-0">
              <span className="text-white/70 text-sm font-black tracking-widest uppercase leading-none">oder</span>
            </div>

            {/* ─── Option 1: WhatsApp ─── */}
            <div
              className={`card-wiggle-1 relative bg-white rounded-2xl overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
                hovered === 'whatsapp' ? 'border-[#25D366]' : 'border-white/10'
              }`}
              onMouseEnter={() => setHovered('whatsapp')}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Badge */}
              <div className="absolute top-4 right-4 bg-[#25D366] text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                Beliebt
              </div>

              <div className="p-6 pb-0">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#25D366]/10 rounded-xl">
                    <img src="/images/whatsapp-bf1279.svg" className="w-full h-full object-contain" alt="WhatsApp" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-widest text-gray-400">Option 1</div>
                    <h3 className="text-lg font-extrabold text-navy-900 leading-tight">Erstkontakt per WhatsApp</h3>
                  </div>
                </div>
                <p className="text-gray-500 text-sm mb-5 leading-relaxed">
                  Fotos der Dokumente schicken — wir erledigen alles. Antwort meist innerhalb von 5 Minuten.
                </p>

                {/* Mini-Chat-Mockup */}
                <div className="rounded-2xl overflow-hidden border border-gray-100">
                  <div className="bg-[#075E54] px-3 py-2.5 flex items-center gap-2.5">
                    <div className="w-7 h-7 flex items-center justify-center bg-white/20 rounded-full shrink-0">
                      <i className="ri-car-fill text-white text-xs"></i>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white font-semibold text-xs truncate">Zulassungsdienst an der Lippe</div>
                      <div className="text-white/70 text-[10px]">Online · Antwortet in Minuten</div>
                    </div>
                  </div>
                  <div className="px-3 py-3 space-y-2" style={{ background: '#ECE5DD' }}>
                    {chatMessages.map((msg, i) => (
                      <div key={i} className={`flex ${msg.seite === 'aus' ? 'justify-end' : 'justify-start'}`}>
                        <div
                          className={`max-w-[85%] px-3 py-1.5 rounded-xl text-[11px] leading-relaxed ${
                            msg.seite === 'aus'
                              ? 'bg-[#DCF8C6] text-gray-800 rounded-br-sm'
                              : 'bg-white text-gray-800 rounded-bl-sm'
                          }`}
                        >
                          <span>{msg.text}</span>
                          <span className="ml-2 text-gray-400 text-[9px]">{msg.zeit}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-[#F0F0F0] px-3 py-1.5 flex items-center gap-2">
                    <div className="flex-1 bg-white rounded-full px-3 py-1 text-[11px] text-gray-400">
                      Nachricht schreiben...
                    </div>
                    <div className="w-7 h-7 flex items-center justify-center bg-[#075E54] rounded-full shrink-0">
                      <i className="ri-send-plane-fill text-white text-xs"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-5">
                <a
                  href="https://wa.me/4923063548896?text=Hallo%2C%20ich%20m%C3%B6chte%20meine%20Kfz-Zulassung%20anfragen."
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full bg-[#25D366] hover:bg-green-500 text-white font-bold text-sm px-5 py-3.5 rounded-xl transition-colors whitespace-nowrap cursor-pointer"
                >
                  <div className="w-5 h-5 flex items-center justify-center">
                    <img src="/images/whatsapp-bf1279.svg" className="w-full h-full object-contain" alt="WhatsApp" />
                  </div>
                  Per WhatsApp starten
                </a>
                <p className="text-gray-400 text-[11px] text-center mt-2">Kostenlos &amp; unverbindlich · Kein Account nötig</p>
              </div>
            </div>

            {/* ─── Option 2: Shopsystem ─── */}
            <div
              className={`card-wiggle-2 relative bg-white rounded-2xl overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
                hovered === 'shop' ? 'border-navy-400' : 'border-white/10'
              }`}
              onMouseEnter={() => setHovered('shop')}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="p-6 pb-0">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 flex items-center justify-center bg-navy-50 rounded-xl">
                    <i className="ri-store-2-line text-navy-700 text-2xl"></i>
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-widest text-gray-400">Option 2</div>
                    <h3 className="text-lg font-extrabold text-navy-900 leading-tight">Kommen Sie direkt zum Shop</h3>
                  </div>
                </div>
                <p className="text-gray-500 text-sm mb-5 leading-relaxed">
                  Alles bequem über unsere Website — Service buchen, Dokumente hochladen, Zahlung abschließen. Komplett digital.
                </p>

                {/* Browser Mockup */}
                <div className="rounded-2xl overflow-hidden border border-gray-100">
                  <div className="bg-gray-800 px-3 py-2 flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                    </div>
                    <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 text-[10px] text-gray-300 flex items-center gap-1.5">
                      <div className="w-3 h-3 flex items-center justify-center">
                        <i className="ri-lock-line text-green-400 text-[10px]"></i>
                      </div>
                      zulassungen-adl.de
                    </div>
                  </div>
                  <div className="bg-white px-4 py-4 space-y-3">
                    <div>
                      <div className="flex justify-between text-[10px] text-gray-400 mb-1">
                        <span>Schritt 1 von 4</span>
                        <span>25%</span>
                      </div>
                      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full w-1/4 bg-navy-700 rounded-full"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {shopSteps.map((step, i) => (
                        <div key={i} className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-[12px] font-medium transition-colors ${
                          i === 0 ? 'bg-navy-700 text-white' : 'bg-gray-50 text-gray-400'
                        }`}>
                          <div className="w-5 h-5 flex items-center justify-center shrink-0">
                            <i className={`${step.icon} text-sm ${i === 0 ? 'text-white' : 'text-gray-300'}`}></i>
                          </div>
                          {step.label}
                          {i === 0 && (
                            <div className="ml-auto w-4 h-4 flex items-center justify-center">
                              <i className="ri-arrow-right-s-line text-white text-sm"></i>
                            </div>
                          )}
                          {i !== 0 && (
                            <div className="ml-auto w-4 h-4 flex items-center justify-center">
                              <i className="ri-lock-line text-gray-300 text-xs"></i>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-5">
                <button
                  onClick={() => setModalOpen(true)}
                  className="flex items-center justify-center gap-2.5 w-full bg-navy-900 hover:bg-navy-700 text-white font-bold text-sm px-5 py-3.5 rounded-xl transition-colors whitespace-nowrap cursor-pointer"
                >
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-store-2-line text-lg"></i>
                  </div>
                  Leistung auswählen &amp; starten
                </button>
                <p className="text-gray-400 text-[11px] text-center mt-2">100 % digital · Sicher &amp; verschlüsselt · 24/7</p>
              </div>
            </div>

          </div>

          {/* Bottom Trust Line */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-sm">
            <span className="flex items-center gap-2 text-white/40">
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-shield-check-line text-whatsapp"></i>
              </div>
              Datensicher &amp; DSGVO-konform
            </span>
            <div className="w-px h-4 bg-white/10 hidden sm:block"></div>
            <span className="flex items-center gap-2 text-white/40">
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-time-line text-whatsapp"></i>
              </div>
              Schnelle Bearbeitung.
            </span>
            <div className="w-px h-4 bg-white/10 hidden sm:block"></div>
            <span className="flex items-center gap-2 text-white/40">
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-price-tag-3-line text-whatsapp"></i>
              </div>
              Festpreis — keine versteckten Kosten
            </span>
          </div>
        </div>
      </section>

      {/* Service Selection Modal */}
      {modalOpen && <ServiceModal onClose={() => setModalOpen(false)} />}
    </>
  );
};

export default WhatsAppSection;
