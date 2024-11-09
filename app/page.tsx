import VideoCard from "@/components/card/VideoCard";
import { fetchVideos } from "@/lib/actions/video.actions";
import { Video } from "@prisma/client";

const page = async () => {
  const videos: Video[] = await fetchVideos();
  return (
    <div className="flex flex-wrap justify-around px-5 mt-5 gap-y-4 h-[calc(100vh-4rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-[#121212]">
      {videos?.map((video: Video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};

export default page;
