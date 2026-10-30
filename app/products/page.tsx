import Image from "next/image";
import Link from "next/link";
import UIcon, { UIconName } from "@/components/UIcon";
import { WhyChoose } from "@/components/sections";
import { CadDimensionMarks, SheetProfileWatermark, WatermarkText } from "@/components/IndustrialBackgrounds";
import ExpandableText from "@/components/ExpandableText";

export const metadata = { title: "Products & Engineering Specifications | Durawin" };

const productFeatures: { num: string; title: string; desc: string; icon: UIconName }[] = [
  { num: "01", title: "Superior Yield Strength", desc: "Engineered to withstand heavy monsoon loads and wind shear", icon: "shield-check" },
  { num: "02", title: "Advanced Anti-Corrosion", desc: "Galvanized zinc and multi-layer primer protection", icon: "droplets" },
  { num: "03", title: "Precision CNC Sizing", desc: "Custom lengths cut to order with zero joint leakage", icon: "ruler" },
  { num: "04", title: "Architectural Finishes", desc: "Fade-resistant polyester coatings in curated tones", icon: "palette" },
];

const roofingProducts = [
  {
    id: "trussfold",
    slug: "roofing-sheets",
    code: "DW-ROOF-PRO",
    category: "EXTERIOR ROOFING",
    title: "Trussfold Roofing Sheets",
    desc: "Heavy-duty trapezoidal steel sheets engineered with deep water-discharge crests and 550 MPa high-tensile strength for superior load-bearing capacity.",
    image: "/images/product-roofing-standard.jpg",
    specs: [
      { label: "Profile Crest", value: "Trussfold 1000/28" },
      { label: "Sheet Gauge", value: "0.30 mm – 0.50 mm" },
      { label: "Base Metal", value: "Primary Steel (IS 513)" },
      { label: "Span Length", value: "Custom cut up to 12 m" },
    ],
    benefits: [
      "Deep water drainage channels prevent backflow",
      "Custom sheared zero-joint lengths eliminate leak points",
    ],
    enquiryValue: "trussfold",
  },
  {
    id: "liner-sheets",
    slug: "liner-sheets",
    code: "DW-LINER-PRO",
    category: "INTERIOR CEILINGS & CLADDING",
    title: "Liner Sheets",
    desc: "Precision multi-rib steel sheets designed for architectural interior ceilings, exterior roof eaves soffits, and washable wall partition panels.",
    image: "/images/product-liner-standard.jpg",
    specs: [
      { label: "Cover Width", value: "1110 mm wide coverage" },
      { label: "Rib Dimensions", value: "50.5 mm pitch • 3.5 mm depth" },
      { label: "Surface Finish", value: "Washable architectural coating" },
      { label: "Applicable Uses", value: "Ceilings, Soffits & Partitions" },
    ],
    benefits: [
      "Broad 1110 mm width reduces joints and installation time",
      "Impervious to moisture and sag — zero maintenance",
    ],
    enquiryValue: "liner-sheets",
  },
  {
    id: "colour-coated",
    slug: "colour-coated-sheets",
    code: "DW-COLOR-PLUS",
    category: "PRE-PAINTED STEEL",
    title: "Colour Coated Sheets",
    desc: "Pre-painted high-tensile steel sheets finished with UV-stabilized architectural pigments that preserve vibrance against harsh tropical sun and monsoon downpours.",
    image: "/images/product-colour-coated-standard.jpg",
    specs: [
      { label: "Coating Chemistry", value: "Siliconized Polyester / PVDF" },
      { label: "Topcoat Thickness", value: "20 – 25 µm baked topcoat" },
      { label: "Corrosion Shield", value: "1000+ hrs salt spray (ASTM B117)" },
      { label: "Curated Colours", value: "Blue, Red, Grey, Green, White" },
    ],
    benefits: [
      "Solar reflective pigments reduce under-roof heat buildup",
      "Multi-stage oven baked paint prevents peeling or chalking",
    ],
    enquiryValue: "colour-coated",
  },
  {
    id: "galvanized",
    slug: "galvanized-corrugated-sheets",
    code: "DW-GALV-SHIELD",
    category: "HEAVY-DUTY INDUSTRIAL",
    title: "Galvanized Corrugated Sheets",
    desc: "Hot-dip zinc-coated sinusoidal steel sheets providing heavy sacrificial rust protection for agricultural sheds, farm buildings, and industrial warehouses.",
    image: "/images/product-galvanized-standard.jpg",
    specs: [
      { label: "Manufacturing Standard", value: "IS 277 certified galvanizing" },
      { label: "Zinc Protection", value: "Up to 120 g/m² sacrificial mass" },
      { label: "Corrugation Profile", value: "8/3 sinusoidal (75 mm pitch)" },
      { label: "Steel Grade", value: "Full-Hard G550 primary steel" },
    ],
    benefits: [
      "Sacrificial zinc self-heals cut edges and punch holes",
      "High sinusoidal corrugation stiffness with wide purlin spans",
    ],
    enquiryValue: "galvanized",
  },
];

