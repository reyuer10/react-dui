import React, { useState } from "react";
import { colorPickedData } from "../data/colorPickedData";

function ColorPicked() {
  const [mostColorPicked, setMostColorPicked] = useState(colorPickedData);
  return (
    <div className="flex flex-col absolute -right-20 top-20 font-modak">
      {mostColorPicked.map((m) => {
        return (
          <>
            <span className="absolute text-[32px]  w-[200px] text-lime-500">
              1st 20th Round
            </span>
            <div
              key={m.colorId}
              className={`shadow-black shadow-lg h-[70px] w-[70px] rounded-2xl ${m.colorBackground} my-2`}
            ></div>
          </>
        );
      })}
    </div>
  );
}

export default ColorPicked;
