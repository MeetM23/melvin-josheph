import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  Ruler,
  ShieldCheck,
  Building2,
  FileText,
  Wrench,
  Truck,
  CheckCheck,
} from "lucide-react";
import { site } from "@/lib/site";
import ServicesFaqAccordion, { FaqItem } from "@/components/ServicesFaqAccordion";

export const metadata: Metadata = {
  title: "Services & Installation | Durawin Roofing Manufacturing",
  description:
    "Direct roofing sheet manufacturing, precision CNC cut-to-length shearing up to 12m, and regional contractor installation coordination across Kerala.",
};

// 1. Services Lineup Data (Restrained & Architectural)
const servicesList = [
  {
    code: "SUPPLY • 01",
    title: "Trapezoidal Roofing Sheet Supply",
    desc: "Roll-formed from certified primary steel coils (IS 513 / IS 277). Features high-depth trapezoidal ribs designed for high load capacity, rapid water discharge, and extreme Kerala monsoon resilience.",
    detailHref: "/products/roofing-sheets",
  },
  {
    code: "CUSTOM • 02",
    title: "CNC Cut-to-Length Shearing",
    desc: "Sheets sheared to exact millimeter site dimensions up to 12 meters (approx 40 ft). Eliminates end-overlapping joints, prevents seam leakage, and reduces on-site cutting scrap.",
    detailHref: "/contact?product=custom#enquiry",
  },
  {
    code: "CEILING • 03",
    title: "1110 mm Multi-Rib Liner Sheets",
    desc: "Architectural multi-rib steel panels for interior ceilings, wall cladding, and exterior roof eaves soffits. Moisture-proof, sag-free, and washable alternative to conventional gypsum.",
    detailHref: "/products/liner-sheets",
  },
  {
    code: "FINISH • 04",
    title: "Colour-Coated Roofing Products",
    desc: "Pre-painted steel sheets finished with oven-baked siliconized polyester (SMP) and PVDF architectural pigments. Resists tropical sun fading, chalking, and coastal humidity.",
    detailHref: "/products/colour-coated-sheets",
  },
  {
    code: "FRAME • 05",
    title: "Structural GI & GP Hollow Pipes",
    desc: "Certified high-yield galvanized steel square (SHS) and rectangular (RHS) hollow sections from APL Apollo for durable roof purlins, rafters, and welded trusses.",
    detailHref: "/products/structural-gi-pipes",
  },
  {
    code: "DRAINAGE • 06",
    title: "Rainwater Gutters & Downpipes",
    desc: "Engineered eaves gutters, corner bends, running outlets, and vertical downspouts designed to channel high-volume cloudburst rainfall safely away from building foundations.",
    detailHref: "/products/rainwater-gutters",
  },
  {
    code: "NETWORK • 07",
    title: "Installation Partner Coordination",
    desc: "While Durawin operates primarily as a manufacturing unit, we introduce clients to verified local fabrication and roofing contractor teams across all Kerala districts, backed by factory technical support.",
    detailHref: "/contact#enquiry",
  },
];

// 2. Consolidated 6-Stage Customer Journey (Combining Process + Technical Specifications)
interface JourneyStep {
  num: string;
  stageName: string;
  role: "Durawin Technical Desk" | "Contractor & Site Team" | "Palakkad Factory" | "Joint Handover";
  title: string;
  summary: string;
  technicalSpecs: string[];
  image?: string;
  imageCaption?: string;
  secondaryImage?: string;
  secondaryCaption?: string;
}

