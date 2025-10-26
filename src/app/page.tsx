"use client";

import useSWR from "swr";
import { NewsList } from "@/components/news-list";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { fetcher } from "@/lib/fetcher";
import type { NewsItem } from "@/lib/types";

export default function HomePage() {
  const {
    data: newsData,
    error: newsError,
    isLoading: newsLoading,
  } = useSWR<NewsItem[]>("/api/news", fetcher);

  if (newsLoading) {
    return (
      <div className="min-h-screen bg-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
        <LoadingSpinner className="h-12 w-12" />
      </div>
    );
  }

  if (newsError) {
    return (
      <div className="min-h-screen bg-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
        <p className="text-destructive text-lg">
          Failed to load content. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="mx-auto max-w-6xl px-4 py-8">
        {/* Breaking News Section */}
        <section className="mb-12">
          <NewsList limit={6} random={true} newsData={newsData} />
        </section>

        {/* Latest News Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-4xl font-bold text-foreground">Latest News</h2>
            <button className="inline-flex items-center px-6 py-3 bg-theme text-white font-medium rounded-lg hover:bg-theme/90 transition-colors duration-200 shadow-lg">
              View More News
            </button>
          </div>
          <NewsList limit={3} simpleLayout={true} newsData={newsData} />
        </section>
      </div>
    </div>
  );
}
