"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";

const universityData = [
  {
    id: 1,
    name: "Addis Ababa University",
    region: "Addis Ababa",
    code: "📟 : 235",
    rating: "✮✮✮✮",
  },
  {
    id: 2,
    name: "BahirDar University",
    region: "Addis Ababa",
    code: "📟 : 235",
    rating: "✮✮✮✮",
  },
  {
    id: 3,
    name: "Jimma University",
    region: "Addis Ababa",
    code: "📟 : 235",
    rating: "✮✮✮✮",
  },
  {
    id: 4,
    name: "Mekele University",
    region: "Addis Ababa",
    code: "📟 : 235",
    rating: "✮✮✮✮",
  },
];

const Feed = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen max-w-lg mx-auto">
      <h1 className="text-xl text-green-500">University List 🏛️</h1>

      <div className="mt-5 flex flex-col gap-2">
        {universityData.map((university, index) => (
          <Card
            key={index}
            className="bg-green-400 rounded-none border-black cursor-pointer"
            onClick={() => {
              router.push(`/${university.id}`);
            }}
          >
            <div className="flex flex-col px-2 py-1">
              <div className="font-bold text-lg">{university.name}</div>
              <div className="p-0 text-sm">
                City / Region : {university.region}
              </div>
              <div className="p-0 items-center font-normal flex justify-between">
                <p className="text-sm">{university.code}</p>
                <p className="text-md">{university.rating}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Feed;
