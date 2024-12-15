"use client";

import { useState } from "react";
import { Button } from "rizzui";
import Link from "next/link";
import { FaUserGraduate, FaBriefcase } from "react-icons/fa";

import "./resume-css.css";

export default function Resume() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div id="resume" className="px-5 mt-14 md:flex-row sm:flex-row flex-col items-center bg-white shadow-2xl rounded-md p-10 pr-10 pl-10">
      <div className="flex flex-col w-full">
        <div className="flex flex-col justify-center sm:justify-between md:flex-row">
          <div>
            <p className="font-mono font-medium text-gray-800">{`</> RESUME`}</p>
            <p className="font-mono text-2xl text-center sm:text-4xl md:text-left md:text-5xl text-gray-800 mt-5">
              Education and Experience
            </p>
          </div>
        </div>
        <div className="grid justify-center sm:flex sm:justify-between">
          <div className="flex mt-10 sm:w-5/12">
            <div className="relative flex flex-col items-start border-l-2 border-dashed border-gray-900 ">
              <div className="pl-6">
                <FaUserGraduate color="#202020" size={35} />
              </div>
              <div className="flex mt-3 w-full">
                <div className="border-t-2 w-[2vw] border-gray-900 border-dashed"></div>
                <div className="justify-start border-gray-900 p-2 border-dashed border-2 rounded-md w-full">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Bachelor of Science in Information Technology
                  </h3>
                  <p className="text-gray-500">
                    @ Cagayan de Oro College, Cagayan de Oro City, Philippines
                  </p>
                  <div className="inline-block text-gray-600 text-md font-bold tracking-widest ">
                    2014 - 2019
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-10 sm:w-5/12">
            <div className="relative flex flex-col items-start border-l-2 border-dashed border-gray-900 w-full">
              <div className="pl-6">
                <FaBriefcase color="#202020" size={35} />
              </div>
              <div className="flex justify-center mt-3 w-full">
                <div className="border-t-2 w-[2vw] border-gray-900 border-dashed"></div>
                <div className="justify-start border-gray-900 p-2 border-dashed border-2 rounded-md w-full">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Fligno Software Philippines, Inc
                  </h3>
                  <p className="text-gray-500">Software Engineer</p>
                  <div className="inline-block text-gray-600 text-md font-bold tracking-widest ">
                    Sep 2021 - Present
                  </div>
                </div>
              </div>
              <div className="flex mt-3 w-full">
                <div className="border-t-2 w-[2vw] border-gray-900 border-dashed"></div>
                <div className="justify-start border-gray-900 p-2 border-dashed border-2 rounded-md w-full">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Nibble Dev Team
                  </h3>
                  <p className="text-gray-500">Fullstack Developer</p>
                  <div className="inline-block text-gray-600 text-md font-bold tracking-widest ">
                    May 2022 - Dec 2023
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full mt-10">
        <Button variant="outline" className="buttonDownload" size="md">
          Download CV
        </Button>
      </div>
    </div>
  );
}
