"use client";

import { SectionHeading } from "./SectionHeading";
import { useSiteContent } from "@/hooks/useSiteContent";

export function FAQSection() {
  const content = useSiteContent();

  return (
    <section id="faq" className="bg-slate-900 py-16 text-white md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <SectionHeading
          eyebrow={content.faqHeading.eyebrow}
          title={content.faqHeading.title}
          subtitle={content.faqHeading.subtitle}
          align="center"
        />
        <div className="mt-12 divide-y divide-white/10 rounded-3xl border border-white/10 bg-white/5">
          {content.faq.map((item, index) => (
            <details
              key={item.question}
              className="group p-6 text-left open:bg-white/5"
              open={index === 0}
            >
              <summary className="cursor-pointer text-lg font-semibold text-white">
                {item.question}
              </summary>
              <p className="mt-4 text-sm text-slate-200">{item.answer}</p>
            </details>
          ))}
        </div>
        {content.additionalNotes && (
          <div className="mt-8 rounded-3xl border border-white/20 bg-white/10 p-6 text-sm text-slate-200">
            <p className="text-base font-semibold text-white">
              Additional Notes
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              {content.additionalNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

