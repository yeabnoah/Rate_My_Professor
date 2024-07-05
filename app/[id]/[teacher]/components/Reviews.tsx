import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Reviews = () => {
  return (
    <div>
      <h2 className=" text-green-500 text-lg mt-5 underline underline-offset-2">
        Reviews ✍️
      </h2>
      <Card className=" gap-0 mx-auto border-[1px] border-green-500 rounded-none mt-2 bg-black">
        <p className=" text-xs p-2 text-white">
          Dr. Aklilu Lema is a distinguished lecturer at Addis Ababa University,
          known for his expertise in [Subject Area].
        </p>
        <p className=" text-lg ml-1 text-green-500">★★★</p>
      </Card>
      <Card className=" gap-0 mx-auto border-[1px] border-green-500 rounded-none mt-2 bg-black">
        <p className=" text-xs p-2 text-white">
          Dr. Aklilu Lema is a distinguished lecturer at Addis Ababa University,
          known for his expertise in [Subject Area].
        </p>
        <p className=" text-lg ml-1 text-green-500">★★★</p>
      </Card>
      <Card className=" gap-0 mx-auto border-[1px] border-green-500 rounded-none mt-2 bg-black">
        <p className=" text-xs p-2 text-white">
          Dr. Aklilu Lema is a distinguished lecturer at Addis Ababa University,
          known for his expertise in [Subject Area].
        </p>
        <p className=" text-lg ml-1 text-green-500">★★★</p>
      </Card>
    </div>
  );
};

export default Reviews;
