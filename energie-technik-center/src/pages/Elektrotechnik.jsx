import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Home, Shield, Wrench, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import { useMeta } from '../hooks/useMeta';

/* ── 1. Elektroinstallation: Sicherungskasten + Hausschema ── */

function InstallationSzene() {
  const breakers = Array.from({ length: 9 }, (_, i) => i);
  const sockets  = [[260,158],[318,65],[376,158],[260,258],[376,258],[440,130]];
  const lamps    = [[261,46,'ins-l1'],[382,46,'ins-l3'],[261,198,'ins-l2'],[382,198,'ins-l4']];
  return (
    <svg viewBox="0 0 460 300" fill="none" xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true" style={{ width:'100%', maxWidth:500 }}>
      <style>{`
        @keyframes ins-flow{0%{stroke-dashoffset:240}100%{stroke-dashoffset:0}}
        @keyframes ins-blink{0%,100%{opacity:.15}50%{opacity:1}}
        @keyframes ins-bolt{0%,78%,100%{opacity:0}42%,58%{opacity:1}}
        .ins-f1{stroke-dasharray:240;animation:ins-flow 2.4s linear infinite}
        .ins-f2{stroke-dasharray:240;animation:ins-flow 2.4s linear infinite .8s}
        .ins-f3{stroke-dasharray:240;animation:ins-flow 2.4s linear infinite 1.6s}
        .ins-l1{animation:ins-blink 2s ease-in-out infinite 0s}
        .ins-l2{animation:ins-blink 2s ease-in-out infinite .5s}
        .ins-l3{animation:ins-blink 2s ease-in-out infinite 1s}
        .ins-l4{animation:ins-blink 2s ease-in-out infinite 1.5s}
        .ins-bolt{animation:ins-bolt 2.8s ease-in-out infinite}
      `}</style>
      {/* Sicherungskasten */}
      <rect x="18" y="18" width="158" height="264" rx="7" fill="#152035" stroke="#2a4a70" strokeWidth="1.5"/>
      <rect x="30" y="30" width="134" height="240" rx="4" fill="#0a1220"/>
      <rect x="40" y="38" width="114" height="26" rx="3" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="0.8"/>
      <rect x="82" y="42" width="28" height="18" rx="2" fill="#2563eb"/>
      <text x="96" y="54" textAnchor="middle" fill="#93c5fd" fontSize="7" fontFamily="monospace">MAIN</text>
      {breakers.map(i => (
        <g key={i}>
          <rect x="40" y={72+i*23} width="57" height="19" rx="2" fill="#1a2d45" stroke="#2d4060" strokeWidth="0.5"/>
          <rect x="43" y={75+i*23} width="22" height="13" rx="1" fill="#0d1828"/>
          <rect x="43" y={75+i*23} width="22" height="7" rx="1" fill="#1e3050"/>
          <circle className={`ins-l${(i%4)+1}`} cx="77" cy={81+i*23} r="2.5" fill="#f59e0b"/>
          <rect x="99" y={72+i*23} width="57" height="19" rx="2" fill="#1a2d45" stroke="#2d4060" strokeWidth="0.5"/>
          <rect x="102" y={75+i*23} width="22" height="13" rx="1" fill="#0d1828"/>
          <rect x="102" y={75+i*23} width="22" height="7" rx="1" fill="#1e3050"/>
          <circle className={`ins-l${((i+2)%4)+1}`} cx="136" cy={81+i*23} r="2.5" fill="#34d399"/>
        </g>
      ))}
      {/* Kabel zum Hausschema */}
      <line x1="176" y1="108" x2="200" y2="108" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="176" y1="142" x2="200" y2="142" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="176" y1="176" x2="200" y2="176" stroke="#34d399" strokeWidth="2" strokeLinecap="round"/>
      {/* Hausgrundrisss */}
      <rect x="200" y="22" width="242" height="256" rx="4" fill="none" stroke="#1e3a5f" strokeWidth="1.5"/>
      <line x1="322" y1="22" x2="322" y2="175" stroke="#1e3a5f" strokeWidth="1"/>
      <line x1="200" y1="175" x2="442" y2="175" stroke="#1e3a5f" strokeWidth="1"/>
      <line x1="322" y1="175" x2="322" y2="278" stroke="#1e3a5f" strokeWidth="1"/>
      <text x="261" y="95" textAnchor="middle" fill="#3b82f6" fontSize="7.5" fontFamily="Inter,sans-serif" opacity="0.5">Wohnraum</text>
      <text x="382" y="95" textAnchor="middle" fill="#3b82f6" fontSize="7.5" fontFamily="Inter,sans-serif" opacity="0.5">Küche</text>
      <text x="261" y="228" textAnchor="middle" fill="#3b82f6" fontSize="7.5" fontFamily="Inter,sans-serif" opacity="0.5">Schlafzimmer</text>
      <text x="382" y="228" textAnchor="middle" fill="#3b82f6" fontSize="7.5" fontFamily="Inter,sans-serif" opacity="0.5">Bad</text>
      {/* Animierte Stromflüsse */}
      <path className="ins-f1" d="M200 108 L262 108 L262 140 L322 140 L322 108 L380 108 L380 58 L442 58"
        stroke="#f59e0b" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="ins-f2" d="M200 142 L240 142 L240 230 L322 230 L322 248 L442 248"
        stroke="#3b82f6" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="ins-f3" d="M200 176 L322 176 L322 205 L442 205"
        stroke="#34d399" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.85"/>
      {/* Steckdosen */}
      {sockets.map(([x,y],i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="5.5" fill="none" stroke="#475569" strokeWidth="0.9"/>
          <line x1={x-2.5} y1={y-2} x2={x-2.5} y2={y+2} stroke="#475569" strokeWidth="0.9"/>
          <line x1={x+2.5} y1={y-2} x2={x+2.5} y2={y+2} stroke="#475569" strokeWidth="0.9"/>
        </g>
      ))}
      {/* Lampen */}
      {lamps.map(([x,y,cls],i) => (
        <g key={i} className={cls}>
          <circle cx={x} cy={y} r="7" fill="none" stroke="#f59e0b" strokeWidth="1.2"/>
          <line x1={x-5} y1={y-5} x2={x+5} y2={y+5} stroke="#f59e0b" strokeWidth="0.9"/>
          <line x1={x+5} y1={y-5} x2={x-5} y2={y+5} stroke="#f59e0b" strokeWidth="0.9"/>
        </g>
      ))}
      <path className="ins-bolt" d="M328 148 L320 170 L327 170 L319 194 L340 164 L332 164Z" fill="#fbbf24" opacity="0.9"/>
    </svg>
  );
}

