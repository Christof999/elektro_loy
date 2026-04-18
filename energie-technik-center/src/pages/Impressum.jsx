import { useMeta } from '../hooks/useMeta';

export default function Impressum() {
  useMeta({
    title: 'Impressum',
    description: 'Impressum der Loy GmbH & Co. KG, Am Gewerbepark 4, 91735 Muhr am See – Angaben gemäß § 5 TMG.',
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
            Impressum
          </h1>
        </div>
      </section>

      {/* Content */}
      <section aria-label="Impressum" className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <div className="card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>

            <Block title="Angaben gemäß § 5 TMG">
              <p>Loy GmbH & Co. KG<br />
              Am Gewerbepark 4<br />
              91735 Muhr am See</p>
            </Block>

            <Block title="Handelsregister">
              <p>
                Registergericht: Amtsgericht <Placeholder text="[Ort]" /><br />
                Registernummer: HRA <Placeholder text="[Nummer]" />
              </p>
              <p style={{ marginTop: '0.5rem' }}>
                Komplementärin: <Placeholder text="[Firma der Komplementär-GmbH]" /><br />
                Sitz: <Placeholder text="[Ort]" /> · Amtsgericht <Placeholder text="[Ort]" /> · HRB <Placeholder text="[Nummer]" />
              </p>
            </Block>

            <Block title="Vertreten durch">
              <p>Geschäftsführer: <Placeholder text="[Vor- und Nachname]" /></p>
            </Block>

            <Block title="Kontakt">
              <p>
                Telefon: <a href="tel:+4998318809600" style={{ color: 'var(--primary-dark)', fontWeight: 600 }}>09831 880960</a><br />
                E-Mail: <Placeholder text="info@[ihre-domain].de" />
              </p>
            </Block>

            <Block title="Umsatzsteuer-Identifikationsnummer">
              <p>
                Gemäß § 27a Umsatzsteuergesetz:<br />
                DE <Placeholder text="[Ihre USt-IdNr.]" />
              </p>
            </Block>

            <Block title="Verantwortlich für den Inhalt (§ 55 Abs. 2 RStV)">
              <p>
                <Placeholder text="[Vor- und Nachname]" /><br />
                Am Gewerbepark 4<br />
                91735 Muhr am See
              </p>
            </Block>

            <Block title="Streitschlichtung">
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer"
                  style={{ color: 'var(--primary-dark)' }}>
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p style={{ marginTop: '0.5rem' }}>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </Block>

          </div>

          <p style={{
            marginTop: '1.5rem', fontSize: '0.8rem', color: 'var(--text-muted)',
            padding: '0.75rem 1rem',
            background: 'rgba(245,158,11,0.06)', borderRadius: 'var(--r-sm)',
            border: '1px solid rgba(245,158,11,0.15)',
          }}>
            ⚠️ Platzhalter in eckigen Klammern bitte mit Ihren tatsächlichen Angaben ersetzen.
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
