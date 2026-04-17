import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Battery, Car, Thermometer, CheckCircle, ArrowRight, Phone } from 'lucide-react';

/* ── Animated SVG Illustrations ── */

function SolarIllustration() {
  return (
    <svg viewBox="0 0 220 110" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <style>{`
        @keyframes e-sun-ray{0%,100%{opacity:.5}50%{opacity:1}}
        @keyframes e-shine{0%,100%{opacity:0}50%{opacity:.35}}
        @keyframes e-flow{0%{stroke-dashoffset:180}100%{stroke-dashoffset:0}}
        .es-ray{animation:e-sun-ray 3s ease-in-out infinite;transform-origin:178px 28px}
        .es-s1{animation:e-shine 4s ease-in-out infinite 0s}
        .es-s2{animation:e-shine 4s ease-in-out infinite 2s}
        .es-fl{stroke-dasharray:180;animation:e-flow 2.5s linear infinite}
      `}</style>
      <rect width="220" height="110" rx="10" fill="#fefce8"/>
      <ellipse cx="110" cy="100" rx="110" ry="18" fill="#d1fae5" opacity="0.6"/>
      <g className="es-ray">
        {[0,45,90,135,180,225,270,315].map((d,i)=>(
          <line key={i}
            x1={178+Math.cos(d*Math.PI/180)*20} y1={28+Math.sin(d*Math.PI/180)*20}
            x2={178+Math.cos(d*Math.PI/180)*27} y2={28+Math.sin(d*Math.PI/180)*27}
            stroke="#f59e0b" strokeWidth="2" strokeLinecap="round"/>
        ))}
      </g>
      <circle cx="178" cy="28" r="14" fill="#fcd34d" opacity="0.3"/>
      <circle cx="178" cy="28" r="10" fill="#f59e0b"/>
      <g transform="translate(28,55) rotate(-14)">
        <rect width="54" height="34" rx="2" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="0.7"/>
        <line x1="18" y1="0" x2="18" y2="34" stroke="#3b82f6" strokeWidth="0.5"/>
        <line x1="36" y1="0" x2="36" y2="34" stroke="#3b82f6" strokeWidth="0.5"/>
        <line x1="0" y1="11" x2="54" y2="11" stroke="#3b82f6" strokeWidth="0.5"/>
        <line x1="0" y1="22" x2="54" y2="22" stroke="#3b82f6" strokeWidth="0.5"/>
        <rect className="es-s1" width="54" height="34" rx="2" fill="white"/>
      </g>
      <g transform="translate(88,48) rotate(-14)">
        <rect width="54" height="34" rx="2" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="0.7"/>
        <line x1="18" y1="0" x2="18" y2="34" stroke="#3b82f6" strokeWidth="0.5"/>
        <line x1="36" y1="0" x2="36" y2="34" stroke="#3b82f6" strokeWidth="0.5"/>
        <line x1="0" y1="11" x2="54" y2="11" stroke="#3b82f6" strokeWidth="0.5"/>
        <line x1="0" y1="22" x2="54" y2="22" stroke="#3b82f6" strokeWidth="0.5"/>
        <rect className="es-s2" width="54" height="34" rx="2" fill="white"/>
      </g>
      <path className="es-fl" d="M112 82 Q140 68 158 62" stroke="#f59e0b" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <polygon points="148,62 168,44 188,62" fill="#374151"/>
      <rect x="150" y="62" width="36" height="28" fill="#4b5563"/>
      <rect x="160" y="74" width="10" height="16" rx="1" fill="#6b7280"/>
    </svg>
  );
}

