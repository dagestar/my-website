import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const ADMIN_COOKIE_NAME = "csaw-admin";
const ADMIN_SESSION_TOKEN =
  process.env.ADMIN_SESSION_TOKEN ?? "default-admin-session-token";

export function getAdminPassword() {
  return process.env.ADMIN_PASSWORD ?? "ChangeThisPassword123!";
}

export function getSessionToken() {
  return ADMIN_SESSION_TOKEN;
}

export function isAuthenticatedFromCookies() {
  const cookie = cookies().get(ADMIN_COOKIE_NAME);
  return cookie?.value === ADMIN_SESSION_TOKEN;
}

export function requireAuth(request: NextRequest) {
  const cookie = request.cookies.get(ADMIN_COOKIE_NAME);
  if (cookie?.value === ADMIN_SESSION_TOKEN) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/admin-login", request.url));
}

export function redirectIfAuthenticated(request: NextRequest) {
  const cookie = request.cookies.get(ADMIN_COOKIE_NAME);
  if (cookie?.value === ADMIN_SESSION_TOKEN) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }
  return NextResponse.next();
}

