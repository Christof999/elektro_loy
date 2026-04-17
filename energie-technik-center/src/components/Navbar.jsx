import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

/* "Start" wird weggelassen – das Logo übernimmt diese Funktion */
const navLinks = [
  { label: 'Elektrotechnik', to: '/elektrotechnik' },
  { label: 'Energietechnik', to: '/energietechnik' },
  { label: 'Kontakt', to: '/kontakt' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn, { passive: true });
    fn();
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    const id = setTimeout(() => {
      setOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 0);
    return () => clearTimeout(id);
  }, [location.pathname]);

  /* dark = weißer Hintergrund (nach Scroll oder auf Unterseite) */
  const solid = scrolled || !isHome;

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: solid ? 'rgba(255,255,255,0.96)' : 'transparent',
      /* Kein box-shadow: stattdessen sehr dünne border-bottom für mehr Sauberkeit */
      borderBottom: solid ? '1px solid var(--border)' : '1px solid transparent',
      backdropFilter: solid ? 'blur(20px) saturate(1.8)' : 'none',
      transition: 'background 0.35s var(--ease-out), border-color 0.35s var(--ease-out), backdrop-filter 0.35s',
    }}>
      <div className="container" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: solid ? '0.6rem 1.5rem' : '1rem 1.5rem',
        transition: 'padding 0.35s var(--ease-out)',
      }}>

        {/* ── Logo ── */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <img
            src="/IMG_0167.jpeg"
            alt="Energie-Technik-Center Logo"
            style={{
              height: solid ? 40 : 50,
              width: 'auto',
              display: 'block',
              objectFit: 'contain',
              transition: 'height 0.35s var(--ease-out)',
              mixBlendMode: solid ? 'multiply' : 'normal',
            }}
            onError={e => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          {/* Fallback Text-Logo */}
          <div style={{ display: 'none', flexDirection: 'column', lineHeight: 1.25 }}>
            <span style={{
              fontWeight: 800, fontSize: '0.9rem', letterSpacing: '-0.01em',
              color: solid ? 'var(--text-primary)' : '#fff',
              transition: 'color 0.3s',
            }}>
              Energie-Technik-Center
            </span>
            <span style={{
              fontSize: '0.67rem', fontWeight: 500,
              color: solid ? 'var(--text-muted)' : 'rgba(255,255,255,0.5)',
              transition: 'color 0.3s',
            }}>
              Loy GmbH & Co. KG
            </span>
          </div>
        </Link>

        {/* ── Desktop Nav ── */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.15rem' }} className="nav-desktop">
          {navLinks.map(({ label, to }) => {
            const active = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: 'var(--r-sm)',
                  fontWeight: 500,
                  fontSize: '0.88rem',
                  letterSpacing: '0.005em',
                  textDecoration: 'none',
                  position: 'relative',
                  transition: 'color 0.15s var(--ease-out), background 0.15s var(--ease-out)',
                  /* ── Farb-Logik: korrekt für beide States ── */
                  color: active
                    ? (solid ? 'var(--text-primary)' : '#fff')
                    : solid ? 'var(--text-secondary)' : 'rgba(255,255,255,0.65)',
                  background: active && solid ? 'var(--bg-medium)' : 'transparent',
                }}
              >
                {label}
                {/* Aktiv-Indikator: kleiner Unterstrich in Orange */}
                {active && (
                  <span style={{
                    position: 'absolute',
                    bottom: 4,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 16,
                    height: 2,
                    background: solid ? 'var(--primary)' : 'var(--primary)',
                    borderRadius: 2,
                    /* Emil: transition auf transform + opacity, nie all */
                    transition: 'opacity 0.2s var(--ease-out)',
                  }} />
                )}
              </Link>
            );
          })}

          <a
            href="tel:+4998318809600"
            className="btn-primary"
            style={{
              marginLeft: '1rem',
              padding: '0.55rem 1.25rem',
              fontSize: '0.85rem',
              gap: '0.4rem',
            }}
          >
            <Phone size={14} /> 09831 880960
          </a>
        </nav>

        {/* ── Burger ── */}
        <button
          onClick={() => setOpen(v => !v)}
          className="nav-burger"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            borderRadius: 'var(--r-sm)',
            color: solid ? 'var(--text-primary)' : '#fff',
            transition: 'color 0.2s, background 0.15s',
          }}
          aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── Mobile Drawer ── */}
      {open && (
        <div style={{
          background: 'var(--bg-white)',
          borderTop: '1px solid var(--border)',
          padding: '0.75rem 1.5rem 1.75rem',
          boxShadow: '0 16px 48px rgba(15,23,42,0.12)',
        }}>
          {navLinks.map(({ label, to }) => {
            const active = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '0.9rem 0',
                  borderBottom: '1px solid var(--border)',
                  fontWeight: active ? 600 : 500,
                  fontSize: '0.97rem',
                  color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
                }}
              >
                {label}
                {active && (
                  <span style={{
                    width: 7, height: 7,
                    background: 'var(--primary)',
                    borderRadius: '50%',
                  }} />
                )}
              </Link>
            );
          })}
          <a
            href="tel:+4998318809600"
            className="btn-primary"
            style={{ marginTop: '1.25rem', width: '100%', justifyContent: 'center', fontSize: '0.92rem' }}
          >
            <Phone size={15} /> 09831 880960
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .nav-desktop { display: none !important; }
          .nav-burger   { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
