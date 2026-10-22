// Vercel-Funktion: nimmt Formular-Anfragen entgegen und schickt sie ausschließlich per Telegram-Bot.
//
// Umgebungsvariablen (Vercel → Settings → Environment Variables):
//   TELEGRAM_BOT_TOKEN  Token vom @BotFather, z. B. 123456789:AA...
//   TELEGRAM_CHAT_ID    Chat-ID des Empfängers oder der Gruppe (mehrere mit Komma)

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const clean = (v, max) => String(v ?? '').replace(/\s+/g, ' ').trim().slice(0, max);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  body = body || {};

  // Spam-Falle: unsichtbares Feld, das nur Bots ausfüllen
  if (body.website) return res.status(200).json({ ok: true });

  const leistung = clean(body.leistung, 80);
  const vorname = clean(body.vorname, 60);
  const nachname = clean(body.nachname, 60);
  const telefon = clean(body.telefon, 30);

  if (!leistung || !vorname || !nachname || telefon.replace(/\D/g, '').length < 6) {
    return res.status(400).json({ ok: false, error: 'Bitte alle Felder ausfüllen.' });
  }

  const { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } = process.env;
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.error('Telegram-Umgebungsvariablen fehlen');
    return res.status(500).json({ ok: false, error: 'Konfiguration fehlt.' });
  }

  const tel = telefon.replace(/[^\d+]/g, '');
  const text =
    `🚗 <b>Neue Website-Anfrage</b>\n\n` +
    `<b>Leistung:</b> ${esc(leistung)}\n` +
    `<b>Name:</b> ${esc(vorname)} ${esc(nachname)}\n` +
    `<b>Rufnummer:</b> ${esc(telefon)}\n\n` +
    `💬 <a href="https://wa.me/${tel.replace(/^\+/, '').replace(/^00/, '').replace(/^0/, '49')}">Per WhatsApp antworten</a>`;

  const chats = TELEGRAM_CHAT_ID.split(',').map((c) => c.trim()).filter(Boolean);

  try {
    const results = await Promise.all(
      chats.map((chat_id) =>
        fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chat_id, text, parse_mode: 'HTML', disable_web_page_preview: true }),
        }),
      ),
    );
    const failed = [];
    for (const r of results) if (!r.ok) failed.push(await r.text());
    if (failed.length === results.length) {
      console.error('Telegram-Fehler:', failed.join(' | '));
      return res.status(502).json({ ok: false, error: 'Senden fehlgeschlagen.' });
    }
    if (failed.length) console.error('Teilweise fehlgeschlagen:', failed.join(' | '));
    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error('Telegram nicht erreichbar:', e);
    return res.status(502).json({ ok: false, error: 'Senden fehlgeschlagen.' });
  }
}
