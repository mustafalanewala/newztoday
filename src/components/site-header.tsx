"use client";

import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import { cn } from "@/lib/utils";
import { fetcher } from "@/lib/fetcher";
import { getCategories, slugifyCategory } from "@/lib/news-utils";
import type { NewsItem } from "@/lib/types";

export function SiteHeader() {
  const { data } = useSWR<NewsItem[]>("/data/news.json", fetcher);

  const categories = getCategories(data || []);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-white/80 backdrop-blur-md shadow-sm dark:bg-gray-900/80 dark:border-border/20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link
          href="/"
          className="flex items-center space-x-2 transition-transform hover:scale-105"
        >
          <Image
            src="/logo.png"
            alt="NewzToday"
            width={120}
            height={40}
            className="h-8 w-auto"
          />
          <span className="sr-only">Go to homepage</span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Primary">
          <Link
            href="/"
            className={cn(
              "rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200",
              "text-foreground hover:bg-orange-50 hover:text-orange-400",
              "dark:hover:bg-orange-950/50 dark:hover:text-orange-400"
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
                "text-foreground hover:bg-lime-50 hover:text-lime-600/85",
                "dark:hover:bg-lime-950/50 dark:hover:text-lime-600/85"
              )}
            >
              {c}
            </Link>
          ))}
        </nav>

        {/* Enhanced mobile overflow menu */}
        <nav
          className="md:hidden"
          role="navigation"
          aria-label="Mobile Categories"
        >
          <div className="flex max-w-[70vw] items-center gap-2 overflow-x-auto scrollbar-hide">
            <Link
              href="/"
              className="shrink-0 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 hover:bg-orange-50 hover:text-orange-400 dark:hover:bg-orange-950/50 dark:hover:text-orange-400"
            >
              Home
            </Link>
            {categories.map((c) => (
              <Link
                key={c}
                href={`/category/${slugifyCategory(c)}`}
                className="shrink-0 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 hover:bg-lime-50 hover:text-lime-600/85 dark:hover:bg-lime-950/50 dark:hover:text-lime-600/85"
              >
                {c}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
