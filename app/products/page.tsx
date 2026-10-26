import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Palette, Ruler, ShieldCheck, Droplets } from "lucide-react";
import { WhyChoose } from "@/components/sections";

export const metadata = { title: "Products" };

const productFeatures = [
  { title: "Superior Strength", Icon: ShieldCheck },
  { title: "Corrosion Resistant", Icon: Droplets },
  { title: "Custom Length & Thickness", Icon: Ruler },
  { title: "Wide Colour Options", Icon: Palette },
];

const productRange = [
  {
    id: "trussfold",
    title: "Trussfold Roofing Sheets",
    desc: "Strong, stylish and long-lasting roofing sheets suitable for various applications.",
    image: "/images/product-trussfold-blue.jpg",
    tags: ["Strong profile", "Custom lengths"],
  },
  {
    id: "colour-coated",
    title: "Colour Coated Sheets",
    desc: "Available in multiple colours to match your design and aesthetic needs.",
    image: "/images/product-colour-coated-red.jpg",
    tags: ["Multiple colours", "Weather resistant"],
  },
  {
    id: "galvanized",
    title: "Galvanized Roofing Sheets",
    desc: "High corrosion resistance and excellent durability for long-term performance.",
    image: "/images/product-galvanized-silver.jpg",
    tags: ["Corrosion resistant", "Long life"],
  },
];

const colours = [
  { name: "Blue", hex: "#1f5fbf" },
  { name: "Red", hex: "#c8342b" },
  { name: "Grey", hex: "#4b5563" },
  { name: "Green", hex: "#2a9d8f" },
  { name: "Silver", hex: "#c5ccd6" },
];

const productApplications = [
  { title: "Household", desc: "Stylish and reliable roofing for modern homes.", image: "/images/app-household.jpg" },
  { title: "Commercial", desc: "Ideal for warehouses, showrooms and commercial complexes.", image: "/images/app-commercial.jpg" },
  { title: "Industrial", desc: "Built for large scale industrial buildings and infrastructure.", image: "/images/app-industrial.jpg" },
];

