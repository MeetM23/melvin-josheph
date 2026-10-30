import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import UIcon, { UIconName } from "@/components/UIcon";
import { site } from "@/lib/site";
import ServicesFaqAccordion, { FaqItem } from "@/components/ServicesFaqAccordion";
import { CadDimensionMarks, WatermarkText } from "@/components/IndustrialBackgrounds";
import ExpandableText from "@/components/ExpandableText";

export const metadata: Metadata = {
  title: "Services & Installation | Durawin Roofing Manufacturing",
  description:
    "Direct roofing sheet manufacturing, precision CNC cut-to-length shearing up to 12m, and regional contractor installation coordination across Kerala.",
};

// Hero Features Bar Data (Matching Products & Home style)
const serviceFeatures: { num: string; title: string; desc: string; icon: UIconName }[] = [
  {
    num: "01",
    title: "CNC Custom Shearing",
    desc: "Up to 12m zero-joint spans cut to the exact millimeter",
    icon: "ruler",
  },
  {
    num: "02",
    title: "100% Primary Steel",
    desc: "Certified virgin coils sourced from JSW Steel & Jindal",
    icon: "shield-check",
  },
  {
    num: "03",
    title: "Contractor Coordination",
    desc: "Verified regional installation teams across all districts",
    icon: "wrench",
  },
  {
    num: "04",
    title: "Statewide Dispatch",
    desc: "Direct factory fleet transit strapped on wooden dunnage",
    icon: "truck",
  },
];


// 2. Consolidated 6-Stage Customer Journey (Concise, Scannable Process)
interface JourneyStep {
  num: string;
  stageName: string;
  title: string;
  description: string;
  keyDetails: string[];
  image: string;
}

const customerJourneySteps: JourneyStep[] = [
  {
    num: "01",
    stageName: "PROJECT PLANNING",
    title: "Roof Planning & Slope Advisory",
    description: "Assess building plans, roof slope, site wind exposure, and recommended sheet profile requirements.",
    keyDetails: [
      "Recommended 1:7 slope for rapid monsoon runoff",
      "Gauge selection matched to structural purlin spans",
    ],
    image: "/images/services-planning-consultation.jpg",
  },
  {
    num: "02",
    stageName: "SITE ASSESSMENT",
    title: "Purlin Alignment & Span Verification",
    description: "Verify structural truss alignment, purlin levelness, and exact slope lengths before manufacturing starts.",
    keyDetails: [
      "Verified purlin spacing between 1.0 m and 1.4 m",
      "Millimeter span measurements eliminate site waste",
    ],
    image: "/images/services-site-assessment.jpg",
  },
  {
    num: "03",
    stageName: "MATERIAL SELECTION",
    title: "Primary Steel & Coating Sign-off",
    description: "Confirm certified primary steel coil sourcing, base metal thickness, and architectural coating chemistry.",
    keyDetails: [
      "Certified primary steel from JSW and Jindal",
      "Baked SMP or PVDF coating for UV durability",
    ],
    image: "/images/raw-materials-coils.jpg",
  },
  {
    num: "04",
    stageName: "MANUFACTURING & DISPATCH",
    title: "Custom Roll-Forming & Fleet Delivery",
    description: "Roll-form sheets to exact millimeter lengths at our Palakkad plant and dispatch on protective dunnage.",
    keyDetails: [
      "Continuous shearing up to 12 meters length",
      "Protected transit across all 14 Kerala districts",
    ],
    image: "/images/services-rollforming-dispatch.jpg",
  },
  {
    num: "05",
    stageName: "ROOF INSTALLATION",
    title: "Weather-Side Laying & Crest Fastening",
    description: "Install sheets facing away from storm winds and fasten through crests with EPDM-washered screws.",
    keyDetails: [
      "Fastened strictly through top ribs with EPDM seals",
      "Laps oriented away from prevailing southwest winds",
    ],
    image: "/images/services-installation-work.jpg",
  },
  {
    num: "06",
    stageName: "FINAL INSPECTION",
    title: "Flashings, Drainage & Handover",
    description: "Install ridge caps and eaves gutters, then verify fastener torque and swarf removal for watertight completion.",
    keyDetails: [
      "Sealed ridge caps and high-capacity eaves gutters",
      "Complete swarf sweep to prevent surface staining",
    ],
    image: "/images/services-completed-building.jpg",
  },
];

