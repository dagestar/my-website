import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  whatsapp: z.string().optional(),
  country: z.string().min(2, "Country is required"),
  businessType: z.enum([
    "Amazon seller",
    "Online shop",
    "Wholesaler",
    "Retail store",
    "Other",
  ]),
  productNeeds: z
    .string()
    .min(5, "Please describe what products you are looking for."),
  links1688: z.string().optional(),
  honeypot: z.string().optional(),
  language: z.enum(["en", "zh"]).optional(),
  captchaA: z.string(),
  captchaB: z.string(),
  captchaAnswer: z.string(),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;

