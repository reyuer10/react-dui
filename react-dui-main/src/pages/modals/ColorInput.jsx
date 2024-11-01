import React, { useContext, useState } from "react";
import { dealerContext } from "../dealerUI/DealerPage";
import chips from "../../assets/pictures/chips-1000.png";

function ColorInput() {
  const {
    colorBet,
    newColorData,
    colorBetAmountID,
    handleIncrementBetAmount,
    handleOpenEnableColorBetAmount,
  } = useContext(dealerContext);

  return (
    <div className="ml-4">
      <div className="bg-zinc-700 h-[470px] flex justify-center items-center shadow-inner shadow-black border-4 space-y-4 border-zinc-700 rounded-3xl ring-4 ring-black p-4">
        <div></div>
        <div className="relative grid grid-cols-3 gap-y-14 gap-x-7 mx-10">
          {newColorData.map((c, index) => {
            return (
              <div key={index}>
                <ul
                  className={`transition-all duration-75 ${
                    colorBetAmountID === c.colorId
                      ? "  scale-95 ring-zinc-800"
                      : "ring-black"
                  } ${
                    colorBet.some((b) => b.colorBetId === c.colorId) &&
                    "opacity-50"
                  } relative flex justify-center items-center bg-gray-300 shadow-black ring-[4px] shadow-lg h-[140px] w-[140px] rounded-[24px]`}
                  key={c.colorId}
                >
                  <button
                    onClick={() => {
                      handleIncrementBetAmount(c.colorId);
                      handleOpenEnableColorBetAmount(c.colorId);
                    }}
                    className={`${
                      colorBetAmountID === c.colorId
                        ? " bg-zinc-400"
                        : c.colorBackground
                    } h-[135px] w-[135px] text-xl disabled: flex flex-col justify-center items-center font-bold text-white text-drop-shadow rounded-[24px] shadow-black shadow-inner`}
                  >
                    {c.colorAmountImg === null ? null : (
                      <img
                        src={c.colorAmountImg}
                        alt="chips-image"
                        className="h-[80px]"
                      />
                    )}
                    <div className=" text-white text-2xl font-black text-drop-shadow">
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
