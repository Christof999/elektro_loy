import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Zap, Sun, Phone, CheckCircle } from 'lucide-react';
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
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function Home() {
  useReveal();

  return (
    <>
      {/* ─────────────────── HERO ─────────────────── */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(155deg, #070d18 0%, #0c1d35 55%, #09141e 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <HeroScene />

        {/* Radiale Akzente */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 55% 70% at 85% 40%, rgba(245,158,11,0.05) 0%, transparent 65%)',
        }} />
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 40% 60% at 15% 80%, rgba(29,78,216,0.06) 0%, transparent 60%)',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '7.5rem', paddingBottom: '5rem' }}>
          {/* Zweispaltig: Text links | Card rechts */}
          <div className="hero-grid" style={{ display: 'grid', gap: '3rem', alignItems: 'center' }}>

            {/* ── Text ── */}
            <div>
              {/* Eyebrow */}
              <div className="hero-enter-1" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.4rem' }}>
                <div style={{ width: 28, height: 3, background: 'var(--primary)', borderRadius: 2 }} />
                <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>
                  Ihr Energieexperte aus Muhr am See
                </span>
              </div>

              {/* Headline */}
              <h1 className="hero-enter-2" style={{
                fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)',
                fontWeight: 900,
                color: '#fff',
                lineHeight: 1.07,
                marginBottom: '1.4rem',
                letterSpacing: '-0.03em',
              }}>
                Energie & Elektro<br />
                <span style={{ color: 'var(--primary)' }}>aus einer Hand.</span>
              </h1>

              <p className="hero-enter-3" style={{
                fontSize: '1.05rem',
                color: 'rgba(255,255,255,0.52)',
                lineHeight: 1.78,
                marginBottom: '2.25rem',
                maxWidth: 460,
              }}>
                Wir planen, installieren und betreuen Ihre Energielösung –
                von Photovoltaik bis zur Elektroinstallation, regional und persönlich.
              </p>

              {/* CTAs */}
              <div className="hero-enter-4" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', marginBottom: '2.5rem' }}>
                <Link to="/kontakt" className="btn-primary" style={{ fontSize: '0.92rem', padding: '0.88rem 2rem' }}>
                  Kostenlos anfragen <ArrowRight size={16} />
                </Link>
                <a href="tel:+4998318809600" className="btn-outline-white" style={{ fontSize: '0.92rem', padding: '0.88rem 1.8rem' }}>
                  <Phone size={15} /> 09831 880960
                </a>
              </div>

              {/* Trust chips */}
              <div className="hero-enter-5" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem' }}>
                {['Kostenlose Beratung vor Ort', 'Über 20 Jahre Erfahrung', 'Zuverlässig & termingerecht'].map(t => (
                  <span key={t} style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
                    padding: '0.32rem 0.85rem',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.09)',
                    borderRadius: 100,
                    fontSize: '0.78rem',
                    fontWeight: 500,
                    color: 'rgba(255,255,255,0.58)',
                  }}>
                    <span style={{ width: 5, height: 5, background: 'var(--primary)', borderRadius: '50%', flexShrink: 0 }} />
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* ── Floating Glassmorphic Card (nur Desktop) ── */}
            <div className="hero-anim hero-enter-card" style={{ maxWidth: 300 }}>
              <div style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 20,
                padding: '1.75rem',
                backdropFilter: 'blur(24px)',
              }}>
                {/* Bewertung */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.4rem' }}>
                  <span style={{ fontSize: '2.6rem', fontWeight: 900, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1 }}>4,4</span>
                  <div>
                    <div style={{ display: 'flex', gap: 3, marginBottom: '0.25rem' }}>
                      {[1,2,3,4,5].map(s => (
                        <Star key={s} size={13}
                          fill={s <= 4 ? '#f59e0b' : 'none'}
                          stroke="#f59e0b"
                          strokeWidth={s <= 4 ? 0 : 1.5}
                        />
                      ))}
                    </div>
                    <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>
                      29 Google-Rezensionen
                    </span>
                  </div>
                </div>

                <div style={{ height: 1, background: 'rgba(255,255,255,0.07)', marginBottom: '1.25rem' }} />

                {/* Stats */}
                {[
                  { val: '20+',      label: 'Jahre Erfahrung' },
                  { val: '500+',     label: 'Projekte' },
                  { val: 'Regional', label: 'Ansbach & Umgebung' },
                ].map(({ val, label }) => (
                  <div key={label} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    paddingBottom: '0.7rem', marginBottom: '0.7rem',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.38)', fontWeight: 500 }}>{label}</span>
                    <span style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.82)', fontWeight: 700 }}>{val}</span>
                  </div>
                ))}

                <Link to="/kontakt" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                  marginTop: '0.5rem',
                  padding: '0.7rem',
                  background: 'var(--primary)',
                  color: '#fff',
                  borderRadius: 10,
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  textDecoration: 'none',
                  transition: 'background 150ms var(--ease-out), transform 150ms var(--ease-out)',
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--primary-dark)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  Jetzt anfragen <ArrowRight size={14} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────── ZWEI BEREICHE ─────────────────── */}
      <section className="section" style={{ background: 'var(--bg-white)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ maxWidth: 560, marginBottom: '3.5rem' }} className="reveal">
            <div className="section-eyebrow"><span>Unsere Bereiche</span></div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, marginBottom: '0.75rem', letterSpacing: '-0.025em' }}>
              Zwei Bereiche –<br />ein Ansprechpartner
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.97rem', lineHeight: 1.75 }}>
              Egal ob Steckdose oder Solaranlage – wir sind Ihr Full-Service-Partner
              für alles rund um Elektro und Energie.
            </p>
          </div>

          <div className="stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>

            <Link to="/elektrotechnik" style={{ textDecoration: 'none' }}>
              <div className="card reveal" style={{ padding: '2.5rem', cursor: 'pointer', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, #1d4ed8, #60a5fa)' }} />
                <div style={{
                  width: 52, height: 52, borderRadius: 14, marginBottom: '1.75rem',
                  background: 'rgba(29,78,216,0.07)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: '1px solid rgba(29,78,216,0.12)',
                }}>
                  <Zap size={23} color="#1d4ed8" />
                </div>
                <h3 style={{ fontWeight: 800, fontSize: '1.3rem', marginBottom: '0.65rem', letterSpacing: '-0.015em' }}>Elektrotechnik</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.72, marginBottom: '1.75rem' }}>
                  Elektroinstallation, Smart Home, Zähleranlagen, Prüfungen und Notfalldienst –
                  normgerecht und sorgfältig ausgeführt.
                </p>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                  color: '#1d4ed8', fontWeight: 600, fontSize: '0.875rem',
                }}>
                  Mehr erfahren <ArrowRight size={14} />
                </span>
              </div>
            </Link>

            <Link to="/energietechnik" style={{ textDecoration: 'none' }}>
              <div className="card reveal" style={{ padding: '2.5rem', cursor: 'pointer', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, #d97706, #fbbf24)' }} />
                <div style={{
                  width: 52, height: 52, borderRadius: 14, marginBottom: '1.75rem',
                  background: 'rgba(245,158,11,0.07)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: '1px solid rgba(245,158,11,0.14)',
                }}>
                  <Sun size={23} color="#d97706" />
                </div>
                <h3 style={{ fontWeight: 800, fontSize: '1.3rem', marginBottom: '0.65rem', letterSpacing: '-0.015em' }}>Energietechnik</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.72, marginBottom: '1.75rem' }}>
                  Photovoltaik, Stromspeicher, Wärmepumpen und E-Mobilität –
                  wir machen Ihr Zuhause fit für die Energiezukunft.
                </p>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                  color: '#d97706', fontWeight: 600, fontSize: '0.875rem',
                }}>
                  Mehr erfahren <ArrowRight size={14} />
                </span>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* ─────────────────── ÜBER UNS ─────────────────── */}
      <section className="section" style={{ background: 'var(--bg-light)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>

            <div className="reveal">
              <div className="section-eyebrow"><span>Über uns</span></div>
              <h2 style={{ fontSize: 'clamp(1.65rem, 2.8vw, 2.3rem)', fontWeight: 800, marginBottom: '1.1rem', letterSpacing: '-0.025em' }}>
                Inhabergeführt.<br />Regional. Verlässlich.
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.82, marginBottom: '0.85rem', fontSize: '0.95rem' }}>
                Als Familienunternehmen aus Muhr am See stehen wir für persönliche Beratung und
                handwerkliche Sorgfalt. Seit über 20 Jahren sind wir in der Region Ansbach,
                Gunzenhausen, Nürnberg und Ingolstadt für unsere Kunden im Einsatz.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.82, marginBottom: '2rem', fontSize: '0.95rem' }}>
                Kein Callcenter, keine anonymen Strukturen – bei uns sprechen Sie direkt mit dem
                Team, das Ihr Projekt auch umsetzt.
              </p>
              <Link to="/kontakt" className="btn-outline" style={{ fontSize: '0.9rem' }}>
                Kontakt aufnehmen <ArrowRight size={15} />
              </Link>
            </div>

            <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {[
                { val: '20+',  label: 'Jahre Erfahrung',    sub: 'Seit 2004 in der Region aktiv' },
                { val: '500+', label: 'Projekte umgesetzt', sub: 'Privat, Gewerbe & Industrie' },
                { val: '4,4★', label: 'Google-Bewertung',   sub: '29 verifizierte Rezensionen' },
              ].map(({ val, label, sub }) => (
                <div key={label} style={{
                  display: 'flex', alignItems: 'center', gap: '1.25rem',
                  background: 'var(--bg-white)',
                  borderRadius: 'var(--r-md)',
                  padding: '1.2rem 1.5rem',
                  border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow-xs)',
                }}>
                  <div style={{
                    fontWeight: 900, fontSize: '1.55rem', color: 'var(--text-primary)',
                    letterSpacing: '-0.03em', lineHeight: 1, minWidth: 62,
                  }}>{val}</div>
                  <div style={{ borderLeft: '1.5px solid var(--border)', paddingLeft: '1.25rem' }}>
                    <div style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--text-primary)' }}>{label}</div>
                    <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', marginTop: '0.18rem' }}>{sub}</div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────── KUNDENSTIMMEN ─────────────────── */}
      <section className="section" style={{ background: 'var(--bg-white)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }} className="reveal">
            <div>
              <div className="section-eyebrow"><span>Kundenstimmen</span></div>
              <h2 style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.3rem)', fontWeight: 800, letterSpacing: '-0.025em' }}>
                Das sagen unsere Kunden
              </h2>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <div style={{ display: 'flex', gap: 3 }}>
                {[1,2,3,4,5].map(s => (
                  <Star key={s} size={13} fill={s <= 4 ? '#f59e0b' : 'none'} stroke="#f59e0b" strokeWidth={s <= 4 ? 0 : 1.5} />
                ))}
              </div>
              <span style={{ fontSize: '0.84rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                4,4 · 29 Google-Rezensionen
              </span>
            </div>
          </div>

          <div className="stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {reviews.map(r => (
              <div key={r.name} className="card reveal" style={{ padding: '2rem', position: 'relative', overflow: 'hidden' }}>
                {/* Dekoratives Anführungszeichen */}
                <div style={{
                  position: 'absolute', top: '0.75rem', right: '1.25rem',
                  fontFamily: 'Georgia, serif', fontSize: '5rem', lineHeight: 1,
                  color: 'rgba(245,158,11,0.07)', userSelect: 'none', pointerEvents: 'none',
                  fontWeight: 900,
                }}>"</div>

                <div style={{ display: 'flex', gap: 3, marginBottom: '1rem' }}>
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} size={13} fill="#f59e0b" stroke="#f59e0b" strokeWidth={0} />
                  ))}
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.78, marginBottom: '1.5rem', fontStyle: 'italic' }}>
                  „{r.text}"
                </p>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.1rem', borderTop: '1px solid var(--border)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <div style={{
                      width: 34, height: 34, borderRadius: '50%',
                      background: 'var(--bg-medium)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontWeight: 700, fontSize: '0.82rem', color: 'var(--text-secondary)',
                      flexShrink: 0, border: '1px solid var(--border)',
                    }}>
                      {r.name.charAt(0).toUpperCase()}
                    </div>
                    <span style={{ fontWeight: 600, fontSize: '0.87rem' }}>{r.name}</span>
                  </div>
                  <span style={{ fontSize: '0.73rem', color: 'var(--text-muted)' }}>{r.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────── CTA ─────────────────── */}
      <section style={{
        background: 'linear-gradient(150deg, #070d18 0%, #0c1d35 100%)',
        padding: '5.5rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Glow */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 60% 100% at 50% 110%, rgba(245,158,11,0.09) 0%, transparent 55%)',
        }} />
        {/* Subtle grid texture */}
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.025, pointerEvents: 'none' }} aria-hidden="true">
          <defs>
            <pattern id="cta-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: 520, margin: '0 auto', textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <div style={{ width: 32, height: 3, background: 'var(--primary)', borderRadius: 2 }} />
            </div>
            <h2 style={{
              color: '#fff', fontWeight: 800,
              fontSize: 'clamp(1.7rem, 3.2vw, 2.4rem)',
              marginBottom: '0.9rem',
              letterSpacing: '-0.03em',
            }}>
              Bereit für Ihr Projekt?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', marginBottom: '2.25rem', fontSize: '0.97rem', lineHeight: 1.75 }}>
              Wir beraten Sie kostenlos und unverbindlich –
              direkt vor Ort in der Region Ansbach und Umgebung.
            </p>
            <div style={{ display: 'flex', gap: '0.85rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/kontakt" className="btn-primary" style={{ fontSize: '0.93rem', padding: '0.9rem 2.1rem' }}>
                Jetzt Anfrage stellen <ArrowRight size={16} />
              </Link>
              <a href="tel:+4998318809600" className="btn-outline-white" style={{ fontSize: '0.93rem' }}>
                <Phone size={15} /> 09831 880960
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
