"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Layers } from "lucide-react";
import { CadDimensionMarks, WatermarkText } from "@/components/IndustrialBackgrounds";

interface ProductItem {
  id: string;
  category: string;
  title: string;
  desc: string;
  image: string;
  imageFit: "contain" | "cover";
  imageAlt: string;
  benefits: [string, string];
  enquireHref: string;
  enquireLabel: string;
  specsHref: string;
}

const products: ProductItem[] = [
  {
    id: "roofing-sheets",
    category: "EXTERIOR ROOFING",
    title: "Roofing Sheets",
    desc: "Heavy-duty trapezoidal steel sheets engineered for superior load capacity, rapid water runoff, and long-term weather durability.",
    image: "/images/product-card-roofing.jpg",
    imageFit: "contain",
    imageAlt: "Durawin Trapezoidal Profile Roofing Sheets",
    benefits: [
      "High-depth water runoff crests",
      "Custom cut-to-length zero-joint spans",
    ],
    enquireHref: "/contact?product=trussfold",
    enquireLabel: "Enquire Roofing",
    specsHref: "/products#trussfold",
  },
  {
    id: "liner-sheets",
    category: "INTERIOR & CEILINGS",
    title: "Liner Sheets",
    desc: "Precision-rolled multi-rib steel sheets designed for architectural ceilings, interior wall cladding, and clean-line soffits.",
    image: "/images/product-card-liner.png",
    imageFit: "contain",
    imageAlt: "Durawin 1110mm Interior Liner Sheets Profile",
    benefits: [
      "1110 mm wide coverage profile",
      "5 architectural colour coatings",
    ],
    enquireHref: "/contact?product=liner-sheets",
    enquireLabel: "Enquire Liner",
    specsHref: "/products#liner-sheets",
  },
  {
    id: "gi-pipes",
    category: "STRUCTURAL FRAMEWORK",
    title: "Structural GI Pipes",
    desc: "Certified high-yield galvanized steel tubes designed for roof purlins, rafters, and structural trusses with heavy zinc defense.",
    image: "/images/product-card-pipes-framed.jpg",
    imageFit: "contain",
    imageAlt: "Structural GI Galvanized Steel Purlin Pipes",
    benefits: [
      "Square & rectangular hollow sections",
      "APL Apollo certified primary steel",
    ],
    enquireHref: "/contact?product=gp-pipes",
    enquireLabel: "Enquire GI Pipes",
    specsHref: "/products#structural-framework",
  },
  {
    id: "rainwater-gutters",
    category: "ROOF DRAINAGE",
    title: "Rainwater Gutters & Downpipes",
    desc: "Engineered high-flow eaves gutters and vertical downspouts designed to channel heavy monsoon rainfall and protect building facades.",
    image: "/images/product-card-gutter.jpg",
    imageFit: "cover",
    imageAlt: "Engineered Rainwater Eaves Gutter and Downpipe System",
    benefits: [
      "Heavy-flow monsoon discharge",
      "UV-stabilized all-weather build",
    ],
    enquireHref: "/contact?product=gutters",
    enquireLabel: "Enquire Gutters",
    specsHref: "/products#structural-framework",
  },
];

function ProductCard({ product, index }: { product: ProductItem; index: number }) {
  return (
    <div
      data-reveal="scale"
      style={{ "--reveal-delay": `${index * 80}ms` } as React.CSSProperties}
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-xs transition-all duration-300 hover:border-brand/40 hover:shadow-xl"
    >
      <div>
        {/* 1. Consistent Product Image Container */}
        <div className="relative aspect-[16/11] w-full overflow-hidden rounded-xl border border-slate-200/80 bg-[#F8FAFC]">
          <div className="pointer-events-none absolute inset-0 bg-blueprint-grid opacity-15" />

          {/* Centered Image with deliberate containment or cover */}
          <div
            className={`relative flex h-full w-full items-center justify-center ${
              product.imageFit === "contain" ? "p-3 sm:p-3.5" : "p-0"
            }`}
          >
            <Image
              src={product.image}
              alt={product.imageAlt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              priority={index === 0}
              className={`transition-transform duration-500 ease-out group-hover:scale-[1.03] ${
                product.imageFit === "cover"
                  ? "object-cover object-[50%_25%]"
                  : "object-contain"
              }`}
            />
          </div>
        </div>

        {/* 2. Small Product Category Label */}
        <div className="mt-4">
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-brand">
            {product.category}
          </span>

          {/* 3. Clear Product Name */}
          <h3 className="mt-1 text-lg font-extrabold tracking-tight text-navy transition-colors group-hover:text-brand sm:text-xl">
            {product.title}
          </h3>

          {/* 4. One Concise, Readable Description */}
          <p className="mt-2 text-xs leading-relaxed text-slate-600 line-clamp-3">
            {product.desc}
          </p>

          {/* 5. At Most Two Short Key Benefits */}
          <ul className="mt-3.5 space-y-2">
            {product.benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-2 text-[11px] font-medium text-slate-700"
              >
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                <span className="leading-snug">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 6. One Prominent, Consistently Positioned Enquiry CTA + Direct Spec Link */}
      <div className="mt-5 border-t border-slate-100 pt-3.5">
        <Link
          href={product.enquireHref}
          className="inline-flex min-h-10 w-full items-center justify-center gap-1.5 rounded-lg bg-navy px-3 py-2 text-center text-xs font-bold text-white shadow-2xs transition hover:bg-brand active:scale-[0.99]"
        >
          <span>{product.enquireLabel}</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
        <Link
          href={product.specsHref}
          className="mt-1.5 inline-flex w-full items-center justify-center gap-1 py-1 text-[11px] font-semibold text-slate-500 transition hover:text-brand"
        >
          <span>View Specifications</span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}

export default function ManufacturedSheetsSection() {
  return (
    <section id="products-lineup" className="relative scroll-mt-24 overflow-hidden bg-white pb-12 pt-6 sm:pb-16 sm:pt-8 bg-paper-grain">
      <div className="pointer-events-none absolute inset-0 bg-blueprint-grid opacity-30 [mask-image:linear-gradient(to_bottom,black_40%,transparent)]" />
      <WatermarkText text="PRODUCTS" tone="light" className="absolute -top-3 right-4 sm:top-2 sm:right-8 -z-10" />
      <div className="absolute inset-x-0 top-0 h-px bg-slate-200/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header with Explore All Products CTA */}
        <div data-reveal className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-navy sm:px-3.5">
              <Layers className="h-3.5 w-3.5 text-brand" /> Complete Product Solutions
            </span>
            <h2 className="mt-2.5 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl lg:text-4xl">
              Manufactured Sheets & Structural Systems
            </h2>
            <p className="mt-1 max-w-2xl text-xs text-slate-600 sm:text-sm">
              From precision roll-formed roofing & liner sheets to high-yield GI pipes and complete rainwater drainage systems.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-xs font-bold text-navy shadow-2xs transition hover:border-brand hover:text-brand"
            >
              <span>Explore All Products</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* 4 Products in Unified Grid: 4 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5 xl:gap-6">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {/* Industrial Specification Footer Line */}
        <div className="mt-8 hidden items-center justify-between border-t border-slate-100 pt-4 font-mono text-xs text-slate-400 sm:flex">
          <CadDimensionMarks label="MANUFACTURED PROFILES" spec="ROOFING (TRUSSFOLD) & LINER (1110MM)" />
          <CadDimensionMarks label="STRUCTURAL FRAMEWORK" spec="GI PIPES (APL APOLLO) & EAVES GUTTERS" />
        </div>
      </div>
    </section>
  );
}
