"use client";

import { Video } from "@prisma/client";
import React, { useRef, useState } from "react";
import Avatar from "../Avatar";
import { HiDotsVertical } from "react-icons/hi";
import { useRouter } from "next/navigation";

interface WatchVideoCardProps {
  video: Video;
}

const WatchVideoCard: React.FC<WatchVideoCardProps> = ({ video }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const router = useRouter();

  const date = new Date(video.date);
  const diffTime = Math.abs(new Date().getTime() - date.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  const handleMouseEnter = () => {
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className="overflow-hidden cursor-pointer relative flex"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        onClick={() => router.push(`/watch?v=${video.id}`)}
        ref={videoRef}
        src={video.url || ""}
        muted
        className="w-[12.5vw] h-[15vh] object-cover rounded-xl"
      />
      <div className="flex flex-col items-start w-[15vw] pl-2 pt-1">
        <p className="text-white font-semibold w-[12.5vw] overflow-hidden whitespace-nowrap text-ellipsis">
          {video.title}
        </p>
        <p
          onClick={() => router.push(`/${video.name}`)}
          className="text-gray-400 text-sm font-semibold"
        >
          {video.name}
        </p>
        <p className="text-gray-400 text-sm font-semibold">
          {video.Views} views ∙ {diffDays} days ago
        </p>
      </div>
      <HiDotsVertical onClick={() => {}} className="text-lg ml-auto mt-1" />
    </div>
  );
};

export default WatchVideoCard;
