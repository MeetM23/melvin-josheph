import React from "react";
import { Layers, MapPin, Ruler, ShieldCheck, Trophy, Users } from "lucide-react";

interface TickerItem {
  code: string;
  category: string;
  highlight: string;
  title: string;
  detail: string;
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}

const stats: TickerItem[] = [
  {
    code: "REG // 01",
    category: "HERITAGE",
    highlight: "EST. 2004",
    title: "20+ Years Manufacturing Legacy",
    detail: "Proven industrial roll-forming experience in Kerala",
    Icon: Trophy,
  },
  {
    code: "REG // 02",
    category: "METALLURGY",
    highlight: "PRIMARY STEEL",
    title: "JSW & Jindal Coils Exclusively",
    detail: "Certified virgin high-tensile raw material coils",
    Icon: Layers,
  },
  {
    code: "REG // 03",
    category: "DISTRIBUTION",
    highlight: "KERALA-WIDE",
    title: "Retailer & Wholesaler Network",
    detail: "Direct supply partner spanning all 14 districts",
    Icon: Users,
  },
  {
    code: "REG // 04",
    category: "PLANT DESK",
    highlight: "PALAKKAD PLANT",
    title: "Direct-From-Factory Sourcing",
    detail: "Naripotta, Kunissery facility • Zero middlemen",
    Icon: MapPin,
  },
  {
    code: "REG // 05",
    category: "FABRICATION",
    highlight: "CUSTOM LENGTHS",
    title: "Precision Millimetric Sizing",
    detail: "Cut-to-order spans eliminating site jointing and waste",
    Icon: Ruler,
  },
  {
    code: "REG // 06",
    category: "QUALITY",
    highlight: "100% AUDITED",
    title: "Rigid Structural Quality Inspection",
    detail: "Verified zinc mass, paint micron film & tensile strength",
    Icon: ShieldCheck,
  },
];

// Repeat 2x per track so even on ultra-wide / 4K displays the track is fully continuous
const marqueeList = [...stats, ...stats];

export default function StatsMarquee() {
  return (
    <section
      role="region"
      aria-label="Durawin industrial credentials and specification ticker"
      className="relative z-10 overflow-hidden border-y border-slate-200/90 py-3.5 sm:py-4 bg-paper-grain"
      style={{ backgroundColor: "#F1F5F9" }}
    >
      {/* Millimeter engineering ruler tick marks on top and bottom borders */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[2px] opacity-35"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(10,37,64,0.2) 0px, rgba(10,37,64,0.2) 1px, transparent 1px, transparent 18px)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] opacity-25"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(10,37,64,0.18) 0px, rgba(10,37,64,0.18) 1px, transparent 1px, transparent 18px)",
        }}
      />

      {/* Subtle blueprint CAD grid & roofing profile linework background */}
      <div className="pointer-events-none absolute inset-0 opacity-25 bg-blueprint-grid" />
      <div className="pointer-events-none absolute inset-0 opacity-20 bg-roof-profile-light" />

      {/* Top Specification Register Header */}
      <div className="mx-auto mb-2.5 flex max-w-7xl items-center justify-between px-4 sm:mb-3 sm:px-8">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
          </span>
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-navy sm:text-[11px]">
            INDUSTRIAL SPECIFICATION REGISTER
          </span>
          <span className="hidden sm:inline font-mono text-[9px] text-slate-400">•</span>
          <span className="hidden sm:inline font-mono text-[9px] uppercase tracking-wider text-slate-500">
            PALAKKAD MANUFACTURING UNIT
          </span>
        </div>

        <div className="hidden md:flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest text-slate-500">
          <span className="h-1 w-1 rounded-full bg-brand" />
          <span>FACTORY-DIRECT ROOFING SPECIFICATIONS</span>
        </div>
      </div>

      {/* Marquee Track with Smooth Left and Right Edge Fade Masks */}
      <div className="marquee-container relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_3%,black_97%,transparent_100%)]">
        {/* Soft edge gradient fades */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 top-0 z-20 w-8 sm:w-16"
          style={{ background: "linear-gradient(to right, #F1F5F9, transparent)" }}
        />
        <div
          className="pointer-events-none absolute bottom-0 right-0 top-0 z-20 w-8 sm:w-16"
          style={{ background: "linear-gradient(to left, #F1F5F9, transparent)" }}
        />

        {/* Track 1 */}
        <div
          style={{ "--marquee-duration": "46s" } as React.CSSProperties}
          className="animate-marquee flex shrink-0 items-center py-1"
        >
          {marqueeList.map((item, idx) => (
            <React.Fragment key={`ticker-1-${idx}`}>
              <TickerUnit item={item} />
              <TickerDivider />
            </React.Fragment>
          ))}
        </div>

        {/* Track 2 (Cloned for seamless infinite loop) */}
        <div
          aria-hidden="true"
          style={{ "--marquee-duration": "46s" } as React.CSSProperties}
          className="animate-marquee flex shrink-0 items-center py-1"
        >
          {marqueeList.map((item, idx) => (
            <React.Fragment key={`ticker-2-${idx}`}>
              <TickerUnit item={item} />
              <TickerDivider />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

function TickerUnit({ item }: { item: TickerItem }) {
  const { code, category, highlight, title, detail, Icon } = item;

  return (
    <div className="group/item flex shrink-0 items-start gap-3 select-none py-0.5 sm:gap-3.5">
      {/* Refined line icon — compact, unboxed, brand blue accent */}
      <div className="mt-1 flex shrink-0 items-center justify-center text-brand transition-transform duration-200 group-hover/item:scale-110">
        <Icon className="h-4 w-4 sm:h-4.5 sm:w-4.5" strokeWidth={1.8} />
      </div>

      {/* Content Stack */}
      <div className="flex flex-col justify-center">
        {/* Top Metadata Line */}
        <div className="flex items-center gap-1.5 font-mono text-[10px] leading-tight">
          <span className="font-semibold text-slate-400">{code}</span>
          <span className="text-slate-300">/</span>
          <span className="rounded border border-brand/25 bg-brand/10 px-1.5 py-0.2 font-mono text-[9px] font-bold tracking-wider text-brand">
            {highlight}
          </span>
          <span className="text-slate-300">•</span>
          <span className="text-[9px] uppercase tracking-wider text-slate-500">{category}</span>
        </div>

        {/* Primary Heading */}
        <h4 className="mt-1 whitespace-nowrap text-[13px] font-bold tracking-tight text-navy transition-colors group-hover/item:text-brand sm:text-sm">
          {title}
        </h4>

        {/* Supporting Line */}
        <p className="mt-0.5 whitespace-nowrap text-[11px] font-normal leading-tight text-slate-600 sm:text-xs">
          {detail}
        </p>
      </div>
    </div>
  );
}

function TickerDivider() {
  return (
    <div aria-hidden="true" className="flex shrink-0 items-center px-6 sm:px-8 select-none">
      <div className="relative flex h-8 w-3 items-center justify-center">
        {/* Fine vertical rule */}
        <div className="h-full w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent" />
        {/* Subtle engineering diamond marker */}
        <span className="absolute h-1 w-1 rotate-45 bg-brand/80" />
      </div>
    </div>
  );
}
