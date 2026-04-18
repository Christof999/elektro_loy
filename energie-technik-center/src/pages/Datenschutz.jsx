import { useMeta } from '../hooks/useMeta';

export default function Datenschutz() {
  useMeta({
    title: 'Datenschutz',
    description: 'Datenschutzerklärung der Loy GmbH & Co. KG gemäß DSGVO – Informationen zur Verarbeitung Ihrer personenbezogenen Daten.',
  });

  return (
    <>
      {/* Hero */}
      <section style={{
        paddingTop: '8rem', paddingBottom: '4rem',
        background: 'linear-gradient(155deg, #080e1a 0%, #0d1f38 60%, #0a1520 100%)',
      }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
            <div style={{ width: 28, height: 3, background: 'var(--primary)', borderRadius: 2 }} />
            <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>
              Rechtliches
            </span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 900, color: '#fff', letterSpacing: '-0.03em' }}>
            Datenschutzerklärung
          </h1>
        </div>
      </section>

      {/* Content */}
      <section aria-label="Datenschutzerklärung" className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <div className="card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>

            <Block title="1. Verantwortlicher">
              <p>
                Loy GmbH & Co. KG<br />
                Am Gewerbepark 4<br />
                91735 Muhr am See<br />
                Telefon: 09831 880960<br />
                E-Mail: <Placeholder text="info@[ihre-domain].de" />
              </p>
            </Block>

            <Block title="2. Erhebung und Speicherung personenbezogener Daten">
              <p>
                Beim Besuch unserer Website werden durch den auf Ihrem Endgerät zum Einsatz
                kommenden Browser automatisch Informationen an den Server unserer Website gesendet.
                Diese Informationen werden temporär in einem sogenannten Logfile gespeichert.
                Folgende Informationen werden dabei ohne Ihr Zutun erfasst und bis zur
                automatisierten Löschung gespeichert:
              </p>
              <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <li>IP-Adresse des anfragenden Rechners</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Name und URL der abgerufenen Datei</li>
                <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
                <li>Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners</li>
              </ul>
            </Block>

            <Block title="3. Kontaktformular">
              <p>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben
                aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten
                zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns
                gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <p style={{ marginTop: '0.5rem' }}>
                Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung).
              </p>
            </Block>

            <Block title="4. Google Maps">
              <p>
                Auf unserer Website nutzen wir Verlinkungen zu Google Maps (Google Ireland Limited,
                Gordon House, Barrow Street, Dublin 4, Irland). Bei Nutzung dieser Links können
                Daten an Google übertragen werden. Weitere Informationen finden Sie in der{' '}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer"
                  style={{ color: 'var(--primary-dark)' }}>
                  Datenschutzerklärung von Google
                </a>.
              </p>
            </Block>

            <Block title="5. Ihre Rechte">
              <p>Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:</p>
              <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
                <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              </ul>
              <p style={{ marginTop: '0.5rem' }}>
                Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde
                über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren.
              </p>
            </Block>

            <Block title="6. Aktualität und Änderung dieser Datenschutzerklärung">
              <p>
                Diese Datenschutzerklärung ist aktuell gültig und hat den Stand April 2025.
                Durch die Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher
                bzw. behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung
                zu ändern.
              </p>
            </Block>

          </div>

          <p style={{
            marginTop: '1.5rem', fontSize: '0.8rem', color: 'var(--text-muted)',
            padding: '0.75rem 1rem',
            background: 'rgba(245,158,11,0.06)', borderRadius: 'var(--r-sm)',
            border: '1px solid rgba(245,158,11,0.15)',
          }}>
            ⚠️ Diese Datenschutzerklärung ist ein Mustertext. Bitte lassen Sie diese von einem
            Rechtsanwalt oder Datenschutzbeauftragten prüfen und an Ihre konkreten Gegebenheiten anpassen.
          </p>
        </div>
      </section>
    </>
  );
}

function Block({ title, children }) {
  return (
    <div>
      <h2 style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.65rem' }}>
        {title}
      </h2>
      <div style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.75 }}>
        {children}
      </div>
    </div>
  );
}

function Placeholder({ text }) {
  return (
    <span style={{
      background: 'rgba(245,158,11,0.12)', color: 'var(--primary-dark)',
      borderRadius: 4, padding: '0.1rem 0.4rem', fontSize: '0.85em', fontWeight: 600,
    }}>
      {text}
    </span>
  );
}
