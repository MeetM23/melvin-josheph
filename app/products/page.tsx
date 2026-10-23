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
      {/* 1. Hero — product photo behind the text, white fade on the left */}
      <section className="relative isolate overflow-hidden bg-white">
        <Image
          src="/images/products-hero.jpg"
          alt="High quality blue trussfold roofing sheets stack"
          fill
          sizes="100vw"
          className="-z-20 object-cover object-[80%_50%]"
          priority
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/75 to-transparent" />

        <div className="mx-auto flex min-h-[235px] max-w-7xl items-center px-5 pb-10 pt-4 sm:min-h-[420px] sm:px-8 lg:min-h-[460px]">
          <div className="w-[68%] sm:w-1/2">
            <span className="inline-block rounded-full bg-navy px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-white sm:px-4 sm:text-[11px]">
              Products
            </span>
            <h1 className="mt-3 text-[1.65rem] font-extrabold uppercase leading-[1.08] tracking-tight text-navy sm:mt-4 sm:text-5xl lg:text-[3.6rem]">
              Our<br />
              <span className="text-brand">Products</span>
            </h1>
            <p className="mt-3 max-w-[15rem] text-[11px] font-medium leading-snug text-slate-800 sm:mt-5 sm:max-w-sm sm:text-base sm:leading-relaxed">
              High Quality Trussfold Roofing Sheets for Every Need
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-navy px-4 py-2.5 text-[11px] font-semibold text-white shadow-lg transition hover:bg-brand sm:mt-7 sm:px-7 sm:py-3.5 sm:text-sm"
            >
              Get a Quote <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Benefits card overlapping the hero */}
      <section className="relative z-10 -mt-6 px-2 sm:-mt-10 sm:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-4 divide-x divide-slate-200 rounded-2xl bg-white py-3 shadow-[0_8px_30px_rgba(10,37,64,0.12)] sm:py-7">
          {productFeatures.map(({ title, Icon }) => (
            <div key={title} className="flex flex-col items-center px-1 text-center sm:px-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-brand bg-white text-brand sm:h-14 sm:w-14">
                <Icon className="h-4 w-4 sm:h-6 sm:w-6" strokeWidth={1.8} />
              </span>
              <h3 className="mt-1.5 text-[9px] font-bold leading-tight text-navy sm:mt-3 sm:text-sm">{title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Product range */}
      <section className="bg-gradient-to-b from-white to-slate-50 pb-6 pt-7 sm:pb-12 sm:pt-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <h2 className="text-lg font-extrabold text-navy sm:text-3xl">Product Range</h2>
          <p className="mt-0.5 text-[11px] text-slate-600 sm:text-sm">Designed for Homes, Businesses and Large Scale Industries</p>

          <div className="mt-3 grid grid-cols-3 gap-2.5 sm:mt-7 sm:gap-6">
            {productRange.map((p) => (
              <div key={p.title} id={p.id} className="group flex scroll-mt-24 flex-col overflow-hidden rounded-xl bg-white shadow-md">
                <div className="relative aspect-[4/3.2] w-full overflow-hidden bg-slate-50">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 640px) 33vw, 380px"
                    className="object-contain p-1.5 transition duration-500 group-hover:scale-105 sm:p-3"
                  />
                </div>
                <div className="flex-1 px-2 pt-2 sm:px-5 sm:pt-4">
                  <h3 className="text-[10px] font-bold leading-tight text-navy sm:text-lg">{p.title}</h3>
                  <p className="mt-1 text-[8px] leading-snug text-slate-500 sm:mt-2 sm:text-sm sm:leading-relaxed">{p.desc}</p>
                  <ul className="mt-1.5 space-y-0.5 sm:mt-3 sm:space-y-1.5">
                    {p.tags.map((t) => (
                      <li key={t} className="flex items-center gap-1 text-[8px] font-medium text-navy sm:gap-2 sm:text-sm">
                        <CheckCircle2 className="h-2.5 w-2.5 shrink-0 text-brand sm:h-4 sm:w-4" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/contact"
                  className="mt-2.5 block bg-[#d9eafb] py-1.5 text-center text-[9px] font-semibold text-navy transition hover:bg-brand hover:text-white sm:mt-5 sm:py-3 sm:text-sm"
                >
                  Enquire Now →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Colour options infographic */}
      <section className="bg-slate-50 pb-6 sm:pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <h2 className="text-lg font-extrabold text-navy sm:text-3xl">Colour Options</h2>
          <p className="mt-0.5 text-[11px] text-slate-600 sm:text-sm">Choose the finish that suits your building</p>
          <div className="mt-3 flex items-center justify-around rounded-xl bg-white px-2 py-4 shadow-md sm:mt-7 sm:px-10 sm:py-9">
            {colours.map((c) => (
              <div key={c.name} className="flex flex-col items-center">
                <span
                  className="h-10 w-10 rounded-full shadow-md ring-2 ring-white sm:h-20 sm:w-20"
                  style={{ background: `linear-gradient(135deg, ${c.hex}, color-mix(in srgb, ${c.hex} 70%, black))` }}
                />
                <span className="mt-1.5 text-[9px] font-semibold text-navy sm:mt-3 sm:text-base">{c.name}</span>
              </div>
            ))}
          </div>
          <p className="mt-2 text-center text-[9px] text-slate-500 sm:text-sm">More colours available on request.</p>
        </div>
      </section>

      {/* 5. Applications */}
      <section id="applications" className="scroll-mt-20 bg-white py-6 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <h2 className="text-lg font-extrabold text-navy sm:text-3xl">Applications</h2>
          <p className="mt-0.5 text-[11px] text-slate-600 sm:text-sm">Engineered to Perform Across Multiple Sectors</p>
          <div className="mt-3 grid grid-cols-3 gap-2.5 sm:mt-7 sm:gap-6">
            {productApplications.map((app) => (
              <div key={app.title} className="overflow-hidden rounded-xl bg-white shadow-md">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image src={app.image} alt={app.title} fill sizes="(max-width: 640px) 33vw, 380px" className="object-cover" />
                </div>
                <div className="px-2 py-2 sm:px-5 sm:py-4">
                  <h3 className="text-[10px] font-bold text-navy sm:text-lg">{app.title}</h3>
                  <p className="mt-0.5 text-[8px] leading-snug text-slate-500 sm:mt-1 sm:text-sm">{app.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyChoose />

      {/* 6. Custom solutions banner */}
      <section id="custom" className="relative scroll-mt-20 overflow-hidden bg-navy text-white">
        <div className="absolute inset-y-0 right-0 w-1/2">
          <Image src="/images/banner-custom-solutions.jpg" alt="Custom roofing sheet solutions" fill sizes="50vw" className="object-cover" />
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-navy to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-7 sm:px-8 sm:py-12">
          <h3 className="max-w-[60%] text-sm font-extrabold sm:max-w-none sm:text-2xl">Custom Solutions for Your Roofing Needs</h3>
          <p className="mt-1 max-w-[55%] text-[10px] text-slate-300 sm:max-w-md sm:text-sm">
            We manufacture trussfold sheets as per your required specifications.
          </p>
          <Link
            href="/contact"
            className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-brand px-4 py-2 text-[10px] font-semibold text-white shadow-md transition hover:bg-white hover:text-navy sm:mt-5 sm:px-6 sm:py-2.5 sm:text-sm"
          >
            Get a Quote <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
