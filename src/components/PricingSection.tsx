"use client";

import { SectionHeading } from "./SectionHeading";
import { useSiteContent } from "@/hooks/useSiteContent";

export function PricingSection() {
  const content = useSiteContent();

  return (
    <section id="pricing" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow={content.pricing.eyebrow}
          title={content.pricing.title}
          subtitle={content.pricing.intro}
          align="center"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {content.pricing.scenarios.map((scenario) => (
            <div
              key={scenario.title}
              className="flex flex-col rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                {scenario.title}
              </p>
              <p className="mt-3 flex-1 text-sm text-slate-600">
                {scenario.description}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {scenario.includes.map((item) => (
                  <li key={item} className="rounded-2xl bg-white/80 p-3 shadow-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-10 rounded-2xl border border-sky-200 bg-sky-50 px-6 py-4 text-sm text-slate-700">
          {content.pricing.disclaimer}
        </p>
      </div>
    </section>
  );
}

