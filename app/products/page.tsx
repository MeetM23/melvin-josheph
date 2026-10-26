import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Palette, Ruler, ShieldCheck, Droplets, Sparkles, Layers } from "lucide-react";
import { WhyChoose } from "@/components/sections";
import { CadDimensionMarks, SheetProfileWatermark, WatermarkText } from "@/components/IndustrialBackgrounds";

export const metadata = { title: "Products & Engineering Specifications | Durawin" };

const productFeatures = [
  { num: "01", title: "Superior Yield Strength", desc: "Engineered to withstand heavy monsoon loads and wind shear", Icon: ShieldCheck },
  { num: "02", title: "Advanced Anti-Corrosion", desc: "Galvanized zinc and multi-layer primer protection", Icon: Droplets },
  { num: "03", title: "Precision CNC Sizing", desc: "Custom lengths cut to order with zero joint leakage", Icon: Ruler },
  { num: "04", title: "Architectural Finishes", desc: "Fade-resistant polyester coatings in curated tones", Icon: Palette },
];

const productRange = [
  {
    id: "trussfold",
    num: "01",
    code: "DW-TRUSS-PRO",
    title: "Trussfold Roofing Sheets",
    desc: "Engineered trapezoidal profile offering high structural rigidity, deep water drainage channels, and sleek modern aesthetics.",
    image: "/images/product-trussfold-blue.jpg",
    specs: [
      { label: "Profile", value: "High-Depth Trussfold" },
      { label: "Thickness", value: "0.30 mm to 0.50 mm" },
      { label: "Yield Strength", value: "Up to 550 MPa" },
      { label: "Length", value: "Cut to exact requirement" },
    ],
    tags: ["High load capacity", "Deep drainage trough", "Custom length"],
  },
  {
    id: "colour-coated",
    num: "02",
    code: "DW-COLOR-PLUS",
    title: "Colour Coated Sheets",
    desc: "Pre-painted steel sheets finished with UV-stabilized architectural pigments that preserve vibrance against harsh tropical sun and monsoon downpours.",
    image: "/images/product-colour-coated-red.jpg",
    specs: [
      { label: "Coating", value: "Siliconized Polyester / PVDF" },
      { label: "Finish", value: "Smooth Semi-Gloss" },
      { label: "UV Stability", value: "High Tropical Grade" },
      { label: "Colours", value: "Blue, Terracotta, Grey, Green" },
    ],
    tags: ["Fade-resistant pigments", "Heat-reflective barrier", "Aesthetic finish"],
  },
  {
    id: "galvanized",
    num: "03",
    code: "DW-GALV-SHIELD",
    title: "Galvanized Corrugated Sheets",
    desc: "Hot-dip zinc-coated steel roofing engineered for maximum sacrificial corrosion resistance in agricultural sheds and industrial warehouses.",
    image: "/images/product-galvanized-silver.jpg",
    specs: [
      { label: "Zinc Mass", value: "Up to 120 g/m² (IS 277)" },
      { label: "Base Metal", value: "Cold Rolled Primary Steel" },
      { label: "Corrosion Class", value: "Heavy Industrial Standard" },
      { label: "Recyclability", value: "100% Sustainable Steel" },
    ],
    tags: ["Sacrificial zinc layer", "Impact & rust resistant", "Low maintenance"],
  },
];

const productApplications = [
  { num: "01", title: "Residential Architecture", desc: "Villas, contemporary homes, and car porches requiring clean modern roof lines.", image: "/images/app-household.jpg" },
  { num: "02", title: "Commercial Developments", desc: "Automobile showrooms, retail arcades, and office hubs needing structural finesse.", image: "/images/app-commercial.jpg" },
  { num: "03", title: "Industrial Infrastructure", desc: "Heavy manufacturing plants, logistics warehouses, and distribution sheds.", image: "/images/app-industrial.jpg" },
];

