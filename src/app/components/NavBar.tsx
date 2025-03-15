"use client";

import Link from "next/link";
import { GoHomeFill, GoPerson, GoBriefcase } from "react-icons/go";
import clsx from "clsx";
import { useEffect, useState } from "react";

export const NavBar = () => {
  const [currentNav, setCurrentNav] = useState<string>("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        console.log(section)
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= 300) {
          setCurrentNav(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed flex bg-[#252d36] text-center p-3 place-self-center rounded-md mt-14 bottom-5 sm:bottom-10 transition duration-300 ease-in-out gap-5 z-50 w-56 justify-evenly">
      <Link
        href="#about"
        onClick={() => setCurrentNav("about")}
        className={clsx(
          currentNav === "about"
            ? "font-mono font-bold tracking-wider bg-[#CBDCEB] text-[24px] text-[#252d36] p-2 rounded-lg"
            : "font-mono font-bold tracking-wider text-[#CBDCEB] text-[24px] bg-[#252d36] p-2"
        )}
      >
        <GoHomeFill />
      </Link>
      <Link
        href="#resume"
        onClick={() => setCurrentNav("resume")}
        className={clsx(
          currentNav === "resume"
            ? "font-mono font-bold tracking-wider bg-[#CBDCEB] text-[24px] text-[#252d36] p-2 rounded-lg"
            : "font-mono font-bold tracking-wider text-[#CBDCEB] text-[24px] bg-[#252d36] p-2"
        )}
      >
        <GoPerson />
      </Link>
      <Link
        href="#projects"
        onClick={() => setCurrentNav("projects")}
        className={clsx(
          currentNav === "projects"
            ? "font-mono font-bold tracking-wider bg-[#CBDCEB] text-[24px] text-[#252d36] p-2 rounded-lg"
            : "font-mono font-bold tracking-wider text-[#CBDCEB] text-[24px] bg-[#252d36] p-2"
        )}
      >
        <GoBriefcase />
      </Link>
    </div>
  );
};
