import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Battery, Car, Thermometer, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import { useMeta } from '../hooks/useMeta';

/* ── 1. Photovoltaik: Haus mit Solarmodulen + Energiefluss ── */
function SolarSzene() {
  return (
    <svg viewBox="0 0 460 300" fill="none" xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true" style={{ width:'100%', maxWidth:500 }}>
      <style>{`
        @keyframes sol-ray{0%,100%{opacity:.5}50%{opacity:1}}
        @keyframes sol-flow{0%{stroke-dashoffset:240}100%{stroke-dashoffset:0}}
        @keyframes sol-glow{0%,100%{opacity:.04}50%{opacity:.18}}
        @keyframes sol-blink{0%,100%{opacity:.3}50%{opacity:1}}
        .sol-ray{animation:sol-ray 3s ease-in-out infinite;transform-origin:408px 44px}
        .sol-f1{stroke-dasharray:240;animation:sol-flow 2.6s linear infinite}
        .sol-f2{stroke-dasharray:240;animation:sol-flow 2.6s linear infinite .9s}
        .sol-glow{animation:sol-glow 3s ease-in-out infinite}
        .sol-blink{animation:sol-blink 1.8s ease-in-out infinite}
      `}</style>
      <defs>
        <linearGradient id="sol-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#bfdbfe"/>
          <stop offset="100%" stopColor="#eff6ff"/>
        </linearGradient>
      </defs>
      <rect width="460" height="300" rx="12" fill="url(#sol-sky)"/>
      <rect x="0" y="248" width="460" height="52" fill="#d1fae5"/>
      <rect x="0" y="246" width="460" height="4" fill="#a7f3d0"/>
      <g className="sol-ray">
        {[0,40,80,120,160,200,240,280,320].map((d,i) => (
          <line key={i}
            x1={408+Math.cos(d*Math.PI/180)*30} y1={44+Math.sin(d*Math.PI/180)*30}
            x2={408+Math.cos(d*Math.PI/180)*42} y2={44+Math.sin(d*Math.PI/180)*42}
            stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round"/>
        ))}
      </g>
      <circle cx="408" cy="44" r="22" fill="#fef9c3" opacity="0.5"/>
      <circle cx="408" cy="44" r="16" fill="#fcd34d" opacity="0.8"/>
      <circle cx="408" cy="44" r="10" fill="#f59e0b"/>
      <rect x="80" y="150" width="250" height="100" fill="#e8dcc8" stroke="#c4aa88" strokeWidth="1.2"/>
      <polygon points="62,153 205,80 348,153" fill="#b45309" stroke="#92400e" strokeWidth="1"/>
      <rect x="258" y="94" width="18" height="42" fill="#9e6a50"/>
      <rect x="178" y="202" width="46" height="48" rx="2" fill="#7c4a1e"/>
      <circle cx="220" cy="228" r="2.5" fill="#d4a017"/>
      <rect x="100" y="172" width="52" height="40" rx="2" fill="#bfdbfe" stroke="#c4aa88" strokeWidth="1"/>
      <line x1="126" y1="172" x2="126" y2="212" stroke="#c4aa88" strokeWidth="0.8"/>
      <line x1="100" y1="192" x2="152" y2="192" stroke="#c4aa88" strokeWidth="0.8"/>
      <g transform="translate(112,108) rotate(-23)">
        <rect width="55" height="34" rx="2" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="0.7"/>
        <line x1="18" y1="0" x2="18" y2="34" stroke="#3b82f6" strokeWidth="0.5" opacity="0.7"/>
        <line x1="36" y1="0" x2="36" y2="34" stroke="#3b82f6" strokeWidth="0.5" opacity="0.7"/>
        <line x1="0" y1="11" x2="55" y2="11" stroke="#3b82f6" strokeWidth="0.5" opacity="0.7"/>
        <line x1="0" y1="22" x2="55" y2="22" stroke="#3b82f6" strokeWidth="0.5" opacity="0.7"/>
        <rect className="sol-glow" width="55" height="34" rx="2" fill="#fef9c3"/>
      </g>
      <g transform="translate(178,93) rotate(-23)">
        <rect width="55" height="34" rx="2" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="0.7"/>
        <line x1="18" y1="0" x2="18" y2="34" stroke="#3b82f6" strokeWidth="0.5" opacity="0.7"/>
        <line x1="36" y1="0" x2="36" y2="34" stroke="#3b82f6" strokeWidth="0.5" opacity="0.7"/>
        <line x1="0" y1="11" x2="55" y2="11" stroke="#3b82f6" strokeWidth="0.5" opacity="0.7"/>
        <line x1="0" y1="22" x2="55" y2="22" stroke="#3b82f6" strokeWidth="0.5" opacity="0.7"/>
        <rect className="sol-glow" width="55" height="34" rx="2" fill="#fef9c3"/>
      </g>
      <g transform="translate(244,78) rotate(-23)">
        <rect width="55" height="34" rx="2" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="0.7"/>
        <line x1="18" y1="0" x2="18" y2="34" stroke="#3b82f6" strokeWidth="0.5" opacity="0.7"/>
        <line x1="36" y1="0" x2="36" y2="34" stroke="#3b82f6" strokeWidth="0.5" opacity="0.7"/>
        <line x1="0" y1="11" x2="55" y2="11" stroke="#3b82f6" strokeWidth="0.5" opacity="0.7"/>
        <line x1="0" y1="22" x2="55" y2="22" stroke="#3b82f6" strokeWidth="0.5" opacity="0.7"/>
        <rect className="sol-glow" width="55" height="34" rx="2" fill="#fef9c3"/>
      </g>
      <rect x="328" y="166" width="44" height="58" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
      <rect x="334" y="172" width="32" height="24" rx="2" fill="#0f172a"/>
      <text x="350" y="181" textAnchor="middle" fill="#34d399" fontSize="6.5" fontFamily="monospace">4.2kW</text>
      <text x="350" y="190" textAnchor="middle" fill="#64748b" fontSize="5.5" fontFamily="monospace">WECHSELR.</text>
      <circle className="sol-blink" cx="350" cy="208" r="3" fill="#34d399"/>
      <path className="sol-f1" d="M205 150 L205 164 L328 164 L328 195"
        stroke="#f59e0b" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="sol-f2" d="M350 224 L350 248 L300 248"
        stroke="#34d399" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"/>
    </svg>
  );
}

