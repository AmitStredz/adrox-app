import React from "react";
import { useState } from "react";

const Signup7 = ({onNextStep}) => {
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
          <div className="line w-10 h-[2px] bg-white"></div>
          <div className="circle bg-white rounded-full w-3 h-3"></div>
          <div className="line w-10 h-[2px] bg-white"></div>
          <div className="circle bg-white rounded-full w-3 h-3"></div>
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
          <input
            type="text"
            required
            placeholder="Mobile Number"
            className="bg-transparent"
            onChange={(e) => setMobile(e.target.value)}
          ></input>
          <input
            type="email"
            required
            placeholder="Email Id"
            className="bg-transparent"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <div className="text-center">
            <button
              disabled={!isFormValid}
              onClick={onNextStep}
              className="p-2 px-8 rounded-2xl bg-gradient-to-r from-[#4F0F81] to-[#A702FA] cursor-pointer"
            >
              Send OTP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup7;
