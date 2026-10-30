import React from "react";

/**
 * Architectural Industrial Roof Truss SVG Watermark
 * Renders an authentic technical engineering CAD line drawing of a steel portal frame truss.
 */
export function RoofTrussWatermark({
  className = "",
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const strokeColor = tone === "light" ? "rgba(10, 37, 64, 0.04)" : "rgba(255, 255, 255, 0.035)";
  const accentStroke = tone === "light" ? "rgba(22, 104, 232, 0.06)" : "rgba(242, 176, 30, 0.05)";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none overflow-hidden ${className}`}
    >
      <svg
        viewBox="0 0 1000 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full opacity-90"
        preserveAspectRatio="none"
      >
        {/* Main Bottom Tie Chord */}
        <line x1="50" y1="280" x2="950" y2="280" stroke={strokeColor} strokeWidth="1.5" />
        <line x1="50" y1="286" x2="950" y2="286" stroke={strokeColor} strokeWidth="0.8" strokeDasharray="4 4" />

        {/* Top Rafter Chords (Pitched Roof) */}
        <line x1="50" y1="280" x2="500" y2="40" stroke={strokeColor} strokeWidth="1.8" />
        <line x1="500" y1="40" x2="950" y2="280" stroke={strokeColor} strokeWidth="1.8" />

        {/* Center King Post */}
        <line x1="500" y1="40" x2="500" y2="280" stroke={accentStroke} strokeWidth="1.5" />

        {/* Truss Web Diagonals (Warren / Pratt configuration) */}
        {/* Left Side */}
        <line x1="200" y1="280" x2="200" y2="200" stroke={strokeColor} strokeWidth="1" />
        <line x1="200" y1="200" x2="350" y2="280" stroke={strokeColor} strokeWidth="1" />
        <line x1="350" y1="280" x2="350" y2="120" stroke={strokeColor} strokeWidth="1" />
        <line x1="350" y1="120" x2="500" y2="280" stroke={strokeColor} strokeWidth="1" />
        <line x1="50" y1="280" x2="200" y2="200" stroke={strokeColor} strokeWidth="1" />

        {/* Right Side */}
        <line x1="800" y1="280" x2="800" y2="200" stroke={strokeColor} strokeWidth="1" />
        <line x1="800" y1="200" x2="650" y2="280" stroke={strokeColor} strokeWidth="1" />
        <line x1="650" y1="280" x2="650" y2="120" stroke={strokeColor} strokeWidth="1" />
        <line x1="650" y1="120" x2="500" y2="280" stroke={strokeColor} strokeWidth="1" />
        <line x1="950" y1="280" x2="800" y2="200" stroke={strokeColor} strokeWidth="1" />

        {/* Gusset Plate Connection Markers at Key Nodes */}
        {[
          [50, 280],
          [200, 280],
          [350, 280],
          [500, 280],
          [650, 280],
          [800, 280],
          [950, 280],
          [200, 200],
          [350, 120],
          [500, 40],
          [650, 120],
          [800, 200],
        ].map(([cx, cy], idx) => (
          <circle
            key={idx}
            cx={cx}
            cy={cy}
            r="3"
            stroke={accentStroke}
            strokeWidth="1"
            fill="transparent"
          />
        ))}

        {/* Technical Dimension Extension Lines & Annotations */}
        <line x1="50" y1="305" x2="950" y2="305" stroke={strokeColor} strokeWidth="0.8" />
        <line x1="50" y1="298" x2="50" y2="312" stroke={strokeColor} strokeWidth="0.8" />
        <line x1="950" y1="298" x2="950" y2="312" stroke={strokeColor} strokeWidth="0.8" />

        {/* Technical Specification Callouts */}
        <text
          x="500"
          y="302"
          textAnchor="middle"
          fill={strokeColor}
          fontSize="9"
          fontFamily="monospace"
          letterSpacing="0.16em"
        >
          SPAN 18,000 MM • ENGINEERED TRUSS PROFILE
        </text>

        <text
          x="120"
          y="265"
          fill={strokeColor}
          fontSize="8"
          fontFamily="monospace"
          letterSpacing="0.12em"
        >
          ∠ 18.5° PITCH
        </text>
      </svg>
    </div>
  );
}

/**
 * Technical Trapezoidal Sheet Cross-Section Schematic
 * Shows the exact rib depth and pitch dimensions of Durawin Trafford sheets.
 */
export function SheetProfileWatermark({
  className = "",
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const strokeColor = tone === "light" ? "rgba(10, 37, 64, 0.04)" : "rgba(255, 255, 255, 0.035)";
  const accentColor = tone === "light" ? "rgba(22, 104, 232, 0.05)" : "rgba(242, 176, 30, 0.05)";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none overflow-hidden ${className}`}
    >
      <svg
        viewBox="0 0 800 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        {/* Continuous Trafford Cross-Section Waveform */}
        <path
          d="M 20 80 L 80 80 L 110 30 L 190 30 L 220 80 L 280 80 L 310 30 L 390 30 L 420 80 L 480 80 L 510 30 L 590 30 L 620 80 L 680 80 L 710 30 L 790 30"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Secondary Offset Thickness Line */}
        <path
          d="M 20 82.5 L 80 82.5 L 110 32.5 L 190 32.5 L 220 82.5 L 280 82.5 L 310 32.5 L 390 32.5 L 420 82.5 L 480 82.5 L 510 32.5 L 590 32.5 L 620 82.5 L 680 82.5 L 710 32.5 L 790 32.5"
          stroke={accentColor}
          strokeWidth="0.8"
          strokeDasharray="2 3"
        />

        {/* Dimension Callout lines */}
        <line x1="110" y1="20" x2="190" y2="20" stroke={strokeColor} strokeWidth="0.8" />
        <line x1="110" y1="16" x2="110" y2="24" stroke={strokeColor} strokeWidth="0.8" />
        <line x1="190" y1="16" x2="190" y2="24" stroke={strokeColor} strokeWidth="0.8" />
        <text
          x="150"
          y="15"
          textAnchor="middle"
          fill={strokeColor}
          fontSize="8"
          fontFamily="monospace"
        >
          CREST 80mm
        </text>

        <line x1="200" y1="30" x2="200" y2="80" stroke={strokeColor} strokeWidth="0.8" strokeDasharray="3 3" />
        <text
          x="208"
          y="58"
          fill={strokeColor}
          fontSize="8"
          fontFamily="monospace"
        >
          DEPTH 28mm
        </text>
      </svg>
    </div>
  );
}

