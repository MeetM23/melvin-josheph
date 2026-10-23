import Image from "next/image";
import { ArrowRight, FileText, MapPin, MessageSquare, Phone, PhoneCall, Send, Truck } from "lucide-react";
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

const field =
  "w-full rounded-lg border border-slate-200 bg-slate-50/60 px-3 py-2.5 text-xs text-slate-800 placeholder-slate-400 outline-none transition focus:border-brand focus:bg-white sm:px-4 sm:py-3.5 sm:text-sm";

export default function ContactPage() {
  return (
    <>
      {/* 1. Hero — building photo behind the text, white fade on the left */}
      <section className="relative isolate overflow-hidden bg-white">
        <Image
          src="/images/contact-hero.jpg"
          alt="Durawin industrial building canopy"
          fill
          sizes="100vw"
          className="-z-20 object-cover object-[70%_50%]"
          priority
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/70 to-transparent" />

        <div className="mx-auto flex min-h-[235px] max-w-7xl items-center px-5 pb-10 pt-4 sm:min-h-[400px] sm:px-8 lg:min-h-[440px]">
          <div className="w-[70%] sm:w-1/2">
            <span className="inline-block rounded-full bg-navy px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-white sm:px-4 sm:text-[11px]">
              Contact Us
            </span>
            <h1 className="mt-3 text-[1.65rem] font-extrabold uppercase leading-[1.08] tracking-tight text-navy sm:mt-4 sm:text-5xl lg:text-[3.6rem]">
              Get in<br />
              <span className="text-brand">Touch</span>
            </h1>
            <p className="mt-3 max-w-[15rem] text-[11px] font-medium leading-snug text-slate-800 sm:mt-5 sm:max-w-sm sm:text-base sm:leading-relaxed">
              We are here to help you with the best roofing solutions.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Quick contact card overlapping the hero */}
      <section className="relative z-10 -mt-6 px-2 sm:-mt-10 sm:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-3 divide-x divide-slate-200 rounded-2xl bg-white py-3 shadow-[0_8px_30px_rgba(10,37,64,0.12)] sm:py-7">
          {quick.map(({ title, value, sub, Icon, href }) => {
            const body = (
              <>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-brand bg-white text-brand sm:h-14 sm:w-14">
                  <Icon className="h-4 w-4 sm:h-6 sm:w-6" strokeWidth={1.8} />
                </span>
                <p className="mt-1.5 text-[9px] font-semibold uppercase tracking-wide text-slate-500 sm:mt-3 sm:text-xs">{title}</p>
                <p className="break-all text-[10px] font-extrabold leading-tight text-navy sm:text-lg">{value}</p>
                <p className="text-[8px] text-slate-500 sm:text-sm">{sub}</p>
              </>
            );
            const cls = "flex flex-col items-center px-1 text-center sm:px-4";
            return href ? (
              <a key={title} href={href} className={`${cls} transition hover:opacity-80`} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                {body}
              </a>
            ) : (
              <div key={title} className={cls}>{body}</div>
            );
          })}
        </div>
      </section>

      {/* 3. Details + message form */}
      <section className="bg-gradient-to-b from-white to-slate-50 pb-6 pt-7 sm:pb-12 sm:pt-14">
        <div className="mx-auto grid max-w-7xl gap-3 px-4 sm:gap-8 sm:px-8 md:grid-cols-5">
          {/* Contact information */}
          <div className="rounded-xl bg-white p-4 shadow-md sm:p-8 md:col-span-2">
            <h2 className="text-base font-extrabold text-navy sm:text-2xl">Contact Information</h2>
            <p className="mt-0.5 text-[11px] text-slate-500 sm:text-sm">Reach us directly, we are happy to help</p>

            <div className="mt-4 space-y-4 sm:mt-7 sm:space-y-6">
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand text-white sm:h-11 sm:w-11">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                </span>
                <div>
                  <p className="text-[10px] font-semibold uppercase text-slate-500 sm:text-xs">Phone</p>
                  <a href={`tel:+91${site.phone}`} className="text-xs font-bold text-navy hover:text-brand sm:text-base">
                    +91 {site.phone}
                  </a>
                  <p className="text-[11px] text-slate-500 sm:text-sm">{site.contact}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand text-white sm:h-11 sm:w-11">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                </span>
                <div>
                  <p className="text-[10px] font-semibold uppercase text-slate-500 sm:text-xs">Address</p>
                  <p className="text-xs font-bold text-navy sm:text-base">Durawin Trafford Sheet Manufacturing</p>
                  {site.address.map((l) => (
                    <p key={l} className="text-[11px] text-slate-600 sm:text-sm">{l}</p>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand text-white sm:h-11 sm:w-11">
                  <FileText className="h-4 w-4 sm:h-5 sm:w-5" />
                </span>
                <div>
                  <p className="text-[10px] font-semibold uppercase text-slate-500 sm:text-xs">GSTIN</p>
                  <p className="text-xs font-bold text-navy sm:text-base">{site.gstin}</p>
                </div>
              </div>
            </div>

            <a
              href={`tel:+91${site.phone}`}
              className="mt-5 flex items-center justify-center gap-2 rounded-lg bg-navy py-2.5 text-xs font-semibold text-white shadow-md transition hover:bg-brand sm:mt-8 sm:py-3.5 sm:text-sm"
            >
              <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> Call Now
            </a>
          </div>

          {/* Message form */}
          <div className="rounded-xl bg-white p-4 shadow-md sm:p-8 md:col-span-3">
            <h2 className="text-base font-extrabold text-navy sm:text-2xl">Send Us a Message</h2>
            <p className="mt-0.5 text-[11px] text-slate-500 sm:text-sm">Share your requirement and we will get back to you</p>

            <form className="mt-4 space-y-2.5 sm:mt-7 sm:space-y-4">
              <div className="grid gap-2.5 sm:grid-cols-2 sm:gap-4">
                <input type="text" placeholder="Your Name" className={field} required />
                <input type="tel" placeholder="Your Phone Number" className={field} required />
              </div>
              <input type="email" placeholder="Your Email" className={field} required />
              <textarea rows={5} placeholder="Your Message" className={`${field} resize-none`} required />
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-navy py-3 text-xs font-semibold text-white shadow-md transition hover:bg-brand sm:py-3.5 sm:text-sm"
              >
                <Send className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 4. How it works */}
      <section className="bg-white py-6 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <h2 className="text-lg font-extrabold text-navy sm:text-3xl">How We Work With You</h2>
          <p className="mt-0.5 text-[11px] text-slate-600 sm:text-sm">From your first enquiry to delivery</p>
          <div className="relative mt-5 grid grid-cols-4 gap-2 sm:mt-10 sm:gap-6">
            <div className="absolute left-[12.5%] right-[12.5%] top-4 border-t-2 border-dashed border-brand/40 sm:top-7" />
            {steps.map(({ title, text, Icon }, i) => (
              <div key={title} className="relative flex flex-col items-center text-center">
                <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-brand text-[11px] font-extrabold text-white shadow-md ring-4 ring-white sm:h-14 sm:w-14 sm:text-lg">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="mt-2 flex w-full flex-1 flex-col items-center rounded-xl bg-slate-50 px-1.5 py-2.5 shadow-sm sm:mt-4 sm:px-4 sm:py-5">
                  <Icon className="h-4 w-4 text-brand sm:h-7 sm:w-7" strokeWidth={1.8} />
                  <h3 className="mt-1.5 text-[9px] font-bold leading-tight text-navy sm:mt-3 sm:text-base">{title}</h3>
                  <p className="mt-0.5 text-[8px] leading-tight text-slate-500 sm:mt-1.5 sm:text-sm">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Location */}
      <section className="bg-slate-50 pb-8 pt-4 sm:pb-14 sm:pt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <h2 className="text-lg font-extrabold text-navy sm:text-3xl">Our Location</h2>
          <p className="mt-0.5 text-[11px] text-slate-600 sm:text-sm">Visit our manufacturing unit in Palakkad, Kerala</p>

          <div className="relative mt-3 overflow-hidden rounded-xl bg-white shadow-md sm:mt-7 sm:rounded-2xl">
            <iframe
              title="Durawin location on Google Maps"
              src={`https://www.google.com/maps?q=${mapQuery}&z=16&output=embed`}
              className="block h-[320px] w-full border-0 md:h-[500px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-2 text-[10px] font-bold text-navy shadow-lg backdrop-blur transition hover:bg-brand hover:text-white sm:bottom-5 sm:right-5 sm:px-5 sm:py-2.5 sm:text-xs"
            >
              View Larger Map <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
