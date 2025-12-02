"use client";

import Link from "next/link";
import { useEffect } from "react";
import { companyProfile } from "@/data/companyProfile";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function ThankYouPage() {
  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: "AW-17770808456/ShjFCOz-ssobEIiJ5JlC",
        value: 1.0,
        currency: "JPY",
      });
    }
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-24">
      <div className="max-w-2xl rounded-3xl bg-white p-10 text-center shadow-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
          Thank you
        </p>
        <h1 className="mt-4 text-3xl font-bold text-slate-900">
          感谢您的留言，我们会尽快与您取得联系
        </h1>
        <p className="mt-4 text-base text-slate-600">
          Our bilingual sourcing team has received your request and typically
          responds within one business day. If it&apos;s urgent, feel free to
          reach us on WhatsApp or email using the contact info below.
        </p>
        <div className="mt-6 text-sm text-slate-500">
          <p>Email: {companyProfile.email}</p>
          <p>WhatsApp: {companyProfile.whatsappNumber}</p>
        </div>
        <Link
          href="/"
          className="mt-10 inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-slate-800"
        >
          Back to homepage
        </Link>
      </div>
    </main>
  );
}

