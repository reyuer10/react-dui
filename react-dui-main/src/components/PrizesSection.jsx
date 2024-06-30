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
${
  j.jpName === "GRAND JACKPOT" &&
  "from-amber-600 via-golden-yellow to-amber-600 ring-amber-600"
}
${j.jpName === "MAJOR JACKPOT" && "from-red-800 via-golden-yellow to-red-800 ring-red-600"}
${
  j.jpName === "MINOR JACKPOT" &&
  "from-emerald-800 via-golden-yellow to-emerald-800 ring-emerald-600"
}
text-center my-6  ring-4  rounded-xl shadow-black shadow-lg  bg-gradient-to-r border-[7px] border-yellow-300 `}
          >
            <p
              className={`text-[36px]  ${
                j.jpName === "GRAND JACKPOT"
                  ? "text-gradient-title-grand-jackpot animate-pulse"
                  : "text-white"
              }
              ${
                j.jpName === "MAJOR JACKPOT" &&
                "text-gradient-title-major-jackpot animate-pulse"
              }

              ${
                j.jpName === "MINOR JACKPOT" &&
                "text-gradient-title-minor-jackpot animate-pulse"
              }
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
