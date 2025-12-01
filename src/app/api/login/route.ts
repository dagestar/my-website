import { NextResponse } from "next/server";
import { ADMIN_COOKIE_NAME, getAdminPassword, getSessionToken } from "@/lib/auth";

export async function POST(request: Request) {
  const { password } = await request.json();

  if (!password) {
    return NextResponse.json({ message: "Password is required" }, { status: 400 });
  }

  if (password !== getAdminPassword()) {
    return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(ADMIN_COOKIE_NAME, getSessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 8,
    path: "/",
  });

  return response;
}

