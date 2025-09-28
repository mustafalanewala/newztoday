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
        "group h-full overflow-hidden border-border bg-white/80 backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-orange-400/10 hover:-translate-y-1 dark:bg-gray-800/80 dark:hover:shadow-orange-400/20",
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
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        <div className="absolute top-3 left-3 rounded-full bg-orange-400 px-3 py-1 text-xs font-medium text-white shadow-lg border-2 border-white/20">
          {item.Categrory_Name}
        </div>
      </div>
      <CardHeader className="space-y-2">
        <CardTitle className="text-pretty text-base leading-tight">
          <Link
            href={`/news/${item.Slug}`}
            className="hover:text-primary transition-colors duration-200 group-hover:text-orange-400 dark:group-hover:text-orange-400"
          >
            {item.News_Title}
          </Link>
        </CardTitle>
        <div className="flex items-center text-xs text-muted-foreground">
          <span className="font-medium text-orange-400 dark:text-orange-400">
            {item.News_Source}
          </span>
          <span className="mx-2 text-gray-400">•</span>
          <time dateTime={item.Insert_Date} className="text-gray-500">
            {formatDate(item.Insert_Date)}
          </time>
        </div>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-3 text-sm text-muted-foreground leading-relaxed">
          {item.News_Content}
        </p>
      </CardContent>
    </Card>
  );
}
