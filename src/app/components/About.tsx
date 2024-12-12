/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { Button } from "rizzui";
import Link from "next/link";
import { Tooltip } from "rizzui";

export default function About() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className="flex px-5 mt-14 flex-col items-center bg-white shadow-2xl rounded-md p-10 pr-10 pl-10">
      <div className="flex flex-col">
        <div className="flex flex-col justify-center sm:justify-between md:flex-row">
          <div>
            <p className="font-mono font-medium text-gray-800">{`</> ABOUT ME`}</p>
            <p className="font-mono text-2xl text-center md:text-left sm:text-4xl md:text-5xl text-gray-800 mt-5">Arjohn Ely</p>
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
          Laravel, enabling efficient backend integration and data management.
        </p>
      </div>
       <div className="flex justify-center mt-10">
          <div className="flex flex-wrap gap-5 justify-center">
            <Tooltip content={"React"} className="bg-white shadow-xl p-2 border" placement="bottom-start" showArrow={false}>
              <img
                data-tooltip-target="tooltip-default"
                className="w-10 mb-10 border rounded-lg shadow-md"
                alt="React Image"
                src="./icons/react.png"
              ></img>
            </Tooltip>
            <Tooltip content={"Next"} className="bg-white shadow-xl p-2 border" placement="bottom-start" showArrow={false}>
            <img
              className=" w-10 mb-10 border rounded-lg shadow-md"
              alt="Next Image"
              src="./icons/next.png"
            ></img>
            </Tooltip>
            <Tooltip content={"Tailwind"} className="bg-white shadow-xl p-2 border" placement="bottom-start" showArrow={false}>
            <img
              className="bg-center bg-cover w-10 mb-10 border rounded-lg shadow-md"
              alt="Tailwind Image"
              src="./icons/tailwind.png"
            ></img>
            </Tooltip>
            <Tooltip content={"Laravel"} className="bg-white shadow-xl p-2 border" placement="bottom-start" showArrow={false}>
            <img
              className=" w-10 mb-10 border rounded-lg shadow-md"
              alt="Laravel Image"
              src="./icons/laravel.png"
            ></img>
          </Tooltip>
          <Tooltip content={"Node"} className="bg-white shadow-xl p-2 border" placement="bottom-start" showArrow={false}>
            <img
              className=" w-10 mb-10 border rounded-lg shadow-md"
              alt="Node Image"
              src="./icons/nodejs.png"
            ></img>
            </Tooltip>
            <Tooltip content={"Git"} className="bg-white shadow-xl p-2 border" placement="bottom-start" showArrow={false}>
            <img
              className=" w-10 mb-10 border rounded-lg shadow-md"
              alt="Git Image"
              src="./icons/git.png"
            ></img>
            </Tooltip>
            <Tooltip content={"Github"} className="bg-white shadow-xl p-2 border" placement="bottom-start" showArrow={false}>
            <img
              className=" w-10 mb-10 border rounded-lg shadow-md"
              alt="Github Image"
              src="./icons/github.png"
            ></img>
            </Tooltip>
            <Tooltip content={"Gitlab"} className="bg-white shadow-xl p-2 border" placement="bottom-start" showArrow={false}>
            <img
              className=" w-10 mb-10 border rounded-lg shadow-md"
              alt="Gitlab Image"
              src="./icons/gitlab.png"
            ></img>
            </Tooltip>
          </div>
        </div>
    </div>
  );
}
