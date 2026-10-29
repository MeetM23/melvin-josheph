import Link from "next/link";
import UIcon, { UIconName } from "@/components/UIcon";
import { site } from "@/lib/site";
import { CadDimensionMarks, RoofTrussWatermark, SheetProfileWatermark, WatermarkText } from "@/components/IndustrialBackgrounds";

const reasons = [
  { num: "01", title: "Premium Raw Materials", text: "Steel coils sourced directly from top-tier primary manufacturers.", iconName: "layers" as UIconName, tag: "Grade A Steel" },
  { num: "02", title: "Precision Roll Forming", text: "State-of-the-art profiling machinery for uniform rib depth and accuracy.", iconName: "factory" as UIconName, tag: "CNC Calibrated" },
  { num: "03", title: "Custom Lengths", text: "Cut-to-order sizing to eliminate on-site joint leakage and waste.", iconName: "ruler" as UIconName, tag: "Zero Wastage" },
  { num: "04", title: "Colour Options", text: "High-durability polyester and PVDF coatings in architectural hues.", iconName: "palette" as UIconName, tag: "UV Stable" },
  { num: "05", title: "Strict Quality Inspection", text: "Batch testing for tensile strength, zinc coating, and paint adherence.", iconName: "badge-check" as UIconName, tag: "Certified Lab" },
  { num: "06", title: "Swift Kerala Delivery", text: "Prompt logistics network ensuring on-time delivery directly to site.", iconName: "truck" as UIconName, tag: "Prompt Dispatch" },
];

const steps = [
  { num: "01", title: "Raw Material Ingestion", text: "Inspected steel coils are verified for gauge thickness and surface uniformity.", iconName: "layers" as UIconName },
  { num: "02", title: "Precision Roll Forming", text: "Automated rollers shape high-strength trussfold ribs without stress fractures.", iconName: "factory" as UIconName },
  { num: "03", title: "Dimensional & Quality Audit", text: "Every batch undergoes rigorous micrometer and paint adhesion quality tests.", iconName: "search" as UIconName },
  { num: "04", title: "Custom Cutting & Delivery", text: "Sheets are precision-sheared to exact structural requirements and dispatched.", iconName: "truck" as UIconName },
];

export function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-20 lg:py-24 bg-paper-grain">
      {/* Subtle blueprint grid and architectural roof truss linework */}
      <div className="pointer-events-none absolute inset-0 bg-blueprint-grid opacity-35" />
      <RoofTrussWatermark className="absolute -bottom-6 -right-6 w-3/4 max-w-2xl h-56 opacity-50 hidden md:block" />
      <WatermarkText text="DURAWIN" tone="light" className="absolute -top-3 right-4 sm:top-2 sm:right-8 -z-10" />
      <div className="absolute inset-x-0 top-0 h-px bg-slate-200/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
        <div data-reveal className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <h2 className="section-heading text-navy">
              Why Choose Durawin
            </h2>
            <p className="mt-2 body-text text-slate-600">
              Built on 20+ years of digital manufacturing and roofing excellence
            </p>
          </div>
        </div>

        {/* Unified 6-cell hairline grid inspired by modern editorial studio layout */}
        <div className="mt-8 grid grid-cols-1 overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-100/60 shadow-xs sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ title, text, iconName }, i) => (
            <div
              key={title}
              data-reveal
              style={{ "--reveal-delay": `${(i % 3) * 60}ms` } as React.CSSProperties}
              className="group relative flex flex-col justify-between border-b border-r border-slate-200/80 bg-white p-6 transition-colors duration-200 hover:bg-slate-50/70 sm:p-8"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-navy transition-colors duration-200 group-hover:border-brand/40 group-hover:bg-brand/10 group-hover:text-brand sm:h-12 sm:w-12">
                    <UIcon name={iconName} size="md" />
                  </span>
                </div>

                <h3 className="mt-4 item-heading text-navy">
                  {title}
                </h3>
                <p className="mt-1.5 body-text text-slate-600">
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
    <section className="relative overflow-hidden bg-slate-50/80 py-14 sm:py-20 lg:py-24 bg-paper-grain">
      {/* Subtle trapezoidal sheet profile schematic */}
      <div className="pointer-events-none absolute inset-0 bg-roof-profile-light opacity-40" />
      <SheetProfileWatermark className="absolute -top-2 right-8 w-2/3 max-w-xl h-20 opacity-45 hidden md:block" />
      <div className="absolute inset-x-0 top-0 h-px bg-slate-200/80" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
        <div data-reveal className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-end">
          <div>
            <h2 className="section-heading text-navy">
              Manufacturing Process
            </h2>
            <p className="mt-2 body-text text-slate-600">
              From raw galvanized steel coil to precision-profiled roofing sheet
            </p>
          </div>
        </div>

        <div className="relative mt-8 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {steps.map(({ num, title, text, iconName }, i) => (
            <div
              key={title}
              data-reveal
              style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_12px_28px_-6px_rgba(10,37,64,0.08)] sm:p-7"
            >
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-3.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                    Phase {num}
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 text-slate-600 group-hover:bg-brand/10 group-hover:text-brand">
                    <UIcon name={iconName} size="sm" />
                  </span>
                </div>
                <h3 className="mt-3.5 item-heading text-navy">
                  {title}
                </h3>
                <p className="mt-1.5 body-text text-slate-600">
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

export function CallStrip() {
  return (
    <section className="relative overflow-hidden bg-white px-4 pb-14 sm:px-8 sm:pb-20 lg:pb-24">
      <div
        data-reveal
        className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl border border-slate-800 bg-navy-dark px-6 py-9 text-white shadow-xl sm:px-10 sm:py-12"
      >
        {/* Subtle grid pattern and dark roofing profile lines */}
        <div className="pointer-events-none absolute inset-0 opacity-15 bg-grid-pattern" />
        <div className="pointer-events-none absolute inset-0 opacity-20 bg-roof-profile-dark" />
        <WatermarkText text="PALAKKAD" tone="dark" className="absolute -bottom-3 right-4 sm:bottom-0 sm:right-8 -z-10" />
        <CadDimensionMarks label="DIRECT PLANT SUPPLY" spec="ZERO INTERMEDIARIES" tone="dark" className="absolute bottom-3 right-6 hidden md:flex" />
        
        <div className="relative z-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
          <div className="min-w-0">
            <h3 className="section-heading text-white">
              Need custom roofing sheets for your project?
            </h3>
            <p className="mt-2 flex flex-wrap items-center gap-2 body-text text-slate-300 sm:text-base">
              <span>Fast quotes, custom lengths, and direct dispatch across Kerala.</span>
              <span className="hidden sm:inline text-slate-500">•</span>
              <a href={`tel:+91${site.phone}`} className="inline-flex items-center gap-1.5 font-bold text-gold hover:underline">
                <UIcon name="phone" size="sm" className="shrink-0" /> +91 {site.phone} ({site.contact})
              </a>
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-200 ease-out hover:bg-white hover:text-navy hover:shadow-lg active:scale-[0.98]"
            >
              Request Quick Quote <UIcon name="arrow-right" size="sm" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

