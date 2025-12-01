import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { ADMIN_COOKIE_NAME, requireAuth, redirectIfAuthenticated } from "./src/lib/auth";

const protectedRoutes = ["/admin", "/api/contact/export"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    return requireAuth(request);
  }

  if (pathname.startsWith("/admin-login")) {
    return redirectIfAuthenticated(request);
  }

  if (pathname.startsWith("/api/logout")) {
    const response = NextResponse.next();
    response.cookies.delete(ADMIN_COOKIE_NAME);
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin",
    "/admin-login",
    "/api/contact/export",
    "/api/logout",
    "/api/settings",
  ],
};

