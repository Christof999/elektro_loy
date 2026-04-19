import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Elektrotechnik', to: '/elektrotechnik' },
  { label: 'Energietechnik', to: '/energietechnik' },
  { label: 'Kontakt',        to: '/kontakt' },
];

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location              = useLocation();
  const isHome                = location.pathname === '/';

  useEffect(() => {
    /* Home: stay dark until 80% of viewport scrolled (keeps dark glass in full hero).
       Sub-pages: switch at 320px (covers dark hero section). */
    const fn = () => {
      const threshold = isHome ? window.innerHeight * 0.8 : 320;
      setScrolled(window.scrollY > threshold);
    };
    window.addEventListener('scroll', fn, { passive: true });
    fn();
    return () => window.removeEventListener('scroll', fn);
  }, [isHome]);

  useEffect(() => {
    const id = setTimeout(() => {
      setOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 0);
    return () => clearTimeout(id);
  }, [location.pathname]);

  /* dark glass on hero, light glass on content */
  const dark = !scrolled;

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Zum Hauptinhalt springen
      </a>

      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: dark
          ? 'rgba(4, 8, 15, 0.55)'
          : 'rgba(255, 255, 255, 0.88)',
        backdropFilter: 'blur(28px) saturate(1.8)',
        WebkitBackdropFilter: 'blur(28px) saturate(1.8)',
        borderBottom: dark
          ? '1px solid rgba(255,255,255,0.07)'
          : '1px solid rgba(0,0,0,0.07)',
        transition: 'background 0.4s var(--ease-out), border-color 0.4s var(--ease-out)',
      }}>
        <div className="container" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: dark ? '0.9rem 2rem' : '0.65rem 2rem',
          transition: 'padding 0.35s var(--ease-out)',
        }}>

          {/* Logo */}
          <Link to="/" aria-label="Startseite" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <img
              src="/IMG_0167.jpeg"
              alt="Energie-Technik-Center Logo"
              style={{
                height: dark ? 44 : 38,
                width: 'auto',
                display: 'block',
                objectFit: 'contain',
                transition: 'height 0.35s var(--ease-out), filter 0.35s',
                filter: dark ? 'brightness(1)' : 'none',
                mixBlendMode: dark ? 'normal' : 'multiply',
              }}
              onError={e => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div style={{ display: 'none', flexDirection: 'column', lineHeight: 1.25 }}>
              <span style={{
                fontWeight: 800, fontSize: '0.9rem', letterSpacing: '-0.01em',
                color: dark ? '#fff' : 'var(--text-primary)',
                transition: 'color 0.3s',
              }}>
                Energie-Technik-Center
              </span>
              <span style={{
                fontSize: '0.67rem', fontWeight: 500,
                color: dark ? 'rgba(255,255,255,0.45)' : 'var(--text-muted)',
                transition: 'color 0.3s',
              }}>
                Loy GmbH & Co. KG
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.1rem' }} className="nav-desktop">
            {navLinks.map(({ label, to }) => {
              const active = location.pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  aria-current={active ? 'page' : undefined}
                  style={{
                    padding: '0.48rem 1rem',
                    borderRadius: 'var(--r-sm)',
                    fontWeight: 500,
                    fontSize: '0.875rem',
                    letterSpacing: '0.003em',
                    textDecoration: 'none',
                    position: 'relative',
                    transition: 'color 0.18s var(--ease-out), background 0.18s var(--ease-out)',
                    color: active
                      ? (dark ? '#fff' : 'var(--text-primary)')
                      : dark ? 'rgba(255,255,255,0.55)' : 'var(--text-secondary)',
                    background: active && !dark ? 'var(--bg-medium)' : 'transparent',
                  }}
                >
                  {label}
                  {active && (
                    <span style={{
                      position: 'absolute', bottom: 3, left: '50%',
                      transform: 'translateX(-50%)',
                      width: 14, height: 1.5,
                      background: 'var(--primary)', borderRadius: 1,
                    }} />
                  )}
                </Link>
              );
            })}

            <a
              href="tel:+4998318809600"
              className="btn-primary"
              style={{ marginLeft: '1rem', padding: '0.52rem 1.2rem', fontSize: '0.84rem', gap: '0.4rem' }}
            >
              <Phone size={13} /> 09831 880960
            </a>
          </nav>

          {/* Burger */}
          <button
            onClick={() => setOpen(v => !v)}
            className="nav-burger"
            style={{
              display: 'none', background: 'none', border: 'none', cursor: 'pointer',
              padding: '0.5rem', borderRadius: 'var(--r-sm)',
              color: dark ? '#fff' : 'var(--text-primary)',
              transition: 'color 0.2s',
            }}
            aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {open && (
          <div style={{
            background: 'rgba(255,255,255,0.97)',
            backdropFilter: 'blur(20px)',
            borderTop: '1px solid var(--border)',
            padding: '0.75rem 2rem 1.75rem',
            boxShadow: '0 20px 60px rgba(13,17,23,0.12)',
          }}>
            {navLinks.map(({ label, to }) => {
              const active = location.pathname === to;
              return (
                <Link
                  key={to} to={to}
                  aria-current={active ? 'page' : undefined}
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
                    <span style={{ width: 6, height: 6, background: 'var(--primary)', borderRadius: '50%' }} />
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
    </>
  );
}
