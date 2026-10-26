import Link from "next/link";
import { BadgeCheck, Factory, Layers, Palette, Phone, Ruler, Truck, PackageSearch, ArrowRight, ShieldCheck } from "lucide-react";
import { site } from "@/lib/site";
import { CadDimensionMarks, RoofTrussWatermark, SheetProfileWatermark, WatermarkText } from "@/components/IndustrialBackgrounds";

const reasons = [
  { num: "01", title: "Premium Raw Materials", text: "Steel coils sourced directly from top-tier primary manufacturers.", Icon: Layers, tag: "Grade A Steel" },
  { num: "02", title: "Precision Roll Forming", text: "State-of-the-art profiling machinery for uniform rib depth and accuracy.", Icon: Factory, tag: "CNC Calibrated" },
  { num: "03", title: "Custom Lengths", text: "Cut-to-order sizing to eliminate on-site joint leakage and waste.", Icon: Ruler, tag: "Zero Wastage" },
  { num: "04", title: "Colour Options", text: "High-durability polyester and PVDF coatings in architectural hues.", Icon: Palette, tag: "UV Stable" },
  { num: "05", title: "Strict Quality Inspection", text: "Batch testing for tensile strength, zinc coating, and paint adherence.", Icon: BadgeCheck, tag: "Certified Lab" },
  { num: "06", title: "Swift Kerala Delivery", text: "Prompt logistics network ensuring on-time delivery directly to site.", Icon: Truck, tag: "Prompt Dispatch" },
];

const steps = [
  { num: "01", title: "Raw Material Ingestion", text: "Inspected steel coils are verified for gauge thickness and surface uniformity.", Icon: Layers },
  { num: "02", title: "Precision Roll Forming", text: "Automated rollers shape high-strength trussfold ribs without stress fractures.", Icon: Factory },
  { num: "03", title: "Dimensional & Quality Audit", text: "Every batch undergoes rigorous micrometer and paint adhesion quality tests.", Icon: PackageSearch },
  { num: "04", title: "Custom Cutting & Delivery", text: "Sheets are precision-sheared to exact structural requirements and dispatched.", Icon: Truck },
];

