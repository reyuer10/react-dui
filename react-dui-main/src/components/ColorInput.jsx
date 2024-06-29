import React from "react";

function ColorInput({ d }) {
  return (
    <div
      className={`h-[75px] w-[75px] shadow-black shadow-lg ${d.colorBackground} rounded-xl ring-4 ring-black`}
    ></div>
  );
}

export default ColorInput;
