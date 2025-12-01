# Implementation Plan  China Sourcing Agent Website

## Architecture Overview
- **Framework**: Next.js 15 (App Router, TypeScript) with Tailwind CSS.
- **Structure**: Single-page marketing site (anchor navigation) + protected admin dashboard.
- **Data Configuration**: All marketing copy, pricing, cases, FAQs stored in `src/data/siteContent.ts` and `src/data/companyProfile.ts` for easy CMS-like editing.
- **Storage**: File-based JSON (`data/contact-submissions.json`) for contact leads (pluggable to real DB later).
- **API Routes**: `/api/contact` for submissions, `/api/login` & `/api/logout` for admin auth, `/api/contact/export` for CSV export.
- **Auth**: Cookie-based gate for `/admin` via middleware, password supplied through `ADMIN_PASSWORD` env.

## Front-of-site Sections
1. **Hero + Trust Bar**: H1 + H2, CTA buttons (Quote form + WhatsApp), trust stats.
2. **Services Grid**: Cards for 7 services incl. mandatory 1688 support highlight module.
3. **How It Works**: 5-step timeline + dedicated 1688 mini-flow.
4. **Pricing**: Transparent intro, 3 scenario cards, required 1688 disclaimer.
5. **Case Studies & Testimonials**: Structured stories incl. 1688 case, placeholder for future testimonials.
6. **About + Gallery**: Company info, location, mission, image gallery slots referencing real photos.
7. **Contact**: Form with required fields, 1688 links textarea, success/failure messaging, plus quick contact tile, WhatsApp CTA, WeChat QR, floating mobile buttons.
8. **FAQ**: Includes 1688 risk boundary text per spec.

## Admin & Data
- `/admin-login`: Client page posts password to `/api/login`.
- `/admin`: Server page showing lead table, filters, CSV export, manual refresh.
- `trackEvent` helper to push GA events (no GA ID yet; fallback logs) for WhatsApp/email/form conversions.
- Contact submissions stored with timestamp, IP, metadata; validations on both front & API.

## Styling & UX
- Tailwind config with custom colors + `Inter` font.
- Responsive grid layouts, sticky header, CTA floating buttons on mobile.
- Light motion (scroll reveals) optional; initial version static for performance.

## Security & Compliance
- Middleware protects admin routes, login page redirect logic.
- Basic spam mitigation: honeypot field + server-side validation; ready for reCAPTCHA integration stub.
- API sanitizes strings, trims 1688 links, standardizes country list.
- `.env.example` documents required secrets (admin password, notification email placeholder, WhatsApp number, GA ID etc.).

## Next Steps After MVP
- Hook email notifications (Nodemailer) + persistent DB.
- Integrate GA4 ID + Ads conversions.
- Upload real office/gallery photos and update contact info.
- Deploy (Vercel/Azure) with HTTPS + backup job for `data/` exports.
