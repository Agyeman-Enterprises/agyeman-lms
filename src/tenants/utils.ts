import { headers } from "next/headers";
import { TenantId } from "./config";

export function isTenantId(value: string): value is TenantId {
  return value === "default" || value === "tls" || value === "spm" || value === "sva";
}

export async function getTenantFromHeaders(): Promise<TenantId> {
  const h = await headers();
  const t = h.get("x-tenant") ?? "default";
  return isTenantId(t) ? t : "default";
}
