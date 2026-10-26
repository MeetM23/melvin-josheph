import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Eye, Factory, Layers, MapPin, ShieldCheck, Target, Trophy } from "lucide-react";
import { CallStrip, Process } from "@/components/sections";

export const metadata = { title: "About Us" };

const highlights = [
  { title: "20+", subtitle: "Years of Experience", Icon: Trophy },
  { title: "Palakkad", subtitle: "Based in Kerala", Icon: MapPin },
  { title: "Premium", subtitle: "Raw Materials", Icon: Layers },
  { title: "Trussfold", subtitle: "Roofing Sheets", Icon: Factory },
];

const story = [
  "Premium steel coils from trusted brands",
  "Custom lengths and a range of colours",
  "Roofing for homes, businesses and industries",
  "Quality checked before every dispatch",
];

const pillars = [
  {
    title: "Our Vision",
    Icon: Eye,
    text: "To be a trusted leader in roofing solutions, known for quality, innovation and customer satisfaction across India.",
  },
  {
    title: "Our Mission",
    Icon: Target,
    text: "To manufacture and deliver superior trussfold roofing sheets using the best raw materials, ensuring strength, sustainability and value for every customer.",
  },
  {
    title: "Our Values",
    Icon: ShieldCheck,
    points: ["Quality First", "Customer Focus", "Integrity & Transparency", "Continuous Improvement", "Stronger Communities"],
  },
];

export default function AboutPage() {
  return (
    <>
      {/* 1. Hero — factory photo behind the text, white fade */}
      <section className="relative isolate overflow-hidden bg-white">
        <Image
          src="/images/about-factory.jpg"
          alt="Durawin manufacturing plant building in Palakkad, Kerala"
          fill
          sizes="100vw"
          className="-z-20 object-cover object-[62%_55%] sm:object-[70%_55%]"
          priority
        />
        {/* phones: fade from the top so the building shows at the bottom; sm+: fade from the left */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-white/85 to-transparent sm:bg-gradient-to-r sm:from-white sm:via-white/70 sm:to-transparent" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/60 via-transparent to-transparent" />

        <div className="mx-auto flex min-h-[400px] max-w-7xl items-start px-5 pb-28 pt-8 sm:min-h-[460px] sm:items-center sm:px-8 sm:pb-12 sm:pt-4 lg:min-h-[500px]">
          <div className="w-full sm:w-1/2">
            <span
              style={{ "--hero-delay": "0.02s" } as React.CSSProperties}
              className="hero-rise inline-block rounded-full bg-navy px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white sm:px-4"
            >
              About Us
            </span>
            <h1
              style={{ "--hero-delay": "0.1s" } as React.CSSProperties}
              className="hero-rise mt-3 text-[clamp(1.4rem,6.6vw,2.2rem)] font-extrabold uppercase leading-[1.1] tracking-tight text-navy sm:mt-4 sm:text-5xl lg:text-[3.4rem]"
            >
              20 Years of<br />
              <span className="text-brand">Building Stronger</span><br />
              Tomorrows
            </h1>
            <p
              style={{ "--hero-delay": "0.22s" } as React.CSSProperties}
              className="hero-rise mt-3 max-w-xs text-sm font-medium leading-snug text-slate-800 sm:mt-5 sm:max-w-md sm:text-base sm:leading-relaxed"
            >
              Durawin is a leading manufacturer of trussfold roofing sheets based in Palakkad, Kerala, delivering durable and reliable roofing solutions.
            </p>
            <div
              style={{ "--hero-delay": "0.36s" } as React.CSSProperties}
              className="hero-rise mt-5 sm:mt-7"
            >
              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-navy px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-brand sm:px-7 sm:py-3.5"
              >
                Contact Our Team <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Highlights card overlapping the hero — 2x2 on phones, 4 across from sm */}
      <section className="relative z-10 -mt-12 px-4 sm:-mt-10 sm:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-5 rounded-2xl bg-white py-5 shadow-[0_8px_30px_rgba(10,37,64,0.12)] sm:grid-cols-4 sm:divide-x sm:divide-slate-200 sm:py-7">
          {highlights.map(({ title, subtitle, Icon }, i) => (
            <div
              key={subtitle}
              data-reveal
              style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
              className="flex min-w-0 flex-col items-center px-2 text-center sm:px-4"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand bg-white text-brand shadow-sm transition-transform duration-300 hover:scale-105 sm:h-14 sm:w-14">
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.8} />
              </span>
              <p className="mt-2 text-base font-extrabold leading-tight text-navy sm:mt-3 sm:text-xl">{title}</p>
              <p className="text-xs font-medium leading-tight text-slate-500 sm:text-sm">{subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Our story */}
      <section className="bg-gradient-to-b from-white to-slate-50 pb-8 pt-9 sm:pb-14 sm:pt-16">
        <div className="mx-auto grid max-w-7xl items-center gap-5 px-4 sm:gap-12 sm:px-8 md:grid-cols-2">
          <div data-reveal="scale" className="relative aspect-[16/10] overflow-hidden rounded-xl shadow-lg sm:rounded-2xl">
            <Image
              src="/images/about-plant-aerial.jpg"
              alt="Aerial view of the Durawin manufacturing plant"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover"
            />
          </div>
          <div data-reveal style={{ "--reveal-delay": "120ms" } as React.CSSProperties}>
            <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">Our Story</h2>
            <p className="mt-0.5 text-sm text-slate-600 sm:mt-1">Roofing built to last, made in Palakkad</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:mt-5 sm:text-base">
              For 20 years Durawin has manufactured trussfold roofing sheets from our unit in Naripotta, Palakkad. We focus on dependable quality, honest service and sheets that stand up to every season.
            </p>
            <ul className="mt-4 grid gap-2 sm:mt-5 sm:gap-3">
              {story.map((s) => (
                <li key={s} className="flex items-start gap-2 text-sm font-medium text-navy sm:items-center sm:text-base">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand sm:mt-0 sm:h-5 sm:w-5" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Vision, mission, values — stacked cards on phones, 3 columns from sm */}
      <section className="bg-slate-50 pb-8 sm:pb-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div data-reveal>
            <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">What Drives Us</h2>
            <p className="mt-0.5 text-sm text-slate-600">Our vision, mission and values</p>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:mt-7 sm:grid-cols-3 sm:gap-6">
            {pillars.map(({ title, Icon, text, points }, i) => (
              <div key={title} data-reveal style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties} className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-md sm:block sm:p-7">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-brand bg-white text-brand sm:h-14 sm:w-14">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.8} />
                </span>
                <div className="min-w-0">
                  <h3 className="text-base font-bold text-navy sm:mt-4 sm:text-lg">{title}</h3>
                  {text && <p className="mt-1 text-sm leading-relaxed text-slate-600 sm:mt-2">{text}</p>}
                  {points && (
                    <ul className="mt-1.5 space-y-1 text-sm text-slate-600 sm:mt-2 sm:space-y-1.5">
                      {points.map((p) => (
                        <li key={p} className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  )}
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
