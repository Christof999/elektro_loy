import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';
import WindmillAnimation from '../components/WindmillAnimation';
import SolarAnimation from '../components/SolarAnimation';

const reviews = [
  { name: 'Jan Reimann', rating: 5, text: 'Top Firma, manchmal dauerts aber es wird jedes Problem gelöst.', time: 'vor 4 Monaten' },
  { name: 'diamtsternchen40', rating: 5, text: 'Planung, Beratung, termingerechte Ausführung, Monteure sorgfältig und freundlich, alles an einem Tag fertig!', time: 'vor einem Jahr' },
  { name: 'Timo Schmid', rating: 5, text: 'Absolut begeistert – von der Auftragserteilung bis zur Installation keine 8 Wochen, zuverlässig und fairer Preis.', time: 'vor 3 Jahren' },
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

export default function Home() {
  useReveal();

  return (
    <>
      {/* ── Hero ── */}
      <section style={{
        minHeight: '100vh',
        display: 'flex', alignItems: 'center',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 60%, #0f172a 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Subtle dot grid */}
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.035 }} aria-hidden="true">
          <defs>
            <pattern id="grid" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Orange accent glow */}
        <div style={{
          position: 'absolute', top: '-10%', right: '-5%',
          width: '55vw', height: '55vw', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(243,146,0,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '7rem', paddingBottom: '5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '3rem', alignItems: 'center' }} className="hero-grid">
            {/* Text */}
            <div style={{ maxWidth: 580 }}>
              <div className="badge badge-dark" style={{ marginBottom: '1.1rem' }}>
                Ihr Energieexperte aus Muhr am See
              </div>
              <h1 style={{
                fontSize: 'clamp(2rem, 5vw, 3.4rem)',
                fontWeight: 900, color: '#fff', lineHeight: 1.12,
                marginBottom: '1.25rem', letterSpacing: '-0.025em',
              }}>
                Energie & Elektro<br />
                <span style={{ color: 'var(--primary)' }}>aus einer Hand.</span>
              </h1>
              <p style={{
                fontSize: '1.05rem', color: 'rgba(255,255,255,0.7)',
                lineHeight: 1.8, marginBottom: '2rem', maxWidth: 500,
              }}>
                Wir planen, installieren und betreuen Ihre Energielösung –
                von Photovoltaik bis zur Elektroinstallation, regional und persönlich.
              </p>
              {[
                'Kostenlose Beratung vor Ort',
                'Über 20 Jahre Erfahrung',
                'Zuverlässig & termingerecht',
              ].map(t => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                  <CheckCircle size={16} color="var(--primary)" />
                  <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.92rem', fontWeight: 500 }}>{t}</span>
                </div>
              ))}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', marginTop: '2rem' }}>
                <Link to="/kontakt" className="btn-primary" style={{ fontSize: '0.95rem' }}>
                  Kostenlos anfragen <ArrowRight size={16} />
                </Link>
                <Link to="/elektrotechnik" className="btn-outline-white" style={{ fontSize: '0.95rem' }}>
                  Leistungen entdecken
                </Link>
              </div>
            </div>

            {/* Animation */}
            <div className="hero-anim">
              <WindmillAnimation size={300} />
            </div>
          </div>
        </div>

        {/* Wave */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <svg viewBox="0 0 1440 70" fill="none" preserveAspectRatio="none" style={{ display: 'block', width: '100%' }}>
            <path d="M0 70L1440 70L1440 18C1200 60 960 0 720 28C480 56 240 8 0 38Z" fill="#f9fafb" />
          </svg>
        </div>
      </section>

      {/* ── Zwei Bereiche ── */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }} className="reveal">
            <div className="badge">Unsere Bereiche</div>
            <h2 style={{ fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: 800 }}>
              Zwei Bereiche – ein Ansprechpartner
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginTop: '0.6rem', maxWidth: 520, margin: '0.6rem auto 0' }}>
              Egal ob Steckdose oder Solaranlage – wir sind Ihr Full-Service-Partner.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {/* Elektrotechnik Card */}
            <Link to="/elektrotechnik" style={{ textDecoration: 'none' }}>
              <div className="card reveal" style={{
                padding: '2.5rem', cursor: 'pointer', overflow: 'hidden', position: 'relative',
              }}>
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 4,
                  background: 'linear-gradient(90deg, var(--secondary), var(--accent))',
                }} />
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  <ElectroIllustration />
                </div>
                <h3 style={{ fontWeight: 800, fontSize: '1.3rem', marginBottom: '0.6rem' }}>Elektrotechnik</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                  Elektroinstallation, Smart Home, Zähleranlagen, Prüfungen und Notfalldienst – alles aus einer Hand.
                </p>
                <span style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  Mehr erfahren <ArrowRight size={15} />
                </span>
              </div>
            </Link>

            {/* Energietechnik Card */}
            <Link to="/energietechnik" style={{ textDecoration: 'none' }}>
              <div className="card reveal" style={{
                padding: '2.5rem', cursor: 'pointer', overflow: 'hidden', position: 'relative',
              }}>
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 4,
                  background: 'linear-gradient(90deg, var(--primary), var(--primary-light))',
                }} />
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  <SolarAnimation size={160} />
                </div>
                <h3 style={{ fontWeight: 800, fontSize: '1.3rem', marginBottom: '0.6rem' }}>Energietechnik</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                  Photovoltaik, Stromspeicher, Wärmepumpen, E-Mobilität und Ladeinfrastruktur für Ihr Zuhause.
                </p>
                <span style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  Mehr erfahren <ArrowRight size={15} />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Über uns kurz ── */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '3rem', alignItems: 'center',
          }}>
            <div className="reveal">
              <div className="badge">Über uns</div>
              <h2 style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: 800, marginBottom: '1rem' }}>
                Inhabergeführt.<br />Regional. Verlässlich.
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1rem', fontSize: '0.95rem' }}>
                Als Familienunternehmen aus Muhr am See stehen wir für persönliche Beratung und
                handwerkliche Sorgfalt. Seit über 20 Jahren sind wir in der Region Ansbach,
                Gunzenhausen, Nürnberg und Ingolstadt für unsere Kunden im Einsatz.
              </p>
              <Link to="/kontakt" className="btn-outline" style={{ fontSize: '0.9rem' }}>
                Kontakt aufnehmen <ArrowRight size={15} />
              </Link>
            </div>
            <div className="reveal" style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem',
            }}>
              {[
                { val: '20+', label: 'Jahre Erfahrung' },
                { val: '500+', label: 'Projekte' },
                { val: '4,4 ★', label: 'Google-Bewertung' },
                { val: 'Regional', label: 'Ansbach & Umgebung' },
              ].map(({ val, label }) => (
                <div key={label} style={{
                  background: 'var(--bg-light)', borderRadius: 12, padding: '1.25rem',
                  border: '1px solid var(--border)', textAlign: 'center',
                }}>
                  <div style={{ fontWeight: 900, fontSize: '1.5rem', color: 'var(--text-primary)' }}>{val}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-light)', marginTop: '0.2rem', fontWeight: 500 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Rezensionen ── */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }} className="reveal">
            <div className="badge">Kundenstimmen</div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: 800 }}>Das sagen unsere Kunden</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {reviews.map(r => (
              <div key={r.name} className="card reveal" style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '2px', marginBottom: '0.75rem' }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={15} fill={i < r.rating ? '#f59e0b' : 'none'} stroke={i < r.rating ? '#f59e0b' : '#d1d5db'} />
                  ))}
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '1rem' }}>
                  "{r.text}"
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 600, fontSize: '0.85rem' }}>{r.name}</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>{r.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section style={{ background: 'var(--secondary)', padding: '4rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="reveal" style={{ color: '#fff', fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2.1rem)', marginBottom: '0.75rem' }}>
            Bereit für Ihr Projekt?
          </h2>
          <p className="reveal" style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '1.75rem', fontSize: '1rem' }}>
            Wir beraten Sie kostenlos und unverbindlich.
          </p>
          <Link to="/kontakt" className="btn-primary reveal" style={{ fontSize: '1rem', padding: '0.9rem 2.2rem' }}>
            Jetzt Anfrage stellen <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}

