import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Home, Shield, Wrench, CheckCircle, ArrowRight, Phone } from 'lucide-react';

/* ── Animated SVG Illustrations ── */

function InstallationIllustration() {
  return (
    <svg viewBox="0 0 220 110" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <style>{`
        @keyframes il-bolt{0%,80%,100%{opacity:0}40%,60%{opacity:1}}
        @keyframes il-flow{0%{stroke-dashoffset:160}100%{stroke-dashoffset:0}}
        @keyframes il-blink{0%,100%{opacity:.2}50%{opacity:1}}
        .il-b{animation:il-bolt 2.2s ease-in-out infinite}
        .il-f{stroke-dasharray:160;animation:il-flow 2s linear infinite}
        .il-s1{animation:il-blink 1.8s ease-in-out infinite 0s}
        .il-s2{animation:il-blink 1.8s ease-in-out infinite .6s}
        .il-s3{animation:il-blink 1.8s ease-in-out infinite 1.2s}
      `}</style>
      <rect width="220" height="110" rx="10" fill="#f8fafc"/>
      <rect x="18" y="22" width="48" height="68" rx="4" fill="#1e293b" stroke="#475569" strokeWidth="1"/>
      <rect x="24" y="28" width="36" height="56" rx="2" fill="#0f172a"/>
      {[0,1,2,3].map(i=>(
        <g key={i}>
          <rect x="28" y={33+i*13} width="28" height="7" rx="1" fill="#334155" stroke="#475569" strokeWidth="0.5"/>
          <circle className={`il-s${(i%3)+1}`} cx="51" cy={36+i*13} r="2.5" fill="#f59e0b"/>
        </g>
      ))}
      <path className="il-f" d="M66 40 Q100 40 130 40 Q155 40 170 30 Q185 20 200 24"
        stroke="#f59e0b" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
      <path className="il-f" d="M66 55 Q100 55 140 55 Q165 55 178 68 Q188 78 200 76"
        stroke="#3b82f6" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
      <rect x="190" y="16" width="20" height="18" rx="3" fill="#334155" stroke="#475569" strokeWidth="0.8"/>
      <circle cx="196" cy="25" r="2.5" fill="#1e293b"/>
      <circle cx="204" cy="25" r="2.5" fill="#1e293b"/>
      <rect x="190" y="68" width="20" height="18" rx="3" fill="#334155" stroke="#475569" strokeWidth="0.8"/>
      <circle cx="196" cy="77" r="2.5" fill="#1e293b"/>
      <circle cx="204" cy="77" r="2.5" fill="#1e293b"/>
      <path className="il-b" d="M110 28 L104 42 L109 42 L103 57 L117 39 L111 39Z" fill="#fbbf24"/>
    </svg>
  );
}

function SmartHomeIllustration() {
  return (
    <svg viewBox="0 0 220 110" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <style>{`
        @keyframes sh-pulse{0%,100%{r:12px;opacity:.2}50%{r:18px;opacity:.5}}
        @keyframes sh-ring{0%{r:24px;opacity:.5}100%{r:40px;opacity:0}}
        @keyframes sh-light{0%,100%{opacity:.3}50%{opacity:1}}
        .sh-p{animation:sh-pulse 2.5s ease-in-out infinite;transform-origin:110px 58px}
        .sh-r1{animation:sh-ring 2.5s ease-out infinite 0s;transform-origin:110px 58px}
        .sh-r2{animation:sh-ring 2.5s ease-out infinite .8s;transform-origin:110px 58px}
        .sh-l1{animation:sh-light 2s ease-in-out infinite 0s}
        .sh-l2{animation:sh-light 2s ease-in-out infinite .66s}
        .sh-l3{animation:sh-light 2s ease-in-out infinite 1.33s}
      `}</style>
      <rect width="220" height="110" rx="10" fill="#f0f9ff"/>
      <polygon points="75,75 110,46 145,75" fill="#334155"/>
      <rect x="77" y="75" width="66" height="26" rx="1" fill="#1e293b"/>
      <rect x="99" y="85" width="12" height="16" rx="1" fill="#475569"/>
      <rect x="82" y="79" width="14" height="12" rx="1" fill="#fef3c7"/>
      <rect className="sh-l1" x="82" y="79" width="14" height="12" rx="1" fill="#fbbf24" opacity="0"/>
      <rect x="126" y="79" width="14" height="12" rx="1" fill="#fef3c7"/>
      <rect className="sh-l2" x="126" y="79" width="14" height="12" rx="1" fill="#fbbf24" opacity="0"/>
      <circle className="sh-p" cx="110" cy="58" r="12" fill="#3b82f6"/>
      <circle cx="110" cy="58" r="5" fill="#3b82f6" opacity="0.9"/>
      <circle className="sh-r1" cx="110" cy="58" r="24" fill="none" stroke="#3b82f6" strokeWidth="1.5"/>
      <circle className="sh-r2" cx="110" cy="58" r="24" fill="none" stroke="#3b82f6" strokeWidth="1"/>
      <rect x="22" y="36" width="28" height="38" rx="14" fill="#334155" stroke="#475569" strokeWidth="0.8"/>
      <circle cx="36" cy="55" r="8" fill="#1e293b"/>
      <circle className="sh-l3" cx="36" cy="55" r="4" fill="#34d399"/>
      <circle cx="184" cy="38" r="14" fill="#334155" stroke="#475569" strokeWidth="0.8"/>
      <path d="M178 38 Q184 28 190 38" fill="#fbbf24" opacity="0.7"/>
      <circle cx="184" cy="40" r="4" fill="#fbbf24" opacity="0.5"/>
      <path d="M50 55 Q72 55 95 56" stroke="#3b82f6" strokeWidth="1.2" fill="none" strokeDasharray="3 2" opacity="0.5"/>
      <path d="M125 56 Q153 53 170 42" stroke="#3b82f6" strokeWidth="1.2" fill="none" strokeDasharray="3 2" opacity="0.5"/>
    </svg>
  );
}

