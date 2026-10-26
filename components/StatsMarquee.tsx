import React from "react";
import { MapPin, Ruler, Settings, ShieldCheck, Trophy, Users } from "lucide-react";

interface StatItem {
  title: string;
  subtitle: string;
  tag?: string;
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  iconBg: string;
  glow: string;
  highlight?: boolean;
}

const stats: StatItem[] = [
  {
    title: "20+",
    subtitle: "Years of Experience",
    tag: "Legacy",
    Icon: Trophy,
    iconBg: "border-amber-400/30 bg-amber-400/10 text-gold",
    glow: "hover:border-amber-400/50 hover:shadow-[0_0_28px_rgba(242,176,30,0.22)]",
    highlight: true,
  },
  {
    title: "Premium",
    subtitle: "Raw Materials",
    tag: "JSW & Jindal",
    Icon: Settings,
    iconBg: "border-brand/40 bg-brand/10 text-brand-light",
    glow: "hover:border-brand/60 hover:shadow-[0_0_28px_rgba(22,104,232,0.25)]",
  },
  {
    title: "Trusted by",
    subtitle: "Retailers & Wholesalers",
    tag: "Kerala-Wide",
    Icon: Users,
    iconBg: "border-sky-400/30 bg-sky-400/10 text-sky-300",
    glow: "hover:border-sky-400/50 hover:shadow-[0_0_28px_rgba(56,189,248,0.22)]",
  },
  {
    title: "Proudly",
    subtitle: "Based in Palakkad, Kerala",
    tag: "Local Plant",
    Icon: MapPin,
    iconBg: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
    glow: "hover:border-emerald-400/50 hover:shadow-[0_0_28px_rgba(52,211,153,0.22)]",
  },
  {
    title: "Precision Cut",
    subtitle: "Custom Lengths to Order",
    tag: "Zero Waste",
    Icon: Ruler,
    iconBg: "border-indigo-400/30 bg-indigo-400/10 text-indigo-300",
    glow: "hover:border-indigo-400/50 hover:shadow-[0_0_28px_rgba(99,102,241,0.22)]",
  },
  {
    title: "100% Inspected",
    subtitle: "Quality & Strength Assured",
    tag: "Certified",
    Icon: ShieldCheck,
    iconBg: "border-cyan-400/30 bg-cyan-400/10 text-cyan-300",
    glow: "hover:border-cyan-400/50 hover:shadow-[0_0_28px_rgba(34,211,238,0.22)]",
  },
];

// Repeat 2x per track so even on ultra-wide / 4K displays the track is fully continuous
const marqueeList = [...stats, ...stats];

export default function StatsMarquee() {
  return (
    <section
      role="region"
      aria-label="Durawin trust indicators and credentials"
      className="relative z-10 overflow-hidden border-t border-white/10 bg-gradient-to-b from-[#06182c] via-navy to-[#051426] py-6 sm:py-8"
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(22,104,232,0.12),transparent)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Top Header Label */}
      <div className="mx-auto mb-3.5 flex max-w-7xl items-center justify-between px-4 sm:mb-5 sm:px-8">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-300">
            The Durawin Standard
          </span>
        </div>
      </div>

      {/* Marquee Track with Left and Right Edge Fade Masks */}
      <div className="marquee-container relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        {/* Soft edge gradient fades for enhanced browser support */}
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-20 w-12 bg-gradient-to-r from-[#06182c] to-transparent sm:w-28" />
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-20 w-12 bg-gradient-to-l from-[#051426] to-transparent sm:w-28" />

        {/* Track 1 */}
        <div className="animate-marquee flex shrink-0 items-center gap-3.5 pr-3.5 sm:gap-5 sm:pr-5">
          {marqueeList.map((item, idx) => (
            <StatCard key={`stat-1-${idx}`} item={item} />
          ))}
        </div>

        {/* Track 2 (Cloned for seamless infinite loop) */}
        <div
          aria-hidden="true"
          className="animate-marquee flex shrink-0 items-center gap-3.5 pr-3.5 sm:gap-5 sm:pr-5"
        >
          {marqueeList.map((item, idx) => (
            <StatCard key={`stat-2-${idx}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ item }: { item: StatItem }) {
  const { title, subtitle, tag, Icon, iconBg, glow, highlight } = item;
  return (
    <div
      className={`group/card flex shrink-0 select-none items-center gap-3.5 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.25)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.08] sm:gap-4 sm:px-5 sm:py-3.5 ${glow}`}
    >
      <div
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border shadow-inner transition-transform duration-300 group-hover/card:scale-105 sm:h-12 sm:w-12 ${iconBg}`}
      >
        <Icon className="h-5 w-5 transition-transform duration-300 sm:h-6 sm:w-6" strokeWidth={1.8} />
      </div>

      <div className="flex flex-col whitespace-nowrap text-left">
        <div className="flex items-center gap-2">
          <span
            className={`text-sm font-black tracking-tight sm:text-base ${
              highlight ? "text-gold" : "text-white"
            }`}
          >
            {title}
          </span>
          {tag && (
            <span className="inline-flex items-center rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-300 ring-1 ring-white/15">
              {tag}
            </span>
          )}
        </div>
        <span className="text-xs font-medium leading-tight text-slate-300/90 sm:text-[13px]">
          {subtitle}
        </span>
      </div>
    </div>
  );
}
