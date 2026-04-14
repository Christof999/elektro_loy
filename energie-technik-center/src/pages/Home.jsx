import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Zap, Sun } from 'lucide-react';
import HeroScene from '../components/HeroScene';

const reviews = [
  { name: 'Jan Reimann',      rating: 5, text: 'Top Firma, manchmal dauerts aber es wird jedes Problem gelöst.',                                                              time: 'vor 4 Monaten' },
  { name: 'diamtsternchen40', rating: 5, text: 'Planung, Beratung, termingerechte Ausführung, Monteure sorgfältig und freundlich, alles an einem Tag fertig!',               time: 'vor einem Jahr' },
  { name: 'Timo Schmid',      rating: 5, text: 'Absolut begeistert – von der Auftragserteilung bis zur Installation keine 8 Wochen, zuverlässig und zu einem fairen Preis.', time: 'vor 3 Jahren' },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function Home() {
  useReveal();

  return (
    <>
      {/* ────────────────────── HERO ────────────────────── */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(160deg, #0b1929 0%, #0f2744 55%, #0b1929 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Hintergrund-Szene: Sonne, Windrad, Solar, Haus – nahtlos eingebettet */}
        <HeroScene />

        {/* Subtiles Dot-Grid */}
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.03, pointerEvents: 'none' }} aria-hidden="true">
          <defs>
            <pattern id="hgrid" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hgrid)" />
        </svg>

        <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '8rem', paddingBottom: '6rem' }}>
          {/* Badge */}
          <div className="badge badge-dark" style={{ marginBottom: '1.2rem' }}>
            Ihr Energieexperte aus Muhr am See
          </div>

          {/* Headline */}
          <h1 style={{
            fontSize: 'clamp(2.2rem, 5.5vw, 3.8rem)',
            fontWeight: 900,
            color: '#fff',
            lineHeight: 1.1,
            marginBottom: '1.25rem',
            letterSpacing: '-0.025em',
            maxWidth: 640,
          }}>
            Energie & Elektro<br />
            <span style={{ color: 'var(--primary)' }}>aus einer Hand.</span>
          </h1>

          <p style={{
            fontSize: '1.05rem',
            color: 'rgba(255,255,255,0.68)',
            lineHeight: 1.8,
            marginBottom: '2rem',
            maxWidth: 500,
          }}>
            Wir planen, installieren und betreuen Ihre Energielösung –
            von Photovoltaik bis zur Elektroinstallation, regional und persönlich.
          </p>

          {/* Checks */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2.25rem' }}>
            {['Kostenlose Beratung vor Ort', 'Über 20 Jahre Erfahrung', 'Zuverlässig & termingerecht'].map(t => (
              <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <CheckCircle size={15} color="var(--primary)" />
                <span style={{ color: 'rgba(255,255,255,0.78)', fontSize: '0.92rem', fontWeight: 500 }}>{t}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem' }}>
            <Link to="/kontakt" className="btn-primary" style={{ fontSize: '0.95rem' }}>
              Kostenlos anfragen <ArrowRight size={16} />
            </Link>
            <a href="tel:+4998318809600" className="btn-outline-white" style={{ fontSize: '0.95rem' }}>
              09831 880960
            </a>
          </div>
        </div>

        {/* Wellen-Übergang */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" style={{ display: 'block', width: '100%' }}>
            <path d="M0 60L1440 60L1440 16C1200 52 960 0 720 24C480 48 240 6 0 36Z" fill="#f9fafb" />
          </svg>
        </div>
      </section>

      {/* ────────────────────── ZWEI BEREICHE ────────────────────── */}
      <section className="section" style={{ background: '#f9fafb' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.75rem' }} className="reveal">
            <div className="badge">Unsere Bereiche</div>
            <h2 style={{ fontSize: 'clamp(1.7rem, 3vw, 2.3rem)', fontWeight: 800 }}>
              Zwei Bereiche – ein Ansprechpartner
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginTop: '0.6rem', maxWidth: 500, margin: '0.6rem auto 0', fontSize: '0.95rem' }}>
              Egal ob Steckdose oder Solaranlage – wir sind Ihr Full-Service-Partner.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {/* Elektrotechnik */}
            <Link to="/elektrotechnik" style={{ textDecoration: 'none' }}>
              <div className="card reveal" style={{ padding: '2.25rem', overflow: 'hidden', position: 'relative', cursor: 'pointer' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, #0f3460, #1e40af)' }} />
                <div style={{
                  width: 50, height: 50, borderRadius: 12, marginBottom: '1.25rem',
                  background: 'linear-gradient(135deg, #0f172a, #1e3a5f)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Zap size={22} color="#93c5fd" />
                </div>
                <h3 style={{ fontWeight: 800, fontSize: '1.25rem', marginBottom: '0.6rem' }}>Elektrotechnik</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                  Elektroinstallation, Smart Home, Zähleranlagen, Prüfungen und Notfalldienst – normgerecht und sorgfältig.
                </p>
                <span style={{ color: '#1e40af', fontWeight: 600, fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  Mehr erfahren <ArrowRight size={14} />
                </span>
              </div>
            </Link>

            {/* Energietechnik */}
            <Link to="/energietechnik" style={{ textDecoration: 'none' }}>
              <div className="card reveal" style={{ padding: '2.25rem', overflow: 'hidden', position: 'relative', cursor: 'pointer' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, #d97706, #f59e0b)' }} />
                <div style={{
                  width: 50, height: 50, borderRadius: 12, marginBottom: '1.25rem',
                  background: 'linear-gradient(135deg, #451a03, #92400e)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Sun size={22} color="#fcd34d" />
                </div>
                <h3 style={{ fontWeight: 800, fontSize: '1.25rem', marginBottom: '0.6rem' }}>Energietechnik</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                  Photovoltaik, Stromspeicher, Wärmepumpen und E-Mobilität – wir machen Ihr Zuhause fit für die Energiezukunft.
                </p>
                <span style={{ color: '#d97706', fontWeight: 600, fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  Mehr erfahren <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ────────────────────── ÜBER UNS ────────────────────── */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
          }}>
            <div className="reveal">
              <div className="badge">Über uns</div>
              <h2 style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.1rem)', fontWeight: 800, marginBottom: '1rem' }}>
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
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
              {[
                { val: '20+', label: 'Jahre Erfahrung' },
                { val: '500+', label: 'Projekte umgesetzt' },
                { val: '4,4 ★', label: 'Google-Bewertung' },
                { val: 'Regional', label: 'Ansbach & Umgebung' },
              ].map(({ val, label }) => (
                <div key={label} style={{
                  background: '#f9fafb', borderRadius: 12, padding: '1.25rem',
                  border: '1px solid var(--border)', textAlign: 'center',
                }}>
                  <div style={{ fontWeight: 900, fontSize: '1.5rem', color: 'var(--text-primary)' }}>{val}</div>
                  <div style={{ fontSize: '0.76rem', color: 'var(--text-light)', marginTop: '0.2rem', fontWeight: 500 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────── REZENSIONEN ────────────────────── */}
      <section className="section" style={{ background: '#f9fafb' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }} className="reveal">
            <div className="badge">Kundenstimmen</div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.1rem)', fontWeight: 800 }}>Das sagen unsere Kunden</h2>
            <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', fontSize: '0.9rem' }}>
              4,4 von 5 Sternen · 29 Google-Rezensionen
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '1.25rem' }}>
            {reviews.map(r => (
              <div key={r.name} className="card reveal" style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '2px', marginBottom: '0.75rem' }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} fill={i < r.rating ? '#f59e0b' : 'none'} stroke={i < r.rating ? '#f59e0b' : '#d1d5db'} />
                  ))}
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '1rem' }}>
                  "{r.text}"
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 600, fontSize: '0.85rem' }}>{r.name}</span>
                  <span style={{ fontSize: '0.74rem', color: 'var(--text-light)' }}>{r.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────── CTA ────────────────────── */}
      <section style={{
        background: 'linear-gradient(135deg, #0b1929, #0f2744)',
        padding: '4rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Mini Sonne im CTA-Banner */}
        <svg style={{ position: 'absolute', right: '5%', top: '50%', transform: 'translateY(-50%)', opacity: 0.08, pointerEvents: 'none' }} width="200" height="200" viewBox="0 0 200 200" aria-hidden="true">
          <style>{`@keyframes ctaSunRay{0%,100%{opacity:.5}50%{opacity:1}} .csr{animation:ctaSunRay 3s ease-in-out infinite;transform-origin:100px 100px}`}</style>
          <g className="csr">
            {[0,30,60,90,120,150,180,210,240,270,300,330].map((d,i) => (
              <line key={i}
                x1={100+Math.cos(d*Math.PI/180)*60} y1={100+Math.sin(d*Math.PI/180)*60}
                x2={100+Math.cos(d*Math.PI/180)*80} y2={100+Math.sin(d*Math.PI/180)*80}
                stroke="#93c5fd" strokeWidth="3" strokeLinecap="round" />
            ))}
          </g>
          <circle cx="100" cy="100" r="48" fill="#bfdbfe" />
          <circle cx="100" cy="100" r="34" fill="#e0f2fe" />
        </svg>

        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <h2 style={{ color: '#fff', fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: '0.7rem' }}>
            Bereit für Ihr Projekt?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '1.75rem', fontSize: '0.95rem' }}>
            Wir beraten Sie kostenlos und unverbindlich – direkt vor Ort in der Region.
          </p>
          <Link to="/kontakt" className="btn-primary" style={{ fontSize: '0.95rem', padding: '0.9rem 2rem' }}>
            Jetzt Anfrage stellen <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
