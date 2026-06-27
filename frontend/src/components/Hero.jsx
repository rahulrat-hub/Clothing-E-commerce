import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import {RiArrowRightLine} from "@remixicon/react";



function Hero() {
  return (
    <div className="relative">
     <div className="h-200 w-full">
          <img  className="h-full w-full object-cover object-top" src={assets.hero} alt="" />
       
      </div>

      <div className="absolute top-0 left-0">
        <h1 className=" w-2 leading-20 p-10 font-semibold">
       <span className="text-8xl absolute top-36 left-75 text-[#FFFFFF]">Define</span>
       <span className="text-8xl absolute top-70 left-210 text-[#FFFFFF]">Your</span>
       <span className="text-8xl absolute top-100 left-25 text-[#FFFFFF]">Signat<span className="text-[#1f29e1]">ure</span></span><span className="text-8xl absolute top-110 left-215 text-[#FFFFFF]">Style</span>
      </h1>
      <p className="absolute top-150 left-10 w-120 text-md text-white border-b">Minimal pieces designed to elevate your everyday look. Crafted for confidence, built for expression.</p>
   </div>
   <div className="">
      <button className="border p-2 w-60 absolute top-169.75 left-80 bg-white text-[#1f29e1]">SHOP MORE</button>
    <i className="absolute top-172 left-123 text-zinc-500"><RiArrowRightLine /></i>
   </div>
    </div>
  );
}

export default Hero;
