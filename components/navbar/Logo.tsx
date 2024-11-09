"use client";

import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex gap-1 items-center cursor-pointer">
      <Image height="30" width="30" alt="Icon" src={"/icon.png"} />
      <p className="font-bold text-lg">YouTube</p>
      <p className="relative bottom-1.5 text-[10px] font-extralight">IN</p>
    </div>
  );
};

export default Logo;
