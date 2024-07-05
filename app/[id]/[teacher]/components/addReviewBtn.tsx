import { Button } from "@/components/ui/button";
import React from "react";

const AddReviewBtn = () => {
  return (
    <div>
      <div className=" justify-end flex fixed bottom-10 right-0">
        <Button className=" hover:bg-green-500 hover:text-black font-bold mt-5 bg-green-500 rounded-none text-black px-5">
          Add Review ✍️
        </Button>
      </div>
    </div>
  );
};

export default AddReviewBtn;
