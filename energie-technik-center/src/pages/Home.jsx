import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Star, Phone } from 'lucide-react';
import { useMeta } from '../hooks/useMeta';

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

/* ── Cinematic orb background ── */
function HeroBg() {
  return (
    <div aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {/* Deep base */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, #02050d 0%, #060e1c 55%, #040a14 100%)' }} />

      {/* Primary amber orb */}
      <div style={{
        position: 'absolute',
        top: '8%', right: '12%',
        width: 680, height: 680,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(245,158,11,0.18) 0%, rgba(245,158,11,0.07) 35%, transparent 68%)',
        filter: 'blur(48px)',
        animation: 'orbFloat 18s ease-in-out infinite',
      }} />

      {/* Secondary deep-blue orb */}
      <div style={{
        position: 'absolute',
        bottom: '15%', left: '5%',
        width: 520, height: 520,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(29,78,216,0.14) 0%, rgba(14,40,120,0.06) 45%, transparent 68%)',
        filter: 'blur(64px)',
        animation: 'orbFloat 24s ease-in-out infinite reverse',
      }} />

      {/* Accent warm fill top-left */}
      <div style={{
        position: 'absolute',
        top: '-10%', left: '-5%',
        width: 420, height: 420,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(251,191,36,0.06) 0%, transparent 60%)',
        filter: 'blur(40px)',
        animation: 'orbFloat 14s ease-in-out infinite 3s',
      }} />

      {/* Fine noise grain overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
        opacity: 0.55,
      }} />

      {/* Subtle vignette */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 55%, rgba(2,5,13,0.6) 100%)',
      }} />
    </div>
  );
}

function ServiceRow({ num, title, description, to, isLast }) {
  const rowRef = useRef(null);

  const handleEnter = () => {
    const el = rowRef.current;
    if (!el) return;
    const t = el.querySelector('.svc-title');
    const a = el.querySelector('.svc-arrow');
    if (t) t.style.color = 'var(--primary)';
    if (a) { a.style.color = 'var(--primary)'; a.style.transform = 'translate(3px,-3px)'; }
  };
  const handleLeave = () => {
    const el = rowRef.current;
    if (!el) return;
    const t = el.querySelector('.svc-title');
    const a = el.querySelector('.svc-arrow');
    if (t) t.style.color = '#fff';
    if (a) { a.style.color = 'rgba(255,255,255,0.25)'; a.style.transform = 'translate(0,0)'; }
  };

  return (
    <Link
      to={to}
      ref={rowRef}
      className="reveal"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{
        display: 'flex', alignItems: 'center', gap: '2.5rem',
        padding: '2.25rem 0',
        borderBottom: isLast ? 'none' : '1px solid rgba(255,255,255,0.06)',
        textDecoration: 'none', cursor: 'pointer',
        transition: 'background 200ms var(--ease-out)',
      }}
    >
      <span style={{
        fontVariantNumeric: 'tabular-nums',
        fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em',
        color: 'rgba(255,255,255,0.18)', minWidth: 28, flexShrink: 0,
      }}>
        {num}
      </span>

      <div style={{ flex: 1, minWidth: 0 }}>
        <div className="svc-title" style={{
          fontSize: 'clamp(1.4rem, 2.4vw, 1.85rem)', fontWeight: 800,
          color: '#fff', letterSpacing: '-0.025em', lineHeight: 1.1,
          marginBottom: '0.55rem',
          transition: 'color 200ms var(--ease-out)',
        }}>
          {title}
        </div>
        <p style={{ color: 'rgba(255,255,255,0.38)', fontSize: '0.88rem', lineHeight: 1.7, maxWidth: 560 }}>
          {description}
        </p>
      </div>

      <ArrowUpRight
        className="svc-arrow"
        size={22}
        style={{
          color: 'rgba(255,255,255,0.25)', flexShrink: 0,
          transition: 'color 200ms var(--ease-out), transform 200ms var(--ease-out)',
        }}
      />
    </Link>
  );
}

