"use client";

import Image from "next/image";
import { useSiteContent } from "@/hooks/useSiteContent";

export function HeroSection() {
  const content = useSiteContent();
  const hero = content.hero;

  return (
    <section
      id="hero"
      className="border-b border-slate-200 bg-slate-50 pt-10 sm:pt-16"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 pb-10 md:grid-cols-2 md:px-6 lg:pb-16">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
            {hero.locationTag}
          </p>
          <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
            {hero.title}
          </h1>
          <p className="text-lg leading-relaxed text-slate-600">{hero.subtitle}</p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href={hero.primaryCta.href}
              className="rounded-full bg-slate-900 px-6 py-3 text-center text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-black"
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={content.company.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-300 px-6 py-3 text-center text-sm font-semibold uppercase tracking-wide text-slate-900 transition hover:border-slate-500 hover:text-slate-950"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
          <div className="grid gap-3 text-sm text-slate-600 sm:grid-cols-3">
            {hero.highlights.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white bg-white/80 p-4 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 rounded-[32px] bg-sky-200 blur-3xl" />
          <div className="relative rounded-[32px] border border-white/60 bg-white p-2 shadow-xl">
            <Image
              src={content.company.gallery[0].src}
              alt={content.company.gallery[0].alt}
              width={960}
              height={640}
              className="h-full rounded-[28px] object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-6 rounded-2xl bg-white p-4 shadow-lg sm:-bottom-8 sm:left-8">
            <p className="text-sm font-semibold text-slate-900">
              {content.company.gallery[0].alt}
            </p>
            <p className="text-xs text-slate-500">
              SanLan team at Yiwu headquarters.
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-6 text-center text-sm text-slate-600 sm:grid-cols-4 md:px-6">
          {content.trustBar.map((item) => (
            <p key={item} className="font-medium text-slate-700">
              {item}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
