"use client";

import ResultVideoCard from "@/components/card/ResultVideoCard";
import { searchVideos } from "@/lib/actions/video.actions";
import { Video } from "@prisma/client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Suspense } from "react";

const Page = () => {
  const [searchQuery, setSearchQuery] = useState<string | null>(null);
  const [videos, setVideos] = useState<Video[]>([]);

  // Use `useEffect` to access `useSearchParams` after initial render
  useEffect(() => {
    const searchParams = useSearchParams();
    setSearchQuery(searchParams.get("search_query"));
  }, []);

  useEffect(() => {
    const getVideos = async () => {
      if (!searchQuery) return;
      try {
        const data: any = await searchVideos(searchQuery);
        setVideos(data);
      } catch (error) {
        console.error(error);
      }
    };
    getVideos();
  }, [searchQuery]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="ml-14 pr-14 h-[calc(100vh-4rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-[#121212]">
        {videos.map((video) => (
          <ResultVideoCard key={video.id} video={video} />
        ))}
      </div>
    </Suspense>
  );
};

export default Page;
