"use client";

import React, { useId } from "react";
import Image from "next/image";
import Link from "next/link";
import UIcon from "@/components/UIcon";
import { ProductData, getProductBySlug } from "@/lib/products-data";
import { site } from "@/lib/site";
import { WatermarkText } from "@/components/IndustrialBackgrounds";
import ExpandableText from "@/components/ExpandableText";

export default function ProductDetailClient({ product }: { product: ProductData }) {
  const headingId = useId();

  const quoteHref = `/contact?product=${encodeURIComponent(
    product.enquiryValue
  )}#enquiry`;

  // Related products data
  const relatedProducts = product.relatedProductSlugs
    .map((slug) => getProductBySlug(slug))
    .filter((p): p is ProductData => p !== undefined);

  return (
    <div className="relative bg-white pb-20 lg:pb-0">
      {/* 1. Breadcrumbs & Header Bar */}
      <nav
        aria-label="Breadcrumbs"
        className="border-b border-slate-100 bg-slate-50/60 px-4 py-2.5 sm:px-8"
      >
        <div className="mx-auto flex max-w-7xl items-center gap-2 text-xs text-slate-500">
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

      {/* 2. Main Product Section: 2-Column Responsive Layout with Sticky Image */}
      <section className="relative bg-white pb-10 pt-4 sm:pb-16 sm:pt-8 lg:pb-20 lg:pt-12 bg-paper-grain">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-blueprint-grid opacity-25" />
        <WatermarkText
          text={product.code}
          tone="light"
          className="absolute -top-3 right-4 sm:top-2 sm:right-8 -z-10"
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="grid grid-cols-1 items-start gap-4 sm:gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Left Column: Framed Product Image - Sticky on Desktop */}
            <div className="lg:col-span-5 lg:self-start lg:sticky lg:top-28">
              <div className="group relative aspect-[4/3] w-full max-h-[290px] sm:max-h-[360px] lg:max-h-[calc(100vh-9.5rem)] overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200/90 bg-[#F8FAFC] shadow-sm">
                {/* Subtle Blueprint Linework */}
                <div className="pointer-events-none absolute inset-0 bg-blueprint-grid opacity-15" />

                {/* Header badges inside image frame (hidden on mobile for clean un-obscured viewing) */}
                <div className="absolute left-3.5 top-3.5 z-10 hidden sm:flex items-center gap-1.5">
                  <span className="rounded-full bg-navy px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-white shadow-xs">
                    {product.code}
                  </span>
                  <span className="rounded-full border border-slate-200 bg-white/95 px-2.5 py-0.5 text-[10px] font-semibold text-slate-600 shadow-2xs backdrop-blur-xs">
                    {product.category}
                  </span>
                </div>

                <div
                  className={`relative flex h-full w-full items-center justify-center ${
                    product.imageFit === "contain" ? "p-4 sm:p-7" : ""
                  }`}
                >
                  <Image
                    src={product.mainImage}
                    alt={product.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 540px"
                    priority
                    className={`transition-transform duration-500 ease-out group-hover:scale-105 ${
                      product.imageFit === "cover"
                        ? "object-cover object-center"
                        : "object-contain object-center"
                    }`}
                  />
                </div>
              </div>

              {/* Authenticity Trust Banner under Image (desktop only) */}
              <div className="mt-4 hidden lg:flex items-center justify-between rounded-xl border border-slate-200/80 bg-slate-50/60 p-3.5 text-xs text-slate-600">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy">
                  <UIcon name="shield-check" size="sm" className="text-brand" /> Primary Mill Certified
                </span>
                <span className="text-xs text-slate-500">
                  Palakkad Plant Quality
                </span>
              </div>
            </div>

            {/* Right Column: Title, Intro, Key Benefits, Options, CTA, and Specifications */}
            <div className="lg:col-span-7">
              {/* Desktop-only Category pill */}
              <div className="hidden lg:flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy">
                  <UIcon name="layers" size="xs" className="text-brand" /> {product.category}
                </span>
                <span className="text-xs text-slate-400">
                  SERIES 2026 SPEC
                </span>
              </div>

              {/* Product Title & Tagline */}
              <h1 id={headingId} className="text-xl font-extrabold tracking-tight text-navy sm:text-3xl lg:text-4xl">
                {product.title}
              </h1>
              <p className="mt-1 text-xs font-bold uppercase tracking-wider text-brand sm:text-sm">
                {product.tagline}
              </p>

              {/* Short Concise Description (Expandable 2-3 lines) */}
              <ExpandableText
                text={product.intro}
                className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm lg:text-base sm:mt-3"
                mobileLines={3}
                desktopLines={3}
              />

              {/* Verified Key Benefits: Clean, compact list */}
              <div className="mt-4 rounded-xl sm:rounded-2xl border border-slate-100 bg-slate-50/80 p-3.5 sm:p-5 sm:mt-6">
                <h2 className="text-xs font-bold uppercase tracking-wider text-navy">
                  Key Advantages
                </h2>
                <ul className="mt-2.5 space-y-2 sm:mt-3 sm:space-y-2.5">
                  {product.keyBenefits.slice(0, 4).map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-700 sm:text-sm">
                      <UIcon name="check-circle" size="xs" className="mt-0.5 shrink-0 text-brand" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* In-page Primary Call to Action Buttons */}
              <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                <Link
                  href={quoteHref}
                  className="group inline-flex min-h-11 sm:min-h-12 items-center justify-center gap-2 rounded-full bg-navy px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-sm transition-all duration-200 ease-out hover:bg-brand hover:shadow-md active:scale-[0.98]"
                >
                  <span>Request Instant Factory Quotation</span>
                  <UIcon name="arrow-right" size="xs" className="transition-transform duration-200 ease-out group-hover:translate-x-1" />
                </Link>

                <a
                  href={`tel:+91${site.phone}`}
                  className="inline-flex min-h-11 sm:min-h-12 items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-xs sm:text-sm font-semibold text-navy shadow-xs transition-all duration-200 ease-out hover:border-slate-400 hover:bg-slate-50 active:scale-[0.98]"
                >
                  <UIcon name="phone" size="xs" className="text-brand" />
                  <span>Call Factory Desk</span>
                </a>
              </div>

              {/* 3. Simplified Customer-Friendly Product Specifications */}
              <div id="specifications" className="mt-8 border-t border-slate-100 pt-6 sm:mt-10 sm:border-slate-200/80 sm:pt-8 scroll-mt-24">
                <div>
                  <h2 className="text-base sm:text-2xl font-bold tracking-tight text-navy">
                    Product Specifications
                  </h2>
                  <p className="mt-0.5 text-xs text-slate-500 sm:text-sm">
                    Verified dimensions and certified standards
                  </p>
                </div>

                <div className="mt-4 grid grid-cols-1 gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-4">
                  {product.specGroups.map((group) => (
                    <div
                      key={group.groupName}
                      className="rounded-xl border border-slate-200/80 bg-white p-3.5 sm:p-4 shadow-2xs"
                    >
                      <h3 className="border-b border-slate-100 pb-2 text-[11px] font-bold uppercase tracking-wider text-navy sm:text-xs">
                        {group.groupName}
                      </h3>
                      <div className="divide-y divide-slate-100 text-xs">
                        {group.items.map((item) => (
                          <div key={item.label} className="flex items-center justify-between py-2 gap-3 text-[11px] sm:text-xs">
                            <span className="font-medium text-slate-500 shrink-0">
                              {item.label}
                            </span>
                            <span className="font-semibold text-navy text-right">
                              {item.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Consultation note */}
                <div className="mt-3.5 sm:mt-4 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-200 bg-slate-50/60 p-3 sm:p-3.5 text-xs text-slate-600">
                  <span className="inline-flex items-center gap-1.5">
                    <UIcon name="ruler" size="sm" className="text-brand shrink-0" />
                    <span className="text-[11px] sm:text-xs">Custom millimeter sizing available on request</span>
                  </span>
                  <Link
                    href={quoteHref}
                    className="font-bold text-brand hover:underline text-[11px] sm:text-xs"
                  >
                    Consult Engineers &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Dedicated Applications Section — Compact & Consistent */}
      <section id="applications" className="relative overflow-hidden bg-slate-50/70 py-8 sm:py-16 scroll-mt-20 border-t border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div>
            <h2 className="text-base sm:text-2xl font-bold tracking-tight text-navy">
              Sector Applications
            </h2>
            <p className="mt-0.5 text-xs sm:text-sm text-slate-600">
              Where {product.title} is deployed across Kerala
            </p>
          </div>

          <div className="mt-4 sm:mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-6">
            {product.applications.map((app) => (
              <div
                key={app.title}
                className="group relative flex sm:flex-col items-center sm:items-stretch gap-3 sm:gap-0 overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200/80 bg-white p-2.5 sm:p-0 shadow-xs transition hover:shadow-md"
              >
                <div className="relative aspect-[4/3] w-24 sm:w-full shrink-0 overflow-hidden rounded-lg sm:rounded-t-2xl sm:rounded-b-none bg-slate-100">
                  <Image
                    src={app.image}
                    alt={app.title}
                    fill
                    sizes="(max-width: 640px) 96px, 380px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="min-w-0 flex-1 sm:p-5">
                  <h3 className="text-xs sm:text-base font-bold text-navy truncate sm:whitespace-normal">
                    {app.title}
                  </h3>
                  <ExpandableText
                    text={app.desc}
                    className="mt-0.5 sm:mt-1.5 text-[11px] sm:text-xs leading-relaxed text-slate-600"
                    mobileLines={2}
                    desktopLines={2}
                    minChars={95}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Related Products Grid — Compact on Mobile */}
      {relatedProducts.length > 0 && (
        <section className="relative overflow-hidden bg-white py-8 sm:py-16 scroll-mt-20 border-t border-slate-200/80">
          <div className="mx-auto max-w-7xl px-4 sm:px-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base sm:text-xl font-bold tracking-tight text-navy">
                  Related Products
                </h2>
                <p className="mt-0.5 text-xs text-slate-500">
                  Complementary structural and roofing systems
                </p>
              </div>
              <Link
                href="/products"
                className="text-xs font-semibold text-brand hover:underline"
              >
                View All &rarr;
              </Link>
            </div>

            <div className="mt-4 sm:mt-6 grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
              {relatedProducts.slice(0, 4).map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/products/${rel.slug}`}
                  className="group flex flex-col justify-between overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200/80 bg-white p-2.5 sm:p-4 shadow-xs transition hover:border-brand/40"
                >
                  <div>
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-slate-100 bg-[#F8FAFC]">
                      <div className={`relative flex h-full w-full items-center justify-center ${rel.imageFit === "contain" ? "p-2 sm:p-4" : ""}`}>
                        <Image
                          src={rel.mainImage}
                          alt={rel.title}
                          fill
                          sizes="(max-width: 640px) 45vw, 320px"
                          className={`transition-transform duration-300 group-hover:scale-105 ${
                            rel.imageFit === "cover" ? "object-cover object-center" : "object-contain object-center"
                          }`}
                        />
                      </div>
                    </div>
                    <h3 className="mt-2 text-xs sm:text-base font-bold text-navy group-hover:text-brand line-clamp-1">
                      {rel.title}
                    </h3>
                    <p className="mt-0.5 hidden sm:block text-xs text-slate-600 line-clamp-2">
                      {rel.intro}
                    </p>
                  </div>

                  <span className="mt-2 text-[11px] font-semibold text-brand flex items-center gap-1">
                    <span>View Details</span>
                    <UIcon name="arrow-right" size="xs" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. Simplified High-Conversion Bottom Quotation CTA Banner */}
      <section className="relative overflow-hidden bg-navy-dark px-4 py-8 text-white sm:px-8 sm:py-16">
        <div className="pointer-events-none absolute inset-0 opacity-15 bg-grid-pattern" />
        <WatermarkText text="ENQUIRY" tone="dark" className="absolute -bottom-3 right-4 sm:bottom-0 sm:right-8 -z-10" />

        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-5 sm:gap-8">
            <div className="max-w-xl text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-0.5 text-[10px] font-semibold text-gold sm:text-xs sm:px-3.5 sm:py-1">
                DIRECT PALAKKAD MANUFACTURING FACILITY
              </span>
              <h2 className="mt-2 text-xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
                Ready to Order {product.title}?
              </h2>
              <p className="mt-1.5 text-xs text-slate-300 sm:text-base leading-relaxed">
                Direct factory pricing, custom cut lengths, and prompt fleet delivery across all Kerala districts.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full sm:w-auto">
              <Link
                href={quoteHref}
                className="inline-flex min-h-11 sm:min-h-12 items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-md transition hover:bg-white hover:text-navy active:scale-95 text-center"
              >
                <span>Request Project Quote</span>
                <UIcon name="arrow-right" size="xs" />
              </Link>
              <a
                href={`tel:+91${site.phone}`}
                className="inline-flex min-h-11 sm:min-h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-xs sm:text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20 active:scale-95 text-center"
              >
                <UIcon name="phone" size="xs" className="text-gold" />
                <span>+91 {site.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Sticky Bottom Enquiry Bar on Mobile */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200/90 bg-white/95 px-4 py-2.5 shadow-[0_-4px_16px_rgba(0,0,0,0.06)] backdrop-blur-md lg:hidden">
        <div className="mx-auto flex max-w-md items-center justify-between gap-3">
          <div className="min-w-0">
            <span className="block truncate text-xs font-bold text-navy">{product.title}</span>
            <span className="block text-[10px] text-slate-500 truncate">Palakkad Direct Factory</span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={`tel:+91${site.phone}`}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-navy transition active:scale-95"
              aria-label="Call Factory Desk"
            >
              <UIcon name="phone" size="xs" className="text-brand" />
            </a>
            <Link
              href={quoteHref}
              className="inline-flex h-10 items-center gap-1.5 rounded-full bg-navy px-4 text-xs font-bold text-white shadow-xs transition active:scale-95 hover:bg-brand"
            >
              <span>Enquire Now</span>
              <UIcon name="arrow-right" size="xs" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
