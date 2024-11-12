import React, { useContext } from "react";
import { colorGameContext } from "../App";
import { useColor } from "../custom/useColor";

function ColorsResults() {
  const { sortColorResults } = useContext(colorGameContext);
  const { handleGetColor } = useColor();

  const sortedColorResults = sortColorResults.sort(
    (a, b) => a.result_ID - b.result_ID
  );

  console.log(sortedColorResults)

  return (
    <div className="relative flex p-6 mt-4">
      <div className={`grid grid-cols-custom-101 gap-x-4`}>
        {sortedColorResults.map((c, index) => {
          return (
            <ul
              className=" shadow-black shadow-inner bg-zinc-800 p-3 rounded-xl space-y-4"
              key={index}
            >
              <li
                className={`flex justify-center items-center bg-white rounded-2xl ring-[2px] p-[3px] ring-black  `}
              >
                <div
                  className={`${handleGetColor(
                    c.result_firstColor
                  )} h-[55px] w-[55px] shadow-inner shadow-black rounded-full`}
                ></div>
              </li>
              <li
                className={` flex justify-center items-center bg-white rounded-2xl ring-[2px] p-[3px] ring-black  `}
              >
                <div
                  className={`${handleGetColor(
                    c.result_secondColor
                  )} h-[55px] w-[55px] shadow-inner shadow-black rounded-full`}
                ></div>
              </li>
              <li
                className={`flex  justify-center items-center bg-white rounded-2xl ring-[2px] p-[3px] ring-black `}
              >
                <div
                  className={`${handleGetColor(
                    c.result_thirdColor
                  )} h-[55px] w-[55px] shadow-inner shadow-black rounded-full`}
                ></div>
              </li>
              <div className="font-rubik flex flex-col items-center -mx-2 text-white absolute -top-6 z-10 font-black leading-4">
                <p className="bg-zinc-800 shadow-inner shadow-black px-3 p-1 rounded-lg">
                  Round
                </p>
                <p className="bg-zinc-800 shadow-inner shadow-black px-1 rounded-b-4">
                  {c.round_num}
                </p>
              </div>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default ColorsResults;