/* ── 2. Stromspeicher: Wandbatterie mit Ladefüllstand ── */
function SpeicherSzene() {
  return (
    <svg viewBox="0 0 460 300" fill="none" xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true" style={{ width:'100%', maxWidth:500 }}>
      <style>{`
        @keyframes spe-fill{0%,100%{transform:scaleY(0.06)}50%{transform:scaleY(1)}}
        @keyframes spe-pulse{0%,100%{opacity:.35}50%{opacity:1}}
        @keyframes spe-flow{0%{stroke-dashoffset:200}100%{stroke-dashoffset:0}}
        @keyframes spe-glow{0%,100%{opacity:.04}50%{opacity:.14}}
        .spe-lvl{animation:spe-fill 4s ease-in-out infinite;transform-origin:230px 150px}
        .spe-p{animation:spe-pulse 2s ease-in-out infinite}
        .spe-f1{stroke-dasharray:200;animation:spe-flow 2.8s linear infinite}
        .spe-f2{stroke-dasharray:200;animation:spe-flow 2.8s linear infinite 1.4s}
        .spe-glow{animation:spe-glow 4s ease-in-out infinite}
      `}</style>
      <rect width="460" height="300" rx="12" fill="#0a1520"/>
      <rect x="155" y="16" width="150" height="272" fill="#0f1f2e" stroke="#1e3a5f" strokeWidth="1"/>
      <rect x="184" y="44" width="92" height="200" rx="10" fill="#1e293b" stroke="#334155" strokeWidth="1.5"/>
      <rect x="192" y="54" width="76" height="96" rx="5" fill="#0f172a"/>
      <defs>
        <clipPath id="spe-clip">
          <rect x="192" y="54" width="76" height="96" rx="5"/>
        </clipPath>
      </defs>
      <rect className="spe-lvl" x="192" y="54" width="76" height="96" rx="3"
        fill="#34d399" opacity="0.65" clipPath="url(#spe-clip)"/>
      <text x="230" y="100" textAnchor="middle" fill="#fff" fontSize="22" fontFamily="monospace" fontWeight="700">78%</text>
      <text x="230" y="115" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="7" fontFamily="monospace">LADEZUSTAND</text>
      {[0,1,2,3,4].map(i => (
        <rect key={i} className="spe-p" x={196+i*14} y="166" width="10" height="14" rx="2"
          fill={i < 4 ? '#34d399' : '#1e3a5f'}
          style={{ animationDelay:`${i*0.18}s`, opacity: i >= 4 ? 0.3 : undefined }}/>
      ))}
      <path d="M234 192 L225 212 L232 212 L222 236 L242 210 L234 210Z" fill="#fbbf24" opacity="0.85"/>
      <rect x="212" y="36" width="36" height="12" rx="5" fill="#334155"/>
      <path className="spe-f1" d="M50 82 Q100 82 155 88 L184 88"
        stroke="#f59e0b" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
      <path className="spe-f2" d="M50 222 Q100 222 155 214 L184 214"
        stroke="#3b82f6" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
      <path className="spe-f1" d="M276 148 L320 148 L410 148"
        stroke="#34d399" strokeWidth="1.6" fill="none" strokeLinecap="round" opacity="0.8"/>
      <text x="42" y="76" fill="#f59e0b" fontSize="8" fontFamily="monospace" opacity="0.7">PV</text>
      <text x="42" y="216" fill="#3b82f6" fontSize="8" fontFamily="monospace" opacity="0.7">NETZ</text>
      <text x="415" y="143" fill="#34d399" fontSize="8" fontFamily="monospace" opacity="0.7">HAUS</text>
      <circle className="spe-glow" cx="230" cy="150" r="90" fill="#34d399"/>
    </svg>
  );
}

