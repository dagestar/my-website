import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validators";
import { saveContactSubmission } from "@/lib/storage";
import { ContactSubmission } from "@/types/contact";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const parsed = contactFormSchema.safeParse(payload);

    if (!parsed.success) {
      return NextResponse.json(
        { errors: parsed.error.flatten().fieldErrors },
        { status: 400 },
      );
    }

    const data = parsed.data;

    if (data.honeypot) {
      return NextResponse.json({ ok: true });
    }

    const captchaA = Number.parseInt(data.captchaA, 10);
    const captchaB = Number.parseInt(data.captchaB, 10);
    const captchaAnswer = Number.parseInt(data.captchaAnswer, 10);

    if (!Number.isFinite(captchaA) || !Number.isFinite(captchaB)) {
      return NextResponse.json(
        { message: "Captcha validation failed" },
        { status: 400 },
      );
    }

    if (captchaA + captchaB !== captchaAnswer) {
      return NextResponse.json(
        {
          errors: {
            captchaAnswer: ["Verification failed. Please try again."],
          },
        },
        { status: 400 },
      );
    }

    const submission: ContactSubmission = {
      id: crypto.randomUUID(),
      name: data.name.trim(),
      email: data.email.trim().toLowerCase(),
      whatsapp: data.whatsapp?.trim(),
      country: data.country.trim(),
      businessType: data.businessType,
      productNeeds: data.productNeeds.trim(),
      links1688: data.links1688?.trim(),
      createdAt: new Date().toISOString(),
      ip: request.headers.get("x-forwarded-for") ?? null,
      source: request.headers.get("referer") ?? undefined,
    };

    await saveContactSubmission(submission);

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Unable to process your request", error: `${error}` },
      { status: 500 },
    );
  }
}

