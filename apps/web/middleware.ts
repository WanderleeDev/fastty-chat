import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === "/auth") {
    return NextResponse.redirect(new URL("/auth/login", req.nextUrl));
  }
}

// export const config = {
//   matcher: ["/chat/:path*", "/api/:path*"],
// };
