import { NewsList } from "@/components/news-list";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <section className="mb-8">
        <h1 className="text-pretty text-3xl font-semibold tracking-tight">
          newztoday
        </h1>
        <p className="mt-2 text-muted-foreground">
          Latest stories from trusted sources. All data is loaded from JSON.
        </p>
      </section>
      <NewsList />
    </div>
  );
}
