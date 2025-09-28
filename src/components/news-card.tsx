import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { NewsItem } from "@/lib/types";
import { formatDate } from "@/lib/news-utils";

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <Card className="h-full overflow-hidden border-border">
      <div className="relative aspect-video w-full bg-muted">
        {!!item.Image && (
          <Image
            src={item.Image || "/placeholder.svg"}
            alt={item.News_Title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        )}
      </div>
      <CardHeader className="space-y-1">
        <CardTitle className="text-pretty text-base">
          <Link href={`/news/${item.Slug}`} className="hover:underline">
            {item.News_Title}
          </Link>
        </CardTitle>
        <div className="text-xs text-muted-foreground">
          <span>{item.News_Source}</span>
          <span className="mx-2">•</span>
          <time dateTime={item.Insert_Date}>
            {formatDate(item.Insert_Date)}
          </time>
        </div>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-3 text-sm text-muted-foreground">
          {item.News_Content}
        </p>
      </CardContent>
    </Card>
  );
}
