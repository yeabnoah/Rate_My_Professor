import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className=" flex gap-[3px] flex-col mx-auto max-w-xl mt-5">
      <Skeleton className=" h-4 w-[80%] rounded-xs bg-gray-500" />
      <div className=" flex flex-col gap-[3px]">
        <Skeleton className=" h-3 mt-1 w-[60%] rounded-xs bg-gray-500" />
        <Skeleton className=" h-3 mt-1 w-[75%] rounded-xs bg-gray-500" />
        <Skeleton className=" h-3 mt-1 w-[65%] rounded-xs bg-gray-500" />

        <div className=" mt-2">
          <Skeleton className=" h-4 w-[80%] rounded-xs bg-gray-500" />
          <div className=" flex flex-col gap-[3px]">
            <Skeleton className=" h-3 mt-1 w-[60%] rounded-xs bg-gray-500" />
            <Skeleton className=" h-3 mt-1 w-[75%] rounded-xs bg-gray-500" />
            <Skeleton className=" h-3 mt-1 w-[65%] rounded-xs bg-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
