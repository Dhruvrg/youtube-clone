"use client";

import { SafeUser } from "@/types";

import Avatar from "../Avatar";
import GoogleAuthButton from "./GoogleAuthButton";
import { AiOutlineBell } from "react-icons/ai";
import { BsCameraReels } from "react-icons/bs";
import { HiDotsVertical } from "react-icons/hi";
import useUploadModal from "@/hooks/useUploadModal";
import { useState } from "react";
import Menu from "./Menu";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const uploadModal = useUploadModal();
  const [menu, setMenu] = useState(false);

  return (
    <>
      {currentUser ? (
        <div className="flex items-center gap-6">
          {currentUser?.plan !== "Basic" && (
            <BsCameraReels
              onClick={() => uploadModal.onOpen()}
              className="text-xl cursor-pointer"
            />
          )}
          {currentUser?.plan === "Premium" && (
            <AiOutlineBell onClick={() => {}} className="text-2xl" />
          )}
          <button onClick={() => setMenu(!menu)}>
            {menu && <Menu currentUser={currentUser} />}
            <Avatar src={currentUser?.image} />
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-6">
          <HiDotsVertical className="text-xl" />
          <GoogleAuthButton />
        </div>
      )}
    </>
  );
};

export default UserMenu;
