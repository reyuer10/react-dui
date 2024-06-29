import React, { useState } from "react";
import ResultInput from "../components/ResultInput";
import ColorInput from "../components/ColorInput";
import { colorData } from "../data/colorData";

function ResultsInputModal({ isModalOpen }) {
  const [color, setColor] = useState(colorData);
  if (!isModalOpen) return false;
  return (
    <div className="absolute inset-0 flex justify-center items-center ">
      <div className=" bg-slate-600 p-6 rounded-lg shadow-lg shadow-green-900 flex flex-col items-center ring-8 ring-black">
        <div className=" font-rubik text-[28px] font-bold text-lime-500">
          <p className=" text-center">SELECT COLOR</p>
        </div>
        <div>
          <ResultInput />
        </div>
        <div className="grid grid-cols-3 gap-7 my-6 bg-blue-500 p-6 border-[7px] border-cyan-300 rounded-xl shadow-inner shadow-gray-700">
          {color.map((d) => {
            return <ColorInput d={d} key={d.colorId} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default ResultsInputModal;
