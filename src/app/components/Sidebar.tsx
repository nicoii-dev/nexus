"use client";

import Link from "next/link";
import { GoHomeFill, GoPerson, GoBriefcase } from "react-icons/go";

export const Sidebar = () => {
  return (
    <div className="fixed flex bg-[#252d36] text-center p-5 place-self-center rounded-md mt-14 bottom-10 transition duration-300 ease-in-out gap-5 z-50 w-56 justify-evenly">
      <Link href="#about" className="font-mono font-bold tracking-wider text-[#CBDCEB] text-[24px]">
        <GoHomeFill />
      </Link>
      <Link href="#resume" className="font-mono font-bold tracking-wider text-[#CBDCEB] text-[24px]">
        <GoPerson />
      </Link>
      <Link href="#projects" className="font-mono font-bold tracking-wider text-[#CBDCEB] text-[24px]">
        <GoBriefcase />
      </Link>
    </div>
  );
};
