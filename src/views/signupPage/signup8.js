import React from "react";

const signup8 = ({onNextStep}) => {
  return (
    <div>
      <div className="flex flex-col gap-10 ">
        <div className="flex items-center gap-1 justify-center">
          <div className="circle bg-[#C653FF] rounded-full w-3 h-3"></div>
          <div className="line w-10 h-[2px] bg-[#C653FF]"></div>
          <div className="circle bg-[#C653FF] rounded-full w-3 h-3"></div>
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
          ></input>

          <input
            type="text"
            required
            placeholder="Mobile Number"
            className="bg-transparent"
          ></input>
          <div className="flex flex-col gap-2">
            <p className="text-[12px]">Enter the OTP sent to 9*******85</p>
            <div className="flex gap-3">
              <input className="w-5 h-5 border bg-transparent"></input>
              <input className="w-5 h-5 border bg-transparent"></input>
              <input className="w-5 h-5 border bg-transparent"></input>
              <input className="w-5 h-5 border bg-transparent"></input>
            </div>
          </div>
          <input
            type="email"
            required
            placeholder="Email Id"
            className="bg-transparent"
          ></input>
          <div className="flex flex-col gap-2">
            <p className="text-[12px]">
              Enter the OTP sent to a*******in@gmail.com
            </p>
            <div className="flex gap-3">
              <input className="w-5 h-5 border bg-transparent"></input>
              <input className="w-5 h-5 border bg-transparent"></input>
              <input className="w-5 h-5 border bg-transparent"></input>
              <input className="w-5 h-5 border bg-transparent"></input>
            </div>
          </div>
          <div className="text-center">
            <button
              onClick={onNextStep}
              className="p-2 px-16 rounded-2xl bg-gradient-to-r from-[#4F0F81] to-[#A702FA] cursor-pointer"
            >
              Verify
            </button>
          </div>
          <div className="text-[14px] text-center mt-[-20px]">
            <p>
              Didn't receive the OTP?{" "}
              <span className="underline font-300 cursor-pointer">
                Resent OTP
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default signup8;
