import { ShieldCheck, Handshake, Lightbulb, HeadphonesIcon } from 'lucide-react';

const vorteile = [
  {
    icon: Lightbulb,
    title: 'Kompetente Beratung',
    description: 'Wir analysieren Ihre Situation individuell und erarbeiten die optimale Lösung – ohne Standardangebote.',
  },
  {
    icon: ShieldCheck,
    title: 'Qualität & Sicherheit',
    description: 'Alle unsere Installationen entsprechen den aktuellen Normen und werden von zertifizierten Fachkräften ausgeführt.',
  },
  {
    icon: Handshake,
    title: 'Regionaler Partner',
    description: 'Als ortsansässiges Unternehmen sind wir schnell vor Ort und kennen die regionalen Gegebenheiten bestens.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Langfristiger Service',
    description: 'Unsere Beziehung endet nicht mit der Montage. Wir stehen Ihnen auch danach mit Wartung und Support zur Seite.',
  },
];

export default function Vorteile() {
  return (
    <section style={{ background: '#fff', padding: '4.5rem 0' }}>
      <div className="container">
        <div style={{
          background: 'linear-gradient(135deg, var(--secondary) 0%, var(--accent) 100%)',
          borderRadius: 20,
          padding: 'clamp(2rem, 5vw, 3.5rem)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2.5rem',
        }}>
          {/* Heading */}
          <div style={{ gridColumn: '1 / -1', textAlign: 'center' }}>
            <span className="section-badge" style={{ background: 'rgba(243,146,0,0.2)', color: 'var(--primary)' }}>
              Warum Energie-Technik-Center?
            </span>
            <h2 className="section-title" style={{ color: '#fff' }}>
              Ihr Vorteil mit uns
            </h2>
          </div>

          {vorteile.map((v) => {
            const Icon = v.icon;
            return (
              <div key={v.title} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.75rem' }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: 'rgba(243,146,0,0.18)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={22} color="var(--primary)" strokeWidth={2} />
                </div>
                <h3 style={{ fontWeight: 700, color: '#fff', fontSize: '1.05rem' }}>{v.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem', lineHeight: 1.7 }}>{v.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
