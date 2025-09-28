import { CategoryNews } from "@/components/category-news";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <CategoryNews categorySlug={slug} />
    </div>
  );
}