// 3. Sector Applications Data
const applications = [
  {
    title: "Residential Architecture",
    subtitle: "Villas, Porches & Sloped Roofs",
    desc: "Contemporary pitched roofing and car porches engineered to endure heavy monsoon rain while complementing Kerala home aesthetics.",
    image: "/images/app-household.jpg",
    link: "/products/roofing-sheets",
  },
  {
    title: "Commercial Buildings",
    subtitle: "Showrooms, Retail & Arcades",
    desc: "Clean architectural lines, expansive spans, and durable pre-painted finishes for automobile dealerships and commercial complexes.",
    image: "/images/app-commercial.jpg",
    link: "/products/colour-coated-sheets",
  },
  {
    title: "Industrial Infrastructure",
    subtitle: "Warehouses & Manufacturing Bays",
    desc: "High-yield structural purlin tubes and high-tensile trapezoidal roofing designed for large logistics sheds and industrial plants.",
    image: "/images/services-completed-building.jpg",
    link: "/products/gp-pipes",
  },
];

// 4. Frequently Asked Questions
const faqs: FaqItem[] = [
  {
    question: "What information is needed to obtain a roofing quotation?",
    answer:
      "To prepare an accurate factory estimate, we require your project location (district/town in Kerala), total roof surface area or ridge-to-eaves slope length, preferred sheet thickness (e.g. 0.35 mm, 0.40 mm, or 0.45 mm), preferred color, and whether GP purlin pipes or rainwater gutters are needed.",
  },
  {
    question: "Can Durawin sheets be cut to custom lengths?",
    answer:
      "Yes. We roll-form and shear sheets to your exact structural span requirements up to 12 meters (approx 40 ft). Custom cut lengths eliminate end-overlapping joints, which removes the primary source of roof leaks and reduces on-site cutting labor.",
  },
  {
    question: "Does Durawin perform on-site roofing installation directly?",
    answer:
      "Durawin is a specialized manufacturing facility focusing on coil processing, roll-forming, and material supply. For on-site erection, we connect clients with our verified network of experienced fabrication and roofing contractors across Kerala, providing full technical guidance.",
  },
  {
    question: "How should a project site be prepared for final measurements?",
    answer:
      "The steel roof trusses and purlin framework should be fully erected, aligned, and welded in place before final measurements are taken. Measuring over completed purlins ensures custom-cut sheets fit edge-to-edge without on-site trimming or overhang discrepancies.",
  },
  {
    question: "Which primary steel brands are used in manufacturing?",
    answer:
      "Durawin roll-forms exclusively from certified primary steel coils sourced from verified industry leaders including JSW Steel, Jindal Steel, and primary mill suppliers. All coils adhere to IS 277 / IS 513 structural standards with heavy zinc sacrificial protection.",
  },
  {
    question: "How is delivery scheduled across Kerala?",
    answer:
      "We operate a direct factory dispatch fleet from our Palakkad manufacturing plant to all 14 Kerala districts. Materials are bundled on wooden dunnage with protective strapping to ensure pristine arrival on site.",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1 — SERVICES HERO (Consistent with Products, About, and Contact pages)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-white">
        <Image
          src="/images/services-hero.jpg"
          alt="High quality blue trapezoidal roofing installation on commercial facility"
          fill
          sizes="100vw"
          className="-z-20 object-cover object-[78%_50%] sm:object-[80%_50%]"
          priority
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-white/85 to-transparent sm:bg-gradient-to-r sm:from-white sm:via-white/75 sm:to-transparent" />
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-30 bg-grid-pattern" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-roof-profile-light opacity-40" />
        <WatermarkText text="SERVICES" tone="light" className="absolute bottom-2 right-4 sm:bottom-4 sm:right-8 -z-10" />
        <div className="absolute bottom-3 left-8 -z-10 hidden lg:block">
          <CadDimensionMarks label="INSTALLATION & CUT-TO-LENGTH" spec="IS 513 / IS 277 CERTIFIED • PALAKKAD PLANT" />
        </div>

        <div className="mx-auto flex min-h-[380px] max-w-7xl items-start px-5 pb-24 pt-10 sm:min-h-[440px] sm:items-center sm:px-8 sm:pb-16 sm:pt-8 lg:min-h-[490px]">
          <div className="w-full sm:w-3/5 lg:w-1/2">
            <span
              style={{ "--hero-delay": "0.02s" } as React.CSSProperties}
              className="hero-rise inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white/90 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-navy shadow-xs backdrop-blur"
            >
              <UIcon name="wrench" className="text-xs text-brand" /> SERVICES &bull; INSTALLATION NETWORK
            </span>

            <h1
              style={{ "--hero-delay": "0.1s" } as React.CSSProperties}
              className="hero-rise mt-3 text-[clamp(1.85rem,6.5vw,2.75rem)] font-extrabold uppercase leading-[0.98] tracking-[-0.028em] text-navy sm:mt-4 sm:text-5xl lg:text-[3.35rem]"
            >
              From Roofing Materials to a<br />
              <span className="text-brand">Roof Built Right</span>
            </h1>

            <p
              style={{ "--hero-delay": "0.22s" } as React.CSSProperties}
              className="hero-rise mt-3.5 max-w-xl text-sm leading-relaxed text-slate-700 sm:mt-4 sm:text-base"
            >
              Direct primary-steel sheet roll-forming and CNC cut-to-length shearing up to 12 meters in Palakkad, paired with certified contractor partner coordination across all 14 Kerala districts.
            </p>

            <div
              style={{ "--hero-delay": "0.32s" } as React.CSSProperties}
              className="hero-rise mt-6 flex flex-wrap items-center gap-3.5 sm:mt-8"
            >
              <Link
                href="/contact#enquiry"
                className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-200 ease-out hover:bg-brand hover:shadow-md active:scale-[0.98]"
              >
                Discuss Your Project <UIcon name="arrow-right" className="text-sm transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <a
                href="#journey"
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-slate-300 bg-white/90 px-6 py-3.5 text-sm font-semibold text-navy shadow-xs backdrop-blur transition-all duration-200 ease-out hover:border-slate-400 hover:bg-white active:scale-[0.98]"
              >
                Explore Process
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 1B — TECHNICAL METRICS BAR (Consistent with Products & Home)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative z-10 -mt-12 px-4 sm:-mt-10 sm:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xl min-[480px]:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-slate-200">
          {serviceFeatures.map(({ num, title, desc, icon }, i) => (
            <div
              key={title}
              data-reveal
              style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
              className="group relative flex flex-col justify-between border-b border-slate-100 p-5 transition-colors hover:bg-slate-50/70 sm:p-6 lg:border-b-0"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-navy transition-colors group-hover:border-brand/40 group-hover:bg-brand/10 group-hover:text-brand">
                    <UIcon name={icon} className="text-lg" />
                  </span>
                  <span className="text-xs font-bold text-slate-300">
                    {num}
                  </span>
                </div>
                <h3 className="mt-3.5 text-sm font-bold text-navy sm:text-base">
                  {title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3 — THE CUSTOMER JOURNEY (All 6 Stages with High-Quality Industrial Imagery)
      ───────────────────────────────────────────────────────────── */}
      <section id="journey" className="relative overflow-hidden py-14 sm:py-20 lg:py-24 scroll-mt-20 border-b border-slate-200/80 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand">
              THE COMPLETE PROCESS
            </span>
            <h2 className="mt-2 text-2xl font-extrabold tracking-[-0.025em] text-navy sm:text-3xl lg:text-4xl">
              From Inquiry to Watertight Completion
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              A single structured journey coordinating factory roll-forming, site purlin checks, crest fastening, and certified contractor installation.
            </p>
          </div>

          {/* Unified Timeline Cards — Clean, Concise & Scannable */}
          <div className="mt-10 sm:mt-12 space-y-4 sm:space-y-5">
            {customerJourneySteps.map((step) => (
              <div
                key={step.num}
                className="rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-300 ease-out hover:border-slate-300 hover:shadow-[0_8px_24px_-6px_rgba(10,37,64,0.06)]"
              >
                <div className="grid grid-cols-1 items-start gap-4 sm:gap-5 lg:grid-cols-[minmax(0,40fr)_minmax(0,30fr)_minmax(0,30fr)] lg:gap-6 lg:items-center">
                  {/* LEFT: num/stage + title + short description */}
                  <div className="min-w-0">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-black text-brand">
                        {step.num}
                      </span>
                      <div className="h-4 w-px bg-slate-200" />
                      <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-400">
                        {step.stageName}
                      </span>
                    </div>

                    <h3 className="mt-2 text-lg font-bold tracking-tight text-navy sm:text-xl leading-snug">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {step.description}
                    </p>
                  </div>

                  {/* MIDDLE: 2 essential key details */}
                  <div className="min-w-0">
                    <ul className="space-y-2 text-xs sm:text-[13px] text-slate-600">
                      {step.keyDetails.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <UIcon name="check-circle" className="text-xs text-brand shrink-0 mt-0.5" />
                          <span className="leading-snug">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* RIGHT: process image */}
                  <div className="min-w-0">
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-slate-200/80 bg-slate-50">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 340px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4 — PROJECT TYPES (Residential, Commercial, Industrial)
      ───────────────────────────────────────────────────────────── */}
      <section id="sectors" className="relative overflow-hidden py-14 sm:py-20 lg:py-24 scroll-mt-20 border-b border-slate-200/80 bg-slate-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand">
              SECTOR EXPERTISE
            </span>
            <h2 className="mt-2 text-2xl font-extrabold tracking-[-0.025em] text-navy sm:text-3xl lg:text-4xl">
              Proven Across All Building Types
            </h2>
            <p className="mt-1.5 text-sm text-slate-600 sm:text-base">
              From architectural residences to commercial arcades and heavy manufacturing bays.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {applications.map((app) => (
              <div
                key={app.title}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_12px_28px_-6px_rgba(10,37,64,0.08)]"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                    <Image
                      src={app.image}
                      alt={app.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 380px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand">
                      {app.subtitle}
                    </span>
                    <h3 className="mt-1.5 text-lg font-bold tracking-tight text-navy">
                      {app.title}
                    </h3>
                    <ExpandableText
                      text={app.desc}
                      className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm"
                      mobileLines={2}
                      desktopLines={2}
                      minChars={100}
                    />
                  </div>
                </div>

                <div className="border-t border-slate-100 px-6 py-4">
                  <Link
                    href={app.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-navy transition-colors duration-150 hover:text-brand"
                  >
                    <span>View Related Products</span>
                    <UIcon name="arrow-right" className="text-xs transition-transform duration-150 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5 — COMPACT ACCESSIBLE FAQ
      ───────────────────────────────────────────────────────────── */}
      <section id="faq" className="relative overflow-hidden py-14 sm:py-20 lg:py-24 scroll-mt-20 border-b border-slate-200/80 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-8">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand">
              CUSTOMER ASSISTANCE
            </span>
            <h2 className="mt-2 text-2xl font-extrabold tracking-[-0.025em] text-navy sm:text-3xl lg:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-xs text-slate-600 sm:text-sm">
              Answers regarding site measurements, custom shearing, primary steel certifications, and delivery logistics.
            </p>
          </div>

          <div className="mt-10">
            <ServicesFaqAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 6 — FINAL DARK-NAVY CALL TO ACTION
      ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-navy-dark px-4 py-16 text-white sm:px-8 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0 opacity-15 bg-grid-pattern" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <span className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">
                DIRECT PALAKKAD MANUFACTURING UNIT
              </span>
              <h2 className="mt-2.5 text-2xl font-extrabold tracking-[-0.025em] sm:text-3xl lg:text-4xl">
                Planning a Roofing Project?
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
                Contact our factory technical desk in Palakkad for millimeter-custom shearing, primary coil certifications, and certified contractor partner introductions across Kerala.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact#enquiry"
                  className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-200 ease-out hover:bg-white hover:text-navy active:scale-[0.98]"
                >
                  <span>Request a Quotation</span>
                  <UIcon name="arrow-right" className="text-sm transition-transform duration-200 group-hover:translate-x-1" />
                </Link>

                <a
                  href={`tel:+91${site.phone}`}
                  className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
                >
                  <UIcon name="phone" className="text-sm text-gold" />
                  <span>Call: +91 {site.phone}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
                <h3 className="text-xs font-bold uppercase tracking-wider text-gold">
                  Direct Factory Assurance
                </h3>
                <ul className="mt-4 space-y-3 text-xs text-slate-300">
                  <li className="flex items-center gap-2.5">
                    <UIcon name="check-circle" className="text-sm text-emerald-400 shrink-0" />
                    <span>JSW &amp; Jindal primary certified steel</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <UIcon name="check-circle" className="text-sm text-emerald-400 shrink-0" />
                    <span>Custom lengths cut up to 12 meters</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <UIcon name="check-circle" className="text-sm text-emerald-400 shrink-0" />
                    <span>Direct fleet delivery across all 14 districts</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <UIcon name="check-circle" className="text-sm text-emerald-400 shrink-0" />
                    <span>Verified regional contractor network</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
