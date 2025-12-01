"use client";

import { trackEvent } from "@/lib/analytics";
import { useSiteContent } from "@/hooks/useSiteContent";
import { useLanguage } from "@/contexts/language-context";

export function FloatingButtons() {
  const content = useSiteContent();
  const { language } = useLanguage();

  return (
    <div className="fixed bottom-6 right-4 flex flex-col gap-3 md:hidden">
      <a
        href={content.company.whatsappLink}
        target="_blank"
        rel="noreferrer"
        onClick={() => trackEvent("whatsapp_click", { location: "floating" })}
        className="rounded-full bg-green-500 px-5 py-3 text-sm font-semibold text-white shadow-lg"
      >
        {language === "zh" ? "联系 WhatsApp" : "WhatsApp"}
      </a>
      <a
        href={`mailto:${content.company.email}`}
        onClick={() => trackEvent("email_click", { location: "floating" })}
        className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg"
      >
        {language === "zh" ? "发送邮件" : "Email"}
      </a>
    </div>
  );
}

