"use client";

import { useEffect, useRef, useState } from "react";
import { Phone, Send } from "lucide-react";
import { site } from "@/lib/site";

type Field = "name" | "phone" | "email" | "message";
type Values = Record<Field | "product", string>;
type Errors = Partial<Record<Field, string>>;

const PRODUCTS = [
  { value: "", label: "Not sure yet" },
  { value: "trussfold", label: "Trussfold Roofing Sheets" },
  { value: "liner-sheets", label: "Liner Sheets (Interior & Ceiling)" },
  { value: "gp-pipes", label: "Galvanized GP Pipes & Purlins" },
  { value: "gutters", label: "Rainwater Gutters & Downpipes" },
  { value: "colour-coated", label: "Colour Coated Sheets" },
  { value: "galvanized", label: "Galvanized Roofing Sheets" },
  { value: "custom", label: "Customized solution" },
];

const control =
  "mt-1.5 w-full rounded-lg border bg-slate-50/60 px-4 py-3.5 text-base text-slate-800 placeholder-slate-400 outline-none transition focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/20 sm:text-sm";
const labelCls = "block text-sm font-semibold text-navy";

const Required = () => (
  <>
    <span aria-hidden="true" className="text-red-500"> *</span>
    <span className="sr-only"> (required)</span>
  </>
);

function FieldError({ field, message }: { field: Field; message?: string }) {
  return message ? (
    <p id={`${field}-error`} className="mt-1.5 text-sm font-medium text-red-600">
      {message}
    </p>
  ) : null;
}

const readForm = (form: HTMLFormElement): Values => {
  const f = new FormData(form);
  const get = (k: string) => String(f.get(k) ?? "");
  return { name: get("name"), phone: get("phone"), email: get("email"), product: get("product"), message: get("message") };
};

function validate(v: Values): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Please enter your name.";
  // Indian mobile: 10 digits starting 6-9, with optional +91 / 91 / 0 prefix
  const digits = v.phone.replace(/\D/g, "").replace(/^(91|0)(?=\d{10}$)/, "");
  if (!/^[6-9]\d{9}$/.test(digits)) e.phone = "Enter a valid 10-digit mobile number, e.g. 99955 44135.";
  if (v.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = "That email address doesn’t look right.";
  if (v.message.trim().length < 10) e.message = "Tell us a little about what you need (at least 10 characters).";
  return e;
}

