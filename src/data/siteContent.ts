import { companyProfile } from "./companyProfile";

export const navigationLinks = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Case Studies", href: "#cases" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const heroContent = {
  title: "Your Trusted China Sourcing Partner for Gifts & Jewelry",
  subtitle:
    "We help overseas buyers find reliable suppliers, negotiate clear terms, inspect quality, and ship worldwide — including safe purchasing from 1688.",
  primaryCta: { label: "Get a Free Sourcing Quote", href: "#contact" },
  secondaryCta: {
    label: "WhatsApp Us Now",
    href: companyProfile.whatsappLink,
  },
  highlights: [
    "Gifts, Jewelry & Small Commodities",
    "Based in Yiwu, China",
    "English & Chinese bilingual team",
  ],
};

export const trustBar = [
  { label: "5+ Years Export Experience", icon: "award" },
  { label: "Based in Yiwu, China", icon: "location" },
  { label: "Transparent Pricing", icon: "shield" },
  { label: "Clients in US / EU / AU", icon: "globe" },
];

export const services = [
  {
    title: "Product Sourcing",
    description:
      "Curated supplier shortlists for jewelry, gifts and lifestyle SKUs that match your quality and MOQ.",
  },
  {
    title: "Price Negotiation",
    description:
      "Native Chinese negotiators secure factory-direct prices, clear incoterms, and samples clauses.",
  },
  {
    title: "Quality Inspection",
    description:
      "Pre-production checks, inline inspections, and final QC photos/videos with acceptance criteria.",
  },
  {
    title: "Sample & Order Consolidation",
    description:
      "Collect samples or ready goods from multiple suppliers, repack, and ship together to cut freight.",
  },
  {
    title: "Production Follow-up",
    description:
      "Weekly status tracking, schedule adjustments, and immediate escalation when risks show up.",
  },
  {
    title: "Shipping & Documents Support",
    description:
      "Coordinate export paperwork, book sea/air/express, prepare packing lists and CO if needed.",
  },
  {
    title: "1688 Purchasing Support",
    description:
      "Send us your 1688 links. We communicate, pay RMB, inspect goods, and consolidate shipments safely.",
  },
];

export const highlight1688 = {
  title: "1688 Purchasing Support",
  description:
    "You can simply send us 1688 product links. We contact suppliers in Chinese, confirm details (price, MOQ, packaging, customization), pay on your behalf, inspect the goods, and consolidate shipments to your country.",
  bullets: [
    "Verify supplier ratings, licenses and real stock",
    "Translate requirements both ways to avoid misunderstandings",
    "Provide screenshots / invoices so prices stay transparent",
    "Combine parcels from multiple 1688 shops into one export shipment",
  ],
};

export const processSteps = [
  {
    title: "Send Your Product Requirements",
    description:
      "Share product ideas, target price, specs, photos, or 1688/Alibaba links.",
  },
  {
    title: "We Search & Send Quotations",
    description:
      "We shortlist suppliers, confirm capability, and send you editable quotation sheets.",
  },
  {
    title: "Confirm Order & Pay Service Fee / Deposit",
    description:
      "Finalize specs, lead time, payment milestones, service fees, and contracts.",
  },
  {
    title: "Production & Quality Inspection",
    description:
      "We follow the factory schedule, inspect goods, and share photo/video reports.",
  },
  {
    title: "Shipping & After-Sales Support",
    description:
      "Arrange export logistics, customs docs, and after-sales coordination if needed.",
  },
];

export const process1688 = [
  "Send us your 1688 links and target quantity.",
  "We verify suppliers and confirm real prices & total cost.",
  "You pay us (goods + service fee + shipping) via PayPal, Wise, or bank transfer.",
  "We pay the 1688 suppliers, follow up, and inspect.",
  "We consolidate and ship everything to your address.",
];

export const pricingIntro =
  "For most orders, we charge a transparent service commission of 5–10% of the total goods value, depending on product complexity and workload. For samples or micro orders, a fixed handling fee may apply.";

export const pricingScenarios = [
  {
    title: "Scenario 1: Regular Factory Order",
    description:
      "Ideal for bulk orders directly with factories. Commission of 5–8% covers supplier scouting, negotiation, production follow-up, QC, and export coordination.",
    includes: [
      "Factory quotation comparison sheet",
      "Weekly production updates",
      "Final inspection + loading supervision",
    ],
  },
  {
    title: "Scenario 2: 1688 Sourcing & Purchasing",
    description:
      "Perfect when you already have multiple 1688 product links but need safe payment and consolidation. We charge 5–10% service fee plus small handling fee per shop when dealing with micro quantities.",
    includes: [
      "1688 screenshots or links for every SKU",
      "Service fee shown separately from goods cost",
      "Domestic + international freight estimates upfront",
    ],
  },
  {
    title: "Scenario 3: Sample & Small Orders",
    description:
      "For pilots or color/material verification. A fixed USD 80–150 service fee covers communication, local pickup, photo confirmation, and express shipping arrangements.",
    includes: [
      "Sample consolidation & repacking",
      "Express tracking sharing",
      "Credit memo if the sample converts to production",
    ],
  },
];

