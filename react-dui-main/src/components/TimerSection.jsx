import React from "react";

function TimerSection() {
  return (
    <div className="flex items-center justify-around from-yellow-300 via-yellow-400 to-orange-400 bg-gradient-to-bl border-[7px] border-yellow-200 shadow-black shadow-inner rounded-xl py-2 text-zinc-800">
      <div className="">
        <div>
          <p className=" text-[32px] font-bold ">ROUND</p>
        </div>
        <div className="text-center">
          <p className=" text-[42px] font-bold  shadow-transparent">0</p>

        </div>
      </div>
      <div className="h-[90px] shadow-inner shadow-black w-[4px] rounded-full  bg-yellow-600"></div>
      <div>
        <div>
          <p className="text-[32px] font-bold">TIMER</p>
        </div>
        <div className="text-center">
          <p className=" text-[42px] font-bold">0</p>
        </div>
      </div>
    </div>
  );
}

export default TimerSection;