export default function ProductsPage() {
  return (
    <>
      {/* 1. Hero — product photo behind the text, architectural drafting overlay */}
      <section className="relative isolate overflow-hidden bg-white">
        <Image
          src="/images/products-hero.jpg"
          alt="High quality blue trussfold roofing sheets stack"
          fill
          sizes="100vw"
          className="-z-20 object-cover object-[78%_50%] sm:object-[80%_50%]"
          priority
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-white/85 to-transparent sm:bg-gradient-to-r sm:from-white sm:via-white/75 sm:to-transparent" />
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-30 bg-grid-pattern" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-roof-profile-light opacity-40" />
        <WatermarkText text="TRUSSFOLD" tone="light" className="absolute bottom-2 right-4 sm:bottom-4 sm:right-8 -z-10" />
        <div className="absolute bottom-3 left-8 -z-10 hidden lg:block">
          <CadDimensionMarks label="TRUSSFOLD PROFILE 1000/28" spec="IS 513 / IS 277 CERTIFIED" />
        </div>

        <div className="mx-auto flex min-h-[380px] max-w-7xl items-start px-5 pb-24 pt-10 sm:min-h-[440px] sm:items-center sm:px-8 sm:pb-12 sm:pt-6 lg:min-h-[480px]">
          <div className="w-full sm:w-1/2">
            <span
              style={{ "--hero-delay": "0.02s" } as React.CSSProperties}
              className="hero-rise inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white/90 px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-navy shadow-sm backdrop-blur"
            >
              <Layers className="h-3.5 w-3.5 text-brand" /> PRODUCT CATALOGUE &bull; 2026 SPEC
            </span>
            <h1
              style={{ "--hero-delay": "0.1s" } as React.CSSProperties}
              className="hero-rise mt-3 text-[clamp(1.9rem,8vw,2.8rem)] font-extrabold uppercase leading-[1.08] tracking-tight text-navy sm:mt-4 sm:text-5xl lg:text-[3.5rem]"
            >
              Engineered<br />
              <span className="text-brand">Trussfold Systems</span>
            </h1>
            <p
              style={{ "--hero-delay": "0.22s" } as React.CSSProperties}
              className="hero-rise mt-3 max-w-sm text-sm font-medium leading-relaxed text-slate-700 sm:mt-4 sm:max-w-md sm:text-base"
            >
              Precision-profiled roofing sheets manufactured with primary high-tensile steel coils, tailored cut lengths, and certified corrosion resistance.
            </p>
            <div
              style={{ "--hero-delay": "0.36s" } as React.CSSProperties}
              className="hero-rise mt-5 sm:mt-7 flex flex-wrap items-center gap-3"
            >
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-navy px-6 py-3 text-sm font-bold text-white shadow-md transition hover:bg-brand"
              >
                Request Custom Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#catalogue"
                className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-slate-300 bg-white/80 px-5 py-3 text-sm font-semibold text-navy backdrop-blur hover:border-brand hover:text-brand"
              >
                Browse Specs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Technical Quality Metrics Bar — 4-column precision console */}
      <section className="relative z-10 -mt-12 px-4 sm:-mt-10 sm:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xl min-[480px]:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-slate-200">
          {productFeatures.map(({ num, title, desc, Icon }, i) => (
            <div
              key={title}
              data-reveal
              style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
              className="group relative flex flex-col justify-between border-b border-slate-100 p-5 transition-colors hover:bg-slate-50/70 sm:p-6 lg:border-b-0"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-navy transition-colors group-hover:border-brand/40 group-hover:bg-brand/10 group-hover:text-brand">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <span className="font-mono text-xs font-bold text-slate-300">
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

      {/* 3. Product Catalogue — Curated architectural specification cards */}
      <section id="catalogue" className="relative overflow-hidden bg-slate-50/70 pb-12 pt-12 sm:pb-16 sm:pt-16 bg-paper-grain scroll-mt-16">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-blueprint-grid opacity-35" />
        <SheetProfileWatermark className="absolute -top-6 right-0 -z-10 w-[700px] max-w-full opacity-40 hidden md:block" />
        <WatermarkText text="SPECIFICATIONS" tone="light" className="absolute -top-3 right-4 sm:top-2 sm:right-8 -z-10" />

        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div data-reveal className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-navy sm:px-3.5">
                <Sparkles className="h-3.5 w-3.5 text-brand" /> Manufacturing Lineup
              </span>
              <h2 className="mt-2.5 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl lg:text-4xl">
                Product Specifications
              </h2>
              <p className="mt-1 text-sm text-slate-600 sm:text-base">
                Engineered for Residential Villas, Commercial Complexes, and Industrial Facilities
              </p>
            </div>
            <div className="hidden font-mono text-xs text-slate-400 sm:block">
              [ 03 PRODUCT SPECIFICATIONS ]
            </div>
          </div>

          <div className="mt-8 space-y-8 sm:mt-12 sm:space-y-10">
            {productRange.map((p, i) => (
              <div
                key={p.id}
                id={p.id}
                data-reveal
                style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}
                className="group relative scroll-mt-24 overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-4 shadow-sm transition-all duration-300 hover:border-brand/40 hover:shadow-lg sm:p-6"
              >
                <div className="pointer-events-none absolute -bottom-10 -right-10 w-96 h-36 bg-roof-profile-light opacity-25 hidden sm:block" />

                <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-8">
                  {/* Framed Image Container */}
                  <div className="lg:col-span-5">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[10px] border border-[#E5EAF0] bg-[#F8FAFC] p-4 sm:p-6">
                      <div className="pointer-events-none absolute inset-0 bg-blueprint-grid opacity-15" />
                      <div className="absolute left-3 top-3 z-10 flex items-center gap-1.5 sm:left-3.5 sm:top-3.5">
                        <span className="rounded-full bg-navy px-2.5 py-0.5 font-mono text-[10px] font-bold tracking-wider text-white">
                          {p.code}
                        </span>
                        <span className="rounded-full border border-[#E5EAF0] bg-white/95 px-2 py-0.5 font-mono text-[10px] font-semibold text-slate-600 shadow-2xs backdrop-blur-xs">
                          SERIES 0{i + 1}
                        </span>
                      </div>
                      <div className="relative flex h-full w-full items-center justify-center">
                        <Image
                          src={p.image}
                          alt={p.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 440px"
                          className="object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Specification details */}
                  <div className="flex flex-col justify-between lg:col-span-7">
                    <div>
                      <div className="flex items-center gap-2 font-mono text-xs text-brand">
                        <span>SPECIFICATION MATRIX</span>
                        <span>✦</span>
                        <span>PRIMARY GRADE STEEL</span>
                      </div>
                      <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {p.desc}
                      </p>

                      {/* Technical Spec Grid */}
                      <div className="mt-5 grid grid-cols-2 gap-3 rounded-xl border border-slate-100 bg-slate-50/80 p-4 font-mono text-xs">
                        {p.specs.map((s) => (
                          <div key={s.label} className="border-b border-slate-100 pb-2">
                            <span className="text-[10px] uppercase text-slate-400">{s.label}</span>
                            <p className="font-bold text-navy">{s.value}</p>
                          </div>
                        ))}
                      </div>

                      {/* Feature tags */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-navy"
                          >
                            <CheckCircle2 className="h-3.5 w-3.5 text-brand" /> {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-5">
                      <span className="font-mono text-xs text-slate-500">
                        Custom lengths cut to structural millimeter precision
                      </span>
                      <Link
                        href={`/contact?product=${p.id}#enquiry`}
                        className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-navy px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-brand"
                      >
                        Enquire Specifications <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Applications */}
      <section id="applications" className="relative overflow-hidden bg-white py-12 sm:py-16 scroll-mt-20 bg-paper-grain">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-roof-profile-light opacity-30" />
        <WatermarkText text="SECTORS" tone="light" className="absolute -top-3 right-4 sm:top-2 sm:right-8 -z-10" />
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div data-reveal className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-end">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-navy sm:px-3.5">
                <ShieldCheck className="h-3.5 w-3.5 text-brand" /> Performance In Field
              </span>
              <h2 className="mt-2.5 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl lg:text-4xl">
                Versatile Sector Deployment
              </h2>
              <p className="mt-1 text-sm text-slate-600 sm:text-base">
                Engineered to perform reliably across residential, commercial, and heavy-duty industrial settings
              </p>
            </div>
            <div className="hidden font-mono text-xs text-slate-400 sm:block">
              [ TESTED KERALA CLIMATE COMPATIBLE ]
            </div>
          </div>

          <div className="-mx-4 mt-6 flex scroll-pl-4 snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 pt-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:mt-10 sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 sm:pt-0">
            {productApplications.map((app, i) => (
              <div
                key={app.title}
                data-reveal="scale"
                style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}
                className="group relative w-[82%] max-w-[340px] shrink-0 snap-start overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:w-auto sm:max-w-none sm:shrink"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={app.image}
                    alt={app.title}
                    fill
                    sizes="(max-width: 640px) 82vw, (max-width: 1023px) 33vw, 380px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/50 px-2.5 py-0.5 font-mono text-[10px] font-bold text-white backdrop-blur">
                    SECTOR {app.num}
                  </span>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg font-bold text-navy sm:text-xl">{app.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:text-sm">{app.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Shared Why Choose matrix */}
      <WhyChoose />

      {/* 6. Custom Solutions Banner — Architectural dark console */}
      <section id="custom" className="relative scroll-mt-20 overflow-hidden bg-navy-dark px-4 py-12 text-white sm:px-8 sm:py-16">
        <div className="pointer-events-none absolute inset-0 opacity-15 bg-grid-pattern" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-roof-profile-dark opacity-35" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-blueprint-grid-dark opacity-20" />
        <WatermarkText text="BESPOKE" tone="dark" className="absolute -bottom-3 right-4 sm:bottom-0 sm:right-8 -z-10" />
        
        <div data-reveal className="relative mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 font-mono text-[11px] font-semibold text-gold">
                ✦ BESPOKE STRUCTURAL FABRICATION
              </span>
              <h3 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
                Custom Profiling & Precise Length Sizing
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
                Have specific span lengths, gauge thickness requirements, or custom architectural color needs? Our Palakkad manufacturing line profiles sheets to exact millimeters to eliminate site jointing and leakage.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-brand px-6 py-3 text-sm font-bold text-white shadow-md transition hover:bg-white hover:text-navy"
                >
                  Consult Factory Engineers <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-white/5 lg:col-span-5">
              <Image
                src="/images/banner-custom-solutions.jpg"
                alt="Custom roofing sheet solutions"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl bg-black/60 p-3 font-mono text-xs backdrop-blur">
                <span>CNC Profiler Line</span>
                <span className="text-emerald-400 font-bold">● ONLINE</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

