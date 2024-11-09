"use client";

import ResultVideoCard from "@/components/card/ResultVideoCard";
import { searchVideos } from "@/lib/actions/video.actions";
import { Video } from "@prisma/client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const page = () => {
  const searchParams = useSearchParams();
  const search_query = searchParams.get("search_query");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      try {
        const data: any = await searchVideos(search_query);
        setVideos(data);
      } catch (error) {
        console.log(error);
      }
    };
    getVideos();
  }, [search_query]);

  return (
    <div className="ml-14 pr-14 h-[calc(100vh-4rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-[#121212]">
      {videos?.map((video: Video) => (
        <ResultVideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};

export default page;
