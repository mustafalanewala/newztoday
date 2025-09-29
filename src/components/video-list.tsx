"use client";

import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import type { VideoItem } from "@/lib/types";
import { VideoCard } from "./video-card";
import { LoadingSpinner } from "./ui/loading-spinner";

export function VideoList({ limit = 3 }: { limit?: number }) {
  const { data, error, isLoading } = useSWR<VideoItem[]>(
    "/data/videos.json",
    fetcher
  );

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (error) {
    return <p className="text-destructive">Failed to load video stories.</p>;
  }

  const videos = data || [];
  const displayVideos = limit ? videos.slice(0, limit) : videos;

  if (!displayVideos.length) {
    return <p className="text-muted-foreground">No video stories available.</p>;
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {displayVideos.map((video) => (
          <VideoCard key={video.VideoDetail_id} item={video} />
        ))}
      </div>
    </div>
  );
}
