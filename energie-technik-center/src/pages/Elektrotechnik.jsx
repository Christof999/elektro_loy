import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Home, Shield, Wrench, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import ElectroAnimation from '../components/ElectroAnimation';

const leistungen = [
  {
    icon: Zap,
    title: 'Elektroinstallation',
    desc: 'Neubau, Sanierung oder Erweiterung – wir installieren normgerecht und sauber. Vom Zählerkasten bis zur letzten Steckdose.',
    items: ['Unterverteilungen & Zähleranlagen', 'Steckdosen & Leitungsverlegung', 'Beleuchtungsinstallation', 'Außenanlagen & Gartenbeleuchtung'],
  },
  {
    icon: Home,
    title: 'Smart Home',
    desc: 'Intelligente Haustechnik für mehr Komfort, Sicherheit und Energieeinsparung. Wir planen und installieren Ihr Smarthome-System.',
    items: ['KNX / Busch-Jaeger / Gira', 'Automatische Beschattung', 'Sprachsteuerung (Alexa, Google)', 'Einbruchmeldesysteme'],
  },
  {
    icon: Shield,
    title: 'Sicherheitstechnik',
    desc: 'Schutz für Ihr Zuhause und Ihren Betrieb: Einbruchmeldeanlagen, Videoüberwachung und Brandschutz aus einer Hand.',
    items: ['Einbruchmeldeanlagen', 'Videoüberwachung', 'Rauchmeldeanlagen', 'Zutrittskontrolle'],
  },
  {
    icon: Wrench,
    title: 'Prüfungen & Wartung',
    desc: 'Regelmäßige Prüfungen nach DGUV und VDE sichern den sicheren Betrieb Ihrer Anlagen und sind oft gesetzlich vorgeschrieben.',
    items: ['E-Check', 'DGUV V3 Prüfungen', 'Prüfung ortsveränderlicher Geräte', 'Anlagendokumentation'],
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

export default function Elektrotechnik() {
  useReveal();
  return (
    <>
      {/* ── Page Hero ── */}
      <section style={{
        paddingTop: '8rem', paddingBottom: '4rem',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
        }}>
          <svg style={{ width: '100%', height: '100%', opacity: 0.04 }} aria-hidden="true">
            <defs>
              <pattern id="g2" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
                <circle cx="1.5" cy="1.5" r="1.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#g2)" />
          </svg>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '2.5rem', alignItems: 'center' }} className="hero-grid">
            <div>
              <div className="badge badge-dark">Bereich</div>
              <h1 style={{
                fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', fontWeight: 900,
                color: '#fff', lineHeight: 1.12, marginBottom: '1rem', letterSpacing: '-0.02em',
              }}>
                Elektrotechnik
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: 520, marginBottom: '2rem' }}>
                Von der Steckdose bis zur vernetzten Haustechnik – wir realisieren jede 
                Elektroinstallation sicher, normgerecht und zuverlässig.
              </p>
              <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
                <Link to="/kontakt" className="btn-primary">Anfrage stellen <ArrowRight size={15} /></Link>
                <a href="tel:+4998318809600" className="btn-outline-white"><Phone size={14} /> 09831 880960</a>
              </div>
            </div>
            <div className="hero-anim">
              <ElectroAnimation size={280} />
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
              Was wir im Bereich Elektrotechnik anbieten
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {leistungen.map((item) => {
              const ItemIcon = item.icon;
              const { title, desc, items } = item;
              return (
              <div key={title} className="card reveal" style={{ padding: '1.75rem' }}>
                <div style={{
                  width: 46, height: 46, borderRadius: 10,
                  background: 'rgba(15,52,96,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '1rem',
                }}>
                  <ItemIcon size={22} color="var(--accent)" />
                </div>
                <h3 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>{title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '1rem' }}>{desc}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  {items.map(i => (
                    <li key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      <CheckCircle size={13} color="var(--accent)" /> {i}
                    </li>
                  ))}
                </ul>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Warum wir ── */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div className="reveal">
              <div className="badge">Qualität</div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, marginBottom: '1rem' }}>
                Warum Kunden uns wählen
              </h2>
              {[
                { title: 'Normgerecht & sicher', text: 'Alle Arbeiten nach aktuellen VDE- und DIN-Normen.' },
                { title: 'Feste Ansprechpartner', text: 'Kein Callcenter – Sie sprechen direkt mit uns.' },
                { title: 'Saubere Arbeit', text: 'Wir hinterlassen Ihre Räume so, wie wir sie vorgefunden haben.' },
                { title: 'Schnelle Reaktionszeiten', text: 'Auch bei Notfällen sind wir zeitnah für Sie da.' },
              ].map(({ title, text }) => (
                <div key={title} style={{ display: 'flex', gap: '0.85rem', marginBottom: '1.1rem', alignItems: 'flex-start' }}>
                  <CheckCircle size={18} color="var(--accent)" style={{ marginTop: 2, flexShrink: 0 }} />
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.92rem', marginBottom: '0.2rem' }}>{title}</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.87rem', lineHeight: 1.6 }}>{text}</div>
                  </div>
                </div>
              ))}
            </div>
            {/* Zweite Animation rechts */}
            <div className="reveal" style={{ display: 'flex', justifyContent: 'center' }}>
              <ElectroAnimation size={300} />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: 'var(--accent)', padding: '3.5rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#fff', fontWeight: 800, fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', marginBottom: '0.6rem' }}>
            Elektroinstallation geplant?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem' }}>Wir erstellen Ihnen ein kostenloses Angebot.</p>
          <div style={{ display: 'flex', gap: '0.85rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/kontakt" className="btn-primary">Anfrage senden <ArrowRight size={15} /></Link>
            <a href="tel:+4998318809600" className="btn-outline-white"><Phone size={15} /> 09831 880960</a>
          </div>
        </div>
      </section>
    </>
  );
}
