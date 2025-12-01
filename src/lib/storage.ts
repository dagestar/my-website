import { promises as fs } from "fs";
import path from "path";
import { ContactSubmission } from "@/types/contact";

const STORAGE_PATH = path.join(
  process.cwd(),
  "data",
  "contact-submissions.json",
);

async function ensureFileExists() {
  try {
    await fs.access(STORAGE_PATH);
  } catch {
    await fs.mkdir(path.dirname(STORAGE_PATH), { recursive: true });
    await fs.writeFile(STORAGE_PATH, "[]", "utf-8");
  }
}

export async function readContactSubmissions(): Promise<ContactSubmission[]> {
  await ensureFileExists();
  const content = await fs.readFile(STORAGE_PATH, "utf-8");
  return JSON.parse(content) as ContactSubmission[];
}

export async function saveContactSubmission(entry: ContactSubmission) {
  const data = await readContactSubmissions();
  data.unshift(entry);
  await fs.writeFile(STORAGE_PATH, JSON.stringify(data, null, 2), "utf-8");
}