function BatteryIllustration() {
  return (
    <svg viewBox="0 0 220 110" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <style>{`
        @keyframes bat-fill{0%{height:0px;y:62px}100%{height:24px;y:38px}}
        @keyframes bat-pulse{0%,100%{opacity:.6}50%{opacity:1}}
        @keyframes bat-bolt{0%,85%,100%{opacity:0}45%,55%{opacity:1}}
        .ba-fill{animation:bat-fill 3s ease-in-out infinite alternate}
        .ba-glow{animation:bat-pulse 2s ease-in-out infinite}
        .ba-bolt{animation:bat-bolt 2s ease-in-out infinite}
      `}</style>
      <rect width="220" height="110" rx="10" fill="#eff6ff"/>
      <rect x="80" y="22" width="60" height="70" rx="6" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1.5"/>
      <rect x="97" y="16" width="26" height="10" rx="3" fill="#3b82f6"/>
      <rect className="ba-fill" x="86" y="38" width="48" height="24" rx="3" fill="#34d399" opacity="0.85"/>
      <path className="ba-bolt" d="M114 42 L107 58 L113 58 L107 72 L121 54 L114 54Z" fill="#fcd34d"/>
      <circle className="ba-glow" cx="110" cy="55" r="30" fill="#3b82f6" opacity="0.06"/>
      <path d="M50 55 Q65 55 80 55" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 3" opacity="0.6"/>
      <path d="M140 55 Q155 55 170 55" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 3" opacity="0.6"/>
      <circle cx="50" cy="55" r="5" fill="#3b82f6" opacity="0.5"/>
      <circle cx="170" cy="55" r="5" fill="#3b82f6" opacity="0.5"/>
    </svg>
  );
}

function WallboxIllustration() {
  return (
    <svg viewBox="0 0 220 110" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <style>{`
        @keyframes wb-charge{0%{stroke-dashoffset:200}100%{stroke-dashoffset:0}}
        @keyframes wb-blink{0%,100%{opacity:.3}50%{opacity:1}}
        .wb-cable{stroke-dasharray:200;animation:wb-charge 2.2s linear infinite}
        .wb-dot{animation:wb-blink 1.4s ease-in-out infinite}
        .wb-dot2{animation:wb-blink 1.4s ease-in-out infinite .7s}
      `}</style>
      <rect width="220" height="110" rx="10" fill="#f0fdf4"/>
      <rect x="100" y="56" width="90" height="32" rx="6" fill="#374151"/>
      <path d="M114 56 Q126 38 154 38 Q172 38 184 56Z" fill="#4b5563"/>
      <rect x="122" y="44" width="24" height="14" rx="2" fill="#bfdbfe" opacity="0.8"/>
      <rect x="152" y="44" width="22" height="14" rx="2" fill="#bfdbfe" opacity="0.8"/>
      <circle cx="126" cy="90" r="10" fill="#1f2937"/><circle cx="126" cy="90" r="5" fill="#374151"/>
      <circle cx="172" cy="90" r="10" fill="#1f2937"/><circle cx="172" cy="90" r="5" fill="#374151"/>
      <rect x="16" y="28" width="44" height="56" rx="5" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1.2"/>
      <rect x="24" y="36" width="28" height="18" rx="2" fill="#0f172a"/>
      <circle className="wb-dot"  cx="34" cy="62" r="4" fill="#34d399"/>
      <circle className="wb-dot2" cx="46" cy="62" r="4" fill="#34d399"/>
      <path className="wb-cable" d="M60 55 Q75 55 85 65 Q92 72 100 72"
        stroke="#10b981" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <circle cx="100" cy="72" r="5" fill="#10b981" opacity="0.8"/>
    </svg>
  );
}

function HeatpumpIllustration() {
  return (
    <svg viewBox="0 0 220 110" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <style>{`
        @keyframes hp-spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
        @keyframes hp-wave{0%{stroke-dashoffset:60}100%{stroke-dashoffset:0}}
        .hp-fan{animation:hp-spin 3s linear infinite;transform-origin:60px 58px}
        .hp-w{stroke-dasharray:60;animation:hp-wave 1.2s linear infinite}
      `}</style>
      <rect width="220" height="110" rx="10" fill="#fff7ed"/>
      <rect x="18" y="28" width="82" height="58" rx="5" fill="#374151" stroke="#6b7280" strokeWidth="1"/>
      <rect x="22" y="32" width="74" height="50" rx="3" fill="#1f2937"/>
      <g className="hp-fan">
        <ellipse cx="60" cy="58" rx="22" ry="5" fill="#4b5563" opacity="0.6"/>
        <ellipse cx="60" cy="58" rx="5" ry="22" fill="#4b5563" opacity="0.6" transform="rotate(45,60,58)"/>
        <ellipse cx="60" cy="58" rx="5" ry="22" fill="#4b5563" opacity="0.6" transform="rotate(-45,60,58)"/>
        <circle cx="60" cy="58" r="6" fill="#6b7280"/>
      </g>
      <path className="hp-w" d="M115 45 Q124 38 133 45 Q142 52 151 45" stroke="#ef4444" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.7"/>
      <path className="hp-w" d="M115 58 Q124 51 133 58 Q142 65 151 58" stroke="#f97316" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6"/>
      <path className="hp-w" d="M115 71 Q124 64 133 71 Q142 78 151 71" stroke="#fbbf24" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5"/>
      <polygon points="160,70 185,50 210,70" fill="#374151"/>
      <rect x="162" y="70" width="46" height="30" fill="#4b5563"/>
      <rect x="177" y="80" width="14" height="20" rx="1" fill="#6b7280"/>
      <path d="M100 60 Q120 60 140 58 Q152 57 158 62" stroke="#ef4444" strokeWidth="2" fill="none" strokeLinecap="round" strokeDasharray="4 3" opacity="0.5"/>
    </svg>
  );
}

