import { getTenantFromHeaders } from "../tenants/utils";

export default async function Home() {
  const tenant = await getTenantFromHeaders();
  return (
    <main style={{ padding: 24 }}>
      <h1>agyeman-lms</h1>
      <p>Tenant: {tenant}</p>
    </main>
  );
}
