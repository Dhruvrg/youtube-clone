import { signIn } from "next-auth/react";
import { IoPersonCircleOutline } from "react-icons/io5";

const GoogleAuthButton = () => {
  return (
    <div className="flex flex-row">
      <button
        onClick={() => signIn("google")}
        className={
          "rounded-3xl flex gap-1 px-2 cursor-pointer w-full hover:bg-[#212121] border-gray-600 text-md border-[1px] pb-1 pt-1.5"
        }
      >
        <IoPersonCircleOutline size={24} className="" />
        <p>Sign in</p>
      </button>
    </div>
  );
};

export default GoogleAuthButton;
