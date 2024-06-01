import React from "react";
import { useState } from "react";
import { useHistory, useNavigate } from "react-router-dom";

const Signup11 = ({ onNextStep }) => {
  const history = useNavigate();

  const handleOnClick = () => {
    history("/signup12");
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
          <div className="line w-10 h-[2px] bg-[#C653FF]"></div>
          <div className="circle bg-[#C653FF] rounded-full w-3 h-3"></div>
        </div>
        <div className="flex flex-col gap-10 bg-slate-400 bg-opacity-10 w-[35rem] p-12 rounded-2xl">
          <h1 className="font-400 text-[20px] text-center">
            Your Recovery Phrase Has Been Successfully Verified
          </h1>

          <div className="flex justify-center border p-8 rounded-2xl">
            <i
              className="ri-checkbox-circle-line text-9xl text-[#C653FF]"
              data-aos="zoom-in"
            ></i>
          </div>

          <div className="flex text-center justify-center gap-2">
            <input type="checkbox" className="size-5"></input>
            <p className="text-[16px] font-400">
              Send Recovery Phrase To My Email
            </p>
          </div>

          <div className="text-center">
            <button
              onClick={handleOnClick}
              className="p-2 px-16 rounded-2xl bg-gradient-to-r from-[#4F0F81] to-[#A702FA] cursor-pointer"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup11;
