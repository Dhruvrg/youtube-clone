"use client";

import {
  sidebarExploreLinks,
  sidebarMainLinks,
  sidebarYouLinks,
} from "@/constants";
import LinkElement from "./LinkElement";
import { IoIosArrowForward } from "react-icons/io";

const Sidebar = () => {
  return (
    <section className="h-[92vh] mx-3">
      <div className="mt-3 pb-4 border-b border-gray-700">
        {sidebarMainLinks.map((link, idx) => (
          <LinkElement
            key={idx}
            route={link.route}
            label={link.label}
            Icon={link.Icon}
          />
        ))}
      </div>
      <div className="mt-3 pb-4 border-b border-gray-700">
        <div className="flex items-center gap-2 font-semibold ml-5 mb-1">
          <p>You</p>
          <IoIosArrowForward onClick={() => {}} className="text-xl" />
        </div>
        {sidebarYouLinks.map((link, idx) => (
          <LinkElement
            key={idx}
            route={link.route}
            label={link.label}
            Icon={link.Icon}
          />
        ))}
      </div>
      <div className="mt-3 pb-4 border-b border-gray-700">
        <div className="flex items-center gap-2 font-semibold ml-5 mb-1">
          <p>Explore</p>
          <IoIosArrowForward onClick={() => {}} className="text-xl" />
        </div>
        {sidebarExploreLinks.map((link, idx) => (
          <LinkElement
            key={idx}
            route={link.route}
            label={link.label}
            Icon={link.Icon}
          />
        ))}
      </div>
    </section>
  );
};

export default Sidebar;