export default function Home() {
  useReveal();
  useMeta({
    title: null,
    description: 'Energie-Technik-Center Loy GmbH & Co. KG – Ihr Experte für Photovoltaik, Wärmepumpen, E-Mobilität und Elektroinstallation in der Region Ansbach.',
  });

  return (
    <>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section
        aria-label="Hero"
        style={{
          minHeight: '100vh', position: 'relative', overflow: 'hidden',
          display: 'flex', alignItems: 'flex-end',
        }}
      >
        <HeroBg />

        {/* Bottom-left hero content */}
        <div className="container" style={{ position: 'relative', zIndex: 1, paddingBottom: '5.5rem', paddingTop: '10rem', width: '100%' }}>
          <div style={{ maxWidth: 680 }}>

            <div className="hero-enter-1" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.6rem' }}>
              <div style={{ width: 20, height: 1.5, background: 'var(--primary)', borderRadius: 1 }} />
              <span style={{
                fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.13em',
                textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)',
              }}>
                Energie-Technik-Center Loy · Muhr am See
              </span>
            </div>

            <h1 className="hero-enter-2" style={{
              fontSize: 'clamp(2.8rem, 6.5vw, 5.2rem)',
              fontWeight: 900, color: '#fff', lineHeight: 1.03,
              letterSpacing: '-0.035em', marginBottom: '1.6rem',
            }}>
              Energie & Elektro<br />
              <span style={{ color: 'var(--primary)' }}>aus einer Hand.</span>
            </h1>

            <p className="hero-enter-3" style={{
              fontSize: 'clamp(0.95rem, 1.4vw, 1.08rem)',
              color: 'rgba(255,255,255,0.42)',
              lineHeight: 1.82, marginBottom: '2.5rem', maxWidth: 480,
            }}>
              Photovoltaik, Wärmepumpen, Elektroinstallation —
              wir planen und betreuen Ihre Energielösung regional und persönlich.
            </p>

            <div className="hero-enter-4" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <Link to="/kontakt" className="btn-primary" style={{ fontSize: '0.9rem', padding: '0.85rem 1.9rem' }}>
                Kostenlos anfragen <ArrowRight size={15} />
              </Link>
              <a href="tel:+4998318809600" className="btn-outline-white" style={{ fontSize: '0.9rem', padding: '0.85rem 1.7rem' }}>
                <Phone size={14} /> 09831 880960
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator — bottom right */}
        <div className="hero-enter-5" style={{
          position: 'absolute', bottom: '2.5rem', right: '2.5rem',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.6rem',
          zIndex: 2,
        }}>
          <span style={{ fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', writingMode: 'vertical-rl' }}>
            Scroll
          </span>
          <div style={{ width: 1, height: 56, background: 'rgba(255,255,255,0.1)', borderRadius: 1, position: 'relative', overflow: 'hidden' }}>
            <div style={{
              position: 'absolute', left: 0, right: 0, height: '40%',
              background: 'linear-gradient(to bottom, var(--primary), transparent)',
              borderRadius: 1, animation: 'scrollLine 2s ease-in-out infinite',
            }} />
          </div>
        </div>

        {/* Bottom gradient fade-into-dark */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 160,
          background: 'linear-gradient(to top, #060e1c, transparent)',
          pointerEvents: 'none', zIndex: 1,
        }} />
      </section>

      {/* ═══════════════════ STATS STRIP ═══════════════════ */}
      <div style={{ background: '#060e1c', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0 }}>
            {[
              { val: '20+',  label: 'Jahre Erfahrung' },
              { val: '500+', label: 'Projekte umgesetzt' },
              { val: '4,4★', label: 'Google-Bewertung' },
            ].map(({ val, label }, i) => (
              <div key={label} style={{
                padding: '2rem 1.5rem',
                borderRight: i < 2 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                textAlign: 'center',
              }}>
                <div style={{ fontWeight: 900, fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#fff', letterSpacing: '-0.04em', lineHeight: 1, marginBottom: '0.35rem' }}>
                  {val}
                </div>
                <div style={{ fontSize: '0.75rem', fontWeight: 500, color: 'rgba(255,255,255,0.32)', letterSpacing: '0.03em' }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════ LEISTUNGEN ═══════════════════ */}
      <section aria-label="Unsere Bereiche" style={{ background: '#060e1c', padding: '6rem 0 7rem' }}>
        <div className="container">
          <div className="reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '1rem' }}>
            <div>
              <div className="section-eyebrow section-eyebrow-white" style={{ marginBottom: '0.8rem' }}><span>Leistungen</span></div>
              <h2 style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em' }}>
                Was wir für Sie leisten
              </h2>
            </div>
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: '1.5rem' }}>
            <ServiceRow
              num="01"
              to="/elektrotechnik"
              title="Elektrotechnik"
              description="Elektroinstallation, Smart Home, Zähleranlagen, Prüfungen und Notfalldienst – normgerecht und sorgfältig ausgeführt."
            />
            <ServiceRow
              num="02"
              to="/energietechnik"
              title="Energietechnik"
              description="Photovoltaik, Stromspeicher, Wärmepumpen und E-Mobilität – wir machen Ihr Zuhause fit für die Energiezukunft."
              isLast
            />
          </div>
        </div>
      </section>

      {/* Gradient bridge dark → light */}
      <div style={{ height: 120, background: 'linear-gradient(to bottom, #060e1c, var(--bg-light))', pointerEvents: 'none' }} />

      {/* ═══════════════════ ÜBER UNS ═══════════════════ */}
      <section aria-label="Über uns" className="section-sm" style={{ background: 'var(--bg-light)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>

            <div className="reveal">
              <div className="section-eyebrow" style={{ marginBottom: '1rem' }}><span>Über uns</span></div>
              <h2 style={{ fontSize: 'clamp(1.65rem, 2.8vw, 2.3rem)', fontWeight: 800, marginBottom: '1.2rem', letterSpacing: '-0.025em' }}>
                Inhabergeführt.<br />Regional. Verlässlich.
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.82, marginBottom: '0.9rem', fontSize: '0.95rem' }}>
                Als Familienunternehmen aus Muhr am See stehen wir für persönliche Beratung und
                handwerkliche Sorgfalt. Seit über 20 Jahren sind wir in der Region Ansbach,
                Gunzenhausen, Nürnberg und Ingolstadt für unsere Kunden im Einsatz.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.82, marginBottom: '2.2rem', fontSize: '0.95rem' }}>
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
                  borderRadius: 'var(--r-md)', padding: '1.2rem 1.5rem',
                  border: '1px solid var(--border)', boxShadow: 'var(--shadow-xs)',
                }}>
                  <div style={{ fontWeight: 900, fontSize: '1.55rem', color: 'var(--text-primary)', letterSpacing: '-0.03em', lineHeight: 1, minWidth: 62 }}>{val}</div>
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

      {/* ═══════════════════ KUNDENSTIMMEN ═══════════════════ */}
      <section aria-label="Kundenstimmen" className="section" style={{ background: 'var(--bg-white)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }} className="reveal">
            <div>
              <div className="section-eyebrow" style={{ marginBottom: '0.8rem' }}><span>Kundenstimmen</span></div>
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
                <div style={{
                  position: 'absolute', top: '0.75rem', right: '1.25rem',
                  fontFamily: 'Georgia, serif', fontSize: '5rem', lineHeight: 1,
                  color: 'rgba(245,158,11,0.07)', userSelect: 'none', pointerEvents: 'none', fontWeight: 900,
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

      {/* ═══════════════════ CTA ═══════════════════ */}
      <section aria-label="Kontaktaufforderung" style={{
        background: 'linear-gradient(150deg, #060c18 0%, #0c1d35 100%)',
        padding: '6rem 0', position: 'relative', overflow: 'hidden',
      }}>
        {/* Ambient orb in CTA */}
        <div aria-hidden="true" style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600, height: 600, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245,158,11,0.09) 0%, transparent 60%)',
          filter: 'blur(60px)', pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: 540, margin: '0 auto', textAlign: 'center' }}>
            <div className="reveal">
              <div className="section-eyebrow section-eyebrow-white" style={{ justifyContent: 'center', marginBottom: '1.25rem' }}><span>Kontakt</span></div>
              <h2 style={{ color: '#fff', fontWeight: 900, fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', marginBottom: '1rem', letterSpacing: '-0.035em' }}>
                Bereit für Ihr Projekt?
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.4)', marginBottom: '2.5rem', fontSize: '0.97rem', lineHeight: 1.78 }}>
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
        </div>
      </section>
    </>
  );
}