export default function ProductsPage() {
  return (
    <>
      {/* 1. Hero — product photo behind the text, white fade */}
      <section className="relative isolate overflow-hidden bg-white">
        <Image
          src="/images/products-hero.jpg"
          alt="High quality blue trussfold roofing sheets stack"
          fill
          sizes="100vw"
          className="-z-20 object-cover object-[78%_50%] sm:object-[80%_50%]"
          priority
        />
        {/* phones: fade from the top so the sheets show at the bottom; sm+: fade from the left */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-white/85 to-transparent sm:bg-gradient-to-r sm:from-white sm:via-white/75 sm:to-transparent" />

        <div className="mx-auto flex min-h-[360px] max-w-7xl items-start px-5 pb-24 pt-8 sm:min-h-[420px] sm:items-center sm:px-8 sm:pb-10 sm:pt-4 lg:min-h-[460px]">
          <div className="w-full sm:w-1/2">
            <span className="inline-block rounded-full bg-navy px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white sm:px-4">
              Products
            </span>
            <h1 className="mt-3 text-[clamp(1.9rem,9vw,2.6rem)] font-extrabold uppercase leading-[1.08] tracking-tight text-navy sm:mt-4 sm:text-5xl lg:text-[3.6rem]">
              Our<br />
              <span className="text-brand">Products</span>
            </h1>
            <p className="mt-3 max-w-xs text-sm font-medium leading-snug text-slate-800 sm:mt-5 sm:max-w-sm sm:text-base sm:leading-relaxed">
              High Quality Trussfold Roofing Sheets for Every Need
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-lg bg-navy px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-brand sm:mt-7 sm:px-7 sm:py-3.5"
            >
              Get a Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Benefits card overlapping the hero — 2x2 on phones, 4 across from sm */}
      <section className="relative z-10 -mt-12 px-4 sm:-mt-10 sm:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-5 rounded-2xl bg-white py-5 shadow-[0_8px_30px_rgba(10,37,64,0.12)] sm:grid-cols-4 sm:divide-x sm:divide-slate-200 sm:py-7">
          {productFeatures.map(({ title, Icon }) => (
            <div key={title} className="flex min-w-0 flex-col items-center px-2 text-center sm:px-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand bg-white text-brand sm:h-14 sm:w-14">
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.8} />
              </span>
              <h3 className="mt-2 text-xs font-bold leading-tight text-navy sm:mt-3 sm:text-sm">{title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Product range — horizontal cards on phones, 3 columns from sm */}
      <section className="bg-gradient-to-b from-white to-slate-50 pb-8 pt-9 sm:pb-12 sm:pt-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div data-reveal>
            <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">Product Range</h2>
            <p className="mt-0.5 text-sm text-slate-600">Designed for Homes, Businesses and Large Scale Industries</p>
            <nav aria-label="Jump to a product" className="mt-4 flex flex-wrap gap-2">
              {productRange.map((p) => (
                <a
                  key={p.id}
                  href={`#${p.id}`}
                  className="inline-flex min-h-10 items-center rounded-full border border-slate-200 bg-white px-4 text-xs font-semibold text-navy transition hover:border-brand hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand active:border-brand active:text-brand sm:text-sm"
                >
                  {p.title}
                </a>
              ))}
            </nav>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-3 sm:mt-7 sm:grid-cols-3 sm:gap-6">
            {productRange.map((p, i) => (
              <div key={p.title} id={p.id} data-reveal style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties} className="group flex scroll-mt-24 flex-row overflow-hidden rounded-xl bg-white shadow-md ring-1 ring-transparent transition-shadow duration-300 hover:shadow-lg hover:ring-brand/15 sm:flex-col">
                <div className="relative min-h-[190px] w-[40%] shrink-0 self-stretch overflow-hidden bg-slate-50 sm:aspect-[4/3.2] sm:min-h-0 sm:w-full sm:self-auto">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 640px) 40vw, 380px"
                    className="object-contain p-2 transition-transform duration-500 ease-out group-hover:scale-[1.03] sm:p-3"
                  />
                </div>
                <div className="flex min-w-0 flex-1 flex-col sm:contents">
                  <div className="flex-1 px-3 pt-3 sm:px-5 sm:pt-4">
                    <h3 className="text-base font-bold leading-tight text-navy sm:text-lg">{p.title}</h3>
                    <p className="mt-1 text-xs leading-snug text-slate-500 sm:mt-2 sm:text-sm sm:leading-relaxed">{p.desc}</p>
                    <ul className="mt-2 space-y-1 sm:mt-3 sm:space-y-1.5">
                      {p.tags.map((t) => (
                        <li key={t} className="flex items-center gap-1.5 text-xs font-medium text-navy sm:gap-2 sm:text-sm">
                          <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-brand sm:h-4 sm:w-4" />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href={`/contact?product=${p.id}#enquiry`}
                    className="group/cta mt-3 flex items-center justify-center gap-1.5 bg-[#d9eafb] py-3 text-sm font-semibold text-navy transition hover:bg-brand hover:text-white active:bg-brand active:text-white focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand sm:mt-5"
                  >
                    Enquire Now
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/cta:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Colour options infographic */}
      <section className="bg-slate-50 pb-8 sm:pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">Colour Options</h2>
          <p className="mt-0.5 text-sm text-slate-600">Choose the finish that suits your building</p>
          <div data-reveal className="mt-4 flex items-start justify-around gap-1 rounded-xl sm:gap-0 bg-white px-2 py-5 shadow-md sm:mt-7 sm:items-center sm:px-10 sm:py-9">
            {colours.map((c) => (
              <div key={c.name} className="flex min-w-0 flex-col items-center">
                <span
                  className="h-11 w-11 rounded-full shadow-md ring-2 ring-white sm:h-20 sm:w-20"
                  style={{ background: `linear-gradient(135deg, ${c.hex}, color-mix(in srgb, ${c.hex} 70%, black))` }}
                />
                <span className="mt-2 text-xs font-semibold text-navy sm:mt-3 sm:text-base">{c.name}</span>
              </div>
            ))}
          </div>
          <p className="mt-2 text-center text-xs text-slate-500 sm:text-sm">More colours available on request.</p>
        </div>
      </section>

      {/* 5. Applications — swipeable row on phones, 3-column grid from sm */}
      <section id="applications" className="scroll-mt-20 bg-white py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div data-reveal>
            <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">Applications</h2>
            <p className="mt-0.5 text-sm text-slate-600">Engineered to Perform Across Multiple Sectors</p>
          </div>
          <div className="-mx-4 mt-4 flex scroll-pl-4 snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-4 pt-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:mt-7 sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 sm:pt-0">
            {productApplications.map((app, i) => (
              <div key={app.title} data-reveal style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties} className="w-[78%] max-w-[320px] shrink-0 snap-start overflow-hidden rounded-xl bg-white shadow-md sm:w-auto sm:max-w-none sm:shrink">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image src={app.image} alt={app.title} fill sizes="(max-width: 640px) 78vw, (max-width: 1023px) 33vw, 380px" className="object-cover" />
                </div>
                <div className="px-4 py-3 sm:px-5 sm:py-4">
                  <h3 className="text-base font-bold text-navy sm:text-lg">{app.title}</h3>
                  <p className="mt-0.5 text-xs leading-snug text-slate-500 sm:mt-1 sm:text-sm">{app.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-1 flex items-center gap-1 text-xs font-medium text-slate-500 sm:hidden">
            Swipe to see more <ArrowRight className="h-3 w-3" />
          </p>
        </div>
      </section>

      <WhyChoose />

      {/* 6. Custom solutions banner */}
      <section id="custom" className="relative scroll-mt-20 overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 sm:left-auto sm:w-1/2">
          <Image src="/images/banner-custom-solutions.jpg" alt="Custom roofing sheet solutions" fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" />
          <div className="absolute inset-0 bg-navy/80 sm:inset-y-0 sm:right-auto sm:w-1/2 sm:bg-transparent sm:bg-gradient-to-r sm:from-navy sm:to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-8 sm:py-12">
          <h3 className="text-xl font-extrabold sm:max-w-none sm:text-2xl">Custom Solutions for Your Roofing Needs</h3>
          <p className="mt-1.5 max-w-md text-sm text-slate-200 sm:mt-1 sm:text-slate-300">
            We manufacture trussfold sheets as per your required specifications.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex min-h-11 items-center gap-1.5 rounded-lg bg-brand px-6 py-2.5 sm:min-h-0 text-sm font-semibold text-white shadow-md transition hover:bg-white hover:text-navy sm:mt-5"
          >
            Get a Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
