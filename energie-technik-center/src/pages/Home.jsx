import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Zap, Sun, Phone } from 'lucide-react';
import HeroScene from '../components/HeroScene';

const reviews = [
  { name: 'Jan Reimann',      rating: 5, text: 'Top Firma, manchmal dauerts aber es wird jedes Problem gelöst.',                                                              time: 'vor 4 Monaten' },
  { name: 'diamtsternchen40', rating: 5, text: 'Planung, Beratung, termingerechte Ausführung, Monteure sorgfältig und freundlich, alles an einem Tag fertig!',               time: 'vor einem Jahr' },
  { name: 'Timo Schmid',      rating: 5, text: 'Absolut begeistert – von der Auftragserteilung bis zur Installation keine 8 Wochen, zuverlässig und zu einem fairen Preis.', time: 'vor 3 Jahren' },
];

const stats = [
  { val: '20+',   label: 'Jahre Erfahrung' },
  { val: '500+',  label: 'Projekte umgesetzt' },
  { val: '4,4 ★', label: 'Google-Bewertung' },
  { val: 'Regional', label: 'Ansbach & Umgebung' },
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
      {/* ── HERO ── */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: 'linear-gradient(155deg, #080e1a 0%, #0d1f38 60%, #0a1520 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <HeroScene />

        {/* Subtle radial accent */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 60% 50% at 80% 60%, rgba(245,158,11,0.06) 0%, transparent 70%)',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '8rem', paddingBottom: '5rem' }}>
          {/* Eyebrow */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.5rem' }}>
            <div style={{ width: 28, height: 3, background: 'var(--primary)', borderRadius: 2 }} />
            <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>
              Ihr Energieexperte aus Muhr am See
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontSize: 'clamp(2.4rem, 5.5vw, 4rem)',
            fontWeight: 900,
            color: '#fff',
            lineHeight: 1.08,
            marginBottom: '1.5rem',
            letterSpacing: '-0.03em',
            maxWidth: 680,
          }}>
            Energie & Elektro<br />
            <span style={{ color: 'var(--primary)' }}>aus einer Hand.</span>
          </h1>

          <p style={{
            fontSize: '1.05rem',
            color: 'rgba(255,255,255,0.58)',
            lineHeight: 1.75,
            marginBottom: '2.5rem',
            maxWidth: 480,
          }}>
            Wir planen, installieren und betreuen Ihre Energielösung –
            von Photovoltaik bis zur Elektroinstallation, regional und persönlich.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', marginBottom: '3.5rem' }}>
            <Link to="/kontakt" className="btn-primary" style={{ fontSize: '0.92rem', padding: '0.85rem 2rem' }}>
              Kostenlos anfragen <ArrowRight size={16} />
            </Link>
            <a href="tel:+4998318809600" className="btn-outline-white" style={{ fontSize: '0.92rem', padding: '0.85rem 1.8rem' }}>
              <Phone size={15} /> 09831 880960
            </a>
          </div>

          {/* Trust chips */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
            {['Kostenlose Beratung vor Ort', 'Über 20 Jahre Erfahrung', 'Zuverlässig & termingerecht'].map(t => (
              <span key={t} style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
                padding: '0.35rem 0.85rem',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 100,
                fontSize: '0.8rem',
                fontWeight: 500,
                color: 'rgba(255,255,255,0.65)',
              }}>
                <span style={{ width: 6, height: 6, background: 'var(--primary)', borderRadius: '50%', flexShrink: 0 }} />
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Clean bottom edge */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 1, background: 'rgba(255,255,255,0.05)' }} />
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ background: 'var(--bg-white)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
          }}>
            {stats.map((s, i) => (
              <div key={s.label} style={{
                padding: '2rem 1.5rem',
                textAlign: 'center',
                borderRight: i < 3 ? '1px solid var(--border)' : 'none',
              }}>
                <div style={{
                  fontWeight: 900, fontSize: '1.85rem', color: 'var(--text-primary)',
                  letterSpacing: '-0.03em', lineHeight: 1,
                }}>{s.val}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.4rem', fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 640px) {
            .stats-grid { grid-template-columns: repeat(2,1fr) !important; }
          }
        `}</style>
      </section>

      {/* ── ZWEI BEREICHE ── */}
      <section className="section" style={{ background: 'var(--bg-white)' }}>
        <div className="container">
          <div style={{ maxWidth: 560, marginBottom: '3rem' }} className="reveal">
            <div className="section-eyebrow"><span>Unsere Bereiche</span></div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.4rem)', fontWeight: 800, marginBottom: '0.75rem' }}>
              Zwei Bereiche –<br />ein Ansprechpartner
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: 1.75 }}>
              Egal ob Steckdose oder Solaranlage – wir sind Ihr Full-Service-Partner
              für alles rund um Elektro und Energie.
            </p>
          </div>

          <div className="stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem' }}>
            {/* Elektrotechnik */}
            <Link to="/elektrotechnik" style={{ textDecoration: 'none' }}>
              <div className="card reveal" style={{
                padding: '2.5rem',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 4,
                  background: 'linear-gradient(90deg, #1d4ed8, #3b82f6)',
                }} />
                <div style={{
                  width: 52, height: 52, borderRadius: 14, marginBottom: '1.5rem',
                  background: 'rgba(29,78,216,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Zap size={24} color="#1d4ed8" />
                </div>
                <h3 style={{ fontWeight: 800, fontSize: '1.3rem', marginBottom: '0.65rem', color: 'var(--text-primary)' }}>
                  Elektrotechnik
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  Elektroinstallation, Smart Home, Zähleranlagen, Prüfungen und Notfalldienst –
                  normgerecht und sorgfältig ausgeführt.
                </p>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                  color: '#1d4ed8', fontWeight: 600, fontSize: '0.88rem',
                  borderBottom: '1.5px solid rgba(29,78,216,0.25)',
                  paddingBottom: '0.1rem',
                }}>
                  Mehr erfahren <ArrowRight size={14} />
                </span>
              </div>
            </Link>

            {/* Energietechnik */}
            <Link to="/energietechnik" style={{ textDecoration: 'none' }}>
              <div className="card reveal" style={{
                padding: '2.5rem',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 4,
                  background: 'linear-gradient(90deg, #d97706, #f59e0b)',
                }} />
                <div style={{
                  width: 52, height: 52, borderRadius: 14, marginBottom: '1.5rem',
                  background: 'rgba(245,158,11,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Sun size={24} color="#d97706" />
                </div>
                <h3 style={{ fontWeight: 800, fontSize: '1.3rem', marginBottom: '0.65rem', color: 'var(--text-primary)' }}>
                  Energietechnik
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  Photovoltaik, Stromspeicher, Wärmepumpen und E-Mobilität –
                  wir machen Ihr Zuhause fit für die Energiezukunft.
                </p>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                  color: '#d97706', fontWeight: 600, fontSize: '0.88rem',
                  borderBottom: '1.5px solid rgba(217,119,6,0.25)',
                  paddingBottom: '0.1rem',
                }}>
                  Mehr erfahren <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── ÜBER UNS ── */}
      <section className="section" style={{ background: 'var(--bg-light)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}>
            <div className="reveal">
              <div className="section-eyebrow"><span>Über uns</span></div>
              <h2 style={{ fontSize: 'clamp(1.65rem, 2.8vw, 2.2rem)', fontWeight: 800, marginBottom: '1.1rem' }}>
                Inhabergeführt.<br />Regional. Verlässlich.
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '0.85rem', fontSize: '0.95rem' }}>
                Als Familienunternehmen aus Muhr am See stehen wir für persönliche Beratung und
                handwerkliche Sorgfalt. Seit über 20 Jahren sind wir in der Region Ansbach,
                Gunzenhausen, Nürnberg und Ingolstadt für unsere Kunden im Einsatz.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.75rem', fontSize: '0.95rem' }}>
                Kein Callcenter, keine anonymen Strukturen – bei uns sprechen Sie direkt mit dem
                Team, das Ihr Projekt auch umsetzt.
              </p>
              <Link to="/kontakt" className="btn-outline" style={{ fontSize: '0.9rem' }}>
                Kontakt aufnehmen <ArrowRight size={15} />
              </Link>
            </div>

            {/* Compact stat cards */}
            <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {[
                { val: '20+', label: 'Jahre Erfahrung', sub: 'Seit 2004 in der Region aktiv' },
                { val: '500+', label: 'Projekte umgesetzt', sub: 'Privat, Gewerbe & Industrie' },
                { val: '4,4 ★', label: 'Google-Bewertung', sub: 'Aus 29 verifizierten Rezensionen' },
              ].map(({ val, label, sub }) => (
                <div key={label} style={{
                  display: 'flex', alignItems: 'center', gap: '1.25rem',
                  background: 'var(--bg-white)', borderRadius: 'var(--r-md)',
                  padding: '1.25rem 1.5rem',
                  border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow-xs)',
                }}>
                  <div style={{
                    fontWeight: 900, fontSize: '1.6rem', color: 'var(--text-primary)',
                    letterSpacing: '-0.03em', lineHeight: 1, minWidth: 64,
                  }}>{val}</div>
                  <div style={{ borderLeft: '1.5px solid var(--border)', paddingLeft: '1.25rem' }}>
                    <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)' }}>{label}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── KUNDENSTIMMEN ── */}
      <section className="section" style={{ background: 'var(--bg-white)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.75rem', flexWrap: 'wrap', gap: '1rem' }} className="reveal">
            <div>
              <div className="section-eyebrow"><span>Kundenstimmen</span></div>
              <h2 style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: 800 }}>Das sagen unsere Kunden</h2>
            </div>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>
              4,4 / 5 · 29 Google-Rezensionen
            </span>
          </div>

          <div className="stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {reviews.map(r => (
              <div key={r.name} className="card reveal" style={{ padding: '2rem', position: 'relative', overflow: 'hidden' }}>
                {/* Decorative quote */}
                <div style={{
                  position: 'absolute', top: '1rem', right: '1.25rem',
                  fontFamily: 'Georgia, serif',
                  fontSize: '4.5rem', lineHeight: 1, fontWeight: 900,
                  color: 'var(--primary-bg)',
                  userSelect: 'none',
                  pointerEvents: 'none',
                }}>"</div>

                {/* Stars */}
                <div style={{ display: 'flex', gap: 3, marginBottom: '1rem' }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={13} fill={i < r.rating ? '#f59e0b' : 'none'} stroke={i < r.rating ? '#f59e0b' : '#d1d5db'} />
                  ))}
                </div>

                <p style={{
                  color: 'var(--text-secondary)', fontSize: '0.9rem',
                  lineHeight: 1.75, marginBottom: '1.5rem',
                  fontStyle: 'italic',
                }}>
                  „{r.text}"
                </p>

                <div style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  paddingTop: '1.1rem', borderTop: '1px solid var(--border)',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <div style={{
                      width: 34, height: 34, borderRadius: '50%',
                      background: 'var(--bg-medium)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontWeight: 700, fontSize: '0.85rem', color: 'var(--text-secondary)',
                      flexShrink: 0,
                    }}>
                      {r.name.charAt(0).toUpperCase()}
                    </div>
                    <span style={{ fontWeight: 600, fontSize: '0.88rem' }}>{r.name}</span>
                  </div>
                  <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>{r.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{
        background: 'linear-gradient(145deg, #0a1520, #0d1f38)',
        padding: '5rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Subtle glow */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 50% 80% at 50% 100%, rgba(245,158,11,0.07) 0%, transparent 60%)',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: 520, margin: '0 auto', textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <div style={{ width: 28, height: 3, background: 'var(--primary)', borderRadius: 2 }} />
            </div>
            <h2 style={{
              color: '#fff', fontWeight: 800,
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              marginBottom: '0.85rem',
              letterSpacing: '-0.025em',
            }}>
              Bereit für Ihr Projekt?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '2rem', fontSize: '0.95rem', lineHeight: 1.7 }}>
              Wir beraten Sie kostenlos und unverbindlich –
              direkt vor Ort in der Region Ansbach und Umgebung.
            </p>
            <div style={{ display: 'flex', gap: '0.85rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/kontakt" className="btn-primary" style={{ fontSize: '0.92rem', padding: '0.9rem 2rem' }}>
                Jetzt Anfrage stellen <ArrowRight size={16} />
              </Link>
              <a href="tel:+4998318809600" className="btn-outline-white" style={{ fontSize: '0.92rem' }}>
                <Phone size={15} /> 09831 880960
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
