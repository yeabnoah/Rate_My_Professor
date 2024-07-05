"use client";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React from "react";

const Navigation = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <nav className=" mx-auto max-w-md md:mb-5 border-b-[1px] border-green-500 mb-10">
      <ul className=" flex gap-5 mt-5 justify-between md:justify-normal ">
        <Link
          href="/"
          className={`${
            pathname == "/" && "bg-green-400 text-black"
          } hover:bg-green-500 py-2 px-2 hover:text-black`}
        >
          Home 🏠
        </Link>
        <Link
          href="/about"
          className={`${
            pathname == "/about" && "bg-green-400 text-black"
          } hover:bg-green-500 py-2 px-2 hover:text-black`}
        >
          About 📝
        </Link>
        <Link
          href="/support"
          className={` ${
            pathname == "/support" && "bg-green-400 text-black"
          } hover:bg-green-500 py-2 px-2 hover:text-black`}
        >
          Support 💰
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
