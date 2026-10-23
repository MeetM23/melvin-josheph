import Link from "next/link";
import { policies } from "@/lib/site";

export type PolicySection = { heading: string; body: string[]; list?: string[] };

export default function PolicyPage({
  title,
  intro,
  updated,
  sections,
}: {
  title: string;
  intro: string;
  updated: string;
  sections: PolicySection[];
}) {
  return (
    <>
      <section className="bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-4xl px-5 pb-6 pt-8 sm:px-8 sm:pb-10 sm:pt-16">
          <nav aria-label="Breadcrumb" className="text-[10px] text-slate-500 sm:text-sm">
            <Link href="/" className="hover:text-brand">Home</Link> <span className="mx-1">/</span>
            <span className="font-semibold text-navy">{title}</span>
          </nav>
          <h1 className="mt-3 text-2xl font-extrabold uppercase tracking-tight text-navy sm:text-5xl">{title}</h1>
          <p className="mt-2 text-xs text-slate-600 sm:mt-4 sm:text-base">{intro}</p>
          <p className="mt-2 text-[10px] font-semibold uppercase tracking-wide text-brand sm:text-xs">Last updated: {updated}</p>
        </div>
      </section>

      <section className="bg-white pb-10 sm:pb-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="space-y-5 rounded-xl bg-white p-4 shadow-md sm:space-y-8 sm:rounded-2xl sm:p-10">
            {sections.map((s, i) => (
              <div key={s.heading}>
                <h2 className="flex items-center gap-2 text-sm font-bold text-navy sm:text-xl">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-[10px] font-extrabold text-white sm:h-8 sm:w-8 sm:text-sm">
                    {i + 1}
                  </span>
                  {s.heading}
                </h2>
                {s.body.map((p) => (
                  <p key={p} className="mt-2 text-xs leading-relaxed text-slate-600 sm:mt-3 sm:text-base">{p}</p>
                ))}
                {s.list && (
                  <ul className="mt-2 space-y-1 sm:mt-3 sm:space-y-1.5">
                    {s.list.map((l) => (
                      <li key={l} className="flex items-start gap-2 text-xs text-slate-600 sm:text-base">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand sm:mt-2" />
                        {l}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-xs sm:mt-8 sm:text-sm">
            <div className="flex gap-4">
              {policies.map((p) => (
                <Link key={p.href} href={p.href} className="font-semibold text-brand hover:underline">{p.label}</Link>
              ))}
            </div>
            <Link href="/contact" className="rounded-lg bg-navy px-4 py-2 font-semibold text-white transition hover:bg-brand sm:px-6 sm:py-2.5">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