const frameworkProducts = [
  {
    id: "gp-pipes",
    slug: "gp-pipes",
    code: "DW-GP-PIPE",
    category: "STRUCTURAL FRAMEWORK",
    title: "GP Pipes",
    desc: "Pre-coated steel hollow pipes designed for roof purlins, rafters, and structural trusses with a factory pre-applied protective coating.",
    image: "/images/product-card-pipes-cover.jpg",
    imageFit: "cover" as const,
    specs: [
      { label: "Section Profiles", value: "Square (SHS) & Rectangular (RHS)" },
      { label: "Authorized Source", value: "APL Apollo & Primary Mills" },
      { label: "Coating & Finish", value: "Pre-applied protective coating" },
      { label: "Stock Length", value: "6.0 meters (20 ft) ready stock" },
    ],
    benefits: [
      "Factory pre-applied protective coating",
      "High strength-to-weight purlin geometry",
    ],
    enquiryValue: "gp-pipes",
  },
  {
    id: "ridge-flashing",
    slug: "roof-ridge-flashing",
    code: "DW-RIDGE-PRO",
    category: "ROOFING ACCESSORIES",
    title: "Roof Ridge Flashing",
    desc: "Pre-painted steel apex flashing engineered to cover and seal the gap where opposing roof slopes meet, providing complete weatherproofing against driving rain.",
    image: "/images/product-ridge-flashing.jpg",
    imageFit: "contain" as const,
    specs: [
      { label: "Product Category", value: "Roofing Accessories" },
      { label: "Standard Length", value: "3.0 meters (approx 10 ft)" },
      { label: "Surface Finish", value: "Pre-painted color coated steel" },
      { label: "Profile Purpose", value: "Apex slope gap weather sealing" },
    ],
    benefits: [
      "Seals apex gap between roof slopes",
      "Color-matched to roofing profiles",
    ],
    enquiryValue: "ridge-flashing",
  },
  {
    id: "gutters",
    slug: "rainwater-gutters",
    code: "DW-GUTTER-SYS",
    category: "ROOF DRAINAGE SYSTEMS",
    title: "Rainwater Gutters & Accessories",
    desc: "High-capacity eaves gutters and matched drainage accessories engineered to channel torrential rainfall, prevent facade erosion, and direct water into harvesting tanks.",
    image: "/images/product-rainwater-gutter.jpg",
    imageFit: "cover" as const,
    specs: [
      { label: "Gutter Profile", value: "140 mm high-flow eaves trough" },
      { label: "Downpipe Diameter", value: "75 mm & 110 mm discharge" },
      { label: "Material Grade", value: "UV-stabilized all-weather uPVC" },
      { label: "Joint Sealing", value: "EPDM leak-proof gasket seals" },
    ],
    benefits: [
      "High-flow trough prevents roof edge overflow",
      "Complete matched fittings, angles & brackets",
    ],
    enquiryValue: "gutters",
  },
];

