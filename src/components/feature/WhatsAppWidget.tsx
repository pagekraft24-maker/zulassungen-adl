import { useState } from 'react';
import useOpenStatus from '@/hooks/useOpenStatus';

const WhatsAppWidget = () => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const status = useOpenStatus();

  const msg = encodeURIComponent(
    'Hallo, ich möchte eine Kfz-Zulassung anfragen.'
  );
  const href = `https://wa.me/4923063548896?text=${msg}`;

  const tooltipText = status.isOpen
    ? 'Antwort innerhalb von 5 Min.'
    : 'WhatsApp 24/7 verfügbar';

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip */}
      {tooltipVisible && (
        <div className="bg-white text-navy-900 text-xs font-semibold px-4 py-2.5 rounded-xl border border-gray-100 whitespace-nowrap"
          style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.10)' }}>
          <div className="flex items-center gap-1.5">
            <div className={`w-2 h-2 rounded-full ${status.isOpen ? 'bg-whatsapp' : 'bg-gray-300'}`}></div>
            {tooltipText}
          </div>
        </div>
      )}

      {/* Button */}
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative w-14 h-14 flex items-center justify-center bg-whatsapp text-white rounded-full cursor-pointer hover:scale-105 transition-transform"
        style={{ boxShadow: '0 4px 20px rgba(37,211,102,0.4)' }}
        onMouseEnter={() => setTooltipVisible(true)}
        onMouseLeave={() => setTooltipVisible(false)}
        onFocus={() => setTooltipVisible(true)}
        onBlur={() => setTooltipVisible(false)}
        aria-label="WhatsApp-Chat öffnen — Per WhatsApp anfragen"
      >
        <div className="w-8 h-8 flex items-center justify-center">
          <img src="/images/whatsapp-bf1279.svg" className="w-full h-full object-contain" alt="WhatsApp" loading="lazy" decoding="async" />
        </div>
        {/* Online-Indicator */}
        <div className={`absolute top-0.5 right-0.5 w-3.5 h-3.5 rounded-full border-2 border-white ${status.isOpen ? 'bg-whatsapp' : 'bg-gray-400'}`}></div>
      </a>
    </div>
  );
};

export default WhatsAppWidget;
