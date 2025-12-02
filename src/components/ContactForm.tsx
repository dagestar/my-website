"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { trackEvent } from "@/lib/analytics";
import { useSiteContent } from "@/hooks/useSiteContent";
import { useLanguage } from "@/contexts/language-context";

const countryList = [
  "United States",
  "Canada",
  "United Kingdom",
  "Germany",
  "France",
  "Italy",
  "Spain",
  "Netherlands",
  "Sweden",
  "Australia",
  "New Zealand",
  "Singapore",
  "Other",
];

type FormState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormState>("idle");
  const [message, setMessage] = useState<string | null>(null);
  const router = useRouter();
  const content = useSiteContent();
  const { language } = useLanguage();
  const formCopy = content.contact.form;
  const [captcha, setCaptcha] = useState<{ a: number; b: number }>({
    a: 0,
    b: 0,
  });

  useEffect(() => {
    regenerateCaptcha();
  }, []);

  function regenerateCaptcha() {
    const a = Math.floor(Math.random() * 8) + 2;
    const b = Math.floor(Math.random() * 8) + 1;
    setCaptcha({ a, b });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage(null);

    const formData = new FormData(event.currentTarget);
    formData.set("language", language);
     formData.set("captchaA", String(captcha.a));
     formData.set("captchaB", String(captcha.b));
    const payload = Object.fromEntries(formData.entries());

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      setStatus("success");
      setMessage(content.contact.successMessage);
      (event.target as HTMLFormElement).reset();
      trackEvent("contact_form_submit", { channel: "web", language });
      regenerateCaptcha();
      router.push("/thank-you");
    } else {
      const data = await response.json();
      setStatus("error");
      setMessage(
        data?.message ??
          "Something went wrong. Please contact us via email or WhatsApp.",
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <input
        type="text"
        name="honeypot"
        tabIndex={-1}
        aria-hidden="true"
        className="sr-only"
      />
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-medium text-slate-700">
          {formCopy.nameLabel}
          <input
            required
            name="name"
            className="mt-1 w-full rounded-2xl border border-slate-300 px-4 py-2 text-sm"
            placeholder="Your full name"
          />
        </label>
        <label className="text-sm font-medium text-slate-700">
          {formCopy.emailLabel}
          <input
            required
            type="email"
            name="email"
            className="mt-1 w-full rounded-2xl border border-slate-300 px-4 py-2 text-sm"
            placeholder="name@company.com"
          />
        </label>
        <label className="text-sm font-medium text-slate-700">
          {formCopy.whatsappLabel}
          <input
            name="whatsapp"
            className="mt-1 w-full rounded-2xl border border-slate-300 px-4 py-2 text-sm"
            placeholder="+1 555 123 9876"
          />
        </label>
        <label className="text-sm font-medium text-slate-700">
          {formCopy.countryLabel}
          <select
            required
            name="country"
            className="mt-1 w-full rounded-2xl border border-slate-300 bg-white px-4 py-2 text-sm"
          >
            <option value="">{language === "zh" ? "请选择" : "Select your country"}</option>
            {countryList.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm font-medium text-slate-700">
          {formCopy.businessTypeLabel}
          <select
            required
            name="businessType"
            className="mt-1 w-full rounded-2xl border border-slate-300 bg-white px-4 py-2 text-sm"
          >
            <option value="">{language === "zh" ? "请选择" : "Select..."}</option>
            {formCopy.businessTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </label>
        <div className="text-sm text-slate-600">
          <p className="font-semibold text-slate-700">
            {formCopy.preferenceLabel}
          </p>
          <p>Email: {content.company.email}</p>
          <p>WhatsApp: {content.company.whatsappNumber}</p>
        </div>
      </div>
      <label className="mt-4 block text-sm font-medium text-slate-700">
        {formCopy.productNeedsLabel}
        <textarea
          required
          name="productNeeds"
          rows={5}
          className="mt-1 w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm"
          placeholder={formCopy.productNeedsPlaceholder}
        />
      </label>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <input type="hidden" name="captchaA" value={captcha.a} />
        <input type="hidden" name="captchaB" value={captcha.b} />
        <label className="text-sm font-medium text-slate-700 md:col-span-2">
          {formCopy.captchaLabel} ({captcha.a} + {captcha.b} = ?)
          <input
            required
            name="captchaAnswer"
            className="mt-1 w-full rounded-2xl border border-slate-300 px-4 py-2 text-sm"
            placeholder={formCopy.captchaPlaceholder}
          />
        </label>
      </div>
      <label className="mt-4 block text-sm font-medium text-slate-700">
        {formCopy.linksLabel}
        <textarea
          name="links1688"
          rows={3}
          className="mt-1 w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm"
          placeholder={formCopy.linksPlaceholder}
        />
      </label>
      {message && (
        <p
          className={`mt-4 text-sm ${
            status === "error" ? "text-red-600" : "text-slate-600"
          }`}
        >
          {message}
        </p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 w-full rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? formCopy.submittingLabel : formCopy.submitLabel}
      </button>
      <p className="mt-3 text-center text-xs text-slate-500">
        {formCopy.privacyNote}
      </p>
    </form>
  );
}

