import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Start', to: '/' },
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
    window.addEventListener('scroll', fn);
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

  const dark = scrolled || !isHome;

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: dark ? 'rgba(255,255,255,0.97)' : 'transparent',
      boxShadow: dark ? '0 1px 0 var(--border)' : 'none',
      backdropFilter: dark ? 'blur(16px)' : 'none',
      transition: 'background 0.3s, box-shadow 0.3s',
    }}>
      <div className="container" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: dark ? '0.65rem 1.5rem' : '1rem 1.5rem',
        transition: 'padding 0.3s',
      }}>

        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="/IMG_0167.jpeg"
            alt="Energie-Technik-Center Logo"
            style={{
              height: dark ? 42 : 52,
              width: 'auto',
              display: 'block',
              objectFit: 'contain',
              transition: 'height 0.3s, filter 0.3s',
              mixBlendMode: dark ? 'multiply' : 'normal',
            }}
            onError={e => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div style={{ display: 'none', flexDirection: 'column', lineHeight: 1.2 }}>
            <span style={{
              fontWeight: 800, fontSize: '0.92rem', letterSpacing: '-0.01em',
              color: dark ? 'var(--text-primary)' : '#fff',
              transition: 'color 0.3s',
            }}>
              Energie-Technik-Center
            </span>
            <span style={{
              fontSize: '0.68rem', fontWeight: 500,
              color: dark ? 'var(--text-muted)' : 'rgba(255,255,255,0.55)',
              transition: 'color 0.3s',
            }}>
              Loy GmbH & Co. KG
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }} className="nav-desktop">
          {navLinks.map(({ label, to }) => {
            const active = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                style={{
                  padding: '0.5rem 0.95rem',
                  borderRadius: 'var(--r-sm)',
                  fontWeight: active ? 600 : 500,
                  fontSize: '0.88rem',
                  color: active
                    ? 'var(--text-primary)'
                    : dark ? 'var(--text-secondary)' : 'rgba(255,255,255,0.75)',
                  background: 'transparent',
                  transition: 'color 0.15s',
                  textDecoration: 'none',
                  position: 'relative',
                }}
              >
                {label}
                {active && (
                  <span style={{
                    position: 'absolute', bottom: 2, left: '50%',
                    transform: 'translateX(-50%)',
                    width: 18, height: 2.5,
                    background: 'var(--primary)',
                    borderRadius: 2,
                  }} />
                )}
              </Link>
            );
          })}
          <a
            href="tel:+4998318809600"
            className="btn-primary"
            style={{ marginLeft: '0.85rem', padding: '0.55rem 1.2rem', fontSize: '0.85rem', gap: '0.4rem' }}
          >
            <Phone size={14} /> 09831 880960
          </a>
        </nav>

        {/* Burger */}
        <button
          onClick={() => setOpen(!open)}
          className="nav-burger"
          style={{
            display: 'none', background: 'none', border: 'none',
            cursor: 'pointer', padding: '0.4rem',
            color: dark ? 'var(--text-primary)' : '#fff',
          }}
          aria-label="Menü"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div style={{
          background: 'var(--bg-white)',
          borderTop: '1px solid var(--border)',
          padding: '0.5rem 1.5rem 1.5rem',
          boxShadow: 'var(--shadow-lg)',
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
                  color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
                  fontSize: '0.97rem',
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
            style={{ marginTop: '1.1rem', width: '100%', justifyContent: 'center', fontSize: '0.92rem' }}
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