/* ── 3. E-Mobilität: Wallbox + Elektroauto ── */
function WallboxSzene() {
  return (
    <svg viewBox="0 0 460 300" fill="none" xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true" style={{ width:'100%', maxWidth:500 }}>
      <style>{`
        @keyframes wb2-flow{0%{stroke-dashoffset:320}100%{stroke-dashoffset:0}}
        @keyframes wb2-seg{0%,100%{opacity:.2}50%{opacity:1}}
        @keyframes wb2-blink{0%,100%{opacity:.2}50%{opacity:1}}
        .wb2-cable{stroke-dasharray:320;animation:wb2-flow 2.4s linear infinite}
        .wb2-s1{animation:wb2-seg 2s ease-in-out infinite 0s}
        .wb2-s2{animation:wb2-seg 2s ease-in-out infinite .4s}
        .wb2-s3{animation:wb2-seg 2s ease-in-out infinite .8s}
        .wb2-s4{animation:wb2-seg 2s ease-in-out infinite 1.2s}
        .wb2-s5{animation:wb2-seg 2s ease-in-out infinite 1.6s}
        .wb2-blink{animation:wb2-blink 1.4s ease-in-out infinite}
      `}</style>
      <rect width="460" height="300" rx="12" fill="#e8f4fb"/>
      <rect x="0" y="246" width="460" height="54" fill="#d4d0c8"/>
      <rect x="0" y="244" width="460" height="4" fill="#bab6ae"/>
      <rect x="0" y="0" width="92" height="300" rx="12" fill="#e8dcc8"/>
      <rect x="90" y="0" width="3" height="300" fill="#c4aa88"/>
      <rect x="16" y="88" width="58" height="96" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1.2"/>
      <rect x="24" y="96" width="42" height="30" rx="2" fill="#0f172a"/>
      <text x="45" y="108" textAnchor="middle" fill="#34d399" fontSize="8.5" fontFamily="monospace">11kW</text>
      <text x="45" y="120" textAnchor="middle" fill="#64748b" fontSize="6.5" fontFamily="monospace">LADEN</text>
      {[0,1,2,3,4].map(i => (
        <rect key={i} className={`wb2-s${i+1}`} x={26+i*7.5} y="140" width="5.5" height="12" rx="2" fill="#34d399"/>
      ))}
      <circle cx="45" cy="168" r="8" fill="#0f172a" stroke="#334155" strokeWidth="1"/>
      <circle cx="45" cy="168" r="4" fill="#334155"/>
      <circle className="wb2-blink" cx="65" cy="94" r="3" fill="#34d399"/>
      <path className="wb2-cable"
        d="M45 176 Q45 198 75 214 Q110 228 160 235 Q210 240 250 240"
        stroke="#10b981" strokeWidth="3.2" fill="none" strokeLinecap="round"/>
      <rect x="247" y="234" width="16" height="11" rx="3" fill="#065f46" stroke="#10b981" strokeWidth="1"/>
      <rect x="245" y="196" width="210" height="52" rx="8" fill="#334155"/>
      <path d="M285 196 Q308 162 348 155 Q378 150 408 160 Q428 170 436 196Z" fill="#475569"/>
      <path d="M295 196 Q310 167 345 160 Q370 156 392 166 Q404 175 406 196Z"
        fill="#93c5fd" opacity="0.55"/>
      <line x1="348" y1="157" x2="348" y2="196" stroke="#334155" strokeWidth="1.5"/>
      <circle cx="290" cy="250" r="18" fill="#1f2937"/>
      <circle cx="290" cy="250" r="9" fill="#374151"/>
      <circle cx="290" cy="250" r="4" fill="#6b7280"/>
      <circle cx="418" cy="250" r="18" fill="#1f2937"/>
      <circle cx="418" cy="250" r="9" fill="#374151"/>
      <circle cx="418" cy="250" r="4" fill="#6b7280"/>
      <rect x="247" y="216" width="14" height="10" rx="2" fill="#0f172a" stroke="#10b981" strokeWidth="1"/>
      <rect x="440" y="210" width="12" height="6" rx="2" fill="#fef3c7" opacity="0.6"/>
    </svg>
  );
}

