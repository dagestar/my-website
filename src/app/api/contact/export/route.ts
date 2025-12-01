import { NextResponse } from "next/server";
import { readContactSubmissions } from "@/lib/storage";
import { ADMIN_COOKIE_NAME, getSessionToken } from "@/lib/auth";

function toCsvField(value: unknown) {
  if (value === null || value === undefined) return "";
  const stringValue = String(value).replace(/"/g, '""');
  return `"${stringValue}"`;
}

export async function GET(request: Request) {
  const cookie = request.headers.get("cookie");
  if (!cookie?.includes(`${ADMIN_COOKIE_NAME}=${getSessionToken()}`)) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const submissions = await readContactSubmissions();
  const header = [
    "id",
    "name",
    "email",
    "whatsapp",
    "country",
    "businessType",
    "productNeeds",
    "links1688",
    "createdAt",
    "ip",
  ];

  const rows = submissions.map((entry) =>
    [
      entry.id,
      entry.name,
      entry.email,
      entry.whatsapp,
      entry.country,
      entry.businessType,
      entry.productNeeds,
      entry.links1688,
      entry.createdAt,
      entry.ip,
    ]
      .map(toCsvField)
      .join(","),
  );

  const csv = [header.join(","), ...rows].join("\n");

  return new NextResponse(csv, {
    status: 200,
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition": `attachment; filename="contact-submissions.csv"`,
    },
  });
}

