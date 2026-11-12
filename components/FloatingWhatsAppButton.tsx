"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import UIcon from "@/components/UIcon";

const WHATSAPP_MESSAGE =
  "Hello Durawin, I'm interested in your roofing and liner sheet products. Please share more details.";

export default function FloatingWhatsAppButton() {
  const pathname = usePathname();

  // Product detail pages render a fixed bottom enquiry bar on mobile/tablet (< lg)
  const hasMobileStickyBar =
    Boolean(pathname?.startsWith("/products/")) && pathname !== "/products";

  const internationalNumber = `91${site.phone.replace(/\D/g, "")}`;
  const whatsappHref = `https://wa.me/${internationalNumber}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  const bottomPositionClass = hasMobileStickyBar
    ? "bottom-[calc(5.25rem+env(safe-area-inset-bottom,0px))] lg:bottom-[calc(1.25rem+env(safe-area-inset-bottom,0px))]"
    : "bottom-[calc(1.25rem+env(safe-area-inset-bottom,0px))]";

  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Durawin on WhatsApp"
      title="Chat with Durawin on WhatsApp"
      className={`group fixed right-[calc(1.25rem+env(safe-area-inset-right,0px))] z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md ring-1 ring-black/5 transition-all duration-200 ease-out hover:bg-[#1EBE5D] hover:shadow-lg active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy md:h-11 md:w-auto md:gap-2 md:px-4 lg:h-12 lg:px-5 lg:hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${bottomPositionClass}`}
    >
      <UIcon
        name="whatsapp"
        className="text-[22px] md:text-[19px] lg:text-[21px] leading-none"
      />
      <span className="hidden md:inline text-xs lg:text-sm font-semibold tracking-tight whitespace-nowrap">
        WhatsApp
      </span>
    </a>
  );
}

