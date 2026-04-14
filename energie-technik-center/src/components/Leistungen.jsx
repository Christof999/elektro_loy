import { Sun, Zap, Car, Home, Wrench, Battery, ArrowRight } from 'lucide-react';

const leistungen = [
  {
    icon: Sun,
    title: 'Photovoltaik',
    description:
      'Von der Planung bis zur Inbetriebnahme: Wir installieren Ihre Solaranlage fachgerecht und kümmern uns um alle notwendigen Anmeldungen.',
    features: ['Planung & Dimensionierung', 'Montage & Installation', 'Netzanmeldung', 'Wartung & Service'],
    color: '#f39200',
  },
  {
    icon: Battery,
    title: 'Stromspeicher',
    description:
      'Maximieren Sie Ihren Eigenverbrauch mit modernen Batteriespeichersystemen und werden Sie unabhängiger vom Stromnetz.',
    features: ['Bedarfsanalyse', 'Speicherplanung', 'Fachgerechte Installation', 'Systemintegration'],
    color: '#0f3460',
  },
  {
    icon: Car,
    title: 'E-Mobilität & Ladestation',
    description:
      'Wir installieren Wallboxen und Ladesysteme für Elektrofahrzeuge – privat oder gewerblich – und sorgen für eine sichere Versorgung.',
    features: ['Wallbox-Installation', 'Lastmanagementsysteme', 'Fördermittelberatung', 'Gewerbestandorte'],
    color: '#38a169',
  },
  {
    icon: Home,
    title: 'Smart Home',
    description:
      'Mehr Komfort, Sicherheit und Energieeffizienz in Ihrem Zuhause durch intelligente Haus­automatisierungssysteme.',
    features: ['Licht & Beschattung', 'Heizungssteuerung', 'Sicherheitssysteme', 'Sprachsteuerung'],
    color: '#805ad5',
  },
  {
    icon: Zap,
    title: 'Elektroinstallation',
    description:
      'Ob Neubau, Renovierung oder Erweiterung – unsere qualifizierten Elektriker realisieren jede Elektroinstallation sicher und normgerecht.',
    features: ['Neubau & Sanierung', 'Zählertausch', 'Prüfungen & Messungen', 'Notfalldienst'],
    color: '#e53e3e',
  },
  {
    icon: Wrench,
    title: 'Wartung & Service',
    description:
      'Regelmäßige Wartung sichert die Leistungsfähigkeit Ihrer Anlagen. Unser Service-Team steht Ihnen schnell und zuverlässig zur Verfügung.',
    features: ['Anlagenprüfung', 'Fehlerdiagnose', 'Reinigung & Optimierung', 'Schnelle Reaktionszeit'],
    color: '#dd6b20',
  },
];

export default function Leistungen() {
  return (
    <section id="leistungen" style={{ background: 'var(--bg-light)', padding: '5rem 0' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-badge">Unsere Leistungen</span>
          <h2 className="section-title">Alles aus einer Hand –<br />für Ihre Energiezukunft</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Als regionaler Full-Service-Anbieter begleiten wir Sie von der ersten Beratung 
            bis zum langfristigen Betrieb Ihrer Anlage.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
        }}>
          {leistungen.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                style={{
                  background: '#fff',
                  borderRadius: 16,
                  padding: '2rem',
                  border: '1px solid var(--border)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.09)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  width: 52, height: 52, borderRadius: 12,
                  background: `${item.color}18`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}>
                  <Icon size={24} color={item.color} strokeWidth={2} />
                </div>

                <h3 style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.6rem', color: 'var(--text-primary)' }}>
                  {item.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                  {item.description}
                </p>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {item.features.map((f) => (
                    <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: item.color, flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a
            href="#kontakt"
            onClick={(e) => { e.preventDefault(); document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="btn-primary"
            style={{ fontSize: '1.05rem', padding: '1rem 2.5rem' }}
          >
            Jetzt unverbindlich anfragen <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
