import { Video } from "@prisma/client";
import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { deleteVideo } from "@/lib/actions/video.actions";
import useEditVideoModal from "@/hooks/useEditVideoModal";

interface Props {
  video: Video;
}

const StudioVideoCard: React.FC<Props> = ({ video }) => {
  const router = useRouter();
  const editVideoModal = useEditVideoModal();

  const { id, title, description, date, Views, url } = video;

  const handleDelete = async () => {
    try {
      await deleteVideo(video.id);
      toast.success("Video Deleted Successfully!");
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  const handleEdit = () => {
    if (title && description && url) {
      editVideoModal.setData({ id, title, description, url });
      editVideoModal.onOpen();
    }
  };

  return (
    <div className="flex bg-[#3d3d3d] justify-between rounded-xl w-[75vw] p-1 pr-10">
      <video
        src={url || ""}
        muted
        className="w-[12.5vw] h-[15vh] object-cover rounded-xl hover:rounded-none"
      />
      <div className="my-auto">
        <p className="text-white w-[20vw] overflow-hidden whitespace-nowrap text-ellipsis">
          {title}
        </p>
        <p className="text-gray-400 text-sm w-[20vw] overflow-hidden">
          {description}
        </p>
      </div>
      <div className="my-auto">
        <p className="text-white">
          {date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </p>
        <p className="text-gray-400 text-sm">Published</p>
      </div>
      <div className="my-auto flex flex-col items-center">
        <p className="text-white">{Views}</p>
        <p className="text-gray-400 text-sm">Views</p>
      </div>
      <MdEdit
        className="my-auto cursor-pointer"
        size={25}
        onClick={() => handleEdit()}
      />
      <MdDelete
        className="my-auto cursor-pointer"
        size={25}
        onClick={() => handleDelete()}
      />
    </div>
  );
};

export default StudioVideoCard;
