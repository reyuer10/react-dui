import React, { useContext } from "react";
import { dealerContext } from "../pages/dealerUI/DealerPage";
import { betAmountData } from "../data/betAmountData";
import casinoPlus from "../assets/pictures/casino-logo.png";

function Keypad() {
  const { handleSelectBetAmount, chipsCurrentID } = useContext(dealerContext);
  return (
    <div className="grid grid-cols-3 gap-y-6 gap-x-8">
      {betAmountData.map((b) => {
        return (
          <button
            onClick={() => handleSelectBetAmount(b.amountBet, b.amountID)}
            className={`${
              b.amountID === chipsCurrentID ? " opacity-50" : ""
            } border-[10px] outline-zinc-700 border-dashed outline  active:scale-95 transition-all duration-75 ${
              b.amountStyle
            } p-4 font-black rounded-full w-[110px] h-[110px] text-md text-white shadow-md shadow-black chips-drop-shadow text-center `}
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
