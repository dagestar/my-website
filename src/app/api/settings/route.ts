import { NextResponse } from "next/server";
import { getSiteSettings, updateSiteSettings } from "@/lib/settings";

export async function GET() {
  const settings = await getSiteSettings();
  return NextResponse.json(settings);
}

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    if (typeof payload.showCustomerWall !== "boolean") {
      return NextResponse.json(
        { message: "Invalid payload" },
        { status: 400 },
      );
    }

    const updated = await updateSiteSettings({
      showCustomerWall: payload.showCustomerWall,
    });
    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json(
      { message: "Unable to update settings", error: `${error}` },
      { status: 500 },
    );
  }
}

