import React, { useState } from "react";
import { jackpotPrizesData } from "../data/jackpotPrizesData";

function PrizesSection() {
  const [jpData, setJpData] = useState(jackpotPrizesData);
  return (
    <div className="flex flex-col justify-center font-rubik font-bold m-4 rounded-xl p-6">
      {jpData.map((j) => {
        // j.jpName === "GRAND JACKPOT" &&
        //         "bg-gradient-to-b from-golden-yellow via-yellow-500 to-yellow-700"

        return (
          <div
            key={j.jpId}
            className={`
${j.jpName === "GRAND JACKPOT" && ""}
${j.jpName === "MAJOR JACKPOT" && ""}
${j.jpName === "MINOR JACKPOT" && ""}
text-center my-6  ring-4  rounded-xl shadow-inner shadow-black ring-black border-[7px] border-golden-yellow bg-[#910723] `}
          >
            <p
              className={`text-[36px]  ${
                j.jpName === "GRAND JACKPOT" && "text-golden-yellow jp-title"
              }
              ${j.jpName === "MAJOR JACKPOT" && "text-golden-yellow jp-title"}

              ${j.jpName === "MINOR JACKPOT" && "text-golden-yellow jp-title"}
              `}
            >
              {j.jpName}
            </p>
            <p
              className={` text-[46px] text-zinc-700 rounded-b-lg text-gradient-grand-jackpot`}
            >
              ₱ {j.jpAmount}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default PrizesSection;
