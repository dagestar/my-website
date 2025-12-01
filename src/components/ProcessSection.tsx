"use client";

import { SectionHeading } from "./SectionHeading";
import { useSiteContent } from "@/hooks/useSiteContent";

export function ProcessSection() {
  const content = useSiteContent();

  return (
    <section id="process" className="bg-slate-950 py-16 text-white md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow={content.process.eyebrow}
          title={content.process.title}
          subtitle={content.process.subtitle}
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-5">
          {content.process.steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-5"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-slate-300">
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-slate-200">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
              {content.process.branchTitle}
            </p>
            <p className="text-2xl font-semibold">
              {content.process.branchIntro}
            </p>
          </div>
          <ol className="mt-6 space-y-3 text-sm text-slate-200 sm:text-base">
            {content.process.branchSteps.map((item, index) => (
              <li key={item} className="flex gap-4">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full border border-sky-500 text-xs font-semibold text-sky-300">
                  {index + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

