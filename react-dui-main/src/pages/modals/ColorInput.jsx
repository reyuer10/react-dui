import React, { useContext, useState } from "react";
import { dealerContext } from "../dealerUI/DealerPage";

function ColorInput() {
  const {
    colorBet,
    handleIncrementBetAmount,
    newColorData,
    handleOpenEnableColorBetAmount,
  } = useContext(dealerContext);

  return (
    <div className="px-4 ">
      <div className="bg-zinc-700 h-[470px] flex justify-center  items-center shadow-inner shadow-black border-4 space-y-4 border-zinc-700 rounded-3xl ring-4 ring-black p-4">
        <div className="relative grid grid-cols-3 gap-y-14 gap-x-7 mx-10">
          {newColorData.map((c, index) => {
            return (
              <div key={index}>
                <ul
                  className={`${
                    colorBet.some((b) => b.colorBetId === c.colorId) &&
                    "opacity-50"
                  } relative flex justify-center items-center bg-gray-300 shadow-black ring-[4px] ring-black shadow-lg h-[140px] w-[140px] rounded-[24px]`}
                  key={c.colorId}
                >
                  <button
                    onClick={() => {
                      handleIncrementBetAmount(c.colorId);
                      handleOpenEnableColorBetAmount(c.colorId);
                    }}
                    className={`h-[135px] w-[135px] text-xl disabled: flex justify-center items-center font-bold text-white text-drop-shadow rounded-[24px] shadow-black shadow-inner  ${c.colorBackground}`}
                  >
                    <div className="absolute text-white text-2xl font-black text-drop-shadow">
                      {c.colorAmount === 0 ? "" : c.colorAmount}
                    </div>
                  </button>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ColorInput;
