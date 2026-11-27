import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("admin_token")?.value;

  if (pathname.startsWith("/admin")) {
    const isLoginPage = pathname === "/admin/login";

    // If user is already authenticated and visits /admin/login, redirect to /admin
    if (isLoginPage && token) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }

    // If unauthenticated user tries to visit protected /admin pages, redirect to /admin/login
    if (!isLoginPage && !token) {
      const loginUrl = new URL("/admin/login", request.url);
      if (pathname !== "/admin") {
        loginUrl.searchParams.set("from", pathname);
      }
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
