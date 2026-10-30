export interface ProductSpecItem {
  label: string;
  value: string;
}

export interface ProductSpecGroup {
  groupName: string;
  items: ProductSpecItem[];
}

export interface ProductOption {
  name: string;
  type: "color" | "radio" | "select";
  defaultIndex?: number;
  choices: {
    label: string;
    value: string;
    colorCode?: string; // For visual color swatches
    imagePreview?: string; // If selecting changes the preview image
    badge?: string;
  }[];
}

export interface ProductApplication {
  title: string;
  desc: string;
  image: string;
}

export interface ProductData {
  slug: string;
  aliasSlugs: string[];
  enquiryValue: string; // for ?product= in EnquiryForm
  code: string;
  category: string;
  title: string;
  tagline: string;
  intro: string;
  mainImage: string;
  imageFit: "contain" | "cover";
  imageAlt: string;
  keyBenefits: string[];
  options: ProductOption[];
  specGroups: ProductSpecGroup[];
  applications: ProductApplication[];
  relatedProductSlugs: string[];
}

export const PRODUCTS_LIST: ProductData[] = [
  {
    slug: "roofing-sheets",
    aliasSlugs: ["trussfold", "roofing"],
    enquiryValue: "trussfold",
    code: "DW-ROOF-PRO",
    category: "EXTERIOR ROOFING",
    title: "Trapezoidal Trussfold Roofing Sheets",
    tagline: "High-Tensile Monsoon Resistant Metal Roofing",
    intro:
      "Durawin Trussfold roofing sheets are roll-formed in our Palakkad plant from certified primary high-tensile steel coils. Featuring deep water-discharge crests and precision trapezoidal ribs, they deliver superior load capacity and 100% watertight protection against Kerala torrential rains.",
    mainImage: "/images/product-roofing-framed.jpg",
    imageFit: "contain",
    imageAlt: "Durawin Trapezoidal Trussfold Roofing Sheet Profile",
    keyBenefits: [
      "Engineered deep drainage trough accelerates torrential monsoon runoff without backflow",
      "Cut-to-length custom spans up to 12 meters eliminate site overlap joints and leak risks",
      "550 MPa high-tensile primary steel resists structural deflection under cyclonic winds",
      "Multi-layer baked polyester color finish provides certified 20+ year weather resilience",
    ],
    options: [
      {
        name: "Architectural Colour",
        type: "color",
        choices: [
          { label: "Royal Blue", value: "Royal Blue", colorCode: "#1E40AF" },
          { label: "Brick Red", value: "Brick Red", colorCode: "#991B1B" },
          { label: "Slate Grey", value: "Slate Grey", colorCode: "#475569" },
          { label: "Forest Green", value: "Forest Green", colorCode: "#166534" },
          { label: "Metallic Silver", value: "Metallic Silver", colorCode: "#CBD5E1" },
        ],
      },
      {
        name: "Sheet Thickness (Gauge)",
        type: "radio",
        choices: [
          { label: "0.30 mm", value: "0.30 mm", badge: "Standard" },
          { label: "0.35 mm", value: "0.35 mm" },
          { label: "0.40 mm", value: "0.40 mm", badge: "Heavy Duty" },
          { label: "0.45 mm", value: "0.45 mm", badge: "Commercial" },
          { label: "0.50 mm", value: "0.50 mm", badge: "Industrial Max" },
        ],
      },
      {
        name: "Profile Crest",
        type: "radio",
        choices: [
          { label: "Trussfold Trapezoidal (1000/28)", value: "Trussfold 1000/28", badge: "Most Popular" },
          { label: "Trafford Industrial Profile", value: "Trafford Industrial" },
        ],
      },
      {
        name: "Span Length",
        type: "select",
        choices: [
          { label: "Custom Site Length (Cut to mm precision)", value: "Custom Length" },
          { label: "10 ft Standard (3.05 m)", value: "10 ft" },
          { label: "12 ft Standard (3.66 m)", value: "12 ft" },
          { label: "14 ft Standard (4.27 m)", value: "14 ft" },
          { label: "16 ft Standard (4.88 m)", value: "16 ft" },
          { label: "20 ft Long Span (6.10 m)", value: "20 ft" },
        ],
      },
    ],
    specGroups: [
      {
        groupName: "Profile & Dimensions",
        items: [
          { label: "Effective Cover Width", value: "1000 mm (1.00 Meter)" },
          { label: "Total Profile Width", value: "1065 mm" },
          { label: "Crest Depth / Height", value: "28 mm Deep Water Channel" },
          { label: "Pitch Distance", value: "200 mm Center-to-Center" },
          { label: "Span Length Capability", value: "Custom cut up to 12.0 Meters zero-joint" },
        ],
      },
      {
        groupName: "Metallurgy & Strength",
        items: [
          { label: "Base Metal", value: "Cold Rolled Primary Steel (IS 513 / IS 277)" },
          { label: "Yield Strength Rating", value: "Up to 550 MPa (G550 Structural)" },
          { label: "Tensile Strength", value: "Minimum 570 MPa" },
          { label: "Primary Coil Mills", value: "JSW Steel, Jindal Steel & Tata Steel Coils" },
        ],
      },
      {
        groupName: "Corrosion Shield & Coating",
        items: [
          { label: "Zinc Protection Mass", value: "Up to 120 g/m² Sacrificial Galvanized Coating" },
          { label: "Topcoat Chemistry", value: "Siliconized Modified Polyester (SMP) / PVDF" },
          { label: "Topcoat Film Thickness", value: "20 - 25 Microns" },
          { label: "Backer Coat", value: "7 - 10 Microns Epoxy Corrosion Primer" },
          { label: "Weather Durability", value: "High Tropical UV & Monsoon Salt Spray Shield" },
        ],
      },
      {
        groupName: "Installation & Compliance",
        items: [
          { label: "Recommended Roof Pitch", value: "1 in 7 (approx 8°) minimum slope" },
          { label: "Purlin Fasteners", value: "Self-drilling hex screws with EPDM sealing washers" },
          { label: "Purlin Spacing", value: "Up to 1.4 meters depending on gauge & live load" },
          { label: "Fire Classification", value: "Class 1 Incombustible Structural Steel" },
        ],
      },
    ],
    applications: [
      {
        title: "Modern Residential Architecture",
        desc: "Pitched roofing for contemporary homes, luxury villas, and car porches requiring clean modern shadow lines.",
        image: "/images/app-household.jpg",
      },
      {
        title: "Commercial Retail & Showrooms",
        desc: "Automobile dealerships, shopping arcades, and hospitality resorts where aesthetics and long spans matter.",
        image: "/images/app-commercial.jpg",
      },
      {
        title: "Heavy Industrial Sheds & Warehouses",
        desc: "Logistics facilities, manufacturing bays, and distribution sheds demanding leak-proof wide spans.",
        image: "/images/app-industrial.jpg",
      },
    ],
    relatedProductSlugs: ["liner-sheets", "gp-pipes", "rainwater-gutters"],
  },
  {
    slug: "liner-sheets",
    aliasSlugs: ["liner"],
    enquiryValue: "liner-sheets",
    code: "DW-LINER-PRO",
    category: "INTERIOR CEILINGS & CLADDING",
    title: "1110 mm Multi-Rib Liner Sheets",
    tagline: "Precision Roll-Formed Steel Ceiling & Soffit Lining",
    intro:
      "Durawin Liner Sheets are specifically engineered for architectural interior ceilings, exterior roof eaves soffits, internal factory wall cladding, and clean-line partition panels. The precision multi-rib profile eliminates the cracking, sagging, and water absorption common to conventional gypsum and false ceiling materials.",
    mainImage: "/images/product-liner-framed.jpg",
    imageFit: "contain",
    imageAlt: "Durawin Multi-Rib 1110 mm Liner Sheet Engineering CAD Spec",
    keyBenefits: [
      "Broad 1110 mm cover width maximizes coverage and slashes installation labor",
      "50.5 mm pitch with 3.5 mm depth creates an elegant architectural shadow line texture",
      "Impervious to moisture, humidity, and roof leaks — will never sag or rot like board ceilings",
      "Factory pre-finished washable surface requires virtually zero lifetime maintenance",
    ],
    options: [
      {
        name: "Architectural Ceiling Tone",
        type: "color",
        choices: [
          { label: "Pure Ceiling White", value: "Pure White", colorCode: "#F8FAFC" },
          { label: "Off-White Ivory", value: "Off-White", colorCode: "#F1F5F9" },
          { label: "Smoke Grey", value: "Smoke Grey", colorCode: "#64748B" },
          { label: "Metallic Silver", value: "Metallic Silver", colorCode: "#94A3B8" },
          { label: "Terracotta Red", value: "Terracotta Red", colorCode: "#991B1B" },
        ],
      },
      {
        name: "Application Deployment",
        type: "radio",
        choices: [
          { label: "Interior Ceiling Lining", value: "Ceilings", badge: "Most Popular" },
          { label: "Exterior Eaves Soffit", value: "Soffits" },
          { label: "Internal Wall Cladding", value: "Wall Cladding" },
          { label: "Cleanroom Partitions", value: "Partitions" },
        ],
      },
      {
        name: "Profile Specification",
        type: "radio",
        choices: [
          { label: "1110 mm Multi-Rib (50.5 mm Pitch)", value: "1110 mm Multi-Rib", badge: "Engineered CAD Spec" },
        ],
      },
    ],
    specGroups: [
      {
        groupName: "Profile & Geometry",
        items: [
          { label: "Total Cover Width", value: "1110 mm Architectural Span" },
          { label: "Rib Pitch Distance", value: "50.5 mm Center-to-Center" },
          { label: "Rib Depth", value: "3.5 mm Precision Emboss" },
          { label: "Profile Pattern", value: "Continuous Linear Multi-Rib" },
        ],
      },
      {
        groupName: "Material & Durability",
        items: [
          { label: "Substrate", value: "Cold Rolled High-Tensile Primary Steel" },
          { label: "Zinc Coating", value: "Hot-Dip Galvanized Anti-Rust Substrate" },
          { label: "Surface Finish", value: "Smooth Semi-Gloss Washable Polyester Coating" },
          { label: "Resistance", value: "Termite-Proof, Moisture-Proof & Fungus-Resistant" },
        ],
      },
      {
        groupName: "Ceiling & Wall Application",
        items: [
          { label: "Mounting Sub-structure", value: "Light gauge steel / GP ceiling framework or wood battens" },
          { label: "Fastening", value: "Concealed or color-matched self-tapping fasteners" },
          { label: "Maintenance", value: "Wipe clean with mild detergent — zero repainting" },
          { label: "Fire Safety", value: "Class A / Class 1 Non-Combustible Material" },
        ],
      },
    ],
    applications: [
      {
        title: "Modern Residential False Ceilings",
        desc: "Sleek, washable ceilings for modern living spaces, verandas, car porches, and kitchen dining areas.",
        image: "/images/app-liner-residential.jpg",
      },
      {
        title: "Commercial Eaves & Exterior Soffits",
        desc: "Clean finish for building roof overhanging eaves and covered walkways protected from rain.",
        image: "/images/app-commercial.jpg",
      },
      {
        title: "Hygienic Cleanroom & Plant Walls",
        desc: "Dust-free, washable interior cladding for food processing, electronics assembly, and factories.",
        image: "/images/app-industrial.jpg",
      },
    ],
    relatedProductSlugs: ["roofing-sheets", "gp-pipes", "rainwater-gutters"],
  },
  {
    slug: "gp-pipes",
    aliasSlugs: ["structural-gi-pipes", "gi-pipes"],
    enquiryValue: "gp-pipes",
    code: "DW-GP-PIPE",
    category: "STRUCTURAL FRAMEWORK",
    title: "GP Pipes",
    tagline: "Pre-Coated Steel Hollow Sections for Purlins, Rafters & Trusses",
    intro:
      "Durawin supplies GP Pipes manufactured from pre-coated steel for structural purlins, rafters, and building frameworks. Featuring a factory pre-applied protective coating, these hollow steel sections deliver reliable surface protection, structural strength, and uniform finish for roofing projects across Kerala.",
    mainImage: "/images/product-gp-pipes-framed.png",
    imageFit: "contain",
    imageAlt: "GP Pipes with Pre-Applied Protective Coating",
    keyBenefits: [
      "Factory pre-applied protective coating ensures uniform surface protection",
      "Manufactured from certified steel coils sourced from primary mills including APL Apollo",
      "High strength-to-weight hollow geometry cuts total structural frame dead load",
      "Available in standard lengths and section profiles with direct site dispatch from Palakkad",
    ],
    options: [
      {
        name: "Section Geometry",
        type: "radio",
        choices: [
          { label: "Square Hollow Section (SHS)", value: "SHS Square", badge: "Purlins & Columns" },
          { label: "Rectangular Hollow Section (RHS)", value: "RHS Rectangular", badge: "Truss Rafters" },
          { label: "Circular Hollow Section (CHS)", value: "CHS Round", badge: "Structural Columns" },
        ],
      },
      {
        name: "Common Section Sizes",
        type: "select",
        choices: [
          { label: "25 mm x 25 mm (Light Purlins)", value: "25x25 mm" },
          { label: "40 mm x 20 mm (Standard Purlin)", value: "40x20 mm" },
          { label: "50 mm x 25 mm (Heavy Purlin)", value: "50x25 mm" },
          { label: "50 mm x 50 mm (Truss Chord)", value: "50x50 mm" },
          { label: "60 mm x 40 mm (Structural Rafter)", value: "60x40 mm" },
          { label: "80 mm x 40 mm (Heavy Span Rafter)", value: "80x40 mm" },
          { label: "100 mm x 50 mm (Industrial Girder)", value: "100x50 mm" },
          { label: "100 mm x 100 mm (Support Column)", value: "100x100 mm" },
        ],
      },
      {
        name: "Wall Thickness",
        type: "radio",
        choices: [
          { label: "1.2 mm", value: "1.2 mm" },
          { label: "1.6 mm", value: "1.6 mm", badge: "Standard Purlin" },
          { label: "2.0 mm", value: "2.0 mm", badge: "Structural Grade" },
          { label: "2.5 mm", value: "2.5 mm" },
          { label: "3.0 mm", value: "3.0 mm", badge: "Heavy Duty" },
        ],
      },
      {
        name: "Stock Length",
        type: "radio",
        choices: [
          { label: "6.0 Meters (20 ft Standard)", value: "6.0 Meters", badge: "Ready Stock" },
          { label: "Custom Mill Bundles", value: "Bulk Order" },
        ],
      },
    ],
    specGroups: [
      {
        groupName: "Manufacturing & Sourcing",
        items: [
          { label: "Product Type", value: "GP Pipes (Pre-Coated Hollow Sections)" },
          { label: "Steel Mill Sourcing", value: "APL Apollo Tubes Ltd & Primary Mills" },
          { label: "Section Profiles", value: "SHS (Square), RHS (Rectangular), CHS (Round)" },
          { label: "End Finish", value: "Plain square-cut deburred ends" },
        ],
      },
      {
        groupName: "Protective Coating & Finish",
        items: [
          { label: "Coating Type", value: "Factory Pre-Applied Protective Coating" },
          { label: "Surface Finish", value: "Uniform pre-coated protective finish" },
          { label: "Fabrication", value: "Standard weldability & structural cutting" },
          { label: "Detailed Specs", value: "Confirmed mill test certs available upon request" },
        ],
      },
      {
        groupName: "Roof Purlin Compatibility",
        items: [
          { label: "Fastener Gripping", value: "Optimized steel density for self-drilling TEK screws" },
          { label: "Deflection Control", value: "Engineered section modulus for long purlin bays" },
          { label: "Supply Logistics", value: "Bundled and delivered directly to site with sheets" },
        ],
      },
    ],
    applications: [
      {
        title: "Purlin Grids for Metal Roofing",
        desc: "Horizontal purlins spanning roof trusses to securely anchor trapezoidal roofing sheets.",
        image: "/images/app-roofing-commercial.jpg",
      },
      {
        title: "Pre-Engineered Portal Frames & Trusses",
        desc: "Fabricated steel roof trusses, rafters, king posts, and column framework for buildings.",
        image: "/images/app-industrial.jpg",
      },
      {
        title: "Car Porch & Solar Array Mounting",
        desc: "Corrosion-resistant framework for residential car porches, gates, and rooftop solar racking.",
        image: "/images/app-household.jpg",
      },
    ],
    relatedProductSlugs: ["roofing-sheets", "liner-sheets", "roof-ridge-flashing"],
  },
  {
    slug: "roof-ridge-flashing",
    aliasSlugs: ["ridge-flashing", "ridge-cap", "roof-ridge"],
    enquiryValue: "ridge-flashing",
    code: "DW-RIDGE-PRO",
    category: "ROOFING ACCESSORIES",
    title: "Roof Ridge Flashing",
    tagline: "Weatherproof Apex Sealing for Sloped Metal Roofs",
    intro:
      "Durawin Roof Ridge Flashing is specifically designed to cover and seal the gap where two opposing roof slopes meet at the ridge. Custom-folded to match roofing pitches and profiles, it prevents wind-driven rain penetration, debris accumulation, and moisture ingress along the apex line.",
    mainImage: "/images/product-ridge-flashing.jpg",
    imageFit: "contain",
    imageAlt: "Roof Ridge Flashing in Architectural Brick Red",
    keyBenefits: [
      "Covers and seals the gap where two roof slopes meet at the apex ridge",
      "Prevents monsoon rainwater ingress and wind-driven moisture penetration",
      "Safety-hemmed longitudinal edges provide stiffness and clean line alignment",
      "Manufactured in colors matched to Durawin roofing sheet profiles and finishes",
    ],
    options: [
      {
        name: "Architectural Color",
        type: "color",
        choices: [
          { label: "Brick Red", value: "Brick Red", colorCode: "#991B1B" },
          { label: "Royal Blue", value: "Royal Blue", colorCode: "#1E3A8A" },
          { label: "Dark Charcoal", value: "Dark Charcoal", colorCode: "#334155" },
          { label: "Mist Green", value: "Mist Green", colorCode: "#166534" },
          { label: "Off-White Ivory", value: "Off-White", colorCode: "#F1F5F9" },
        ],
      },
      {
        name: "Standard Piece Length",
        type: "radio",
        choices: [
          { label: "3.0 Meters (Standard Piece)", value: "3.0 Meters", badge: "Standard Stock" },
          { label: "Custom Project Schedule", value: "Custom Length" },
        ],
      },
    ],
    specGroups: [
      {
        groupName: "Profile & Function",
        items: [
          { label: "Product Purpose", value: "Covers and seals the gap where two roof slopes meet" },
          { label: "Product Category", value: "Roofing Accessories / Apex Ridge Flashing" },
          { label: "Profile Geometry", value: "V-shaped ridge cap with stiffened safety-hemmed edges" },
          { label: "Standard Length", value: "3.0 meters (approx 10 ft) per piece" },
        ],
      },
      {
        groupName: "Material & Coating",
        items: [
          { label: "Base Substrate", value: "High-tensile steel with corrosion-resistant primer" },
          { label: "Surface Finish", value: "Pre-painted architectural color coating" },
          { label: "Color Selection", value: "Matched to primary roofing and cladding sheet colors" },
          { label: "Edge Treatment", value: "Turned and hemmed for safety and enhanced rigidity" },
        ],
      },
      {
        groupName: "Installation Compatibility",
        items: [
          { label: "Roof Compatibility", value: "Trapezoidal, corrugated, and tile-profile metal roofing" },
          { label: "Fastening Method", value: "Fastened through sheet crests using self-drilling TEK screws" },
          { label: "Joint Sealing", value: "Overlapped at joints and compatible with contour foam closures" },
        ],
      },
    ],
    applications: [
      {
        title: "Residential Pitched Roof Ridges",
        desc: "Clean, leak-free apex capping for modern Kerala villas, sloping roofs, and porch canopies.",
        image: "/images/app-household.jpg",
      },
      {
        title: "Commercial & Industrial Sheds",
        desc: "Weatherproof ridge capping across multi-bay commercial complexes, warehouses, and factory workshops.",
        image: "/images/app-commercial.jpg",
      },
      {
        title: "Monsoon Storm Weatherproofing",
        desc: "Protective flashing barrier safeguarding ridge crest joints against high-velocity coastal winds and rain.",
        image: "/images/app-industrial.jpg",
      },
    ],
    relatedProductSlugs: ["roofing-sheets", "liner-sheets", "gp-pipes"],
  },
  {
    slug: "rainwater-gutters",
    aliasSlugs: ["gutters", "rainwater-gutters-accessories"],
    enquiryValue: "gutters",
    code: "DW-GUTTER-SYS",
    category: "ROOF DRAINAGE SYSTEMS",
    title: "Engineered Rainwater Gutters & Accessories",
    tagline: "High-Capacity All-Weather Eaves Drainage Solutions",
    intro:
      "Durawin provides complete high-capacity eaves gutter and vertical downspout systems designed to channel Kerala torrential rainfall cleanly away from buildings. Protect foundation masonry, prevent exterior facade staining, and direct water into rainwater harvesting tanks with precision-fitted UV-stabilized components.",
    mainImage: "/images/product-rainwater-gutter.jpg",
    imageFit: "cover",
    imageAlt: "Engineered Rainwater Eaves Gutters & Accessories System",
    keyBenefits: [
      "High-flow trough geometry handles peak cloudburst rainfall without edge overflow",
      "UV-stabilized all-weather formulation prevents warping, cracking, and sun fading",
      "Complete system with matched eaves brackets, internal corners, outlets, and downspouts",
      "Smooth hydraulic interior profile prevents debris buildup and leaf clogging",
    ],
    options: [
      {
        name: "System Package",
        type: "select",
        choices: [
          { label: "Complete System (Gutters + Downpipes + Brackets)", value: "Full System Package" },
          { label: "Eaves Gutters & Brackets Only", value: "Gutters & Brackets" },
          { label: "Downpipes & Outlets Only", value: "Downpipes Only" },
          { label: "Accessories & Replacement Fittings Only", value: "Fittings Only" },
        ],
      },
      {
        name: "Gutter Size",
        type: "radio",
        choices: [
          { label: "140 mm Standard", value: "140 mm Standard", badge: "Residential & Commercial" },
          { label: "180 mm Industrial", value: "180 mm Industrial", badge: "High Volume" },
        ],
      },
      {
        name: "Finish Colour",
        type: "color",
        choices: [
          { label: "Classic Bright White", value: "Classic White", colorCode: "#FFFFFF" },
          { label: "Architectural Grey", value: "Slate Grey", colorCode: "#475569" },
          { label: "Charcoal Dark Brown", value: "Dark Charcoal", colorCode: "#334155" },
        ],
      },
      {
        name: "Downpipe Size",
        type: "radio",
        choices: [
          { label: "75 mm (3 inch)", value: "75 mm" },
          { label: "110 mm (4 inch)", value: "110 mm", badge: "Heavy Rainfall Grade" },
        ],
      },
    ],
    specGroups: [
      {
        groupName: "Dimensions & Profile",
        items: [
          { label: "Gutter Width", value: "140 mm Standard / 180 mm Industrial" },
          { label: "Downpipe Sizes", value: "75 mm & 110 mm High Discharge" },
          { label: "Profile Geometry", value: "High-Capacity Trough with Splash Lip" },
          { label: "Discharge Capacity", value: "Up to 3.8 L/sec per outlet" },
        ],
      },
      {
        groupName: "Material & Durability",
        items: [
          { label: "Material Composition", value: "UV-Stabilized High-Impact Polymer" },
          { label: "Corrosion Protection", value: "100% Rust-Proof & Chemically Inert" },
          { label: "Joint Sealing", value: "Watertight EPDM compression gaskets" },
          { label: "Bracket Spacing", value: "600 mm – 800 mm intervals" },
        ],
      },
    ],
    applications: [
      {
        title: "Residential Homes & Villas",
        desc: "Prevents roof drip erosion, protects exterior paint, and collects water into residential sumps.",
        image: "/images/app-household.jpg",
      },
      {
        title: "Commercial Buildings & Arcades",
        desc: "Discreet high-volume perimeter drainage for shopping complexes and corporate headquarters.",
        image: "/images/app-commercial.jpg",
      },
      {
        title: "Industrial Warehouses & Sheds",
        desc: "Heavy rainwater catchment preventing ground waterlogging around warehouse loading bays.",
        image: "/images/app-industrial.jpg",
      },
    ],
    relatedProductSlugs: ["gutter-running-outlet", "gutter-end-cap", "gutter-corner-angle", "gutter-support-bracket"],
  },
  {
    slug: "gutter-running-outlet",
    aliasSlugs: ["rainwater-outlet", "gutter-outlet", "drop-outlet"],
    enquiryValue: "gutter-outlet",
    code: "DW-ACC-OUTLET",
    category: "ROOF DRAINAGE ACCESSORIES",
    title: "Rainwater Outlet Connector",
    tagline: "Eaves Gutter to Downpipe Drop Connection",
    intro:
      "The Durawin Rainwater Outlet Connector is an engineered transition fitting designed to direct water runoff from the horizontal eaves gutter trough straight into the vertical downpipe, preventing turbulence, backflow, and wall splashing.",
    mainImage: "/images/product-gutter-outlet.jpg",
    imageFit: "contain",
    imageAlt: "White Rainwater Gutter Running Outlet and Downpipe Connector",
    keyBenefits: [
      "Precision seated profile connects seamlessly into the gutter trough",
      "High-velocity drop spigot ensures rapid discharge into downpipes",
      "UV-stabilized weather-resistant polymer withstands intense monsoon downpours",
      "Smooth hydraulic interior profile eliminates stagnant water pooling",
    ],
    options: [
      {
        name: "Downpipe Outlet Size",
        type: "radio",
        choices: [
          { label: "75 mm (3 inch) Spigot", value: "75 mm" },
          { label: "110 mm (4 inch) Spigot", value: "110 mm", badge: "Heavy Monsoon Flow" },
        ],
      },
      {
        name: "Architectural Finish",
        type: "color",
        choices: [
          { label: "Classic Bright White", value: "Classic White", colorCode: "#FFFFFF" },
        ],
      },
    ],
    specGroups: [
      {
        groupName: "Fitting Specifications",
        items: [
          { label: "Component Type", value: "Running / Drop Outlet" },
          { label: "Application", value: "Eaves Gutter to Downpipe Drop Connection" },
          { label: "Material Composition", value: "UV-Stabilized High-Impact Polymer" },
          { label: "Discharge Alignment", value: "Vertical Round Spigot" },
        ],
      },
      {
        groupName: "Performance & Installation",
        items: [
          { label: "Corrosion Class", value: "100% Rust-Proof & Chemically Inert" },
          { label: "Weather Resistance", value: "UV-Stabilized against tropical sun embrittlement" },
          { label: "Downpipe Fit", value: "Compatible with standard 75mm and 110mm pipes" },
        ],
      },
    ],
    applications: [
      {
        title: "Residential Roofing Systems",
        desc: "Discharges roof runoff cleanly into downpipes without exterior wall moisture staining.",
        image: "/images/app-household.jpg",
      },
      {
        title: "Commercial & Industrial Sheds",
        desc: "Connects high-flow perimeter eaves gutters to high-capacity downpipe stacks.",
        image: "/images/app-commercial.jpg",
      },
    ],
    relatedProductSlugs: ["rainwater-gutters", "gutter-end-cap", "gutter-corner-angle", "gutter-support-bracket"],
  },
  {
    slug: "gutter-end-cap",
    aliasSlugs: ["gutter-stop-end", "end-cap", "gutter-endcap"],
    enquiryValue: "gutter-endcap",
    code: "DW-ACC-ENDCAP",
    category: "ROOF DRAINAGE ACCESSORIES",
    title: "Gutter End Cap",
    tagline: "Watertight Eaves Gutter Run Termination",
    intro:
      "The Durawin Gutter End Cap is a precision-molded stop end fitting engineered to cap and terminate open eaves gutter profiles, preventing water runoff spillage and keeping the drainage path strictly contained.",
    mainImage: "/images/product-gutter-endcap.jpg",
    imageFit: "contain",
    imageAlt: "White Rainwater Gutter Stop End Cap Fitting with Gasket",
    keyBenefits: [
      "Precision snap-fit closure provides watertight run termination",
      "Integrated EPDM seal prevents water seepage at eaves edges",
      "UV-stabilized formulation resists tropical sun embrittlement",
      "Clean flush aesthetic integrates seamlessly with exterior trim",
    ],
    options: [
      {
        name: "Mounting Orientation",
        type: "radio",
        choices: [
          { label: "Universal Profile Stop End", value: "Universal" },
        ],
      },
      {
        name: "Architectural Finish",
        type: "color",
        choices: [
          { label: "Classic Bright White", value: "Classic White", colorCode: "#FFFFFF" },
        ],
      },
    ],
    specGroups: [
      {
        groupName: "Fitting Specifications",
        items: [
          { label: "Component Type", value: "Profile Stop End Cap" },
          { label: "Sealing Mechanism", value: "EPDM synthetic rubber gasket" },
          { label: "Material Composition", value: "UV-Stabilized High-Impact Polymer" },
          { label: "Installation Method", value: "Snap-lock perimeter retention" },
        ],
      },
      {
        groupName: "Performance & Installation",
        items: [
          { label: "Corrosion Class", value: "100% Rust-Proof & Weather-Sealed" },
          { label: "Weather Resistance", value: "Resistant to heat cracking and thermal cycling" },
          { label: "Profile Compatibility", value: "Precision matched to Durawin gutter channels" },
        ],
      },
    ],
    applications: [
      {
        title: "Eaves Run Terminations",
        desc: "Seals gutter run ends at gable verges and roof edge margins.",
        image: "/images/app-household.jpg",
      },
      {
        title: "Perimeter Water Containment",
        desc: "Prevents overflow spillover onto entrance porticos and sidewalls.",
        image: "/images/app-commercial.jpg",
      },
    ],
    relatedProductSlugs: ["rainwater-gutters", "gutter-running-outlet", "gutter-corner-angle", "gutter-support-bracket"],
  },
  {
    slug: "gutter-corner-angle",
    aliasSlugs: ["gutter-corner", "90-degree-gutter-corner", "gutter-angle"],
    enquiryValue: "gutter-corner",
    code: "DW-ACC-CORNER",
    category: "ROOF DRAINAGE ACCESSORIES",
    title: "90° Gutter Corner Angle",
    tagline: "Continuous Water Flow Around Building Corners",
    intro:
      "The Durawin 90° Gutter Corner Angle connects two perpendicular eaves gutter runs around roof hips and building corners, maintaining uninterrupted water transit without leaking or overflow.",
    mainImage: "/images/product-gutter-corner.jpg",
    imageFit: "contain",
    imageAlt: "White 90 Degree Rainwater Gutter Corner Junction Fitting",
    keyBenefits: [
      "Smooth radius inner corner prevents water turbulence and silt trap",
      "Dual socket joints with compression seals ensure watertight continuity",
      "Engineered for 90-degree building corners and roof perimeter hips",
      "Rigid UV-stabilized polymer maintains geometry under thermal expansion",
    ],
    options: [
      {
        name: "Corner Orientation",
        type: "radio",
        choices: [
          { label: "External 90° Corner", value: "External 90" },
          { label: "Internal 90° Corner", value: "Internal 90" },
        ],
      },
      {
        name: "Architectural Finish",
        type: "color",
        choices: [
          { label: "Classic Bright White", value: "Classic White", colorCode: "#FFFFFF" },
        ],
      },
    ],
    specGroups: [
      {
        groupName: "Fitting Specifications",
        items: [
          { label: "Component Type", value: "90° Eaves Corner Junction" },
          { label: "Joint Type", value: "Dual Socket Compression Gasket" },
          { label: "Material Composition", value: "UV-Stabilized High-Impact Polymer" },
          { label: "Angle Geometry", value: "90-degree fixed hydraulic turn" },
        ],
      },
      {
        groupName: "Performance & Installation",
        items: [
          { label: "Corrosion Class", value: "100% Rust-Proof & Chemically Inert" },
          { label: "Thermal Stability", value: "Accommodates thermal expansion without distortion" },
          { label: "Sealing", value: "Factory-fitted elastomeric compression gaskets" },
        ],
      },
    ],
    applications: [
      {
        title: "Hipped Roof Configurations",
        desc: "Routes continuous eaves drainage around hipped corners seamlessly.",
        image: "/images/app-household.jpg",
      },
      {
        title: "L-Shaped & Wraparound Architecture",
        desc: "Connects intersecting fascia gutter runs without external plumbing bends.",
        image: "/images/app-commercial.jpg",
      },
    ],
    relatedProductSlugs: ["rainwater-gutters", "gutter-running-outlet", "gutter-end-cap", "gutter-support-bracket"],
  },
  {
    slug: "gutter-support-bracket",
    aliasSlugs: ["gutter-bracket", "fascia-bracket", "gutter-clamp"],
    enquiryValue: "gutter-bracket",
    code: "DW-ACC-BRACKET",
    category: "ROOF DRAINAGE ACCESSORIES",
    title: "Gutter Support Bracket",
    tagline: "Heavy-Load Fascia Mounting & Alignment",
    intro:
      "The Durawin Gutter Support Bracket is a heavy-duty mounting bracket designed to securely fasten and cradle eaves gutters to the roof fascia board, sustaining heavy water loads during monsoon downpours.",
    mainImage: "/images/product-gutter-bracket.jpg",
    imageFit: "contain",
    imageAlt: "Heavy Duty White Rainwater Gutter Fascia Mounting Bracket",
    keyBenefits: [
      "Contoured cradle profile firmly locks the gutter trough into position",
      "Reinforced load-bearing ribs support full water weight during peak downpours",
      "Multi-point fascia fixing slots allow precision slope adjustment",
      "Corrosion-proof, rust-free polymer withstands constant moisture exposure",
    ],
    options: [
      {
        name: "Fixing Type",
        type: "radio",
        choices: [
          { label: "Standard Fascia Board Mount", value: "Fascia Mount" },
        ],
      },
      {
        name: "Architectural Finish",
        type: "color",
        choices: [
          { label: "Classic Bright White", value: "Classic White", colorCode: "#FFFFFF" },
        ],
      },
    ],
    specGroups: [
      {
        groupName: "Fitting Specifications",
        items: [
          { label: "Component Type", value: "Fascia Support Bracket" },
          { label: "Mounting Position", value: "Fascia Board / Eaves Substrate" },
          { label: "Material Composition", value: "Reinforced UV-Resistant Polymer" },
          { label: "Recommended Spacing", value: "600 mm to 800 mm centers" },
        ],
      },
      {
        groupName: "Performance & Installation",
        items: [
          { label: "Load Capacity", value: "Engineered for high water surge loads" },
          { label: "Corrosion Class", value: "100% Rust-Proof & Weather-Resistant" },
          { label: "Adjustment", value: "Vertical alignment slots for gradient calibration" },
        ],
      },
    ],
    applications: [
      {
        title: "Fascia Board Mounting",
        desc: "Provides solid structural support along wooden, composite, or steel fascia boards.",
        image: "/images/app-household.jpg",
      },
      {
        title: "Extended Eaves Overhangs",
        desc: "Maintains optimal gutter slope and alignment across long building lengths.",
        image: "/images/app-commercial.jpg",
      },
    ],
    relatedProductSlugs: ["rainwater-gutters", "gutter-running-outlet", "gutter-end-cap", "gutter-corner-angle"],
  },
  {
    slug: "colour-coated-sheets",
    aliasSlugs: ["colour-coated"],
    enquiryValue: "colour-coated",
    code: "DW-COLOR-PLUS",
    category: "PRE-PAINTED STEEL",
    title: "Architectural Colour-Coated Steel Sheets",
    tagline: "UV-Stabilized Vibrant Multi-Layer Pre-Painted Roofing",
    intro:
      "Durawin Colour-Coated roofing sheets combine the strength of certified high-tensile cold-rolled steel with multi-tier baked architectural paint systems. Formulated with UV-stabilized pigments, they retain rich color depth and reflect solar radiation even under intense tropical sunlight and coastal Kerala humidity.",
    mainImage: "/images/product-colour-coated-framed.jpg",
    imageFit: "contain",
    imageAlt: "Durawin Pre-Painted Colour Coated Red Roofing Sheet Profile",
    keyBenefits: [
      "Solar reflective pigments reduce under-roof ambient temperatures by up to 5°C",
      "Multi-stage oven baked paint system prevents chalking, peeling, and chipping",
      "High-grade siliconized polyester resists corrosive tropical monsoon moisture",
      "Available in curated architectural shades to elevate modern building facades",
    ],
    options: [
      {
        name: "Curated Architectural Colours",
        type: "color",
        choices: [
          { label: "Brick Red", value: "Brick Red", colorCode: "#991B1B" },
          { label: "Royal Blue", value: "Royal Blue", colorCode: "#1E40AF" },
          { label: "Forest Green", value: "Forest Green", colorCode: "#166534" },
          { label: "Slate Grey", value: "Slate Grey", colorCode: "#475569" },
          { label: "Alabaster White", value: "Off-White", colorCode: "#F1F5F9" },
        ],
      },
      {
        name: "Coating Chemistry",
        type: "radio",
        choices: [
          { label: "Regular Modified Polyester (RMP)", value: "RMP Standard", badge: "Residential" },
          { label: "Super Durable Polyester (SDP)", value: "SDP Heavy Duty", badge: "Commercial" },
          { label: "PVDF Fluorocarbon", value: "PVDF Coastal Grade", badge: "Maximum Marine Defense" },
        ],
      },
      {
        name: "Sheet Thickness",
        type: "radio",
        choices: [
          { label: "0.35 mm", value: "0.35 mm" },
          { label: "0.40 mm", value: "0.40 mm", badge: "Recommended" },
          { label: "0.45 mm", value: "0.45 mm" },
          { label: "0.50 mm", value: "0.50 mm" },
        ],
      },
    ],
    specGroups: [
      {
        groupName: "Coating Technology",
        items: [
          { label: "Topcoat Polymer", value: "Siliconized Modified Polyester (SMP) / PVDF" },
          { label: "Topcoat Thickness", value: "20 - 25 Microns Baked Finish" },
          { label: "Primer Coat", value: "5 - 7 Microns High-Adhesion Epoxy Primer" },
          { label: "Backer Coat", value: "7 - 10 Microns Corrosion Resistant Epoxy" },
          { label: "Substrate Protection", value: "Hot-Dip Galvanized Zinc Layer (IS 277)" },
        ],
      },
      {
        groupName: "Thermal & Weathering Metrics",
        items: [
          { label: "Solar Reflectance Index (SRI)", value: "High Solar Reflective Barrier" },
          { label: "Salt Spray Resistance", value: "1000+ Hours ASTM B117 Compliance" },
          { label: "UV Resistance", value: "Classified QUV 1000+ Hours Non-Chalking" },
          { label: "Flexibility & Adhesion", value: "Zero cracking on 2T bend fabrication" },
        ],
      },
      {
        groupName: "Profile Options",
        items: [
          { label: "Available Profiles", value: "Trapezoidal Crest, Trafford Profile, Tile Wave" },
          { label: "Effective Width", value: "1000 mm Standard Modular Width" },
          { label: "Lengths", value: "Cut to customized site dimensions" },
        ],
      },
    ],
    applications: [
      {
        title: "Contemporary Residences & Cottages",
        desc: "Striking roof lines and vibrant color schemes that complement lush Kerala greenery.",
        image: "/images/app-household.jpg",
      },
      {
        title: "Commercial Auditoriums & Resorts",
        desc: "Aesthetic color profiles for eco-resorts, event halls, educational campuses, and retail.",
        image: "/images/app-commercial.jpg",
      },
      {
        title: "Industrial Complexes & Factories",
        desc: "Long-lasting pre-painted roofing and wall cladding designed for aggressive industrial environments.",
        image: "/images/app-industrial.jpg",
      },
    ],
    relatedProductSlugs: ["roofing-sheets", "gp-pipes", "rainwater-gutters"],
  },
  {
    slug: "galvanized-corrugated-sheets",
    aliasSlugs: ["galvanized"],
    enquiryValue: "galvanized",
    code: "DW-GALV-SHIELD",
    category: "HEAVY-DUTY INDUSTRIAL",
    title: "Galvanized Corrugated Steel Sheets",
    tagline: "Sacrificial Zinc-Coated Heavy Industrial Roofing",
    intro:
      "Durawin Galvanized Corrugated Sheets represent the classic, battle-tested standard for durable roofing. Produced with full-hard primary cold-rolled steel and hot-dip continuous zinc coating according to IS 277, the heavy sacrificial zinc layer naturally self-heals cut edges, protecting agricultural, rural, and industrial structures for decades.",
    mainImage: "/images/product-galvanized-framed.jpg",
    imageFit: "contain",
    imageAlt: "Durawin Galvanized Corrugated Silver Steel Roofing Sheet",
    keyBenefits: [
      "Heavy sacrificial zinc barrier physically seals and self-heals cut edges and punch holes",
      "Traditional sinusoidal corrugation offers high structural stiffness with wide purlin spacing",
      "100% recyclable, non-toxic, and fireproof primary cold-rolled steel base",
      "Cost-effective heavy-duty solution for agricultural sheds, farmhouses, and perimeter hoardings",
    ],
    options: [
      {
        name: "Corrugation Depth & Pitch",
        type: "radio",
        choices: [
          { label: "Standard 8/3 Sinusoidal Corrugation (75 mm pitch)", value: "Standard 8/3", badge: "Classic" },
          { label: "Trapezoidal Profile (1000/28 mm)", value: "Trapezoidal Galv" },
        ],
      },
      {
        name: "Zinc Coating Mass",
        type: "radio",
        choices: [
          { label: "Standard Commercial (80 g/m²)", value: "80 gsm" },
          { label: "Heavy Industrial (120 g/m² - IS 277)", value: "120 gsm", badge: "Max Rust Resistance" },
        ],
      },
      {
        name: "Gauge Thickness",
        type: "radio",
        choices: [
          { label: "0.30 mm", value: "0.30 mm" },
          { label: "0.35 mm", value: "0.35 mm" },
          { label: "0.40 mm", value: "0.40 mm", badge: "Recommended" },
          { label: "0.50 mm", value: "0.50 mm", badge: "Heavy Industrial" },
        ],
      },
      {
        name: "Standard Lengths",
        type: "select",
        choices: [
          { label: "8 ft (2.44 m)", value: "8 ft" },
          { label: "10 ft (3.05 m)", value: "10 ft" },
          { label: "12 ft (3.66 m)", value: "12 ft" },
          { label: "14 ft (4.27 m)", value: "14 ft" },
          { label: "16 ft (4.88 m)", value: "16 ft" },
          { label: "Custom Mill Length", value: "Custom" },
        ],
      },
    ],
    specGroups: [
      {
        groupName: "Galvanizing & Standards",
        items: [
          { label: "Manufacturing Standard", value: "IS 277 Specification for Galvanized Steel Sheets" },
          { label: "Zinc Coating Mass", value: "Up to 120 g/m² Both Sides (Class 8 / Class 12)" },
          { label: "Zinc Spangle Finish", value: "Regular Spangle / Minimized Spangle Passivated" },
          { label: "Base Metal", value: "Cold Rolled Full Hard Primary Steel (IS 513)" },
        ],
      },
      {
        groupName: "Dimensions & Tolerances",
        items: [
          { label: "Corrugation Pitch", value: "75 mm (3 inch nominal pitch)" },
          { label: "Corrugation Depth", value: "18 mm sinusoidal depth" },
          { label: "Overall Sheet Width", value: "900 mm (Cover width 800 mm)" },
          { label: "Length Availability", value: "8 ft, 10 ft, 12 ft, 14 ft, 16 ft & Custom" },
        ],
      },
      {
        groupName: "Performance Characteristics",
        items: [
          { label: "Tensile Strength", value: "Full Hard G550 (550 MPa minimum)" },
          { label: "Rust Inhibitor", value: "Chromate Chemical Passivation to prevent white rust" },
          { label: "Fire Resistance", value: "Non-combustible A1 Classification" },
          { label: "Recyclability", value: "100% Infinitely Recyclable Steel" },
        ],
      },
    ],
    applications: [
      {
        title: "Agricultural Farm Sheds & Barns",
        desc: "Ventilated, durable roofing for livestock barns, crop storage, and rural farm outbuildings.",
        image: "/images/app-household.jpg",
      },
      {
        title: "Industrial Storage Warehouses",
        desc: "Heavy-duty economical roofing for raw material yards, workshops, and repair hangars.",
        image: "/images/app-industrial.jpg",
      },
      {
        title: "Site Boundary Barricades & Hoardings",
        desc: "Robust corrugated metal fencing protecting commercial construction projects.",
        image: "/images/app-commercial.jpg",
      },
    ],
    relatedProductSlugs: ["roofing-sheets", "gp-pipes", "rainwater-gutters"],
  },
];

/**
 * Helper to find a product by slug or alias
 */
export function getProductBySlug(slug: string): ProductData | undefined {
  const normalized = slug.toLowerCase().trim();
  return PRODUCTS_LIST.find(
    (p) => p.slug === normalized || p.aliasSlugs.includes(normalized)
  );
}

/**
 * Get all valid slugs including aliases for static generation
 */
export function getAllProductSlugs(): string[] {
  const set = new Set<string>();
  PRODUCTS_LIST.forEach((p) => {
    set.add(p.slug);
    p.aliasSlugs.forEach((a) => set.add(a));
  });
  return Array.from(set);
}