/* ── 4. Prüfungen: Mann im Technikraum, Prüfgerät mit Kreis+Haken ── */

function PruefungSzene() {
  return (
    <svg viewBox="0 0 460 300" fill="none" xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true" style={{ width:'100%', maxWidth:500 }}>
      <style>{`
        @keyframes pr2-circ{0%{stroke-dashoffset:75}55%{stroke-dashoffset:0}100%{stroke-dashoffset:0}}
        @keyframes pr2-chk{0%,52%{stroke-dashoffset:28}85%,100%{stroke-dashoffset:0}}
        @keyframes pr2-glow{0%,100%{opacity:0}62%,80%{opacity:1}}
        @keyframes pr2-blink{0%,100%{opacity:.3}50%{opacity:1}}
        .pr2-circ{stroke-dasharray:75;animation:pr2-circ 3s ease-in-out infinite}
        .pr2-chk{stroke-dasharray:28;animation:pr2-chk 3s ease-in-out infinite}
        .pr2-glow{animation:pr2-glow 3s ease-in-out infinite}
        .pr2-b{animation:pr2-blink 1.8s ease-in-out infinite}
      `}</style>
      {/* Raum-Hintergrund */}
      <rect width="460" height="300" rx="12" fill="#0d1520"/>
      <rect x="0" y="252" width="460" height="48" fill="#0a1018"/>
      <line x1="0" y1="252" x2="460" y2="252" stroke="#1e293b" strokeWidth="1.5"/>
      {/* Schaltschrank rechts */}
      <rect x="330" y="40" width="112" height="182" rx="4" fill="#141e2e" stroke="#2a3a50" strokeWidth="1.2"/>
      <rect x="340" y="52" width="92" height="160" rx="2" fill="#0a1018"/>
      {Array.from({length:8},(_,i) => (
        <g key={i}>
          <rect x="347" y={58+i*18} width="38" height="12" rx="1.5" fill="#162030" stroke="#1e3a5f" strokeWidth="0.5"/>
          <circle className="pr2-b" cx="377" cy={64+i*18} r="2" fill={i%3===0?'#34d399':i%3===1?'#f59e0b':'#3b82f6'}/>
        </g>
      ))}
      {/* Manometer an der Wand */}
      <rect x="52" y="42" width="90" height="72" rx="5" fill="#141e2e" stroke="#2a3a50" strokeWidth="1"/>
      <path d="M68 100 A38 38 0 0 1 124 100" stroke="#1e3a5f" strokeWidth="1" fill="none"/>
      <path d="M68 100 A38 38 0 0 1 80 68" stroke="#34d399" strokeWidth="3" fill="none" opacity="0.4"/>
      <path d="M80 68 A38 38 0 0 1 110 65" stroke="#f59e0b" strokeWidth="3" fill="none" opacity="0.4"/>
      <path d="M110 65 A38 38 0 0 1 124 100" stroke="#ef4444" strokeWidth="3" fill="none" opacity="0.4"/>
      <line x1="96" y1="100" x2="96" y2="72" stroke="#ef4444" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="96" cy="100" r="3.5" fill="#334155"/>
      {/* Rohre */}
      <line x1="0" y1="58" x2="46" y2="58" stroke="#1e293b" strokeWidth="6" strokeLinecap="round"/>
      <line x1="0" y1="80" x2="46" y2="80" stroke="#1e293b" strokeWidth="4" strokeLinecap="round"/>
      <line x1="160" y1="30" x2="160" y2="252" stroke="#1e293b" strokeWidth="5"/>
      <line x1="175" y1="30" x2="175" y2="252" stroke="#172030" strokeWidth="2"/>
      {/* Person – Kopf */}
      <circle cx="238" cy="88" r="18" fill="#64748b"/>
      {/* Hals + Torso */}
      <rect x="232" y="104" width="12" height="10" rx="2" fill="#5a6a7e"/>
      <rect x="218" y="114" width="40" height="70" rx="6" fill="#475569"/>
      <rect x="224" y="120" width="12" height="18" rx="2" fill="#3b4a5c"/>
      {/* Rechter Arm – ausgestreckt zum Gerät */}
      <path d="M258 130 Q278 138 295 148" stroke="#475569" strokeWidth="14" strokeLinecap="round" fill="none"/>
      {/* Linker Arm */}
      <path d="M218 130 Q205 150 208 172" stroke="#3d5068" strokeWidth="12" strokeLinecap="round" fill="none"/>
      {/* Beine */}
      <rect x="224" y="182" width="14" height="62" rx="5" fill="#334155"/>
      <rect x="240" y="182" width="14" height="62" rx="5" fill="#2d4060"/>
      <rect x="218" y="238" width="20" height="10" rx="3" fill="#1e293b"/>
      <rect x="238" y="238" width="20" height="10" rx="3" fill="#1e293b"/>
      {/* Prüfgerät */}
      <rect x="292" y="134" width="78" height="54" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1.2"/>
      <rect x="299" y="141" width="64" height="40" rx="3" fill="#0a1018"/>
      <rect className="pr2-glow" x="299" y="141" width="64" height="40" rx="3" fill="#34d399" opacity="0.06"/>
      {/* Animierter grüner Kreis */}
      <circle className="pr2-circ" cx="320" cy="161" r="12" fill="none" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round"/>
      {/* Animierter weißer Haken */}
      <path className="pr2-chk" d="M312 161 L318 168 L330 152"
        stroke="#34d399" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <text x="349" y="163" fill="#64748b" fontSize="6.5" fontFamily="monospace">PRÜF</text>
      <text x="349" y="172" fill="#64748b" fontSize="6.5" fontFamily="monospace">GERÄT</text>
      <rect x="330" y="188" width="20" height="22" rx="3" fill="#152030" stroke="#1e293b" strokeWidth="0.8"/>
      <circle cx="357" cy="141" r="2.5" fill="#34d399" opacity="0.8"/>
      <circle cx="350" cy="141" r="2.5" fill="#f59e0b" opacity="0.5"/>
    </svg>
  );
}

