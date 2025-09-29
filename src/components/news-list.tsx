"use client";

import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import type { NewsItem } from "@/lib/types";
import { NewsCard } from "./news-card";
import { LoadingSpinner } from "./ui/loading-spinner";

export function NewsList({
  limit,
  random = false,
  simpleLayout = false,
}: {
  limit?: number;
  random?: boolean;
  simpleLayout?: boolean;
}) {
  const { data, error, isLoading } = useSWR<NewsItem[]>(
    "/data/news.json",
    fetcher
  );

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (error) {
    return <p className="text-destructive">Failed to load news.</p>;
  }
  const items = (data || []).filter((n) => n.Active_Flag !== false);

  // Shuffle array if random is true
  const shuffledItems = random
    ? [...items].sort(() => Math.random() - 0.5)
    : items;
  const displayItems = limit ? shuffledItems.slice(0, limit) : shuffledItems;

  if (!displayItems.length) {
    return <p className="text-muted-foreground">No news available.</p>;
  }

  const [lead, ...rest] = displayItems;

  return (
    <div className="space-y-6">
      {simpleLayout ? (
        // Simple 3-card layout
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {displayItems.slice(0, 3).map((n) => (
            <NewsCard item={n} key={n.News_Id} />
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          {/* First Row - 2 Cards */}
          <div className="grid grid-cols-1 gap-4 md:gap-6">
            {displayItems.slice(0, 1).map((n) => (
              <NewsCard item={n} key={n.News_Id} />
            ))}
          </div>

          {/* Second Row - 3 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6">
            {displayItems.slice(2, 4).map((n) => (
              <NewsCard item={n} key={n.News_Id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
