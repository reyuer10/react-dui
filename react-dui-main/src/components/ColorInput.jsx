import React from "react";

function ColorInput({ d }) {
  return (
    <div className="flex justify-center items-center bg-gray-300 shadow-black ring-[3px] ring-black shadow-lg h-[80px] w-[80px] rounded-[24px]">
      <div
        className={`h-[75px] w-[75px] rounded-full shadow-black shadow-inner ${d.colorBackground}`}
      ></div>
    </div>
  );
}

export default ColorInput;
