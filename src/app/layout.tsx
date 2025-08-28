import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "agyeman-lms",
  description: "Agyeman Enterprises LMS",
};

import { TenantProvider } from "../tenants/provider";
import { getTenantFromHeaders } from "../tenants/utils";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const tenant = await getTenantFromHeaders();
  return (
    <html lang="en" data-tenant={tenant}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <TenantProvider tenant={tenant}>{children}</TenantProvider>
      </body>
    </html>
  );
}