function SecurityIllustration() {
  return (
    <svg viewBox="0 0 220 110" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <style>{`
        @keyframes sec-scan{0%,100%{transform:rotate(-25deg)}50%{transform:rotate(25deg)}}
        @keyframes sec-blink{0%,100%{opacity:.2}50%{opacity:1}}
        @keyframes sec-ring{0%{r:16px;opacity:.6}100%{r:32px;opacity:0}}
        .sec-scan{animation:sec-scan 2s ease-in-out infinite;transform-origin:60px 55px}
        .sec-b{animation:sec-blink 1.5s ease-in-out infinite}
        .sec-r{animation:sec-ring 2s ease-out infinite;transform-origin:155px 52px}
      `}</style>
      <rect width="220" height="110" rx="10" fill="#0f172a"/>
      <rect x="22" y="42" width="54" height="32" rx="4" fill="#1e293b" stroke="#3b82f6" strokeWidth="1"/>
      <polygon points="76,46 96,36 96,72 76,62" fill="#1e293b" stroke="#3b82f6" strokeWidth="1"/>
      <circle cx="44" cy="58" r="8" fill="#0f172a"/>
      <circle cx="44" cy="58" r="4" fill="var(--primary-dark)" opacity="0.8"/>
      <g className="sec-scan">
        <path d="M60 55 L130 30" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      </g>
      <circle className="sec-b" cx="68" cy="46" r="3" fill="#34d399"/>
      <path d="M155 28 L172 35 L172 52 Q172 64 155 72 Q138 64 138 52 L138 35Z" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1.2"/>
      <circle className="sec-r" cx="155" cy="52" r="16" fill="none" stroke="#3b82f6" strokeWidth="1"/>
      <path d="M148 52 L153 57 L163 46" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <polygon points="155,84 180,68 205,84" fill="#1e293b" opacity="0.6"/>
      <rect x="157" y="84" width="46" height="18" fill="#1e293b" opacity="0.6"/>
    </svg>
  );
}

