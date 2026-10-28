"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Eye, Layers } from "lucide-react";
import { CadDimensionMarks, WatermarkText } from "@/components/IndustrialBackgrounds";

interface GalleryItem {
  src: string;
  label: string;
  badge: string;
  caption: string;
}

interface ManufacturedProduct {
  id: string;
  code: string;
  category: string;
  title: string;
  subtitle: string;
  desc: string;
  gallery: GalleryItem[];
  specs: { label: string; value: string }[];
  features: string[];
  specsHref: string;
  enquireHref: string;
}

const manufacturedSheets: ManufacturedProduct[] = [
  {
    id: "roofing-sheets",
    code: "DW-ROOF-PRO",
    category: "EXTERIOR ROOFING SYSTEM",
    title: "Roofing Sheets",
    subtitle: "High-Depth Trapezoidal Crest Profile",
    desc: "Heavy-duty trapezoidal steel sheets engineered for superior load-bearing capacity, rapid monsoon water runoff, and long-lasting weather protection across residential, commercial, and industrial roofs.",
    gallery: [
      {
        src: "/images/product-trussfold-blue.jpg",
        label: "Trussfold Blue",
        badge: "PRIMARY PROFILE",
        caption: "High-Depth Trapezoidal Ribs for Rapid Water Drainage",
      },
      {
        src: "/images/product-colour-coated-red.jpg",
        label: "Terracotta Red",
        badge: "COLOUR PLUS",
        caption: "UV-Stabilized Architectural Pre-Painted Roofing",
      },
      {
        src: "/images/product-galvanized-silver.jpg",
        label: "Galvanized Silver",
        badge: "ZINC SHIELD",
        caption: "Hot-Dip Zinc Coated Industrial Corrosion Barrier",
      },
      {
        src: "/images/app-roofing-commercial.jpg",
        label: "Commercial In-Situ",
        badge: "REAL APPLICATION",
        caption: "Large-Span Institutional Pavilion Roof Installation",
      },
    ],
    specs: [
      { label: "Profile Geometry", value: "High-Depth Trapezoidal Ribs" },
      { label: "Application", value: "Exterior Roofing & Shed Overhangs" },
      { label: "Cut Lengths", value: "Cut to exact requirement" },
      { label: "Raw Material", value: "100% Primary High-Tensile Steel" },
    ],
    features: [
      "Deep water drainage channels",
      "High wind & heavy monsoon resistance",
      "Custom cut-to-length zero-joint spans",
      "Factory-direct precision roll-forming",
    ],
    specsHref: "/products#trussfold",
    enquireHref: "/contact?product=trussfold",
  },
  {
    id: "liner-sheets",
    code: "DW-LINER-PRO",
    category: "INTERIOR & CEILING SYSTEM",
    title: "Liner Sheets",
    subtitle: "Precision Multi-Rib Wall & Ceiling Profile (1110 mm)",
    desc: "Precision-rolled ribbed steel sheets designed specifically for interior ceilings, interior wall cladding, architectural soffits, and partition panels with a sleek, uniform, and low-maintenance finish.",
    gallery: [
      {
        src: "/images/product-liner-profile-spec.jpg",
        label: "1110mm CAD Spec",
        badge: "ENGINEERING SPEC",
        caption: "1110 mm Cover Width • 50.5 mm Pitch • 3.5 mm Depth",
      },
      {
        src: "/images/product-liner-3d.jpg",
        label: "3D Profile",
        badge: "ISOMETRIC VIEW",
        caption: "Precision Multi-Rib Continuous Profile Geometry",
      },
      {
        src: "/images/product-liner-colors-stack.jpg",
        label: "5 Color Options",
        badge: "COLOUR RANGE",
        caption: "Terracotta, Silver, Brown, Green & Sky Blue",
      },
      {
        src: "/images/app-liner-residential.jpg",
        label: "Cladding In-Situ",
        badge: "REAL APPLICATION",
        caption: "Modern Contemporary Wall Cladding & Ceilings",
      },
      {
        src: "/images/product-liner-sheet.jpg",
        label: "Rib Texture",
        badge: "SURFACE DETAIL",
        caption: "Fine-Pitch Continuous Roll-Formed Steel",
      },
    ],
    specs: [
      { label: "Cover Width", value: "1110 mm Total Profile" },
      { label: "Rib Dimensions", value: "50.5 mm Pitch • 3.5 mm Depth" },
      { label: "Application", value: "Interior Ceilings, Walls & Soffits" },
      { label: "Raw Material", value: "Certified Primary Steel Coils" },
    ],
    features: [
      "Clean linear aesthetic shadow ribs",
      "1110 mm wide coverage per sheet",
      "5 architectural colour coatings",
      "Ideal for interior linings & soffits",
    ],
    specsHref: "/products#liner-sheets",
    enquireHref: "/contact?product=liner-sheets",
  },
];

