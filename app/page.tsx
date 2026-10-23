import Image from "next/image";
import Link from "next/link";
import { CallStrip, WhyChoose } from "@/components/sections";
import { ArrowRight, BadgeCheck, BarChart3, Building2, CheckCircle2, CloudSun, Factory, Home as HomeIcon, Store, MapPin, Settings, ShieldCheck, Trophy, Users } from "lucide-react";

const features = [
  { title: "Durable & Long Lasting", Icon: ShieldCheck },
  { title: "Weather Resistant", Icon: CloudSun },
  { title: "High Strength & Performance", Icon: BarChart3 },
  { title: "Suitable for All Sectors", Icon: Building2 },
];

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

const stats = [
  { title: "20+", subtitle: "Years of Experience", Icon: Trophy },
  { title: "Premium", subtitle: "Raw Materials", Icon: Settings },
  { title: "Trusted by", subtitle: "Retailers & Wholesalers", Icon: Users },
  { title: "Proudly", subtitle: "Based in Palakkad, Kerala", Icon: MapPin },
];

export default function Home() {
  return (
    <>
      {/* 1. Hero — roof photo fills the section, white fade behind the text */}
      <section className="relative isolate overflow-hidden bg-white">
        <Image
          src="/images/home-hero.jpg"
          alt="Durawin High Quality Roofing Solutions"
          fill
          sizes="100vw"
          className="-z-20 object-cover object-[80%_25%]"
          priority
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/55 to-transparent" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/70 via-transparent to-transparent" />

        <div className="mx-auto flex min-h-[235px] max-w-7xl items-center px-5 pb-10 pt-4 sm:min-h-[460px] sm:px-8 lg:min-h-[520px]">
          <div className="w-[68%] sm:w-1/2">
            <h1 className="text-[1.65rem] font-extrabold uppercase leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-[3.6rem]">
              Roofing<br />
              Solutions<br />
              <span className="text-brand">For a Stronger</span><br />
              Tomorrow
            </h1>
            <p className="mt-3 max-w-[15rem] text-[11px] font-medium leading-snug text-slate-800 sm:mt-5 sm:max-w-sm sm:text-base sm:leading-relaxed">
              Premium Trussfold Roofing Sheets Manufactured with the Best Raw Materials for Homes, Businesses and Industries.
            </p>
            <Link
              href="/products"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-navy px-4 py-2.5 text-[11px] font-semibold text-white shadow-lg transition hover:bg-brand sm:mt-7 sm:px-7 sm:py-3.5 sm:text-sm"
            >
              Explore Our Products <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Feature card overlapping the hero */}
      <section className="relative z-10 -mt-6 px-2 sm:-mt-10 sm:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-4 divide-x divide-slate-200 rounded-2xl bg-white py-3 shadow-[0_8px_30px_rgba(10,37,64,0.12)] sm:py-7">
          {features.map(({ title, Icon }) => (
            <div key={title} className="flex flex-col items-center px-1 text-center sm:px-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-brand bg-white text-brand sm:h-14 sm:w-14">
                <Icon className="h-4 w-4 sm:h-6 sm:w-6" strokeWidth={1.8} />
              </span>
              <h3 className="mt-1.5 text-[9px] font-bold leading-tight text-navy sm:mt-3 sm:text-sm">{title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Our Applications */}
      <section className="bg-gradient-to-b from-white to-slate-50 pb-6 pt-7 sm:pb-12 sm:pt-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <span className="inline-flex items-center gap-1 rounded-full bg-brand/10 px-2.5 py-1 text-[8px] font-bold uppercase tracking-wider text-brand sm:gap-1.5 sm:px-3.5 sm:text-[11px]">
            <Building2 className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5" /> Where We Roof
          </span>
          <h2 className="mt-1.5 text-lg font-extrabold text-navy sm:mt-3 sm:text-3xl">Our Applications</h2>
          <p className="mt-0.5 text-[11px] text-slate-600 sm:text-sm">Trusted Roofing Solutions for Every Space</p>

          <div className="mt-3 grid grid-cols-3 gap-2.5 sm:mt-7 sm:gap-6">
            {applications.map(({ title, desc, image, Icon }) => (
              <Link
                href="/products#applications"
                key={title}
                className="group relative block aspect-[3/4] overflow-hidden rounded-xl shadow-lg outline-none transition duration-300 hover:-translate-y-1 hover:shadow-2xl focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:aspect-[4/4.4] sm:rounded-2xl"
              >
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(max-width: 640px) 33vw, 380px"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/95 via-navy-dark/30 to-transparent" />

                <span className="absolute left-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white/90 text-brand shadow-md backdrop-blur sm:left-4 sm:top-4 sm:h-10 sm:w-10">
                  <Icon className="h-3 w-3 sm:h-5 sm:w-5" strokeWidth={2} />
                </span>

                <div className="absolute inset-x-0 bottom-0 p-2 sm:p-5">
                  <h3 className="text-[10px] font-extrabold leading-tight text-white sm:text-xl">{title}</h3>
                  <p className="mt-1 hidden max-w-[16rem] text-sm leading-snug text-slate-200 sm:block">{desc}</p>
                  <span className="mt-1.5 inline-flex items-center gap-1 text-[8px] font-semibold text-gold sm:mt-3 sm:gap-2 sm:text-sm">
                    <span className="hidden sm:inline">Explore</span>
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand text-white transition group-hover:translate-x-1 sm:h-8 sm:w-8">
                      <ArrowRight className="h-2.5 w-2.5 sm:h-4 sm:w-4" />
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3b. Why choose + call strip */}
      <WhyChoose />
      <CallStrip />

      {/* 4. Raw material partners + coils */}
      <section className="bg-gradient-to-b from-slate-50 to-white pb-6 pt-5 sm:pb-14 sm:pt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <span className="inline-flex items-center gap-1 rounded-full bg-brand/10 px-2.5 py-1 text-[8px] font-bold uppercase tracking-wider text-brand sm:gap-1.5 sm:px-3.5 sm:text-[11px]">
            <BadgeCheck className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5" /> Trusted Sourcing
          </span>
          <h2 className="mt-1.5 text-lg font-extrabold text-navy sm:mt-3 sm:text-3xl">Our Raw Material Partners</h2>
          <p className="mt-0.5 text-[11px] text-slate-600 sm:text-sm">
            Manufactured using premium steel coils from trusted brands
          </p>

          <div className="mt-3 grid grid-cols-3 gap-2.5 sm:mt-7 sm:gap-6">
            {partners.map((p) => (
              <div
                key={p.name}
                className="group flex flex-col items-center rounded-xl border border-slate-100 bg-white px-2 pb-2 pt-3 shadow-md transition duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl sm:rounded-2xl sm:px-6 sm:pb-4 sm:pt-7"
              >
                <div className="flex h-12 w-full items-center justify-center sm:h-24">
                  <Image
                    src={p.src}
                    alt={p.name}
                    width={p.w}
                    height={p.h}
                    className="max-h-12 w-auto max-w-full object-contain transition duration-300 group-hover:scale-105 sm:max-h-20"
                  />
                </div>
                <div className="mt-2 h-px w-8 bg-brand/30 sm:mt-4 sm:w-12" />
                <p className="mt-1.5 text-[8px] font-semibold uppercase tracking-wide text-slate-500 sm:mt-3 sm:text-xs">{p.name}</p>
              </div>
            ))}
          </div>

          {/* Steel coil feature */}
          <div className="relative mt-4 aspect-[16/9] overflow-hidden rounded-xl shadow-xl sm:mt-10 sm:aspect-[21/8] sm:rounded-2xl">
            <Image
              src="/images/raw-materials-coils.jpg"
              alt="Galvanized steel coils in Durawin manufacturing plant"
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover object-[50%_85%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-3 sm:p-8">
              <h3 className="text-sm font-extrabold text-white sm:text-3xl">Premium Steel Coils</h3>
              <p className="mt-0.5 max-w-xs text-[10px] leading-snug text-slate-200 sm:mt-1.5 sm:max-w-md sm:text-base">
                The strong foundation of every Durawin roofing sheet
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-3">
                {["Trusted Brands", "Quality Tested", "Consistent Supply"].map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-1 rounded-full bg-white/15 px-2 py-0.5 text-[8px] font-semibold text-white ring-1 ring-white/30 backdrop-blur sm:gap-1.5 sm:px-4 sm:py-1.5 sm:text-sm"
                  >
                    <CheckCircle2 className="h-2.5 w-2.5 text-gold sm:h-4 sm:w-4" /> {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Stats bar */}
      <section className="relative z-10 bg-navy py-4 text-white sm:py-8">
        <div className="mx-auto grid max-w-7xl grid-cols-4 gap-1 px-2 sm:gap-6 sm:px-8">
          {stats.map(({ title, subtitle, Icon }) => (
            <div key={subtitle} className="flex flex-col items-center text-center">
              <Icon className="h-5 w-5 sm:h-8 sm:w-8" strokeWidth={1.8} />
              <p className="mt-1 text-[11px] font-extrabold leading-tight sm:mt-2 sm:text-lg">{title}</p>
              <p className="text-[9px] font-medium leading-tight text-slate-300 sm:text-xs">{subtitle}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
