import { Zap, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: '#0d0d1a', color: 'rgba(255,255,255,0.7)', padding: '3.5rem 0 1.5rem' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2.5rem',
          paddingBottom: '2.5rem',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <div style={{ width: 36, height: 36, background: 'var(--primary)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Zap size={18} color="#fff" strokeWidth={2.5} />
              </div>
              <div style={{ lineHeight: 1.2 }}>
                <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#fff' }}>Energie-Technik-Center</div>
                <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.45)' }}>Loy GmbH & Co. KG</div>
              </div>
            </div>
            <p style={{ fontSize: '0.88rem', lineHeight: 1.7, maxWidth: 240 }}>
              Ihr kompetenter Partner für Elektroinstallation, Photovoltaik, Smart Home und erneuerbare Energien in der Region.
            </p>
          </div>

          {/* Leistungen */}
          <div>
            <h4 style={{ color: '#fff', fontWeight: 700, marginBottom: '1rem', fontSize: '0.95rem' }}>Leistungen</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {['Photovoltaik', 'Stromspeicher', 'E-Mobilität & Ladestation', 'Smart Home', 'Elektroinstallation', 'Wartung & Service'].map((l) => (
                <li key={l}>
                  <a
                    href="#leistungen"
                    onClick={(e) => { e.preventDefault(); document.querySelector('#leistungen')?.scrollIntoView({ behavior: 'smooth' }); }}
                    style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.6)', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = 'var(--primary)'}
                    onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 style={{ color: '#fff', fontWeight: 700, marginBottom: '1rem', fontSize: '0.95rem' }}>Kontakt</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a href="tel:+4998318809600" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem', textDecoration: 'none' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
              >
                <Phone size={15} style={{ marginTop: 2, flexShrink: 0 }} /> 09831 880960
              </a>
              <a href="https://maps.google.com/?q=Am+Gewerbepark+4,+91735+Muhr+am+See" target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem', textDecoration: 'none' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
              >
                <MapPin size={15} style={{ marginTop: 2, flexShrink: 0 }} />
                <span>Am Gewerbepark 4<br />91735 Muhr am See</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '0.75rem',
          paddingTop: '1.5rem',
          fontSize: '0.82rem',
          color: 'rgba(255,255,255,0.35)',
        }}>
          <span>© {year} Loy GmbH & Co. KG – Energie-Technik-Center. Alle Rechte vorbehalten.</span>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" style={{ color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}
              onMouseEnter={e => e.target.style.color = 'var(--primary)'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.35)'}
            >
              Impressum
            </a>
            <a href="#" style={{ color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}
              onMouseEnter={e => e.target.style.color = 'var(--primary)'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.35)'}
            >
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
