import { NewsList } from "@/components/news-list";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <section className="mb-12 text-center">
          <div className="mb-6">
            <h1 className="text-5xl font-bold tracking-tight">
              <span className="text-theme">NewzToday</span>
            </h1>
            <div className="mx-auto mt-4 h-1 w-24 bg-theme rounded-full"></div>
          </div>
        </section>
        <NewsList />
      </div>
    </div>
  );
}
