import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { RiHistoryLine } from "react-icons/ri";
import { CgPlayListSearch } from "react-icons/cg";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { FaFire } from "react-icons/fa6";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { IoMdMusicalNotes } from "react-icons/io";
import { PiFilmSlateFill } from "react-icons/pi";
import { TbLivePhoto } from "react-icons/tb";

export const sidebarMainLinks = [
  {
    route: "/",
    label: "Home",
    Icon: IoMdHome,
  },
  {
    route: "/shorts",
    label: "Shorts",
    Icon: SiYoutubeshorts,
  },
  {
    route: "/feed/subscriptions",
    label: "Subscriptions",
    Icon: MdSubscriptions,
  },
];

export const sidebarYouLinks = [
  {
    route: "/feed/history",
    label: "History",
    Icon: RiHistoryLine,
  },
  {
    route: "/feed/playlists",
    label: "Playlists",
    Icon: CgPlayListSearch,
  },
  {
    route: "/playlist?list=WL",
    label: "Watch Later",
    Icon: MdOutlineWatchLater,
  },
  {
    route: "/playlist?list=LL",
    label: "Liked videos",
    Icon: AiFillLike,
  },
];

export const sidebarExploreLinks = [
  {
    route: "/feed/trending",
    label: "Trending",
    Icon: FaFire,
  },
  {
    route: "/channel",
    label: "Shopping",
    Icon: RiShoppingBag4Fill,
  },
  {
    route: "/channel",
    label: "Music",
    Icon: IoMdMusicalNotes,
  },
  {
    route: "/feed/storefront",
    label: "Films",
    Icon: PiFilmSlateFill,
  },
  {
    route: "/channel",
    label: "Live",
    Icon: TbLivePhoto,
  },
];

export const pricingList = [
  {
    title: "Basic",
    price: 0,
    description: "Enjoy ad-supported streaming with limited features.",
    buttonText: "Start Free",
    benefitList: [
      "Ads during videos",
      "Access to standard videos",
      "Limited download options",
      "Basic customer support",
      "Watch on multiple devices",
    ],
    href: "/",
    billing: "/month",
  },
  {
    title: "Standard",
    price: 11.99,
    description: "Stream ad-free and unlock HD content with more perks.",
    buttonText: "Subscribe Now",
    benefitList: [
      "Can upload videos",
      "Access to HD videos",
      "Download content for offline viewing",
      "Priority customer support",
      "Watch on multiple devices",
    ],
    href: "https://buy.stripe.com/test_cN2cOW5X2962fbW144",
    billing: "/month",
  },
  {
    title: "Premium",
    price: 19.99,
    description:
      "Unlock all YouTube features including 4K streaming and exclusive content.",
    buttonText: "Go Premium",
    benefitList: [
      "Can get notification",
      "Access to 4K videos",
      "Exclusive content and features",
      "Top-priority customer support",
      "Watch on multiple devices",
    ],
    href: "https://buy.stripe.com/test_bIYdT0fxCcie9RC001",
    billing: "/month",
  },
];
