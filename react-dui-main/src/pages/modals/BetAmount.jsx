import React, { useContext, useState } from "react";
import Keypad from "../../custom/Keypad";

import BetConfirmation from "./BetConfirmation";
import { dealerContext } from "../dealerUI/DealerPage";
import ColorInput from "./ColorInput";
import PrimaryLabel from "../../assets/cssCustom/PrimaryLabel";

function BetAmount() {
  const {
    totalAmount,
    OpenModalConfirmationTo,
    isResetAmountEnable,
    isBetAmountEmpty,
    setIsBetAmountEmpty,
    chipsCurrentID,
    handleResetColorBetAmount,
    handleRemoveSelectBetAmount,
    colorAmount,
  } = useContext(dealerContext);

  const handleSubmitAmount = () => {
    if (totalAmount === 0) {
      setIsBetAmountEmpty(true);
      return;
    }
    OpenModalConfirmationTo(<BetConfirmation />);
  };

  return (
    <div className="flex font-rubik border-[6px] bg-yellow-500  border-zinc-800 rounded-3xl p-4 shadow-md shadow-black">
      <div className="space-y-4">
        <div className="flex space-x-4">
          <input
            value={totalAmount}
            disabled
            type="number"
            className={`${
              isBetAmountEmpty ? "border-red-500" : "border-zinc-700"
            } bg-zinc-700 text-3xl p-2 font-black text-white text-center outline-none shadow-inner shadow-black border-[5px]  ring-4 ring-black rounded-xl `}
          />
        </div>
        <div className="flex justify-center bg-blue-500 shadow-inner shadow-black py-8 border-4 border-blue-500 ring-4 ring-zinc-700 rounded-2xl">
          <Keypad />
        </div>
        <div className="flex space-x-4">
          <button
            onClick={handleSubmitAmount}
            className="shadow-inner shadow-black border-[5px] border-red-600 ring-4 ring-zinc-700 w-full bg-red-600 rounded-xl py-2"
          >
            <PrimaryLabel>BET</PrimaryLabel>
          </button>
          <button
            onClick={handleRemoveSelectBetAmount}
            disabled={chipsCurrentID === null}
            className={`${
              chipsCurrentID === null
                ? "border-zinc-400 bg-zinc-400"
                : " border-orange-400 bg-orange-400"
            } active:scale-95 transition-all font-black text-xl px-2 shadow-inner shadow-black border-[5px] ring-4 ring-zinc-700  rounded-xl text-white text-drop-shadow`}
          >
            REMOVE
          </button>
          <button
            onClick={() => handleResetColorBetAmount()}
            disabled={!isResetAmountEnable}
            className={`${
              isResetAmountEnable && colorAmount !== 0
                ? " border-yellow-400 bg-yellow-400"
                : "border-zinc-400 bg-zinc-400"
            } active:scale-95 transition-all duration-75 font-black text-white primary-drop-shadow text-xl px-4 p-2 rounded-xl shadow-inner shadow-black border-[5px]  ring-4 ring-zinc-700`}
          >
            RESET
          </button>
        </div>
      </div>
      <div>
        <ColorInput />
      </div>
    </div>
  );
}

export default BetAmount;