function PruefungIllustration() {
  return (
    <svg viewBox="0 0 220 110" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <style>{`
        @keyframes pr-needle{0%,100%{transform:rotate(-45deg)}50%{transform:rotate(35deg)}}
        @keyframes pr-wave{0%{stroke-dashoffset:80}100%{stroke-dashoffset:0}}
        @keyframes pr-check{0%,60%{stroke-dashoffset:40}100%{stroke-dashoffset:0}}
        .pr-n{animation:pr-needle 3s ease-in-out infinite;transform-origin:80px 72px}
        .pr-w{stroke-dasharray:80;animation:pr-wave 1.4s linear infinite}
        .pr-c{stroke-dasharray:40;animation:pr-check 1.5s ease-out infinite}
      `}</style>
      <rect width="220" height="110" rx="10" fill="#f8fafc"/>
      <rect x="18" y="28" width="116" height="72" rx="6" fill="#1e293b" stroke="#475569" strokeWidth="1"/>
      <rect x="24" y="34" width="104" height="60" rx="4" fill="#0f172a"/>
      <path d="M32 85 A48 48 0 0 1 128 85" stroke="#334155" strokeWidth="1" fill="none"/>
      {[-45,-30,-15,0,15,30,45].map((a,i)=>{
        const rad=(a-90)*Math.PI/180;
        return <line key={i}
          x1={80+Math.cos(rad)*38} y1={72+Math.sin(rad)*38}
          x2={80+Math.cos(rad)*44} y2={72+Math.sin(rad)*44}
          stroke="#475569" strokeWidth="1"/>;
      })}
      <g className="pr-n">
        <line x1="80" y1="72" x2="80" y2="42" stroke="#ef4444" strokeWidth="2" strokeLinecap="round"/>
      </g>
      <circle cx="80" cy="72" r="4" fill="#475569"/>
      <path d="M32 85 A48 48 0 0 1 58 47" stroke="#34d399" strokeWidth="3" fill="none" opacity="0.5"/>
      <path d="M58 47 A48 48 0 0 1 102 47" stroke="#fbbf24" strokeWidth="3" fill="none" opacity="0.5"/>
      <path d="M102 47 A48 48 0 0 1 128 85" stroke="#ef4444" strokeWidth="3" fill="none" opacity="0.5"/>
      <path className="pr-w"
        d="M148 75 Q157 65 166 75 Q175 85 184 75 Q193 65 202 75 Q211 85 220 75"
        stroke="#3b82f6" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.7"/>
      <path className="pr-c" d="M152 42 L160 52 L174 34"
        stroke="#34d399" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}

const leistungen = [
  {
    icon: Zap,
    title: 'Elektroinstallation',
    desc: 'Neubau, Sanierung oder Erweiterung – wir installieren normgerecht und sauber. Vom Zählerkasten bis zur letzten Steckdose.',
    items: ['Unterverteilungen & Zähleranlagen', 'Steckdosen & Leitungsverlegung', 'Beleuchtungsinstallation', 'Außenanlagen & Gartenbeleuchtung'],
    Illustration: InstallationIllustration,
  },
  {
    icon: Home,
    title: 'Smart Home',
    desc: 'Intelligente Haustechnik für mehr Komfort, Sicherheit und Energieeinsparung. Wir planen und installieren Ihr Smarthome-System.',
    items: ['KNX / Busch-Jaeger / Gira', 'Automatische Beschattung', 'Sprachsteuerung (Alexa, Google)', 'Einbruchmeldesysteme'],
    Illustration: SmartHomeIllustration,
  },
  {
    icon: Shield,
    title: 'Sicherheitstechnik',
    desc: 'Schutz für Ihr Zuhause und Ihren Betrieb: Einbruchmeldeanlagen, Videoüberwachung und Brandschutz aus einer Hand.',
    items: ['Einbruchmeldeanlagen', 'Videoüberwachung', 'Rauchmeldeanlagen', 'Zutrittskontrolle'],
    Illustration: SecurityIllustration,
  },
  {
    icon: Wrench,
    title: 'Prüfungen & Wartung',
    desc: 'Regelmäßige Prüfungen nach DGUV und VDE sichern den sicheren Betrieb Ihrer Anlagen und sind oft gesetzlich vorgeschrieben.',
    items: ['E-Check', 'DGUV V3 Prüfungen', 'Prüfung ortsveränderlicher Geräte', 'Anlagendokumentation'],
    Illustration: PruefungIllustration,
  },
];

const qualitaet = [
  { title: 'Normgerecht & sicher', text: 'Alle Arbeiten nach aktuellen VDE- und DIN-Normen.' },
  { title: 'Feste Ansprechpartner', text: 'Kein Callcenter – Sie sprechen direkt mit uns.' },
  { title: 'Saubere Ausführung', text: 'Wir hinterlassen Ihre Räume so, wie wir sie vorgefunden haben.' },
  { title: 'Schnelle Reaktionszeiten', text: 'Auch bei Notfällen sind wir zeitnah für Sie da.' },
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

export default function Elektrotechnik() {
  useReveal();
  return (
    <>
      {/* ── Hero ── */}
      <section style={{
        paddingTop: '8rem', paddingBottom: '5rem',
        background: 'linear-gradient(155deg, #080e1a 0%, #0d1f38 60%, #0a1520 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <ElektroSzene />
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 55% 60% at 75% 50%, rgba(245,158,11,0.05) 0%, transparent 70%)',
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
            letterSpacing: '-0.03em', maxWidth: 540,
          }}>
            Elektrotechnik
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: 480, marginBottom: '2.25rem' }}>
            Von der Steckdose bis zur vernetzten Haustechnik – wir realisieren jede
            Elektroinstallation sicher, normgerecht und zuverlässig.
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
              Was wir im Bereich Elektrotechnik anbieten
            </h2>
          </div>

          {/* Emil: stagger grid for natural cascading entry */}
          <div className="stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '1.25rem' }}>
            {leistungen.map(({ icon: ItemIcon, title, desc, items, Illustration }) => (
              <div key={title} className="card reveal" style={{ overflow: 'hidden' }}>
                <div style={{ borderBottom: '1px solid var(--border)' }}>
                  <Illustration />
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.65rem' }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: 'var(--r-sm)',
                      background: 'rgba(245,158,11,0.08)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      <ItemIcon size={17} color="var(--primary-dark)" />
                    </div>
                    <h3 style={{ fontWeight: 700, fontSize: '1.02rem' }}>{title}</h3>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.87rem', lineHeight: 1.7, marginBottom: '1rem' }}>{desc}</p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.32rem' }}>
                    {items.map(i => (
                      <li key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                        <CheckCircle size={12} color="var(--primary-dark)" style={{ flexShrink: 0 }} /> {i}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Qualität ── */}
      <section className="section" style={{ background: 'var(--bg-white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div className="reveal">
              <div className="section-eyebrow"><span>Qualität</span></div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, marginBottom: '1.5rem' }}>
                Warum Kunden uns wählen
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {qualitaet.map(({ title, text }) => (
                  <div key={title} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{
                      width: 32, height: 32, borderRadius: 'var(--r-sm)',
                      background: 'rgba(245,158,11,0.08)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1,
                    }}>
                      <CheckCircle size={15} color="var(--primary-dark)" />
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.92rem', marginBottom: '0.2rem' }}>{title}</div>
                      <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.65 }}>{text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal">
              <SchaltkreisGrafik />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: 'linear-gradient(145deg, #0a1520, #0d1f38)', padding: '4.5rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ width: 28, height: 3, background: 'var(--primary)', borderRadius: 2, margin: '0 auto 1.5rem' }} />
          <h2 style={{ color: '#fff', fontWeight: 800, fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', marginBottom: '0.7rem', letterSpacing: '-0.02em' }}>
            Elektroinstallation geplant?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.48)', marginBottom: '1.75rem', fontSize: '0.95rem' }}>
            Wir erstellen Ihnen ein kostenloses Angebot.
          </p>
          <div style={{ display: 'flex', gap: '0.85rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/kontakt" className="btn-primary">Anfrage senden <ArrowRight size={15} /></Link>
            <a href="tel:+4998318809600" className="btn-outline-white"><Phone size={15} /> 09831 880960</a>
          </div>
        </div>
      </section>
    </>
  );
}

/* ── Hero background: animated circuit ── */
function ElektroSzene() {
  return (
    <svg viewBox="0 0 900 380" preserveAspectRatio="xMidYMid slice"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.13, pointerEvents: 'none' }}
      aria-hidden="true">
      <style>{`
        @keyframes el-flow{0%{stroke-dashoffset:400}100%{stroke-dashoffset:0}}
        @keyframes el-bolt{0%,80%,100%{opacity:0}40%,60%{opacity:1}}
        @keyframes el-node{0%,100%{r:4px;opacity:.3}50%{r:7px;opacity:1}}
        .el-c1{stroke-dasharray:400;animation:el-flow 4s linear infinite}
        .el-c2{stroke-dasharray:400;animation:el-flow 4s linear infinite 2s}
        .el-bolt{animation:el-bolt 2.5s ease-in-out infinite}
        .el-n1{animation:el-node 2s ease-in-out infinite 0s;transform-origin:200px 190px}
        .el-n2{animation:el-node 2s ease-in-out infinite .66s;transform-origin:450px 150px}
        .el-n3{animation:el-node 2s ease-in-out infinite 1.33s;transform-origin:700px 190px}
      `}</style>
      <path className="el-c1" d="M50 190 L200 190 L200 100 L450 100 L450 150 L700 150 L700 190 L850 190"
        stroke="#60a5fa" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="el-c2" d="M50 250 L180 250 L180 310 L450 310 L450 260 L700 260 L700 230 L850 230"
        stroke="#818cf8" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="450" y1="100" x2="450" y2="310" stroke="#334155" strokeWidth="1" opacity="0.4"/>
      <line x1="200" y1="190" x2="200" y2="250" stroke="#334155" strokeWidth="1" opacity="0.3"/>
      <line x1="700" y1="150" x2="700" y2="260" stroke="#334155" strokeWidth="1" opacity="0.3"/>
      <circle className="el-n1" cx="200" cy="190" r="4" fill="#60a5fa"/>
      <circle className="el-n2" cx="450" cy="150" r="4" fill="#818cf8"/>
      <circle className="el-n3" cx="700" cy="190" r="4" fill="#60a5fa"/>
      <path className="el-bolt" d="M456 130 L448 152 L455 152 L447 174 L465 148 L457 148Z" fill="#fbbf24"/>
      <rect x="295" y="185" width="30" height="12" rx="2" fill="#1e3a5f" stroke="#60a5fa" strokeWidth="0.8" opacity="0.7"/>
      <rect x="605" y="185" width="30" height="12" rx="2" fill="#1e3a5f" stroke="#60a5fa" strokeWidth="0.8" opacity="0.7"/>
    </svg>
  );
}

/* ── Standalone circuit graphic ── */
function SchaltkreisGrafik() {
  return (
    <svg viewBox="0 0 380 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: 400 }}>
      <style>{`
        @keyframes sc-flow{0%{stroke-dashoffset:300}100%{stroke-dashoffset:0}}
        @keyframes sc-bolt{0%,80%,100%{opacity:0}40%,55%{opacity:1}}
        @keyframes sc-node{0%,100%{opacity:.3;r:5px}50%{opacity:1;r:7px}}
        @keyframes sc-wave{0%{stroke-dashoffset:70}100%{stroke-dashoffset:0}}
        .sc-f1{stroke-dasharray:300;animation:sc-flow 3s linear infinite}
        .sc-f2{stroke-dasharray:300;animation:sc-flow 3s linear infinite 1.5s}
        .sc-bolt{animation:sc-bolt 2.5s ease-in-out infinite}
        .sc-n1{animation:sc-node 2s ease-in-out infinite 0s;transform-origin:80px 130px}
        .sc-n2{animation:sc-node 2s ease-in-out infinite .7s;transform-origin:190px 80px}
        .sc-n3{animation:sc-node 2s ease-in-out infinite 1.4s;transform-origin:300px 130px}
        .sc-w{stroke-dasharray:70;animation:sc-wave 1.2s linear infinite}
      `}</style>
      <rect width="380" height="260" rx="16" fill="#0f172a"/>
      <path className="sc-f1" d="M30 130 L80 130 L80 80 L190 80 L190 130 L300 130 L300 80 L350 80"
        stroke="#3b82f6" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="sc-f2" d="M30 180 L80 180 L80 130 M300 130 L300 180 L350 180"
        stroke="#6366f1" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M190 80 L190 180 L110 180" stroke="#334155" strokeWidth="1" opacity="0.4"/>
      <circle className="sc-n1" cx="80" cy="130" r="5" fill="#3b82f6"/>
      <circle className="sc-n2" cx="190" cy="80" r="5" fill="#6366f1"/>
      <circle className="sc-n3" cx="300" cy="130" r="5" fill="#3b82f6"/>
      <path className="sc-bolt" d="M196 62 L187 84 L195 84 L186 106 L204 80 L195 80Z" fill="#fbbf24"/>
      <rect x="130" y="124" width="32" height="12" rx="2" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="0.8"/>
      <rect x="220" y="124" width="32" height="12" rx="2" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="0.8"/>
      <line x1="187" y1="155" x2="187" y2="165" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="194" y1="155" x2="194" y2="165" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round"/>
      <path className="sc-w"
        d="M40 220 Q55 206 70 220 Q85 234 100 220 Q115 206 130 220 Q145 234 160 220 Q175 206 190 220 Q205 234 220 220 Q235 206 250 220 Q265 234 280 220 Q295 206 310 220 Q325 234 340 220"
        stroke="#f59e0b" strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.6"/>
      <text x="190" y="248" textAnchor="middle" fill="#475569" fontSize="10" fontFamily="Inter, sans-serif">Sinuswelle · Wechselstrom</text>
    </svg>
  );
}
