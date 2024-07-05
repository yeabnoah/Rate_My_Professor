import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import UsebleButton from "../components/button";

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
    <div className=" mx-auto max-w-xl">
      <div className=" flex flex-col justify-center gap-2">
        <h2 className="text-4xl text-green-400 underline underline-offset-4">
          About Us
        </h2>

        <p className=" text-wrap mt-5">
          Rate My Professor/Lecturer is committed to providing a transparent and
          trustworthy platform where students can share their honest feedback
          about professors and lecturers. Our mission is to empower students by
          giving them a voice to express their experiences and insights. We
          believe in the power of community-driven feedback to enhance the
          educational experience for everyone involved. Whether you're a student
          seeking guidance or an educator striving for improvement, Rate My
          Professor/Lecturer is here to support you.
        </p>

        <h2 className=" text-2xl mt-5 text-green-400 underline-offset-4 underline">
          About The Project 🚀
        </h2>
        <p className=" text-wrap">
          Rate My Professor/Lecturer is born out of a desire to enhance
          transparency and accountability in academia. It aims to foster a
          community where feedback is constructive and valuable, helping both
          students and educators alike to make informed decisions and
          improvements.
        </p>

        <h2 className=" text-2xl mt-5 text-green-400 underline-offset-4 underline">
          About The Developer 👨‍💻
        </h2>
        <p className=" text-wrap">
          Hi there! I'm yeabsra Ashebir [Tech Nerd], the developer behind Rate
          My Professor/Lecturer. With a passion for creating meaningful
          applications that impact education, I embarked on this project to
          provide a platform where students can openly share their experiences
          and insights about professors and lecturers.
        </p>
        <UsebleButton content="Do or Die" link="/" className="" />
        <div>user searched for : {use}</div>
      </div>
    </div>
  );
}
