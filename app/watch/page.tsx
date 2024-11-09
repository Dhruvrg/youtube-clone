"use client";

import WatchVideoCard from "@/components/card/WatchVideoCard";
import CommentSection from "@/components/CommentSection";
import { fetchUser } from "@/lib/actions/user.actions";
import { fetchVideos, getVideoByID } from "@/lib/actions/video.actions";
import { Video } from "@prisma/client";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const page = () => {
  const searchParams = useSearchParams();
  const v = searchParams.get("v");
  const [video, setVideo] = useState<any>({});
  const [user, setUser] = useState<any>({});
  const [videos, setVideos] = useState<any>([]);
  const router = useRouter();

  const date = new Date(video.date);
  const diffTime = Math.abs(new Date().getTime() - date.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  const getData = async () => {
    const videoData: any = await getVideoByID(v);
    setVideo(videoData);

    const userData: any = await fetchUser(videoData.name);
    setUser(userData);

    const videosData: any = await fetchVideos();
    setVideos(videosData);
  };

  useEffect(() => {
    if (v) {
      getData();
    }
  }, [v]);

  return (
    <div className="flex h-[calc(100vh-4rem)] mt-5 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-[#121212]">
      <div className="flex flex-col gap-3 mr-4 ml-2">
        {video?.url && (
          <video
            src={video.url}
            className="w-[55vw] h-[70vh] object-cover rounded-2xl"
            controls
            autoPlay
          />
        )}
        <p className="text-white font-bold text-xl">{video.title}</p>
        <div
          className="flex items-center gap-3"
          onClick={() => router.push(`/${video.name}`)}
        >
          <Image
            className="rounded-full"
            height="45"
            width="45"
            alt="Avatar"
            src={video.image || "/placeholder.jpg"}
          />
          <div className="flex flex-col items-start justify-center">
            <p className="text-white font-semibold">{video.name}</p>
            <p className="text-gray-400">{user.subscribers} subscribers</p>
          </div>
        </div>
        <div className="bg-[#3d3d3d] text-white font-semibold py-1 rounded-xl px-2">
          <p>
            {video.Views} views ∙ {diffDays} days ago
          </p>
          <p className="text-sm">{video.description}</p>
        </div>
        {/* <CommentSection videoId={video.id} /> */}
      </div>
      <div className="flex flex-col gap-4">
        {videos?.map((video: Video) => (
          <WatchVideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default page;
