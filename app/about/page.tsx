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
      {/* 1. Hero — factory photo behind the text, white fade on the left */}
      <section className="relative isolate overflow-hidden bg-white">
        <Image
          src="/images/about-factory.jpg"
          alt="Durawin manufacturing plant building in Palakkad, Kerala"
          fill
          sizes="100vw"
          className="-z-20 object-cover object-[70%_55%]"
          priority
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/70 to-transparent" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/60 via-transparent to-transparent" />

        <div className="mx-auto flex min-h-[260px] max-w-7xl items-center px-5 pb-12 pt-4 sm:min-h-[460px] sm:px-8 lg:min-h-[500px]">
          <div className="w-[70%] sm:w-1/2">
            <span className="inline-block rounded-full bg-navy px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-white sm:px-4 sm:text-[11px]">
              About Us
            </span>
            <h1 className="mt-3 text-[1.5rem] font-extrabold uppercase leading-[1.1] tracking-tight text-navy sm:mt-4 sm:text-5xl lg:text-[3.4rem]">
              20 Years of<br />
              <span className="text-brand">Building Stronger</span><br />
              Tomorrows
            </h1>
            <p className="mt-3 max-w-[16rem] text-[11px] font-medium leading-snug text-slate-800 sm:mt-5 sm:max-w-md sm:text-base sm:leading-relaxed">
              Durawin is a leading manufacturer of trussfold roofing sheets based in Palakkad, Kerala, delivering durable and reliable roofing solutions.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-navy px-4 py-2.5 text-[11px] font-semibold text-white shadow-lg transition hover:bg-brand sm:mt-7 sm:px-7 sm:py-3.5 sm:text-sm"
            >
              Contact Our Team <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Highlights card overlapping the hero */}
      <section className="relative z-10 -mt-6 px-2 sm:-mt-10 sm:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-4 divide-x divide-slate-200 rounded-2xl bg-white py-3 shadow-[0_8px_30px_rgba(10,37,64,0.12)] sm:py-7">
          {highlights.map(({ title, subtitle, Icon }) => (
            <div key={subtitle} className="flex flex-col items-center px-1 text-center sm:px-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-brand bg-white text-brand sm:h-14 sm:w-14">
                <Icon className="h-4 w-4 sm:h-6 sm:w-6" strokeWidth={1.8} />
              </span>
              <p className="mt-1.5 text-[11px] font-extrabold leading-tight text-navy sm:mt-3 sm:text-xl">{title}</p>
              <p className="text-[9px] font-medium leading-tight text-slate-500 sm:text-sm">{subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Our story */}
      <section className="bg-gradient-to-b from-white to-slate-50 pb-6 pt-7 sm:pb-14 sm:pt-16">
        <div className="mx-auto grid max-w-7xl items-center gap-4 px-4 sm:gap-12 sm:px-8 md:grid-cols-2">
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl shadow-lg sm:rounded-2xl">
            <Image
              src="/images/about-plant-aerial.jpg"
              alt="Aerial view of the Durawin manufacturing plant"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-lg font-extrabold text-navy sm:text-3xl">Our Story</h2>
            <p className="mt-0.5 text-[11px] text-slate-600 sm:mt-1 sm:text-sm">Roofing built to last, made in Palakkad</p>
            <p className="mt-3 text-[11px] leading-relaxed text-slate-700 sm:mt-5 sm:text-base">
              For 20 years Durawin has manufactured trussfold roofing sheets from our unit in Naripotta, Palakkad. We focus on dependable quality, honest service and sheets that stand up to every season.
            </p>
            <ul className="mt-3 grid gap-1.5 sm:mt-5 sm:gap-3">
              {story.map((s) => (
                <li key={s} className="flex items-center gap-2 text-[11px] font-medium text-navy sm:text-base">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-brand sm:h-5 sm:w-5" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Vision, mission, values */}
      <section className="bg-slate-50 pb-6 sm:pb-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <h2 className="text-lg font-extrabold text-navy sm:text-3xl">What Drives Us</h2>
          <p className="mt-0.5 text-[11px] text-slate-600 sm:text-sm">Our vision, mission and values</p>
          <div className="mt-3 grid grid-cols-3 gap-2.5 sm:mt-7 sm:gap-6">
            {pillars.map(({ title, Icon, text, points }) => (
              <div key={title} className="rounded-xl bg-white p-2.5 shadow-md sm:p-7">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-brand bg-white text-brand sm:h-14 sm:w-14">
                  <Icon className="h-4 w-4 sm:h-6 sm:w-6" strokeWidth={1.8} />
                </span>
                <h3 className="mt-2 text-[10px] font-bold text-navy sm:mt-4 sm:text-lg">{title}</h3>
                {text && <p className="mt-1 text-[8px] leading-snug text-slate-600 sm:mt-2 sm:text-sm sm:leading-relaxed">{text}</p>}
                {points && (
                  <ul className="mt-1 space-y-0.5 text-[8px] text-slate-600 sm:mt-2 sm:space-y-1.5 sm:text-sm">
                    {points.map((p) => (
                      <li key={p} className="flex items-start gap-1 sm:gap-2">
                        <span className="mt-[3px] h-1 w-1 shrink-0 rounded-full bg-brand sm:mt-2 sm:h-1.5 sm:w-1.5" />
                        {p}
                      </li>
                    ))}
                  </ul>
                )}
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
