/**
 * HeroScene – eine nahtlose Hintergrundlandschaft als SVG
 * Sonne (blau-weiß), Windrad, Solarpanels, Haus, Stromkabel – alles integriert
 */
export default function HeroScene() {
  return (
    <svg
      viewBox="0 0 900 520"
      preserveAspectRatio="xMidYMid slice"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        opacity: 0.22,
        pointerEvents: 'none',
      }}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <style>{`
        /* ── Sonne ── */
        @keyframes sun-glow {
          0%,100% { opacity: 0.7; transform: scale(1); }
          50%      { opacity: 1;   transform: scale(1.06); }
        }
        @keyframes sun-ray {
          0%,100% { opacity: 0.5; }
          50%      { opacity: 1; }
        }
        .h-sun-core { animation: sun-glow 4s ease-in-out infinite; transform-origin: 780px 90px; }
        .h-sun-ray  { animation: sun-ray  4s ease-in-out infinite; transform-origin: 780px 90px; }

        /* ── Wind ── */
        @keyframes wind-drift {
          0%   { transform: translateX(-60px); opacity: 0; }
          20%  { opacity: 1; }
          80%  { opacity: 1; }
          100% { transform: translateX(0px);  opacity: 0; }
        }
        .hw1 { animation: wind-drift 3.5s ease-in-out infinite 0s; }
        .hw2 { animation: wind-drift 3.5s ease-in-out infinite 0.9s; }
        .hw3 { animation: wind-drift 3.5s ease-in-out infinite 1.8s; }

        /* ── Windrad ── */
        @keyframes h-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .h-blades { animation: h-spin 6s linear infinite; transform-origin: 220px 175px; }

        /* ── Wolken ── */
        @keyframes cloud-drift {
          0%   { transform: translateX(0); }
          50%  { transform: translateX(18px); }
          100% { transform: translateX(0); }
        }
        .h-cloud1 { animation: cloud-drift 12s ease-in-out infinite; }
        .h-cloud2 { animation: cloud-drift 16s ease-in-out infinite 3s; }

        /* ── Energie-Fluss ── */
        @keyframes h-flow {
          0%   { stroke-dashoffset: 350; }
          100% { stroke-dashoffset: 0; }
        }
        .h-cable { stroke-dasharray: 350; animation: h-flow 3s linear infinite; }

        /* ── Energiepunkte ── */
        @keyframes h-dot {
          0%,100% { opacity: 0; transform: scale(0.5); }
          50%     { opacity: 1; transform: scale(1.3); }
        }
        .h-dot1 { animation: h-dot 3s ease-in-out infinite 0s;   transform-origin: 430px 270px; }
        .h-dot2 { animation: h-dot 3s ease-in-out infinite 1s;   transform-origin: 510px 255px; }
        .h-dot3 { animation: h-dot 3s ease-in-out infinite 2s;   transform-origin: 590px 245px; }

        /* ── Solarpanel-Glanz ── */
        @keyframes h-shine {
          0%,100% { opacity: 0; }
          50%     { opacity: 0.4; }
        }
        .h-shine1 { animation: h-shine 5s ease-in-out infinite 0s; }
        .h-shine2 { animation: h-shine 5s ease-in-out infinite 2.5s; }
      `}</style>

      <defs>
        <linearGradient id="hGround" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e3a5f" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
        </linearGradient>
        <filter id="hGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="4" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* ── Horizont / Hügel ── */}
      <path d="M0 380 Q150 320 300 340 Q450 360 600 320 Q720 290 900 310 L900 520 L0 520Z"
        fill="#1e3a5f" opacity="0.35" />
      <path d="M0 410 Q200 370 400 390 Q600 410 900 375 L900 520 L0 520Z"
        fill="#0f172a" opacity="0.45" />

      {/* ── Windlinien (blau) ── */}
      <g stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7">
        <path className="hw1" d="M60 140 Q90 136 130 140" />
        <path className="hw2" d="M60 158 Q85 154 115 158" />
        <path className="hw3" d="M60 174 Q80 171 105 174" />
      </g>

      {/* ── Sonne (blau-weiß) ── */}
      <g className="h-sun-ray">
        {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg, i) => (
          <line key={i}
            x1={780 + Math.cos(deg * Math.PI/180) * 42}
            y1={ 90 + Math.sin(deg * Math.PI/180) * 42}
            x2={780 + Math.cos(deg * Math.PI/180) * 56}
            y2={ 90 + Math.sin(deg * Math.PI/180) * 56}
            stroke="#bfdbfe" strokeWidth="2" strokeLinecap="round"
          />
        ))}
      </g>
      <circle className="h-sun-core" cx="780" cy="90" r="34" fill="#93c5fd" opacity="0.2" />
      <circle cx="780" cy="90" r="26" fill="#bfdbfe" opacity="0.5" />
      <circle cx="780" cy="90" r="18" fill="#e0f2fe" opacity="0.8" filter="url(#hGlow)" />

      {/* ── Wolken ── */}
      <g className="h-cloud1" fill="white" opacity="0.12">
        <ellipse cx="580" cy="68" rx="44" ry="16" />
        <ellipse cx="600" cy="60" rx="28" ry="14" />
        <ellipse cx="562" cy="65" rx="22" ry="12" />
      </g>
      <g className="h-cloud2" fill="white" opacity="0.08">
        <ellipse cx="340" cy="52" rx="36" ry="13" />
        <ellipse cx="356" cy="45" rx="24" ry="12" />
        <ellipse cx="326" cy="50" rx="18" ry="10" />
      </g>

      {/* ── Windrad ── */}
      {/* Mast */}
      <polygon points="213,370 227,370 223,178 217,178" fill="#4b5563" opacity="0.7" />
      {/* Gondel */}
      <rect x="210" y="170" width="20" height="10" rx="3" fill="#6b7280" opacity="0.8" />
      {/* Blätter */}
      <g className="h-blades">
        <path d="M220,175 C216,148 217,118 220,100 C223,118 224,148 220,175Z"
          fill="#d1d5db" stroke="#9ca3af" strokeWidth="0.5" opacity="0.8" />
        <path d="M220,175 C238,186 256,198 267,206 C252,199 234,188 220,175Z"
          fill="#d1d5db" stroke="#9ca3af" strokeWidth="0.5" opacity="0.8" />
        <path d="M220,175 C202,186 184,198 173,206 C188,199 206,188 220,175Z"
          fill="#d1d5db" stroke="#9ca3af" strokeWidth="0.5" opacity="0.8" />
        <circle cx="220" cy="175" r="6" fill="#6b7280" opacity="0.9" />
        <circle cx="220" cy="175" r="3" fill="#374151" />
      </g>

      {/* ── Zweites kleineres Windrad im Hintergrund ── */}
      <g opacity="0.4">
        <polygon points="368,360 376,360 374,265 370,265" fill="#4b5563" />
        <rect x="364" y="260" width="14" height="7" rx="2" fill="#6b7280" />
        <g style={{ transformOrigin: '371px 263px', animation: 'h-spin 8s linear infinite' }}>
          <path d="M371,263 C368,248 369,232 371,222 C373,232 374,248 371,263Z" fill="#d1d5db" opacity="0.7" strokeWidth="0.4" stroke="#9ca3af" />
          <path d="M371,263 C381,269 390,276 396,281 C388,275 379,269 371,263Z" fill="#d1d5db" opacity="0.7" strokeWidth="0.4" stroke="#9ca3af" />
          <path d="M371,263 C361,269 352,276 346,281 C354,275 363,269 371,263Z" fill="#d1d5db" opacity="0.7" strokeWidth="0.4" stroke="#9ca3af" />
          <circle cx="371" cy="263" r="4.5" fill="#6b7280" />
        </g>
      </g>

      {/* ── Solar-Panel Gruppe ── */}
      {/* Panel 1 */}
      <g transform="translate(420, 290) rotate(-12)" opacity="0.75">
        <rect width="68" height="42" rx="2" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="0.8" />
        <line x1="22" y1="0" x2="22" y2="42" stroke="#3b82f6" strokeWidth="0.6" />
        <line x1="44" y1="0" x2="44" y2="42" stroke="#3b82f6" strokeWidth="0.6" />
        <line x1="0" y1="14" x2="68" y2="14" stroke="#3b82f6" strokeWidth="0.6" />
        <line x1="0" y1="28" x2="68" y2="28" stroke="#3b82f6" strokeWidth="0.6" />
        <rect className="h-shine1" width="68" height="42" rx="2" fill="white" />
      </g>
      <line x1="432" y1="332" x2="435" y2="350" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" />
      <line x1="476" y1="323" x2="479" y2="342" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" />

      {/* Panel 2 */}
      <g transform="translate(498, 280) rotate(-12)" opacity="0.65">
        <rect width="68" height="42" rx="2" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="0.8" />
        <line x1="22" y1="0" x2="22" y2="42" stroke="#3b82f6" strokeWidth="0.6" />
        <line x1="44" y1="0" x2="44" y2="42" stroke="#3b82f6" strokeWidth="0.6" />
        <line x1="0" y1="14" x2="68" y2="14" stroke="#3b82f6" strokeWidth="0.6" />
        <line x1="0" y1="28" x2="68" y2="28" stroke="#3b82f6" strokeWidth="0.6" />
        <rect className="h-shine2" width="68" height="42" rx="2" fill="white" />
      </g>
      <line x1="510" y1="322" x2="513" y2="342" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" />
      <line x1="552" y1="314" x2="555" y2="334" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" />

      {/* ── Haus ── */}
      <g opacity="0.75">
        {/* Wand */}
        <rect x="640" y="280" width="90" height="70" rx="1" fill="#374151" />
        {/* Dach */}
        <polygon points="630,282 685,240 740,282" fill="#1f2937" />
        {/* Tür */}
        <rect x="672" y="324" width="18" height="26" rx="1" fill="#4b5563" />
        {/* Fenster */}
        <rect x="645" y="292" width="20" height="18" rx="1" fill="#1e3a5f" />
        <line x1="655" y1="292" x2="655" y2="310" stroke="#93c5fd" strokeWidth="0.8" opacity="0.5" />
        <line x1="645" y1="301" x2="665" y2="301" stroke="#93c5fd" strokeWidth="0.8" opacity="0.5" />
        {/* Schornstein */}
        <rect x="705" y="254" width="10" height="28" fill="#4b5563" />
      </g>

      {/* ── Energiekabel von Panels zum Haus ── */}
      <path
        className="h-cable"
        d="M490 330 Q510 290 560 275 Q600 262 640 268"
        stroke="#f59e0b"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
        filter="url(#hGlow)"
        opacity="0.9"
      />
      {/* Energiepunkte */}
      <circle className="h-dot1" cx="430" cy="270" r="4" fill="#fbbf24" filter="url(#hGlow)" />
      <circle className="h-dot2" cx="510" cy="255" r="4" fill="#fbbf24" filter="url(#hGlow)" />
      <circle className="h-dot3" cx="590" cy="245" r="4" fill="#fbbf24" filter="url(#hGlow)" />

      {/* Blitz am Haus-Eingang */}
      <path d="M636 266 L630 278 L636 278 L630 290"
        stroke="#fbbf24" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"
        filter="url(#hGlow)" opacity="0.85" />

      {/* ── Verbindungsleitung Windrad → Netz ── */}
      <path
        d="M220 370 Q280 380 360 370 Q400 365 430 360"
        stroke="#60a5fa" strokeWidth="1.2" fill="none" strokeLinecap="round"
        opacity="0.4" strokeDasharray="6 4"
      />
    </svg>
  );
}
