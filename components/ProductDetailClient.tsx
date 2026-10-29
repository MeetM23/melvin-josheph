"use client";

import React, { useState, useId } from "react";
import Image from "next/image";
import Link from "next/link";
import UIcon from "@/components/UIcon";
import { ProductData, PRODUCTS_LIST, getProductBySlug } from "@/lib/products-data";
import { site } from "@/lib/site";
import { WatermarkText } from "@/components/IndustrialBackgrounds";

export default function ProductDetailClient({ product }: { product: ProductData }) {
  // Store user-selected options
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    product.options.forEach((opt) => {
      initial[opt.name] = opt.choices[0]?.value || "";
    });
    return initial;
  });

  const headingId = useId();

  const handleOptionChange = (optionName: string, value: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [optionName]: value,
    }));
  };

  // Build spec string for quote URL
  const specString = Object.entries(selectedOptions)
    .map(([key, val]) => `${key}: ${val}`)
    .join(", ");

  const quoteHref = `/contact?product=${encodeURIComponent(
    product.enquiryValue
  )}&spec=${encodeURIComponent(specString)}#enquiry`;

  // Related products data
  const relatedProducts = product.relatedProductSlugs
    .map((slug) => getProductBySlug(slug))
    .filter((p): p is ProductData => p !== undefined);

  return (
    <div className="relative overflow-hidden bg-white">
      {/* 1. Breadcrumbs & Header Bar */}
      <nav aria-label="Breadcrumb" className="border-b border-slate-200/80 bg-slate-50/80 py-3 text-xs">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 sm:px-8 text-slate-500">
          <Link
            href="/"
            className="inline-flex items-center gap-1 transition-colors hover:text-navy"
          >
            <UIcon name="home" size="xs" />
            <span>Home</span>
          </Link>
          <UIcon name="angle-right" size="xs" className="text-slate-400" />
          <Link
            href="/products"
            className="transition-colors hover:text-navy"
          >
            Products
          </Link>
          <UIcon name="angle-right" size="xs" className="text-slate-400" />
          <span className="font-semibold text-navy truncate">
            {product.title}
          </span>
        </div>
      </nav>

      {/* 2. Hero Section: 2-Column Responsive Layout */}
      <section className="relative overflow-hidden bg-white pb-12 pt-8 sm:pb-16 sm:pt-12 bg-paper-grain">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-blueprint-grid opacity-25" />
        <WatermarkText
          text={product.code}
          tone="light"
          className="absolute -top-3 right-4 sm:top-2 sm:right-8 -z-10"
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Left Column: Framed Large Product Image + Quick Specs */}
            <div className="lg:col-span-5">
              <div className="sticky top-24">
                <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-50/70 p-4 shadow-sm sm:p-6">
                  {/* Subtle Blueprint Linework */}
                  <div className="pointer-events-none absolute inset-0 bg-blueprint-grid opacity-20" />
                  
                  {/* Header badges inside image frame */}
                  <div className="absolute left-3.5 top-3.5 z-10 flex items-center gap-1.5">
                    <span className="rounded-full bg-navy px-2.5 py-0.5 font-mono text-[10px] font-bold tracking-wider text-white shadow-xs">
                      {product.code}
                    </span>
                    <span className="rounded-full border border-slate-200 bg-white/95 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-slate-600 shadow-2xs backdrop-blur-xs">
                      {product.category}
                    </span>
                  </div>

                  <div className="relative flex h-full w-full items-center justify-center">
                    <Image
                      src={product.mainImage}
                      alt={product.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 540px"
                      priority
                      className={`transition-transform duration-500 ease-out group-hover:scale-105 ${
                        product.imageFit === "cover"
                          ? "object-cover object-[50%_25%]"
                          : "object-contain"
                      }`}
                    />
                  </div>
                </div>

                {/* Authenticity Trust Banner under Image */}
                <div className="mt-4 flex items-center justify-between rounded-xl border border-slate-200/80 bg-slate-50/60 p-3.5 text-xs text-slate-600">
                  <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold text-navy">
                    <UIcon name="shield-check" size="sm" className="text-brand" /> Primary Mill Certified
                  </span>
                  <span className="font-mono text-[11px] text-slate-500">
                    Palakkad Plant Quality
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Title, Intro, Verified Key Benefits, Options, and CTA */}
            <div className="lg:col-span-7">
              {/* Category pill */}
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-navy">
                  <UIcon name="layers" size="xs" className="text-brand" /> {product.category}
                </span>
                <span className="font-mono text-xs text-slate-400">
                  SERIES 2026 SPEC
                </span>
              </div>

              {/* Product Title & Tagline */}
              <h1 id={headingId} className="mt-3 text-2xl font-extrabold tracking-[-0.025em] text-navy sm:text-3xl lg:text-4xl">
                {product.title}
              </h1>
              <p className="mt-1 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-brand sm:text-sm">
                {product.tagline}
              </p>

              {/* Concise Introduction */}
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                {product.intro}
              </p>

              {/* Verified Key Benefits */}
              <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50/80 p-4 sm:p-5">
                <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-navy">
                  Key Engineering Advantages
                </h2>
                <ul className="mt-3 space-y-2.5">
                  {product.keyBenefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <UIcon name="check-circle" size="sm" className="mt-0.5 shrink-0 text-brand" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Interactive Product-Specific Options */}
              {product.options.length > 0 && (
                <div className="mt-6 space-y-5 rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm sm:p-6">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-navy">
                      Configure Product Specifications
                    </h2>
                    <span className="font-mono text-[11px] text-brand">
                      Live Preselection
                    </span>
                  </div>

                  <div className="space-y-4">
                    {product.options.map((opt) => (
                      <div key={opt.name} className="space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <label className="font-semibold text-navy">
                            {opt.name}:
                          </label>
                          <span className="font-mono text-[11px] font-bold text-brand">
                            {selectedOptions[opt.name]}
                          </span>
                        </div>

                        {/* Color Selector */}
                        {opt.type === "color" && (
                          <div className="flex flex-wrap gap-2 pt-1" role="radiogroup" aria-label={opt.name}>
                            {opt.choices.map((c) => {
                              const isSelected = selectedOptions[opt.name] === c.value;
                              return (
                                <button
                                  key={c.value}
                                  type="button"
                                  role="radio"
                                  aria-checked={isSelected}
                                  onClick={() => handleOptionChange(opt.name, c.value)}
                                  className={`group flex items-center gap-2 rounded-lg border px-3 py-1.5 text-xs font-medium transition ${
                                    isSelected
                                      ? "border-brand bg-brand/5 text-brand ring-1 ring-brand"
                                      : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                                  }`}
                                >
                                  {c.colorCode && (
                                    <span
                                      className="h-3.5 w-3.5 rounded-full border border-black/10 shadow-2xs"
                                      style={{ backgroundColor: c.colorCode }}
                                      aria-hidden="true"
                                    />
                                  )}
                                  <span>{c.label}</span>
                                </button>
                              );
                            })}
                          </div>
                        )}

                        {/* Radio Button Options */}
                        {opt.type === "radio" && (
                          <div className="flex flex-wrap gap-2 pt-1" role="radiogroup" aria-label={opt.name}>
                            {opt.choices.map((c) => {
                              const isSelected = selectedOptions[opt.name] === c.value;
                              return (
                                <button
                                  key={c.value}
                                  type="button"
                                  role="radio"
                                  aria-checked={isSelected}
                                  onClick={() => handleOptionChange(opt.name, c.value)}
                                  className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition ${
                                    isSelected
                                      ? "border-brand bg-brand text-white shadow-2xs"
                                      : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                                  }`}
                                >
                                  <span>{c.label}</span>
                                  {c.badge && (
                                    <span
                                      className={`rounded px-1.5 py-0.2 font-mono text-[9px] ${
                                        isSelected
                                          ? "bg-white/20 text-white"
                                          : "bg-slate-100 text-slate-500"
                                      }`}
                                    >
                                      {c.badge}
                                    </span>
                                  )}
                                </button>
                              );
                            })}
                          </div>
                        )}

                        {/* Select Dropdown */}
                        {opt.type === "select" && (
                          <div className="relative pt-1">
                            <select
                              value={selectedOptions[opt.name]}
                              onChange={(e) => handleOptionChange(opt.name, e.target.value)}
                              className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs font-medium text-slate-800 shadow-2xs transition focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                            >
                              {opt.choices.map((c) => (
                                <option key={c.value} value={c.value}>
                                  {c.label}
                                </option>
                              ))}
                            </select>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Summary of current configuration */}
                  <div className="rounded-xl border border-slate-100 bg-slate-50 p-3 font-mono text-[11px] text-slate-600">
                    <span className="font-bold text-navy">Included in Quote Request: </span>
                    <span className="text-brand font-medium">{specString}</span>
                  </div>
                </div>
              )}

              {/* Primary Call to Action Button */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href={quoteHref}
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-200 ease-out hover:bg-brand hover:shadow-md active:scale-[0.98]"
                >
                  <span>Request Instant Factory Quotation</span>
                  <UIcon name="arrow-right" size="sm" className="transition-transform duration-200 ease-out group-hover:translate-x-1" />
                </Link>

                <a
                  href={`tel:+91${site.phone}`}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-navy shadow-xs transition-all duration-200 ease-out hover:border-slate-400 hover:bg-slate-50 active:scale-[0.98]"
                >
                  <UIcon name="phone" size="sm" className="text-brand" />
                  <span>Call Factory Desk</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Comprehensive Structured Technical Specification Tables */}
      <section id="specifications" className="relative overflow-hidden bg-slate-50/70 py-12 sm:py-16 scroll-mt-20 bg-paper-grain">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-blueprint-grid opacity-30" />
        <WatermarkText
          text="SPECIFICATIONS"
          tone="light"
          className="absolute -top-3 right-4 sm:top-2 sm:right-8 -z-10"
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-end">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-navy sm:px-3.5">
                <UIcon name="document-signed" size="xs" className="text-brand" /> Technical Data Sheet
              </span>
              <h2 className="mt-2.5 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                Engineering Specifications & Parameters
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                Verified manufacturing tolerances and standard metallurgical benchmarks from our Palakkad facility
              </p>
            </div>
            <div className="hidden font-mono text-xs text-slate-400 sm:block">
              [ IS 277 / IS 513 / IS 4923 ]
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-10 md:grid-cols-2">
            {product.specGroups.map((group) => (
              <div
                key={group.groupName}
                className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="border-b border-slate-100 bg-slate-50/80 px-5 py-3.5">
                  <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-navy">
                    {group.groupName}
                  </h3>
                </div>
                <div className="divide-y divide-slate-100 px-5 text-xs">
                  {group.items.map((item) => (
                    <div key={item.label} className="grid grid-cols-12 py-3">
                      <span className="col-span-5 font-medium text-slate-500">
                        {item.label}
                      </span>
                      <span className="col-span-7 font-mono font-semibold text-navy">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Download note or assurance line */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-4 text-xs text-slate-600">
            <span className="inline-flex items-center gap-2">
              <UIcon name="ruler" size="sm" className="text-brand" />
              <span>
                Need custom millimeter shear sizing or specific project structural loading calculations?
              </span>
            </span>
            <Link
              href={quoteHref}
              className="inline-flex items-center gap-1 font-bold text-brand hover:underline"
            >
              Consult with Technical Engineer &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Dedicated Applications Section */}
      <section id="applications" className="relative overflow-hidden bg-white py-12 sm:py-16 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-navy">
              <UIcon name="sparkles" size="xs" className="text-brand" /> Real-World Use Cases
            </span>
            <h2 className="mt-2.5 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
              Proven Sector Deployments
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Where {product.title} is deployed across Kerala and neighboring commercial corridors
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-10 md:grid-cols-3">
            {product.applications.map((app, i) => (
              <div
                key={app.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={app.image}
                    alt={app.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/50 px-2.5 py-0.5 font-mono text-[10px] font-bold text-white backdrop-blur">
                    APPLICATION 0{i + 1}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-navy sm:text-lg">
                    {app.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                    {app.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Related Products Grid */}
      {relatedProducts.length > 0 && (
        <section className="relative overflow-hidden bg-slate-50/70 py-12 sm:py-16 scroll-mt-20 border-t border-slate-200/80">
          <div className="mx-auto max-w-7xl px-4 sm:px-8">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-brand">
                  Complementary Building Systems
                </span>
                <h2 className="mt-1.5 text-xl font-extrabold tracking-tight text-navy sm:text-2xl">
                  Related Products & Structural Profiles
                </h2>
              </div>
              <Link
                href="/products"
                className="hidden font-mono text-xs font-bold text-navy hover:text-brand sm:inline-flex items-center gap-1"
              >
                All Products &rarr;
              </Link>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/products/${rel.slug}`}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-brand/40 hover:shadow-md"
                >
                  <div>
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-slate-100 bg-slate-50/70 p-3">
                      <Image
                        src={rel.mainImage}
                        alt={rel.title}
                        fill
                        sizes="320px"
                        className={`transition-transform duration-300 group-hover:scale-105 ${
                          rel.imageFit === "cover" ? "object-cover" : "object-contain"
                        }`}
                      />
                    </div>
                    <span className="mt-3 block font-mono text-[10px] font-bold uppercase tracking-wider text-brand">
                      {rel.category}
                    </span>
                    <h3 className="mt-1 text-base font-extrabold text-navy group-hover:text-brand">
                      {rel.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-600 line-clamp-2">
                      {rel.intro}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs font-bold text-navy group-hover:text-brand">
                    <span>View Specifications</span>
                    <UIcon name="arrow-right" size="xs" className="transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. High-Conversion Bottom Quotation CTA Banner */}
      <section className="relative overflow-hidden bg-navy-dark px-4 py-12 text-white sm:px-8 sm:py-16">
        <div className="pointer-events-none absolute inset-0 opacity-15 bg-grid-pattern" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-roof-profile-dark opacity-35" />
        <WatermarkText text="ENQUIRY" tone="dark" className="absolute -bottom-3 right-4 sm:bottom-0 sm:right-8 -z-10" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 font-mono text-[11px] font-semibold text-gold">
                DIRECT PALAKKAD MANUFACTURING FACILITY
              </span>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
                Ready to Order {product.title}?
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
                Get factory-direct pricing, mill test certificates, and immediate delivery timelines across Kerala. We shear and fabricate to your exact site requirements.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href={quoteHref}
                  className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-white hover:text-navy"
                >
                  <span>Request Custom Project Quote</span>
                  <UIcon name="arrow-right" size="sm" />
                </Link>
                <a
                  href={`tel:+91${site.phone}`}
                  className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
                >
                  <UIcon name="phone" size="sm" className="text-gold" />
                  <span>Direct: +91 {site.phone}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-gold">
                  Direct Factory Assurance
                </h3>
                <ul className="mt-3 space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <UIcon name="check-circle" size="xs" className="text-emerald-400" />
                    <span>100% Primary mill coils (JSW / Jindal / Apollo)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <UIcon name="check-circle" size="xs" className="text-emerald-400" />
                    <span>Custom millimeter shear lengths (zero-leak jointing)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <UIcon name="check-circle" size="xs" className="text-emerald-400" />
                    <span>Direct fleet dispatch across all Kerala districts</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

