import { SafeUser } from "@/types";
import React from "react";
import Avatar from "../Avatar";
import { TbPremiumRights } from "react-icons/tb";
import { PiSignOutBold } from "react-icons/pi";
import { useRouter } from "next/navigation";
import { SiYoutubestudio } from "react-icons/si";

interface Props {
  currentUser?: SafeUser | null;
}

const Menu: React.FC<Props> = ({ currentUser }) => {
  const router = useRouter();

  return (
    <div className="bg-[#3d3d3d] rounded-xl absolute right-20 z-10">
      <div className="flex items-center pl-4 pr-12 py-3 gap-3">
        <Avatar src={currentUser?.image} />
        <p className="text-white font-semibold">{currentUser?.name}</p>
      </div>
      <p className="border-b-2 border-gray-500"></p>
      <div
        onClick={() => router.push(`/plan`)}
        className="flex items-center cursor-pointer pl-3 gap-3 py-3"
      >
        <TbPremiumRights className="" size={30} />
        <p className="text-white font-semibold">Plans</p>
      </div>
      <div
        onClick={() => router.push(`/studio/${currentUser?.name}`)}
        className="flex items-center cursor-pointer pl-4 gap-3 pb-3"
      >
        <SiYoutubestudio size={25} />
        <p className="text-white font-semibold">Studio</p>
      </div>
      <div className="flex items-center cursor-pointer pl-4 gap-3 pb-3">
        <PiSignOutBold size={25} />
        <p className="text-white font-semibold">Sign out</p>
      </div>
    </div>
  );
};

export default Menu;
