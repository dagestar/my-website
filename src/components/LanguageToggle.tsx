"use client";

import { useLanguage } from "@/contexts/language-context";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed left-4 top-4 z-50 flex rounded-full border border-slate-200 bg-white/80 shadow-md backdrop-blur">
      {(["en", "zh"] as const).map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => setLanguage(lang)}
          className={`px-3 py-1 text-xs font-semibold uppercase transition ${
            language === lang
              ? "bg-slate-900 text-white"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          {lang === "en" ? "EN" : "中文"}
        </button>
      ))}
    </div>
  );
}

