"use client";

import { useState } from "react";
import type { NewsItem } from "@/lib/types";
import { filterByCategory, getCategoryFromSlug } from "@/lib/news-utils";
import { NewsCard } from "./news-card";
import { Pagination } from "@/components/ui/pagination";

export function CategoryNews({
  categorySlug,
  newsData,
}: {
  categorySlug: string;
  newsData?: NewsItem[];
}) {
  const [page, setPage] = useState(1);
  const pageSize = 9;

  if (!newsData) {
    return <p className="text-muted-foreground">Loading category...</p>;
  }

  const items = filterByCategory(newsData, categorySlug);
  const total = items.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  // Ensure page is within bounds
  const currentPage = Math.min(Math.max(1, page), totalPages);
  const start = (currentPage - 1) * pageSize;
  const paginated = items.slice(start, start + pageSize);

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
        <>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {paginated.map((n) => (
              <NewsCard item={n} key={n.News_Id} />
            ))}
          </div>

          <div className="flex justify-center">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(p) => setPage(p)}
            />
          </div>
        </>
      )}
    </section>
  );
}
