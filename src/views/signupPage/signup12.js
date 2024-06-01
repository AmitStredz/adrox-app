import React from "react";

export default function Signup12() {
  return (
    <div className="flex bg-[#0f011a] h-screen text-white font-nunito p-24 justify-evenly gap-10 overflow-hidden">
      <div className="w-[40%] items-center">
        <div className="flex flex-col gap-10 bg-slate-400 bg-opacity-10 w-[35rem] p-12 rounded-2xl">
          <div>
            <h1 className="font-700 text-[36px] text-center text-[#C653FF]">
              Congradulations!
            </h1>
            <p className="font-100 text-[16px] text-center">
              Your ADROX wallet creation was successful. Remember to safeguard
              your Secret Recovery Phrase diligently as it is crucial for your
              security!
            </p>
          </div>

          <div className="font-100 text-[16px] flex flex-col gap-3">
            <p>Here are some important reminders:</p>
            <div className="bg-slate-500 bg-opacity-15 p-5 rounded-2xl">
              <li>ADROX cannot retrieve your Secret Recovery Phrase.</li>
              <li>ADROX will never request your Secret Recovery Phrase.</li>
              <li>
                Never share your Secret Recovery Phrase with anyone to avoid the
                risk of your funds being stolen.
              </li>
            </div>
          </div>
          <div className="text-center z-10 ">
            <a className="p-2 px-16 rounded-2xl bg-gradient-to-r from-[#4F0F81] to-[#A702FA] cursor-pointer">
              Next
            </a>
          </div>
        </div>
      </div>

      <div className="absolute top-[-60px] right-0 ">
        <img src="/ellipse32352-wf1-700w.png" alt="hello"></img>
      </div>
      <div className="absolute bottom-0 right-0 overflow-hidden">
        <img
          src="/external/ellipse32356-aujk-700w.png"
          alt="hello"
          className="bottom-0"
        ></img>
      </div>
      <div className="absolute bottom-0 left-0 overflow-hidden">
        <img
          src="/external/ellipse22356-sa34-1000w.png"
          alt="hello"
          className="bottom-0"
        ></img>
      </div>
    </div>
  );
}

<div className="flex flex-col gap-10 bg-slate-400 bg-opacity-10 w-[35rem] p-12 rounded-2xl">
  <div>
    <h1 className="font-400 text-[20px] text-center">Congradulations!</h1>
    <p>
      Your ADROX wallet creation was successful. Remember to safeguard your
      Secret Recovery Phrase diligently as it is crucial for your security!
    </p>
  </div>

  <div>
    <p>Here are some important reminders:</p>
    <li>ADROX cannot retrieve your Secret Recovery Phrase.</li>
    <li>ADROX will never request your Secret Recovery Phrase.</li>
    <li>
      Never share your Secret Recovery Phrase with anyone to avoid the risk of
      your funds being stolen.
    </li>
  </div>
</div>;
