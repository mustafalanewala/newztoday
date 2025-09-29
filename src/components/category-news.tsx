"use client";

import type { NewsItem } from "@/lib/types";
import { filterByCategory, getCategoryFromSlug } from "@/lib/news-utils";
import { NewsCard } from "./news-card";

export function CategoryNews({
  categorySlug,
  newsData,
}: {
  categorySlug: string;
  newsData?: NewsItem[];
}) {
  if (!newsData) {
    return <p className="text-muted-foreground">Loading category...</p>;
  }

  const items = filterByCategory(newsData, categorySlug);

  return (
    <section className="space-y-6">
      <header>
        <h2 className="text-pretty text-2xl font-semibold">
          {getCategoryFromSlug(newsData, categorySlug)}
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