function ProductCard({ sheet, index }: { sheet: ManufacturedProduct; index: number }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const currentView = sheet.gallery[activeIdx] ?? sheet.gallery[0];

  return (
    <div
      data-reveal="scale"
      style={{ "--reveal-delay": `${index * 120}ms` } as React.CSSProperties}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm transition-all duration-300 hover:border-brand/40 hover:shadow-xl sm:p-7"
    >
      <div className="pointer-events-none absolute -bottom-10 -right-10 h-36 w-96 bg-roof-profile-light opacity-25 hidden sm:block" />

      <div>
        {/* Main Framed Product Image Container */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[10px] border border-[#E5EAF0] bg-[#F8FAFC] p-4 sm:p-6">
          <div className="pointer-events-none absolute inset-0 bg-blueprint-grid opacity-15" />

          {/* Badges strip */}
          <div className="absolute left-3 top-3 z-10 flex flex-wrap items-center gap-1.5 sm:left-3.5 sm:top-3.5">
            <span className="rounded-full bg-navy px-2.5 py-0.5 font-mono text-[10px] font-bold tracking-wider text-white">
              {sheet.code}
            </span>
            <span className="rounded-full border border-[#E5EAF0] bg-white/95 px-2 py-0.5 font-mono text-[10px] font-bold text-brand shadow-2xs backdrop-blur-xs">
              {currentView.badge}
            </span>
          </div>

          <div className="absolute right-3 top-3 z-10 flex items-center gap-1 sm:right-3.5 sm:top-3.5">
            <span className="rounded-full border border-slate-200/80 bg-white/90 px-2 py-0.5 font-mono text-[9px] font-semibold text-slate-500 backdrop-blur-xs">
              0{activeIdx + 1} / 0{sheet.gallery.length}
            </span>
          </div>

          {/* Centered Image */}
          <div className="relative flex h-full w-full items-center justify-center">
            <Image
              src={currentView.src}
              alt={`${sheet.title} - ${currentView.label}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 560px"
              priority={index === 0 && activeIdx === 0}
              className="object-contain transition-all duration-300 ease-out group-hover:scale-[1.02]"
            />
          </div>

          {/* Bottom caption overlay */}
          <div className="pointer-events-none absolute inset-x-3 bottom-3 z-10 flex justify-center">
            <span className="inline-flex max-w-[95%] items-center gap-1.5 truncate rounded-full border border-white/70 bg-black/60 px-3 py-1 text-center font-mono text-[10px] font-medium text-white shadow-xs backdrop-blur-sm sm:text-[11px]">
              <Eye className="h-3 w-3 shrink-0 text-gold" />
              <span className="truncate">{currentView.caption}</span>
            </span>
          </div>
        </div>

        {/* Structured Gallery Selector Thumbnails */}
        <div className="mt-3.5 flex items-center gap-1.5 overflow-x-auto pb-1.5 pt-0.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {sheet.gallery.map((item, idx) => {
            const isActive = activeIdx === idx;
            return (
              <button
                key={item.label}
                type="button"
                onClick={() => setActiveIdx(idx)}
                className={`group/thumb flex shrink-0 items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-left transition-all ${
                  isActive
                    ? "border-brand bg-brand/10 text-brand ring-2 ring-brand/20 shadow-xs"
                    : "border-slate-200/90 bg-slate-50/80 text-slate-600 hover:border-slate-300 hover:bg-white"
                }`}
              >
                <span className="relative h-6 w-6 shrink-0 overflow-hidden rounded border border-slate-200 bg-white">
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    sizes="24px"
                    className="object-cover"
                  />
                </span>
                <span className="whitespace-nowrap font-mono text-[11px] font-semibold">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Product Details Header */}
        <div className="mt-4">
          <div className="flex items-center gap-2 font-mono text-xs text-brand">
            <span>{sheet.category}</span>
            <span>✦</span>
            <span>FACTORY DIRECT</span>
          </div>
          <h3 className="mt-1.5 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
            {sheet.title}
          </h3>
          <p className="mt-1 font-mono text-xs font-semibold text-slate-500">
            {sheet.subtitle}
          </p>
          <p className="mt-2.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
            {sheet.desc}
          </p>

          {/* Key Feature Chips */}
          <div className="mt-4 flex flex-wrap gap-2">
            {sheet.features.map((feat) => (
              <span
                key={feat}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-700"
              >
                <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-600" />
                <span>{feat}</span>
              </span>
            ))}
          </div>

          {/* Verified Technical Spec Matrix */}
          <div className="mt-4.5 grid grid-cols-2 gap-2.5 rounded-xl border border-slate-100 bg-slate-50/80 p-3.5 font-mono text-xs">
            {sheet.specs.map((s) => (
              <div key={s.label}>
                <span className="block text-[10px] uppercase text-slate-400">{s.label}</span>
                <span className="mt-0.5 block text-[11px] font-semibold text-navy sm:text-xs">
                  {s.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-slate-100 pt-5">
        <Link
          href={sheet.enquireHref}
          className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-navy px-4 py-2.5 text-center text-xs font-bold text-white shadow-xs transition hover:bg-brand sm:text-sm"
        >
          <span>Enquire About {sheet.title}</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          href={sheet.specsHref}
          className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-xs font-semibold text-navy transition hover:border-brand hover:text-brand sm:text-sm"
        >
          <span>View Specifications</span>
        </Link>
      </div>
    </div>
  );
}

export default function ManufacturedSheetsSection() {
  return (
    <section className="relative overflow-hidden bg-white pb-12 pt-12 sm:pb-16 sm:pt-16 bg-paper-grain">
      <div className="pointer-events-none absolute inset-0 bg-blueprint-grid opacity-30 [mask-image:linear-gradient(to_bottom,black_40%,transparent)]" />
      <WatermarkText text="MANUFACTURING" tone="light" className="absolute -top-3 right-4 sm:top-2 sm:right-8 -z-10" />
      <div className="absolute inset-x-0 top-0 h-px bg-slate-200/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
        <div data-reveal className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-end">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-navy sm:px-3.5">
              <Layers className="h-3.5 w-3.5 text-brand" /> Factory Manufacturing Lineup
            </span>
            <h2 className="mt-2.5 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl lg:text-4xl">
              Our Manufactured Sheets
            </h2>
            <p className="mt-1 text-sm text-slate-600 sm:text-base">
              Durawin manufactures high-performance roofing sheets and interior liner sheets engineered from certified primary steel in Palakkad
            </p>
          </div>
          <div className="hidden font-mono text-xs text-slate-400 sm:block">
            [ 02 MANUFACTURED PROFILES ]
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-10 lg:grid-cols-2 lg:gap-8">
          {manufacturedSheets.map((sheet, i) => (
            <ProductCard key={sheet.id} sheet={sheet} index={i} />
          ))}
        </div>

        <div className="mt-6 hidden items-center justify-between border-t border-slate-100 pt-4 sm:flex">
          <CadDimensionMarks label="DUAL PROFILE PRODUCTION LINE" spec="ROOFING (TRUSSFOLD) & LINER (1110MM)" />
          <CadDimensionMarks label="PRIMARY STEEL COILS" spec="JSW & JINDAL COIL SOURCING" />
        </div>
      </div>
    </section>
  );
}

