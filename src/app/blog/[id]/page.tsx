import Image from "next/image";
import { notFound } from "next/navigation";

const API_URL =
  "https://newsapi.timesmed.com/WebAPI/getnewslist?siteId=1&language=English";

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  try {
    const res = await fetch(API_URL, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch");
    const json = await res.json();
    const blogs = json?.data?.blogs || [];
    const blog = blogs.find((b: any) => b.blog_id.toString() === id);

    if (!blog) {
      notFound();
    }

    return (
      <main className="mx-auto max-w-4xl px-4 py-8">
        <article className="space-y-6">
          <header className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">
              {blog.blog_Title}
            </h1>
            <div className="flex items-center justify-center text-sm text-muted-foreground">
              <span className="rounded-full bg-theme px-2 py-0.5 text-xs font-medium text-white">
                {blog.category || "Blog"}
              </span>
              {blog.language && (
                <>
                  <span className="mx-2 text-gray-400">•</span>
                  <span className="text-xs">{blog.language}</span>
                </>
              )}
            </div>
          </header>

          {blog.image && (
            <div className="relative aspect-video w-full bg-muted overflow-hidden rounded-lg">
              <Image
                src={blog.image}
                alt={blog.blog_Title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          )}

          <div className="prose prose-lg max-w-none">
            {blog.blog_Content && (
              <div
                className="text-base leading-relaxed"
                dangerouslySetInnerHTML={{ __html: blog.blog_Content }}
              />
            )}
          </div>

          {blog.tags && (
            <div className="flex flex-wrap gap-2 pt-4 border-t">
              {blog.tags.split(",").map((tag: string, index: number) => (
                <span
                  key={index}
                  className="inline-block bg-muted px-3 py-1 text-sm rounded-full text-muted-foreground"
                >
                  {tag.trim()}
                </span>
              ))}
            </div>
          )}
        </article>
      </main>
    );
  } catch (err) {
    notFound();
  }
}