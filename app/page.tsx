import Image from "next/image";
import HeroCarousel from "@/components/HeroCarousel";
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
      {/* 1. Hero Carousel — auto-advancing slides with crossfade */}
      <HeroCarousel />

      {/* 2. Feature card overlapping the hero */}
      <section className="relative z-10 -mt-12 px-4 sm:-mt-10 sm:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-5 rounded-2xl bg-white py-5 shadow-[0_8px_30px_rgba(10,37,64,0.12)] sm:grid-cols-4 sm:divide-x sm:divide-slate-200 sm:py-7">
          {features.map(({ title, Icon }) => (
            <div key={title} className="flex min-w-0 flex-col items-center px-2 text-center sm:px-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand bg-white text-brand sm:h-14 sm:w-14">
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.8} />
              </span>
              <h3 className="mt-2 text-xs font-bold leading-tight text-navy sm:mt-3 sm:text-sm">{title}</h3>
            </div>
          ))}
        </div>
      </section>  

      {/* 3. Our Applications — swipeable row on phones, 3-column grid from sm */}
      <section className="bg-gradient-to-b from-white to-slate-50 pb-8 pt-9 sm:pb-12 sm:pt-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand sm:px-3.5">
            <Building2 className="h-3.5 w-3.5" /> Where We Roof
          </span>
          <h2 className="mt-2 text-2xl font-extrabold text-navy sm:mt-3 sm:text-3xl">Our Applications</h2>
          <p className="mt-0.5 text-sm text-slate-600">Trusted Roofing Solutions for Every Space</p>

          <div className="-mx-4 mt-4 flex scroll-pl-4 snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-4 pt-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:mt-7 sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 sm:pt-0">
            {applications.map(({ title, desc, image, Icon }) => (
              <div
                key={title}
                className="relative block aspect-[4/5] w-[78%] max-w-[320px] shrink-0 snap-start overflow-hidden rounded-xl shadow-lg sm:aspect-[4/4.4] sm:w-auto sm:max-w-none sm:shrink sm:rounded-2xl"
              >
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(max-width: 640px) 78vw, (max-width: 1023px) 33vw, 380px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/95 via-navy-dark/30 to-transparent" />

                <span className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-brand shadow-md backdrop-blur sm:left-4 sm:top-4">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </span>

                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <h3 className="text-xl font-extrabold leading-tight text-white">{title}</h3>
                  <p className="mt-1 max-w-[16rem] text-sm leading-snug text-slate-200">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-1 flex items-center gap-1 text-xs font-medium text-slate-500 sm:hidden">
            Swipe to see more <ArrowRight className="h-3 w-3" />
          </p>
        </div>
      </section>

      {/* 3b. Why choose + call strip */}
      <WhyChoose />
      <CallStrip />

      {/* 4. Raw material partners + coils */}
      <section className="bg-gradient-to-b from-slate-50 to-white pb-8 pt-8 sm:pb-14 sm:pt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand sm:px-3.5">
            <BadgeCheck className="h-3.5 w-3.5" /> Trusted Sourcing
          </span>
          <h2 className="mt-2 text-2xl font-extrabold text-navy sm:mt-3 sm:text-3xl">Our Raw Material Partners</h2>
          <p className="mt-0.5 text-sm text-slate-600">
            Manufactured using premium steel coils from trusted brands
          </p>

          <div className="mt-4 grid grid-cols-3 gap-2.5 sm:mt-7 sm:gap-6">
            {partners.map((p) => (
              <div
                key={p.name}
                className="group flex min-w-0 flex-col items-center rounded-xl border border-slate-100 bg-white px-2 pb-3 pt-4 shadow-md transition duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl sm:rounded-2xl sm:px-6 sm:pb-4 sm:pt-7"
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
                <p className="mt-1.5 text-center text-[10px] font-semibold uppercase leading-tight tracking-wide text-slate-500 sm:mt-3 sm:text-xs sm:leading-4">{p.name}</p>
              </div>
            ))}
          </div>

          {/* Steel coil feature */}
          <div className="relative mt-5 aspect-[4/3] overflow-hidden rounded-xl shadow-xl min-[480px]:aspect-[16/9] sm:mt-10 sm:aspect-[21/8] sm:rounded-2xl">
            <Image
              src="/images/raw-materials-coils.jpg"
              alt="Galvanized steel coils in Durawin manufacturing plant"
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover object-[50%_85%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-8">
              <h3 className="text-lg font-extrabold text-white sm:text-3xl">Premium Steel Coils</h3>
              <p className="mt-0.5 max-w-xs text-xs leading-snug text-slate-200 sm:mt-1.5 sm:max-w-md sm:text-base">
                The strong foundation of every Durawin roofing sheet
              </p>
              <div className="mt-2.5 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-3">
                {["Trusted Brands", "Quality Tested", "Consistent Supply"].map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-1 rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-semibold text-white ring-1 ring-white/30 backdrop-blur sm:gap-1.5 sm:px-4 sm:py-1.5 sm:text-sm"
                  >
                    <CheckCircle2 className="h-3 w-3 text-gold sm:h-4 sm:w-4" /> {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Stats bar — 2x2 on phones, one row from sm */}
      <section className="relative z-10 bg-navy py-8 text-white sm:py-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-3 gap-y-6 px-4 sm:grid-cols-4 sm:gap-6 sm:px-8">
          {stats.map(({ title, subtitle, Icon }) => (
            <div key={subtitle} className="flex min-w-0 flex-col items-center text-center">
              <Icon className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={1.8} />
              <p className="mt-1.5 text-base font-extrabold leading-tight sm:mt-2 sm:text-lg">{title}</p>
              <p className="text-xs font-medium leading-tight text-slate-300">{subtitle}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