const customerJourneySteps: JourneyStep[] = [
  {
    num: "01",
    stageName: "PROJECT SCOPING",
    role: "Durawin Technical Desk",
    title: "Requirement Definition & Slope Advisory",
    summary:
      "The client provides building plans, roof area, pitch, and site location in Kerala. Our technical team evaluates the exposure to coastal winds and recommends appropriate trapezoidal rib depth and sheet gauge.",
    technicalSpecs: [
      "Minimum recommended roof slope: 1 in 7 (approx 8°) for rapid rainwater runoff",
      "Trapezoidal profile depth chosen according to cloudburst discharge calculations",
      "Gauge selection ranging from 0.30 mm to 0.50 mm based on structural purlin spans",
    ],
  },
  {
    num: "02",
    stageName: "SITE PREPARATION",
    role: "Contractor & Site Team",
    title: "Structural Purlin Alignment & Site Verification",
    summary:
      "Once structural steel trusses are welded in place, the site contractor verifies purlin levelness and measures exact ridge-to-eaves slope lengths to dictate custom sheet roll-forming dimensions.",
    technicalSpecs: [
      "Purlin spacing strictly verified between 1.0 m and 1.4 m depending on sheet gauge",
      "Structural steel deburred, primed, and checked for coplanar alignment across all bays",
      "Exact millimeter span measurement eliminates accidental sheet underhang or wasteful site cuts",
    ],
    image: "/images/services-site-assessment.jpg",
    imageCaption: "Site engineers and contractors verifying purlin alignment and span lengths",
  },
  {
    num: "03",
    stageName: "SPECIFICATION",
    role: "Durawin Technical Desk",
    title: "Primary Coil Selection & Order Sign-off",
    summary:
      "Durawin confirms certified primary coil sourcing, base metal thickness, coating chemistry, and required custom cut schedule before generating the official factory estimate.",
    technicalSpecs: [
      "Certified primary steel coils exclusively from JSW Steel, Jindal Steel, and primary mills",
      "Strict compliance with IS 513 / IS 277 structural zinc coating standards",
      "Baked Siliconized Polyester (SMP) or PVDF architectural coatings selected for UV durability",
    ],
  },
  {
    num: "04",
    stageName: "MANUFACTURING",
    role: "Palakkad Factory",
    title: "CNC Roll-forming & Protected Fleet Dispatch",
    summary:
      "Coils are roll-formed and sheared to exact millimeter lengths at our Palakkad manufacturing facility, strapped onto timber dunnage, and dispatched directly to the site.",
    technicalSpecs: [
      "CNC cut-to-length shearing up to 12 meters (approx 40 ft) to eliminate end-overlap leaks",
      "Continuous profile calibration ensures perfect lap interlocks along long roof slopes",
      "Direct factory fleet delivery across all 14 Kerala districts with protective edge packing",
    ],
  },
  {
    num: "05",
    stageName: "INSTALLATION",
    role: "Contractor & Site Team",
    title: "Weather-Side Laying & Crest-Fastening with EPDM Washers",
    summary:
      "Contractor crews lay sheets starting from the side opposite prevailing monsoon storm winds. Fasteners are driven through raised crests using self-drilling hex-head TEK screws fitted with vulcanized EPDM washers.",
    technicalSpecs: [
      "Lapping sheets face away from prevailing southwest monsoons to eliminate capillary backflow",
      "Fastened strictly through top ribs (crests) — never in valleys where water channels",
      "Calibrated drill torque compresses the vulcanized EPDM washer without denting sheet steel",
    ],
    image: "/images/services-installation-work.jpg",
    imageCaption: "Roofing contractor crew installing trapezoidal sheets with safety harness gear",
    secondaryImage: "/images/services-installation-detail.jpg",
    secondaryCaption: "Hex TEK screw with compressed vulcanized EPDM rubber washer on crest rib",
  },
  {
    num: "06",
    stageName: "COMPLETION",
    role: "Joint Handover",
    title: "Flashing, Rainwater Integration & Final Inspection",
    summary:
      "Installation of ridge caps, verge barge flashings, and high-capacity eaves gutters. A final inspection verifies fastener torque, joint sealant continuity, and metal swarf clearance for a long-lasting watertight roof.",
    technicalSpecs: [
      "Eaves gutters positioned with 50–75 mm sheet overhang to catch torrential downpours",
      "Matching ridge capping and verge trims sealed with neutral-cure butyl continuous laps",
      "Swarf and metal filings thoroughly swept to prevent premature surface pinhole staining",
    ],
    image: "/images/services-completed-building.jpg",
    imageCaption: "Completed distribution facility with watertight multi-span trapezoidal roofing",
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
    link: "/products/structural-gi-pipes",
  },
];

