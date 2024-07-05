import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import UsebleButton from "./components/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Features from "./components/features";

interface Props {
  searchParams: {
    use: string;
  };
}

export default function Home(props: Props) {
  const {
    searchParams: { use },
  } = props;
  return (
    <div className="max-w-xl mx-auto mt-5">
      <div className=" flex flex-col justify-center gap-2">
        <h2 className=" text-4xl text-green-400 underline underline-offset-4">
          Rate my Professor
        </h2>
        <p className=" text-wrap">
          Rate My Professor/Lecturer is your trusted platform to share and
          discover honest feedback about professors and lecturers. Whether
          you're a student looking for insights or an educator seeking
          constructive feedback, we're here to help you make informed decisions.
        </p>

        <h2 className=" text-2xl mt-5 text-green-400 underline-offset-4 underline">
          Key Features
        </h2>
        <p className=" text-wrap">
          Rate My Professor/Lecturer is your trusted platform to share and
          discover honest feedback about professors and lecturers. Whether
          you're a student looking for insights or an educator seeking
          constructive feedback, we're here to help you make informed decisions.
        </p>

        <Features />
      </div>

      <UsebleButton content="Get Started" link="/feed" className="mt-5 " />
    </div>
  );
}
