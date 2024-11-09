"use client";

import ChannelVideos from "@/components/ChannelVideos";
import { Button } from "@/components/ui/button";
import { fetchUser, incrementSubscription } from "@/lib/actions/user.actions";
import Image from "next/image";
import { memo, use, useEffect, useState } from "react";

interface IParams {
  username?: string;
}

const Page = memo(({ params: paramsPromise }: { params: Promise<IParams> }) => {
  const params = use(paramsPromise);
  const name = params?.username?.replace("%20", " ");

  const [user, setUser] = useState<any>({});
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const data: any = await fetchUser(name);
      setUser(data);
    };
    if (name) getData();
  }, [name && user.length !== 0]);

  const handleSubscribed = async () => {
    try {
      await incrementSubscription(user.id);
      setSubscribed(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-12 w-[85vw]">
      <div className="flex mx-32 mb-5">
        <Image
          className="rounded-full"
          height="200"
          width="200"
          alt="Avatar"
          src={user?.image || "/placeholder.jpg"}
        />
        <div className="ml-5 flex flex-col gap-3 justify-center items-start">
          <p className="text-white text-4xl font-bold">{user?.name}</p>
          <p className="text-gray-400 font-semibold">
            @{name} ∙ {user?.subscribers} subscribers
          </p>
          {!subscribed && (
            <Button
              onClick={() => handleSubscribed()}
              className="text-black font-bold bg-white rounded-2xl hover:bg-gray-300"
            >
              Subscribe
            </Button>
          )}
          {subscribed && (
            <Button
              onClick={() => setSubscribed(false)}
              className="text-white font-bold bg-[#4c4c4c] rounded-2xl hover:bg-[#4c4c4ccf]"
            >
              Subscribed
            </Button>
          )}
        </div>
      </div>
      <p className="border-b border-gray-700"></p>
      <ChannelVideos name={name} />
    </div>
  );
});

export default Page;
