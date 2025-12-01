"use client";

import { useSiteContent } from "@/hooks/useSiteContent";

export function Footer() {
  const content = useSiteContent();

  return (
    <footer className="border-t border-slate-200 bg-white py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 text-sm text-slate-600 md:flex-row md:items-center md:justify-between md:px-6">
        <div>
          <p className="font-semibold text-slate-900">
            {content.company.name}
          </p>
          <p>{content.company.registrationCity}</p>
        </div>
        <div className="flex gap-4">
          {content.footer.links.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-slate-900">
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-xs text-slate-400">
          {content.footer.legal(new Date().getFullYear())}
        </p>
      </div>
    </footer>
  );
}

