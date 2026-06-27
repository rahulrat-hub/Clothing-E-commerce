import React from 'react'

function Sidebar() {
  return (
     <div className="w-62.5 border-r min-h-screen p-4">
          <div className="border bg-pink-50 p-4 rounded mb-4 flex items-center gap-3 cursor-pointer">
            <span className="text-xl">➕</span>
            <p>Add Items</p>
          </div>

          <div className="border p-4 rounded mb-4 flex items-center gap-3 cursor-pointer">
            <span className="text-xl">☑️</span>
            <p>List Items</p>
          </div>

          <div className="border p-4 rounded flex items-center gap-3 cursor-pointer">
            <span className="text-xl">☑️</span>
            <p>Order Items</p>
          </div>
        </div>
  )
}

export default Sidebar