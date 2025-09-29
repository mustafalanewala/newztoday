"use client";

import type { VideoItem } from "@/lib/types";
import { VideoCard } from "./video-card";

export function VideoList({
  limit = 3,
  videoData,
}: {
  limit?: number;
  videoData?: VideoItem[];
}) {
  if (!videoData) {
    return <p className="text-muted-foreground">Loading video stories...</p>;
  }

  const videos = videoData;
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
