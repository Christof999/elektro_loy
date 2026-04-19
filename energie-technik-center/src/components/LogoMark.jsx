/**
 * Animated recreation of the Energie-Technik-Center logo:
 * W-shaped wave in sky-blue flanking a glowing amber sun, italic serif text below.
 */
export default function LogoMark({ height = 42, dark = true }) {
  const w = Math.round(height * (240 / 78));

  const textFill = dark ? 'rgba(255,255,255,0.92)' : 'rgba(13,17,23,0.88)';

  return (
    <svg
      viewBox="0 0 240 78"
      width={w}
      height={height}
      role="img"
      aria-label="Energie-Technik-Center Loy"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block', flexShrink: 0 }}
    >
      <defs>
        <radialGradient id="lmSun" cx="40%" cy="35%" r="58%">
          <stop offset="0%"   stopColor="#fffde7" />
          <stop offset="30%"  stopColor="#fcd34d" />
          <stop offset="100%" stopColor="#f59e0b" />
        </radialGradient>

        <filter id="lmGlow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="3.5" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>

        <filter id="lmWave" x="-5%" y="-60%" width="110%" height="220%">
          <feGaussianBlur stdDeviation="1.2" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>

        <style>{`
          @keyframes lmRaySpin {
            from { transform: rotate(0deg); }
            to   { transform: rotate(360deg); }
          }
          @keyframes lmSunPulse {
            0%,100% { opacity:.88; transform:scale(1); }
            50%     { opacity:1;   transform:scale(1.08); }
          }
          @keyframes lmWaveA {
            0%,100% { opacity:.78; }
            50%     { opacity:1; }
          }
          @keyframes lmWaveB {
            0%,100% { opacity:.55; }
            50%     { opacity:.82; }
          }
          .lm-rays     { animation: lmRaySpin  20s linear      infinite;        transform-origin: 120px 27px; }
          .lm-sun      { animation: lmSunPulse  4s ease-in-out  infinite;        transform-origin: 120px 27px; }
          .lm-wave-hi  { animation: lmWaveA    3.5s ease-in-out infinite; }
          .lm-wave-lo  { animation: lmWaveB    3.5s ease-in-out infinite 1.75s; }
        `}</style>
      </defs>

      {/* Soft amber glow behind sun */}
      <circle cx="120" cy="27" r="30" fill="#f59e0b" opacity="0.10" />

      {/* ── WAVES (W-shape: two crests flanking a trough at center) ── */}
      {/* Main wave */}
      <path
        className="lm-wave-hi"
        d="M 4,53 C 38,13 82,13 112,29 C 128,38 148,13 192,13 C 210,13 228,34 236,53"
        stroke="#1e9dd8"
        strokeWidth="3.6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#lmWave)"
      />
      {/* Shadow wave (slightly below, darker) */}
      <path
        className="lm-wave-lo"
        d="M 5,61 C 39,23 83,23 112,37 C 128,46 148,23 192,23 C 210,23 227,42 235,61"
        stroke="#0b76a8"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* ── SUN RAYS ── */}
      <g className="lm-rays">
        {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg, i) => {
          const rad = deg * Math.PI / 180;
          const r1 = 17;
          const r2 = i % 2 === 0 ? 28 : 22;
          return (
            <line
              key={i}
              x1={120 + Math.cos(rad) * r1}
              y1={27  + Math.sin(rad) * r1}
              x2={120 + Math.cos(rad) * r2}
              y2={27  + Math.sin(rad) * r2}
              stroke={i % 2 === 0 ? '#fde68a' : '#fbbf24'}
              strokeWidth={i % 2 === 0 ? 2.2 : 1.5}
              strokeLinecap="round"
            />
          );
        })}
      </g>

      {/* ── SUN CORE ── */}
      <circle
        className="lm-sun"
        cx="120" cy="27" r="13"
        fill="url(#lmSun)"
        filter="url(#lmGlow)"
      />
      {/* Inner specular highlight */}
      <circle cx="115" cy="22" r="5.5" fill="white" opacity="0.28" />

      {/* ── TEXT ── */}
      <text
        x="120" y="73"
        textAnchor="middle"
        fontStyle="italic"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="11.8"
        fill={textFill}
        letterSpacing="0.4"
      >
        Energie - Technik - Center
      </text>
    </svg>
  );
}
