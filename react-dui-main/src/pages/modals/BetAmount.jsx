import React, { useContext, useState } from "react";
import Keypad from "../../custom/Keypad";

import BetConfirmation from "./BetConfirmation";
import { dealerContext } from "../dealerUI/DealerPage";
import ColorInput from "./ColorInput";
import PrimaryLabel from "../../assets/cssCustom/PrimaryLabel";

function BetAmount() {
  const {
    amount,
    colorBet,
    totalAmount,
    OpenModalConfirmationTo,
    isResetAmountEnable,
    isBetAmountEmpty,
    setIsColorBetEmpty,
    setIsBetAmountEmpty,
    chipsCurrentID,
    handleResetColorBetAmount,
    handleRemoveSelectBetAmount,
  } = useContext(dealerContext);

  const handleSubmitAmount = () => {
    if (amount === 0) {
      setIsBetAmountEmpty(true);
      return;
    } else if (colorBet.length === 0) {
      setIsColorBetEmpty(true);
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
            className=" shadow-inner shadow-black border-[5px] border-red-600 ring-4 ring-zinc-700 w-full bg-red-600 rounded-xl py-2"
          >
            <PrimaryLabel>Bet</PrimaryLabel>
          </button>
          <button
            onClick={handleRemoveSelectBetAmount}
            disabled={chipsCurrentID === null}
            className={`${
              chipsCurrentID === null
                ? "border-zinc-400 bg-zinc-400"
                : " border-orange-400 bg-orange-400"
            } active:scale-95 transition-all font-black text-md px-2 shadow-inner shadow-black border-[5px] ring-4 ring-zinc-700  rounded-xl text-white text-drop-shadow`}
          >
            <p>REMOVE</p>
          </button>
          <button
            onClick={() => handleResetColorBetAmount()}
            disabled={!isResetAmountEnable}
            className={`${
              isResetAmountEnable
                ? " border-yellow-400 bg-yellow-400"
                : "border-zinc-400 bg-zinc-400"
            } active:scale-95 transition-all duration-75 font-black text-white primary-drop-shadow text-3xl px-4 p-2 rounded-xl shadow-inner shadow-black border-[5px]  ring-4 ring-zinc-700`}
          >
            <svg
              className={`${
                isResetAmountEnable ? "text-white" : "text-zinc-200"
              } fill-current `}
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              height="36"
              width="36"
            >
              <path d="m23,17.187v4.52c0,.705-.852,1.058-1.35.559l-1.491-1.491c-2.2,2.042-5.103,3.225-8.158,3.225C6.066,24,.868,19.577.029,13.712c-.117-.82.453-1.58,1.273-1.697.816-.122,1.579.453,1.697,1.272.628,4.397,4.55,7.712,9,7.712,2.254,0,4.4-.856,6.041-2.342l-1.308-1.308c-.498-.498-.145-1.35.559-1.35h4.52c.656,0,1.187.531,1.187,1.187ZM1,6.813V2.293c0-.705.852-1.058,1.35-.559l1.491,1.491C6.042,1.183,8.945,0,12,0c5.934,0,11.132,4.423,11.971,10.288.117.82-.453,1.58-1.273,1.697-.816.122-1.579-.453-1.697-1.272-.628-4.397-4.55-7.712-9-7.712-2.254,0-4.4.856-6.041,2.342l1.308,1.308c.498.498.145,1.35-.559,1.35H2.187c-.656,0-1.187-.531-1.187-1.187Z" />
            </svg>
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
