import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Battery, Car, Thermometer, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import WindmillAnimation from '../components/WindmillAnimation';
import SolarAnimation from '../components/SolarAnimation';

const leistungen = [
  {
    icon: Sun,
    title: 'Photovoltaik',
    color: '#f59e0b',
    desc: 'Wir planen und installieren Ihre Solaranlage – von der Dimensionierung über die Montage bis zur Netzanmeldung und Inbetriebnahme.',
    items: ['Planung & Dimensionierung', 'Montage Dach & Fassade', 'Netzanmeldung & Abnahme', 'Wechselrichter & Monitoring'],
  },
  {
    icon: Battery,
    title: 'Stromspeicher',
    color: '#3b82f6',
    desc: 'Mit einem Batteriespeicher nutzen Sie Ihren Solarstrom rund um die Uhr und werden unabhängiger vom Stromnetz.',
    items: ['Bedarfsanalyse & Auslegung', 'Integration in PV-Anlage', 'Notstromfähige Systeme', 'Systemüberwachung'],
  },
  {
    icon: Car,
    title: 'E-Mobilität & Ladestation',
    color: '#10b981',
    desc: 'Wir installieren Wallboxen und Ladesysteme für Privatpersonen und Unternehmen – inklusive Lastmanagement und Fördermittelberatung.',
    items: ['Wallbox-Installation', 'Lastmanagementsystem', 'Fördermittelberatung KfW', 'Gewerbliche Ladesäulen'],
  },
  {
    icon: Thermometer,
    title: 'Wärmepumpen',
    color: '#ef4444',
    desc: 'Als Systempartner installieren wir Luft-Wasser- und Erdwärmepumpen und kümmern uns um die elektrische Anbindung.',
    items: ['Luft-Wasser-Wärmepumpen', 'Erdwärmesysteme', 'Elektrische Einbindung', 'Smart-Grid-fähige Steuerung'],
  },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function Energietechnik() {
  useReveal();
  return (
    <>
      {/* ── Page Hero ── */}
      <section style={{
        paddingTop: '8rem', paddingBottom: '4rem',
        background: 'linear-gradient(135deg, #451a03 0%, #92400e 40%, #0f172a 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <svg style={{ width: '100%', height: '100%', opacity: 0.04 }} aria-hidden="true">
            <defs>
              <pattern id="g3" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
                <circle cx="1.5" cy="1.5" r="1.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#g3)" />
          </svg>
          <div style={{
            position: 'absolute', top: '-10%', right: '-5%',
            width: '55vw', height: '55vw', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(243,146,0,0.15) 0%, transparent 70%)',
          }} />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '2.5rem', alignItems: 'center' }} className="hero-grid">
            <div>
              <div className="badge badge-dark">Bereich</div>
              <h1 style={{
                fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', fontWeight: 900,
                color: '#fff', lineHeight: 1.12, marginBottom: '1rem', letterSpacing: '-0.02em',
              }}>
                Energietechnik
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: 520, marginBottom: '2rem' }}>
                Photovoltaik, Stromspeicher, Wärmepumpen und E-Mobilität – 
                wir machen Ihr Zuhause fit für die Energiezukunft.
              </p>
              <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
                <Link to="/kontakt" className="btn-primary">Anfrage stellen <ArrowRight size={15} /></Link>
                <a href="tel:+4998318809600" className="btn-outline-white"><Phone size={14} /> 09831 880960</a>
              </div>
            </div>
            <div className="hero-anim">
              <SolarAnimation size={280} />
            </div>
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <svg viewBox="0 0 1440 55" fill="none" preserveAspectRatio="none" style={{ display: 'block', width: '100%' }}>
            <path d="M0 55L1440 55L1440 15C1200 50 960 0 720 22C480 44 240 5 0 30Z" fill="#f9fafb" />
          </svg>
        </div>
      </section>

      {/* ── Leistungen ── */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }} className="reveal">
            <div className="badge">Leistungen</div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: 800 }}>
              Was wir im Bereich Energietechnik anbieten
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {leistungen.map((item) => {
              const ItemIcon = item.icon;
              const { title, color, desc, items } = item;
              return (
              <div key={title} className="card reveal" style={{ padding: '1.75rem' }}>
                <div style={{
                  width: 46, height: 46, borderRadius: 10,
                  background: `${color}18`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '1rem',
                }}>
                  <ItemIcon size={22} color={color} />
                </div>
                <h3 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>{title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '1rem' }}>{desc}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  {items.map(i => (
                    <li key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      <CheckCircle size={13} color={color} /> {i}
                    </li>
                  ))}
                </ul>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Windrad Sektion ── */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div className="reveal" style={{ display: 'flex', justifyContent: 'center' }}>
              <WindmillAnimation size={300} />
            </div>
            <div className="reveal">
              <div className="badge">Nachhaltige Energie</div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, marginBottom: '1rem' }}>
                Gemeinsam in die Energiezukunft
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1rem', fontSize: '0.95rem' }}>
                Erneuerbare Energien sind keine Zukunftsmusik – sie sind heute rentabel, 
                verlässlich und bezahlbar. Wir helfen Ihnen, den richtigen Einstieg zu finden 
                und optimal von Förderprogrammen zu profitieren.
              </p>
              {[
                'Individuelle Wirtschaftlichkeitsberechnung',
                'Beratung zu staatlichen Förderungen',
                'Komplette Umsetzung aus einer Hand',
                'Langfristiger Service und Monitoring',
              ].map(t => (
                <div key={t} style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', marginBottom: '0.55rem' }}>
                  <CheckCircle size={15} color="var(--primary)" />
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{t}</span>
                </div>
              ))}
              <Link to="/kontakt" className="btn-primary" style={{ marginTop: '1.25rem', fontSize: '0.9rem' }}>
                Beratungstermin anfragen <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: '#92400e', padding: '3.5rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#fff', fontWeight: 800, fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', marginBottom: '0.6rem' }}>
            Energiewende starten?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem' }}>
            Kostenlose Erstberatung – wir analysieren Ihr Potenzial.
          </p>
          <div style={{ display: 'flex', gap: '0.85rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/kontakt" className="btn-primary">Jetzt anfragen <ArrowRight size={15} /></Link>
            <a href="tel:+4998318809600" className="btn-outline-white"><Phone size={15} /> 09831 880960</a>
          </div>
        </div>
      </section>
    </>
  );
}
