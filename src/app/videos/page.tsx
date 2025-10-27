import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { PaginationClient } from "@/components/ui/pagination-client";

const API_URL =
  "https://newsapi.timesmed.com/WebAPI/getnewslist?siteId=1&language=English";

export default async function VideosPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  try {
    const res = await fetch(API_URL, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch");
    const json = await res.json();
    const videos = json?.data?.videos || [];

    const resolvedSearchParams = await searchParams;
    const page = Math.max(1, Number(resolvedSearchParams?.page || 1));
    const pageSize = 9;
    const total = videos.length;
    const totalPages = Math.max(1, Math.ceil(total / pageSize));
    const start = (page - 1) * pageSize;
    const paginated = videos.slice(start, start + pageSize);

    return (
      <main className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-2">Videos</h1>
          <p className="text-lg text-muted-foreground">
            Watch our latest video content and featured stories
          </p>
        </div>

        {paginated.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No videos found.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginated.map((v: any) => (
                <Card
                  key={v.videoDetail_id}
                  className={cn(
                    "group h-full overflow-hidden border-border bg-white/80 backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-theme/10 hover:-translate-y-1 dark:bg-gray-800/80 dark:hover:shadow-theme/20"
                  )}
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="text-pretty text-xl leading-tight line-clamp-2">
                      {v.videoTitle}
                    </CardTitle>
                    {v.insert_Date && (
                      <div className="flex items-center text-sm text-muted-foreground">
                        <time
                          dateTime={v.insert_Date}
                          className="text-gray-500"
                        >
                          {new Date(v.insert_Date).toLocaleDateString(
                            undefined,
                            {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            }
                          )}
                        </time>
                      </div>
                    )}
                  </CardHeader>

                  <CardContent>
                    <div className="relative aspect-video w-full bg-muted overflow-hidden rounded-lg mb-4">
                      <iframe
                        src={v.fileName}
                        title={v.videoTitle}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full rounded-lg"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-center">
              <PaginationClient
                currentPage={page}
                totalPages={totalPages}
                basePath="/videos"
              />
            </div>
          </>
        )}
      </main>
    );
  } catch (err) {
    return (
      <main className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-2">Videos</h1>
          <p className="text-lg text-muted-foreground">
            Watch our latest video content and featured stories
          </p>
        </div>
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            Failed to load videos.
          </p>
        </div>
      </main>
    );
  }
}
