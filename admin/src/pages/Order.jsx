import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import TimerIcon from '@mui/icons-material/Timer';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Table from '../components/Table'

function Order() {
  return (
    <div>
      <Navbar />

      <div className="flex">
        <Sidebar />
        <div className="">
          <h4 className="px-4 pt-2 font-medium">Orders</h4>
          <p className="px-4 text-[12px] text-gray-500">Manage and track customer order</p>

          <div className="boxes flex mx-4 my-2 gap-2">

          <div className="box1 flex w-40 rounded-[10px] shadow-[0_2px_10px_rgba(0,0,0,0.5)] p-2 gap-2 items-center">
            
            <span className="bg-[#F3E8FF] text-[#7C3AED] h-10 w-8 p-1 m-1 rounded-[5px] scale-75"><ShoppingBagIcon/></span>
            <div className="">
              <p className="text-[12px] font-medium">Total Order</p>
              <p className="font-medium">128</p>
              <p className="text-[12px] font-medium">All time orders</p>
            </div>
            </div>
            
           <div className="box1 flex w-40 rounded-[10px] shadow-[0_2px_10px_rgba(0,0,0,0.5)] p-2 gap-2 items-center">
            
            <span className="bg-[#FFF7ED] text-[#F97316] h-10 w-8 p-1 m-1 rounded-[5px] scale-75"><TimerIcon/></span>
            <div className="">
              <p className="text-[12px] font-medium">Pending</p>
              <p className="font-medium">128</p>
              <p className="text-[12px] font-medium">Processing Orders</p>
            </div>
            </div>

          <div className="box1 flex w-40 rounded-[10px] shadow-[0_2px_10px_rgba(0,0,0,0.5)] p-2 gap-2 items-center">
            
            <span className="bg-[#DBEAFE] text-[#2563EB] h-10 w-8 p-1 m-1 rounded-[5px] scale-75"><LocalShippingIcon/></span>
            <div className="">
              <p className="text-[12px] font-medium">Shipped</p>
              <p className="font-medium">128</p>
              <p className="text-[12px] font-medium">Order Placed</p>
            </div>
            </div>
         
          <div className="box1 flex w-40 rounded-[10px] shadow-[0_2px_10px_rgba(0,0,0,0.5)] p-2 gap-2 items-center">
            
            <span className="bg-[#DCFCE7] text-[#16A34A] h-10 w-8 p-1 m-1 rounded-[5px] scale-75"><TaskAltIcon/></span>
            <div className="">
              <p className="text-[12px] font-medium">Delivered</p>
              <p className="font-medium">128</p>
              <p className="text-[12px] font-medium">Order Delivered</p>
            </div>
            </div>
            </div>

          <Table />
               
            </div>




      </div>
    </div>
  );
}

export default Order;
