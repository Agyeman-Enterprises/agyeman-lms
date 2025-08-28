import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { HOST_TO_TENANT } from "./src/tenants/config";

export function middleware(req: NextRequest) {
  const host = (req.headers.get("host") || "").toLowerCase();
  const tenant = (HOST_TO_TENANT as any)[host] || "default";
  const res = NextResponse.next();
  res.headers.set("x-tenant", tenant);
  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)"],
};
