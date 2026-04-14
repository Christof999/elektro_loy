export default function ElectroAnimation({ size = 320 }) {
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
        @keyframes pulse-ring {
          0%   { r: 28px; opacity: 0.7; }
          100% { r: 52px; opacity: 0; }
        }
        @keyframes bolt-flash {
          0%, 90%, 100% { opacity: 0; }
          45%, 55%      { opacity: 1; }
        }
        @keyframes circuit-flow {
          0%   { stroke-dashoffset: 300; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes node-blink {
          0%, 100% { opacity: 0.3; r: 4px; }
          50%      { opacity: 1;   r: 6px; }
        }
        @keyframes wave-move {
          0%   { stroke-dashoffset: 60; }
          100% { stroke-dashoffset: 0; }
        }

        .pulse1 { animation: pulse-ring 2s ease-out infinite 0s; transform-origin: 160px 130px; }
        .pulse2 { animation: pulse-ring 2s ease-out infinite 0.66s; transform-origin: 160px 130px; }
        .pulse3 { animation: pulse-ring 2s ease-out infinite 1.33s; transform-origin: 160px 130px; }
        .bolt   { animation: bolt-flash 2.5s ease-in-out infinite; }
        .circuit1 { stroke-dasharray: 300; animation: circuit-flow 3s linear infinite; }
        .circuit2 { stroke-dasharray: 300; animation: circuit-flow 3s linear infinite 1.5s; }
        .node1 { animation: node-blink 1.8s ease-in-out infinite 0s; transform-origin: 80px 200px; }
        .node2 { animation: node-blink 1.8s ease-in-out infinite 0.6s; transform-origin: 160px 240px; }
        .node3 { animation: node-blink 1.8s ease-in-out infinite 1.2s; transform-origin: 240px 200px; }
        .wave   { stroke-dasharray: 60; animation: wave-move 1.2s linear infinite; }
      `}</style>

      <defs>
        <linearGradient id="elBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e1b4b" />
          <stop offset="100%" stopColor="#111827" />
        </linearGradient>
        <filter id="elGlow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="softGlow">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      <rect width="320" height="320" rx="20" fill="url(#elBg)" />

      {/* Pulse rings */}
      <circle className="pulse1" cx="160" cy="130" r="28" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
      <circle className="pulse2" cx="160" cy="130" r="28" fill="none" stroke="#f59e0b" strokeWidth="1" />
      <circle className="pulse3" cx="160" cy="130" r="28" fill="none" stroke="#f59e0b" strokeWidth="0.7" />

      {/* Central bolt */}
      <circle cx="160" cy="130" r="30" fill="#f59e0b" opacity="0.12" />
      <circle cx="160" cy="130" r="22" fill="#f59e0b" opacity="0.18" />
      <path
        className="bolt"
        d="M165 108 L152 133 L161 133 L155 152 L172 127 L162 127 Z"
        fill="#fbbf24"
        filter="url(#elGlow)"
      />
      {/* Static bolt outline */}
      <path
        d="M165 108 L152 133 L161 133 L155 152 L172 127 L162 127 Z"
        fill="none"
        stroke="#f59e0b"
        strokeWidth="1"
        opacity="0.5"
      />

      {/* Circuit lines */}
      <path
        className="circuit1"
        d="M80 200 L80 170 L110 170 L110 140 L140 140 L140 130"
        stroke="#60a5fa"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        filter="url(#softGlow)"
      />
      <path
        className="circuit2"
        d="M240 200 L240 170 L210 170 L210 140 L180 140 L180 130"
        stroke="#60a5fa"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        filter="url(#softGlow)"
      />

      {/* Bottom circuit bus */}
      <path
        d="M80 200 L160 240 L240 200"
        stroke="#374151"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        className="circuit1"
        d="M80 200 L160 240 L240 200"
        stroke="#60a5fa"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.6"
        filter="url(#softGlow)"
      />

      {/* Nodes */}
      <circle className="node1" cx="80" cy="200" r="5" fill="#60a5fa" filter="url(#softGlow)" />
      <circle className="node2" cx="160" cy="240" r="5" fill="#60a5fa" filter="url(#softGlow)" />
      <circle className="node3" cx="240" cy="200" r="5" fill="#60a5fa" filter="url(#softGlow)" />

      {/* Sine wave (AC symbol) */}
      <path
        className="wave"
        d="M60 270 Q70 255 80 270 Q90 285 100 270 Q110 255 120 270 Q130 285 140 270 Q150 255 160 270 Q170 285 180 270 Q190 255 200 270 Q210 285 220 270 Q230 255 240 270 Q250 285 260 270"
        stroke="#f59e0b"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        opacity="0.7"
        filter="url(#softGlow)"
      />

      {/* Small component symbols */}
      {/* Resistor left */}
      <rect x="68" y="155" width="24" height="10" rx="2" fill="#374151" stroke="#6b7280" strokeWidth="1" />
      {/* Capacitor right */}
      <line x1="232" y1="153" x2="232" y2="163" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" />
      <line x1="238" y1="153" x2="238" y2="163" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" />

      {/* Corner dots decoration */}
      {[[30,30],[290,30],[30,290],[290,290]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="2.5" fill="#374151" />
      ))}
    </svg>
  );
}
