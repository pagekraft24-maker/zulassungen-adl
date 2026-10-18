import { Link } from 'react-router-dom';

const services = [
  {
    slug: 'kfz-anmeldung',
    icon: 'ri-car-fill',
    name: 'Anmelden',
    preis: '129,90 €',
    desc: 'Neues Fahrzeug zulassen',
  },
  {
    slug: 'kfz-ummeldung',
    icon: 'ri-arrow-left-right-line',
    name: 'Ummelden',
    preis: '99,00 €',
    desc: 'Halterwechsel oder Umzug',
  },
  {
    slug: 'kfz-abmeldung',
    icon: 'ri-close-circle-fill',
    name: 'Abmelden',
    preis: '29,90 €',
    desc: 'Fahrzeug stilllegen',
  },
];

const SchnellstartSection = () => (
  <section className="bg-navy-950 py-24">
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      {/* Header */}
      <div className="text-center mb-10 md:mb-14">
        <h2 className="text-3xl md:text-6xl font-black text-white mb-3 md:mb-4 leading-tight">
          Was möchten Sie tun?
        </h2>
        <p className="text-white/50 text-base md:text-lg max-w-lg mx-auto">
          Wählen Sie Ihren Service — wir erledigen den Rest.
        </p>
      </div>

      {/* Service-Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {services.map((s) => (
          <Link
            key={s.slug}
            to={`/leistungen/${s.slug}`}
            className="group flex flex-col bg-white/5 border-2 border-white/10 rounded-3xl p-10 hover:bg-white hover:border-white transition-all duration-300 cursor-pointer"
          >
            {/* Icon */}
            <div className="w-20 h-20 flex items-center justify-center bg-white/10 group-hover:bg-navy-100 rounded-2xl mb-8 transition-colors">
              <i className={`${s.icon} text-white group-hover:text-navy-800 text-4xl transition-colors`}></i>
            </div>

            {/* Name */}
            <div className="font-black text-white group-hover:text-navy-900 text-3xl md:text-5xl leading-none mb-3 md:mb-4 transition-colors tracking-tight">{s.name}</div>

            {/* Preis — MEGA */}
            <div className="font-black text-whatsapp group-hover:text-navy-700 text-4xl md:text-7xl leading-none tracking-tighter mb-3 md:mb-4 transition-colors">{s.preis}</div>

            {/* Beschreibung */}
            <div className="text-white/50 group-hover:text-gray-500 text-sm md:text-base mb-6 md:mb-10 transition-colors">{s.desc}</div>

            {/* CTA-Button */}
            <div className="mt-auto">
              <div className="w-full flex items-center justify-center gap-2 bg-white/10 group-hover:bg-navy-900 text-white font-black text-base md:text-xl py-4 md:py-5 rounded-2xl transition-colors whitespace-nowrap">
                Jetzt starten
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-arrow-right-line text-xl group-hover:translate-x-1 transition-transform"></i>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Weitere Leistungen */}
      <div className="text-center mt-10">
        <Link
          to="/leistungen"
          className="text-white/30 hover:text-white/70 text-sm transition-colors cursor-pointer inline-flex items-center gap-1"
        >
          Weitere Leistungen ansehen
          <div className="w-4 h-4 flex items-center justify-center">
            <i className="ri-arrow-right-line"></i>
          </div>
        </Link>
      </div>
    </div>
  </section>
);

export default SchnellstartSection;
