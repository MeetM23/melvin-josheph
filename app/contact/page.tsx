import Image from "next/image";
import { ArrowRight, FileText, MapPin, MessageSquare, Phone, PhoneCall, Truck } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";
import { site } from "@/lib/site";

export const metadata = { title: "Contact Us" };

const mapQuery = encodeURIComponent(site.address.join(", "));

const quick = [
  { title: "Call Us", value: `+91 ${site.phone}`, sub: site.contact, Icon: Phone, href: `tel:+91${site.phone}` },
  { title: "Visit Us", value: "Naripotta, Palakkad", sub: "Kunissery P.O.", Icon: MapPin, href: `https://www.google.com/maps/search/?api=1&query=${mapQuery}` },
  { title: "GSTIN", value: site.gstin, sub: "Registered business", Icon: FileText, href: undefined },
];

const steps = [
  { title: "Send Enquiry", text: "Tell us your requirement", Icon: MessageSquare },
  { title: "We Call You", text: "We discuss size and colour", Icon: PhoneCall },
  { title: "Get Quote", text: "Receive a clear price", Icon: FileText },
  { title: "Delivery", text: "Sheets cut and dispatched", Icon: Truck },
];

export default function ContactPage() {
  return (
    <>
      {/* 1. Hero — building photo behind the text, white fade */}
      <section className="relative isolate overflow-hidden bg-white">
        <Image
          src="/images/contact-hero.jpg"
          alt="Durawin industrial building canopy"
          fill
          sizes="100vw"
          className="-z-20 object-cover object-[60%_50%] sm:object-[70%_50%]"
          priority
        />
        {/* phones: fade from the top so the building shows at the bottom; sm+: fade from the left */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-white/80 to-transparent sm:bg-gradient-to-r sm:from-white sm:via-white/70 sm:to-transparent" />

        <div className="mx-auto flex min-h-[300px] max-w-7xl items-start px-5 pb-24 pt-8 sm:min-h-[400px] sm:items-center sm:px-8 sm:pb-10 sm:pt-4 lg:min-h-[440px]">
          <div className="w-full sm:w-1/2">
            <span
              style={{ "--hero-delay": "0.02s" } as React.CSSProperties}
              className="hero-rise inline-block rounded-full bg-navy px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white sm:px-4"
            >
              Contact Us
            </span>
            <h1
              style={{ "--hero-delay": "0.1s" } as React.CSSProperties}
              className="hero-rise mt-3 text-[clamp(1.9rem,9vw,2.6rem)] font-extrabold uppercase leading-[1.08] tracking-tight text-navy sm:mt-4 sm:text-5xl lg:text-[3.6rem]"
            >
              Get in<br />
              <span className="text-brand">Touch</span>
            </h1>
            <p
              style={{ "--hero-delay": "0.22s" } as React.CSSProperties}
              className="hero-rise mt-3 max-w-xs text-sm font-medium leading-snug text-slate-800 sm:mt-5 sm:max-w-sm sm:text-base sm:leading-relaxed"
            >
              We are here to help you with the best roofing solutions.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Quick contact card — stacked rows on phones, 3 columns from sm */}
      <section className="relative z-10 -mt-12 px-4 sm:-mt-10 sm:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-slate-200 rounded-2xl bg-white py-1 shadow-[0_8px_30px_rgba(10,37,64,0.12)] sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:py-7">
          {quick.map(({ title, value, sub, Icon, href }, i) => {
            const body = (
              <>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-brand bg-white text-brand shadow-sm transition-transform duration-300 hover:scale-105 sm:h-14 sm:w-14">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.8} />
                </span>
                <div className="min-w-0 sm:contents">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 sm:mt-3">{title}</p>
                  <p className="text-base font-extrabold leading-tight text-navy [overflow-wrap:anywhere] sm:text-lg sm:break-all">{value}</p>
                  <p className="text-sm text-slate-500">{sub}</p>
                </div>
              </>
            );
            const cls = "flex min-h-[72px] items-center gap-4 px-4 py-3 text-left sm:min-h-0 sm:flex-col sm:gap-0 sm:px-4 sm:py-0 sm:text-center";
            return href ? (
              <a
                key={title}
                href={href}
                data-reveal
                style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
                className={`${cls} transition hover:opacity-80`}
                {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {body}
              </a>
            ) : (
              <div
                key={title}
                data-reveal
                style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
                className={cls}
              >
                {body}
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Details + message form */}
      <section className="bg-gradient-to-b from-white to-slate-50 pb-8 pt-8 sm:pb-12 sm:pt-14">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:gap-8 sm:px-8 md:grid-cols-5">
          {/* Contact information */}
          <div data-reveal className="min-w-0 rounded-xl bg-white p-5 shadow-md sm:p-8 md:col-span-2">
            <h2 className="text-xl font-extrabold text-navy sm:text-2xl">Contact Information</h2>
            <p className="mt-0.5 text-sm text-slate-500">Reach us directly, we are happy to help</p>

            <div className="mt-5 space-y-5 sm:mt-7 sm:space-y-6">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-white sm:h-11 sm:w-11">
                  <Phone className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase text-slate-500">Phone</p>
                  <a href={`tel:+91${site.phone}`} className="text-base font-bold text-navy hover:text-brand">
                    +91 {site.phone}
                  </a>
                  <p className="text-sm text-slate-500">{site.contact}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-white sm:h-11 sm:w-11">
                  <MapPin className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase text-slate-500">Address</p>
                  <p className="text-base font-bold text-navy">Durawin Trafford Sheet Manufacturing</p>
                  {site.address.map((l) => (
                    <p key={l} className="text-sm text-slate-600">{l}</p>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-white sm:h-11 sm:w-11">
                  <FileText className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase text-slate-500">GSTIN</p>
                  <p className="text-base font-bold text-navy [overflow-wrap:anywhere]">{site.gstin}</p>
                </div>
              </div>
            </div>

            <a
              href={`tel:+91${site.phone}`}
              className="mt-6 flex min-h-12 items-center justify-center gap-2 rounded-lg bg-navy py-3 text-sm font-semibold text-white shadow-md transition hover:bg-brand sm:mt-8 sm:py-3.5"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>

          {/* Message form */}
          <div id="enquiry" data-reveal style={{ "--reveal-delay": "120ms" } as React.CSSProperties} className="min-w-0 scroll-mt-4 rounded-xl bg-white p-5 shadow-md sm:p-8 md:col-span-3">
            <h2 className="text-xl font-extrabold text-navy sm:text-2xl">Send Us a Message</h2>
            <p className="mt-0.5 text-sm text-slate-500">Share your requirement and we will get back to you</p>

            <EnquiryForm />
          </div>
        </div>
      </section>

      {/* 4. How it works — 2x2 on phones, one row from sm */}
      <section className="bg-white py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div data-reveal>
            <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">How We Work With You</h2>
            <p className="mt-0.5 text-sm text-slate-600">From your first enquiry to delivery</p>
          </div>
          <div className="relative mt-6 grid grid-cols-2 gap-x-3 gap-y-6 sm:mt-10 sm:grid-cols-4 sm:gap-6">
            <div className="absolute left-[12.5%] right-[12.5%] top-7 hidden border-t-2 border-dashed border-brand/40 sm:block" />
            {steps.map(({ title, text, Icon }, i) => (
              <div key={title} data-reveal style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties} className="relative flex min-w-0 flex-col items-center text-center">
                <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-brand text-sm font-extrabold text-white shadow-md ring-4 ring-white sm:h-14 sm:w-14 sm:text-lg">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="mt-3 flex w-full flex-1 flex-col items-center rounded-xl bg-slate-50 px-3 py-4 shadow-sm sm:mt-4 sm:px-4 sm:py-5">
                  <Icon className="h-6 w-6 text-brand sm:h-7 sm:w-7" strokeWidth={1.8} />
                  <h3 className="mt-2 text-sm font-bold leading-tight text-navy sm:mt-3 sm:text-base">{title}</h3>
                  <p className="mt-1 text-xs leading-snug text-slate-500 sm:mt-1.5 sm:text-sm sm:leading-tight">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Location */}
      <section className="bg-slate-50 pb-10 pt-6 sm:pb-14 sm:pt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div data-reveal>
            <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">Our Location</h2>
            <p className="mt-0.5 text-sm text-slate-600">Visit our manufacturing unit in Palakkad, Kerala</p>
          </div>

          <div data-reveal="scale" style={{ "--reveal-delay": "100ms" } as React.CSSProperties} className="relative mt-4 overflow-hidden rounded-xl bg-white shadow-md sm:mt-7 sm:rounded-2xl">
            <iframe
              title="Durawin location on Google Maps"
              src={`https://www.google.com/maps?q=${mapQuery}&z=16&output=embed`}
              className="block aspect-[4/3] w-full border-0 sm:aspect-[16/9] md:aspect-auto md:h-[500px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-3 right-3 inline-flex min-h-10 items-center sm:min-h-0 gap-1.5 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-navy shadow-lg backdrop-blur transition hover:bg-brand hover:text-white sm:bottom-5 sm:right-5 sm:px-5 sm:py-2.5"
            >
              View Larger Map <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
