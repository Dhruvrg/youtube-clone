"use client";

import Pricing from "@/components/Pricing";
import { pricingList } from "@/constants";
import React from "react";

const page = () => {
  return (
    <div className="pt-10 px-24">
      <p className="font-bold text-3xl text-white pb-5">Plans & Pricing</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing) => (
          <Pricing key={pricing.title} pricing={pricing} />
        ))}
      </div>
    </div>
  );
};

export default page;
