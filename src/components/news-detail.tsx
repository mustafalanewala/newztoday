"use client";

import useSWR from "swr";
import Image from "next/image";
import { fetcher } from "@/lib/fetcher";
import type { NewsItem } from "@/lib/types";
import { formatDate, getBySlug } from "@/lib/news-utils";

export function NewsDetail({ slug }: { slug: string }) {
  const { data, error, isLoading } = useSWR<NewsItem[]>(
    "/data/news.json",
    fetcher
  );

  if (isLoading) return <p className="text-muted-foreground">Loading…</p>;
  if (error) return <p className="text-destructive">Failed to load.</p>;

  const item = getBySlug(data || [], slug);
  if (!item) return <p className="text-muted-foreground">Article not found.</p>;

  return (
    <article className="space-y-4">
      <header className="space-y-2">
        <h1 className="text-pretty text-3xl font-semibold">
          {item.News_Title}
        </h1>
        <div className="text-sm text-muted-foreground">
          <span>{item.News_Source}</span>
          <span className="mx-2">•</span>
          <time dateTime={item.Insert_Date}>
            {formatDate(item.Insert_Date)}
          </time>
        </div>
      </header>

      {item.Image && (
        <div className="relative aspect-video w-full overflow-hidden rounded-md bg-muted">
          <Image
            src={item.Image || "/placeholder.svg"}
            alt={item.News_Title}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      )}

      <div className="prose prose-neutral max-w-none dark:prose-invert">
        <p>{item.News_Content}</p>
      </div>
    </article>
  );
}
