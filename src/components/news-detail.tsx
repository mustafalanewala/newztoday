"use client";

import useSWR from "swr";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { fetcher } from "@/lib/fetcher";
import type { NewsItem } from "@/lib/types";
import { formatDate, getBySlug } from "@/lib/news-utils";

export function NewsDetail({ slug }: { slug: string }) {
  const router = useRouter();
  const { data } = useSWR<NewsItem[]>("/data/news.json", fetcher);

  const item = getBySlug(data || [], slug);
  if (!item) return <p className="text-muted-foreground">Article not found.</p>;

  return (
    <article className="space-y-6">
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => router.back()}
          className="flex items-center gap-2 hover:bg-theme-muted hover:text-theme hover:border-theme"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
      </div>

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
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          />
        </div>
      )}

      <div className="prose prose-neutral max-w-none dark:prose-invert">
        <p>{item.News_Content}</p>
      </div>
    </article>
  );
}
