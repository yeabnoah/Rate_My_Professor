"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  content: string;
  link: string;
  className: string;
}

const UsebleButton = ({ content, link, className }: Props) => {
  const router = useRouter();
  return (
    <Button
      onClick={() => {
        router.push(link);
      }}
      className={`${className} w-fit bg-green-500 text-black hover:bg-green-600 hover:text-black rounded-none`}
    >
      {content}
    </Button>
  );
};

export default UsebleButton;
