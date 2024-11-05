import React, { useContext } from "react";
import { colorGameContext } from "../App";
import { useColor } from "../custom/useColor";

function ColorsResults() {
  const { sortColorResults } = useContext(colorGameContext);
  const { handleGetColor } = useColor();

  const sortedColorResults = sortColorResults.sort(
    (a, b) => a.result_ID - b.result_ID
  );

  return (
    <div className="relative flex p-4">
      <div className={`grid grid-cols-custom-101 gap-x-4`}>
        {sortedColorResults.map((c, index) => {
          return (
            <ul
              className=" shadow-black shadow-inner bg-zinc-900 p-3 rounded-xl space-y-4 "
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
                className={`flex justify-center items-center bg-white rounded-2xl ring-[2px] p-[3px] ring-black `}
              >
                <div
                  className={`${handleGetColor(
                    c.result_thirdColor
                  )} h-[55px] w-[55px] shadow-inner shadow-black rounded-full`}
                ></div>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default ColorsResults;
