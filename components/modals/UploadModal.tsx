"use client";

import useUploadModal from "@/hooks/useUploadModal";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import VideoUpload from "../VideoUpload";
import UploadDetails from "../UploadDetails";

const UploadModal = () => {
  const { isOpen, onClose } = useUploadModal();
  const [url, setUrl] = useState("");

  if (!isOpen) {
    return null;
  }

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70">
      <div className="relative w-2/4 my-6 mx-auto h-full lg:h-auto md:h-auto">
        <div
          className={`translate duration-300 h-full
      ${isOpen ? "translate-y-0" : "translate-y-full"}
      ${isOpen ? "opacity-100" : "opacity-0"}
    `}
        >
          <div className="translate rounded-xl h-full lg:h-auto md:h-auto border-0 shadow-lg relative flex flex-col w-full bg-[#3d3d3d] outline-none focus:outline-none">
            {url.length === 0 && (
              <div className="pb-6">
                <div className="flex items-center p-4 border-b-[1px] border-gray-500">
                  <div className="font-bold text-xl">Upload videos</div>
                  <button
                    className="p-1 border-0 hover:opacity-70 transition absolute right-6"
                    onClick={() => onClose()}
                  >
                    <IoMdClose size={24} />
                  </button>
                </div>
                <div className="flex flex-col py-20 gap-10 items-center">
                  <VideoUpload onChange={(value) => setUrl(value)} />
                  <div className="text-center">
                    <p className="text-white">
                      Drag and drop video files to upload
                    </p>
                    <p className="text-sm font-extralight text-gray-300">
                      Your videos will be private until you publish them.
                    </p>
                  </div>
                </div>
                <p className="text-sm font-extralight text-gray-300 text-center">
                  By submitting your videos to YouTube, you acknowledge that you
                  agree to YouTube's{" "}
                  <span className="text-blue-500 font-light">
                    Terms of Service
                  </span>
                </p>
                <p className="text-sm font-extralight text-gray-300 text-center">
                  Please be sure not to violate others' copyright or privacy
                  rights.{" "}
                  <span className="text-blue-500 font-light">Learn more</span>
                </p>
              </div>
            )}
            {url.length !== 0 && <UploadDetails url={url} onClose={onClose} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;
