"use client";

import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import { cn } from "@/lib/utils";
import { fetcher } from "@/lib/fetcher";
import { getCategories, slugifyCategory } from "@/lib/news-utils";
import type { NewsItem } from "@/lib/types";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function SiteHeader() {
  const { data } = useSWR<NewsItem[]>("/data/news.json", fetcher);
  const categories = getCategories(data || []);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-white/80 backdrop-blur-md shadow-sm dark:bg-gray-900/80 dark:border-border/20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        {/* Hamburger Menu - Always visible */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo - Centered */}
        <Link
          href="/"
          className="flex items-center space-x-2 transition-transform hover:scale-105 mx-auto"
        >
          <Image
            src="/logo.png"
            alt="NewzToday"
            width={200}
            height={50}
            className="h-8 w-auto md:h-10 lg:h-12"
          />
          <span className="sr-only">Go to homepage</span>
        </Link>

        {/* Advertisement Space */}
        <div className="hidden md:block w-32 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-xs text-muted-foreground">
          Ad Space
        </div>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:block mx-auto max-w-6xl px-4 pb-4">
        <nav
          className="flex items-center justify-center gap-2"
          aria-label="Primary"
        >
          <Link
            href="/"
            className={cn(
              "rounded-lg px-6 py-3 text-lg font-semibold transition-all duration-200",
              "text-foreground hover:bg-theme-muted hover:text-theme"
            )}
          >
            Home
          </Link>
          {categories.map((c) => (
            <Link
              key={c}
              href={`/category/${slugifyCategory(c)}`}
              className={cn(
                "rounded-lg px-6 py-3 text-lg font-semibold transition-all duration-200",
                "text-foreground hover:bg-theme-muted hover:text-theme"
              )}
            >
              {c}
            </Link>
          ))}
        </nav>
      </div>

      {/* Hamburger Menu */}
      {isMobileMenuOpen && (
        <div className="border-t border-border/30 bg-white dark:bg-gray-900">
          <nav className="flex flex-col px-4 py-3 space-y-2 max-w-6xl mx-auto">
            {/* Show categories only on mobile */}
            <div className="md:hidden">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium hover:bg-theme-muted hover:text-theme block"
              >
                Home
              </Link>
              {categories.map((c) => (
                <Link
                  key={c}
                  href={`/category/${slugifyCategory(c)}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium hover:bg-theme-muted hover:text-theme block"
                >
                  {c}
                </Link>
              ))}
              <div className="border-t border-border/30 my-2"></div>
            </div>
            {/* Always show these menu items */}
            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium hover:bg-theme-muted hover:text-theme"
            >
              About Us
            </Link>
            <Link
              href="/privacy"
              onClick={() => setIsMobileMenuOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium hover:bg-theme-muted hover:text-theme"
            >
              Privacy Policy
            </Link>
            <Link
              href="/advertise"
              onClick={() => setIsMobileMenuOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium hover:bg-theme-muted hover:text-theme"
            >
              Advertise with Us
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium hover:bg-theme-muted hover:text-theme"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
