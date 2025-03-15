/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { Tooltip } from "rizzui";
import "./about-css.css";
import Icon from "@/lib/icon";

export default function About() {
  return (
    <section
      id="about"
      className="flex px-5 mt-14 flex-col items-center bg-white shadow-2xl rounded-md p-10 pr-10 pl-10"
    >
      <div className="flex flex-col">
        <div className="flex flex-col justify-center sm:justify-between md:flex-row">
          <div>
            <p className="font-mono font-medium text-gray-800">{`</> ABOUT ME`}</p>
            <p className="font-mono text-2xl text-center md:text-left sm:text-4xl md:text-5xl text-gray-800 mt-5">
              Arjohn Ely
            </p>
            <p className="font-mono text-xl text-gray-800 text-center md:text-left">
              Full Stack Developer
            </p>
          </div>
          <div className="flex flex-col justify-center gap-2 items-center md:items-baseline mt-4">
            <div className="flex gap-5">
              <div className="outline-dashed outline-2 outline-offset-2 h-6 text-center flex items-center rounded-md border-gray-900 text-gray-600 p-4 font-mono">
                {`Frontend(90%)`}
              </div>
              <div className="outline-dashed outline-2 outline-offset-2 h-6 text-center flex items-center rounded-md border-gray-900 text-gray-600 p-4 font-mono">
                {`Backend(70%)`}
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex text-gray-800 justify-center font-mono">
                <div className="">
                  <p className="text-[50px]">3</p>
                </div>
                <div className="text-gray-800 content-center">
                  <p>+</p>
                  <p>YEARS OF EXPERIENCE</p>
                </div>
              </div>
              <div className="flex text-gray-800 justify-center font-mono">
                <div className="">
                  <p className="text-[50px]">40</p>
                </div>
                <div className="text-gray-800 content-center">
                  <p>+</p>
                  <p>HOURS OF WORKING</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-md sm:text-md md:text-xl text-gray-800 font-mono tracking-widest text-center mt-14">
          My expertise includes utilizing React.js with the Next.js framework
          for building robust and scalable web applications, along with Tailwind
          CSS for creating responsive and visually appealing designs. For mobile
          development, I specialize in React Native, crafting seamless
          applications for both Android and iOS platforms. Additionally, I
          possess intermediate proficiency in developing RESTful APIs using PHP
          Laravel and NodeJS, enabling efficient backend integration and data
          management.
        </p>
      </div>
      <div className="flex justify-center mt-10">
        <div className="flex flex-wrap gap-5 justify-center">
          <Tooltip
            content={"React & React-Native"}
            className="bg-white shadow-xl p-2 border"
            placement="bottom-start"
            showArrow={false}
          >
            <Link
              href={"https://react.dev/"}
              target="_blank"
              className="socialContainer containerOne"
            >
              {Icon("react")}
            </Link>
          </Tooltip>
          <Tooltip
            content={"Next"}
            className="bg-white shadow-xl p-2 border"
            placement="bottom-start"
            showArrow={false}
          >
            <Link
              href={"https://nextjs.org/"}
              target="_blank"
              className="socialContainer containerTwo"
            >
                 {Icon("next")}
            </Link>
          </Tooltip>
          <Tooltip
            content={"TypeScript"}
            className="bg-white shadow-xl p-2 border"
            placement="bottom-start"
            showArrow={false}
          >
            <Link
              href={"https://www.typescriptlang.org/"}
              target="_blank"
              className="socialContainer containerOne"
            >
              {Icon("typescript")}
            </Link>
          </Tooltip>
          <Tooltip
            content={"GraphQL"}
            className="bg-white shadow-xl p-2 border"
            placement="bottom-start"
            showArrow={false}
          >
            <Link
              href={"https://graphql.org/"}
              target="_blank"
              className="socialContainer containerTen"
            >
             {Icon("graphql")}
            </Link>
          </Tooltip>
          <Tooltip
            content={"Tailwind"}
            className="bg-white shadow-xl p-2 border"
            placement="bottom-start"
            showArrow={false}
          >
            <Link
              href={"https://tailwindcss.com/"}
              target="_blank"
              className="socialContainer containerThree"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="3em"
                width="3em"
                className="socialSvg"
              >
                <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z" />
              </svg>
            </Link>
          </Tooltip>
          <Tooltip
            content={"Laravel"}
            className="bg-white shadow-xl p-2 border"
            placement="bottom-start"
            showArrow={false}
          >
            <Link
              href={"https://laravel.com/"}
              target="_blank"
              className="socialContainer containerFour"
            >
              {Icon("laravel")}
            </Link>
          </Tooltip>
          <Tooltip
            content={"Node"}
            className="bg-white shadow-xl p-2 border"
            placement="bottom-start"
            showArrow={false}
          >
            <Link
              href={"https://nodejs.org/"}
              target="_blank"
              className="socialContainer containerFive"
            >
              {Icon("node")}
            </Link>
          </Tooltip>
          <Tooltip
            content={"Git"}
            className="bg-white shadow-xl p-2 border"
            placement="bottom-start"
            showArrow={false}
          >
            <Link
              href={"https://git-scm.com/"}
              target="_blank"
              className="socialContainer containerSix"
            >
              {Icon("git")}
            </Link>
          </Tooltip>
          <Tooltip
            content={"Github"}
            className="bg-white shadow-xl p-2 border"
            placement="bottom-start"
            showArrow={false}
          >
            <Link
              href={"https://github.com/"}
              target="_blank"
              className="socialContainer containerSeven"
            >
              {Icon("github")}
            </Link>
          </Tooltip>
          <Tooltip
            content={"Gitlab"}
            className="bg-white shadow-xl p-2 border"
            placement="bottom-start"
            showArrow={false}
          >
            <Link
              href={"https://about.gitlab.com/"}
              target="_blank"
              className="socialContainer containerEight"
            >
              {Icon("gitlab")}
            </Link>
          </Tooltip>
        </div>
      </div>
    </section>
  );
}
