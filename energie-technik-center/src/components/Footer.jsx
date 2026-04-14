import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: '#111827', color: 'rgba(255,255,255,0.6)', paddingTop: '3rem', paddingBottom: '1.5rem' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
          gap: '2rem',
          paddingBottom: '2rem',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
        }}>
          {/* Brand */}
          <div>
            <img
              src="/logo.png"
              alt="Logo"
              style={{ height: 36, marginBottom: '0.75rem', display: 'block' }}
              onError={e => e.target.style.display = 'none'}
            />
            <div style={{ fontWeight: 700, color: '#fff', fontSize: '0.9rem', marginBottom: '0.4rem' }}>
              Energie-Technik-Center
            </div>
            <div style={{ fontSize: '0.82rem', lineHeight: 1.7, maxWidth: 220 }}>
              Loy GmbH & Co. KG<br />
              Ihr Partner für Elektro & Energie.
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div style={{ fontWeight: 700, color: '#fff', fontSize: '0.85rem', marginBottom: '0.9rem', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              Navigation
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
              {[
                { label: 'Startseite', to: '/' },
                { label: 'Elektrotechnik', to: '/elektrotechnik' },
                { label: 'Energietechnik', to: '/energietechnik' },
                { label: 'Kontakt', to: '/kontakt' },
              ].map(({ label, to }) => (
                <Link
                  key={to} to={to}
                  style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.55)', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = 'var(--primary)'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.55)'}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <div style={{ fontWeight: 700, color: '#fff', fontSize: '0.85rem', marginBottom: '0.9rem', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              Kontakt
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <a href="tel:+4998318809600" style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', fontSize: '0.88rem', color: 'rgba(255,255,255,0.55)' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
              >
                <Phone size={14} /> 09831 880960
              </a>
              <a href="https://maps.google.com/?q=Am+Gewerbepark+4,+91735+Muhr+am+See" target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', fontSize: '0.88rem', color: 'rgba(255,255,255,0.55)' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
              >
                <MapPin size={14} style={{ marginTop: 2, flexShrink: 0 }} />
                <span>Am Gewerbepark 4<br />91735 Muhr am See</span>
              </a>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', fontSize: '0.88rem' }}>
                <Clock size={14} style={{ marginTop: 2, flexShrink: 0 }} />
                <span>Mo–Fr: 08:00–17:00 Uhr</span>
              </div>
            </div>
          </div>
        </div>

        <div style={{
          display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between',
          alignItems: 'center', gap: '0.5rem',
          paddingTop: '1.25rem', fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)',
        }}>
          <span>© {year} Loy GmbH & Co. KG. Alle Rechte vorbehalten.</span>
          <div style={{ display: 'flex', gap: '1.25rem' }}>
            {['Impressum', 'Datenschutz'].map(l => (
              <a key={l} href="#" style={{ color: 'rgba(255,255,255,0.3)' }}
                onMouseEnter={e => e.target.style.color = 'var(--primary)'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.3)'}
              >{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
