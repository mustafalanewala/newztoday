import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { PaginationClient } from "@/components/ui/pagination-client";

const API_URL =
  "https://newsapi.timesmed.com/WebAPI/getnewslist?siteId=1&language=English";

export default async function BlogPage({
  searchParams,
}: {
  searchParams?: { page?: string };
}) {
  try {
    const res = await fetch(API_URL, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch");
    const json = await res.json();
    const blogs = json?.data?.blogs || [];

    const page = Math.max(1, Number(searchParams?.page || 1));
    const pageSize = 9;
    const total = blogs.length;
    const totalPages = Math.max(1, Math.ceil(total / pageSize));
    const start = (page - 1) * pageSize;
    const paginated = blogs.slice(start, start + pageSize);

    return (
      <main className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-2">Blog</h1>
          <p className="text-lg text-muted-foreground">
            Discover insights, stories, and perspectives from our latest blog
            posts
          </p>
        </div>

        {paginated.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No blog posts found.
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginated.map((b: any) => (
                <Card
                  key={b.blog_id}
                  className={cn(
                    "group h-full overflow-hidden border-border bg-white/80 backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-theme/10 hover:-translate-y-1 dark:bg-gray-800/80 dark:hover:shadow-theme/20"
                  )}
                >
                  {b.image && (
                    <div className="relative aspect-video w-full bg-muted overflow-hidden">
                      <Image
                        src={b.image}
                        alt={b.blog_Title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                    </div>
                  )}

                  <CardHeader className="space-y-3">
                    <CardTitle className="text-pretty text-xl leading-tight line-clamp-2">
                      {b.blog_Title}
                    </CardTitle>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span className="rounded-full bg-theme px-2 py-0.5 text-xs font-medium text-white">
                        {b.category || "Blog"}
                      </span>
                      {b.language && (
                        <>
                          <span className="mx-2 text-gray-400">•</span>
                          <span className="text-xs">{b.language}</span>
                        </>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent>
                    {b.blog_Summary && (
                      <div
                        className="line-clamp-3 text-base text-muted-foreground leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: b.blog_Summary }}
                      />
                    )}
                    {b.tags && (
                      <div className="mt-4 flex flex-wrap gap-1">
                        {b.tags.split(",").map((tag: string, index: number) => (
                          <span
                            key={index}
                            className="inline-block bg-muted px-2 py-1 text-xs rounded-full text-muted-foreground"
                          >
                            {tag.trim()}
                          </span>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-center">
              <PaginationClient
                currentPage={page}
                totalPages={totalPages}
                basePath="/blog"
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
          <h1 className="text-4xl font-bold text-foreground mb-2">Blog</h1>
          <p className="text-lg text-muted-foreground">
            Discover insights, stories, and perspectives from our latest blog
            posts
          </p>
        </div>
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            Failed to load blog posts.
          </p>
        </div>
      </main>
    );
  }
}
