import { sql } from "@vercel/postgres";

export type SiteSettings = {
  showCustomerWall: boolean;
};

const defaultSettings: SiteSettings = {
  showCustomerWall: true,
};

declare global {
  // eslint-disable-next-line no-var
  var __siteSettingsTableEnsured: boolean | undefined;
}

async function ensureTable() {
  if (!process.env.POSTGRES_URL) {
    throw new Error(
      "Missing POSTGRES_URL environment variable. Set it in .env.local or Vercel project settings.",
    );
  }

  if (globalThis.__siteSettingsTableEnsured) return;

  await sql`
    CREATE TABLE IF NOT EXISTS site_settings (
      id INT PRIMARY KEY,
      show_customer_wall BOOLEAN NOT NULL DEFAULT TRUE
    )
  `;

  await sql`
    INSERT INTO site_settings (id, show_customer_wall)
    VALUES (1, TRUE)
    ON CONFLICT (id) DO NOTHING
  `;

  globalThis.__siteSettingsTableEnsured = true;
}

function mapRow(row?: { show_customer_wall: boolean }): SiteSettings {
  if (!row) return { ...defaultSettings };
  return { showCustomerWall: row.show_customer_wall };
}

export async function getSiteSettings(): Promise<SiteSettings> {
  await ensureTable();

  const { rows } =
    await sql<{ show_customer_wall: boolean }>`SELECT show_customer_wall FROM site_settings WHERE id = 1 LIMIT 1`;

  return mapRow(rows[0]);
}

export async function updateSiteSettings(
  next: Partial<SiteSettings>,
): Promise<SiteSettings> {
  const current = await getSiteSettings();
  const merged = { ...current, ...next };

  await sql`
    INSERT INTO site_settings (id, show_customer_wall)
    VALUES (1, ${merged.showCustomerWall})
    ON CONFLICT (id) DO UPDATE SET show_customer_wall = EXCLUDED.show_customer_wall
  `;

  return merged;
}

