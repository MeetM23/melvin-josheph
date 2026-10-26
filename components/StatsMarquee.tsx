import React from "react";
import { MapPin, Ruler, Settings, ShieldCheck, Trophy, Users } from "lucide-react";

interface StatItem {
  tag: string;
  title: string;
  description: string;
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}

const stats: StatItem[] = [
  {
    tag: "Legacy",
    title: "20+ Years of Experience",
    description: "Proven manufacturing legacy since 2004",
    Icon: Trophy,
  },
  {
    tag: "JSW & Jindal",
    title: "Premium Raw Materials",
    description: "Certified primary high-tensile steel coils",
    Icon: Settings,
  },
  {
    tag: "Kerala-Wide",
    title: "Trusted by Retailers & Wholesalers",
    description: "Preferred direct supply partner across Kerala",
    Icon: Users,
  },
  {
    tag: "Local Plant",
    title: "Proudly Based in Palakkad, Kerala",
    description: "Direct-from-factory Naripotta manufacturing unit",
    Icon: MapPin,
  },
  {
    tag: "Zero Waste",
    title: "Precision Cut / Custom Lengths",
    description: "Custom lengths to order with zero site scrap",
    Icon: Ruler,
  },
  {
    tag: "Certified",
    title: "100% Quality Inspected",
    description: "Quality & structural strength assured",
    Icon: ShieldCheck,
  },
];

// Repeat 2x per track so even on ultra-wide / 4K displays the track is fully continuous
const marqueeList = [...stats, ...stats];

export default function StatsMarquee() {
  return (
    <section
      role="region"
      aria-label="Durawin trust indicators and credentials"
      className="relative z-10 overflow-hidden border-t border-white/10 bg-navy-dark py-6 sm:py-7"
      style={{ backgroundColor: "#051324" }}
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(22,104,232,0.12),transparent)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />

      {/* Top Header Label */}
      <div className="mx-auto mb-3.5 flex max-w-7xl items-center justify-between px-4 sm:mb-4 sm:px-8">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-slate-300">
            The Durawin Standard
          </span>
        </div>
      </div>

      {/* Marquee Track with Smooth Left and Right Edge Fade Masks */}
      <div className="marquee-container relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_3%,black_97%,transparent_100%)]">
        {/* Soft edge gradient fades */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 top-0 z-20 w-8 sm:w-16"
          style={{ background: "linear-gradient(to right, #051324, transparent)" }}
        />
        <div
          className="pointer-events-none absolute bottom-0 right-0 top-0 z-20 w-8 sm:w-16"
          style={{ background: "linear-gradient(to left, #051324, transparent)" }}
        />

        {/* Track 1 */}
        <div className="animate-marquee flex shrink-0 items-center gap-4 py-2 pr-4 sm:gap-5 sm:py-3 sm:pr-5">
          {marqueeList.map((item, idx) => (
            <StatCard key={`stat-1-${idx}`} item={item} />
          ))}
        </div>

        {/* Track 2 (Cloned for seamless infinite loop) */}
        <div
          aria-hidden="true"
          className="animate-marquee flex shrink-0 items-center gap-4 py-2 pr-4 sm:gap-5 sm:py-3 sm:pr-5"
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
  const { title, description, tag, Icon } = item;
  return (
    <div
      className="group/card flex h-[92px] w-[330px] shrink-0 select-none items-center gap-3.5 rounded-xl border border-white/12 px-4 py-3 shadow-[0_4px_16px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-all duration-300 hover:border-white/25 sm:h-[96px] sm:w-[370px] sm:gap-4 sm:px-5"
      style={{ backgroundColor: "#0b213b" }}
    >
      {/* Icon Container with consistent size and brand styling */}
      <div
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/10 text-gold shadow-inner transition-transform duration-300 group-hover/card:scale-105 sm:h-12 sm:w-12"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
      >
        <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.8} />
      </div>

      {/* Content Column with clear hierarchy */}
      <div className="flex min-w-0 flex-1 flex-col justify-center">
        <div className="flex items-center gap-2">
          <span
            className="rounded border border-white/10 px-1.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-slate-300"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.06)" }}
          >
            {tag}
          </span>
        </div>
        <h4 className="mt-1 whitespace-nowrap text-[13px] font-bold tracking-tight text-white sm:text-sm">
          {title}
        </h4>
        <p className="mt-0.5 whitespace-nowrap text-[11px] font-normal leading-normal text-slate-400 sm:text-xs">
          {description}
        </p>
      </div>
    </div>
  );
}

