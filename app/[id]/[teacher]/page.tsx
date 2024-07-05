import React, { use } from "react";
import user from "../../../public/AAU-President-Prof.-Bakri-Osman-Saeed.jpg";
import Image from "next/image";
import Reviews from "./components/Reviews";
import { Button } from "@/components/ui/button";
import AddReviewBtn from "./components/addReviewBtn";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

interface Props {
  params: {
    teacher: number;
  };
}

const TeacherDetail = ({ params: { teacher } }: Props) => {
  return (
    <div className=" min-h-screen relative">
      <div className=" flex gap-5 justify-between">
        <Image
          src={user}
          alt="tes"
          className="  h-28 w-28 border-b-2 border-r-2 border-green-500"
        />

        <div>
          <h2 className="text-lg text-balance text-green-500 font-semibold">
            Dr. Solomon Tigabu
          </h2>
          <ul className="list-disc pl-3">
            <li className="text-xs">Doctor of Philosophy and Astronomy</li>
            <li className="text-xs">
              Department of Electrical and Computer Engineering
            </li>
            <li className="text-xs">✮✮✮✮ stars</li>
          </ul>
        </div>
      </div>

      <div>
        <p className=" text-xs mt-3">
          Dr. Aklilu Lema, a distinguished lecturer at Addis Ababa University,
          excels in [Subject Area], offering engaging lectures that inspire
          students. His extensive research and numerous publications contribute
          valuable knowledge to his field. Beyond teaching, he mentors students,
          providing guidance for their academic and professional growth.
        </p>

        <h2 className=" text-green-500 text-lg mt-5 underline underline-offset-2">
          Rating ✨
        </h2>
        <h1 className=" text-3xl text-green-500">
          ★★★★☆ <span className=" text-2xl font-semibold">4.0</span>
        </h1>

        <Reviews />

        <AddReviewBtn />

        <div>
          import Link from "next/link"
          <Card className="mx-auto max-w-sm">
            <CardHeader>
              <CardTitle className="text-2xl">Login</CardTitle>
              <CardDescription>
                Enter your email below to login to your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <Link
                      href="#"
                      className="ml-auto inline-block text-sm underline"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                  <Input id="password" type="password" required />
                </div>
                <Button type="submit" className="w-full">
                  Login
                </Button>
                <Button variant="outline" className="w-full">
                  Login with Google
                </Button>
              </div>
              <div className="mt-4 text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link href="#" className="underline">
                  Sign up
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TeacherDetail;
