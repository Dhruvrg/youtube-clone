"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";

const Pricing = ({ pricing }: any) => {
  const email = "hackathon108@gmail.com";
  const router = useRouter();

  return (
    <Card className="w-[20vw]">
      <CardHeader>
        <CardTitle className="flex item-center justify-between">
          {pricing.title}
        </CardTitle>
        <div>
          <span className="text-3xl font-bold">${pricing.price}</span>
          <span className="text-muted-foreground"> {pricing.billing}</span>
        </div>

        <CardDescription>{pricing.description}</CardDescription>
      </CardHeader>

      <CardContent>
        <span
          className="bg-white text-black rounded-[8px] px-4 py-2"
          onClick={() =>
            router.push(pricing.href + `?prefilled_email=${email}`)
          }
        >
          {pricing.title}
        </span>
      </CardContent>

      <hr className="w-4/5 m-auto mb-4" />

      <CardFooter className="flex">
        <div className="space-y-4">
          {pricing.benefitList.map((benefit: string) => (
            <span key={benefit} className="flex">
              <Check className="text-purple-500" />{" "}
              <h3 className="ml-2">{benefit}</h3>
            </span>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};

export default Pricing;
