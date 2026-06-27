import React from "react";
import {assets} from '../assets/frontend_assets/assets'
import Marquee from '../components/Marquee'

function About() {
  return (
    <div className="bg-white text-black">

      {/* HERO */}
      <div className="relative h-[80vh] mb-4">

      <video className="w-full h-full object-center object-cover" 
      autoPlay loop muted
      src={assets.about}>
      </video>

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex items-center justify-center flex-col text-white">

        <h1 className="text-5xl font-bold tracking-wide ">
            ABOUT <span className="text-black">US</span>
          </h1>


          <p className="mt-3 text-sm text-white/80 underline underline-offset-5">
            Crafting identity through style.
          </p>

        </div>
      </div>

<Marquee 
title="ABOUT US"
/>


      {/* BRAND STORY */}
      <div className="px-10 py-20 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h2 className="text-3xl font-semibold mb-4">
            Our Story
          </h2>

          <p className="text-gray-600 leading-relaxed">
            We believe fashion is more than clothing — it's identity.
            Our collections are designed to blend minimal aesthetics with
            bold expression, creating timeless pieces that elevate your
            everyday style.
          </p>
        </div>

       <video src={assets.story}
       className="h-[80%] w-full object-cover"
       autoPlay loop muted
       ></video>

      </div>

      {/* FEATURES */}
      <div className="grid md:grid-cols-3 text-center border-y py-16">

        <div>
          <h3 className="text-xl font-semibold">Premium Quality</h3>
          <p className="text-sm text-gray-500 mt-2">
            Crafted with finest materials
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Modern Design</h3>
          <p className="text-sm text-gray-500 mt-2">
            Clean and bold aesthetics
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Global Vision</h3>
          <p className="text-sm text-gray-500 mt-2">
            Inspired by worldwide culture
          </p>
        </div>

      </div>

      {/* IMAGE SECTION */}
      <div className="px-10 py-20">

        <video
          src={assets.end}
          className="w-full h-125 object-cover"
          alt=""
          autoPlay loop muted
        />

      </div>

      {/* VISION */}
      <div className="px-10 pb-20 text-center max-w-2xl mx-auto">

        <h2 className="text-3xl font-semibold mb-4">
          Our Vision
        </h2>

        <p className="text-gray-600">
          To redefine everyday fashion by creating pieces that are minimal,
          expressive, and timeless.
        </p>

      </div>

    </div>
  );
}

export default About;