export default function EnquiryForm() {
  const productRef = useRef<HTMLSelectElement>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [handoff, setHandoff] = useState<{ url: string; opened: boolean } | null>(null);

  // Product cards link here with ?product=...; preselect it (no state, so no extra render)
  useEffect(() => {
    const wanted = new URLSearchParams(window.location.search).get("product");
    if (wanted && productRef.current && PRODUCTS.some((p) => p.value === wanted)) productRef.current.value = wanted;
  }, []);

  const recheck = (field: Field, form: HTMLFormElement | null) => {
    if (!form) return;
    const next = validate(readForm(form));
    setErrors((prev) => ({ ...prev, [field]: next[field] }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const v = readForm(form);
    const found = validate(v);
    setErrors(found);
    setHandoff(null);
    const first = (["name", "phone", "email", "message"] as Field[]).find((k) => found[k]);
    if (first) {
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    const productLabel = PRODUCTS.find((p) => p.value === v.product)?.label ?? "Not sure yet";
    const text = [
      "Enquiry from the Durawin website",
      `Name: ${v.name.trim()}`,
      `Phone: ${v.phone.trim()}`,
      v.email.trim() && `Email: ${v.email.trim()}`,
      `Product: ${productLabel}`,
      `Requirement: ${v.message.trim()}`,
    ]
      .filter(Boolean)
      .join("\n");
    const url = `https://wa.me/91${site.phone}?text=${encodeURIComponent(text)}`;
    const win = window.open(url, "_blank", "noopener,noreferrer");
    setHandoff({ url, opened: win !== null });
  };

  const cls = (field: Field, extra = "") => `${control} ${errors[field] ? "border-red-400" : "border-slate-200"} ${extra}`;
  const a11y = (field: Field) => ({
    "aria-invalid": errors[field] ? (true as const) : undefined,
    "aria-describedby": errors[field] ? `${field}-error` : undefined,
    onBlur: (e: React.FocusEvent<HTMLElement>) => recheck(field, (e.currentTarget as HTMLInputElement).form),
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (errors[field]) recheck(field, e.currentTarget.form);
    },
  });

  return (
    <form onSubmit={onSubmit} noValidate className="mt-5 space-y-6 sm:mt-7">
      <fieldset className="space-y-4 rounded-xl border border-slate-100 bg-slate-50/50 p-4 sm:p-5">
        <legend className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-brand">
          <span>01 // CONTACT DETAILS</span>
        </legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="enq-name" className={labelCls}>Name<Required /></label>
            <input id="enq-name" name="name" type="text" autoComplete="name" placeholder="e.g. Rajesh Kumar" className={cls("name")} {...a11y("name")} />
            <FieldError field="name" message={errors.name} />
          </div>
          <div>
            <label htmlFor="enq-phone" className={labelCls}>Phone<Required /></label>
            <input id="enq-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="10-digit mobile number" className={cls("phone")} {...a11y("phone")} />
            <FieldError field="phone" message={errors.phone} />
          </div>
        </div>
        <div>
          <label htmlFor="enq-email" className={labelCls}>
            Email <span className="font-normal text-slate-500">(optional)</span>
          </label>
          <input id="enq-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" className={cls("email")} {...a11y("email")} />
          <FieldError field="email" message={errors.email} />
        </div>
      </fieldset>

      <fieldset className="space-y-4 rounded-xl border border-slate-100 bg-slate-50/50 p-4 sm:p-5">
        <legend className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-brand">
          <span>02 // SPECIFICATION REQUIREMENT</span>
        </legend>
        <div>
          <label htmlFor="enq-product" className={labelCls}>
            Target Product <span className="font-normal text-slate-500">(optional)</span>
          </label>
          <select ref={productRef} id="enq-product" name="product" defaultValue="" className={`${control} border-slate-200`}>
            {PRODUCTS.map((p) => (
              <option key={p.value} value={p.value}>{p.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="enq-message" className={labelCls}>Project Details & Quantities<Required /></label>
          <textarea
            id="enq-message"
            name="message"
            rows={4}
            placeholder="Roof span measurements, sheet lengths, preferred colour, project site location…"
            className={cls("message", "resize-none")}
            {...a11y("message")}
          />
          <FieldError field="message" message={errors.message} />
        </div>
      </fieldset>

      <div>
        <button
          type="submit"
          className="flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-brand py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand active:scale-[0.99]"
        >
          <Send className="h-4 w-4" /> Transmit Enquiry to WhatsApp Desk
        </button>
        <p className="mt-2 text-center text-xs text-slate-500">Opens WhatsApp directly with formatted specifications ready to send to {site.contact}.</p>
      </div>

      <div role="status" aria-live="polite">
        {handoff && (
          <div className="rounded-lg border border-brand/30 bg-brand-light p-4 text-sm text-navy">
            <p className="font-semibold">
              {handoff.opened ? "WhatsApp should now be open with your enquiry filled in." : "We couldn’t open WhatsApp automatically."}
            </p>
            <p className="mt-1 text-slate-700">
              Your enquiry is <strong>not sent yet</strong> — press Send in WhatsApp to complete it.{" "}
              {!handoff.opened && (
                <>
                  <a href={handoff.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand underline">Open WhatsApp</a>
                  {" · "}
                </>
              )}
              <a href={`tel:+91${site.phone}`} className="inline-flex items-center gap-1 font-semibold text-brand underline">
                <Phone className="h-3.5 w-3.5" /> or call +91 {site.phone}
              </a>
            </p>
          </div>
        )}
      </div>
    </form>
  );
}
