import React from "react";
import { betAmountData } from "../data/betAmountData";
import casinoPlus from "../assets/pictures/casino-logo.png";

function Keypad({ handleClickAmount }) {
  return (
    <div className="grid grid-cols-3 gap-y-6 gap-x-14">
      {betAmountData.map((b) => {
        return (
          <button
            onClick={() => handleClickAmount(b.amountBet)}
            className={` border-[10px] border-dashed outline outline-zinc-700 active:scale-95 transition-all duration-75 ${b.amountStyle} p-4 font-black rounded-full w-[110px] h-[110px] text-md text-white shadow-md shadow-black chips-drop-shadow text-center `}
            key={b.amountID}
          >
            <img src={casinoPlus} alt="casinoLogo" />
            {b.amountName}
          </button>
        );
      })}
    </div>
  );
}

export default Keypad;
