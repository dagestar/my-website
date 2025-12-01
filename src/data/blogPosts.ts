export type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  intent: string;
  filePath: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "buy-from-1688-without-chinese-bank-account",
    title: "How to Buy from 1688 Without a Chinese Bank Account",
    intent: "Guide for overseas buyers who already found SKUs on 1688.",
    summary:
      "Practical workflow for communicating with suppliers, paying in RMB through a partner, and consolidating shipments safely.",
    filePath:
      "public/blog/buy-from-1688-without-chinese-bank-account.md",
  },
  {
    slug: "yiwu-sourcing-guide-for-gift-shop-owners",
    title: "Yiwu Sourcing Guide for Gift Shop Owners",
    intent: "Retailers and gift shop owners researching Yiwu market trips.",
    summary:
      "What to prepare before visiting Yiwu, how to mix MOQ, and how a local team can consolidate shipments for small retailers.",
    filePath:
      "public/blog/yiwu-sourcing-guide-for-gift-shop-owners.md",
  },
  {
    slug: "china-jewelry-manufacturer-vs-trading-company",
    title: "China Jewelry Manufacturer vs Trading Company: Pros & Cons",
    intent: "Decision-stage guide for jewelry brands comparing supplier types.",
    summary:
      "Understand when to work with a factory, when a trading company is more flexible, and how to keep pricing transparent either way.",
    filePath:
      "public/blog/china-jewelry-manufacturer-vs-trading-company.md",
  },
];


