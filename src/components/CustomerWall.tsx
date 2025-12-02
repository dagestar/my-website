"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useSiteContent } from "@/hooks/useSiteContent";

export function CustomerWall({ enabled }: { enabled: boolean }) {
  const content = useSiteContent();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  if (!content.customerWall || !enabled) {
    return null;
  }

  return (
    <section ref={ref} className="bg-slate-900 py-16 text-white md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
            {content.customerWall.title}
          </p>
          <p className="text-base text-slate-200">
            {content.customerWall.subtitle}
          </p>
        </div>
        <div
          className={`mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 ${
            inView ? "animate-fadeInUp" : "opacity-0"
          }`}
        >
          {content.customerWall.photos.map((photo) => (
            <div
              key={photo}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5"
            >
              <Image
                src={photo}
                alt="Customer visit"
                width={480}
                height={360}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

