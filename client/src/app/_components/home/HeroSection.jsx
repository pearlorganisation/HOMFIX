"use client"

import React from "react";
import { FaPlay } from "react-icons/fa6";

const HeroSection = () => {

  return (
    <div className="">
      <div className=" relative  opacity-90  h-[600px] flex justify-center items-center w-full bg-cover ">
   <div className="absolute w-full h-full bg-[#E6E8EA]"></div>
    <div className="z-30  max-w-screen-xl grid grid-cols-2 place-items-end ">
      <div className="space-y-5">
      <div className="text-center  text-5xl  font-bold  ">
      Supercharge your <span className="text-[#007bff]">Construction </span>&  <span className="text-[#007bff]">Interiors </span> Business
</div>
<div className="text-center text-slate-700 text-lg  font-medium ">
Homfix is a new-age construction management platform for developers, contractors, and design studios.
</div>

<div className="flex gap-5 justify-center">
<button
            class='px-4 py-3  flex items-center gap-2 rounded-md font-bold text-white border-2 border-transparent hover:border-slate-700 bg-[#007bff]   hover:bg-transparent hover:text-[#007bff]'>
           Let's Talk</button>
<button
            class='px-4 py-3 flex items-center gap-2 rounded-md font-bold  border-2 border-slate-700  transition-all ease-in-out duration-300 hover:bg-transparent text-[#007bff]'>
        <FaPlay/>   Watch Demo</button>
</div>

        </div>
        <div className="relative flex justify-center">
  {/* Shadow Layer */}
  {/* <div className="absolute w-[500px] h-[335px] bg-gray-900 opacity-20 rounded-xl translate-x-3 translate-y-3"></div> */}

  {/* Video Element */}
  <video
    src="https://rdash.io/wp-content/uploads/2023/08/hero1.mp4"
    className="relative rounded-xl shadow-lg"
    width={500}
    height={550}
    alt="Construction Video"
    autoPlay
    loop
    muted
    playsInline
  />
</div>

    </div>
 
      </div>
     
      
    </div>
  );
};

export default HeroSection;
