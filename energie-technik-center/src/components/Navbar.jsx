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
    const fn = () => setScrolled(window.scrollY > 40);
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
      backdropFilter: dark ? 'blur(12px)' : 'none',
      transition: 'background 0.3s, box-shadow 0.3s',
    }}>
      <div className="container" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: dark ? '0.7rem 1.5rem' : '1.1rem 1.5rem',
        transition: 'padding 0.3s',
      }}>

        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <img
            src="/IMG_0167.jpeg"
            alt="Energie-Technik-Center Logo"
            style={{
              height: dark ? 44 : 52,
              width: 'auto',
              display: 'block',
              transition: 'height 0.3s',
              objectFit: 'contain',
            }}
            onError={e => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          {/* Fallback Text-Logo */}
          <div style={{ display: 'none', flexDirection: 'column', lineHeight: 1.15 }}>
            <span style={{
              fontWeight: 800, fontSize: '0.95rem',
              color: dark ? 'var(--text-primary)' : '#fff',
              transition: 'color 0.3s',
            }}>
              Energie-Technik-Center
            </span>
            <span style={{
              fontSize: '0.7rem',
              color: dark ? 'var(--text-light)' : 'rgba(255,255,255,0.65)',
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
                style={{
                  padding: '0.45rem 0.9rem',
                  borderRadius: 7,
                  fontWeight: active ? 600 : 500,
                  fontSize: '0.9rem',
                  color: active
                    ? 'var(--primary)'
                    : dark ? 'var(--text-secondary)' : 'rgba(255,255,255,0.85)',
                  background: active ? 'rgba(243,146,0,0.08)' : 'transparent',
                  transition: 'color 0.2s, background 0.2s',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => { if (!active) { e.target.style.color = 'var(--primary)'; } }}
                onMouseLeave={e => { if (!active) { e.target.style.color = dark ? 'var(--text-secondary)' : 'rgba(255,255,255,0.85)'; } }}
              >
                {label}
              </Link>
            );
          })}
          <a
            href="tel:+4998318809600"
            className="btn-primary"
            style={{ marginLeft: '0.75rem', padding: '0.55rem 1.25rem', fontSize: '0.88rem', gap: '0.4rem' }}
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
          background: '#fff', borderTop: '1px solid var(--border)',
          padding: '0.75rem 1.5rem 1.5rem',
        }}>
          {navLinks.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              style={{
                display: 'block', padding: '0.85rem 0',
                borderBottom: '1px solid var(--border)',
                fontWeight: 500, color: 'var(--text-primary)', fontSize: '1rem',
              }}
            >
              {label}
            </Link>
          ))}
          <a
            href="tel:+4998318809600"
            className="btn-primary"
            style={{ marginTop: '1rem', width: '100%', justifyContent: 'center' }}
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