export function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-white pb-10 pt-10 sm:pb-16 sm:pt-14 bg-paper-grain">
      {/* Subtle blueprint grid and architectural roof truss linework */}
      <div className="pointer-events-none absolute inset-0 bg-blueprint-grid opacity-35" />
      <RoofTrussWatermark className="absolute -bottom-6 -right-6 w-3/4 max-w-2xl h-56 opacity-50 hidden md:block" />
      <WatermarkText text="DURAWIN" tone="light" className="absolute -top-3 right-4 sm:top-2 sm:right-8 -z-10" />
      <div className="absolute inset-x-0 top-0 h-px bg-slate-200/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
        <div data-reveal className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-navy sm:px-3.5">
              <ShieldCheck className="h-3.5 w-3.5 text-brand" /> Industrial Benchmark
            </span>
            <h2 className="mt-2.5 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl lg:text-4xl">
              Why Choose Durawin
            </h2>
            <p className="mt-1 text-sm text-slate-600 sm:text-base">
              Built on 20+ years of digital manufacturing and roofing excellence
            </p>
          </div>
          <div className="hidden items-center gap-2 font-mono text-xs text-slate-400 sm:flex">
            <span>[ SYSTEM MATRIX ]</span>
            <span>✦</span>
            <span>PALAKKAD UNIT</span>
          </div>
        </div>

        {/* Unified 6-cell hairline grid inspired by modern editorial studio layout */}
        <div className="mt-6 grid grid-cols-1 overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-100/60 shadow-sm sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ num, title, text, Icon, tag }, i) => (
            <div
              key={title}
              data-reveal
              style={{ "--reveal-delay": `${(i % 3) * 60}ms` } as React.CSSProperties}
              className="group relative flex flex-col justify-between border-b border-r border-slate-200/80 bg-white p-5 transition-colors duration-300 hover:bg-slate-50/70 sm:p-7"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-navy transition-colors duration-300 group-hover:border-brand/40 group-hover:bg-brand/10 group-hover:text-brand sm:h-12 sm:w-12">
                    <Icon className="h-5 w-5 sm:h-5.5 sm:w-5.5" strokeWidth={1.8} />
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-slate-600">
                      {tag}
                    </span>
                    <span className="font-mono text-xs font-bold text-slate-300">
                      {num}
                    </span>
                  </div>
                </div>

                <h3 className="mt-4 text-base font-bold text-navy sm:text-lg">
                  {title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="relative overflow-hidden bg-slate-50/80 py-10 sm:py-16 bg-paper-grain">
      {/* Subtle trapezoidal sheet profile schematic */}
      <div className="pointer-events-none absolute inset-0 bg-roof-profile-light opacity-40" />
      <SheetProfileWatermark className="absolute -top-2 right-8 w-2/3 max-w-xl h-20 opacity-45 hidden md:block" />
      <div className="absolute inset-x-0 top-0 h-px bg-slate-200/80" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
        <div data-reveal className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-end">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-navy sm:px-3.5">
              <Factory className="h-3.5 w-3.5 text-brand" /> Automated Line
            </span>
            <h2 className="mt-2.5 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl lg:text-4xl">
              Manufacturing Process
            </h2>
            <p className="mt-1 text-sm text-slate-600 sm:text-base">
              From raw galvanized steel coil to precision-profiled roofing sheet
            </p>
          </div>
          <div className="hidden font-mono text-xs text-slate-400 sm:block">
            [ 4-STAGE PRECISION WORKFLOW ]
          </div>
        </div>

        <div className="relative mt-7 grid grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-5">
          {steps.map(({ num, title, text, Icon }, i) => (
            <div
              key={title}
              data-reveal
              style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
              className="group relative flex flex-col justify-between rounded-xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-md sm:p-6"
            >
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="font-mono text-xs font-bold tracking-widest text-brand">
                    PHASE {num}
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 text-slate-600 group-hover:bg-brand/10 group-hover:text-brand">
                    <Icon className="h-4 w-4" strokeWidth={1.8} />
                  </span>
                </div>
                <h3 className="mt-3.5 text-base font-bold text-navy">
                  {title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  {text}
                </p>
              </div>

              <div className="mt-5 flex items-center justify-between pt-3 border-t border-slate-50 text-[11px] font-mono text-slate-400">
                <span>INSPECTION POINT</span>
                <span className="text-emerald-600 font-semibold">● ACTIVE</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CallStrip() {
  return (
    <section className="relative overflow-hidden bg-white px-4 pb-10 sm:px-8 sm:pb-16">
      <div
        data-reveal
        className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl border border-slate-800 bg-navy-dark px-6 py-8 text-white shadow-xl sm:px-10 sm:py-10"
      >
        {/* Subtle grid pattern and dark roofing profile lines */}
        <div className="pointer-events-none absolute inset-0 opacity-15 bg-grid-pattern" />
        <div className="pointer-events-none absolute inset-0 opacity-20 bg-roof-profile-dark" />
        <WatermarkText text="PALAKKAD" tone="dark" className="absolute -bottom-3 right-4 sm:bottom-0 sm:right-8 -z-10" />
        <CadDimensionMarks label="DIRECT PLANT SUPPLY" spec="ZERO INTERMEDIARIES" tone="dark" className="absolute bottom-3 right-6 hidden md:flex" />
        
        <div className="relative z-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] text-slate-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>DIRECT FACTORY DESK &bull; PALAKKAD PLANT</span>
            </div>
            <h3 className="mt-3 text-xl font-extrabold tracking-tight text-white sm:text-2xl lg:text-3xl">
              Need custom roofing sheets for your project?
            </h3>
            <p className="mt-1.5 flex flex-wrap items-center gap-2 text-sm text-slate-300 sm:text-base">
              <span>Fast quotes, custom lengths, and direct dispatch across Kerala.</span>
              <span className="hidden sm:inline text-slate-500">•</span>
              <a href={`tel:+91${site.phone}`} className="inline-flex items-center gap-1.5 font-bold text-gold hover:underline">
                <Phone className="h-4 w-4 shrink-0" /> +91 {site.phone} ({site.contact})
              </a>
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-brand px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-white hover:text-navy"
            >
              Request Quick Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

