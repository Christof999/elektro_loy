export default function WindmillAnimation({ size = 320 }) {
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
        @keyframes spin-blade {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes wind-line {
          0%   { stroke-dashoffset: 120; opacity: 0; }
          30%  { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-6px); }
        }
        .blade-group {
          transform-origin: 160px 148px;
          animation: spin-blade 5s linear infinite;
        }
        .wind1 { animation: wind-line 2.2s ease-in-out infinite; }
        .wind2 { animation: wind-line 2.2s ease-in-out infinite 0.55s; }
        .wind3 { animation: wind-line 2.2s ease-in-out infinite 1.1s; }
        .turbine-group {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>

      {/* Sky gradient */}
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e8f4fd" />
          <stop offset="100%" stopColor="#f9fafb" />
        </linearGradient>
        <linearGradient id="ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d1fae5" />
          <stop offset="100%" stopColor="#a7f3d0" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="320" height="320" rx="20" fill="url(#sky)" />

      {/* Ground strip */}
      <ellipse cx="160" cy="300" rx="140" ry="28" fill="url(#ground)" />

      {/* Wind lines */}
      <line className="wind1" x1="20" y1="110" x2="85" y2="110"
        stroke="#93c5fd" strokeWidth="2.5" strokeLinecap="round"
        strokeDasharray="65" strokeDashoffset="120" />
      <line className="wind2" x1="20" y1="130" x2="75" y2="130"
        stroke="#93c5fd" strokeWidth="2" strokeLinecap="round"
        strokeDasharray="55" strokeDashoffset="120" />
      <line className="wind3" x1="20" y1="150" x2="65" y2="150"
        stroke="#93c5fd" strokeWidth="1.5" strokeLinecap="round"
        strokeDasharray="45" strokeDashoffset="120" />

      {/* Turbine mast */}
      <g className="turbine-group">
        {/* Tower */}
        <polygon points="153,272 167,272 164,148 156,148" fill="#d1d5db" />
        <polygon points="153,272 167,272 164,148 156,148" fill="url(#towerShade)" opacity="0.3" />

        {/* Nacelle (hub housing) */}
        <rect x="148" y="141" width="24" height="13" rx="4" fill="#9ca3af" />

        {/* Blades */}
        <g className="blade-group">
          {/* Blade 1 – pointing up */}
          <path d="M160,148 C155,120 157,90 160,72 C163,90 165,120 160,148Z"
            fill="#f3f4f6" stroke="#d1d5db" strokeWidth="0.8" />
          {/* Blade 2 – lower-right */}
          <path d="M160,148 C182,162 204,178 218,188 C200,182 178,168 160,148Z"
            fill="#f3f4f6" stroke="#d1d5db" strokeWidth="0.8" />
          {/* Blade 3 – lower-left */}
          <path d="M160,148 C138,162 116,178 102,188 C120,182 142,168 160,148Z"
            fill="#f3f4f6" stroke="#d1d5db" strokeWidth="0.8" />
          {/* Hub center */}
          <circle cx="160" cy="148" r="7" fill="#6b7280" />
          <circle cx="160" cy="148" r="3.5" fill="#374151" />
        </g>
      </g>

      {/* Small clouds */}
      <ellipse cx="240" cy="60" rx="28" ry="12" fill="white" opacity="0.7" />
      <ellipse cx="255" cy="56" rx="18" ry="11" fill="white" opacity="0.7" />
      <ellipse cx="228" cy="58" rx="16" ry="10" fill="white" opacity="0.6" />

      <ellipse cx="70" cy="48" rx="22" ry="10" fill="white" opacity="0.6" />
      <ellipse cx="82" cy="44" rx="15" ry="9" fill="white" opacity="0.6" />
    </svg>
  );
}