/* ── 4. Wärmepumpe: Außengerät mit Ventilator ── */
function WaermepumpeSzene() {
  return (
    <svg viewBox="0 0 460 300" fill="none" xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true" style={{ width:'100%', maxWidth:500 }}>
      <style>{`
        @keyframes wp-spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
        @keyframes wp-wave{0%{stroke-dashoffset:80}100%{stroke-dashoffset:0}}
        @keyframes wp-flow{0%{stroke-dashoffset:150}100%{stroke-dashoffset:0}}
        @keyframes wp-blink{0%,100%{opacity:.3}50%{opacity:1}}
        .wp-fan{animation:wp-spin 2.5s linear infinite;transform-origin:152px 190px}
        .wp-w1{stroke-dasharray:80;animation:wp-wave 1.4s linear infinite 0s}
        .wp-w2{stroke-dasharray:80;animation:wp-wave 1.4s linear infinite .35s}
        .wp-w3{stroke-dasharray:80;animation:wp-wave 1.4s linear infinite .7s}
        .wp-pipe{stroke-dasharray:150;animation:wp-flow 2.2s linear infinite}
        .wp-blink{animation:wp-blink 1.8s ease-in-out infinite}
      `}</style>
      <rect width="460" height="300" rx="12" fill="#080e1a"/>
      <rect x="0" y="262" width="460" height="38" fill="#090e09"/>
      {[[40,20],[90,12],[180,28],[290,14],[370,22],[420,10],[60,50],[340,40]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r={i%2===0?0.9:1.1} fill="white" opacity={0.3+i*0.06}/>
      ))}
      <rect x="318" y="0" width="142" height="300" fill="#0f1f2e" stroke="#1e3a5f" strokeWidth="1"/>
      <rect x="255" y="192" width="68" height="9" rx="3" fill="#1e293b" stroke="#334155" strokeWidth="0.8"/>
      <rect x="255" y="206" width="68" height="7" rx="3" fill="#1e293b" stroke="#334155" strokeWidth="0.8"/>
      <path className="wp-pipe" d="M240 196 L320 196"
        stroke="#ef4444" strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.65"/>
      <path className="wp-pipe" d="M320 211 L240 211"
        stroke="#3b82f6" strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.65"
        style={{ animationDelay:'1.1s' }}/>
      <rect x="60" y="162" width="188" height="102" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="1.2"/>
      <rect x="66" y="168" width="176" height="90" rx="4" fill="#141e2e"/>
      {Array.from({length:9},(_,i) => (
        <line key={i} x1="66" y1={178+i*9} x2="242" y2={178+i*9} stroke="#1e293b" strokeWidth="1.5"/>
      ))}
      <circle cx="152" cy="190" r="54" fill="#0a1018" stroke="#1e3a5f" strokeWidth="1"/>
      <g className="wp-fan">
        <ellipse cx="152" cy="190" rx="46" ry="10" fill="#334155" opacity="0.75"/>
        <ellipse cx="152" cy="190" rx="10" ry="46" fill="#334155" opacity="0.75" transform="rotate(45,152,190)"/>
        <ellipse cx="152" cy="190" rx="10" ry="46" fill="#334155" opacity="0.75" transform="rotate(-45,152,190)"/>
        <circle cx="152" cy="190" r="8" fill="#475569"/>
        <circle cx="152" cy="190" r="3.5" fill="#374151"/>
      </g>
      <path className="wp-w1" d="M252 170 Q264 162 276 170 Q288 178 300 170" stroke="#ef4444" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6"/>
      <path className="wp-w2" d="M252 186 Q264 178 276 186 Q288 194 300 186" stroke="#f97316" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5"/>
      <path className="wp-w3" d="M252 202 Q264 194 276 202 Q288 210 300 202" stroke="#fbbf24" strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.4"/>
      <rect x="80" y="154" width="55" height="12" rx="2.5" fill="#1e293b" stroke="#334155" strokeWidth="0.8"/>
      <circle className="wp-blink" cx="93" cy="160" r="2.5" fill="#34d399"/>
      <circle className="wp-blink" cx="104" cy="160" r="2.5" fill="#fbbf24" style={{animationDelay:'0.5s'}}/>
      <rect x="334" y="92" width="78" height="58" rx="4" fill="#0f172a" stroke="#1e3a5f" strokeWidth="1"/>
      <text x="373" y="116" textAnchor="middle" fill="#f1f5f9" fontSize="18" fontFamily="monospace" fontWeight="700">21°C</text>
      <text x="373" y="132" textAnchor="middle" fill="#64748b" fontSize="7" fontFamily="monospace">HEIZUNG</text>
      <circle className="wp-blink" cx="400" cy="100" r="2.5" fill="#34d399" style={{animationDelay:'0.25s'}}/>
    </svg>
  );
}

