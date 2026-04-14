import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const navLinks = [
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'Über uns', href: '#ueber-uns' },
  { label: 'Referenzen', href: '#referenzen' },
  { label: 'Kontakt', href: '#kontakt' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'background 0.3s, box-shadow 0.3s, padding 0.3s',
        background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: scrolled ? '0.75rem 1.5rem' : '1.25rem 1.5rem', transition: 'padding 0.3s' }}>
        {/* Logo */}
        <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
          <div style={{ width: 38, height: 38, background: 'var(--primary)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Zap size={20} color="#fff" strokeWidth={2.5} />
          </div>
          <div style={{ lineHeight: 1.1 }}>
            <div style={{ fontWeight: 800, fontSize: '1rem', color: scrolled ? 'var(--text-primary)' : '#fff', transition: 'color 0.3s', letterSpacing: '-0.01em' }}>
              Energie-Technik-Center
            </div>
            <div style={{ fontWeight: 400, fontSize: '0.72rem', color: scrolled ? 'var(--text-light)' : 'rgba(255,255,255,0.7)', transition: 'color 0.3s', letterSpacing: '0.03em' }}>
              Loy GmbH & Co. KG
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: 6,
                fontWeight: 500,
                fontSize: '0.95rem',
                color: scrolled ? 'var(--text-primary)' : 'rgba(255,255,255,0.9)',
                transition: 'color 0.2s, background 0.2s',
              }}
              onMouseEnter={e => { e.target.style.color = 'var(--primary)'; e.target.style.background = scrolled ? 'rgba(243,146,0,0.08)' : 'rgba(255,255,255,0.1)'; }}
              onMouseLeave={e => { e.target.style.color = scrolled ? 'var(--text-primary)' : 'rgba(255,255,255,0.9)'; e.target.style.background = 'transparent'; }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+4998318809600"
            className="btn-primary"
            style={{ marginLeft: '0.75rem', padding: '0.6rem 1.4rem', fontSize: '0.9rem' }}
          >
            Jetzt anrufen
          </a>
        </nav>

        {/* Mobile Burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: scrolled ? 'var(--text-primary)' : '#fff', padding: '0.5rem' }}
          className="mobile-menu-btn"
          aria-label="Menü öffnen"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ background: '#fff', borderTop: '1px solid var(--border)', padding: '1rem 1.5rem 1.5rem' }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{ display: 'block', padding: '0.9rem 0', fontWeight: 500, color: 'var(--text-primary)', borderBottom: '1px solid var(--border)', fontSize: '1rem' }}
            >
              {link.label}
            </a>
          ))}
          <a href="tel:+4998318809600" className="btn-primary" style={{ marginTop: '1.25rem', width: '100%', justifyContent: 'center' }}>
            Jetzt anrufen
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 820px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