/* ── 3. Sicherheitstechnik: Haus bei Nacht + schwenkende Kamera ── */

function SicherheitSzene() {
  return (
    <svg viewBox="0 0 460 300" fill="none" xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true" style={{ width:'100%', maxWidth:500 }}>
      <style>{`
        @keyframes sec-pan{0%,100%{transform:rotate(-22deg)}50%{transform:rotate(22deg)}}
        @keyframes sec-beam{0%,100%{opacity:.07}50%{opacity:.22}}
        @keyframes sec-led{0%,100%{opacity:.15}50%{opacity:1}}
        @keyframes sec-star{0%,100%{opacity:.25}50%{opacity:.9}}
        .sec-cam{animation:sec-pan 4s ease-in-out infinite;transform-origin:350px 155px}
        .sec-beam{animation:sec-beam 4s ease-in-out infinite}
        .sec-led{animation:sec-led 1.4s ease-in-out infinite}
        .sec-s1{animation:sec-star 3.1s ease-in-out infinite 0s}
        .sec-s2{animation:sec-star 3.1s ease-in-out infinite 1s}
        .sec-s3{animation:sec-star 3.1s ease-in-out infinite 2s}
      `}</style>
      <defs>
        <linearGradient id="sec-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#020814"/>
          <stop offset="100%" stopColor="#0a1832"/>
        </linearGradient>
      </defs>
      {/* Nachthimmel */}
      <rect width="460" height="300" rx="12" fill="url(#sec-sky)"/>
      {/* Sterne */}
      {[[60,30],[120,18],[200,25],[280,12],[380,28],[420,40],[50,60],[160,52],[340,48],[430,15],[100,80],[310,35]].map(([x,y],i) => (
        <circle key={i} className={`sec-s${(i%3)+1}`} cx={x} cy={y} r={i%3===0?1.2:0.8} fill="white"/>
      ))}
      {/* Mond */}
      <circle cx="58" cy="45" r="16" fill="#f0e68c" opacity="0.12"/>
      <circle cx="65" cy="41" r="13" fill="#020814" opacity="0.9"/>
      {/* Boden */}
      <rect x="0" y="252" width="460" height="48" fill="#0d1a0d"/>
      {/* Hauswand */}
      <rect x="60" y="152" width="290" height="104" fill="#0f1f2e" stroke="#1e3a5f" strokeWidth="1"/>
      {/* Dach */}
      <polygon points="42,155 205,82 368,155" fill="#0a1520" stroke="#1e3a5f" strokeWidth="1"/>
      {/* Schornstein */}
      <rect x="268" y="93" width="22" height="46" fill="#0d1a2a"/>
      {/* Fenster links – beleuchtet */}
      <rect x="88" y="174" width="60" height="46" rx="2" fill="#fef3c7" opacity="0.9"/>
      <line x1="118" y1="174" x2="118" y2="220" stroke="#c8a050" strokeWidth="1"/>
      <line x1="88" y1="197" x2="148" y2="197" stroke="#c8a050" strokeWidth="1"/>
      <rect x="88" y="174" width="60" height="46" rx="2" fill="#fbbf24" opacity="0.12"/>
      {/* Fenster rechts – halb dunkel */}
      <rect x="258" y="174" width="60" height="46" rx="2" fill="#fef3c7" opacity="0.45"/>
      <line x1="288" y1="174" x2="288" y2="220" stroke="#c8a050" strokeWidth="1"/>
      <line x1="258" y1="197" x2="318" y2="197" stroke="#c8a050" strokeWidth="1"/>
      {/* Tür */}
      <rect x="172" y="210" width="62" height="46" rx="2" fill="#0a1218"/>
      <circle cx="225" cy="236" r="3" fill="#8b7040"/>
      {/* Kamera-Montagepunkt – obere rechte Hausecke */}
      <rect x="346" y="150" width="10" height="16" rx="2" fill="#2a3a50" stroke="#475569" strokeWidth="0.8"/>
      <circle cx="350" cy="155" r="4" fill="#334155" stroke="#475569" strokeWidth="1"/>
      {/* Schwenkende Kamera – dreht sich um Montagepunkt 350,155 */}
      <g className="sec-cam">
        {/* Arm nach links entlang der Wand */}
        <rect x="284" y="150" width="66" height="11" rx="5" fill="#334155" stroke="#475569" strokeWidth="0.8"/>
        {/* Kamerakopf am linken Ende */}
        <rect x="273" y="147" width="15" height="18" rx="3" fill="#1e293b" stroke="#3b82f6" strokeWidth="0.8"/>
        <circle cx="280" cy="156" r="5" fill="#0f172a"/>
        <circle cx="280" cy="156" r="2.5" fill="#1e40af"/>
        <circle className="sec-led" cx="289" cy="150" r="2.5" fill="#ef4444"/>
      </g>
      {/* Scan-Strahl dreht sich mit Kamera */}
      <g className="sec-cam">
        <path className="sec-beam" d="M276 156 L160 210 L90 252 L190 200Z" fill="#3b82f6"/>
      </g>
      {/* Zaun */}
      {Array.from({length:11},(_,i) => (
        <g key={i}>
          <rect x={12+i*42} y={234} width="6" height="20" rx="1" fill="#1a2a3a"/>
          <polygon points={`${12+i*42},234 ${15+i*42},228 ${18+i*42},234`} fill="#1a2a3a"/>
          <line x1={12+i*42} y1={244} x2={54+i*42} y2={244} stroke="#243544" strokeWidth="1"/>
        </g>
      ))}
    </svg>
  );
}

