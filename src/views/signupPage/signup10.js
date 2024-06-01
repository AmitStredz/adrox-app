import React from "react";
import { useState } from "react";

const Signup10 = ({onNextStep}) => {
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
          <div className="line w-10 h-[2px] bg-[#C653FF]"></div>
          <div className="circle bg-white rounded-full w-3 h-3"></div>
        </div>
        <div className="flex flex-col gap-10 bg-slate-400 bg-opacity-10 w-[35rem] p-12 rounded-2xl">
          <h1 className="font-400 text-[20px] text-center">Validate Your Secret Recovery Phrase</h1>

          <div className="grid grid-cols-4 gap-12 border p-8 justify-center items-center text-center rounded-2xl">
            <input className="w-[82px] h-[32px] bg-slate-400 bg-opacity-15 rounded-md"></input>
            <input className="w-[82px] h-[32px] bg-slate-400 bg-opacity-15 rounded-md"></input>
            <input className="w-[82px] h-[32px] bg-slate-400 bg-opacity-15 rounded-md"></input>
            <input className="w-[82px] h-[32px] bg-slate-400 bg-opacity-15 rounded-md"></input>
            <input className="w-[82px] h-[32px] bg-slate-400 bg-opacity-15 rounded-md"></input>
            <input className="w-[82px] h-[32px] bg-slate-400 bg-opacity-15 rounded-md"></input>
            <input className="w-[82px] h-[32px] bg-slate-400 bg-opacity-15 rounded-md"></input>
            <input className="w-[82px] h-[32px] bg-slate-400 bg-opacity-15 rounded-md"></input>
            <input className="w-[82px] h-[32px] bg-slate-400 bg-opacity-15 rounded-md"></input>
            <input className="w-[82px] h-[32px] bg-slate-400 bg-opacity-15 rounded-md"></input>
            <input className="w-[82px] h-[32px] bg-slate-400 bg-opacity-15 rounded-md"></input>
            <input className="w-[82px] h-[32px] bg-slate-400 bg-opacity-15 rounded-md"></input>
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
export default Signup10;
