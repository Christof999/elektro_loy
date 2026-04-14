import { ArrowRight, Phone, CheckCircle } from 'lucide-react';

const highlights = [
  'Kostenlose Beratung vor Ort',
  'Über 20 Jahre Erfahrung',
  'Regionaler Partner aus Muhr am See',
];

export default function Hero() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0f3460 0%, #1a1a2e 50%, #16213e 100%)',
      }}
    >
      {/* Decorative Background Elements */}
      <div style={{
        position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none',
      }}>
        <div style={{
          position: 'absolute', top: '-10%', right: '-5%', width: '60vw', height: '60vw',
          background: 'radial-gradient(circle, rgba(243,146,0,0.12) 0%, transparent 70%)',
          borderRadius: '50%',
        }} />
        <div style={{
          position: 'absolute', bottom: '-15%', left: '-10%', width: '50vw', height: '50vw',
          background: 'radial-gradient(circle, rgba(243,146,0,0.06) 0%, transparent 70%)',
          borderRadius: '50%',
        }} />
        {/* Animated dots grid */}
        <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.04 }}>
          <defs>
            <pattern id="dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#fff" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '7rem', paddingBottom: '5rem' }}>
        <div style={{ maxWidth: 680 }}>
          <div className="section-badge" style={{ background: 'rgba(243,146,0,0.18)', color: 'var(--primary)' }}>
            Ihr Energieexperte in der Region
          </div>

          <h1 style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
            fontWeight: 900,
            color: '#ffffff',
            lineHeight: 1.15,
            marginBottom: '1.5rem',
            letterSpacing: '-0.02em',
          }}>
            Energie & Elektro<br />
            <span style={{ color: 'var(--primary)' }}>aus einer Hand.</span>
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: 'rgba(255,255,255,0.75)',
            lineHeight: 1.8,
            marginBottom: '2.5rem',
            maxWidth: 560,
          }}>
            Photovoltaik, Wärmepumpen, E-Mobilität, Smart Home und Elektroinstallation – 
            wir planen, installieren und betreuen Ihre Energielösung von Anfang bis Ende.
          </p>

          {/* Highlights */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2.5rem' }}>
            {highlights.map((h) => (
              <div key={h} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <CheckCircle size={18} color="var(--primary)" strokeWidth={2.5} />
                <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem', fontWeight: 500 }}>{h}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
            <a
              href="#kontakt"
              onClick={(e) => { e.preventDefault(); scrollTo('#kontakt'); }}
              className="btn-primary"
              style={{ fontSize: '1.05rem', padding: '1rem 2.25rem' }}
            >
              Kostenlos anfragen <ArrowRight size={18} />
            </a>
            <a href="tel:+4998318809600" className="btn-secondary" style={{ fontSize: '1.05rem', padding: '1rem 2.25rem' }}>
              <Phone size={18} /> 09831 880960
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%' }}>
          <path d="M0 80L1440 80L1440 20C1200 70 960 0 720 30C480 60 240 10 0 40L0 80Z" fill="#f7f8fa" />
        </svg>
      </div>
    </section>
  );
}