/* ── 2. Smart Home: Wandpanel mit Licht & Temperatur ── */

function SmartHomeSzene() {
  return (
    <svg viewBox="0 0 460 300" fill="none" xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true" style={{ width:'100%', maxWidth:500 }}>
      <style>{`
        @keyframes smp-slide{0%,100%{transform:translateX(0px)}50%{transform:translateX(68px)}}
        @keyframes smp-temp{0%,100%{opacity:1}50%{opacity:.55}}
        @keyframes smp-light{0%,100%{opacity:.2}50%{opacity:1}}
        @keyframes smp-wifi{0%{opacity:.1}50%{opacity:.8}100%{opacity:.1}}
        @keyframes smp-glow{0%,100%{opacity:.04}50%{opacity:.12}}
        .smp-sl{animation:smp-slide 3.5s ease-in-out infinite}
        .smp-t{animation:smp-temp 2s ease-in-out infinite}
        .smp-l1{animation:smp-light 2.2s ease-in-out infinite 0s}
        .smp-l2{animation:smp-light 2.2s ease-in-out infinite .7s}
        .smp-l3{animation:smp-light 2.2s ease-in-out infinite 1.4s}
        .smp-w1{animation:smp-wifi 2s ease-in-out infinite 0s}
        .smp-w2{animation:smp-wifi 2s ease-in-out infinite .4s}
        .smp-w3{animation:smp-wifi 2s ease-in-out infinite .8s}
        .smp-g{animation:smp-glow 2.5s ease-in-out infinite}
      `}</style>
      {/* Wand + Boden */}
      <rect width="460" height="300" rx="12" fill="#e8ecf4"/>
      <rect x="0" y="228" width="460" height="72" fill="#d0d6e4"/>
      <rect x="0" y="224" width="460" height="5" fill="#bcc4d6"/>
      {/* Panel-Schatten + Gehäuse */}
      <rect x="140" y="42" width="180" height="188" rx="14" fill="rgba(0,0,0,0.18)" style={{transform:'translateY(4px)'}}/>
      <rect x="140" y="38" width="180" height="188" rx="14" fill="#1e293b"/>
      <rect x="149" y="47" width="162" height="170" rx="9" fill="#0f172a"/>
      <rect className="smp-g" x="149" y="47" width="162" height="170" rx="9" fill="#3b82f6"/>
      {/* Kopfzeile */}
      <text x="230" y="68" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="Inter,sans-serif" letterSpacing="0.1em">SMART HOME</text>
      <line x1="159" y1="76" x2="301" y2="76" stroke="#1e3a5f" strokeWidth="0.8"/>
      {/* Temperatur Innen */}
      <text x="207" y="112" textAnchor="end" fill="#f1f5f9" fontSize="30" fontFamily="Inter,sans-serif" fontWeight="700" className="smp-t">21</text>
      <text x="212" y="99" fill="#94a3b8" fontSize="13" fontFamily="Inter,sans-serif">.5°C</text>
      <text x="203" y="125" textAnchor="end" fill="#475569" fontSize="7" fontFamily="Inter,sans-serif">INNEN</text>
      {/* Thermometer */}
      <rect x="162" y="88" width="9" height="26" rx="4.5" fill="none" stroke="#3b82f6" strokeWidth="1.2"/>
      <circle cx="166.5" cy="116" r="5.5" fill="#3b82f6" opacity="0.8"/>
      <rect x="163.5" y="100" width="6" height="14" rx="3" fill="#3b82f6" opacity="0.6"/>
      {/* Trenner */}
      <line x1="250" y1="84" x2="250" y2="132" stroke="#1e3a5f" strokeWidth="0.8"/>
      {/* Temperatur Außen */}
      <text x="275" y="112" textAnchor="middle" fill="#475569" fontSize="24" fontFamily="Inter,sans-serif" fontWeight="600">8°C</text>
      <text x="275" y="125" textAnchor="middle" fill="#334155" fontSize="7" fontFamily="Inter,sans-serif">AUSSEN</text>
      {/* Beleuchtungsbereich */}
      <line x1="159" y1="140" x2="301" y2="140" stroke="#1e3a5f" strokeWidth="0.8"/>
      <text x="165" y="154" fill="#64748b" fontSize="8" fontFamily="Inter,sans-serif">Beleuchtung</text>
      {/* Sonne-Icon */}
      <circle cx="290" cy="150" r="5" fill="none" stroke="#f59e0b" strokeWidth="1.2" className="smp-l2"/>
      {[0,60,120,180,240,300].map(a => {
        const r = a*Math.PI/180;
        return <line key={a} x1={290+Math.cos(r)*7.5} y1={150+Math.sin(r)*7.5}
          x2={290+Math.cos(r)*9.5} y2={150+Math.sin(r)*9.5} stroke="#f59e0b" strokeWidth="1.1" className="smp-l2"/>;
      })}
      {/* Schieberegler */}
      <rect x="159" y="163" width="146" height="5" rx="2.5" fill="#1e3a5f"/>
      <rect x="159" y="163" width="88" height="5" rx="2.5" fill="#f59e0b" opacity="0.6"/>
      <circle className="smp-sl" cx="159" cy="165.5" r="8" fill="#f59e0b"/>
      {/* Raum-Buttons */}
      <line x1="159" y1="184" x2="301" y2="184" stroke="#1e3a5f" strokeWidth="0.8"/>
      {['Wohnraum','Küche','Schlafen'].map((room,i) => (
        <g key={room}>
          <rect x={159+i*50} y={192} width={46} height={17} rx="8.5"
            fill={i===0?'#1e3a5f':'transparent'}
            stroke={i===0?'#3b82f6':'#1e3a5f'} strokeWidth="0.8"/>
          <text x={182+i*50} y={204} textAnchor="middle"
            fill={i===0?'#93c5fd':'#334155'} fontSize="6.5" fontFamily="Inter,sans-serif">{room}</text>
        </g>
      ))}
      {/* WiFi-Wellen oben */}
      <circle className="smp-w1" cx="230" cy="40" r="7" fill="none" stroke="#3b82f6" strokeWidth="1.2"/>
      <circle className="smp-w2" cx="230" cy="40" r="12" fill="none" stroke="#3b82f6" strokeWidth="1"/>
      <circle className="smp-w3" cx="230" cy="40" r="17" fill="none" stroke="#3b82f6" strokeWidth="0.8"/>
      <circle cx="230" cy="40" r="3" fill="#3b82f6"/>
      {/* Leucht-Orbs links & rechts */}
      <circle className="smp-l1" cx="68" cy="100" r="28" fill="#fef3c7" opacity="0.25"/>
      <circle className="smp-l1" cx="68" cy="100" r="16" fill="#fbbf24" opacity="0.35"/>
      <circle cx="68" cy="100" r="8" fill="#fbbf24" opacity="0.6"/>
      <circle className="smp-l3" cx="395" cy="130" r="22" fill="#fef3c7" opacity="0.25"/>
      <circle className="smp-l3" cx="395" cy="130" r="12" fill="#fbbf24" opacity="0.35"/>
      <circle cx="395" cy="130" r="6" fill="#fbbf24" opacity="0.6"/>
      <path d="M84 100 Q112 100 140 87" stroke="#f59e0b" strokeWidth="1" strokeDasharray="4 3" opacity="0.3"/>
    </svg>
  );
}

