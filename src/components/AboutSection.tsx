"use client";

import Image from "next/image";
import { SectionHeading } from "./SectionHeading";
import { useSiteContent } from "@/hooks/useSiteContent";

export function AboutSection() {
  const content = useSiteContent();

  return (
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow={content.aboutHeading.eyebrow}
          title={content.aboutHeading.title}
          subtitle={content.aboutHeading.subtitle}
        />
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <div className="space-y-5 text-sm text-slate-600">
            <p>
              {content.company.name} / {content.company.nativeName}
            </p>
            <p>{content.company.registrationCity}</p>
            <p>{content.company.address}</p>
            <p>{content.company.specialization}</p>
            <p>{content.company.founded}</p>
            <p>{content.company.officeHours}</p>
            <ul className="list-disc space-y-2 pl-5">
              {content.about.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {content.company.gallery.map((image) => (
              <figure
                key={image.src}
                className="rounded-3xl border border-slate-100 bg-slate-50 p-2 shadow-sm"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={480}
                  height={320}
                  className="rounded-2xl"
                />
                <figcaption className="mt-2 text-xs text-slate-500">
                  {image.alt}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

