"use client";

import { Video } from "@prisma/client";
import React, { useRef, useState } from "react";
import Avatar from "../Avatar";
import { HiDotsVertical } from "react-icons/hi";
import { useRouter } from "next/navigation";

interface VideoCardProps {
  video: Video;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const router = useRouter();

  const date = new Date(video.date);
  const diffTime = Math.abs(new Date().getTime() - date.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  const handleMouseEnter = () => {
    videoRef.current?.play();
    setIsPlaying(true);
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setProgress(0); // Reset progress when mouse leaves
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentTime = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      setProgress((currentTime / duration) * 100);
    }
  };

  return (
    <div
      className="overflow-hidden cursor-pointer relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        onClick={() => router.push(`/watch?v=${video.id}`)}
        ref={videoRef}
        src={video.url || ""}
        muted
        className="w-[25vw] h-[30vh] object-cover rounded-xl hover:rounded-none"
        onTimeUpdate={handleTimeUpdate}
      />
      {isPlaying && (
        <div className="absolute left-0 w-full h-1 bg-gray-600">
          <div
            className="h-full bg-red-500 transition-all duration-100"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}
      <div className="pb-4 pt-2 flex">
        <div className="w-10" onClick={() => router.push(`/${video.name}`)}>
          <Avatar src={video.image} />
        </div>
        <div className="font-semibold pt-1">
          <p className="text-white font-bold w-[20vw] overflow-hidden whitespace-nowrap text-ellipsis">
            {video.title}
          </p>
          <p className="text-gray-400 text-sm font-semibold">{video.name}</p>
          <p>
            <span className="text-gray-400 text-sm font-semibold">
              {video.Views} views ∙ {diffDays} days ago
            </span>
          </p>
        </div>
        <HiDotsVertical onClick={() => {}} className="text-lg ml-auto" />
      </div>
    </div>
  );
};

export default VideoCard;
