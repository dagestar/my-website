import { sql } from "@vercel/postgres";
import { ContactSubmission } from "@/types/contact";

const TABLE_NAME = "contact_submissions";

declare global {
  // eslint-disable-next-line no-var
  var __contactTableEnsured: boolean | undefined;
}

async function ensureTableExists() {
  if (!process.env.POSTGRES_URL) {
    throw new Error(
      "Missing POSTGRES_URL environment variable. Set it in .env.local or Vercel project settings.",
    );
  }

  if (globalThis.__contactTableEnsured) return;

  await sql`
    CREATE TABLE IF NOT EXISTS contact_submissions (
      id UUID PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      whatsapp TEXT,
      country TEXT NOT NULL,
      business_type TEXT NOT NULL,
      product_needs TEXT NOT NULL,
      links1688 TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      ip TEXT,
      source TEXT
    )
  `;

  globalThis.__contactTableEnsured = true;
}

type ContactSubmissionRow = {
  id: string;
  name: string;
  email: string;
  whatsapp: string | null;
  country: string;
  business_type: string;
  product_needs: string;
  links1688: string | null;
  created_at: Date | string;
  ip: string | null;
  source: string | null;
};

function mapRowToSubmission(row: ContactSubmissionRow): ContactSubmission {
  return {
    id: row.id,
    name: row.name,
    email: row.email,
    whatsapp: row.whatsapp ?? undefined,
    country: row.country,
    businessType: row.business_type,
    productNeeds: row.product_needs,
    links1688: row.links1688 ?? undefined,
    createdAt:
      typeof row.created_at === "string"
        ? row.created_at
        : row.created_at.toISOString(),
    ip: row.ip,
    source: row.source ?? undefined,
  };
}

export async function readContactSubmissions(): Promise<ContactSubmission[]> {
  await ensureTableExists();

  const { rows } =
    await sql<ContactSubmissionRow>`SELECT * FROM contact_submissions ORDER BY created_at DESC LIMIT 500`;

  return rows.map(mapRowToSubmission);
}

export async function saveContactSubmission(entry: ContactSubmission) {
  await ensureTableExists();

  await sql`
    INSERT INTO contact_submissions (
      id,
      name,
      email,
      whatsapp,
      country,
      business_type,
      product_needs,
      links1688,
      created_at,
      ip,
      source
    ) VALUES (
      ${entry.id},
      ${entry.name},
      ${entry.email},
      ${entry.whatsapp ?? null},
      ${entry.country},
      ${entry.businessType},
      ${entry.productNeeds},
      ${entry.links1688 ?? null},
      ${entry.createdAt},
      ${entry.ip ?? null},
      ${entry.source ?? null}
    )
  `;
}

