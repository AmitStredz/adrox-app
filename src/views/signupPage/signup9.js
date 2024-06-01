import React from "react";
import { useState } from "react";

const Signup9 = ({onNextStep}) => {
  const [name, setName] = useState(null);
  const [mobile, setMobile] = useState(null);
  const [email, setEmail] = useState(null);

  const isFormValid = () => {
    return name && mobile && email;
  };
  return (
    <div>
      <div className="flex flex-col gap-10 ">
        <div className="flex items-center gap-1 justify-center">
          <div className="circle bg-[#C653FF] rounded-full w-3 h-3"></div>
          <div className="line w-10 h-[2px] bg-[#C653FF]"></div>
          <div className="circle bg-[#C653FF] rounded-full w-3 h-3"></div>
          <div className="line w-10 h-[2px] bg-[#C653FF]"></div>
          <div className="circle bg-[#C653FF] rounded-full w-3 h-3"></div>
          <div className="line w-10 h-[2px] bg-white"></div>
          <div className="circle bg-white rounded-full w-3 h-3"></div>
        </div>
        <div className="flex flex-col gap-10 bg-slate-400 bg-opacity-10 w-[30rem] p-20 rounded-2xl">
          <h1 className="font-700 text-[36px]">Create Account</h1>
          <input
            type="text"
            required
            placeholder="Name"
            className="bg-transparent"
            onChange={(e) => setName(e.target.value)}
          ></input>
          <div className=" flex justify-between">
            <input
              type="text"
              required
              placeholder="Mobile Number"
              className="bg-transparent"
              onChange={(e) => setMobile(e.target.value)}
            ></input>
            <i className="ri-checkbox-circle-line text-green-500"></i>
          </div>
          <div className=" flex justify-between">
            <input
              type="email"
              required
              placeholder="Email Id"
              className="bg-transparent"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <i className="ri-checkbox-circle-line text-green-500"></i>
          </div>
          <input
            type="password"
            required
            placeholder="Password"
            className="bg-transparent"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            type="password"
            required
            placeholder="Confirm password"
            className="bg-transparent"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            type="text"
            required
            placeholder="Referral Code"
            className="bg-transparent"
          ></input>
          <div className="mt-[-30px]">
            <p className="text-[12px] font-300">
              If you don't have a referral code, please use the one below
            </p>
            <span className="text-[14px] font-500 text-[#C653FF]">
              CDY56KASJG8
            </span>
          </div>

          <div className="text-center">
            <button
              disabled={!isFormValid}
              onClick={onNextStep}
              className="p-2 px-16 rounded-2xl bg-gradient-to-r from-[#4F0F81] to-[#A702FA] cursor-pointer"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup9;