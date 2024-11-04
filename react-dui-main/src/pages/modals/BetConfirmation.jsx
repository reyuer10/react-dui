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
      <div className="bg-zinc-700 text-white space-y-8 p-4 rounded-2xl shadow-inner shadow-black border-[5px] border-zinc-700 ring-4 ring-black">
        <div className="text-center font-black chips-drop-shadow space-y-6">
          <p className="text-2xl">Bet amount:</p>
          <p className="text-[42px] text-yellow-400">{totalAmount}</p>
        </div>
        <div>
          <p className=" px-4 font-normal text-lg  text-slate-300">
            Please, check the bet amount before starting the game.
          </p>
        </div>
        <div className="space-x-4 text-right">
          <button
            onClick={closeModalConfirmaton}
            className="bg-slate-500 font-bold px-4 py-2 rounded-lg shadow-inner shadow-black border-slate-500 border-2 ring-4 ring-black"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmitBetAmount}
            className="bg-blue-500 font-bold px-4 py-2 rounded-lg shadow-inner shadow-black border-blue-500 border-2 ring-4 ring-black"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default BetConfirmation;