const gutterAccessories = [
  {
    id: "gutter-outlet",
    slug: "gutter-running-outlet",
    code: "DW-ACC-OUTLET",
    title: "Rainwater Outlet Connector",
    desc: "Directs water runoff from the horizontal eaves gutter into the vertical downpipe.",
    image: "/images/product-gutter-outlet.jpg",
    enquiryValue: "gutter-outlet",
  },
  {
    id: "gutter-endcap",
    slug: "gutter-end-cap",
    code: "DW-ACC-ENDCAP",
    title: "Gutter End Cap",
    desc: "Seals the open end of the eaves gutter profile, preventing water overflow and spillage.",
    image: "/images/product-gutter-endcap.jpg",
    enquiryValue: "gutter-endcap",
  },
  {
    id: "gutter-corner",
    slug: "gutter-corner-angle",
    code: "DW-ACC-CORNER",
    title: "90° Gutter Corner Angle",
    desc: "Joins two eaves gutter sections at 90-degree building corners for continuous drainage.",
    image: "/images/product-gutter-corner.jpg",
    enquiryValue: "gutter-corner",
  },
  {
    id: "gutter-bracket",
    slug: "gutter-support-bracket",
    code: "DW-ACC-BRACKET",
    title: "Gutter Support Bracket",
    desc: "Mounts and cradles the eaves gutter trough firmly against the roof fascia board.",
    image: "/images/product-gutter-bracket.jpg",
    enquiryValue: "gutter-bracket",
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
              className="hero-rise inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white/90 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-navy shadow-xs backdrop-blur"
            >
              <UIcon name="layers" className="text-xs text-brand" /> PRODUCT CATALOGUE &bull; 2026 SPEC
            </span>
            <h1
              style={{ "--hero-delay": "0.1s" } as React.CSSProperties}
              className="hero-rise mt-3 text-[clamp(2rem,7vw,2.85rem)] font-extrabold uppercase leading-[0.98] tracking-[-0.028em] text-navy sm:mt-4 sm:text-5xl lg:text-[3.5rem]"
            >
              Engineered<br />
              <span className="text-brand">Roofing & Liner Systems</span>
            </h1>
            <p
              style={{ "--hero-delay": "0.22s" } as React.CSSProperties}
              className="hero-rise mt-3.5 max-w-sm text-sm font-medium leading-relaxed text-slate-700 sm:mt-4 sm:max-w-md sm:text-base"
            >
              Precision-profiled roofing sheets and interior liner sheets manufactured with primary high-tensile steel coils, tailored cut lengths, and certified corrosion resistance.
            </p>
            <div
              style={{ "--hero-delay": "0.36s" } as React.CSSProperties}
              className="hero-rise mt-6 sm:mt-8 flex flex-wrap items-center gap-3"
            >
              <Link
                href="/contact"
                className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-200 ease-out hover:bg-brand hover:shadow-md active:scale-[0.98]"
              >
                Request Custom Quote <UIcon name="arrow-right" className="text-sm transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <a
                href="#catalogue"
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-slate-300 bg-white/90 px-6 py-3.5 text-sm font-semibold text-navy shadow-xs backdrop-blur transition-all duration-200 ease-out hover:border-slate-400 hover:bg-white active:scale-[0.98]"
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
          {productFeatures.map(({ num, title, desc, icon }, i) => (
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

      {/* 3. Product Catalogue — Consistent Horizontal Product Cards on Desktop */}
      <section id="catalogue" className="relative overflow-hidden bg-slate-50/70 pb-12 pt-12 sm:pb-16 sm:pt-16 bg-paper-grain scroll-mt-20">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-blueprint-grid opacity-25" />
        <SheetProfileWatermark className="absolute -top-6 right-0 -z-10 w-[700px] max-w-full opacity-30 hidden md:block" />
        <WatermarkText text="SPECIFICATIONS" tone="light" className="absolute -top-3 right-4 sm:top-2 sm:right-8 -z-10 opacity-70" />

        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div data-reveal className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-navy sm:px-3.5">
                <UIcon name="sparkles" className="text-xs text-brand" /> Manufacturing Lineup
              </span>
              <h2 className="mt-2.5 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl lg:text-4xl">
                Manufactured Roofing & Liner Sheets
              </h2>
              <p className="mt-1 text-sm text-slate-600 sm:text-base">
                Engineered for Residential Villas, Commercial Complexes, and Industrial Facilities
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-6 sm:mt-10 sm:space-y-8">
            {roofingProducts.map((p, i) => (
              <div
                key={p.id}
                id={p.id}
                data-reveal
                style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
                className="group relative scroll-mt-24 overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs transition-all duration-300 hover:border-brand/40 hover:shadow-md lg:grid lg:grid-cols-[340px_1fr]"
              >
                {/* Left: Dedicated Product Showcase Stage with Seamless Pure Framing */}
                <div className="relative aspect-[16/11] w-full bg-gradient-to-br from-slate-50 via-slate-50/70 to-slate-100/50 p-4 sm:p-5 lg:aspect-auto lg:h-full lg:min-h-[290px] flex items-center justify-center border-b border-slate-100 lg:border-b-0 lg:border-r overflow-hidden">
                  <div className="pointer-events-none absolute inset-0 bg-blueprint-grid opacity-10" />
                  <div className="relative flex h-full w-full min-h-[200px] max-h-[250px] max-w-[290px] items-center justify-center rounded-xl border border-slate-200/80 bg-white p-2.5 shadow-2xs transition-all duration-300 group-hover:border-brand/40 group-hover:shadow-xs">
                    <div className="relative h-full w-full">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 300px"
                        className="object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>

                {/* Right: Structured Content Area */}
                <div className="flex flex-col justify-between p-5 sm:p-7">
                  <div>
                    {/* 1. Small product category & code */}
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-brand">
                        {p.category}
                      </span>
                      <span className="text-slate-300">•</span>
                      <span className="text-[10px] font-semibold text-slate-500">
                        {p.code}
                      </span>
                    </div>

                    {/* 2. Product Name */}
                    <h3 className="mt-1.5 text-xl font-extrabold tracking-tight text-navy sm:text-2xl">
                      <Link href={`/products/${p.slug}`} className="transition-colors hover:text-brand">
                        {p.title}
                      </Link>
                    </h3>

                    {/* 3. One concise description */}
                    <ExpandableText
                      text={p.desc}
                      className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:text-sm"
                      mobileLines={2}
                      desktopLines={2}
                      minChars={110}
                    />

                    {/* 4. Three or four important specification fields in a readable grid */}
                    <div className="mt-4 grid grid-cols-2 gap-3 rounded-xl border border-slate-100 bg-slate-50/70 p-3 sm:grid-cols-4 sm:p-3.5">
                      {p.specs.map((s) => (
                        <div key={s.label} className="min-w-0">
                          <span className="block text-[10px] uppercase tracking-wider text-slate-400 truncate">
                            {s.label}
                          </span>
                          <span className="mt-0.5 block text-xs font-bold text-navy truncate">
                            {s.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* 5. Relevant benefits */}
                    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-slate-600">
                      {p.benefits.map((b) => (
                        <span key={b} className="inline-flex items-center gap-1.5">
                          <UIcon name="check-circle" className="text-xs text-brand shrink-0" />
                          <span>{b}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 6. Consistent Action Area */}
                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <Link
                        href={`/contact?product=${p.enquiryValue}#enquiry`}
                        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-navy px-5 py-2.5 text-xs font-bold text-white shadow-xs transition-all duration-200 ease-out hover:bg-brand active:scale-[0.98]"
                      >
                        <span>Enquire About Product</span>
                        <UIcon name="arrow-right" className="text-xs transition-transform duration-200 group-hover:translate-x-0.5" />
                      </Link>

                      <Link
                        href={`/products/${p.slug}`}
                        className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-xs font-bold text-navy shadow-xs transition-all duration-200 ease-out hover:border-navy hover:bg-slate-50 active:scale-[0.98]"
                      >
                        <span>View Specifications</span>
                        <UIcon name="arrow-right" className="text-xs" />
                      </Link>
                    </div>

                    <span className="hidden text-[11px] font-medium text-slate-400 sm:inline-block">
                      Palakkad Direct Dispatch
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Lower Product Categories: Structural GP Pipes & Rainwater Accessories */}
      <section id="structural-framework" className="relative overflow-hidden bg-white py-12 sm:py-16 scroll-mt-20 bg-paper-grain border-t border-slate-200/80">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-blueprint-grid opacity-20" />
        <WatermarkText text="FRAMEWORK" tone="light" className="absolute -top-3 right-4 sm:top-2 sm:right-8 -z-10 opacity-70" />

        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div data-reveal className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-end">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-navy sm:px-3.5">
                <UIcon name="box" className="text-xs text-brand" /> Structural Framework & Accessories
              </span>
              <h2 className="mt-2.5 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl lg:text-4xl">
                Structural GP Pipes, Flashings & Rainwater Accessories
              </h2>
              <p className="mt-1 text-sm text-slate-600 sm:text-base">
                Engineered purlin pipes, apex ridge flashings, and complete rainwater drainage systems to complement Durawin roofing & liner sheets
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-10 lg:grid-cols-3 lg:gap-6">
            {frameworkProducts.map((p, i) => (
              <div
                key={p.id}
                id={p.id}
                data-reveal="scale"
                style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs transition-all duration-300 hover:border-brand/40 hover:shadow-md sm:p-7 scroll-mt-24"
              >
                <div>
                  {/* Fixed Image Container Matching Homepage Exactly */}
                  <div className="relative aspect-[16/11] w-full overflow-hidden rounded-xl border border-slate-200/80 bg-[#F8FAFC]">
                    <div className="pointer-events-none absolute inset-0 bg-blueprint-grid opacity-15" />
                    <div
                      className={`relative flex h-full w-full items-center justify-center ${
                        p.imageFit === "contain" ? "p-4 sm:p-5" : ""
                      }`}
                    >
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 560px"
                        className={`transition-transform duration-500 ease-out group-hover:scale-105 ${
                          p.imageFit === "cover" ? "object-cover object-center" : "object-contain object-center"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Header info */}
                  <div className="mt-4">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-brand">
                        {p.category}
                      </span>
                      <span className="text-slate-300">•</span>
                      <span className="text-[10px] font-semibold text-slate-500">
                        {p.code}
                      </span>
                    </div>

                    <h3 className="mt-1.5 text-xl font-extrabold tracking-tight text-navy sm:text-2xl">
                      <Link href={`/products/${p.slug}`} className="transition-colors hover:text-brand">
                        {p.title}
                      </Link>
                    </h3>

                    <ExpandableText
                      text={p.desc}
                      className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:text-sm"
                      mobileLines={2}
                      desktopLines={2}
                      minChars={110}
                    />

                    {/* 4 Specs */}
                    <div className="mt-4 grid grid-cols-2 gap-2.5 rounded-xl border border-slate-100 bg-slate-50/70 p-3 text-xs">
                      {p.specs.map((s) => (
                        <div key={s.label} className="min-w-0">
                          <span className="block text-[10px] uppercase text-slate-400 truncate">
                            {s.label}
                          </span>
                          <span className="mt-0.5 block text-[11px] font-bold text-navy truncate">
                            {s.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Benefits */}
                    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-slate-600">
                      {p.benefits.map((b) => (
                        <span key={b} className="inline-flex items-center gap-1.5">
                          <UIcon name="check-circle" className="text-xs text-brand shrink-0" />
                          <span>{b}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <Link
                      href={`/contact?product=${p.enquiryValue}#enquiry`}
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-navy px-5 py-2.5 text-xs font-bold text-white shadow-xs transition-all duration-200 ease-out hover:bg-brand active:scale-[0.98]"
                    >
                      <span>Enquire About Product</span>
                      <UIcon name="arrow-right" className="text-xs transition-transform duration-200 group-hover:translate-x-0.5" />
                    </Link>

                    <Link
                      href={`/products/${p.slug}`}
                      className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-xs font-bold text-navy shadow-xs transition-all duration-200 ease-out hover:border-navy hover:bg-slate-50 active:scale-[0.98]"
                    >
                      <span>View Specifications</span>
                      <UIcon name="arrow-right" className="text-xs" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Rainwater Drainage Accessories Sub-Grid */}
          <div className="mt-14 border-t border-slate-200/80 pt-10">
            <div data-reveal className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-end mb-6">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-navy sm:px-3.5">
                  <UIcon name="sparkles" className="text-xs text-brand" /> Precision Eaves Fittings
                </span>
                <h3 className="mt-2 text-xl font-extrabold tracking-tight text-navy sm:text-2xl">
                  Rainwater Gutter Accessories & Distinct Fittings
                </h3>
                <p className="mt-1 text-xs text-slate-600 sm:text-sm">
                  Precision-molded UV-stabilized fittings engineered to complete the Durawin eaves gutter drainage system
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {gutterAccessories.map((acc, i) => (
                <div
                  key={acc.id}
                  id={acc.id}
                  data-reveal="scale"
                  style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-4 shadow-xs transition-all duration-300 hover:border-brand/40 hover:shadow-md sm:p-5"
                >
                  <div>
                    {/* Compact Image Container Matching Homepage Exactly */}
                    <div className="relative aspect-[16/11] w-full overflow-hidden rounded-xl border border-slate-200/80 bg-[#F8FAFC]">
                      <div className="pointer-events-none absolute inset-0 bg-blueprint-grid opacity-15" />
                      <div className="relative flex h-full w-full items-center justify-center p-3.5 sm:p-4">
                        <Image
                          src={acc.image}
                          alt={acc.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                          className="object-contain object-center transition-transform duration-500 ease-out group-hover:scale-105"
                        />
                      </div>
                    </div>

                    {/* Metadata & Title */}
                    <div className="mt-3.5">
                      <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
                        <span className="font-semibold text-brand">GUTTER ACCESSORY</span>
                        <span>•</span>
                        <span>{acc.code}</span>
                      </div>

                      <h4 className="mt-1 text-base font-bold text-navy">
                        <Link href={`/products/${acc.slug}`} className="transition-colors hover:text-brand">
                          {acc.title}
                        </Link>
                      </h4>

                      <p className="mt-1 text-xs leading-relaxed text-slate-600">
                        {acc.desc}
                      </p>
                    </div>
                  </div>

                  {/* Actions: Enquiry CTA & View Specs */}
                  <div className="mt-4 flex flex-col gap-2 border-t border-slate-100 pt-3">
                    <Link
                      href={`/contact?product=${acc.enquiryValue}#enquiry`}
                      className="inline-flex min-h-9 items-center justify-center gap-1.5 rounded-full bg-navy px-3.5 py-1.5 text-xs font-bold text-white shadow-xs transition-all duration-200 ease-out hover:bg-brand active:scale-[0.98]"
                    >
                      <span>Enquire About Fitting</span>
                      <UIcon name="arrow-right" className="text-xs" />
                    </Link>
                    <Link
                      href={`/products/${acc.slug}`}
                      className="inline-flex min-h-8 items-center justify-center gap-1 text-[11px] font-semibold text-slate-500 transition-colors hover:text-navy"
                    >
                      <span>View Specifications</span>
                      <UIcon name="arrow-right" className="text-[10px]" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Applications */}
      <section id="applications" className="relative overflow-hidden bg-slate-50/70 py-12 sm:py-16 scroll-mt-20 bg-paper-grain border-t border-slate-200/80">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-roof-profile-light opacity-30" />
        <WatermarkText text="SECTORS" tone="light" className="absolute -top-3 right-4 sm:top-2 sm:right-8 -z-10 opacity-70" />
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div data-reveal className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-end">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-navy sm:px-3.5">
                <UIcon name="shield-check" className="text-xs text-brand" /> Performance In Field
              </span>
              <h2 className="mt-2.5 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl lg:text-4xl">
                Versatile Sector Deployment
              </h2>
              <p className="mt-1 text-sm text-slate-600 sm:text-base">
                Engineered to perform reliably across residential, commercial, and heavy-duty industrial settings
              </p>
            </div>
          </div>

          <div className="-mx-4 mt-6 flex scroll-pl-4 snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 pt-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:mt-10 sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 sm:pt-0">
            {productApplications.map((app, i) => (
              <div
                key={app.title}
                data-reveal="scale"
                style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}
                className="group relative w-[82%] max-w-[340px] shrink-0 snap-start overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:w-auto sm:max-w-none sm:shrink"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={app.image}
                    alt={app.title}
                    fill
                    sizes="(max-width: 640px) 82vw, (max-width: 1023px) 33vw, 380px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/50 px-2.5 py-0.5 text-[10px] font-bold text-white backdrop-blur">
                    SECTOR {app.num}
                  </span>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg font-bold text-navy sm:text-xl">{app.title}</h3>
                  <ExpandableText
                    text={app.desc}
                    className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:text-sm"
                    mobileLines={2}
                    desktopLines={2}
                    minChars={100}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Shared Why Choose matrix */}
      <WhyChoose />

      {/* {this is to inform you to put the floores on the ground and the seiling on the terrace, by doing this it should not look so preety but it should also looks so good even in the tiles and the game it should look this is to  twi instead os this is looks so good even if this comes to the life this is the things we have to take it more all of this [eo[le a]]} */}
      {/* 7. Custom Solutions Banner — Architectural dark console */}
      <section id="custom" className="relative scroll-mt-20 overflow-hidden bg-navy-dark px-4 py-12 text-white sm:px-8 sm:py-16">
        <div className="pointer-events-none absolute inset-0 opacity-15 bg-grid-pattern" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-roof-profile-dark opacity-35" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-blueprint-grid-dark opacity-20" />
        <WatermarkText text="BESPOKE" tone="dark" className="absolute -bottom-3 right-4 sm:bottom-0 sm:right-8 -z-10" />
        
        <div data-reveal className="relative mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-[11px] font-semibold text-gold">
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
                  className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-bold text-white shadow-md transition hover:bg-white hover:text-navy"
                >
                  Consult Factory Engineers <UIcon name="arrow-right" className="text-sm" />
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
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl bg-black/60 p-3 text-xs backdrop-blur">
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
