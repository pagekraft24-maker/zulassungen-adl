import { bewertungen } from '@/mocks/bewertungen';

const BewertungenSection = () => (
  <section className="bg-offwhite py-16">
    <div className="max-w-7xl mx-auto px-4 md:px-6">

      {/* Score-Block — kompakt */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-navy-950 rounded-2xl px-5 md:px-8 py-5 md:py-7 mb-8">
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <div className="font-black text-white leading-none text-4xl md:text-6xl shrink-0">5,0</div>
          <div className="flex flex-col gap-1.5 min-w-0">
            <div className="flex items-center gap-0.5">
              {[1,2,3,4,5].map((s) => (
                <div key={s} className="w-4 h-4 md:w-5 md:h-5 flex items-center justify-center">
                  <i className="ri-star-fill text-yellow-400 text-sm md:text-lg"></i>
                </div>
              ))}
            </div>
            <div className="text-white/50 text-xs md:text-sm font-medium">137+ Google-Bewertungen</div>
          </div>
          {/* Mobile: Google-Button rechts neben Score */}
          <a
            href="https://share.google/OnL6nEBNVchmHrdhP"
            target="_blank"
            rel="nofollow noreferrer"
            className="sm:hidden ml-auto inline-flex items-center gap-1.5 bg-white text-navy-900 font-bold text-xs px-2.5 py-1.5 rounded-lg cursor-pointer shrink-0"
          >
            <div className="w-3.5 h-3.5 flex items-center justify-center">
              <i className="ri-google-fill text-sm"></i>
            </div>
            <span>Google</span>
          </a>
        </div>

        <div className="hidden sm:block w-px self-stretch bg-white/10"></div>

        <div className="flex-1 text-center sm:text-left hidden sm:block">
          <h2 className="text-xl md:text-2xl font-black text-white mb-1">Was unsere Kunden sagen.</h2>
          <p className="text-white/40 text-sm">Über 1.000 zufriedene Kunden aus Lünen und der Region.</p>
        </div>

        <a
          href="https://share.google/OnL6nEBNVchmHrdhP"
          target="_blank"
          rel="nofollow noreferrer"
          className="hidden sm:inline-flex items-center gap-2 bg-white text-navy-900 font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer shrink-0"
        >
          <div className="w-4 h-4 flex items-center justify-center">
            <i className="ri-google-fill text-base"></i>
          </div>
          Auf Google ansehen
        </a>
      </div>

      {/* Horizontal Scroll Row */}
      <div className="overflow-x-auto pb-3 -mx-4 px-4 md:-mx-6 md:px-6">
        <div className="flex gap-4" style={{ width: 'max-content', contain: 'layout paint' }}>
          {bewertungen.map((r) => (
            <a
              key={r.id}
              href="https://share.google/OnL6nEBNVchmHrdhP"
              target="_blank"
              rel="nofollow noreferrer"
              className="bg-white border-2 border-gray-100 rounded-2xl p-5 flex flex-col gap-4 hover:border-navy-200 transition-colors cursor-pointer"
              style={{ width: '320px' }}
            >
              {/* Sterne + Google */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: r.sterne }).map((_, i) => (
                    <div key={i} className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-star-fill text-yellow-400 text-base"></i>
                    </div>
                  ))}
                </div>
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-google-fill text-gray-300 text-base"></i>
                </div>
              </div>

              {/* Text */}
              <p className="text-gray-600 text-sm leading-relaxed flex-1 line-clamp-4">
                &ldquo;{r.text}&rdquo;
              </p>

              {/* Autor */}
              <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                <div className={`w-9 h-9 flex items-center justify-center ${r.farbe} rounded-xl shrink-0`}>
                  <span className="text-white text-xs font-black">{r.initialen}</span>
                </div>
                <div>
                  <div className="font-bold text-navy-900 text-sm">{r.name}</div>
                  <div className="text-gray-400 text-xs">{r.ort} · {r.datum}</div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default BewertungenSection;
