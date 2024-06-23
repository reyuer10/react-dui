import React from "react";

function ColorInput({ d }) {
  return (
    <div
      className={`h-[75px] w-[75px] shadow-gray-700 shadow-lg ${d.colorBackground} rounded-xl`}
    ></div>
  );
}

export default ColorInput;
