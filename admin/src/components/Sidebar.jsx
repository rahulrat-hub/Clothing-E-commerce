import React from 'react'
import {Link} from 'react-router-dom'

function Sidebar() {
  return (
     <div className="w-62.5 border-r min-h-screen p-4 bg-[#141D2D] text-white">
          <div className="border p-4 rounded mb-4 flex items-center gap-3 cursor-pointer">
            <span className="text-xl">➕</span>
            <Link to="/">Add Items</Link>
          </div>

          <div className="border p-4 rounded mb-4 flex items-center gap-3 cursor-pointer">
            <span className="text-xl">☑️</span>
            <Link to="/list">List Items</Link>
          </div>

          <div className="border p-4 rounded flex items-center gap-3 cursor-pointer">
            <span className="text-xl">☑️</span>
            <Link to="/order">Order Items</Link>
          </div>
        </div>
  )
}

export default Sidebar