/**
 * Subtle CAD Blueprint Coordinate Stamps & Precision Measurement Ticks
 */
export function CadDimensionMarks({
  label = "DURAWIN // SPEC 1000/28",
  spec = "TOLERANCE ±0.5MM",
  className = "",
  tone = "light",
}: {
  label?: string;
  spec?: string;
  className?: string;
  tone?: "light" | "dark";
}) {
  const isLight = tone === "light";
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.2em] ${
        isLight ? "text-slate-400/40" : "text-white/20"
      } ${className}`}
    >
      <span className="flex items-center gap-1">
        <span className="h-1 w-1 rounded-full bg-current" />
        <span>{label}</span>
      </span>
      <span>•</span>
      <span>{spec}</span>
    </div>
  );
}

/**
 * Oversized Outline Text Watermark
 */
export function WatermarkText({
  text = "DURAWIN",
  className = "",
  tone = "light",
}: {
  text?: string;
  className?: string;
  tone?: "light" | "dark";
}) {
  const isLight = tone === "light";
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none overflow-hidden ${
        isLight ? "watermark-outline" : "watermark-outline-dark"
      } ${className}`}
    >
      <span
        style={{
          color: isLight ? "rgba(10, 37, 64, 0.065)" : "rgba(147, 197, 253, 0.08)",
          WebkitTextStroke: isLight ? "1.5px rgba(10, 37, 64, 0.11)" : "1.5px rgba(147, 197, 253, 0.16)",
        }}
        className="text-[clamp(2.75rem,8vw,8.5rem)] leading-none font-black tracking-[0.06em] block uppercase whitespace-nowrap"
      >
        {text}
      </span>
    </div>
  );
}