// 4. Frequently Asked Questions
const faqs: FaqItem[] = [
  {
    question: "What information is needed to obtain a roofing quotation?",
    answer:
      "To prepare an accurate factory estimate, we require your project location (district/town in Kerala), total roof surface area or ridge-to-eaves slope length, preferred sheet thickness (e.g. 0.35 mm, 0.40 mm, or 0.45 mm), preferred color, and whether purlin pipes or rainwater gutters are needed.",
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
          SECTION 1 — SERVICES HERO
      ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-white pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pb-20 bg-paper-grain">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-blueprint-grid opacity-20" />

        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left: Editorial Copy */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-brand">
                  SERVICES &amp; INSTALLATION
                </span>
                <span className="hidden text-slate-300 sm:inline">•</span>
                <span className="font-mono text-xs text-slate-500">
                  PALAKKAD MANUFACTURING UNIT
                </span>
              </div>

              <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl leading-tight">
                From Roofing Materials to a Roof Built Right
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Durawin manufactures primary-steel trapezoidal sheets, liner panels, and structural purlins roll-formed to exact millimeter lengths in Palakkad. For installation, we support builders and property owners with technical coordination and introductions to certified roofing contractors across Kerala.
              </p>

              {/* Action Buttons */}
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact#enquiry"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-navy px-6 py-3 text-sm font-bold text-white shadow-xs transition hover:bg-brand active:scale-[0.99]"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href="#journey"
                  className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-navy transition hover:border-navy hover:text-navy"
                >
                  <span>Explore Our Process</span>
                  <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
                </a>
              </div>

              {/* Restrained Architectural Metadata */}
              <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-6 border-t border-slate-100 pt-6 font-mono text-xs">
                <div>
                  <span className="block text-slate-400 uppercase text-[9px] sm:text-[10px] tracking-wider">Primary Metallurgy</span>
                  <span className="mt-0.5 block text-xs sm:text-xs font-bold text-navy">JSW &amp; Jindal Coils</span>
                </div>
                <div>
                  <span className="block text-slate-400 uppercase text-[9px] sm:text-[10px] tracking-wider">Span Sizing</span>
                  <span className="mt-0.5 block text-xs sm:text-xs font-bold text-navy">Up to 12m Zero-Joint</span>
                </div>
                <div>
                  <span className="block text-slate-400 uppercase text-[9px] sm:text-[10px] tracking-wider">Statewide Scope</span>
                  <span className="mt-0.5 block text-xs sm:text-xs font-bold text-navy">All 14 Districts</span>
                </div>
              </div>
            </div>

            {/* Right: Integrated Industrial Photograph */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm">
                <Image
                  src="/images/services-hero.jpg"
                  alt="Commercial warehouse facility with blue trapezoidal metal roofing in Kerala"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2 — OUR SERVICES (Editorial Catalog Grid)
      ───────────────────────────────────────────────────────────── */}
      <section id="services-lineup" className="relative overflow-hidden py-14 sm:py-20 scroll-mt-20 border-b border-slate-200/80 bg-slate-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="max-w-2xl">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-brand">
              CAPABILITIES &amp; SUPPLY
            </span>
            <h2 className="mt-1.5 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl lg:text-4xl">
              Manufacturing &amp; Material Solutions
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              Engineered steel components manufactured from primary certified coils and delivered directly to construction sites throughout Kerala.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {servicesList.map((svc) => (
              <div
                key={svc.title}
                className="group relative flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-xs transition hover:border-slate-300 hover:shadow-sm"
              >
                <div>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {svc.code}
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-navy transition group-hover:text-brand">
                    {svc.title}
                  </h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    {svc.desc}
                  </p>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-4">
                  <Link
                    href={svc.detailHref}
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-navy hover:text-brand"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="h-3.5 w-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3 — THE CUSTOMER JOURNEY (Consolidated 6-Step Workflow)
      ───────────────────────────────────────────────────────────── */}
      <section id="journey" className="relative overflow-hidden py-14 sm:py-20 scroll-mt-20 border-b border-slate-200/80 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="max-w-2xl">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-brand">
              THE COMPLETE PROCESS
            </span>
            <h2 className="mt-1.5 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl lg:text-4xl">
              From Inquiry to Watertight Completion
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              A single structured journey coordinating factory roll-forming, site purlin checks, crest fastening, and certified contractor installation.
            </p>
          </div>

          {/* Unified Timeline Cards */}
          <div className="mt-12 space-y-8">
            {customerJourneySteps.map((step) => (
              <div
                key={step.num}
                className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 transition hover:border-slate-300"
              >
                <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-8">
                  {/* Column 1: Step Number, Stage & Responsibility */}
                  <div className="lg:col-span-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-2xl font-black text-brand">
                        {step.num}
                      </span>
                      <div className="h-4 w-px bg-slate-200" />
                      <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        {step.stageName}
                      </span>
                    </div>

                    <h3 className="mt-2 text-lg font-bold text-navy sm:text-xl">
                      {step.title}
                    </h3>

                    <div className="mt-3 inline-flex items-center gap-1.5 rounded-md bg-slate-100 px-2.5 py-1 font-mono text-[10px] font-semibold text-slate-700">
                      <span>Responsible:</span>
                      <span className="text-navy font-bold">{step.role}</span>
                    </div>
                  </div>

                  {/* Column 2: Overview & Technical Specs Checklist */}
                  <div className={step.image ? "lg:col-span-4" : "lg:col-span-8"}>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {step.summary}
                    </p>

                    <div className="mt-4 rounded-lg border border-slate-100 bg-slate-50/70 p-3.5">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
                        Technical Standards Applied
                      </span>
                      <ul className="space-y-2 text-xs text-slate-700">
                        {step.technicalSpecs.map((spec, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="h-3.5 w-3.5 text-brand shrink-0 mt-0.5" />
                            <span className="leading-snug">{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Column 3: Contextual Industrial Photography */}
                  {step.image && (
                    <div className="lg:col-span-4 space-y-4">
                      <div>
                        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
                          <Image
                            src={step.image}
                            alt={step.imageCaption || step.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 360px"
                            className="object-cover"
                          />
                        </div>
                        {step.imageCaption && (
                          <span className="mt-1.5 block font-mono text-[10px] text-slate-400">
                            {step.imageCaption}
                          </span>
                        )}
                      </div>

                      {/* Optional Secondary Macro Detail (e.g. Fastener EPDM Washer) */}
                      {step.secondaryImage && (
                        <div>
                          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
                            <Image
                              src={step.secondaryImage}
                              alt={step.secondaryCaption || "Technical detail"}
                              fill
                              sizes="(max-width: 1024px) 100vw, 360px"
                              className="object-cover"
                            />
                          </div>
                          {step.secondaryCaption && (
                            <span className="mt-1.5 block font-mono text-[10px] text-slate-400">
                              {step.secondaryCaption}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Operational Clarity Note */}
          <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:p-5 text-xs text-slate-600 sm:text-sm">
            <span className="font-bold text-navy">Service Model Note: </span>
            Durawin operates as a primary-steel manufacturing facility supplying customized roofing sheets, purlins, and drainage systems. Structural fabrication and roofing erection are performed on site by client-appointed contractors or certified regional installation partners introduced through our network.
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4 — PROJECT TYPES (Residential, Commercial, Industrial)
      ───────────────────────────────────────────────────────────── */}
      <section id="sectors" className="relative overflow-hidden py-14 sm:py-20 scroll-mt-20 border-b border-slate-200/80 bg-slate-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="max-w-2xl">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-brand">
              SECTOR EXPERTISE
            </span>
            <h2 className="mt-1.5 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl lg:text-4xl">
              Proven Across All Building Types
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              From architectural residences to commercial arcades and heavy manufacturing bays.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {applications.map((app) => (
              <div
                key={app.title}
                className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs transition hover:border-slate-300 hover:shadow-sm"
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
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-brand">
                      {app.subtitle}
                    </span>
                    <h3 className="mt-1 text-lg font-bold text-navy">
                      {app.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                      {app.desc}
                    </p>
                  </div>
                </div>

                <div className="border-t border-slate-100 px-6 py-3.5">
                  <Link
                    href={app.link}
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-navy hover:text-brand"
                  >
                    <span>View Related Products</span>
                    <ArrowRight className="h-3.5 w-3.5" />
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
      <section id="faq" className="relative overflow-hidden py-14 sm:py-20 scroll-mt-20 border-b border-slate-200/80 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-8">
          <div className="text-center">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-brand">
              CUSTOMER ASSISTANCE
            </span>
            <h2 className="mt-1.5 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl lg:text-4xl">
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
      <section className="relative overflow-hidden bg-navy-dark px-4 py-14 text-white sm:px-8 sm:py-20">
        <div className="pointer-events-none absolute inset-0 opacity-15 bg-grid-pattern" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <span className="font-mono text-xs font-semibold tracking-wider text-gold uppercase">
                DIRECT PALAKKAD MANUFACTURING UNIT
              </span>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
                Planning a Roofing Project?
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
                Contact our factory technical desk in Palakkad for millimeter-custom shearing, primary coil certifications, and certified contractor partner introductions across Kerala.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact#enquiry"
                  className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-brand px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-white hover:text-navy"
                >
                  <span>Request a Quotation</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href={`tel:+91${site.phone}`}
                  className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
                >
                  <Phone className="h-4 w-4 text-gold" />
                  <span>Call: +91 {site.phone}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-gold">
                  Direct Factory Assurance
                </h3>
                <ul className="mt-4 space-y-3 text-xs text-slate-300">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>JSW &amp; Jindal primary certified steel</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>Custom lengths cut up to 12 meters</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>Direct fleet delivery across all 14 districts</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
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
