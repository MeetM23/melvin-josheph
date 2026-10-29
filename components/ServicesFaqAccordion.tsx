"use client";

import React, { useState } from "react";
import UIcon from "@/components/UIcon";

export interface FaqItem {
  question: string;
  answer: string;
}

export default function ServicesFaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        const buttonId = `faq-btn-${idx}`;
        const panelId = `faq-panel-${idx}`;

        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-xl border border-slate-200/90 bg-white transition hover:border-brand/40"
          >
            <button
              id={buttonId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(idx)}
              className="flex w-full items-center justify-between gap-4 p-4 text-left text-sm font-bold text-navy sm:p-5 sm:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              <span>{item.question}</span>
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-50 text-slate-500 transition-transform duration-200 ${
                  isOpen ? "rotate-180 bg-brand/10 text-brand" : ""
                }`}
              >
                <UIcon name="angle-down" size="sm" />
              </span>
            </button>

            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="border-t border-slate-100 bg-slate-50/50 px-4 pb-4 pt-3 text-xs leading-relaxed text-slate-600 sm:px-5 sm:pb-5 sm:text-sm"
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