const leistungen = [
  {
    icon: Sun, color: '#d97706',
    title: 'Photovoltaik',
    desc: 'Wir planen und installieren Ihre Solaranlage – von der Dimensionierung über die Montage bis zur Netzanmeldung und Inbetriebnahme.',
    items: ['Planung & Dimensionierung', 'Montage Dach & Fassade', 'Netzanmeldung & Abnahme', 'Wechselrichter & Monitoring'],
    Illustration: SolarIllustration,
  },
  {
    icon: Battery, color: '#2563eb',
    title: 'Stromspeicher',
    desc: 'Mit einem Batteriespeicher nutzen Sie Ihren Solarstrom rund um die Uhr und werden unabhängiger vom Stromnetz.',
    items: ['Bedarfsanalyse & Auslegung', 'Integration in PV-Anlage', 'Notstromfähige Systeme', 'Systemüberwachung'],
    Illustration: BatteryIllustration,
  },
  {
    icon: Car, color: '#059669',
    title: 'E-Mobilität & Ladestation',
    desc: 'Wir installieren Wallboxen und Ladesysteme für Privatpersonen und Unternehmen – inklusive Lastmanagement und Fördermittelberatung.',
    items: ['Wallbox-Installation', 'Lastmanagementsystem', 'Fördermittelberatung KfW', 'Gewerbliche Ladesäulen'],
    Illustration: WallboxIllustration,
  },
  {
    icon: Thermometer, color: '#dc2626',
    title: 'Wärmepumpen',
    desc: 'Als Systempartner installieren wir Luft-Wasser- und Erdwärmepumpen und kümmern uns um die elektrische Anbindung.',
    items: ['Luft-Wasser-Wärmepumpen', 'Erdwärmesysteme', 'Elektrische Einbindung', 'Smart-Grid-fähige Steuerung'],
    Illustration: HeatpumpIllustration,
  },
];

