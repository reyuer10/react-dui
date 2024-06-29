import React, { useState } from "react";
import { jackpotPrizesData } from "../data/jackpotPrizesData";

function PrizesSection() {
  const [jpData, setJpData] = useState(jackpotPrizesData);
  return (
    <div className="flex flex-col justify-center font-rubik font-bold m-4 rounded-xl p-6">
      {jpData.map((j) => {
        return (
          <div key={j.jpId} className="text-center ">
            <p className={`text-[36px] jp-title-border ${j.jpName === "GRAND JACKPOT" ? "text-golden-yellow" : "text-white"}`}>{j.jpName}</p>
            <p className="text-[24px]">{j.jpAmount}</p>
          </div>
        );
      })}
    </div>
  );
}

export default PrizesSection;
