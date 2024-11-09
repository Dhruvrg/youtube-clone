"use client";

import StudioVideoCard from "@/components/card/StudioVideoCard";
import { channelVideos } from "@/lib/actions/video.actions";
import { Video } from "@prisma/client";
import { memo, use, useEffect, useState } from "react";

interface IParams {
  name?: string;
}

const page = ({ params: paramsPromise }: { params: Promise<IParams> }) => {
  const params = use(paramsPromise);
  const name = params?.name?.replace("%20", " ");

  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    const getData = async () => {
      if (name) {
        const data = await channelVideos(name);
        setVideos(data);
      }
    };
    getData();
  }, []);

  return (
    <div className="pt-5 px-12">
      <p className="text-white font-bold text-2xl pb-2">Channel content</p>
      <div className="flex flex-col gap-2">
        {videos.map((video) => (
          <StudioVideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default page;
