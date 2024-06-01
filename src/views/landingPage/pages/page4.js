import React from "react";
import grid1 from "./assets/grid1.png";
import grid2 from "./assets/grid2.png";
import grid3 from "./assets/grid3.png";
import grid4 from "./assets/grid4.png";

export default function page4() {
  return (
    <div>
      <div className="mt-52">
        {/* Heading */}
        <div className="text-center text-[56px] font-800 leading-14">
          <h1>Explore Adrox</h1>
          <h1 className="text-[#C653FF]">Products & Services</h1>
        </div>

        {/* Grid container */}
        <div className="flex justify-center p-24">
          <div className="grid grid-cols-2 gap-24">
            {/* Grid 1 */}
            <div className="bg-yellow-800 w-[22rem] rounded-2xl p-9 px-16 items-center flex flex-col gap-4">
              <img src={grid1} alt="" className="object-cover w-24" />
              <div>
                <h1 className="font-700 text-[36px]">Spot Trading</h1>
                <p className="font-400 text-[16px]">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum
                </p>
              </div>
              <div className="text-center text-3xl">
                <i className="ri-arrow-right-s-line border rounded-full cursor-pointer"></i>
              </div>
            </div>

            {/* Grid 1 */}
            <div className="bg-yellow-800 w-[22rem] rounded-2xl p-9 px-16 items-center flex flex-col gap-4">
              <img src={grid2} alt="" className="object-cover w-24" />
              <div>
                <h1 className="font-700 text-[36px]">Buy Crypto</h1>
                <p className="font-400 text-[16px]">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum
                </p>
              </div>
              <div className="text-center text-3xl">
                <i className="ri-arrow-right-s-line border rounded-full cursor-pointer"></i>
              </div>
            </div>
            {/* Grid 1 */}
            <div className="bg-yellow-800 w-[22rem] rounded-2xl p-9 px-16 items-center flex flex-col gap-4">
              <img src={grid3} alt="" className="object-cover w-24" />
              <div>
                <h1 className="font-700 text-[36px]">Trading Bot</h1>
                <p className="font-400 text-[16px]">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum
                </p>
              </div>
              <div className="text-center text-3xl">
                <i className="ri-arrow-right-s-line border rounded-full cursor-pointer"></i>
              </div>
            </div>
            {/* Grid 1 */}
            <div className="bg-yellow-800 w-[22rem] rounded-2xl p-9 px-16 items-center flex flex-col gap-4">
              <img src={grid4} alt="" className="object-cover w-24" />
              <div>
                <h1 className="font-700 text-[36px]">Adrox Earn</h1>
                <p className="font-400 text-[16px]">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum
                </p>
              </div>
              <div className="text-center text-3xl">
                <i className="ri-arrow-right-s-line border rounded-full cursor-pointer"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
