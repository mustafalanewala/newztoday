import { NewsList } from "@/components/news-list";
import { VideoList } from "@/components/video-list";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="mx-auto max-w-6xl px-4 py-8">
        {/* Breaking News Section */}
        <section className="mb-12">
          <NewsList limit={6} random={true} />
        </section>

        {/* Video Stories Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-4xl font-bold text-foreground">
              Video Stories
            </h2>
            <button className="inline-flex items-center px-6 py-3 bg-theme text-white font-medium rounded-lg hover:bg-theme/90 transition-colors duration-200 shadow-lg">
              View More Videos
            </button>
          </div>
          <VideoList limit={3} />
        </section>

        {/* Latest News Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-4xl font-bold text-foreground">Latest News</h2>
            <button className="inline-flex items-center px-6 py-3 bg-theme text-white font-medium rounded-lg hover:bg-theme/90 transition-colors duration-200 shadow-lg">
              View More News
            </button>
          </div>
          <NewsList limit={3} simpleLayout={true} />
        </section>
      </div>
    </div>
  );
}
