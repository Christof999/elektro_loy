export default function SolarAnimation({ size = 320 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 320 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <style>{`
        @keyframes sun-pulse {
          0%, 100% { r: 22px; opacity: 1; }
          50%       { r: 26px; opacity: 0.85; }
        }
        @keyframes ray-pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50%       { opacity: 1;   transform: scale(1.15); }
        }
        @keyframes energy-flow {
          0%   { stroke-dashoffset: 220; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes glow-dot {
          0%   { opacity: 0; transform: scale(0.4); }
          50%  { opacity: 1; transform: scale(1.2); }
          100% { opacity: 0; transform: scale(0.4); }
        }
        @keyframes panel-shine {
          0%,100% { opacity: 0; }
          50%     { opacity: 0.35; }
        }

        .sun-core  { animation: sun-pulse 3s ease-in-out infinite; transform-origin: 68px 52px; }
        .ray-group { animation: ray-pulse 3s ease-in-out infinite; transform-origin: 68px 52px; }
        .energy-path { stroke-dasharray: 220; animation: energy-flow 2.4s linear infinite; }
        .dot1 { animation: glow-dot 2.4s ease-in-out infinite 0s; transform-origin: 160px 176px; }
        .dot2 { animation: glow-dot 2.4s ease-in-out infinite 0.8s; transform-origin: 200px 200px; }
        .dot3 { animation: glow-dot 2.4s ease-in-out infinite 1.6s; transform-origin: 240px 210px; }
        .shine1 { animation: panel-shine 3s ease-in-out infinite 0s; }
        .shine2 { animation: panel-shine 3s ease-in-out infinite 1.5s; }
      `}</style>

      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fef3c7" />
          <stop offset="100%" stopColor="#f9fafb" />
        </linearGradient>
        <linearGradient id="groundGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#bbf7d0" />
          <stop offset="100%" stopColor="#86efac" />
        </linearGradient>
        <linearGradient id="panelGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1e3a5f" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
        <linearGradient id="houseWall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f3f4f6" />
          <stop offset="100%" stopColor="#e5e7eb" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* Background */}
      <rect width="320" height="320" rx="20" fill="url(#skyGrad)" />

      {/* Ground */}
      <ellipse cx="160" cy="296" rx="150" ry="30" fill="url(#groundGrad)" />

      {/* Sun rays */}
      <g className="ray-group">
        {[0,45,90,135,180,225,270,315].map((deg, i) => (
          <line
            key={i}
            x1={68 + Math.cos(deg * Math.PI/180) * 28}
            y1={52 + Math.sin(deg * Math.PI/180) * 28}
            x2={68 + Math.cos(deg * Math.PI/180) * 38}
            y2={52 + Math.sin(deg * Math.PI/180) * 38}
            stroke="#f59e0b"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        ))}
      </g>

      {/* Sun core */}
      <circle className="sun-core" cx="68" cy="52" r="22" fill="#fbbf24" opacity="0.25" />
      <circle cx="68" cy="52" r="18" fill="#f59e0b" />
      <circle cx="68" cy="52" r="12" fill="#fbbf24" />

      {/* Solar panels (2 tilted panels on ground) */}
      {/* Panel 1 */}
      <g transform="translate(88, 220) rotate(-20)">
        <rect width="70" height="44" rx="3" fill="url(#panelGrad)" />
        {/* Grid lines */}
        <line x1="23" y1="0" x2="23" y2="44" stroke="#3b82f6" strokeWidth="0.8" opacity="0.5"/>
        <line x1="46" y1="0" x2="46" y2="44" stroke="#3b82f6" strokeWidth="0.8" opacity="0.5"/>
        <line x1="0" y1="14" x2="70" y2="14" stroke="#3b82f6" strokeWidth="0.8" opacity="0.5"/>
        <line x1="0" y1="28" x2="70" y2="28" stroke="#3b82f6" strokeWidth="0.8" opacity="0.5"/>
        <rect className="shine1" width="70" height="44" rx="3" fill="white" />
      </g>
      {/* Panel support */}
      <line x1="100" y1="262" x2="104" y2="278" stroke="#9ca3af" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="148" y1="252" x2="152" y2="270" stroke="#9ca3af" strokeWidth="2.5" strokeLinecap="round" />

      {/* Panel 2 */}
      <g transform="translate(100, 210) rotate(-20)">
        <rect width="70" height="44" rx="3" fill="url(#panelGrad)" opacity="0.85"/>
        <line x1="23" y1="0" x2="23" y2="44" stroke="#3b82f6" strokeWidth="0.8" opacity="0.5"/>
        <line x1="46" y1="0" x2="46" y2="44" stroke="#3b82f6" strokeWidth="0.8" opacity="0.5"/>
        <line x1="0" y1="14" x2="70" y2="14" stroke="#3b82f6" strokeWidth="0.8" opacity="0.5"/>
        <line x1="0" y1="28" x2="70" y2="28" stroke="#3b82f6" strokeWidth="0.8" opacity="0.5"/>
        <rect className="shine2" width="70" height="44" rx="3" fill="white" />
      </g>
      <line x1="110" y1="252" x2="114" y2="270" stroke="#9ca3af" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="160" y1="242" x2="163" y2="260" stroke="#9ca3af" strokeWidth="2.5" strokeLinecap="round" />

      {/* Energy cable path: panels → house */}
      <path
        className="energy-path"
        d="M158 248 Q160 176 200 165 Q230 158 248 168"
        stroke="#f59e0b"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        filter="url(#glow)"
      />

      {/* Animated dots along cable */}
      <circle className="dot1" cx="160" cy="176" r="4" fill="#fbbf24" filter="url(#glow)" />
      <circle className="dot2" cx="200" cy="165" r="4" fill="#fbbf24" filter="url(#glow)" />
      <circle className="dot3" cx="238" cy="168" r="4" fill="#fbbf24" filter="url(#glow)" />

      {/* House */}
      {/* Wall */}
      <rect x="222" y="168" width="72" height="54" rx="2" fill="url(#houseWall)" />
      {/* Roof */}
      <polygon points="214,170 258,132 302,170" fill="#374151" />
      <polygon points="214,170 258,132 302,170" fill="white" opacity="0.06" />
      {/* Door */}
      <rect x="248" y="198" width="18" height="24" rx="2" fill="#d1d5db" />
      <circle cx="263" cy="210" r="1.8" fill="#9ca3af" />
      {/* Window */}
      <rect x="228" y="178" width="18" height="16" rx="2" fill="#bfdbfe" />
      <line x1="237" y1="178" x2="237" y2="194" stroke="white" strokeWidth="1" opacity="0.6" />
      <line x1="228" y1="186" x2="246" y2="186" stroke="white" strokeWidth="1" opacity="0.6" />

      {/* Chimney */}
      <rect x="270" y="150" width="10" height="22" fill="#6b7280" />

      {/* Small lightning bolt at house entry */}
      <path d="M246 167 L242 175 L246 175 L242 183" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" filter="url(#glow)" />
    </svg>
  );
}
