"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { BarChart3, Building2, CloudSun, ShieldCheck, X } from "lucide-react";

interface Feature {
  title: string;
  tag: string;
  desc: string;
  image: string;
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}

const features: Feature[] = [
  {
    title: "Durable & Long Lasting",
    tag: "High Durability",
    desc: "Engineered for 20+ years of structural life",
    image: "/images/product-trussfold-blue.jpg",
    Icon: ShieldCheck,
  },
  {
    title: "Weather Resistant",
    tag: "Monsoon Proof",
    desc: "All-weather anti-corrosion protection",
    image: "/images/home-hero.jpg",
    Icon: CloudSun,
  },
  {
    title: "High Strength & Performance",
    tag: "Certified Steel",
    desc: "High-tensile raw steel coil strength",
    image: "/images/raw-materials-coils.jpg",
    Icon: BarChart3,
  },
  {
    title: "Suitable for All Sectors",
    tag: "All Sectors",
    desc: "Commercial, industrial & residential",
    image: "/images/app-commercial.jpg",
    Icon: Building2,
  },
];

export default function HeroFeatures() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close when tapping outside on phone or clicking outside on desktop
  useEffect(() => {
    if (activeIdx === null) return;
    const handleOutside = (e: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setActiveIdx(null);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside, { passive: true });
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
    };
  }, [activeIdx]);

  return (
    <section className="relative z-20 -mt-16 px-4 sm:-mt-20 lg:-mt-24 sm:px-8">
      <div
        ref={containerRef}
        className="mx-auto grid max-w-7xl grid-cols-2 gap-y-5 rounded-2xl bg-white py-5 shadow-[0_8px_30px_rgba(10,37,64,0.12)] sm:grid-cols-4 sm:divide-x sm:divide-slate-200 sm:py-7"
      >
        {features.map(({ title, tag, desc, image, Icon }, i) => {
          const isCol1 = i % 2 === 0;
          const isActive = activeIdx === i;

          return (
            <div
              key={title}
              data-reveal
              style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
              role="button"
              tabIndex={0}
              aria-expanded={isActive}
              aria-label={`${title} - Tap to preview`}
              onClick={() => setActiveIdx(isActive ? null : i)}
              onMouseEnter={() => setActiveIdx(i)}
              onMouseLeave={() => setActiveIdx((prev) => (prev === i ? null : prev))}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveIdx(isActive ? null : i);
                } else if (e.key === "Escape") {
                  setActiveIdx(null);
                }
              }}
              className="group relative flex min-w-0 cursor-pointer select-none flex-col items-center px-2 text-center outline-none sm:px-4"
            >
              {/* Floating Image Preview on Click / Tap / Hover */}
              <div
                className={`absolute bottom-full z-40 mb-3 transition-all duration-300 ease-out ${
                  isCol1
                    ? "left-0 sm:left-1/2 sm:-translate-x-1/2"
                    : "right-0 sm:right-auto sm:left-1/2 sm:-translate-x-1/2"
                } ${
                  isActive
                    ? "pointer-events-auto opacity-100 translate-y-0 scale-100"
                    : "pointer-events-none opacity-0 translate-y-2 scale-95"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIdx(null);
                }}
              >
                <div className="w-44 overflow-hidden rounded-xl border border-slate-200/90 bg-white p-1.5 shadow-2xl ring-1 ring-black/10 sm:w-56">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-slate-100">
                    <Image
                      src={image}
                      alt={title}
                      fill
                      sizes="224px"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent" />
                    <span className="absolute bottom-2 left-2 rounded bg-brand/90 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm backdrop-blur-xs">
                      {tag}
                    </span>
                    {/* Mobile close button */}
                    <button
                      type="button"
                      aria-label="Close preview"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveIdx(null);
                      }}
                      className="absolute right-1.5 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/80 sm:hidden"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  </div>
                  <p className="mt-1.5 px-1 text-left text-[11px] font-bold leading-tight text-navy">
                    {title}
                  </p>
                  <p className="px-1 text-left text-[10px] text-slate-500 leading-snug">
                    {desc}
                  </p>
                </div>
                {/* Pointer beak pointing to icon */}
                <div
                  className={`-mt-1 h-2.5 w-2.5 rotate-45 border-b border-r border-slate-200/90 bg-white shadow-sm ${
                    isCol1 ? "ml-14 sm:mx-auto" : "ml-auto mr-14 sm:mx-auto"
                  }`}
                />
              </div>

              {/* Circular Icon with active/hover scale & photo reveal */}
              <div
                className={`relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border-2 border-brand shadow-sm transition-all duration-300 overflow-hidden ${
                  isActive
                    ? "scale-115 sm:scale-120 border-brand shadow-lg shadow-brand/25 ring-4 ring-brand/15"
                    : "bg-white text-brand group-hover:scale-115 sm:group-hover:scale-120 group-hover:border-brand group-hover:shadow-lg group-hover:shadow-brand/25 group-hover:ring-4 group-hover:ring-brand/15"
                }`}
              >
                <Icon
                  className={`relative z-10 h-5 w-5 sm:h-6 sm:w-6 transition-all duration-300 ${
                    isActive
                      ? "opacity-0 scale-75"
                      : "group-hover:opacity-0 group-hover:scale-75"
                  }`}
                  strokeWidth={1.8}
                />
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="64px"
                  className={`object-cover transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                />
              </div>

              <h3
                className={`mt-2 text-xs font-bold leading-tight transition-colors duration-200 sm:mt-3 sm:text-sm ${
                  isActive ? "text-brand" : "text-navy group-hover:text-brand"
                }`}
              >
                {title}
              </h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}
