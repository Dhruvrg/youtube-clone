"use client";

import { Video } from "@prisma/client";
import React, { useRef } from "react";
import Avatar from "../Avatar";
import { HiDotsVertical } from "react-icons/hi";
import { useRouter } from "next/navigation";

interface Props {
  video: Video;
}

const ResultVideoCard: React.FC<Props> = ({ video }) => {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);

  const date = new Date(video.date);
  const diffTime = Math.abs(new Date().getTime() - date.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className="overflow-hidden cursor-pointer relative flex mt-4"
      onMouseEnter={() => videoRef.current?.play()}
      onMouseLeave={handleMouseLeave}
    >
      <video
        onClick={() => router.push(`/watch?v=${video.id}`)}
        ref={videoRef}
        src={video.url || ""}
        muted
        className="w-[32vw] h-[38vh] object-cover rounded-xl hover:rounded-none"
      />
      <div className="w-[45vw] pl-4 py-1">
        <p className="text-white text-xl font-semibold">{video.title}</p>
        <HiDotsVertical
          onClick={() => {}}
          className="text-lg absolute right-0 top-1"
        />
        <p>
          <span className="text-gray-400 text-sm font-semibold">
            {video.Views} views ∙ {diffDays} days ago
          </span>
        </p>
        <div
          className="flex items-center gap-2 my-4"
          onClick={() => router.push(`/${video.name}`)}
        >
          <Avatar src={video.image} />
          <p className="text-gray-400 text-sm font-semibold">{video.name}</p>
        </div>
        <p className="text-gray-400 text-sm font-semibold">
          {video.description}
        </p>
      </div>
    </div>
  );
};

export default ResultVideoCard;
