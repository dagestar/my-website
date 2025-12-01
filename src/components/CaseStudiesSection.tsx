"use client";

import { SectionHeading } from "./SectionHeading";
import { useSiteContent } from "@/hooks/useSiteContent";

export function CaseStudiesSection() {
  const content = useSiteContent();

  return (
    <section id="cases" className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow={content.casesHeading.eyebrow}
          title={content.casesHeading.title}
          subtitle={content.casesHeading.subtitle}
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {content.cases.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-white bg-white p-6 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                {item.clientType}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-slate-500">{item.productType}</p>
              <div className="mt-4 space-y-2 text-sm">
                <p className="font-semibold text-slate-700">
                  {content.caseLabels.problem}
                </p>
                <p className="text-slate-600">{item.problem}</p>
              </div>
              <div className="mt-4 space-y-2 text-sm">
                <p className="font-semibold text-slate-700">
                  {content.caseLabels.solution}
                </p>
                <ul className="list-disc space-y-1 pl-5 text-slate-600">
                  {item.solution.map((solution) => (
                    <li key={solution}>{solution}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 space-y-2 text-sm">
                <p className="font-semibold text-slate-700">
                  {content.caseLabels.result}
                </p>
                <p className="text-slate-600">{item.result}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <SectionHeading
            eyebrow={content.testimonialsHeading.eyebrow}
            title={content.testimonialsHeading.title}
            subtitle={content.testimonialsHeading.subtitle}
          />
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {content.testimonials.map((testimonial) => (
              <blockquote
                key={testimonial.name}
                className="rounded-2xl border border-slate-100 bg-slate-50/60 p-5 text-sm text-slate-700"
              >
                “{testimonial.quote}”
                <footer className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {testimonial.name} · {testimonial.role}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

