import Image from "next/image";
import HeroCarousel from "@/components/HeroCarousel";
import HeroFeatures from "@/components/HeroFeatures";
import ManufacturedSheetsSection from "@/components/ManufacturedSheetsSection";
import StatsMarquee from "@/components/StatsMarquee";
import { CallStrip, WhyChoose } from "@/components/sections";
import { ArrowRight, BadgeCheck, Building2, CheckCircle2, Factory, Home as HomeIcon, Store } from "lucide-react";
import { CadDimensionMarks, WatermarkText } from "@/components/IndustrialBackgrounds";

const applications = [
  { title: "Household Roofing", desc: "Stylish, reliable roofing for modern homes.", image: "/images/app-household.jpg", Icon: HomeIcon },
  { title: "Commercial Roofing", desc: "Ideal for showrooms, warehouses and complexes.", image: "/images/app-commercial.jpg", Icon: Store },
  { title: "Industrial Roofing", desc: "Built for large industrial buildings and sheds.", image: "/images/app-industrial.jpg", Icon: Factory },
];

const partners = [
  { name: "JSW Steel", src: "/images/partners/jsw.webp", w: 451, h: 215 },
  { name: "APL Apollo", src: "/images/partners/apl-apollo.webp", w: 860, h: 344 },
  { name: "Jindal Steel", src: "/images/partners/jindal.webp", w: 378, h: 177 },
];


