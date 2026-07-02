import React from 'react'
import {NavLink} from 'react-router-dom'
import { assets } from '../assets/frontend_assets/assets'

function Footer() {
  return (
    <div className="relative w-full h-150 overflow-hidden">

      {/* Background Image */}
      <img
        src={assets.foot} 
        alt=""
        className="w-full h-full object-cover"
      />

      {/* Gradient Fade (bottom dark fade) */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent"></div>

      {/* Footer Content */}
      <div className="absolute bottom-0 w-full px-10 py-8 text-white">

        {/* Top Row */}
        <div className="flex justify-between items-center mb-6">

          {/* Logo */}
          <h2 className="text-2xl font-semibold">
            Your<span className="text-blue-500">Signature</span>
          </h2>

          {/* Menu */}
          <div className="flex gap-10 text-sm tracking-[3px]">
            <NavLink to='/Collection' className="cursor-pointer hover:text-blue-400">COLLECTION</NavLink>
            <NavLink to='/About' className="cursor-pointer hover:text-blue-400">ABOUT</NavLink>
            <NavLink to='/blog' className="cursor-pointer hover:text-blue-400">BLOG</NavLink>
            <NavLink to='/Contact' className="cursor-pointer hover:text-blue-400">CONTACT</NavLink>
          </div>
        </div>

        {/* Middle Row */}
        <div className="flex justify-between items-center mb-6">

          {/* Left Text */}
          <p className="text-sm text-white/70 max-w-xs leading-relaxed">
            Elevate your style with our Vancouver signature collection.
          </p>

          {/* Subscribe Box */}
          <div className="flex items-center border border-white/30 backdrop-blur-md bg-white/10">

            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent px-4 py-2 text-sm outline-none placeholder:text-white/50"
            />

            <button className="px-4 py-2 text-sm bg-white/10 hover:bg-blue-600 transition">
              SUBSCRIBE
            </button>

          </div>
        </div>

       {/* Bottom Row */}
        <div className="flex justify-between text-xs text-white/50 border-t border-white/20 pt-4">

          <p>© 2024 YourSignature. All rights reserved.</p>

          <div className="flex gap-6">
            <p className="cursor-pointer hover:text-white">Privacy Policy</p>
            <p className="cursor-pointer hover:text-white">Terms of Service</p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Footer;


