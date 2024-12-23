"use client";

import { MarqueeDemo } from "./MarqueeExample";

export default function Projects() {

  return (
    <div id="projects" className="px-5 mt-14 md:flex-row sm:flex-row flex-col items-center bg-white shadow-2xl rounded-md p-10 pr-10 pl-10">
      <div className="flex flex-col w-full">
        <div className="flex flex-col justify-center sm:justify-between md:flex-row">
          <div>
            <p className="font-mono font-medium text-gray-800">{`</> Projects`}</p>
          </div>
        </div>
        <MarqueeDemo />
      </div>
    
    </div>
  );
}
