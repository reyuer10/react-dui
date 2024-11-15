import React, { useContext, useState } from "react";
import InputResults from "./InputResults";
import { dealerContext } from "../dealerUI/DealerPage";

function BetConfirmation() {
  const { totalAmount, OpenModalTo, closeModalConfirmaton } =
    useContext(dealerContext);

  const handleSubmitBetAmount = () => {
    closeModalConfirmaton();
    OpenModalTo(<InputResults />);
  };

  return (
    <div className="fixed font-rubik inset-0 z-30 flex justify-center items-center flex-col">
      <div className="bg-zinc-700 w-[600px] text-white space-y-12 p-4 rounded-2xl shadow-inner shadow-black border-[5px] border-zinc-700 ring-4 ring-black">
        <div className="text-center font-black chips-drop-shadow space-y-6">
          <p className="text-2xl primary-drop-shadow">BET AMOUNT</p>
          <p className="text-[48px] text-yellow-400 primary-drop-shadow">{totalAmount}</p>
        </div>
        <div>
          <p className="px-4 font-normal text-xl text-slate-300 primary-drop-shadow text-center">
            Please, check the bet amount before starting the game.
          </p>
        </div>
        <div className="space-x-6 text-center">
          <button
            onClick={closeModalConfirmaton}
            className="primary-drop-shadow text-[28px] w-[180px] bg-slate-500 font-black px-4 py-2 rounded-xl shadow-inner shadow-black border-slate-500 border-[5px] ring-[5px] ring-black"
          >
            CANCEL
          </button>
          <button
            onClick={handleSubmitBetAmount}
            className="primary-drop-shadow text-[28px] w-[180px] bg-blue-500 font-black px-4 py-2 rounded-xl shadow-inner shadow-black border-blue-500 border-[5px] ring-[5px] ring-black"
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}

export default BetConfirmation;
