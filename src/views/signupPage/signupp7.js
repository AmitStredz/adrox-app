import React from "react";
import Background from "./assets/account-background.png";
import Signup7 from "./signup7";
import Signup8 from "./signup8";
import Signup9 from "./signup9";
import Signup10 from "./signup10";
import Signup11 from "./signup11";
import { useState } from "react";

export default function Signupp7() {

  const [currentStep, setCurrentStep] = useState(7);

  const handleNextStep = () => {
    if (currentStep < 11) {
      setCurrentStep(currentStep + 1);
    }
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 7:
        return <Signup7 onNextStep={handleNextStep} />;
      case 8:
        return <Signup8 onNextStep={handleNextStep} />;
      case 9:
        return <Signup9 onNextStep={handleNextStep} />;
      case 10:
        return <Signup10 onNextStep={handleNextStep} />;
      case 11:
        return <Signup11 />;
      default:
        return null;
    }
  };

  return (
    <div className="flex bg-[#0f011a] h-full text-white font-nunito p-24 justify-evenly gap-10 overflow-hidden">
      <div className="w-[40%] items-center">
        <div className="text-center">
          <h1 className="font-700 text-[48px] text-[#C653FF]">
            Welcome Aboard
          </h1>
          <p className="font-300 text-[16px]">
            Just A Couple Of Clicks And We Start
          </p>
        </div>
        <div className="w-">
          <img src={Background}></img>
        </div>
      </div>

      <div className="z-10">{renderCurrentStep()}
      </div>

      <div className="absolute top-[-60px] right-0 ">
        <img src="/ellipse32352-wf1-700w.png" alt="hello"></img>
      </div>
      <div className="absolute  right-0 overflow-hidden">
        <img src="/external/ellipse32356-aujk-700w.png" alt="hello" className="bottom-0"></img>
      </div>
      <div className="absolute bottom-0 left-0 overflow-hidden">
        <img src="/external/ellipse22356-sa34-1000w.png" alt="hello" className="bottom-0"></img>
      </div>
    </div>
  );
}
