import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { TopTicker } from "@/components/top-ticker";
import { SiteFooter } from "@/components/site-footer";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "newztoday",
  description: "Modern, responsive news powered by JSON",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>
          <TopTicker />
          <SiteHeader />
          <main className="min-h-dvh bg-background text-foreground">
            {children}
          </main>
          <SiteFooter />
        </Suspense>
      </body>
    </html>
  );
}
