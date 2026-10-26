import Image from "next/image";
import { ArrowRight, Clock, FileText, MapPin, MessageSquare, Phone, PhoneCall, Truck, ShieldCheck, Headphones } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";
import { site } from "@/lib/site";
import { SheetProfileWatermark, CadDimensionMarks, WatermarkText } from "@/components/IndustrialBackgrounds";

export const metadata = { title: "Contact Factory Desk & Custom Quotes | Durawin" };

const mapQuery = encodeURIComponent(site.address.join(", "));

const quick = [
  { num: "01", title: "Direct Telephone", value: `+91 ${site.phone}`, sub: `${site.contact} (Proprietor)`, Icon: Phone, href: `tel:+91${site.phone}`, action: "Call Directly" },
  { num: "02", title: "Factory Location", value: "Naripotta, Kunissery P.O.", sub: "Palakkad, Kerala — 678681", Icon: MapPin, href: `https://www.google.com/maps/search/?api=1&query=${mapQuery}`, action: "Open GPS Directions" },
  { num: "03", title: "Registered GSTIN", value: site.gstin, sub: "Government Certified Firm", Icon: FileText, href: undefined, action: "Tax Verified" },
];

const steps = [
  { num: "01", title: "Requirement Ingestion", text: "Submit your roof span measurements, sheet profile, and preferred color coating.", Icon: MessageSquare },
  { num: "02", title: "Technical Consultation", text: "Our factory team calls you directly to confirm gauges, cut lengths, and structural accessories.", Icon: PhoneCall },
  { num: "03", title: "Commercial Quotation", text: "Receive transparent factory-direct pricing with zero hidden surcharges or middleman markups.", Icon: FileText },
  { num: "04", title: "Custom Cut & Dispatch", text: "Sheets are roll-formed to exact specifications and delivered directly to your site across Kerala.", Icon: Truck },
];

