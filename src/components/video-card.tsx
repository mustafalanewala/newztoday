import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { VideoItem } from "@/lib/types";
import { formatDate } from "@/lib/news-utils";

export function VideoCard({
  item,
  className = "",
}: {
  item: VideoItem;
  className?: string;
}) {
  return (
    <Card
      className={cn(
        "group h-full overflow-hidden border-border bg-white/80 backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-theme/10 hover:-translate-y-1 dark:bg-gray-800/80 dark:hover:shadow-theme/20",
        className
      )}
    >
      <div className="relative aspect-video w-full bg-muted overflow-hidden rounded-t-lg">
        <iframe
          src={item.FileName}
          title={item.VideoTitle}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <CardHeader className="space-y-2">
        <CardTitle className="text-pretty text-base leading-tight">
          <a
            href={item.FileName}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors duration-200 group-hover:text-theme dark:group-hover:text-theme"
          >
            {item.VideoTitle}
          </a>
        </CardTitle>
        <div className="flex items-center text-xs text-muted-foreground">
          <span className="font-medium text-theme dark:text-theme">
            Video Story
          </span>
          <span className="mx-2 text-gray-400">•</span>
          <time dateTime={item.Insert_Date} className="text-gray-500">
            {formatDate(item.Insert_Date)}
          </time>
        </div>
      </CardHeader>
    </Card>
  );
}
