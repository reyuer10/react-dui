import React, { useContext, useState } from "react";
import { colorGameContext } from "../App";
import { colorData } from "../data/colorData";

function SideContent() {
  const { colorResults } = useContext(colorGameContext);
  const [colorGuide, setColorGuide] = useState(colorData);

  const handleGetColor = (color) => {
    const findColor = colorGuide.find((c) => c.colorName === color);

    return findColor ? findColor.colorBackground : null;
  };

  return (
    // 
    <div className=" relative my-8 flex flex-col justify-between ">
      <div className="w-full justify-center flex ">
        <p className="font-rubik bg-yellow-300 text-3xl px-4 rounded-xl shadow-inner ring-4 ring-black shadow-black border-[5px] border-yellow-300  text-center absolute -top-[30px] text-white z-20 font-black primary-drop-shadow">
          RESULTS
        </p>
        <div className="h-[calc(85vh-50px)] overflow-y-hidden p-4 bg-zinc-700 rounded-2xl border-[5px] border-zinc-700 shadow-inner shadow-black ring-[5px] ring-black">
          {colorResults.map((c, index) => {
            return (
              <ul className="flex my-6 space-x-5" key={index}>
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
    </div>
  );
}

export default SideContent;
