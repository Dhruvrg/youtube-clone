"use client";

import { CldUploadWidget } from "next-cloudinary";
import { useCallback } from "react";
import { GrUploadOption } from "react-icons/gr";

declare global {
  var cloudinary: any;
}

const uploadPreset = "qy95kv3s";

interface VideoUploadProps {
  onChange: (value: string) => void;
}

const VideoUpload: React.FC<VideoUploadProps> = ({ onChange }) => {
  const handleUpload = useCallback(
    (result: any) => {
      onChange(result.info.secure_url);
    },
    [onChange]
  );

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset={uploadPreset}
      options={{
        maxFiles: 1,
        resourceType: "video",
      }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open?.()}
            className="bg-[#1e1c1c97] p-10 rounded-full"
          >
            <GrUploadOption className="text-gray-400" size={60} />
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

export default VideoUpload;
