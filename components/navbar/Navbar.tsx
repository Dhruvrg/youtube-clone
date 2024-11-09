"use client";

import { SafeUser } from "@/types";

import Logo from "./Logo";
import UserMenu from "./UserMenu";
import { AiOutlineMenu } from "react-icons/ai";
import { FaMicrophone } from "react-icons/fa";
import SearchBar from "./SearchBar";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  return (
    <div className="bg-[#121212] py-3 md:h-[8vh]">
      <div className="max-w-[2520px] flex justify-between xl:px-10 md:px-10 sm:px-2">
        <div className="flex justify-between items-center gap-6">
          <AiOutlineMenu onClick={() => {}} className="text-xl" />
          <Logo />
        </div>
        <div className="flex justify-between items-center gap-4">
          <SearchBar />
          <div className="bg-[#212121] rounded-full flex justify-center items-center w-9 h-9">
            <FaMicrophone onClick={() => {}} className="text-lg" />
          </div>
        </div>
        <UserMenu currentUser={currentUser} />
      </div>
    </div>
  );
};

export default Navbar;
