"use client";

import Image from "next/image";
import { ContactForm } from "./ContactForm";
import { useSiteContent } from "@/hooks/useSiteContent";

export function ContactSection() {
  const content = useSiteContent();

  return (
    <section id="contact" className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900">
              {content.contact.title}
            </h2>
            <p className="mt-3 text-base text-slate-600">
              {content.contact.description}
            </p>
            <ContactForm />
          </div>
          <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              {content.contact.quickLabel ?? "Direct contacts"}
            </p>
            <div className="mt-4 space-y-4 text-sm text-slate-600">
              <a
                href={`mailto:${content.company.email}`}
                className="block font-semibold text-slate-900 underline"
              >
                {content.company.email}
              </a>
              <a
                href={content.company.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="block font-semibold text-slate-900 underline"
              >
                WhatsApp: {content.company.whatsappNumber}
              </a>
              <p>
                {content.company.address}
                <br />
                {content.company.officeHours}
              </p>
            </div>
            <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
              <p className="font-semibold text-slate-900">WeChat</p>
              <p>{content.contact.wechatNote ?? "Scan the QR code for quick sample updates."}</p>
              <Image
                src={content.company.wechatQr}
                alt="WeChat QR"
                width={200}
                height={200}
                className="mt-4 rounded-lg border border-slate-200 bg-white"
              />
            </div>
            <p className="mt-6 text-sm text-slate-600">
              {content.contact.whatsappReminder}
            </p>
            {content.contact.secondaryCta && (
              <div className="mt-6 rounded-3xl border border-slate-100 bg-slate-50 p-4 text-sm text-slate-600">
                <p className="font-semibold text-slate-900">
                  {content.contact.secondaryCta.title}
                </p>
                <p className="mt-2">{content.contact.secondaryCta.description}</p>
                <div className="mt-4 flex flex-col gap-2 text-sm">
                  <a
                    href="/buyers-guide.pdf"
                    className="rounded-full border border-slate-300 px-4 py-2 text-center font-semibold text-slate-900 hover:border-slate-500"
                  >
                    {content.contact.secondaryCta.downloadLabel}
                  </a>
                  <a
                    href={content.company.whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-slate-900 px-4 py-2 text-center font-semibold text-white"
                  >
                    {content.contact.secondaryCta.consultLabel}
                  </a>
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}

