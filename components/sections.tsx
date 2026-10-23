import Link from "next/link";
import { BadgeCheck, Factory, Layers, Palette, Phone, Ruler, Truck, PackageSearch, ArrowRight } from "lucide-react";
import { site } from "@/lib/site";

const reasons = [
  { title: "Premium Raw Materials", text: "Steel coils from trusted brands", Icon: Layers },
  { title: "Precision Roll Forming", text: "Accurate, uniform profiles", Icon: Factory },
  { title: "Custom Lengths", text: "Cut to your exact requirement", Icon: Ruler },
  { title: "Colour Options", text: "Blue, red, silver and more", Icon: Palette },
  { title: "Quality Checked", text: "Inspected before dispatch", Icon: BadgeCheck },
  { title: "Timely Delivery", text: "Reliable supply across Kerala", Icon: Truck },
];

const steps = [
  { title: "Raw Material", text: "Premium steel coils are selected and stored", Icon: Layers },
  { title: "Roll Forming", text: "Coils are profiled into trussfold sheets", Icon: Factory },
  { title: "Quality Check", text: "Every batch is inspected for finish and strength", Icon: PackageSearch },
  { title: "Delivery", text: "Cut to length and dispatched to your site", Icon: Truck },
];

export function WhyChoose() {
  return (
    <section className="bg-slate-50 pb-6 pt-4 sm:pb-12 sm:pt-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <h2 className="text-lg font-extrabold text-navy sm:text-3xl">Why Choose Durawin</h2>
        <p className="mt-0.5 text-[11px] text-slate-600 sm:text-sm">Built on 20 years of roofing experience</p>

        <div className="mt-3 grid grid-cols-3 gap-2.5 sm:mt-7 sm:gap-6">
          {reasons.map(({ title, text, Icon }) => (
            <div
              key={title}
              className="flex flex-col items-center rounded-xl bg-white px-1.5 py-3 text-center shadow-md sm:px-5 sm:py-7"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-brand bg-white text-brand sm:h-14 sm:w-14">
                <Icon className="h-4 w-4 sm:h-6 sm:w-6" strokeWidth={1.8} />
              </span>
              <h3 className="mt-2 text-[9px] font-bold leading-tight text-navy sm:mt-4 sm:text-base">{title}</h3>
              <p className="mt-0.5 text-[8px] leading-tight text-slate-500 sm:mt-1.5 sm:text-sm">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="bg-white py-6 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <h2 className="text-lg font-extrabold text-navy sm:text-3xl">Our Manufacturing Process</h2>
        <p className="mt-0.5 text-[11px] text-slate-600 sm:text-sm">From steel coil to finished roofing sheet</p>

        <div className="relative mt-5 grid grid-cols-4 gap-2 sm:mt-10 sm:gap-6">
          {/* connector line behind the numbered circles */}
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
  );
}

export function CallStrip() {
  return (
    <section className="bg-white px-4 pb-6 sm:px-8 sm:pb-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-2xl bg-gradient-to-r from-navy to-navy-subtle px-4 py-4 text-white shadow-lg sm:px-10 sm:py-8">
        <div>
          <p className="text-xs font-extrabold sm:text-2xl">Need roofing sheets for your project?</p>
          <p className="mt-0.5 flex items-center gap-1.5 text-[10px] text-slate-300 sm:mt-1.5 sm:text-base">
            <Phone className="h-3 w-3 sm:h-4 sm:w-4" /> {site.contact}: {site.phone}
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-brand px-3 py-2 text-[10px] font-semibold text-white shadow-md transition hover:bg-white hover:text-navy sm:px-7 sm:py-3.5 sm:text-sm"
        >
          Get a Quote <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
        </Link>
      </div>
    </section>
  );
}
