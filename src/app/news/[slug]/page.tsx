import { NewsDetail } from "@/components/news-detail";

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <NewsDetail slug={slug} />
    </div>
  );
}