export const pricingDisclaimer =
  "For 1688 orders, we always share screenshots or links of 1688 prices and invoices, so you know exactly how much you pay to suppliers and how much is our service fee.";

export const caseStudies = [
  {
    title: "US Amazon Seller Using 1688 Links",
    clientType: "US Amazon Seller",
    productType: "Fashion Jewelry Bundles",
    problem:
      "The seller found 10 SKUs on 1688 but could not communicate specs or pay in RMB, and shipping each parcel separately was too expensive.",
    solution: [
      "Verified each supplier’s ratings and history on 1688.",
      "Confirmed real prices, MOQ, packaging, and labeling rules.",
      "Paid suppliers on the client’s behalf, inspected each SKU, and consolidated into one shipment.",
    ],
    result:
      "Avoided miscommunication, reduced domestic freight, and launched the new SKUs on time with repeat orders placed two months later.",
  },
  {
    title: "AU Gift Shop Mixed Small Commodities",
    clientType: "Australian Gift Shop Owner",
    productType: "Stationery & Mini Home Decor",
    problem:
      "Local wholesalers had limited styles. The client needed small lots from multiple factories but worried about wiring money to unknown suppliers.",
    solution: [
      "Curated 15 verified suppliers across Yiwu & Shenzhen.",
      "Arranged mixed-carton consolidation, labeling, and drop testing.",
      "Provided transparent invoice: factory prices + service fee + freight.",
    ],
    result:
      "Reduced landed cost by 22% compared to previous sourcing agents and restocked within six weeks.",
  },
  {
    title: "DE Shopify Brand Stainless Steel Jewelry",
    clientType: "Germany Shopify Brand",
    productType: "316L Stainless Steel Jewelry",
    problem:
      "Needed stricter QC and nickel-free certification, plus bilingual communication for packaging inserts.",
    solution: [
      "Audited two factories, implemented AQL 1.5 level inspections.",
      "Coordinated SGS nickel release testing and bilingual packaging.",
      "Shared live production dashboards and weekly videos.",
    ],
    result:
      "Reject rate dropped from 4.5% to 1.2%, enabling the brand to scale to EU retail partners.",
  },
];

export const testimonials = [
  {
    name: "Laura M.",
    role: "Amazon FBA Seller, USA",
    quote:
      "They feel like an extended team in China. Transparent spreadsheets, fast WhatsApp replies, and they saved me from a fake supplier twice.",
  },
  {
    name: "Ethan P.",
    role: "Gift Store Owner, Australia",
    quote:
      "Being able to mix small orders from 5 vendors into one shipment changed our cash flow. Photos and videos of inspections gave me real peace of mind.",
  },
];

export const aboutContent = {
  mission:
    "We are a small but committed bilingual team based in Yiwu, focused on helping independent brands and retailers buy from China with confidence.",
  bullets: [
    "Team members previously worked in jewelry and gift factories, so we speak both buyer and supplier language.",
    "We run a real office, sample showroom, and mini-warehouse in Yiwu for consolidation and QC.",
    "We combine factory sourcing with 1688 execution to stay flexible for both big and small orders.",
  ],
};

export const faqItems = [
  {
    question: "Can you guarantee zero risk when buying from 1688 suppliers?",
    answer:
      "We thoroughly check ratings, business licenses, and transaction history, but 1688 is still a marketplace. If a seller commits fraud or ships wrong goods, we will help you communicate with the platform and seller to claim compensation. However, we cannot promise to cover 100% of supplier-caused losses. Clear responsibilities are defined in our service agreement.",
  },
  {
    question: "How do you charge for sourcing services?",
    answer:
      "Most factory orders use a 5–10% commission model. For micro orders or sample runs we apply a flat fee once, then deduct part of it if you move into production within 60 days.",
  },
  {
    question: "Which payment methods do you accept?",
    answer:
      "For overseas clients we accept USD/EUR via bank transfer, Wise, PayPal (plus fee), and AUD via Wise. We convert and pay suppliers in RMB/USD domestically.",
  },
  {
    question: "Can you help if I already found suppliers myself?",
    answer:
      "Yes. Share the links or contact info, we will audit them, confirm all specs, handle deposits, and keep the process transparent with shared documents.",
  },
];

export const contactCopy = {
  title: "Tell us what you need and we will reply within 24 hours.",
  description:
    "Fill out the form or reach us via email/WhatsApp. Please include product details, target price, annual volume, and any 1688 links if available.",
  successMessage:
    "Thank you for your message. We usually reply within 24 hours on business days.",
  whatsappReminder:
    "Need a quick chat? Tap the WhatsApp button and we will respond from Yiwu time zone.",
  honeypotField: "website",
};

export const footerLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

