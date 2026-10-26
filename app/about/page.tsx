import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Eye, Factory, Layers, MapPin, ShieldCheck, Target, Trophy, Award } from "lucide-react";
import { CallStrip, Process } from "@/components/sections";

export const metadata = { title: "About Us | 20+ Years of Roofing Excellence | Durawin" };

const highlights = [
  { num: "01", title: "20+ Years", subtitle: "Industrial Heritage in Roofing", Icon: Trophy, tag: "Est. 2004" },
  { num: "02", title: "Palakkad", subtitle: "Strategic Kerala Manufacturing Unit", Icon: MapPin, tag: "Naripotta Plant" },
  { num: "03", title: "100% Primary", subtitle: "Certified Virgin Steel Coils", Icon: Layers, tag: "Grade A Only" },
  { num: "04", title: "Trussfold", subtitle: "High-Rigidity Architectural Ribs", Icon: Factory, tag: "Proprietary Profile" },
];

const story = [
  "Direct sourcing of primary steel coils from verified industry giants (JSW, Jindal, APL Apollo)",
  "Precision automated roll-forming line calibrated for uniform rib depth and zero tensile fatigue",
  "Custom millimetric lengths engineered to eliminate roof leaks and unnecessary site cuts",
  "Comprehensive batch quality audits verifying paint film thickness and zinc layer mass",
];

