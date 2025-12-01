import { promises as fs } from "fs";
import path from "path";

const SETTINGS_PATH = path.join(process.cwd(), "data", "site-settings.json");

export type SiteSettings = {
  showCustomerWall: boolean;
};

const defaultSettings: SiteSettings = {
  showCustomerWall: true,
};

async function ensureFile() {
  try {
    await fs.access(SETTINGS_PATH);
  } catch {
    await fs.mkdir(path.dirname(SETTINGS_PATH), { recursive: true });
    await fs.writeFile(
      SETTINGS_PATH,
      JSON.stringify(defaultSettings, null, 2),
      "utf-8",
    );
  }
}

export async function getSiteSettings(): Promise<SiteSettings> {
  await ensureFile();
  const data = await fs.readFile(SETTINGS_PATH, "utf-8");

  try {
    const parsed = JSON.parse(data) as Partial<SiteSettings>;
    return { ...defaultSettings, ...parsed };
  } catch {
    return { ...defaultSettings };
  }
}

export async function updateSiteSettings(
  next: Partial<SiteSettings>,
): Promise<SiteSettings> {
  const current = await getSiteSettings();
  const merged = { ...current, ...next };
  await fs.writeFile(SETTINGS_PATH, JSON.stringify(merged, null, 2), "utf-8");
  return merged;
}

