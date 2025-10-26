"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { Pagination } from "@/components/ui/pagination";

export function PaginationClient({
  currentPage,
  totalPages,
  basePath,
}: {
  currentPage: number;
  totalPages: number;
  basePath?: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const onPageChange = useCallback(
    (page: number) => {
      if (page < 1 || page > totalPages) return;

      const params = new URLSearchParams(searchParams?.toString() || "");

      if (page <= 1) {
        params.delete("page");
      } else {
        params.set("page", String(page));
      }

      const targetPath = basePath || pathname || "/";
      const query = params.toString();
      const url = query ? `${targetPath}?${query}` : targetPath;

      router.push(url);
    },
    [router, searchParams, totalPages, basePath, pathname]
  );

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={onPageChange}
    />
  );
}
