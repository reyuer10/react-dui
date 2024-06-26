import React, { useState } from "react";
import { colorPickedData } from "../data/colorPickedData";

function ColorPicked() {
  const [mostColorPicked, setMostColorPicked] = useState(colorPickedData);
  return (
    <div className="flex flex-col relative -left-2 font-rubik font-bold bg-gray-700 p-4 ring-8 ring-black rounded-r-xl">
      <div className="absolute flex flex-col -left-0 -top-[70px] text-lime-800 font-concert-one font-bold font-regular text-[28px] leading-5 text-center">
        <p>1ST</p>
        <p>20 ROUND</p>
      </div>
      {mostColorPicked.map((m) => {
        let mostCountFormat = m.colorPercentage.toString().padStart("2", 0);
        return (
          <>
            <div
              key={m.colorId}
              className={`shadow-black ring-4 ring-black flex justify-center items-center shadow-lg h-[60px] w-[60px] rounded-2xl ${m.colorBackground} my-2`}
            >
              <span className="text-[22px] text-black color-count-border font-concert-one font-bold  rounded px-1">
                {mostCountFormat}%
              </span>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default ColorPicked;