// Mini inline illustration for Elektrotechnik card
function ElectroIllustration() {
  return (
    <svg width="160" height="100" viewBox="0 0 160 100" fill="none" aria-hidden="true">
      <style>{`
        @keyframes bolt2 { 0%,85%,100%{opacity:0}45%,55%{opacity:1} }
        @keyframes circ2 { from{stroke-dashoffset:200} to{stroke-dashoffset:0} }
        .b2 { animation: bolt2 2.2s ease-in-out infinite; }
        .c2 { stroke-dasharray:200; animation: circ2 2.5s linear infinite; }
      `}</style>
      <rect width="160" height="100" rx="10" fill="#f1f5f9" />
      <circle cx="80" cy="48" r="30" fill="#e0e7ff" />
      <circle cx="80" cy="48" r="22" fill="#c7d2fe" opacity="0.5" />
      <path className="b2" d="M83 30l-10 20h8l-5 18 13-22h-9z" fill="#f59e0b" />
      <path className="c2" d="M30 80 Q50 60 80 48 Q110 36 130 20" stroke="#6366f1" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.6" />
      <circle cx="30" cy="80" r="4" fill="#6366f1" opacity="0.5" />
      <circle cx="130" cy="20" r="4" fill="#6366f1" opacity="0.5" />
    </svg>
  );
}