/* ── 5. Interaktives Haus: Fenster-Licht per Klick umschalten ── */

function InteraktivesHaus() {
  const [lights, setLights] = useState([true, true, true, true, true]);
  const toggle = (i) => setLights(prev => prev.map((v, j) => j === i ? !v : v));
  const windows = [
    { x:50,  y:108, w:64, h:48 },
    { x:148, y:108, w:64, h:48 },
    { x:246, y:108, w:64, h:48 },
    { x:55,  y:186, w:64, h:52 },
    { x:245, y:186, w:64, h:52 },
  ];
  return (
    <div>
      <svg viewBox="0 0 360 280" fill="none" xmlns="http://www.w3.org/2000/svg"
        style={{ width:'100%', maxWidth:420 }}
        role="img" aria-label="Haus mit schaltbaren Fensterlichtern">
        <defs>
          <filter id="wglow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="5" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <linearGradient id="hskyg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#dbeafe"/>
            <stop offset="100%" stopColor="#eff6ff"/>
          </linearGradient>
        </defs>
        <rect width="360" height="280" fill="url(#hskyg)"/>
        <rect x="0" y="248" width="360" height="32" fill="#bbf7d0"/>
        <rect x="0" y="248" width="360" height="6" fill="#86efac"/>
        {/* Schornsteine */}
        <rect x="240" y="42" width="20" height="40" fill="#9e6a50"/>
        <rect x="100" y="52" width="16" height="32" fill="#9e6a50"/>
        {/* Dach */}
        <polygon points="20,95 180,20 340,95" fill="#b45309" stroke="#92400e" strokeWidth="1.5"/>
        {/* Hauswand */}
        <rect x="20" y="92" width="320" height="160" fill="#e8dcc8" stroke="#c4aa88" strokeWidth="1.5"/>
        {/* Fenster */}
        {windows.map((win, i) => (
          <g key={i}
            onClick={() => toggle(i)}
            role="button"
            tabIndex={0}
            aria-label={`Fenster ${i+1}: Licht ${lights[i]?'an – klicken zum Ausschalten':'aus – klicken zum Einschalten'}`}
            onKeyDown={e => (e.key==='Enter'||e.key===' ') && toggle(i)}
            style={{ cursor:'pointer', outline:'none' }}>
            {lights[i] && (
              <rect x={win.x-6} y={win.y-6} width={win.w+12} height={win.h+12} rx="6"
                fill="#fef3c7" filter="url(#wglow)" opacity="0.7"/>
            )}
            <rect x={win.x-3} y={win.y+win.h} width={win.w+6} height={5} rx="1" fill="#b89c78"/>
            <rect x={win.x} y={win.y} width={win.w} height={win.h} rx="2"
              fill={lights[i]?'#fef3c7':'#1e2d45'} stroke="#c4aa88" strokeWidth="1.5"/>
            {lights[i] && (
              <rect x={win.x+3} y={win.y+3} width={win.w-6} height={win.h-6} rx="1" fill="#fbbf24" opacity="0.25"/>
            )}
            <line x1={win.x+win.w/2} y1={win.y+2} x2={win.x+win.w/2} y2={win.y+win.h-2} stroke="#c4aa88" strokeWidth="1.2"/>
            <line x1={win.x+2} y1={win.y+win.h/2} x2={win.x+win.w-2} y2={win.y+win.h/2} stroke="#c4aa88" strokeWidth="1.2"/>
            {lights[i] && i>=3 && (
              <polygon
                points={`${win.x+4},${win.y+win.h} ${win.x+win.w-4},${win.y+win.h} ${win.x+win.w+14},248 ${win.x-14},248`}
                fill="#fef9c3" opacity="0.22"/>
            )}
          </g>
        ))}
        {/* Tür */}
        <rect x="148" y="200" width="64" height="52" rx="3" fill="#7c4a1e" stroke="#c4aa88" strokeWidth="1.2"/>
        <rect x="148" y="200" width="64" height="26" rx="3" fill="#8b5620"/>
        <rect x="155" y="207" width="22" height="16" rx="1" fill="#6b3e14" opacity="0.6"/>
        <rect x="183" y="207" width="22" height="16" rx="1" fill="#6b3e14" opacity="0.6"/>
        <circle cx="210" cy="227" r="4" fill="#d4a017" stroke="#b8860b" strokeWidth="0.8"/>
      </svg>
      <p style={{ textAlign:'center', marginTop:'0.85rem', fontSize:'0.78rem',
        color:'var(--text-secondary)', display:'flex', alignItems:'center',
        gap:'0.45rem', justifyContent:'center' }}>
        <span style={{ fontSize:'1rem' }}>💡</span>
        Klicke auf ein Fenster – Licht an oder aus
      </p>
    </div>
  );
}

