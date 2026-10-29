import React from "react";

/**
 * Standard Flaticon UIcon names used across Durawin
 */
export type UIconName =
  | "arrow-right"
  | "arrow-left"
  | "angle-right"
  | "angle-left"
  | "angle-down"
  | "angle-up"
  | "chevron-right"
  | "chevron-down"
  | "check"
  | "check-circle"
  | "shield-check"
  | "badge-check"
  | "phone"
  | "phone-call"
  | "marker"
  | "map-pin"
  | "clock"
  | "document"
  | "document-signed"
  | "file-check"
  | "file-invoice"
  | "file-text"
  | "ruler"
  | "layers"
  | "factory"
  | "industry"
  | "building"
  | "home"
  | "store"
  | "truck"
  | "wrench"
  | "palette"
  | "sparkles"
  | "droplets"
  | "raindrops"
  | "cloud-sun"
  | "chart"
  | "bar-chart"
  | "award"
  | "trophy"
  | "target"
  | "eye"
  | "users"
  | "menu"
  | "close"
  | "cross"
  | "send"
  | "message"
  | "message-square"
  | "headphones"
  | "box"
  | "search"
  | "package-search"
  | "whatsapp"
  | (string & {});

/**
 * Semantic mapping of standard names to official Flaticon UIcons glyph classes
 */
const ICON_MAP: Record<string, string> = {
  // Navigation & Directional
  "arrow-right": "fi fi-rr-arrow-right",
  "arrow-left": "fi fi-rr-arrow-left",
  "angle-right": "fi fi-rr-angle-small-right",
  "chevron-right": "fi fi-rr-angle-small-right",
  "angle-left": "fi fi-rr-angle-small-left",
  "chevron-left": "fi fi-rr-angle-small-left",
  "angle-down": "fi fi-rr-angle-small-down",
  "chevron-down": "fi fi-rr-angle-small-down",
  "angle-up": "fi fi-rr-angle-small-up",
  "chevron-up": "fi fi-rr-angle-small-up",
  menu: "fi fi-rr-menu-burger",
  close: "fi fi-rr-cross",
  cross: "fi fi-rr-cross",
  x: "fi fi-rr-cross",

  // Verification, Security & Compliance
  check: "fi fi-rr-check",
  "check-circle": "fi fi-rr-check-circle",
  "shield-check": "fi fi-rr-shield-check",
  "badge-check": "fi fi-rr-badge-check",
  award: "fi fi-rr-award",
  trophy: "fi fi-rr-trophy",
  target: "fi fi-rr-target",

  // Communication & Contact
  phone: "fi fi-rr-phone-call",
  "phone-call": "fi fi-rr-phone-call",
  marker: "fi fi-rr-marker",
  "map-pin": "fi fi-rr-marker",
  clock: "fi fi-rr-clock",
  send: "fi fi-rr-paper-plane",
  message: "fi fi-rr-comment-alt",
  "message-square": "fi fi-rr-comment-alt",
  headphones: "fi fi-rr-headphones",

  // Manufacturing, Engineering & Metallurgy
  factory: "fi fi-rr-industry-windows",
  industry: "fi fi-rr-industry-windows",
  building: "fi fi-rr-building",
  home: "fi fi-rr-home",
  store: "fi fi-rr-store-alt",
  truck: "fi fi-rr-truck-side",
  wrench: "fi fi-rr-wrench-simple",
  ruler: "fi fi-rr-ruler-combined",
  layers: "fi fi-rr-layers",
  box: "fi fi-rr-box-alt",
  search: "fi fi-rr-search",
  "package-search": "fi fi-rr-search",

  // Specifications & Technical Documents
  document: "fi fi-rr-document",
  "document-signed": "fi fi-rr-document-signed",
  "file-check": "fi fi-rr-document-signed",
  "file-invoice": "fi fi-rr-file-invoice",
  "file-text": "fi fi-rr-file-invoice",
  chart: "fi fi-rr-chart-histogram",
  "bar-chart": "fi fi-rr-chart-histogram",

  // Environmental & Finishes
  palette: "fi fi-rr-palette",
  sparkles: "fi fi-rr-sparkles",
  droplets: "fi fi-rr-raindrops",
  raindrops: "fi fi-rr-raindrops",
  "cloud-sun": "fi fi-rr-cloud-sun",
  eye: "fi fi-rr-eye",
  users: "fi fi-rr-users-alt",

  // Brand Icons
  whatsapp: "fi fi-brands-whatsapp",
};

export interface UIconProps extends React.HTMLAttributes<HTMLElement> {
  name: UIconName;
  size?: "xs" | "sm" | "base" | "md" | "lg" | "xl" | number;
  label?: string;
}

export function UIcon({
  name,
  size,
  label,
  className = "",
  style,
  ...rest
}: UIconProps) {
  // Determine Flaticon glyph class
  let iconClass = ICON_MAP[name.toLowerCase()];
  if (!iconClass) {
    if (name.startsWith("fi-") || name.startsWith("fi ")) {
      iconClass = name.startsWith("fi ") ? name : `fi ${name}`;
    } else {
      iconClass = `fi fi-rr-${name}`;
    }
  }

  // Pre-configured size mappings
  const sizeClasses: Record<string, string> = {
    xs: "text-[12px] leading-none",
    sm: "text-[14px] leading-none",
    base: "text-[16px] leading-none",
    md: "text-[18px] leading-none",
    lg: "text-[20px] leading-none",
    xl: "text-[24px] leading-none",
  };

  const selectedSizeClass = typeof size === "string" ? sizeClasses[size] || "" : "";
  const dynamicStyle = typeof size === "number" ? { fontSize: `${size}px`, ...style } : style;

  return (
    <i
      className={`uicon inline-flex items-center justify-center shrink-0 leading-none select-none ${iconClass} ${selectedSizeClass} ${className}`}
      style={dynamicStyle}
      aria-hidden={label ? undefined : "true"}
      aria-label={label}
      role={label ? "img" : undefined}
      {...rest}
    />
  );
}

export default UIcon;

