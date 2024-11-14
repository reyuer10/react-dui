import React, { useContext } from "react";
import { colorGameContext } from "../App";


function ColorPercentage() {
  const { colorPercentage } = useContext(colorGameContext);

  return (
    <div className="grid grid-cols-3 gap-4 bg-zinc-700 p-4 shadow-inner rounded-xl shadow-black border-[5px] border-zinc-700 ring-[5px] ring-black">
      <li
        className={`text-3xl font-black font-rubik text-drop-shadow text-white flex justify-center items-center list-none bg-gradient-to-t from-yellow-500 via-yellow-400 to-white h-[120px] w-[120px] rounded-2xl ring-[5px] ring-black`}
      >
        {!colorPercentage.yellow_percentage ? 0 : colorPercentage.yellow_percentage}%
      </li>
      <li
        className={`text-3xl font-black font-rubik text-drop-shadow text-white flex justify-center items-center list-none bg-gradient-to-t from-zinc-400 via-gray-200 to-white h-[120px] w-[120px] rounded-2xl ring-[5px] ring-black`}
      >
        {!colorPercentage.white_percentage ? 0 : colorPercentage.white_percentage}%
      </li>
      <li
        className={`text-3xl font-black font-rubik text-drop-shadow text-white flex justify-center items-center list-none bg-gradient-to-t from-pink-600 via-pink-500 to-pink-300 h-[120px] w-[120px] rounded-2xl ring-[5px] ring-black`}
      >
        {!colorPercentage.pink_percentage ? 0 : colorPercentage.pink_percentage}%
      </li>
      <li
        className={`text-3xl font-black font-rubik text-drop-shadow text-white flex justify-center items-center list-none bg-gradient-to-t from-blue-600 via-blue-500 to-blue-300 h-[120px] w-[120px] rounded-2xl ring-[5px] ring-black`}
      >
        {!colorPercentage.blue_percentage ? 0 : colorPercentage.blue_percentage}%
      </li>
      <li
        className={`text-3xl font-black font-rubik text-drop-shadow text-white flex justify-center items-center list-none bg-gradient-to-t from-red-600 via-red-500 to-red-300 h-[120px] w-[120px] rounded-2xl ring-[5px] ring-black`}
      >
        {!colorPercentage.red_percentage ? 0 : colorPercentage.red_percentage}%
      </li>
      <li
        className={`text-3xl font-black font-rubik text-drop-shadow text-white flex justify-center items-center list-none bg-gradient-to-t from-green-600 via-green-500 to-green-200 border-lime-600 h-[120px] w-[120px] rounded-2xl ring-[5px] ring-black`}
      >
        {!colorPercentage.green_percentage ? 0 : colorPercentage.green_percentage}%
      </li>
    </div>
  );
}

export default ColorPercentage;
