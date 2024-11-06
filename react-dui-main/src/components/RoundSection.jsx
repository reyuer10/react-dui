import React, { useContext } from "react";
import { colorGameContext } from "../App";

function RoundSection() {
  const { loading, roundString, round } = useContext(colorGameContext);
  return (
    <div className=" ring-[5px] ring-black font-rubik flex items-center justify-around  my-4 from-yellow-300 via-yellow-400 to-orange-400 bg-gradient-to-bl border-[7px] border-yellow-300  shadow-inner shadow-orange-700 rounded-xl py-2">
      <div>
        <p className="text-lime-800 text-[36px] font-bold ">ROUND</p>
      </div>
      <div className="text-center">
        <p className=" text-[82px] font-bold  shadow-transparent text-lime-700">
        {!round ? "0" : round}
        </p>
      </div>
    </div>
  );
}

export default RoundSection;
