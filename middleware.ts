import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import {
  ADMIN_COOKIE_NAME,
  requireAuth,
  redirectIfAuthenticated,
} from "./src/lib/auth";

const protectedRoutes = ["/admin", "/api/contact/export"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/admin-login")) {
    return redirectIfAuthenticated(request);
  }

  const isProtectedRoute = protectedRoutes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );

  if (isProtectedRoute) {
    return requireAuth(request);
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

