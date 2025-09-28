"use client";

import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import type { NewsItem } from "@/lib/types";
import { NewsCard } from "./news-card";

export function NewsList() {
  const { data, error, isLoading } = useSWR<NewsItem[]>(
    "/data/news.json",
    fetcher
  );

  if (isLoading) {
    return <p className="text-muted-foreground">Loading latest news…</p>;
  }
  if (error) {
    return <p className="text-destructive">Failed to load news.</p>;
  }
  const items = (data || []).filter((n) => n.Active_Flag !== false);

  if (!items.length) {
    return <p className="text-muted-foreground">No news available.</p>;
  }

  const [lead, ...rest] = items;

  return (
    <div className="space-y-8">
      {/* Lead story */}
      <div className="grid gap-6 md:grid-cols-2">
        <NewsCard item={lead} />
        <div className="grid gap-6 sm:grid-cols-2">
          {rest.slice(0, 4).map((n) => (
            <NewsCard item={n} key={n.News_Id} />
          ))}
        </div>
      </div>

      {/* More */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {rest.slice(4).map((n) => (
          <NewsCard item={n} key={n.News_Id} />
        ))}
      </div>
    </div>
  );
}
