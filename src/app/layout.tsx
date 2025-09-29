import type React from "react";
import type { Metadata } from "next";
import { Merriweather, Lato } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { TopTicker } from "@/components/top-ticker";
import { SiteFooter } from "@/components/site-footer";
import { Suspense } from "react";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

const merri = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-georgia",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "NewzToday",
  description: "Modern, responsive news powered by JSON",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${merri.variable} ${lato.variable}`}>
      <body suppressHydrationWarning={true}>
        <Suspense fallback={<LoadingSpinner />}>
          <TopTicker />
          <SiteHeader />
          <main className="min-h-dvh text-foreground">{children}</main>
          <SiteFooter />
        </Suspense>
      </body>
    </html>
  );
}