const sections = [
  {
    icon: Sun, area: 'Dach & Außenanlage', dark: false, reverse: false, bg: '#dbeafe',
    title: 'Photovoltaik',
    desc: 'Wir planen und installieren Ihre Solaranlage – von der Dimensionierung über die Montage bis zur Netzanmeldung und Inbetriebnahme.',
    items: ['Planung & Dimensionierung', 'Montage Dach & Fassade', 'Netzanmeldung & Abnahme', 'Wechselrichter & Monitoring'],
    Szene: SolarSzene,
  },
  {
    icon: Battery, area: 'Technikraum', dark: true, reverse: true, bg: '#0a1520',
    title: 'Stromspeicher',
    desc: 'Mit einem Batteriespeicher nutzen Sie Ihren Solarstrom rund um die Uhr und werden unabhängiger vom Stromnetz.',
    items: ['Bedarfsanalyse & Auslegung', 'Integration in PV-Anlage', 'Notstromfähige Systeme', 'Systemüberwachung'],
    Szene: SpeicherSzene,
  },
  {
    icon: Car, area: 'Garage & Einfahrt', dark: false, reverse: false, bg: '#ecfdf5',
    title: 'E-Mobilität & Ladestation',
    desc: 'Wir installieren Wallboxen und Ladesysteme für Privatpersonen und Unternehmen – inklusive Lastmanagement und Fördermittelberatung.',
    items: ['Wallbox-Installation', 'Lastmanagementsystem', 'Fördermittelberatung KfW', 'Gewerbliche Ladesäulen'],
    Szene: WallboxSzene,
  },
  {
    icon: Thermometer, area: 'Außenbereich', dark: true, reverse: true, bg: '#080e1a',
    title: 'Wärmepumpen',
    desc: 'Als Systempartner installieren wir Luft-Wasser- und Erdwärmepumpen und kümmern uns um die elektrische Anbindung.',
    items: ['Luft-Wasser-Wärmepumpen', 'Erdwärmesysteme', 'Elektrische Einbindung', 'Smart-Grid-fähige Steuerung'],
    Szene: WaermepumpeSzene,
  },
];

