import { useState, useEffect } from 'react';

export interface OpenStatus {
  isOpen: boolean;
  label: string;
  sublabel: string;
  color: 'green' | 'red';
}

// Öffnungszeiten: Mo–Fr 09:30–13:30 & 15:00–19:00 · Sa 12:00–16:00
const SLOTS: { days: number[]; open: number; close: number }[] = [
  { days: [1, 2, 3, 4, 5], open: 9 * 60 + 30, close: 13 * 60 + 30 },
  { days: [1, 2, 3, 4, 5], open: 15 * 60, close: 19 * 60 },
  { days: [6], open: 12 * 60, close: 16 * 60 },
];

const toMin = (h: number, m: number) => h * 60 + m;
const fmt = (min: number) => `${String(Math.floor(min / 60)).padStart(2, '0')}:${String(min % 60).padStart(2, '0')}`;

const calcStatus = (): OpenStatus => {
  const now = new Date();
  const day = now.getDay();
  const currentMin = toMin(now.getHours(), now.getMinutes());

  // Check if currently open
  for (const slot of SLOTS) {
    if (slot.days.includes(day) && currentMin >= slot.open && currentMin < slot.close) {
      // Find closing time of current slot
      const closeLabel = fmt(slot.close);
      return {
        isOpen: true,
        label: 'Jetzt geöffnet',
        sublabel: `Schließt heute um ${closeLabel} Uhr`,
        color: 'green',
      };
    }
  }

  // Find next opening slot
  let nextOpen: { day: number; min: number } | null = null;
  for (let d = 0; d <= 7; d++) {
    const checkDay = (day + d) % 7;
    const checkSlots = SLOTS.filter((s) => s.days.includes(checkDay)).sort((a, b) => a.open - b.open);
    for (const slot of checkSlots) {
      if (d === 0 && slot.open <= currentMin) continue;
      nextOpen = { day: checkDay, min: slot.open };
      break;
    }
    if (nextOpen) break;
  }

  const dayNames = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
  let sublabel = 'WhatsApp 24/7';
  if (nextOpen) {
    const isTomorrow = nextOpen.day === (day + 1) % 7;
    const isToday = nextOpen.day === day;
    const prefix = isToday ? 'Öffnet heute' : isTomorrow ? 'Öffnet morgen' : `Öffnet ${dayNames[nextOpen.day]}`;
    sublabel = `${prefix} um ${fmt(nextOpen.min)} Uhr`;
  }

  return {
    isOpen: false,
    label: 'Geschlossen',
    sublabel,
    color: 'red',
  };
};

const useOpenStatus = (): OpenStatus => {
  const [status, setStatus] = useState<OpenStatus>(calcStatus);

  useEffect(() => {
    const interval = setInterval(() => setStatus(calcStatus()), 60_000);
    return () => clearInterval(interval);
  }, []);

  return status;
};

export default useOpenStatus;
