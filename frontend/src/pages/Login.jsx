import React from "react";
import login from "../assets/frontend_assets/login.jpg";

function Login() {



  
  return (
    <div className="grid grid-cols-2">
      <div className="left h-140">
        <img
          src={login}
          alt="image"
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="right">
        <h1 className="text-[25px] text-center font-medium mt-1">Register</h1>
        <p className="text-center text-[12px] text-gray-500 underline underline-offset-1 decoration-blue-500 ">
          Create Your Account
        </p>

        <form className="flex flex-col p-8 gap-5">
          <input
            type="text"
            placeholder="Enter Your Name"
            className="w-full border outline-none p-1"
          />

          <input
            type="text"
            placeholder="Enter Your Email"
            className="w-full border outline-none p-1"
          />

          <input
            type="tel"
            placeholder="Enter Your Phone-Number"
            className="w-full border outline-none p-1"
          />

          <input
            type="password"
            placeholder="Enter Your Password"
            className="w-full border outline-none p-1"
          />

          <div className="flex gap-2">
            <label htmlFor="Male" className="flex gap-1">
              <input
                type="checkbox"
                id="Male"
                className="scale-105 cursor-pointer"
              />
              Men
            </label>

            <label htmlFor="female" className="flex gap-1">
              <input type="checkbox" id="Female" className="scale-105 cursor-pointer" />
              Female
            </label>
          </div>

          <label htmlFor="" className="flex gap-1 underline underline-offset-1 decoration-blue-500">
            <input type="checkbox" className="scale-105 cursor-pointer" />
            I agree to Terms & Conditions.
          </label>

          <button className="border p-1 mx-6 bg-blue-600 text-white cursor-pointer">Sign Up</button>

          <div className="flex items-center my-1">
          <div className="flex-1 border-t border-gray-700 "></div>
          <span className="px-4">or</span>
          <div className="flex-1 border-t border-gray-700"></div>
          </div>

          <p className="text-center">Already have an account?<span className="mx-2 text-blue-600 underline underline-offset-1 cursor-pointer">Sing In</span></p>






        </form>
      </div>
    </div>
  );
}

export default Login;
