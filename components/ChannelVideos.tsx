"use client";

import { channelVideos } from "@/lib/actions/video.actions";
import React, { memo, useEffect, useState } from "react";
import VideoCard from "./card/VideoCard";
import { Video } from "@prisma/client";

interface Props {
  name?: string;
}

const ChannelVideos: React.FC<Props> = memo(({ name }) => {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    const getData = async () => {
      if (name) {
        const data = await channelVideos(name);
        setVideos(data);
      }
    };
    getData();
  }, [name && videos.length !== 0]);

  return (
    <div className="flex flex-wrap justify-around px-5 mt-5 gap-y-4 h-[calc(100vh-4rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-[#121212]">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
});

export default ChannelVideos;
