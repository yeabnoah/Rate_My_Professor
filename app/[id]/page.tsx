import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

interface Props {
  params: {
    id: number;
  };
}

const University = ({ params: { id } }: Props) => {
  return (
    <div>
      <Card className="bg-green-400 rounded-none border-black">
        <div className="flex flex-col px-2 py-1">{id}</div>
      </Card>
    </div>
  );
};

export default University;
