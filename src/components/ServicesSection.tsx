"use client";

import { SectionHeading } from "./SectionHeading";
import { useSiteContent } from "@/hooks/useSiteContent";

export function ServicesSection() {
  const content = useSiteContent();

  return (
    <section id="services" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow={content.servicesHeading.eyebrow}
          title={content.servicesHeading.title}
          subtitle={content.servicesHeading.subtitle}
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6 shadow-sm transition hover:-translate-y-1 hover:bg-white"
            >
              <p className="text-lg font-semibold text-slate-900">
                {service.title}
              </p>
              <p className="mt-3 text-sm text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-3xl border border-sky-100 bg-sky-50/70 p-8 shadow-sm md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
            {content.highlight1688.eyebrow}
          </p>
          <div className="mt-4 flex flex-col gap-8 lg:flex-row">
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-semibold text-slate-900">
                {content.highlight1688.title}
              </h3>
              <p className="mt-3 text-base text-slate-600">
                {content.highlight1688.description}
              </p>
            </div>
            <ul className="grid flex-1 gap-4 text-sm text-slate-600 md:grid-cols-2">
              {content.highlight1688.bullets.map((item) => (
                <li key={item} className="rounded-2xl bg-white/80 p-4 shadow-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

