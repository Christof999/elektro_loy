import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: '#0a1018', color: 'rgba(255,255,255,0.45)', paddingTop: '3.5rem', paddingBottom: '1.75rem' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1.2fr',
          gap: '3rem',
          paddingBottom: '2.5rem',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}>

          {/* Brand */}
          <div>
            <img
              src="/IMG_0167.jpeg"
              alt="Energie-Technik-Center Logo"
              style={{
                height: 48,
                width: 'auto',
                marginBottom: '1rem',
                display: 'block',
                objectFit: 'contain',
                mixBlendMode: 'screen',
              }}
              onError={e => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <div style={{ display: 'none', fontWeight: 700, color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
              Energie-Technik-Center
            </div>
            <p style={{ fontSize: '0.82rem', lineHeight: 1.75, maxWidth: 240, color: 'rgba(255,255,255,0.38)' }}>
              Loy GmbH & Co. KG – Ihr regionaler Partner für Elektro-
              installation und Erneuerbare Energien in der Region Ansbach.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div style={{ fontWeight: 600, color: 'rgba(255,255,255,0.7)', fontSize: '0.78rem', marginBottom: '1rem', letterSpacing: '0.07em', textTransform: 'uppercase' }}>
              Navigation
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              {[
                { label: 'Startseite', to: '/' },
                { label: 'Elektrotechnik', to: '/elektrotechnik' },
                { label: 'Energietechnik', to: '/energietechnik' },
                { label: 'Kontakt', to: '/kontakt' },
              ].map(({ label, to }) => (
                <Link
                  key={to} to={to}
                  style={{ fontSize: '0.87rem', color: 'rgba(255,255,255,0.42)', transition: 'color 0.15s' }}
                  onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.85)'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.42)'}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <div style={{ fontWeight: 600, color: 'rgba(255,255,255,0.7)', fontSize: '0.78rem', marginBottom: '1rem', letterSpacing: '0.07em', textTransform: 'uppercase' }}>
              Kontakt
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a href="tel:+4998318809600"
                style={{ display: 'flex', gap: '0.65rem', alignItems: 'center', fontSize: '0.87rem', color: 'rgba(255,255,255,0.42)', transition: 'color 0.15s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.85)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.42)'}
              >
                <Phone size={13} style={{ flexShrink: 0, opacity: 0.6 }} /> 09831 880960
              </a>
              <a href="https://maps.google.com/?q=Am+Gewerbepark+4,+91735+Muhr+am+See"
                target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start', fontSize: '0.87rem', color: 'rgba(255,255,255,0.42)', transition: 'color 0.15s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.85)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.42)'}
              >
                <MapPin size={13} style={{ marginTop: 2, flexShrink: 0, opacity: 0.6 }} />
                <span>Am Gewerbepark 4<br />91735 Muhr am See</span>
              </a>
              <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'center', fontSize: '0.87rem' }}>
                <Clock size={13} style={{ flexShrink: 0, opacity: 0.4 }} />
                <span>Mo–Fr: 08:00–17:00 Uhr</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between',
          alignItems: 'center', gap: '0.5rem',
          paddingTop: '1.5rem',
          fontSize: '0.75rem', color: 'rgba(255,255,255,0.22)',
        }}>
          <span>© {year} Loy GmbH & Co. KG. Alle Rechte vorbehalten.</span>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {[{ label: 'Impressum', to: '/impressum' }, { label: 'Datenschutz', to: '/datenschutz' }].map(({ label, to }) => (
              <Link key={to} to={to}
                style={{ color: 'rgba(255,255,255,0.22)', transition: 'color 0.15s' }}
                onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.6)'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.22)'}
              >{label}</Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          footer .container > div:first-child {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </footer>
  );
}
