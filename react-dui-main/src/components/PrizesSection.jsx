import React, { useContext, useState } from "react";
import { jackpotPrizesData } from "../data/jackpotPrizesData";
import { colorGameContext } from "../App";

function PrizesSection() {
  const [jpData, setJpData] = useState(jackpotPrizesData);
  const { jackpotPrizes } = useContext(colorGameContext);

  return (
    <div className="flex flex-col justify-center font-rubik font-black m-4 rounded-xl p-6 ">
      {jackpotPrizes.map((j, index) => {
    console.log(j)
        return (
          <ul key={index} className={`text-center  `}>
            <div
              className={`text-[46px] rounded-b-lg my-6 ring-4 w-[500px] rounded-xl shadow-inner shadow-black ring-black border-[7px] border-golden-yellow bg-[#910723 `}
            >
              <p>GRAND JACKPOT</p>
              <p className="bg-gradient-to-r from-yellow-300 via-amber-400 to-amber-200 bg-clip-text text-transparent animate-gradient bg-[length:200%_100%]">
                ₱ {j.current_minor}
              </p>
            </div>

            <div
              className={` text-[46px] rounded-b-lg  my-6 ring-4  rounded-xl shadow-inner shadow-black ring-black border-[7px] border-golden-yellow bg-[#910723`}
            >
              <p>MAJOR JACKPOT</p>
              <p className="bg-gradient-to-r from-yellow-300 via-amber-400 to-amber-200 bg-clip-text text-transparent animate-gradient bg-[length:200%_100%]">
                ₱ {j.current_major}
              </p>
            </div>

            <div
              className={` text-[46px] rounded-b-lg  my-6 ring-4  rounded-xl shadow-inner shadow-black ring-black border-[7px] border-golden-yellow bg-[#910723`}
            >
              <p>MINOR JACKPOT</p>
              <p className="bg-gradient-to-r from-yellow-300 via-amber-400 to-amber-200 bg-clip-text text-transparent animate-gradient bg-[length:200%_100%]">
                ₱ {j.current_grand}
              </p>
            </div>
          </ul>
        );
      })}
    </div>
  );
}

export default PrizesSection;
