"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import lecturerImage from "../../public/AAU-President-Prof.-Bakri-Osman-Saeed.jpg";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { useRouter, usePathname } from "next/navigation";

interface Lecturer {
  id: number;
  name: string;
  subject: string;
  reviews: number;
  rating: string;
  image: StaticImageData;
}

const lecturerData: Lecturer[] = [
  {
    id: 1,
    name: "Dr Alemu Bekele",
    subject: "Biology and Physical Health",
    reviews: 14,
    rating: "✮✮✮",
    image: lecturerImage,
  },
  {
    id: 2,
    name: "Dr Alemu Bekele",
    subject: "Biology and Physical Health",
    reviews: 14,
    rating: "✮✮✮",
    image: lecturerImage,
  },
];

interface Props {
  params: {
    id: number;
  };
}

const University = ({ params: { id } }: Props) => {
  const router = useRouter();
  const currentUrl = usePathname();
  return (
    <div>
      <h1 className="text-xl text-green-500 mb-5">Lecturers 👩‍🏫</h1>

      <div className="flex flex-col gap-3">
        {lecturerData.map((lecturer) => (
          <Card
            onClick={() => {
              router.push(`${currentUrl}/2`);
            }}
            key={lecturer.id}
            className="bg-green-400 rounded-none border-black cursor-pointer"
          >
            <div className="flex gap-2 px-2 py-1 items-center">
              <div>
                <Image
                  src={lecturer.image}
                  alt={lecturer.name}
                  className="h-16 w-16"
                />
                <p className="text-sm">{lecturer.rating}</p>
              </div>
              <div className="flex flex-col">
                <div className="font-bold text-lg">{lecturer.name}</div>
                <div className="p-0 text-sm">{lecturer.subject}</div>
                <div className="p-0 items-center font-normal flex justify-between">
                  <p className="text-xs">{lecturer.reviews} reviews</p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default University;
