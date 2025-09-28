import type React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { TopTicker } from "@/components/top-ticker";
import { SiteFooter } from "@/components/site-footer";
import { Suspense } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

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
    <html lang="en" className={poppins.variable}>
      <body suppressHydrationWarning={true}>
        <Suspense fallback={<div>Loading...</div>}>
          <TopTicker />
          <SiteHeader />
          <main className="min-h-dvh text-foreground">{children}</main>
          <SiteFooter />
        </Suspense>
      </body>
    </html>
  );
}