export default function ContactPage() {
  return (
    <>
      {/* 1. Hero — building photo behind the text, architectural drafting overlay */}
      <section className="relative isolate overflow-hidden bg-white">
        <Image
          src="/images/contact-hero.jpg"
          alt="Durawin industrial building canopy"
          fill
          sizes="100vw"
          className="-z-20 object-cover object-[60%_50%] sm:object-[70%_50%]"
          priority
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-white/80 to-transparent sm:bg-gradient-to-r sm:from-white sm:via-white/70 sm:to-transparent" />
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-30 bg-grid-pattern" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-blueprint-grid opacity-35" />
        <WatermarkText text="FACTORY DESK" className="absolute -bottom-6 right-6 -z-10 opacity-25 hidden md:block" />
        <div className="absolute bottom-3 left-8 -z-10 hidden lg:block">
          <CadDimensionMarks label="DIRECT PLANT DESK" spec="GPS 10.6385° N, 76.5412° E" />
        </div>

        <div className="mx-auto flex min-h-[320px] max-w-7xl items-start px-5 pb-24 pt-10 sm:min-h-[420px] sm:items-center sm:px-8 sm:pb-12 sm:pt-6 lg:min-h-[460px]">
          <div className="w-full sm:w-1/2">
            <span
              style={{ "--hero-delay": "0.02s" } as React.CSSProperties}
              className="hero-rise inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white/90 px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-navy shadow-sm backdrop-blur"
            >
              <Headphones className="h-3.5 w-3.5 text-brand" /> ESTIMATIONS &bull; PALAKKAD PLANT
            </span>
            <h1
              style={{ "--hero-delay": "0.1s" } as React.CSSProperties}
              className="hero-rise mt-3 text-[clamp(1.9rem,8vw,2.8rem)] font-extrabold uppercase leading-[1.08] tracking-tight text-navy sm:mt-4 sm:text-5xl lg:text-[3.5rem]"
            >
              Direct Factory<br />
              <span className="text-brand">Consultation</span>
            </h1>
            <p
              style={{ "--hero-delay": "0.22s" } as React.CSSProperties}
              className="hero-rise mt-3 max-w-sm text-sm font-medium leading-relaxed text-slate-700 sm:mt-4 sm:max-w-md sm:text-base"
            >
              Connect directly with our manufacturing desk for tailored quotes, technical specifications, and delivery coordination.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Precision Contact Console — 3 columns */}
      <section className="relative z-10 -mt-12 px-4 sm:-mt-10 sm:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xl sm:grid-cols-3 sm:divide-x sm:divide-slate-200">
          {quick.map(({ num, title, value, sub, Icon, href, action }, i) => {
            const body = (
              <div className="group flex flex-col justify-between p-5 transition-colors hover:bg-slate-50/70 sm:p-6">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-navy transition-colors group-hover:border-brand/40 group-hover:bg-brand/10 group-hover:text-brand">
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                    <span className="font-mono text-xs font-bold text-slate-300">
                      {num}
                    </span>
                  </div>
                  <p className="mt-3.5 text-xs font-bold uppercase tracking-wider text-slate-400">
                    {title}
                  </p>
                  <p className="mt-1 text-base font-extrabold tracking-tight text-navy sm:text-lg">
                    {value}
                  </p>
                  <p className="text-xs text-slate-500">
                    {sub}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1 font-mono text-[11px] font-semibold text-brand">
                  <span>{action}</span>
                  {href && <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />}
                </div>
              </div>
            );

            return href ? (
              <a
                key={title}
                href={href}
                data-reveal
                style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
                className="block border-b border-slate-100 sm:border-b-0"
                {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {body}
              </a>
            ) : (
              <div
                key={title}
                data-reveal
                style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
                className="block border-b border-slate-100 sm:border-b-0"
              >
                {body}
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Details + Message Form */}
      <section className="relative overflow-hidden bg-slate-50/70 pb-12 pt-10 sm:pb-16 sm:pt-14 bg-paper-grain">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-roof-profile-light opacity-30" />
        <SheetProfileWatermark className="absolute -top-6 -right-10 -z-10 w-[700px] max-w-full opacity-35 hidden md:block" />
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:gap-8 sm:px-8 lg:grid-cols-12">
          {/* Left: Contact Info Console */}
          <div data-reveal className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm sm:p-8 lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-brand">
                <span>HEADQUARTERS & MANUFACTURING</span>
                <span>✦</span>
                <span>KERALA</span>
              </div>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                Factory Desk
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                Reach our Palakkad team for immediate technical and pricing inquiries
              </p>

              <div className="mt-6 space-y-5 border-t border-slate-100 pt-6">
                <div className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-navy">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-slate-400">Phone Hotline</p>
                    <a href={`tel:+91${site.phone}`} className="text-base font-extrabold text-navy hover:text-brand">
                      +91 {site.phone}
                    </a>
                    <p className="text-xs text-slate-500">{site.contact} &bull; Active Calls & WhatsApp</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-navy">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-slate-400">Factory Address</p>
                    <p className="text-sm font-bold text-navy">Durawin Trafford Sheet Manufacturing</p>
                    {site.address.map((l) => (
                      <p key={l} className="text-xs text-slate-600">{l}</p>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-navy">
                    <Clock className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-slate-400">Plant Working Hours</p>
                    <p className="text-sm font-bold text-navy">Monday – Saturday: 8:30 AM – 6:30 PM</p>
                    <p className="text-xs text-slate-500">Sunday: Closed for routine machine maintenance</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-navy">
                    <ShieldCheck className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-slate-400">Tax Compliance</p>
                    <p className="font-mono text-sm font-bold text-navy">{site.gstin}</p>
                    <p className="text-xs text-slate-500">Government Registered Manufacturing Unit</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-slate-100 pt-6">
              <a
                href={`tel:+91${site.phone}`}
                className="flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-navy py-3 text-sm font-bold text-white shadow-md transition hover:bg-brand"
              >
                <Phone className="h-4 w-4" /> Call Direct Desk Now
              </a>
            </div>
          </div>

          {/* Right: Message Form */}
          <div
            id="enquiry"
            data-reveal
            style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            className="scroll-mt-6 rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm sm:p-8 lg:col-span-7"
          >
            <div className="flex items-center gap-2 font-mono text-xs text-brand">
              <span>RAPID ESTIMATION</span>
              <span>✦</span>
              <span>DIRECT WHATSAPP DISPATCH</span>
            </div>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
              Request Project Quotation
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Provide your details and roofing specifications for immediate factory pricing
            </p>

            <EnquiryForm />
          </div>
        </div>
      </section>

      {/* 4. Structured Customer Workflow — 4 phases */}
      <section className="relative overflow-hidden bg-white py-12 sm:py-16 bg-paper-grain">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-blueprint-grid opacity-35" />
        <WatermarkText text="DISPATCH" className="absolute -bottom-8 right-6 -z-10 opacity-20 hidden md:block" />
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div data-reveal className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-end">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-navy sm:px-3.5">
                <Truck className="h-3.5 w-3.5 text-brand" /> Smooth Delivery Path
              </span>
              <h2 className="mt-2.5 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl lg:text-4xl">
                How We Deliver for You
              </h2>
              <p className="mt-1 text-sm text-slate-600 sm:text-base">
                From structural enquiry to custom-cut dispatch directly at your site
              </p>
            </div>
            <div className="hidden font-mono text-xs text-slate-400 sm:block">
              [ 4-PHASE FULFILLMENT ]
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ num, title, text, Icon }, i) => (
              <div
                key={title}
                data-reveal
                style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span className="font-mono text-xs font-bold text-brand">
                      PHASE {num}
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-navy group-hover:bg-brand/10 group-hover:text-brand">
                      <Icon className="h-4.5 w-4.5" strokeWidth={1.8} />
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-bold text-navy">
                    {title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Location / Map */}
      <section className="relative overflow-hidden bg-slate-50/70 pb-12 pt-8 sm:pb-16 sm:pt-10 bg-paper-grain">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-roof-profile-light opacity-25" />
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div data-reveal className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-end">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-navy sm:px-3.5">
                <MapPin className="h-3.5 w-3.5 text-brand" /> Manufacturing Facility
              </span>
              <h2 className="mt-2.5 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl lg:text-4xl">
                Factory Location
              </h2>
              <p className="mt-1 text-sm text-slate-600 sm:text-base">
                Naripotta, Palakkad — fully equipped industrial roll-forming plant
              </p>
            </div>
            <div className="hidden font-mono text-xs text-slate-400 sm:block">
              [ PALAKKAD INDUSTRIAL BELT ]
            </div>
          </div>

          <div
            data-reveal="scale"
            style={{ "--reveal-delay": "100ms" } as React.CSSProperties}
            className="relative mt-6 overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-md sm:mt-8"
          >
            <iframe
              title="Durawin location on Google Maps"
              src={`https://www.google.com/maps?q=${mapQuery}&z=16&output=embed`}
              className="block aspect-[4/3] w-full border-0 sm:aspect-[16/9] md:aspect-auto md:h-[480px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-lg bg-navy px-5 py-2.5 font-mono text-xs font-bold text-white shadow-lg backdrop-blur transition hover:bg-brand"
            >
              Open in Google Maps <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

