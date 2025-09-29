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

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-white/80 backdrop-blur-md shadow-sm dark:bg-gray-900/80 dark:border-border/20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2 transition-transform hover:scale-105"
        >
          <Image
            src="/logo.png"
            alt="NewzToday"
            width={120}
            height={40}
            className="h-7 w-auto sm:h-8"
          />
          <span className="sr-only">Go to homepage</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2" aria-label="Primary">
          <Link
            href="/"
            className={cn(
              "rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200",
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
                "rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200",
                "text-foreground hover:bg-theme-muted hover:text-theme"
              )}
            >
              {c}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border/30 bg-white dark:bg-gray-900">
          <nav className="flex flex-col px-4 py-3 space-y-2">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-theme-muted hover:text-theme"
            >
              Home
            </Link>
            {categories.map((c) => (
              <Link
                key={c}
                href={`/category/${slugifyCategory(c)}`}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-theme-muted hover:text-theme"
              >
                {c}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
