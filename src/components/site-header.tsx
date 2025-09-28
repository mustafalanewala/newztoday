"use client";

import Link from "next/link";
import useSWR from "swr";
import { cn } from "@/lib/utils";
import { fetcher } from "@/lib/fetcher";
import { getCategories, slugifyCategory } from "@/lib/news-utils";
import type { NewsItem } from "@/lib/types";

export function SiteHeader() {
  const { data } = useSWR<NewsItem[]>("/data/news.json", fetcher);

  const categories = getCategories(data || []);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-lg font-semibold">
          newztoday
          <span className="sr-only">Go to homepage</span>
        </Link>

        <nav className="hidden items-center gap-4 md:flex" aria-label="Primary">
          <Link
            href="/"
            className={cn(
              "rounded-md px-3 py-2 text-sm",
              "text-foreground hover:bg-muted"
            )}
          >
            Home
          </Link>
          {categories.map((c) => (
            <Link
              key={c}
              href={`/category/${slugifyCategory(c)}`}
              className={cn(
                "rounded-md px-3 py-2 text-sm",
                "text-foreground hover:bg-muted"
              )}
            >
              {c}
            </Link>
          ))}
        </nav>

        {/* Simple mobile overflow menu (horizontal scroll) */}
        <nav
          className="md:hidden"
          role="navigation"
          aria-label="Mobile Categories"
        >
          <div className="flex max-w-[70vw] items-center gap-2 overflow-x-auto">
            <Link
              href="/"
              className="shrink-0 rounded-md px-3 py-2 text-sm hover:bg-muted"
            >
              Home
            </Link>
            {categories.map((c) => (
              <Link
                key={c}
                href={`/category/${slugifyCategory(c)}`}
                className="shrink-0 rounded-md px-3 py-2 text-sm hover:bg-muted"
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
