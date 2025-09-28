"use client";

import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import type { NewsItem } from "@/lib/types";
import { filterByCategory, getCategoryFromSlug } from "@/lib/news-utils";
import { NewsCard } from "./news-card";

export function CategoryNews({ categorySlug }: { categorySlug: string }) {
  const { data, error, isLoading } = useSWR<NewsItem[]>(
    "/data/news.json",
    fetcher
  );

  if (isLoading) return <p className="text-muted-foreground">Loading…</p>;
  if (error) return <p className="text-destructive">Failed to load.</p>;

  const items = filterByCategory(data || [], categorySlug);

  return (
    <section className="space-y-6">
      <header>
        <h2 className="text-pretty text-2xl font-semibold">
          {getCategoryFromSlug(data || [], categorySlug)}
        </h2>
      </header>

      {!items.length ? (
        <p className="text-muted-foreground">No articles in this category.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {items.map((n) => (
            <NewsCard item={n} key={n.News_Id} />
          ))}
        </div>
      )}
    </section>
  );
}