/* ── Hilfsfunktion: Bullet-Liste ── */
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

/* Scroll-Journey: verfolgt Scroll-Fortschritt innerhalb eines Wrappers */
function useScrollJourney(total) {
  const wrapperRef = useRef(null);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = wrapperRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrolled = Math.max(0, -rect.top);
      const scrollable = el.scrollHeight - window.innerHeight;
      const progress = Math.min(1, scrolled / scrollable);
      setStep(Math.min(total - 1, Math.floor(progress * total)));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [total]);

  return { wrapperRef, step };
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function Elektrotechnik() {
  useReveal();
  const { wrapperRef: journeyRef, step: journeyStep } = useScrollJourney(4);
  useMeta({
    title: 'Elektrotechnik',
    description: 'Elektroinstallation, Smart Home, Sicherheitstechnik und Prüfungen – normgerecht und zuverlässig in der Region Ansbach. Jetzt kostenlos anfragen.',
  });
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

      {/* ── Scroll Journey: 4 Leistungsbereiche ── */}
      <div ref={journeyRef} style={{ position:'relative', height:'400vh' }} aria-label="Leistungen Elektrotechnik">
        <div style={{ position:'sticky', top:0, height:'100vh', overflow:'hidden' }}>

          {/* Raum-Indikator oben */}
          <div style={{
            position:'absolute', top:'1.5rem', left:'50%', transform:'translateX(-50%)',
            zIndex:20, display:'flex', alignItems:'center', gap:'0.5rem',
            background:'rgba(0,0,0,0.35)', backdropFilter:'blur(8px)',
            borderRadius:99, padding:'0.4rem 1rem', border:'1px solid rgba(255,255,255,0.1)',
          }}>
            {[
              { label:'Keller', icon:Zap },
              { label:'Wohnraum', icon:Home },
              { label:'Außen', icon:Shield },
              { label:'Technik', icon:Wrench },
            ].map(({ label, icon: Icon }, i) => (
              <div key={i} style={{ display:'flex', alignItems:'center', gap:'0.3rem',
                opacity: i === journeyStep ? 1 : 0.35,
                transition:'opacity 0.4s ease',
                fontSize:'0.68rem', fontWeight:600, letterSpacing:'0.06em',
                textTransform:'uppercase', color:'#fff' }}>
                {i > 0 && <span style={{ opacity:0.3, marginRight:'0.2rem' }}>›</span>}
                <Icon size={10}/> {label}
              </div>
            ))}
          </div>

          {/* Panel 0 – Elektroinstallation */}
          <div style={{
            position:'absolute', inset:0, display:'flex', alignItems:'center',
            background:'#0a1520',
            transform:`translateX(${(0 - journeyStep) * 100}%)`,
            transition:'transform 0.9s cubic-bezier(0.76,0,0.24,1)',
          }}>
            <div className="container" style={{ width:'100%' }}>
              <div style={{ display:'flex', flexWrap:'wrap', gap:'3rem', alignItems:'center' }}>
                <div style={{ flex:'1 1 260px', minWidth:0 }}>
                  <div style={{ fontSize:'0.7rem', fontWeight:600, letterSpacing:'0.1em',
                    textTransform:'uppercase', color:'rgba(255,255,255,0.35)',
                    marginBottom:'0.85rem', display:'flex', alignItems:'center', gap:'0.4rem' }}>
                    <Zap size={11}/> Keller &amp; Verteilung
                  </div>
                  <h2 style={{ fontSize:'clamp(1.6rem,2.6vw,2.2rem)', fontWeight:800,
                    lineHeight:1.1, letterSpacing:'-0.02em', marginBottom:'0.9rem', color:'#fff' }}>
                    Elektroinstallation
                  </h2>
                  <p style={{ fontSize:'0.92rem', lineHeight:1.7, marginBottom:'1.25rem',
                    color:'rgba(255,255,255,0.5)' }}>
                    Neubau, Sanierung oder Erweiterung – wir installieren normgerecht und sauber.
                    Vom Zählerkasten bis zur letzten Steckdose.
                  </p>
                  <BulletListe dark items={['Unterverteilungen & Zähleranlagen','Steckdosen & Leitungsverlegung','Beleuchtungsinstallation','Außenanlagen & Gartenbeleuchtung']}/>
                </div>
                <div style={{ flex:'1 1 340px', minWidth:0 }}><InstallationSzene/></div>
              </div>
            </div>
          </div>

          {/* Panel 1 – Smart Home */}
          <div style={{
            position:'absolute', inset:0, display:'flex', alignItems:'center',
            background:'#f5f0e8',
            transform:`translateX(${(1 - journeyStep) * 100}%)`,
            transition:'transform 0.9s cubic-bezier(0.76,0,0.24,1)',
          }}>
            <div className="container" style={{ width:'100%' }}>
              <div style={{ display:'flex', flexWrap:'wrap', gap:'3rem', alignItems:'center', flexDirection:'row-reverse' }}>
                <div style={{ flex:'1 1 260px', minWidth:0 }}>
                  <div style={{ fontSize:'0.7rem', fontWeight:600, letterSpacing:'0.1em',
                    textTransform:'uppercase', color:'var(--text-secondary)',
                    marginBottom:'0.85rem', display:'flex', alignItems:'center', gap:'0.4rem' }}>
                    <Home size={11} color="var(--primary-dark)"/> Wohnbereich
                  </div>
                  <h2 style={{ fontSize:'clamp(1.6rem,2.6vw,2.2rem)', fontWeight:800,
                    lineHeight:1.1, letterSpacing:'-0.02em', marginBottom:'0.9rem',
                    color:'var(--text-primary)' }}>
                    Smart Home
                  </h2>
                  <p style={{ fontSize:'0.92rem', lineHeight:1.7, marginBottom:'1.25rem',
                    color:'var(--text-secondary)' }}>
                    Intelligente Haustechnik für mehr Komfort, Sicherheit und Energieeinsparung.
                    Wir planen und installieren Ihr Smart-Home-System.
                  </p>
                  <BulletListe items={['KNX / Busch-Jaeger / Gira','Automatische Beschattung','Sprachsteuerung (Alexa, Google)','Einbruchmeldesysteme']}/>
                </div>
                <div style={{ flex:'1 1 340px', minWidth:0 }}><SmartHomeSzene/></div>
              </div>
            </div>
          </div>

          {/* Panel 2 – Sicherheitstechnik */}
          <div style={{
            position:'absolute', inset:0, display:'flex', alignItems:'center',
            background:'#060c18',
            transform:`translateX(${(2 - journeyStep) * 100}%)`,
            transition:'transform 0.9s cubic-bezier(0.76,0,0.24,1)',
          }}>
            <div className="container" style={{ width:'100%' }}>
              <div style={{ display:'flex', flexWrap:'wrap', gap:'3rem', alignItems:'center' }}>
                <div style={{ flex:'1 1 260px', minWidth:0 }}>
                  <div style={{ fontSize:'0.7rem', fontWeight:600, letterSpacing:'0.1em',
                    textTransform:'uppercase', color:'rgba(255,255,255,0.35)',
                    marginBottom:'0.85rem', display:'flex', alignItems:'center', gap:'0.4rem' }}>
                    <Shield size={11}/> Außenbereich
                  </div>
                  <h2 style={{ fontSize:'clamp(1.6rem,2.6vw,2.2rem)', fontWeight:800,
                    lineHeight:1.1, letterSpacing:'-0.02em', marginBottom:'0.9rem', color:'#fff' }}>
                    Sicherheitstechnik
                  </h2>
                  <p style={{ fontSize:'0.92rem', lineHeight:1.7, marginBottom:'1.25rem',
                    color:'rgba(255,255,255,0.5)' }}>
                    Schutz für Ihr Zuhause und Ihren Betrieb: Einbruchmeldeanlagen,
                    Videoüberwachung und Brandschutz aus einer Hand.
                  </p>
                  <BulletListe dark items={['Einbruchmeldeanlagen','Videoüberwachung','Rauchmeldeanlagen','Zutrittskontrolle']}/>
                </div>
                <div style={{ flex:'1 1 340px', minWidth:0 }}><SicherheitSzene/></div>
              </div>
            </div>
          </div>

          {/* Panel 3 – Prüfungen & Wartung */}
          <div style={{
            position:'absolute', inset:0, display:'flex', alignItems:'center',
            background:'#0e1723',
            transform:`translateX(${(3 - journeyStep) * 100}%)`,
            transition:'transform 0.9s cubic-bezier(0.76,0,0.24,1)',
          }}>
            <div className="container" style={{ width:'100%' }}>
              <div style={{ display:'flex', flexWrap:'wrap', gap:'3rem', alignItems:'center', flexDirection:'row-reverse' }}>
                <div style={{ flex:'1 1 260px', minWidth:0 }}>
                  <div style={{ fontSize:'0.7rem', fontWeight:600, letterSpacing:'0.1em',
                    textTransform:'uppercase', color:'rgba(255,255,255,0.35)',
                    marginBottom:'0.85rem', display:'flex', alignItems:'center', gap:'0.4rem' }}>
                    <Wrench size={11}/> Technikraum
                  </div>
                  <h2 style={{ fontSize:'clamp(1.6rem,2.6vw,2.2rem)', fontWeight:800,
                    lineHeight:1.1, letterSpacing:'-0.02em', marginBottom:'0.9rem', color:'#fff' }}>
                    Prüfungen &amp; Wartung
                  </h2>
                  <p style={{ fontSize:'0.92rem', lineHeight:1.7, marginBottom:'1.25rem',
                    color:'rgba(255,255,255,0.5)' }}>
                    Regelmäßige Prüfungen nach DGUV und VDE sichern den sicheren Betrieb
                    Ihrer Anlagen und sind oft gesetzlich vorgeschrieben.
                  </p>
                  <BulletListe dark items={['E-Check','DGUV V3 Prüfungen','Prüfung ortsveränderlicher Geräte','Anlagendokumentation']}/>
                </div>
                <div style={{ flex:'1 1 340px', minWidth:0 }}><PruefungSzene/></div>
              </div>
            </div>
          </div>

          {/* Fortschritts-Dots unten */}
          <div style={{
            position:'absolute', bottom:'2rem', left:'50%', transform:'translateX(-50%)',
            display:'flex', gap:'0.5rem', zIndex:20,
          }}>
            {['Elektroinstallation','Smart Home','Sicherheit','Prüfung'].map((label, i) => (
              <div key={i} title={label} style={{
                width: i === journeyStep ? 28 : 8,
                height: 8, borderRadius: 4,
                background: i === journeyStep ? 'var(--primary)' : 'rgba(255,255,255,0.28)',
                transition: 'all 0.35s ease',
              }}/>
            ))}
          </div>

          {/* Scroll-Hinweis */}
          {journeyStep < 3 && (
            <div style={{
              position:'absolute', bottom:'2rem', right:'2rem', zIndex:20,
              fontSize:'0.68rem', color:'rgba(255,255,255,0.3)',
              letterSpacing:'0.08em', textTransform:'uppercase',
            }}>
              scroll ↓
            </div>
          )}
        </div>
      </div>

      {/* ── Qualität ── */}
      <section aria-label="Qualitätsversprechen" className="section" style={{ background:'#fff' }}>
        <div className="container">
          <div style={{ display:'flex', flexWrap:'wrap', gap:'4rem', alignItems:'center' }}>
            <div className="reveal-left" style={{ flex:'1 1 280px', minWidth:0 }}>
              <div className="section-eyebrow"><span>Qualität</span></div>
              <h2 style={{ fontSize:'clamp(1.5rem,2.5vw,2rem)', fontWeight:800, marginBottom:'1.5rem' }}>
                Warum Kunden uns wählen
              </h2>
              <div style={{ display:'flex', flexDirection:'column', gap:'1.25rem' }}>
                {[
                  { title:'Normgerecht & sicher', text:'Alle Arbeiten nach aktuellen VDE- und DIN-Normen.' },
                  { title:'Feste Ansprechpartner', text:'Kein Callcenter – Sie sprechen direkt mit uns.' },
                  { title:'Saubere Ausführung', text:'Wir hinterlassen Ihre Räume so, wie wir sie vorgefunden haben.' },
                  { title:'Schnelle Reaktionszeiten', text:'Auch bei Notfällen sind wir zeitnah für Sie da.' },
                ].map(({ title, text }) => (
                  <div key={title} style={{ display:'flex', gap:'1rem', alignItems:'flex-start' }}>
                    <div style={{ width:32, height:32, borderRadius:'var(--r-sm)',
                      background:'rgba(245,158,11,0.08)', display:'flex', alignItems:'center',
                      justifyContent:'center', flexShrink:0, marginTop:1 }}>
                      <CheckCircle size={15} color="var(--primary-dark)"/>
                    </div>
                    <div>
                      <div style={{ fontWeight:600, fontSize:'0.92rem', marginBottom:'0.2rem' }}>{title}</div>
                      <div style={{ color:'var(--text-secondary)', fontSize:'0.85rem', lineHeight:1.65 }}>{text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal-right" style={{ flex:'1 1 320px', minWidth:0 }}>
              <InteraktivesHaus/>
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