export default function Home() {
  return (
    <>
      {/* 1. Hero Carousel — auto-advancing slides with crossfade */}
      <HeroCarousel />

      {/* 2. Feature card overlapping the hero */}
      <HeroFeatures />  

      {/* 2b. Manufactured Sheet Products — Roofing Sheets & Liner Sheets */}
      <ManufacturedSheetsSection />

      {/* 3. Our Applications — swipeable row on phones, 3-column grid from sm */}
      <section className="relative overflow-hidden bg-slate-50/70 pb-10 pt-10 sm:pb-16 sm:pt-14 bg-paper-grain">
        {/* Subtle engineering blueprint grid & watermark */}
        <div className="pointer-events-none absolute inset-0 bg-blueprint-grid opacity-35 [mask-image:linear-gradient(to_bottom,black_50%,transparent)]" />
        <WatermarkText text="TRUSSFOLD" tone="light" className="absolute -top-3 right-4 sm:top-2 sm:right-8 -z-10" />
        <div className="absolute inset-x-0 top-0 h-px bg-slate-200/80" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
          <div data-reveal className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-end">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-navy sm:px-3.5">
                <Building2 className="h-3.5 w-3.5 text-brand" /> Sector Solutions
              </span>
              <h2 className="mt-2.5 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl lg:text-4xl">
                Our Applications
              </h2>
              <p className="mt-1 text-sm text-slate-600 sm:text-base">
                Engineered roofing and liner systems for residences, commercial spaces, and industrial hubs
              </p>
            </div>
          </div>

          <div className="-mx-4 mt-6 flex scroll-pl-4 snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 pt-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:mt-10 sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 sm:pt-0">
            {applications.map(({ title, desc, image, Icon }, i) => {
              const indexCode = `0${i + 1}`;
              const sectorCode = i === 0 ? "RESIDENTIAL" : i === 1 ? "COMMERCIAL" : "INDUSTRIAL";
              return (
                <div
                  key={title}
                  data-reveal="scale"
                  style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}
                  className="group relative block aspect-[4/5] w-[82%] max-w-[340px] shrink-0 snap-start overflow-hidden rounded-2xl border border-slate-200/80 bg-navy-dark shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl sm:aspect-[4/4.5] sm:w-auto sm:max-w-none sm:shrink"
                >
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 640px) 82vw, (max-width: 1023px) 33vw, 380px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/95 via-navy-dark/35 to-black/20" />

                  {/* Top metadata strip */}
                  <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 text-navy shadow-sm backdrop-blur transition-transform duration-300 group-hover:bg-brand group-hover:text-white">
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                    <span className="rounded-full border border-white/20 bg-black/40 px-2.5 py-1 font-mono text-[10px] font-bold tracking-widest text-white backdrop-blur">
                      {`${indexCode} // ${sectorCode}`}
                    </span>
                  </div>

                  {/* Bottom description */}
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <h3 className="text-xl font-extrabold tracking-tight text-white transition-colors group-hover:text-gold sm:text-2xl">
                      {title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-200 sm:text-sm">
                      {desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="mt-2 flex items-center gap-1 text-xs font-medium text-slate-500 sm:hidden">
            Swipe to see more <ArrowRight className="h-3 w-3" />
          </p>
        </div>
      </section>

      {/* 3b. Why choose + call strip */}
      <WhyChoose />
      <CallStrip />

      {/* 4. Raw material partners + coils */}
      <section className="relative overflow-hidden bg-white pb-10 pt-10 sm:pb-16 sm:pt-14 bg-paper-grain">
        {/* Subtle roofing profile linework & watermark */}
        <div className="pointer-events-none absolute inset-0 bg-roof-profile-light opacity-35" />
        <WatermarkText text="PRIMARY STEEL" tone="light" className="absolute -top-3 right-4 sm:top-2 sm:right-8 -z-10" />
        <div className="absolute inset-x-0 top-0 h-px bg-slate-200/80" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
          <div data-reveal className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-end">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-navy sm:px-3.5">
                <BadgeCheck className="h-3.5 w-3.5 text-brand" /> Sourcing Credibility
              </span>
              <h2 className="mt-2.5 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl lg:text-4xl">
                Raw Material Partners
              </h2>
              <p className="mt-1 text-sm text-slate-600 sm:text-base">
                Manufactured exclusively using certified primary steel coils from industry leaders
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3 sm:mt-10 sm:gap-6">
            {partners.map((p, i) => (
              <div
                key={p.name}
                data-reveal
                style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
                className="group relative flex min-w-0 items-center justify-center rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-md sm:p-8 sm:py-10"
              >
                <div className="flex h-16 w-full items-center justify-center sm:h-24">
                  <Image
                    src={p.src}
                    alt={p.name}
                    width={p.w}
                    height={p.h}
                    className="max-h-12 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105 sm:max-h-18"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 hidden sm:flex items-center justify-between border-t border-slate-100 pt-4">
            <CadDimensionMarks label="PRIMARY STRUCTURAL GRADE" spec="550 MPA HIGH-TENSILE COILS" />
            <CadDimensionMarks label="CORROSION PROTECTION" spec="ZINC + POLYESTER PRIMER" />
          </div>

          {/* Steel coil feature with architectural drafting strip */}
          <div
            data-reveal="scale"
            style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            className="group relative mt-6 overflow-hidden rounded-2xl border border-slate-300/80 bg-slate-900 shadow-xl sm:mt-12"
          >
            <div className="relative min-h-[460px] w-full min-[480px]:min-h-[420px] sm:min-h-[380px] lg:min-h-[420px]">
              {/* Full clarity high-res image showing coils and factory floor clearly */}
              <Image
                src="/images/raw-materials-coils.jpg"
                alt="Galvanized steel coils in Durawin manufacturing plant"
                fill
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-cover object-[50%_75%] sm:object-[50%_80%] transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Subtle natural bottom gradient to ground the console plate */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 via-40% to-transparent pointer-events-none" />
              
              {/* Architectural frosted glass specification console — guarantees 100% text readability while keeping photo clear */}
              <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-6 lg:p-8 flex justify-start">
                <div className="w-full max-w-2xl rounded-xl sm:rounded-2xl border border-white/20 bg-[#051324]/75 p-5 shadow-2xl backdrop-blur-md sm:p-6 lg:p-7">
                  <div className="inline-flex flex-wrap items-center gap-1.5 rounded-full border border-gold/40 bg-black/60 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-gold shadow-xs backdrop-blur sm:text-[11px]">
                    <span>METALLURGICAL SPECIFICATION</span>
                    <span>✦</span>
                    <span>IS 277 / IS 513 CERTIFIED</span>
                  </div>
                  <h3 className="mt-2.5 text-xl font-extrabold tracking-tight text-white sm:text-2xl lg:text-3xl">
                    Premium High-Tensile Steel Coils
                  </h3>
                  <p className="mt-1.5 max-w-xl text-xs leading-relaxed text-slate-200 sm:text-sm">
                    The unyielding foundation of every Durawin roofing sheet. Sourced with optimal zinc coating mass and uniform paint film thickness for decades of corrosion resistance.
                  </p>

                  {/* Technical specification chips */}
                  <div className="mt-4 flex flex-wrap gap-2 sm:gap-2.5">
                    {[
                      "Zero Recycled Scrap Steel",
                      "Uniform Coil Thickness",
                      "Optimal Yield Strength",
                      "Verified Laboratory Quality",
                    ].map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[11px] font-medium text-white shadow-xs backdrop-blur sm:px-3 sm:py-1.5 sm:text-xs"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-gold sm:h-4 sm:w-4" /> {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Continuous Horizontal Stats Marquee */}
      <StatsMarquee />
    </>
  );
}
