import React, { useContext, useState } from "react";
import { colorGameContext } from "../App";
import { useColor } from "../custom/useColor";

function SideContent() {
  const { colorResults } = useContext(colorGameContext);
  const { handleGetColor } = useColor();

  return (
    <div className=" relative flex flex-col justify-between items-center">
      <div className="z-20">
        <p className=" relative -bottom-[20px] font-rubik bg-yellow-300 text-3xl px-4 rounded-xl shadow-inner ring-4 ring-black shadow-black border-[5px] border-yellow-300  text-center  text-white z-30 font-black primary-drop-shadow">
          RESULTS
        </p>
      </div>
      <div className="h-[calc(85vh-50px)] py-5 w-[440px] overflow-y-clip bg-zinc-700 rounded-2xl border-[5px] border-zinc-700 shadow-inner shadow-black ring-[5px] ring-black">
        {colorResults.map((c, index) => {
          return (
            <ul
              className="flex my-6 space-x-5 relative w-[440px] justify-center"
              key={index}
            >
              {/* <span className="absolute z-20 font-bold text-drop-shadow text-white text-[36px] -right-[15px] -top-[30px]">
              3x
            </span> */}
              <li
                className={` flex justify-center items-center rounded-3xl ring-4 bg-white ring-black p-1 `}
              >
                <div
                  className={`${handleGetColor(
                    c.result_firstColor
                  )} h-[100px] w-[100px] shadow-inner shadow-black rounded-full`}
                ></div>
              </li>

              <li
                className={` flex justify-center items-center rounded-3xl ring-4 bg-white ring-black p-1 `}
              >
                <div
                  className={`${handleGetColor(
                    c.result_secondColor
                  )} h-[100px] w-[100px]  shadow-inner shadow-black rounded-full`}
                ></div>
              </li>

              <li
                className={` flex justify-center items-center rounded-3xl ring-4 bg-white ring-black p-1 `}
              >
                <div
                  className={`${handleGetColor(
                    c.result_thirdColor
                  )} h-[100px] w-[100px]  shadow-inner shadow-black rounded-full`}
                ></div>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default SideContent;
