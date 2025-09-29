import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { NewsItem } from "@/lib/types";
import { formatDate } from "@/lib/news-utils";

export function NewsCard({
  item,
  className = "",
}: {
  item: NewsItem;
  className?: string;
}) {
  return (
    <Card
      className={cn(
        "group h-full overflow-hidden border-border bg-white/80 backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-theme/10 hover:-translate-y-1 dark:bg-gray-800/80 dark:hover:shadow-theme/20",
        className
      )}
    >
      <div className="relative aspect-video w-full bg-muted overflow-hidden">
        {!!item.Image && (
          <Image
            src={item.Image || "/placeholder.svg"}
            alt={item.News_Title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      </div>
      <CardHeader className="space-y-2">
        <CardTitle className="text-pretty text-xl leading-tight">
          <Link
            href={`/news/${item.Slug}`}
            className="hover:text-primary transition-colors duration-200 group-hover:text-theme dark:group-hover:text-theme"
          >
            {item.News_Title}
          </Link>
        </CardTitle>
        <div className="flex items-center text-sm text-muted-foreground">
          <span className="font-medium text-theme dark:text-theme">
            {item.News_Source}
          </span>
          <span className="mx-2 text-gray-400">•</span>
          <time dateTime={item.Insert_Date} className="text-gray-500">
            {formatDate(item.Insert_Date)}
          </time>
          <span className="mx-2 text-gray-400">|</span>
          <span className="rounded-full bg-theme px-2 py-0.5 text-xs font-medium text-white">
            {item.Categrory_Name}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-3 text-base text-muted-foreground leading-relaxed">
          {item.News_Content}
        </p>
      </CardContent>
    </Card>
  );
}