const vorteile = [
  'Individuelle Wirtschaftlichkeitsberechnung',
  'Beratung zu staatlichen Förderungen',
  'Komplette Umsetzung aus einer Hand',
  'Langfristiger Service und Monitoring',
];

function BulletListe({ items, dark }) {
  return (
    <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:'0.45rem', margin:0, padding:0 }}>
      {items.map(item => (
        <li key={item} style={{ display:'flex', gap:'0.55rem', alignItems:'center', fontSize:'0.88rem',
          color: dark ? 'rgba(255,255,255,0.65)' : 'var(--text-secondary)' }}>
          <CheckCircle size={13} color="var(--primary-dark)" style={{ flexShrink:0 }}/>
          {item}
        </li>
      ))}
    </ul>
  );
}

function useJourneyParallax() {
  useEffect(() => {
    const move = () => {
      document.querySelectorAll('.journey-szene').forEach(el => {
        const rect = el.getBoundingClientRect();
        const fromCenter = rect.top + rect.height / 2 - window.innerHeight / 2;
        if (el.classList.contains('entered')) {
          el.style.transform = `translateY(${fromCenter * 0.07}px) scale(1)`;
        }
      });
    };
    window.addEventListener('scroll', move, { passive: true });
    return () => window.removeEventListener('scroll', move);
  }, []);
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .journey-panel');
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          e.target.classList.add('entered');
        }
      });
    }, { threshold: 0.18 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function Energietechnik() {
  useReveal();
  useJourneyParallax();
  useMeta({
    title: 'Energietechnik',
    description: 'Photovoltaik, Stromspeicher, Wärmepumpen und E-Mobilität aus einer Hand. Jetzt kostenlos beraten lassen – in der Region Ansbach und Umgebung.',
  });
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

      {/* ── Journey: 4 Energiebereiche ── */}
      {sections.map(({ icon: Icon, area, dark, reverse, bg, title, desc, items, Szene }) => (
        <section key={title} className="journey-panel" aria-label={title} style={{ background: bg }}>
          <div className="container" style={{ width:'100%' }}>
            <div style={{ display:'flex', flexWrap:'wrap', gap:'3rem', alignItems:'center',
              flexDirection: reverse ? 'row-reverse' : 'row' }}>
              <div className="journey-text" style={{ flex:'1 1 260px', minWidth:0 }}>
                <div style={{ fontSize:'0.7rem', fontWeight:600, letterSpacing:'0.1em',
                  textTransform:'uppercase',
                  color: dark ? 'rgba(255,255,255,0.35)' : 'var(--text-secondary)',
                  marginBottom:'0.85rem', display:'flex', alignItems:'center', gap:'0.4rem' }}>
                  <Icon size={11} color={dark ? undefined : 'var(--primary-dark)'}/> {area}
                </div>
                <h2 style={{ fontSize:'clamp(1.6rem,2.6vw,2.2rem)', fontWeight:800,
                  lineHeight:1.1, letterSpacing:'-0.02em', marginBottom:'0.9rem',
                  color: dark ? '#fff' : 'var(--text-primary)' }}>
                  {title}
                </h2>
                <p style={{ fontSize:'0.92rem', lineHeight:1.7, marginBottom:'1.25rem',
                  color: dark ? 'rgba(255,255,255,0.5)' : 'var(--text-secondary)' }}>
                  {desc}
                </p>
                <BulletListe dark={dark} items={items}/>
              </div>
              <div className="journey-szene" style={{ flex:'1 1 340px', minWidth:0 }}>
                <Szene/>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── Nachhaltigkeit ── */}
      <section aria-label="Nachhaltige Energie" className="section" style={{ background: 'var(--bg-white)' }}>
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
