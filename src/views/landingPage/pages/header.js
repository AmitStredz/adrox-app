import React from 'react';

import img1 from "./assets/adrox-logo.png";
// import { useNavigate } from 'react-router-dom';
import { useHistory, useNavigate } from 'react-router-dom';

export default function Header() {

  const history = useNavigate();

  const handleButtonClick = () => {
      history('/signup01');
  };
  

  return (
    <div className=" w-full flex items-center justify-between p-5 px-28 fixed bg-blur">
      <div className="w-56">
        <img src={img1} alt="img1" />
      </div>
      <div className="flex gap-10 items-center">
        <div className="">
          <input
            type="text"
            placeholder="Search"
            className="bg-blur border rounded-2xl w-96 p-2 px-5"
          />
        </div>
        <a onClick={handleButtonClick} className=" p-2 px-8 rounded-2xl bg-gradient-to-r from-[#4F0F81] to-[#A702FA] cursor-pointer">Sign Up</a>
        <a className="border p-2 px-8 rounded-2xl cursor-pointer">Log in</a>
      </div>
    </div>
  );
}