const vorteile = [
  'Individuelle Wirtschaftlichkeitsberechnung',
  'Beratung zu staatlichen Förderungen',
  'Komplette Umsetzung aus einer Hand',
  'Langfristiger Service und Monitoring',
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

export default function Energietechnik() {
  useReveal();
  return (
    <>
      {/* ── Hero ── */}
      <section style={{
        paddingTop: '8rem', paddingBottom: '5rem',
        background: 'linear-gradient(155deg, #080e1a 0%, #0f1f14 60%, #0a1520 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <EnergieSzene />
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 55% 60% at 75% 50%, rgba(245,158,11,0.07) 0%, transparent 70%)',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.4rem' }}>
            <div style={{ width: 28, height: 3, background: 'var(--primary)', borderRadius: 2 }} />
            <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>
              Bereich
            </span>
          </div>
          <h1 style={{
            fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', fontWeight: 900,
            color: '#fff', lineHeight: 1.08, marginBottom: '1.1rem',
            letterSpacing: '-0.03em', maxWidth: 560,
          }}>
            Energietechnik
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: 480, marginBottom: '2.25rem' }}>
            Photovoltaik, Stromspeicher, Wärmepumpen und E-Mobilität –
            wir machen Ihr Zuhause fit für die Energiezukunft.
          </p>
          <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
            <Link to="/kontakt" className="btn-primary">Anfrage stellen <ArrowRight size={15} /></Link>
            <a href="tel:+4998318809600" className="btn-outline-white"><Phone size={14} /> 09831 880960</a>
          </div>
        </div>
      </section>

      {/* ── Leistungen ── */}
      <section className="section" style={{ background: 'var(--bg-light)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ maxWidth: 520, marginBottom: '3rem' }} className="reveal">
            <div className="section-eyebrow"><span>Leistungen</span></div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: 800 }}>
              Was wir im Bereich Energietechnik anbieten
            </h2>
          </div>

          {/* Emil: stagger grid */}
          <div className="stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '1.25rem' }}>
            {leistungen.map(({ icon: ItemIcon, color, title, desc, items, Illustration }) => (
              <div key={title} className="card reveal" style={{ overflow: 'hidden' }}>
                <div style={{ borderBottom: '1px solid var(--border)' }}>
                  <Illustration />
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.65rem' }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: 'var(--r-sm)',
                      background: `color-mix(in srgb, ${color} 10%, transparent)`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      <ItemIcon size={17} color={color} />
                    </div>
                    <h3 style={{ fontWeight: 700, fontSize: '1.02rem' }}>{title}</h3>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.87rem', lineHeight: 1.7, marginBottom: '1rem' }}>{desc}</p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.32rem' }}>
                    {items.map(i => (
                      <li key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                        <CheckCircle size={12} color={color} style={{ flexShrink: 0 }} /> {i}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Nachhaltigkeit ── */}
      <section className="section" style={{ background: 'var(--bg-white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div className="reveal">
              <div className="section-eyebrow"><span>Nachhaltige Energie</span></div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, marginBottom: '1rem' }}>
                Gemeinsam in die<br />Energiezukunft
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '0.95rem' }}>
                Erneuerbare Energien sind heute rentabel, verlässlich und bezahlbar.
                Wir helfen Ihnen, den richtigen Einstieg zu finden und optimal
                von Förderprogrammen zu profitieren.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.75rem' }}>
                {vorteile.map(t => (
                  <div key={t} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <div style={{
                      width: 24, height: 24, borderRadius: '50%',
                      background: 'rgba(245,158,11,0.1)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      <CheckCircle size={13} color="var(--primary-dark)" />
                    </div>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{t}</span>
                  </div>
                ))}
              </div>
              <Link to="/kontakt" className="btn-primary" style={{ fontSize: '0.9rem' }}>
                Beratungstermin anfragen <ArrowRight size={15} />
              </Link>
            </div>
            <div className="reveal">
              <NachhaltigkeitSzene />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: 'linear-gradient(145deg, #0a1520, #0d1f38)', padding: '4.5rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ width: 28, height: 3, background: 'var(--primary)', borderRadius: 2, margin: '0 auto 1.5rem' }} />
          <h2 style={{ color: '#fff', fontWeight: 800, fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', marginBottom: '0.7rem', letterSpacing: '-0.02em' }}>
            Energiewende starten?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.48)', marginBottom: '1.75rem', fontSize: '0.95rem' }}>
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

/* ── Hero background ── */
function EnergieSzene() {
  return (
    <svg viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.16, pointerEvents: 'none' }}
      aria-hidden="true">
      <style>{`
        @keyframes es-sun{0%,100%{opacity:.7;transform:scale(1)}50%{opacity:1;transform:scale(1.06)}}
        @keyframes es-ray{0%,100%{opacity:.5}50%{opacity:1}}
        @keyframes es-spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
        @keyframes es-cloud{0%,100%{transform:translateX(0)}50%{transform:translateX(15px)}}
        .esc{animation:es-sun 4s ease-in-out infinite;transform-origin:740px 80px}
        .esr{animation:es-ray 4s ease-in-out infinite;transform-origin:740px 80px}
        .esb{animation:es-spin 5s linear infinite;transform-origin:260px 165px}
        .esb2{animation:es-spin 7s linear infinite;transform-origin:420px 200px}
        .escl{animation:es-cloud 14s ease-in-out infinite}
      `}</style>
      <path d="M0 320 Q180 260 360 290 Q540 320 720 280 Q820 260 900 275 L900 420 L0 420Z" fill="#1e3a5f" opacity="0.3"/>
      <g className="esr">
        {[0,30,60,90,120,150,180,210,240,270,300,330].map((d,i)=>(
          <line key={i}
            x1={740+Math.cos(d*Math.PI/180)*46} y1={80+Math.sin(d*Math.PI/180)*46}
            x2={740+Math.cos(d*Math.PI/180)*60} y2={80+Math.sin(d*Math.PI/180)*60}
            stroke="#93c5fd" strokeWidth="2.5" strokeLinecap="round"/>
        ))}
      </g>
      <circle className="esc" cx="740" cy="80" r="36" fill="#bfdbfe" opacity="0.18"/>
      <circle cx="740" cy="80" r="28" fill="#93c5fd" opacity="0.45"/>
      <circle cx="740" cy="80" r="20" fill="#dbeafe" opacity="0.8"/>
      <g className="escl" fill="white" opacity="0.1">
        <ellipse cx="530" cy="60" rx="46" ry="15"/>
        <ellipse cx="552" cy="52" rx="30" ry="14"/>
        <ellipse cx="512" cy="58" rx="24" ry="12"/>
      </g>
      <polygon points="253,350 267,350 263,168 257,168" fill="#4b5563" opacity="0.6"/>
      <rect x="248" y="160" width="22" height="11" rx="3" fill="#6b7280" opacity="0.7"/>
      <g className="esb">
        <path d="M260,165 C256,138 257,106 260,86 C263,106 264,138 260,165Z" fill="#e2e8f0" opacity="0.75" stroke="#9ca3af" strokeWidth="0.5"/>
        <path d="M260,165 C279,176 298,188 310,197 C295,189 276,178 260,165Z" fill="#e2e8f0" opacity="0.75" stroke="#9ca3af" strokeWidth="0.5"/>
        <path d="M260,165 C241,176 222,188 210,197 C225,189 244,178 260,165Z" fill="#e2e8f0" opacity="0.75" stroke="#9ca3af" strokeWidth="0.5"/>
        <circle cx="260" cy="165" r="7" fill="#6b7280"/>
        <circle cx="260" cy="165" r="3.5" fill="#374151"/>
      </g>
      <polygon points="413,330 423,330 420,204 416,204" fill="#4b5563" opacity="0.4"/>
      <g className="esb2">
        <path d="M418,201 C415,182 416,160 418,145 C420,160 421,182 418,201Z" fill="#e2e8f0" opacity="0.55" stroke="#9ca3af" strokeWidth="0.4"/>
        <path d="M418,201 C430,208 442,215 450,221 C440,214 428,208 418,201Z" fill="#e2e8f0" opacity="0.55" stroke="#9ca3af" strokeWidth="0.4"/>
        <path d="M418,201 C406,208 394,215 386,221 C396,214 408,208 418,201Z" fill="#e2e8f0" opacity="0.55" stroke="#9ca3af" strokeWidth="0.4"/>
        <circle cx="418" cy="201" r="5" fill="#6b7280" opacity="0.7"/>
      </g>
    </svg>
  );
}

/* ── Sustainability scene ── */
function NachhaltigkeitSzene() {
  return (
    <svg viewBox="0 0 400 280" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: 420 }}>
      <style>{`
        @keyframes ns-spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
        @keyframes ns-ray{0%,100%{opacity:.5}50%{opacity:1}}
        @keyframes ns-flow{0%{stroke-dashoffset:280}100%{stroke-dashoffset:0}}
        @keyframes ns-dot{0%,100%{opacity:0;r:3px}50%{opacity:1;r:5px}}
        @keyframes ns-cloud{0%,100%{transform:translateX(0)}50%{transform:translateX(10px)}}
        .ns-blade{animation:ns-spin 5s linear infinite;transform-origin:120px 100px}
        .ns-ray{animation:ns-ray 3s ease-in-out infinite;transform-origin:320px 50px}
        .ns-cable{stroke-dasharray:280;animation:ns-flow 2.8s linear infinite}
        .ns-dot1{animation:ns-dot 2.8s ease-in-out infinite 0s;transform-origin:218px 150px}
        .ns-dot2{animation:ns-dot 2.8s ease-in-out infinite .9s;transform-origin:258px 142px}
        .ns-dot3{animation:ns-dot 2.8s ease-in-out infinite 1.8s;transform-origin:295px 138px}
        .ns-cloud{animation:ns-cloud 12s ease-in-out infinite}
      `}</style>
      <rect width="400" height="280" rx="16" fill="#f0f9ff"/>
      <path d="M0 210 Q80 180 160 195 Q250 210 340 185 Q370 178 400 182 L400 280 L0 280Z" fill="#d1fae5"/>
      <path d="M0 230 Q120 210 240 225 Q320 235 400 218 L400 280 L0 280Z" fill="#a7f3d0" opacity="0.5"/>
      <g className="ns-ray">
        {[0,40,80,120,160,200,240,280,320].map((d,i)=>(
          <line key={i}
            x1={320+Math.cos(d*Math.PI/180)*32} y1={50+Math.sin(d*Math.PI/180)*32}
            x2={320+Math.cos(d*Math.PI/180)*42} y2={50+Math.sin(d*Math.PI/180)*42}
            stroke="#f59e0b" strokeWidth="2.2" strokeLinecap="round"/>
        ))}
      </g>
      <circle cx="320" cy="50" r="24" fill="#fef9c3" opacity="0.6"/>
      <circle cx="320" cy="50" r="18" fill="#fcd34d" opacity="0.8"/>
      <circle cx="320" cy="50" r="11" fill="#f59e0b"/>
      <g className="ns-cloud" fill="white" opacity="0.7">
        <ellipse cx="195" cy="42" rx="36" ry="13"/>
        <ellipse cx="210" cy="35" rx="24" ry="12"/>
        <ellipse cx="180" cy="40" rx="18" ry="10"/>
      </g>
      <polygon points="113,225 127,225 123,103 117,103" fill="#9ca3af"/>
      <rect x="110" y="96" width="20" height="10" rx="2" fill="#6b7280"/>
      <g className="ns-blade">
        <path d="M120,100 C116,76 117,50 120,34 C123,50 124,76 120,100Z" fill="#e5e7eb" stroke="#d1d5db" strokeWidth="0.6"/>
        <path d="M120,100 C137,110 153,120 163,127 C150,119 134,110 120,100Z" fill="#e5e7eb" stroke="#d1d5db" strokeWidth="0.6"/>
        <path d="M120,100 C103,110 87,120 77,127 C90,119 106,110 120,100Z" fill="#e5e7eb" stroke="#d1d5db" strokeWidth="0.6"/>
        <circle cx="120" cy="100" r="6" fill="#6b7280"/>
        <circle cx="120" cy="100" r="3" fill="#374151"/>
      </g>
      <g transform="translate(165,168) rotate(-10)">
        <rect width="60" height="38" rx="2" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="0.8"/>
        <line x1="20" y1="0" x2="20" y2="38" stroke="#3b82f6" strokeWidth="0.5"/>
        <line x1="40" y1="0" x2="40" y2="38" stroke="#3b82f6" strokeWidth="0.5"/>
        <line x1="0" y1="12" x2="60" y2="12" stroke="#3b82f6" strokeWidth="0.5"/>
        <line x1="0" y1="25" x2="60" y2="25" stroke="#3b82f6" strokeWidth="0.5"/>
      </g>
      <line x1="174" y1="206" x2="177" y2="222" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round"/>
      <line x1="216" y1="198" x2="219" y2="215" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round"/>
      <path className="ns-cable" d="M218 205 Q240 175 270 160 Q290 152 308 155"
        stroke="#f59e0b" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <circle className="ns-dot1" cx="218" cy="150" r="3" fill="#fbbf24"/>
      <circle className="ns-dot2" cx="258" cy="142" r="3" fill="#fbbf24"/>
      <circle className="ns-dot3" cx="295" cy="138" r="3" fill="#fbbf24"/>
      <polygon points="298,155 330,126 362,155" fill="#374151"/>
      <rect x="300" y="155" width="60" height="45" rx="1" fill="#4b5563"/>
      <rect x="308" y="165" width="16" height="14" rx="1" fill="#93c5fd" opacity="0.5"/>
      <rect x="332" y="174" width="14" height="26" rx="1" fill="#6b7280"/>
      <path d="M296 153 L291 163 L296 163 L291 173" stroke="#fbbf24" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
