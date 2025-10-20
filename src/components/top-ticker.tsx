"use client";

import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import type { NewsItem } from "@/lib/types";
import Link from "next/link";

export function TopTicker() {
  const { data } = useSWR<NewsItem[]>("/api/news", fetcher);
  const items = (data || []).slice(0, 10);

  return (
    <div className="w-full border-b border-border bg-secondary">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-2">
        <span className="text-xs font-medium text-muted-foreground">
          Breaking
        </span>
        <div className="relative w-full overflow-hidden">
          <ul
            className="flex animate-[ticker_25s_linear_infinite] gap-8 whitespace-nowrap text-sm"
            aria-label="Latest headlines"
          >
            {items.map((n) => (
              <li key={n.News_Id} className="shrink-0">
                <Link
                  href={`/news/${n.Slug}`}
                  className="hover:underline"
                  title={n.News_Title}
                >
                  {n.News_Title}
                </Link>
              </li>
            ))}
            {/* duplicate for seamless loop */}
            {items.map((n) => (
              <li key={`${n.News_Id}-dup`} className="shrink-0">
                <Link
                  href={`/news/${n.Slug}`}
                  className="hover:underline"
                  title={n.News_Title}
                >
                  {n.News_Title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
