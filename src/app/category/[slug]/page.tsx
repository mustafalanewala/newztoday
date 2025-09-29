"use client";

import { use } from "react";
import useSWR from "swr";
import { CategoryNews } from "@/components/category-news";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { fetcher } from "@/lib/fetcher";
import type { NewsItem } from "@/lib/types";

export default function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  const { data, error, isLoading } = useSWR<NewsItem[]>(
    "/data/news.json",
    fetcher
  );

  if (isLoading) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-8 flex items-center justify-center min-h-[400px]">
        <LoadingSpinner className="h-12 w-12" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-8 flex items-center justify-center min-h-[400px]">
        <p className="text-destructive text-lg">
          Failed to load category. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <CategoryNews categorySlug={slug} newsData={data} />
    </div>
  );
}
