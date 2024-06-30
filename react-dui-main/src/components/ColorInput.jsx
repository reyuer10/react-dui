import React from "react";

function ColorInput({ d }) {
  return (
    <div
      className={`h-[75px] w-[75px] flex justify-center items-center font-modak text-lg font-[900] shadow-black shadow-lg ${d.colorBackground}  rounded-xl ring-4 ring-black`}
    >
      {d.colorName}
    </div>
  );
}

export default ColorInput;
