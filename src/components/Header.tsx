"use client";

import Link from "next/link";
import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { useSiteContent } from "@/hooks/useSiteContent";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const content = useSiteContent();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase text-sky-600">
            {content.hero.locationTag}
          </span>
          <div className="h-5 w-px bg-slate-300" />
          <p className="text-sm font-semibold text-slate-900">
            {content.company.brandTagline}
          </p>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 lg:flex">
          {content.navigation.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-slate-900">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href={`mailto:${content.company.email}`}
            className="text-sm font-medium text-slate-600 hover:text-slate-900"
            onClick={() =>
              trackEvent("email_click", { location: "header_cta" })
            }
          >
            {content.company.email}
          </Link>
          <a
            href={content.company.whatsappLink}
            target="_blank"
            rel="noreferrer"
            onClick={() =>
              trackEvent("whatsapp_click", { location: "header_cta" })
            }
            className="rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700"
          >
            WhatsApp
          </a>
        </div>
        <button
          type="button"
          className="lg:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          <span className="sr-only">Toggle menu</span>
          <div className="space-y-1">
            <span className="block h-0.5 w-6 bg-slate-900" />
            <span className="block h-0.5 w-6 bg-slate-900" />
          </div>
        </button>
      </div>
      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-4 text-base font-medium text-slate-700">
            {content.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="hover:text-slate-900"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <Link
              href={`mailto:${content.company.email}`}
              className="text-sm font-medium text-slate-700 underline"
              onClick={() =>
                trackEvent("email_click", { location: "header_mobile" })
              }
            >
              {content.company.email}
            </Link>
            <a
              href={content.company.whatsappLink}
              target="_blank"
              rel="noreferrer"
              onClick={() =>
                trackEvent("whatsapp_click", { location: "header_mobile" })
              }
              className="rounded-full bg-sky-600 px-4 py-2 text-center text-sm font-semibold text-white shadow-sm"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

