import React, { useContext, useState } from "react";
import { colorGameContext } from "../App";
import { useColor } from "../custom/useColor";

function ColorsResults() {
  const { sortColorResults } = useContext(colorGameContext);
  const { handleGetColor } = useColor();

  const sortedColorResults = sortColorResults.sort(
    (a, b) => a.result_ID - b.result_ID
  );


  return (
    <div className="relative flex px-6 my-10">
      <div className={`grid grid-cols-custom-101 gap-x-4`}>
        {sortedColorResults.map((c, index) => {

          return (
            <ul
              className={` relative px-1  rounded-xl`}
              key={index}
            >
              <div className="font-rubik flex flex-col items-center text-white font-black leading-4 relative top-3">
                <p className={`
                  ${c.result_spin === null ? "rounded-lg shadow-black shadow-inner bg-zinc-800" : ""}
                  ${c.result_spin === "x3" && "shadow-black shadow-inner bg-[#D92426] text-zinc-800"} 
                  ${c.result_spin === "x10" && "shadow-black shadow-inner bg-[#1795D2] text-zinc-800"} 
                  ${c.result_spin === "x20" && "shadow-black shadow-inner bg-[#FCCC0A] text-zinc-800"} 
                  ${c.result_spin === "x60" && "shadow-black shadow-inner bg-[#62B346] text-zinc-800"} 
                  ${c.result_spin === "x100" && "shadow-black shadow-inner bg-[#EF5F93] text-zinc-800"} 
                  ${c.result_spin === "Minor Jackpot" && "shadow-black shadow-inner bg-[#62B346] text-amber-400 primary-drop-shadow"} 
                  ${c.result_spin === "Major Jackpot" && "shadow-black shadow-inner bg-blue-500 text-amber-400 primary-drop-shadow"} 
                  ${c.result_spin === "Grand Jackpot" && "shadow-black shadow-inner bg-[#FFD700] text-amber-400 primary-drop-shadow"} 
                  shadow-black px-3 p-1 rounded-t-lg`}>
                  Round
                </p>
                <p className={`
                  ${c.result_spin === null ? "shadow-black shadow-inner bg-zinc-800" : ""}
                  ${c.result_spin === "x3" && " bg-[#D92426] text-zinc-800 rounded-b-md"} 
                  ${c.result_spin === "x10" && " bg-[#1795D2] text-zinc-800 rounded-b-md"} 
                  ${c.result_spin === "x20" && " bg-[#FCCC0A] text-zinc-800 rounded-b-md"} 
                  ${c.result_spin === "x60" && " bg-[#62B346] text-zinc-800 rounded-b-md"} 
                  ${c.result_spin === "x100" && " bg-[#EF5F93] text-zinc-800 rounded-b-md"} 
                  ${c.result_spin === "Minor Jackpot" && " bg-transparent text-amber-400 primary-drop-shadow rounded-b-md"} 
                  ${c.result_spin === "Major Jackpot" && " bg-transparent text-amber-400 primary-drop-shadow rounded-b-md"} 
                  ${c.result_spin === "Grand Jackpot" && " bg-transparent text-amber-400 primary-drop-shadow rounded-b-md"} 
                   shadow-black px-1 rounded-b-4`}>
                  {c.round_num}
                </p>
                {c.result_spin === "Major Jackpot" && <div className="absolute top-[60px] text-center space-y-6 text-[36px] primary-drop-shadow text-amber-400">
                  <p>M</p>
                  <p>A</p>
                  <p>J</p>
                  <p>O</p>
                  <p>R</p>
                </div>}
                {c.result_spin === "Minor Jackpot" && <div className="absolute top-[60px] text-center space-y-6 text-[36px] primary-drop-shadow text-amber-400">
                  <p>M</p>
                  <p>I</p>
                  <p>N</p>
                  <p>O</p>
                  <p>R</p>
                </div>}

                {c.result_spin === "Grand Jackpot" && <div className="absolute top-[60px] text-center space-y-6 text-[36px] primary-drop-shadow text-amber-400">
                  <p>G</p>
                  <p>R</p>
                  <p>A</p>
                  <p>N</p>
                  <p>D</p>
                </div>}
              </div>
              <div className={`
                ${c.result_spin === "x3" && " ring-[5px] ring-[#D92426] "}
                ${c.result_spin === "x10" && " ring-[5px] ring-[#1795D2] "}
                ${c.result_spin === "x20" && " ring-[5px] ring-[#FCCC0A] "}
                ${c.result_spin === "x60" && " ring-[5px] ring-[#62B346] "}
                ${c.result_spin === "x100" && " ring-[5px] ring-[#EF5F93] "}
                ${c.result_spin === "Major Jackpot" && "bg-gradient-to-b from-blue-500 via-blue-300 to-blue-500 major-drop-shadow"}
                ${c.result_spin === "Minor Jackpot" && "bg-gradient-to-b from-green-500 via-green-300 to-green-500 minor-drop-shadow"}
                ${c.result_spin === "Grand Jackpot" && "bg-gradient-to-b from-[#FFD700] via-green-300 to-[#FFD700] grand-drop-shadow"}
                bg-zinc-800 shadow-black shadow-inner p-4 space-y-3 rounded-xl`}>
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
              </div>
              <div className={` relative text-center font-rubik`}>
                <p className={`
                  ${c.result_spin === "x3" && "font-black text-zinc-800 bg-[#D92426] absolute right-[25%] px-3 rounded-b-md "}
                  ${c.result_spin === "x10" && "font-black text-zinc-800 bg-[#1795D2] absolute right-[20%] px-3 rounded-b-md "}
                  ${c.result_spin === "x20" && "font-black text-zinc-800 bg-[#FCCC0A] absolute right-[20%] px-3 rounded-b-md "}
                  ${c.result_spin === "x60" && "font-black text-zinc-800 bg-[#62B346] absolute right-[20%] px-3 rounded-b-md "}
                  ${c.result_spin === "x100" && "font-black text-zinc-800 bg-[#EF5F93] absolute right-[15%] px-3 rounded-b-md "}
                  `}>{c.result_spin === "Minor Jackpot" || c.result_spin === "Major Jackpot" || c.result_spin === "Grand Jackpot" ? "" : c.result_spin}</p>
                {c.result_spin === "Minor Jackpot" &&
                  <div>
                    <p className="font-black text-sm rounded-b-md bg-transparent -bottom-6 text-amber-400 primary-drop-shadow absolute left-[15%] px-1 minor-default-drop-shadow">
                      Jackpot
                    </p>
                  </div>
                }
                {c.result_spin === "Major Jackpot" &&
                  <div>
                    <p className="font-black text-sm rounded-b-md bg-transparent -bottom-6 text-amber-400 primary-drop-shadow absolute left-[15%] px-1 major-default-drop-shadow">
                      Jackpot
                    </p>
                  </div>
                }
                {c.result_spin === "Grand Jackpot" &&
                  <div>
                    <p className="font-black text-sm rounded-b-md bg-transparent -bottom-6 text-amber-400 primary-drop-shadow absolute left-[15%] px-1 grand-default-drop-shadow">
                      Jackpot
                    </p>
                  </div>
                }
              </div>
            </ul>
          );
        })}
      </div>
    </div >
  );
}

export default ColorsResults;
