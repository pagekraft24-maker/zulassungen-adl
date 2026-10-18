import { Link } from 'react-router-dom';
import useSEO from '@/hooks/useSEO';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';

const DatenschutzPage = () => {
  useSEO({
    title: 'Datenschutzerklärung · Zulassungsdienst an der Lippe',
    description: 'Datenschutzerklärung des Zulassungsdienst an der Lippe (HSZ Digital GmbH) gemäß DSGVO. Informationen zur Verarbeitung personenbezogener Daten bei der Kfz-Zulassung in Lünen.',
    keywords: 'Datenschutz Zulassungsdienst Lünen, DSGVO Kfz-Zulassung, Datenschutzerklärung',
    canonical: '/datenschutz',
    noindex: true,
  });

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-18">
        {/* Hero */}
        <section className="bg-navy-950 py-14 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors cursor-pointer"
            >
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-arrow-left-line"></i>
              </div>
              Zurück zur Startseite
            </Link>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              Datenschutzerklärung
            </h1>
            <p className="text-white/50 text-sm mt-3">Stand: Mai 2026</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 md:px-6 flex flex-col gap-6">

            {/* 1. Verantwortlicher */}
            <div className="bg-gray-50 rounded-xl border border-gray-100 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-extrabold text-navy-950 mb-6">
                1. Verantwortlicher im Sinne der DSGVO
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) und anderer nationaler
                Datenschutzgesetze sowie sonstiger datenschutzrechtlicher Bestimmungen ist:
              </p>
              <div className="bg-white rounded-lg border border-gray-200 p-5 flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-navy-100 rounded-lg shrink-0 mt-0.5">
                    <i className="ri-building-2-line text-navy-700 text-sm"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900 mb-0.5 text-sm">Unternehmen</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      HSZ Digital GmbH<br />
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-navy-100 rounded-lg shrink-0 mt-0.5">
                    <i className="ri-map-pin-line text-navy-700 text-sm"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900 mb-0.5 text-sm">Adresse</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Willy-Brandt-Platz 6<br />
                      44532 Lünen<br />
                      Deutschland
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-navy-100 rounded-lg shrink-0 mt-0.5">
                    <i className="ri-phone-line text-navy-700 text-sm"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900 mb-0.5 text-sm">Telefon</p>
                    <a href="tel:+4923063548896" className="text-navy-700 hover:underline text-sm">
                      023063548896
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-navy-100 rounded-lg shrink-0 mt-0.5">
                    <i className="ri-mail-line text-navy-700 text-sm"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900 mb-0.5 text-sm">E-Mail</p>
                    <a href="mailto:service@zulassungen-adl.de" className="text-navy-700 hover:underline text-sm">
                      service@zulassungen-adl.de
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-navy-100 rounded-lg shrink-0 mt-0.5">
                    <i className="ri-global-line text-navy-700 text-sm"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900 mb-0.5 text-sm">Website</p>
                    <a
                      href="https://www.zulassungen-adl.de"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-navy-700 hover:underline text-sm"
                    >
                      https://www.zulassungen-adl.de
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Datenschutzbeauftragter */}
            <div className="bg-gray-50 rounded-xl border border-gray-100 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-extrabold text-navy-950 mb-4">
                2. Datenschutzbeauftragter
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Sie erreichen unseren Datenschutzbeauftragten unter:
              </p>
              <div className="bg-white rounded-lg border border-gray-200 p-5 flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-navy-100 rounded-lg shrink-0 mt-0.5">
                    <i className="ri-mail-line text-navy-700 text-sm"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900 mb-0.5 text-sm">E-Mail Datenschutz</p>
                    <a href="mailto:service@zulassungen-adl.de" className="text-navy-700 hover:underline text-sm">
                      service@zulassungen-adl.de
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-navy-100 rounded-lg shrink-0 mt-0.5">
                    <i className="ri-map-pin-line text-navy-700 text-sm"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900 mb-0.5 text-sm">c/o Firmenadresse</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      HSZ Digital GmbH · Willy-Brandt-Platz 6 · 44532 Lünen
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed mt-4 p-3 bg-amber-50 border border-amber-100 rounded-lg">
                <strong>Hinweis:</strong> Bei in der Regel mindestens 20 Personen, die ständig mit der automatisierten
                Verarbeitung personenbezogener Daten beschäftigt sind, oder bei umfangreicher Verarbeitung besonderer
                Datenkategorien ist die Benennung eines DSB nach § 38 BDSG verpflichtend. Aufgrund der Verarbeitung
                halterbezogener Kfz-Daten in größerem Umfang empfehlen wir die Bestellung dringend.
              </p>
            </div>

            {/* 3. Allgemeines */}
            <div className="bg-gray-50 rounded-xl border border-gray-100 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-extrabold text-navy-950 mb-6">
                3. Allgemeines zur Datenverarbeitung
              </h2>

              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="text-base font-bold text-navy-900 mb-2">3.1 Umfang der Verarbeitung</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Wir erheben und verwenden personenbezogene Daten unserer Nutzer und Kunden grundsätzlich nur,
                    soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Dienstleistungen
                    rund um die Kfz-Zulassung (Außerbetriebsetzung, Umschreibung, Neuzulassung, Wiederzulassung,
                    Halterwechsel, Adressänderung, Wunschkennzeichen-Reservierung etc.) erforderlich ist.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-navy-900 mb-3">3.2 Rechtsgrundlagen</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    Die Verarbeitung personenbezogener Daten erfolgt auf Grundlage folgender Vorschriften:
                  </p>
                  <ul className="flex flex-col gap-2">
                    {[
                      { art: 'Art. 6 Abs. 1 lit. a DSGVO', desc: 'soweit eine Einwilligung der betroffenen Person vorliegt (z. B. WhatsApp-Kommunikation, Newsletter)' },
                      { art: 'Art. 6 Abs. 1 lit. b DSGVO', desc: 'zur Erfüllung eines Vertrages oder zur Durchführung vorvertraglicher Maßnahmen (Zulassungsdienstleistung)' },
                      { art: 'Art. 6 Abs. 1 lit. c DSGVO', desc: 'zur Erfüllung einer rechtlichen Verpflichtung (z. B. Fahrzeug-Zulassungsverordnung [FZV], Straßenverkehrsgesetz [StVG], steuer- und handelsrechtliche Aufbewahrungspflichten)' },
                      { art: 'Art. 6 Abs. 1 lit. f DSGVO', desc: 'zur Wahrung berechtigter Interessen (z. B. IT-Sicherheit, Betrugsprävention, Beweissicherung)' },
                    ].map((item) => (
                      <li key={item.art} className="flex items-start gap-3 bg-white rounded-lg border border-gray-200 p-3">
                        <div className="w-4 h-4 flex items-center justify-center mt-0.5 shrink-0">
                          <i className="ri-checkbox-circle-line text-navy-600 text-sm"></i>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          <strong className="text-navy-800">{item.art}</strong> – {item.desc}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-bold text-navy-900 mb-3">3.3 Datenlöschung und Speicherdauer</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    Personenbezogene Daten werden gelöscht oder gesperrt, sobald der Zweck der Speicherung entfällt.
                    Eine darüber hinausgehende Speicherung erfolgt nur, soweit gesetzliche Aufbewahrungspflichten
                    dies erfordern – insbesondere:
                  </p>
                  <ul className="flex flex-col gap-2">
                    {[
                      { duration: '10 Jahre', desc: 'für Buchungsbelege, Rechnungen, Verträge (§ 147 AO, § 257 HGB)' },
                      { duration: '6 Jahre', desc: 'für sonstige geschäftliche Korrespondenz (§ 147 AO)' },
                      { duration: 'Bis zu 3 Jahre', desc: 'nach Abschluss der Zulassungsdienstleistung zur Beweissicherung (§ 195 BGB)' },
                    ].map((item) => (
                      <li key={item.duration} className="flex items-start gap-3 bg-white rounded-lg border border-gray-200 p-3">
                        <div className="shrink-0 mt-0.5">
                          <span className="inline-block bg-navy-100 text-navy-800 text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                            {item.duration}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-600 text-sm leading-relaxed mt-3">
                    Halterbezogene Daten, die nicht von Aufbewahrungspflichten erfasst sind, werden unverzüglich
                    nach Abschluss des Zulassungsvorgangs und Ablauf etwaiger Reklamationsfristen gelöscht.
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Logfiles */}
            <div className="bg-gray-50 rounded-xl border border-gray-100 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-extrabold text-navy-950 mb-6">
                4. Bereitstellung der Website und Erstellung von Logfiles
              </h2>

              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="text-base font-bold text-navy-900 mb-2">4.1 Beschreibung und Umfang der Datenverarbeitung</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    Bei jedem Aufruf unserer Website erfasst unser System automatisiert Daten und Informationen
                    vom Computersystem des aufrufenden Rechners. Folgende Daten werden hierbei erhoben:
                  </p>
                  <ul className="flex flex-col gap-1.5">
                    {[
                      'IP-Adresse des Nutzers (in gekürzter Form, soweit technisch möglich)',
                      'Datum und Uhrzeit des Zugriffs',
                      'Inhalt der Anforderung (konkrete Seite/Datei)',
                      'Zugriffsstatus / HTTP-Statuscode',
                      'Jeweils übertragene Datenmenge',
                      'Website, von der die Anforderung kommt (Referrer)',
                      'Browser, Betriebssystem und dessen Oberfläche, Sprache und Version der Browsersoftware',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <div className="w-4 h-4 flex items-center justify-center mt-0.5 shrink-0">
                          <i className="ri-arrow-right-s-line text-navy-500 text-sm"></i>
                        </div>
                        <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-600 text-sm leading-relaxed mt-3">
                    Diese Daten werden in den Logfiles unseres Systems gespeichert. Eine Speicherung dieser
                    Daten zusammen mit anderen personenbezogenen Daten des Nutzers findet nicht statt.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-navy-900 mb-2">4.2 Rechtsgrundlage</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Rechtsgrundlage für die vorübergehende Speicherung der Daten und der Logfiles ist
                    Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in der Sicherstellung
                    der technischen Funktionsfähigkeit, der IT-Sicherheit und der Aufklärung von Missbrauch.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-navy-900 mb-2">4.3 Speicherdauer</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Die Logfiles werden nach spätestens <strong>7 Tagen</strong> gelöscht, sofern keine
                    sicherheitsrelevanten Vorfälle eine längere Aufbewahrung erfordern. In diesem Fall werden
                    die IP-Adressen gekürzt, sodass eine Zuordnung nicht mehr möglich ist.
                  </p>
                </div>
              </div>
            </div>

            {/* 5. SSL */}
            <div className="bg-gray-50 rounded-xl border border-gray-100 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-extrabold text-navy-950 mb-4">
                5. SSL-/TLS-Verschlüsselung
              </h2>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-green-100 rounded-xl shrink-0 mt-0.5">
                  <i className="ri-shield-check-line text-green-600 text-lg"></i>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Diese Website nutzt aus Gründen der Sicherheit und zum Schutz der Übertragung vertraulicher
                  Inhalte eine <strong>SSL-/TLS-Verschlüsselung</strong>. Eine verschlüsselte Verbindung erkennen
                  Sie an der Zeichenfolge „https://" in der Adresszeile Ihres Browsers sowie am Schloss-Symbol.
                  Wenn die SSL-/TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln,
                  nicht von Dritten mitgelesen werden.
                </p>
              </div>
            </div>

            {/* 6. Cookies */}
            <div className="bg-gray-50 rounded-xl border border-gray-100 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-extrabold text-navy-950 mb-6">
                6. Cookies und ähnliche Technologien
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden.
              </p>

              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="text-base font-bold text-navy-900 mb-2">6.1 Technisch notwendige Cookies</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Wir setzen Cookies ein, die für den Betrieb der Website technisch erforderlich sind (z. B. Session-Cookie,
                    Spracheinstellung, Cookie-Consent-Status). Rechtsgrundlage: § 25 Abs. 2 Nr. 2 TDDDG i. V. m.
                    Art. 6 Abs. 1 lit. f DSGVO.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-navy-900 mb-2">6.2 Einwilligungsbedürftige Cookies</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Sofern wir Cookies einsetzen, die nicht technisch erforderlich sind (z. B. Analyse, Marketing), erfolgt
                    dies ausschließlich mit Ihrer vorherigen Einwilligung über unser Consent-Management-Tool
                    (§ 25 Abs. 1 TDDDG, Art. 6 Abs. 1 lit. a DSGVO). Sie können Ihre Einwilligung jederzeit mit
                    Wirkung für die Zukunft widerrufen.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-navy-900 mb-3">6.3 Cookie-Übersicht</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-navy-950 text-white">
                          <th className="text-left text-xs font-bold px-4 py-3 rounded-tl-lg">Cookie</th>
                          <th className="text-left text-xs font-bold px-4 py-3">Anbieter</th>
                          <th className="text-left text-xs font-bold px-4 py-3">Zweck</th>
                          <th className="text-left text-xs font-bold px-4 py-3 rounded-tr-lg">Speicherdauer</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { name: 'session_id', provider: 'Eigene Domain', purpose: 'Sitzungsverwaltung', duration: 'Sitzung' },
                          { name: 'cookie_consent', provider: 'Eigene Domain', purpose: 'Speicherung Cookie-Auswahl', duration: '12 Monate' },
                        ].map((row, idx) => (
                          <tr key={row.name} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'}>
                            <td className="px-4 py-3 text-navy-900 font-mono text-xs border-b border-gray-100">{row.name}</td>
                            <td className="px-4 py-3 text-gray-600 text-xs border-b border-gray-100">{row.provider}</td>
                            <td className="px-4 py-3 text-gray-600 text-xs border-b border-gray-100">{row.purpose}</td>
                            <td className="px-4 py-3 text-gray-600 text-xs border-b border-gray-100">{row.duration}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* 7. Kontaktaufnahme */}
            <div className="bg-gray-50 rounded-xl border border-gray-100 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-extrabold text-navy-950 mb-6">
                7. Kontaktaufnahme
              </h2>
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="text-base font-bold text-navy-900 mb-2">7.1 Per E-Mail und Telefon</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Bei Kontaktaufnahme per E-Mail oder Telefon werden Ihre Angaben zur Bearbeitung der Anfrage sowie
                    für den Fall von Anschlussfragen verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO
                    (Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der effektiven
                    Bearbeitung).
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-bold text-navy-900 mb-2">7.2 Kontaktformular</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Soweit ein Kontaktformular angeboten wird, werden die dort eingegebenen Daten (Name, E-Mail-Adresse,
                    Telefonnummer, Nachrichtentext) bei uns gespeichert. Eine Weitergabe an Dritte findet nicht statt.
                    Die Daten werden ausschließlich für die Bearbeitung der Anfrage verwendet.
                  </p>
                </div>
              </div>
            </div>

            {/* 8. WhatsApp */}
            <div className="bg-gray-50 rounded-xl border border-gray-100 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-extrabold text-navy-950 mb-4">
                8. Kommunikation per WhatsApp
              </h2>

              {/* Hinweisbox */}
              <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                <div className="w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                  <i className="ri-alert-line text-amber-600 text-base"></i>
                </div>
                <p className="text-amber-800 text-xs leading-relaxed">
                  <strong>Wichtiger Hinweis zur Datensicherheit:</strong> WhatsApp wird von der Meta Platforms Ireland Ltd.
                  betrieben, die zur Meta-Gruppe gehört. WhatsApp-Nachrichten sind zwar Ende-zu-Ende-verschlüsselt;
                  Metadaten (Telefonnummer, Zeitpunkt, Empfänger, Kommunikationsverhalten) werden jedoch verarbeitet
                  und können in Drittländer (insbesondere USA) übermittelt werden. Eine Übermittlung halterbezogener
                  Daten und sensibler Zulassungsdokumente per WhatsApp ist mit datenschutzrechtlichen Risiken verbunden
                  und wird von Aufsichtsbehörden als unsicher bewertet.
                </p>
              </div>

              {/* Klarstellungsboxen */}
              <div className="flex flex-col gap-3 mb-6">
                <div className="flex items-start gap-3 bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">
                    <i className="ri-checkbox-circle-fill text-green-600 text-base"></i>
                  </div>
                  <div>
                    <p className="font-bold text-green-800 text-sm mb-1">WhatsApp = Erstkontakt – nicht die Zulassung selbst</p>
                    <p className="text-green-800 text-xs leading-relaxed">
                      Der WhatsApp-Kanal dient <strong>ausschließlich als erster Kontaktweg</strong> zur Anfrage,
                      Terminabsprache oder Rückfrage. Die eigentliche Kfz-Zulassung, Ummeldung oder Abmeldung
                      wird <strong>nicht über WhatsApp durchgeführt</strong>, sondern ausschließlich über unseren
                      sicheren Online-Service oder persönlich in unserem Büro.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">
                    <i className="ri-lock-fill text-green-600 text-base"></i>
                  </div>
                  <div>
                    <p className="font-bold text-green-800 text-sm mb-1">Keine Weitergabe an Dritte</p>
                    <p className="text-green-800 text-xs leading-relaxed">
                      Ihre über WhatsApp übermittelten Daten werden <strong>ausschließlich intern</strong> im
                      Unternehmen verarbeitet und <strong>nicht an Dritte weitergegeben</strong> – mit Ausnahme
                      der technisch bedingten Verarbeitung durch Meta/WhatsApp als Plattformbetreiber (siehe
                      Hinweis oben). Eine Weitergabe Ihrer persönlichen Daten an Behörden oder sonstige Dritte
                      erfolgt erst im Rahmen des eigentlichen Zulassungsvorgangs über den sicheren Online-Service
                      und ausschließlich auf gesetzlicher Grundlage.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="text-base font-bold text-navy-900 mb-3">8.1 Beschreibung und Zweck</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    Sofern Sie uns über WhatsApp kontaktieren, verarbeiten wir die folgenden Daten:
                  </p>
                  <ul className="flex flex-col gap-1.5">
                    {[
                      'Ihre Mobilfunknummer',
                      'Ihren WhatsApp-Profilnamen und ggf. Profilbild',
                      'Die übermittelten Nachrichteninhalte (Text, Bilder, Dokumente, Sprachnachrichten)',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <div className="w-4 h-4 flex items-center justify-center mt-0.5 shrink-0">
                          <i className="ri-arrow-right-s-line text-navy-500 text-sm"></i>
                        </div>
                        <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-bold text-navy-900 mb-2">8.2 Rechtsgrundlage</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    Die Verarbeitung erfolgt auf Grundlage Ihrer <strong>ausdrücklichen Einwilligung gemäß
                    Art. 6 Abs. 1 lit. a DSGVO</strong> sowie zur Durchführung des Auftrags gemäß Art. 6 Abs. 1
                    lit. b DSGVO. Sofern besondere Kategorien personenbezogener Daten übermittelt werden, stützen
                    wir uns zusätzlich auf Art. 9 Abs. 2 lit. a DSGVO (ausdrückliche Einwilligung).
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    Mit dem Versand einer WhatsApp-Nachricht an unsere Geschäftsnummer willigen Sie ausdrücklich ein, dass:
                  </p>
                  <ol className="flex flex-col gap-2">
                    {[
                      'die übermittelten Daten über die Server von Meta (auch außerhalb der EU) verarbeitet werden,',
                      'Metadaten Ihrer Kommunikation Meta zugänglich werden können,',
                      'eine datenschutzrechtlich sichere Übermittlung im Sinne von Art. 32 DSGVO über WhatsApp nicht garantiert werden kann.',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 bg-white rounded-lg border border-gray-200 p-3">
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-navy-100 text-navy-800 text-xs font-bold shrink-0 mt-0.5">{i + 1}</span>
                        <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div>
                  <h3 className="text-base font-bold text-navy-900 mb-2">8.3 Drittlandübermittlung</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    WhatsApp / Meta verarbeitet Daten auch in den USA. Die Übermittlung erfolgt auf Grundlage des{' '}
                    <strong>EU-US Data Privacy Framework</strong> (Angemessenheitsbeschluss der EU-Kommission vom
                    10.07.2023) bzw. ergänzend auf Grundlage von <strong>EU-Standardvertragsklauseln</strong> gemäß
                    Art. 46 Abs. 2 lit. c DSGVO. Trotz dieser Schutzmechanismen können wir nicht ausschließen, dass
                    US-Behörden Zugriff auf die Daten nehmen können.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-navy-900 mb-3">8.4 Alternativen</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    Wir weisen Sie ausdrücklich darauf hin, dass Sie uns Ihre Daten und Unterlagen alternativ und
                    mit höherem Datenschutzniveau über folgende Wege übermitteln können:
                  </p>
                  <ul className="flex flex-col gap-2">
                    {[
                      { icon: 'ri-global-line', text: 'Über unseren verschlüsselten Online-Service unter https://www.zulassungen-adl.de' },
                      { icon: 'ri-mail-lock-line', text: 'Per verschlüsselter E-Mail (PGP/S-MIME)' },
                      { icon: 'ri-mail-send-line', text: 'Per Post an unsere Geschäftsadresse' },
                      { icon: 'ri-map-pin-2-line', text: 'Durch persönliche Übergabe in unserem Geschäftsbüro' },
                    ].map((item) => (
                      <li key={item.icon} className="flex items-center gap-3 bg-white rounded-lg border border-gray-200 p-3">
                        <div className="w-8 h-8 flex items-center justify-center bg-navy-100 rounded-lg shrink-0">
                          <i className={`${item.icon} text-navy-700 text-sm`}></i>
                        </div>
                        <span className="text-gray-600 text-sm leading-relaxed">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-bold text-navy-900 mb-2">8.5 Widerruf</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen, indem Sie uns per
                    E-Mail, Post oder über einen anderen Kommunikationsweg informieren. Die Rechtmäßigkeit der bis
                    zum Widerruf erfolgten Verarbeitung bleibt unberührt.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-navy-900 mb-2">8.6 Datenschutzhinweise von WhatsApp</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Weitere Informationen zum Umgang mit Ihren Daten durch WhatsApp finden Sie in der
                    WhatsApp-Datenschutzrichtlinie:{' '}
                    <a
                      href="https://www.whatsapp.com/legal/privacy-policy-eea"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-navy-700 hover:underline break-all"
                    >
                      https://www.whatsapp.com/legal/privacy-policy-eea
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* 9. Online-Service */}
            <div className="bg-gray-50 rounded-xl border border-gray-100 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-extrabold text-navy-950 mb-6">
                9. Online-Service zur Kfz-Zulassung
              </h2>
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="text-base font-bold text-navy-900 mb-3">9.1 Verarbeitete Daten</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Im Rahmen unseres Online-Services verarbeiten wir die zur Beauftragung und Durchführung der
                    Zulassungsdienstleistung erforderlichen Daten:
                  </p>
                  <div className="flex flex-col gap-4">
                    {[
                      {
                        title: 'Halterdaten',
                        icon: 'ri-user-line',
                        items: [
                          'Vor- und Nachname, ggf. Firma',
                          'Anschrift (Straße, PLZ, Ort)',
                          'Geburtsdatum und -ort',
                          'Staatsangehörigkeit',
                          'Ausweisdaten (Personalausweis / Reisepass)',
                          'Telefonnummer, E-Mail-Adresse',
                          'Bankverbindung (für Kfz-Steuer, SEPA-Mandat)',
                        ],
                      },
                      {
                        title: 'Fahrzeugdaten',
                        icon: 'ri-car-line',
                        items: [
                          'Fahrzeug-Identifizierungsnummer (FIN)',
                          'Daten der Zulassungsbescheinigung Teil I und II',
                          'HU-/AU-Daten',
                          'eVB-Nummer (elektronische Versicherungsbestätigung)',
                          'Wunschkennzeichen (sofern reserviert)',
                        ],
                      },
                      {
                        title: 'Vollmacht- und Identifikationsdaten',
                        icon: 'ri-file-text-line',
                        items: [
                          'Unterschriebene Vollmacht zur Zulassung',
                          'Kopie des Ausweisdokuments',
                          'ggf. weitere Nachweise (z. B. Handelsregisterauszug bei Firmen)',
                        ],
                      },
                    ].map((group) => (
                      <div key={group.title} className="bg-white rounded-lg border border-gray-200 p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-6 h-6 flex items-center justify-center bg-navy-100 rounded-md shrink-0">
                            <i className={`${group.icon} text-navy-700 text-xs`}></i>
                          </div>
                          <p className="font-semibold text-navy-900 text-sm">{group.title}</p>
                        </div>
                        <ul className="flex flex-col gap-1.5">
                          {group.items.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <div className="w-4 h-4 flex items-center justify-center mt-0.5 shrink-0">
                                <i className="ri-arrow-right-s-line text-navy-400 text-sm"></i>
                              </div>
                              <span className="text-gray-600 text-xs leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-bold text-navy-900 mb-3">9.2 Identitätsfeststellung des Halters</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    Die Identitätsfeststellung des Fahrzeughalters erfolgt in mehreren Stufen:
                  </p>
                  <ol className="flex flex-col gap-2">
                    {[
                      { step: 1, title: 'Erfassung der Halterdaten', desc: 'über das Online-Formular oder den von Ihnen gewählten Kommunikationskanal' },
                      { step: 2, title: 'Vorlage des Ausweisdokuments', desc: 'in Form einer beidseitigen Kopie/Scan (Personalausweis oder Reisepass mit Meldebescheinigung)' },
                      { step: 3, title: 'Abgleich der Halterdaten', desc: 'mit der vorgelegten Vollmacht und dem Ausweisdokument durch unsere geschulten Mitarbeiterinnen und Mitarbeiter' },
                      { step: 4, title: 'Plausibilitätsprüfung', desc: 'zwischen Halterdaten, Fahrzeugdokumenten (insb. Zulassungsbescheinigung Teil II / Halterstellung) und Vollmacht' },
                      { step: 5, title: 'Aufbringung der Qualifizierten Elektronischen Signatur (QES)', desc: 'auf die für die Zulassungsbehörde bzw. das KBA erforderlichen Antragsdokumente durch eine hierzu berechtigte natürliche Person in unserem Hause, nachdem alle vorgenannten Prüfschritte erfolgreich abgeschlossen wurden' },
                    ].map((item) => (
                      <li key={item.step} className="flex items-start gap-3 bg-white rounded-lg border border-gray-200 p-3">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-navy-900 text-white text-xs font-bold shrink-0 mt-0.5">{item.step}</span>
                        <div>
                          <p className="font-semibold text-navy-900 text-sm mb-0.5">{item.title}</p>
                          <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                  <p className="text-gray-500 text-xs leading-relaxed mt-3 p-3 bg-amber-50 border border-amber-100 rounded-lg">
                    Bei Auffälligkeiten oder Zweifeln an der Identität wird die Bearbeitung ausgesetzt und ggf. eine
                    zusätzliche Identifikation (z. B. VideoIdent, persönliches Erscheinen) verlangt.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-navy-900 mb-3">9.3 Rechtsgrundlage</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { art: 'Art. 6 Abs. 1 lit. b DSGVO', desc: 'Vertragserfüllung' },
                      { art: 'Art. 6 Abs. 1 lit. c DSGVO', desc: 'i. V. m. der Fahrzeug-Zulassungsverordnung (FZV), der Großkundenschnittstellen-Verordnung und § 36 StVG (gesetzliche Verpflichtung)' },
                      { art: 'Art. 6 Abs. 1 lit. f DSGVO', desc: 'berechtigtes Interesse an Identitätssicherheit und Betrugsprevention' },
                    ].map((item) => (
                      <li key={item.art} className="flex items-start gap-3 bg-white rounded-lg border border-gray-200 p-3">
                        <div className="w-4 h-4 flex items-center justify-center mt-0.5 shrink-0">
                          <i className="ri-checkbox-circle-line text-navy-600 text-sm"></i>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          <strong className="text-navy-800">{item.art}</strong> – {item.desc}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* 10. GKS */}
            <div className="bg-gray-50 rounded-xl border border-gray-100 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-extrabold text-navy-950 mb-6">
                10. Großkundenschnittstelle (GKS) des Kraftfahrt-Bundesamtes (KBA)
              </h2>
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="text-base font-bold text-navy-900 mb-2">10.1 Beschreibung</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Zur elektronischen Übermittlung von Zulassungsanträgen nutzen wir die Großkundenschnittstelle
                    (GKS) des Kraftfahrt-Bundesamtes (KBA) bzw. wir bedienen uns hierfür eines beim KBA registrierten
                    Großkunden. Aktuell erfolgt die Antragstellung über:
                  </p>
                  <div className="bg-white rounded-lg border border-gray-200 p-4 flex items-start gap-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-navy-100 rounded-lg shrink-0 mt-0.5">
                      <i className="ri-building-4-line text-navy-700 text-sm"></i>
                    </div>
                    <div>
                      <p className="font-semibold text-navy-900 text-sm">HSZ Digital GmbH</p>
                      <p className="text-gray-500 text-xs mt-0.5">als beim KBA registrierter Großkunde</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-bold text-navy-900 mb-3">10.2 Übermittlungsweg</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    Die Übertragung Ihrer Antragsdaten von unserem System zum System der HSZ Digital GmbH und weiter
                    an das KBA bzw. die zuständige Zulassungsbehörde erfolgt ausschließlich über:
                  </p>
                  <ul className="flex flex-col gap-2 mb-4">
                    {[
                      { icon: 'ri-lock-2-line', text: 'Verschlüsselte Verbindungen (TLS 1.2 oder höher) über eine gesicherte technische Schnittstelle' },
                      { icon: 'ri-shield-user-line', text: 'Anmeldung mittels personalisierter Zugangsdaten und Zwei-Faktor-Authentifizierung' },
                      { icon: 'ri-pen-nib-line', text: 'Antragsdokumente werden mit einer Qualifizierten Elektronischen Signatur (QES) nach eIDAS-Verordnung signiert' },
                    ].map((item) => (
                      <li key={item.icon} className="flex items-center gap-3 bg-white rounded-lg border border-gray-200 p-3">
                        <div className="w-8 h-8 flex items-center justify-center bg-green-100 rounded-lg shrink-0">
                          <i className={`${item.icon} text-green-700 text-sm`}></i>
                        </div>
                        <span className="text-gray-600 text-sm leading-relaxed">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-start gap-3 bg-green-50 border border-green-200 rounded-lg p-3">
                    <div className="w-4 h-4 flex items-center justify-center shrink-0 mt-0.5">
                      <i className="ri-checkbox-circle-fill text-green-600 text-sm"></i>
                    </div>
                    <p className="text-green-800 text-xs leading-relaxed">
                      Eine Übermittlung halterbezogener Daten an die HSZ Digital GmbH per WhatsApp, unverschlüsselter
                      E-Mail oder ähnlichen unsicheren Kanälen findet <strong>nicht</strong> statt.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-bold text-navy-900 mb-2">10.3 Auftragsverarbeitung</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Mit der HSZ Digital GmbH besteht ein Vertrag zur Auftragsverarbeitung gemäß Art. 28 DSGVO.
                    Eine Verarbeitung Ihrer Daten erfolgt ausschließlich nach Weisung des Verantwortlichen und zu
                    den im Auftragsverarbeitungsvertrag festgelegten Zwecken.
                  </p>
                </div>
              </div>
            </div>

            {/* 11. QES */}
            <div className="bg-gray-50 rounded-xl border border-gray-100 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-extrabold text-navy-950 mb-4">
                11. Qualifizierte Elektronische Signatur (QES)
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                Für die rechtsverbindliche elektronische Antragstellung verwenden wir Qualifizierte Elektronische
                Signaturen gemäß <strong>Verordnung (EU) Nr. 910/2014 (eIDAS-VO)</strong>. Die hierfür eingesetzten
                Vertrauensdienste werden von einem qualifizierten Vertrauensdiensteanbieter (Trust Service Provider,
                TSP) bereitgestellt.
              </p>
              <div className="bg-white rounded-lg border border-gray-200 p-4 flex items-start gap-3 mb-5">
                <div className="w-8 h-8 flex items-center justify-center bg-navy-100 rounded-lg shrink-0 mt-0.5">
                  <i className="ri-award-line text-navy-700 text-sm"></i>
                </div>
                <div>
                  <p className="font-semibold text-navy-900 text-sm mb-0.5">Qualifizierter Vertrauensdiensteanbieter (TSP)</p>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    z. B. D-Trust GmbH / Bundesdruckerei / DocuSign EU / sproof
                  </p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Dem Vertrauensdiensteanbieter werden ausschließlich diejenigen Daten zur Verfügung gestellt, die
                zur Identifikation des Signaturberechtigten und zur Erzeugung der Signatur erforderlich sind.
                Auf die Halterdaten greift der Anbieter grundsätzlich nicht zu.
              </p>
            </div>

            {/* 12. Empfänger */}
            <div className="bg-gray-50 rounded-xl border border-gray-100 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-extrabold text-navy-950 mb-4">
                12. Empfänger und Weitergabe von Daten
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                Im Rahmen der Zulassungsdienstleistung werden Ihre Daten an folgende Empfängerkategorien übermittelt:
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-navy-950 text-white">
                      <th className="text-left text-xs font-bold px-4 py-3 rounded-tl-lg">Empfänger</th>
                      <th className="text-left text-xs font-bold px-4 py-3">Zweck</th>
                      <th className="text-left text-xs font-bold px-4 py-3 rounded-tr-lg">Rechtsgrundlage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { receiver: 'Zuständige Zulassungsbehörde (Stadt/Landkreis)', purpose: 'Durchführung der Zulassung', basis: 'Art. 6 Abs. 1 lit. c DSGVO i. V. m. FZV' },
                      { receiver: 'Kraftfahrt-Bundesamt (KBA), Flensburg', purpose: 'Zentrales Fahrzeugregister', basis: '§ 31 StVG, § 33 StVG' },
                      { receiver: 'HSZ Digital GmbH', purpose: 'Übermittlung über GKS', basis: 'Art. 28 DSGVO (AVV)' },
                      { receiver: 'Vertrauensdiensteanbieter (QES)', purpose: 'Signaturerstellung', basis: 'Art. 6 Abs. 1 lit. b DSGVO' },
                      { receiver: 'Versicherungsunternehmen', purpose: 'eVB-Validierung', basis: 'Art. 6 Abs. 1 lit. b DSGVO' },
                      { receiver: 'Finanzbehörden', purpose: 'Kfz-Steuer-Erhebung', basis: '§ 3 KraftStG' },
                      { receiver: 'Hausbank / Zahlungsdienstleister', purpose: 'Zahlungsabwicklung', basis: 'Art. 6 Abs. 1 lit. b DSGVO' },
                      { receiver: 'Steuerberater / Wirtschaftsprüfer', purpose: 'Gesetzliche Aufbewahrung', basis: 'Art. 6 Abs. 1 lit. c DSGVO' },
                      { receiver: 'IT-Dienstleister, Hosting-Provider', purpose: 'Betrieb der Infrastruktur', basis: 'Art. 28 DSGVO (AVV)' },
                    ].map((row, idx) => (
                      <tr key={row.receiver} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'}>
                        <td className="px-4 py-3 text-navy-900 text-xs font-medium border-b border-gray-100 leading-snug">{row.receiver}</td>
                        <td className="px-4 py-3 text-gray-600 text-xs border-b border-gray-100 leading-snug">{row.purpose}</td>
                        <td className="px-4 py-3 text-gray-600 text-xs border-b border-gray-100 leading-snug">{row.basis}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex items-start gap-3 bg-amber-50 border border-amber-100 rounded-lg p-4">
                <div className="w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                  <i className="ri-time-line text-amber-600 text-sm"></i>
                </div>
                <div>
                  <p className="font-semibold text-amber-800 text-sm mb-1">Historischer Hinweis</p>
                  <p className="text-amber-800 text-xs leading-relaxed">
                    In der Vergangenheit erfolgte die Antragstellung über die <strong>H&amp;B kfzportal24 GmbH</strong>.
                    Soweit Sie unsere Dienste in diesem Zeitraum in Anspruch genommen haben, wurden Ihre Daten über
                    deren Schnittstelle übermittelt. Eine Weiterleitung erfolgt seit der Umstellung auf die HSZ Digital
                    GmbH nicht mehr.
                  </p>
                </div>
              </div>
            </div>

            {/* 13. Auftragsverarbeitung */}
            <div className="bg-gray-50 rounded-xl border border-gray-100 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-extrabold text-navy-950 mb-4">
                13. Auftragsverarbeitung
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                Soweit wir externe Dienstleister mit der Verarbeitung personenbezogener Daten beauftragen, erfolgt
                dies stets auf Grundlage eines Auftragsverarbeitungsvertrages gemäß <strong>Art. 28 DSGVO</strong>.
                Die Auftragsverarbeiter sind sorgfältig ausgewählt, vertraglich gebunden und unterliegen unserer
                regelmäßigen Kontrolle.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">Zu unseren Auftragsverarbeitern zählen insbesondere:</p>
              <ul className="flex flex-col gap-2 mb-5">
                {[
                  { icon: 'ri-server-line', label: 'Hosting-Provider' },
                  { icon: 'ri-mail-line', label: 'E-Mail-Dienstleister' },
                  { icon: 'ri-database-2-line', label: 'Backup-Dienstleister' },
                  { icon: 'ri-tools-line', label: 'IT-Wartungsdienstleister' },
                  { icon: 'ri-building-4-line', label: 'HSZ Digital GmbH (GKS-Schnittstelle)' },
                  { icon: 'ri-award-line', label: 'Vertrauensdiensteanbieter QES' },
                  { icon: 'ri-customer-service-2-line', label: 'ggf. CRM-/Ticketsystem-Anbieter' },
                ].map((item) => (
                  <li key={item.label} className="flex items-center gap-3 bg-white rounded-lg border border-gray-200 p-3">
                    <div className="w-7 h-7 flex items-center justify-center bg-navy-100 rounded-lg shrink-0">
                      <i className={`${item.icon} text-navy-700 text-xs`}></i>
                    </div>
                    <span className="text-gray-600 text-sm">{item.label}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-500 text-xs leading-relaxed p-3 bg-gray-100 rounded-lg">
                Eine vollständige Liste der Auftragsverarbeiter stellen wir auf Anfrage gerne zur Verfügung.
              </p>
            </div>

            {/* 14. TOMs */}
            <div className="bg-gray-50 rounded-xl border border-gray-100 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-extrabold text-navy-950 mb-4">
                14. Technische und organisatorische Maßnahmen (TOMs)
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                Wir treffen geeignete technische und organisatorische Maßnahmen gemäß <strong>Art. 32 DSGVO</strong>,
                um Ihre Daten zu schützen. Hierzu zählen insbesondere:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  { icon: 'ri-lock-2-line', text: 'Verschlüsselung der Datenübertragung (TLS/SSL)' },
                  { icon: 'ri-hard-drive-2-line', text: 'Verschlüsselte Speicherung sensibler Daten (At-Rest-Verschlüsselung)' },
                  { icon: 'ri-shield-user-line', text: 'Zugriffskontrolle und Berechtigungskonzept (Need-to-know-Prinzip)' },
                  { icon: 'ri-key-2-line', text: 'Zwei-Faktor-Authentifizierung für sensible Systeme' },
                  { icon: 'ri-graduation-cap-line', text: 'Regelmäßige Schulungen der Mitarbeitenden zum Datenschutz' },
                  { icon: 'ri-file-lock-line', text: 'Verpflichtung der Mitarbeitenden auf das Datengeheimnis' },
                  { icon: 'ri-refresh-line', text: 'Regelmäßige Sicherheits-Updates und Patch-Management' },
                  { icon: 'ri-database-line', text: 'Backup-Konzept mit räumlicher Trennung' },
                  { icon: 'ri-alarm-warning-line', text: 'Notfall- und Incident-Response-Prozesse (Art. 33, 34 DSGVO)' },
                  { icon: 'ri-door-lock-line', text: 'Physische Zutrittskontrolle zum Geschäftsbüro' },
                  { icon: 'ri-delete-bin-6-line', text: 'Sichere Datenträgervernichtung nach DIN 66399' },
                ].map((item) => (
                  <li key={item.text} className="flex items-start gap-3 bg-white rounded-lg border border-gray-200 p-3">
                    <div className="w-7 h-7 flex items-center justify-center bg-green-100 rounded-lg shrink-0 mt-0.5">
                      <i className={`${item.icon} text-green-700 text-xs`}></i>
                    </div>
                    <span className="text-gray-600 text-xs leading-relaxed">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 15. Drittlandübermittlung */}
            <div className="bg-gray-50 rounded-xl border border-gray-100 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-extrabold text-navy-950 mb-4">
                15. Drittlandübermittlung
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Soweit personenbezogene Daten in Drittländer außerhalb der EU/des EWR übermittelt werden
                (insbesondere im Rahmen der WhatsApp-Kommunikation in die USA), erfolgt dies nur:
              </p>
              <ul className="flex flex-col gap-2">
                {[
                  { icon: 'ri-government-line', title: 'Angemessenheitsbeschluss', desc: 'der EU-Kommission (Art. 45 DSGVO)' },
                  { icon: 'ri-file-text-line', title: 'Geeignete Garantien', desc: 'wie EU-Standardvertragsklauseln (Art. 46 DSGVO)' },
                  { icon: 'ri-checkbox-circle-line', title: 'Ausdrückliche Einwilligung', desc: '(Art. 49 Abs. 1 lit. a DSGVO)' },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3 bg-white rounded-lg border border-gray-200 p-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-navy-100 rounded-lg shrink-0 mt-0.5">
                      <i className={`${item.icon} text-navy-700 text-sm`}></i>
                    </div>
                    <div>
                      <p className="font-semibold text-navy-900 text-sm">{item.title}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* 16. Rechte */}
            <div className="bg-gray-50 rounded-xl border border-gray-100 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-extrabold text-navy-950 mb-4">
                16. Rechte der betroffenen Personen
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {[
                  { icon: 'ri-eye-line', title: 'Recht auf Auskunft', desc: 'Art. 15 DSGVO' },
                  { icon: 'ri-edit-line', title: 'Recht auf Berichtigung', desc: 'Art. 16 DSGVO' },
                  { icon: 'ri-delete-bin-line', title: 'Recht auf Löschung', desc: 'Art. 17 DSGVO' },
                  { icon: 'ri-lock-line', title: 'Einschränkung der Verarbeitung', desc: 'Art. 18 DSGVO' },
                  { icon: 'ri-download-line', title: 'Recht auf Datenübertragbarkeit', desc: 'Art. 20 DSGVO' },
                  { icon: 'ri-close-circle-line', title: 'Recht auf Widerspruch', desc: 'Art. 21 DSGVO' },
                  { icon: 'ri-spam-line', title: 'Widerruf erteilter Einwilligungen', desc: 'Art. 7 Abs. 3 DSGVO' },
                  { icon: 'ri-flag-line', title: 'Recht auf Beschwerde', desc: 'bei einer Aufsichtsbehörde (Art. 77 DSGVO)' },
                ].map((right) => (
                  <li key={right.title} className="flex items-center gap-3 bg-white rounded-lg border border-gray-200 p-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-navy-100 rounded-lg shrink-0">
                      <i className={`${right.icon} text-navy-700 text-sm`}></i>
                    </div>
                    <div>
                      <p className="font-semibold text-navy-900 text-sm">{right.title}</p>
                      <p className="text-gray-500 text-xs">{right.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <p className="font-semibold text-navy-900 text-sm mb-2">Geltendmachung Ihrer Rechte</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Zur Wahrnehmung Ihrer Rechte wenden Sie sich bitte an:{' '}
                  <a href="mailto:datenschutz@zulassungen-adl.de" className="text-navy-700 hover:underline font-medium">
                    datenschutz@zulassungen-adl.de
                  </a>{' '}
                  oder an die unter Ziffer 1 genannte Postanschrift.
                </p>
              </div>
            </div>

            {/* 17. Widerspruchsrecht */}
            <div className="bg-gray-50 rounded-xl border border-gray-100 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-extrabold text-navy-950 mb-4">
                17. Widerspruchsrecht (Art. 21 DSGVO)
              </h2>
              <div className="flex items-start gap-4 bg-navy-950 rounded-xl p-5 mb-4">
                <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-lg shrink-0 mt-0.5">
                  <i className="ri-hand-coin-line text-white text-sm"></i>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit
                  gegen die Verarbeitung Sie betreffender personenbezogener Daten, die aufgrund von
                  Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, Widerspruch einzulegen.
                </p>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Wir verarbeiten die personenbezogenen Daten dann nicht mehr, es sei denn, wir können zwingende
                schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten
                überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von
                Rechtsansprüchen.
              </p>
            </div>

            {/* 18. Beschwerderecht */}
            <div className="bg-gray-50 rounded-xl border border-gray-100 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-extrabold text-navy-950 mb-4">
                18. Beschwerderecht bei der Aufsichtsbehörde
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                Unbeschadet anderweitiger Rechtsbehelfe haben Sie das Recht auf Beschwerde bei einer
                Aufsichtsbehörde, insbesondere am Ort Ihres Aufenthalts, Ihres Arbeitsplatzes oder am
                Ort des mutmaßlichen Verstoßes.
              </p>
              <div className="bg-white rounded-lg border border-gray-200 p-4 flex items-start gap-3 mb-5">
                <div className="w-8 h-8 flex items-center justify-center bg-navy-100 rounded-lg shrink-0 mt-0.5">
                  <i className="ri-government-line text-navy-700 text-sm"></i>
                </div>
                <div>
                  <p className="font-semibold text-navy-900 text-sm mb-1">Zuständige Aufsichtsbehörde (NRW)</p>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen<br />
                    Kavalleriestr. 2–4 · 40213 Düsseldorf
                  </p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Eine Liste aller Aufsichtsbehörden findet sich unter:{' '}
                <a
                  href="https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-navy-700 hover:underline break-all"
                >
                  https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html
                </a>
              </p>
            </div>

            {/* 19. Bereitstellungspflicht */}
            <div className="bg-gray-50 rounded-xl border border-gray-100 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-extrabold text-navy-950 mb-4">
                19. Pflicht zur Bereitstellung der Daten
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Die Bereitstellung Ihrer Daten ist teilweise gesetzlich vorgeschrieben (insbesondere durch die
                Fahrzeug-Zulassungsverordnung) oder ergibt sich aus vertraglichen Regelungen. Ohne diese Daten
                ist eine Durchführung der beauftragten Zulassungsdienstleistung nicht möglich.
              </p>
            </div>

            {/* 20. Profiling */}
            <div className="bg-gray-50 rounded-xl border border-gray-100 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-extrabold text-navy-950 mb-4">
                20. Automatisierte Entscheidungsfindung / Profiling
              </h2>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-green-100 rounded-xl shrink-0 mt-0.5">
                  <i className="ri-checkbox-circle-line text-green-600 text-lg"></i>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Eine ausschließlich automatisierte Entscheidungsfindung im Sinne des Art. 22 DSGVO &ndash;
                  einschließlich Profiling &ndash; findet <strong>nicht</strong> statt. Alle Anträge werden
                  vor Übermittlung an die Zulassungsbehörde durch unsere Mitarbeitenden geprüft.
                </p>
              </div>
            </div>

            {/* 21. Änderung */}
            <div className="bg-gray-50 rounded-xl border border-gray-100 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-extrabold text-navy-950 mb-4">
                21. Änderung dieser Datenschutzerklärung
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen
                rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der
                Datenschutzerklärung umzusetzen. Für Ihren erneuten Besuch gilt dann die neue
                Datenschutzerklärung.
              </p>
              <div className="flex items-center gap-3 bg-white rounded-lg border border-gray-200 px-4 py-3">
                <div className="w-7 h-7 flex items-center justify-center bg-navy-100 rounded-lg shrink-0">
                  <i className="ri-calendar-check-line text-navy-700 text-xs"></i>
                </div>
                <p className="text-gray-500 text-sm">
                  Stand dieser Datenschutzerklärung: <strong className="text-navy-900">Mai 2026</strong>
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center py-6">
              <p className="text-gray-500 text-sm mb-4">Fragen zum Datenschutz? Wir helfen gerne weiter.</p>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 bg-navy-900 text-white text-sm font-bold px-6 py-3 rounded-lg hover:bg-navy-800 transition-colors cursor-pointer whitespace-nowrap"
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-mail-send-line"></i>
                </div>
                Kontakt aufnehmen
              </Link>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default DatenschutzPage;