import React from 'react'
import {assets} from '../assets/frontend_assets/assets';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
     <div className="border-b h-15">
        <nav className='flex justify-between h-full '>
          {/* {Right side section } */}
          <div className="right flex gap-8 items-center px-10 font-bold text-sm uppercase tracking-wide">
            <NavLink to='/' className={({ isActive })=> isActive ? "text-blue-500" : ""}>Home</NavLink>
            <NavLink to='/Collection' className={({ isActive })=> isActive ? 'text-blue-500' : ""}>Collection</NavLink>
            <NavLink to='/About'className={({ isActive })=> isActive ? 'text-blue-500' : ""} >About</NavLink>
            <NavLink to='/Contact'className={({ isActive })=> isActive ? 'text-blue-500' : ""} >Contact</NavLink>
          </div>

{/* {middle section } */}
<div className="mr-20">
<NavLink to='/'> <img className='h-full w-full' src={assets.logo} alt="" /></NavLink> 
</div>

{/* {Left side section } */}
<div className="flex items-center px-20 gap-5 text-sm uppercase font-bold">
<NavLink to='/Cart'><img className='h-20 w-full ' src={assets.cart} alt="" /></NavLink>
  <NavLink to='/Login' className='w-20' className={({ isActive })=> isActive ? 'text-blue-500' : ""}>Log-in</NavLink>
</div>
        </nav>
      </div>
  )
}

export default Navbar