const pillars = [
  {
    num: "01",
    title: "Our Vision",
    subtitle: "Architectural Endurance",
    Icon: Eye,
    text: "To lead the regional building envelope sector by delivering roofing systems that combine uncompromising metallurgical strength with modern architectural aesthetics.",
  },
  {
    num: "02",
    title: "Our Mission",
    subtitle: "Precision Engineering",
    Icon: Target,
    text: "To manufacture high-performance trussfold sheets utilizing advanced roll-forming technology, providing homeowners and industrial developers with lifelong shelter security.",
  },
  {
    num: "03",
    title: "Our Core Ethics",
    subtitle: "Certified Integrity",
    Icon: ShieldCheck,
    points: [
      "Zero compromise on coil gauge thickness",
      "Transparent batch certification and invoicing",
      "Customer-centric custom length sizing",
      "Consistent on-time regional delivery across Kerala",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      {/* 1. Hero — factory photo behind the text, architectural drafting overlay */}
      <section className="relative isolate overflow-hidden bg-white">
        <Image
          src="/images/about-factory.jpg"
          alt="Durawin manufacturing plant building in Palakkad, Kerala"
          fill
          sizes="100vw"
          className="-z-20 object-cover object-[62%_55%] sm:object-[70%_55%]"
          priority
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-white/85 to-transparent sm:bg-gradient-to-r sm:from-white sm:via-white/70 sm:to-transparent" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/60 via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-30 bg-grid-pattern" />

        <div className="mx-auto flex min-h-[400px] max-w-7xl items-start px-5 pb-28 pt-10 sm:min-h-[460px] sm:items-center sm:px-8 sm:pb-12 sm:pt-6 lg:min-h-[500px]">
          <div className="w-full sm:w-1/2">
            <span
              style={{ "--hero-delay": "0.02s" } as React.CSSProperties}
              className="hero-rise inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white/90 px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-navy shadow-sm backdrop-blur"
            >
              <Award className="h-3.5 w-3.5 text-brand" /> CORPORATE HERITAGE &bull; PALAKKAD
            </span>
            <h1
              style={{ "--hero-delay": "0.1s" } as React.CSSProperties}
              className="hero-rise mt-3 text-[clamp(1.7rem,7vw,2.6rem)] font-extrabold uppercase leading-[1.08] tracking-tight text-navy sm:mt-4 sm:text-5xl lg:text-[3.5rem]"
            >
              Two Decades of<br />
              <span className="text-brand">Roofing Precision</span>
            </h1>
            <p
              style={{ "--hero-delay": "0.22s" } as React.CSSProperties}
              className="hero-rise mt-3 max-w-sm text-sm font-medium leading-relaxed text-slate-700 sm:mt-4 sm:max-w-md sm:text-base"
            >
              Durawin Trafford Sheet Manufacturing is Palakkad’s trusted specialist in high-tensile trussfold steel roofing, serving Kerala with enduring structural products.
            </p>
            <div
              style={{ "--hero-delay": "0.36s" } as React.CSSProperties}
              className="hero-rise mt-5 sm:mt-7 flex flex-wrap items-center gap-3"
            >
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-navy px-6 py-3 text-sm font-bold text-white shadow-md transition hover:bg-brand"
              >
                Connect With Us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Precision Highlights Console — 4-column split grid */}
      <section className="relative z-10 -mt-12 px-4 sm:-mt-10 sm:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xl min-[480px]:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-slate-200">
          {highlights.map(({ num, title, subtitle, Icon, tag }, i) => (
            <div
              key={subtitle}
              data-reveal
              style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
              className="group relative flex flex-col justify-between border-b border-slate-100 p-5 transition-colors hover:bg-slate-50/70 sm:p-6 lg:border-b-0"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-navy transition-colors group-hover:border-brand/40 group-hover:bg-brand/10 group-hover:text-brand">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 font-mono text-[10px] font-semibold text-slate-600">
                      {tag}
                    </span>
                    <span className="font-mono text-xs font-bold text-slate-300">
                      {num}
                    </span>
                  </div>
                </div>
                <p className="mt-4 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                  {title}
                </p>
                <p className="mt-1 text-xs font-medium text-slate-600 sm:text-sm">
                  {subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Our Story — Editorial spread */}
      <section className="relative overflow-hidden bg-white pb-12 pt-12 sm:pb-16 sm:pt-16 bg-paper-grain">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:gap-12 sm:px-8 lg:grid-cols-12">
          {/* Left: Aerial image with architectural framing */}
          <div data-reveal="scale" className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-100 shadow-md lg:col-span-6">
            <Image
              src="/images/about-plant-aerial.jpg"
              alt="Aerial view of the Durawin manufacturing plant in Palakkad"
              fill
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-cover transition-transform duration-700 ease-out hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl bg-black/60 p-3 font-mono text-xs text-white backdrop-blur">
              <span>Palakkad Plant Unit</span>
              <span className="text-gold font-bold">10.6385° N, 76.5412° E</span>
            </div>
          </div>

          {/* Right: Editorial Narrative */}
          <div data-reveal style={{ "--reveal-delay": "120ms" } as React.CSSProperties} className="lg:col-span-6">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-navy">
              ✦ ESTABLISHED CRAFTSMANSHIP
            </span>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl lg:text-4xl">
              Engineered in Kerala, Built for Decades
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              Founded in Naripotta, Palakkad, Durawin has dedicated over two decades to perfecting the roll-formed steel roofing envelope. We pair industrial-grade machinery with authentic primary raw materials to protect residential investments, commercial complexes, and manufacturing facilities across South India.
            </p>

            <div className="mt-6 space-y-3 border-t border-slate-100 pt-5">
              {story.map((s) => (
                <div key={s} className="flex items-start gap-2.5 text-xs text-slate-700 sm:text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <span className="font-medium leading-relaxed">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. What Drives Us (Vision, Mission, Values) — 3-pillar architectural cards */}
      <section className="relative overflow-hidden bg-slate-50/70 pb-12 pt-10 sm:pb-16 sm:pt-14 bg-paper-grain">
        <div className="absolute inset-x-0 top-0 h-px bg-slate-200/80" />
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div data-reveal className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-end">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-navy sm:px-3.5">
                <Target className="h-3.5 w-3.5 text-brand" /> Core Philosophy
              </span>
              <h2 className="mt-2.5 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl lg:text-4xl">
                What Drives Durawin
              </h2>
              <p className="mt-1 text-sm text-slate-600 sm:text-base">
                Our vision, mission, and industrial standard of ethics
              </p>
            </div>
            <div className="hidden font-mono text-xs text-slate-400 sm:block">
              [ CORPORATE FOUNDATION ]
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-3 sm:gap-6">
            {pillars.map(({ num, title, subtitle, Icon, text, points }, i) => (
              <div
                key={title}
                data-reveal
                style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg sm:p-7"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <span className="font-mono text-xs font-bold text-brand">
                      PILLAR {num}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-navy group-hover:bg-brand/10 group-hover:text-brand">
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-navy">
                    {title}
                  </h3>
                  <p className="font-mono text-xs text-slate-400">
                    {subtitle}
                  </p>

                  {text && (
                    <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
                      {text}
                    </p>
                  )}

                  {points && (
                    <ul className="mt-3 space-y-2 text-xs text-slate-600 sm:text-sm">
                      {points.map((p) => (
                        <li key={p} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-50 font-mono text-[11px] text-slate-400 flex items-center justify-between">
                  <span>STANDARD</span>
                  <span className="font-semibold text-navy">VERIFIED</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Process + quote strip */}
      <Process />
      <CallStrip />
    </>
  );
}

