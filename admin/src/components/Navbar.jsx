import React from 'react'

function Navabr() {
  return (
    <div className="flex items-center justify-between px-8 py-4 border-b">
        <div className="flex items-center gap-2">
          {/* <img
            src="https://via.placeholder.com/120x40"
            alt=""
            className="h-10"
          /> */}
          <h1 className="font-bold text-lg">Admin Panel</h1>
        </div>

        <button className="bg-slate-700 text-white px-8 py-3 rounded-full">
          Logout
        </button>
      </div>
  )
}

export default Navabr