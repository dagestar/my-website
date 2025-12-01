import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { companyProfile } from "@/data/companyProfile";
import { AnalyticsScripts } from "@/components/AnalyticsScripts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yiwu China Sourcing Partner for Gifts & Jewelry – 1688 Support | SanLan Sourcing",
  description:
    "Trusted Yiwu-based sourcing partner for gifts, jewelry, and small commodities. Transparent pricing, 1688 purchasing support, QC, and logistics.",
  keywords: [
    "China sourcing agent",
    "Yiwu sourcing",
    "1688 purchasing service",
    "Jewelry sourcing",
  ],
  openGraph: {
    title: "Your Trusted China Sourcing Partner for Gifts & Jewelry",
    description:
      "Based in Yiwu with bilingual team covering sourcing, inspection, and logistics.",
    locale: "en_US",
    siteName: companyProfile.companyNameEn,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AnalyticsScripts />
        {children}
      </body>
    </html>
  );
}
