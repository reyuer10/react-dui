import React, { useContext, useState } from "react";
import PrimaryLabel from "../../assets/cssCustom/PrimaryLabel";
import { colorData } from "../../data/colorData";
import { dealerContext } from "../dealerUI/DealerPage";

function ColorInput() {
  const {
    colorBet,
    handleGetColorBet,
    handleDeleteColorGet,
    isColorBetEmpty,
    isBetAmountEmpty,
  } = useContext(dealerContext);

  return (
    <div className="px-4">
      <div className="bg-orange-500 shadow-inner shadow-black border-4 space-y-4 border-orange-500 rounded-3xl ring-4 ring-black p-4">
        <div className="relative grid grid-cols-3 gap-8 mx-10">
          {colorData.map((c) => {
            return (
              <ul
                className={`${
                  colorBet.some((b) => b.colorBetId === c.colorId) &&
                  "opacity-50"
                }  flex justify-center items-center bg-gray-300 shadow-black ring-[3px] ring-black shadow-lg h-[80px] w-[80px] rounded-[24px]`}
                key={c.colorId}
              >
                <button
                  onClick={() =>
                    handleGetColorBet(c.colorId, c.colorName, c.colorBackground)
                  }
                  disabled={colorBet.some((b) => b.colorBetId === c.colorId)}
                  className={`  h-[75px] w-[75px] disabled: flex justify-center items-center font-bold text-white text-drop-shadow rounded-full shadow-black shadow-inner  ${c.colorBackground}`}
                >
                  {c.colorName}
                </button>
              </ul>
            );
          })}
        </div>
        <div
          className={`${
            !isColorBetEmpty ? "border-zinc-700" : "border-red-500"
          } transition-all relative grid grid-cols-3 gap-6 px-10 shadow-inner bg-zinc-700 shadow-black border-4  h-[220px] rounded-xl ring-4 ring-black p-4`}
        >
          <div className="absolute right-[1.5rem] bottom-[4.5rem] z-10">
            <p
              className={`${
                !isColorBetEmpty ? "text-white" : "text-red-400"
              }  text-[42px] font-black opacity-50`}
            >
              SELECT COLOR
            </p>
          </div>
          {colorBet.map((b, index) => {
            return (
              <ul
                className=" flex z-20 justify-center items-center bg-gray-300 shadow-black ring-[3px] ring-black shadow-lg h-[80px] w-[80px] rounded-[24px]"
                key={index}
              >
                <button
                  onClick={() => handleDeleteColorGet(b.colorBetId)}
                  className={`${b.colorBetBackground} h-[75px] w-[75px] flex justify-center items-center font-bold text-white text-drop-shadow rounded-full shadow-black shadow-inner  ${b.colorBackground}`}
                >
                  {b.colorBetName}
                </button>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ColorInput;
