import React from "react";

function TimerSection() {
  return (
    <div className="w-[350px] ring-8 ring-black font-rubik flex items-center justify-around mx-2 my-4 from-yellow-300 via-yellow-400 to-orange-400 bg-gradient-to-bl border-[7px] border-yellow-300  shadow-inner shadow-orange-700 rounded-xl py-2">
      <div>
        <div>
          <p className="text-lime-800 text-[32px] font-bold ">ROUND</p>
        </div>
        <div className="text-center">
          <p className=" text-[72px] font-bold  shadow-transparent text-lime-700">
            00
          </p>
        </div>
      </div>
      {/* <div className="h-[90px] shadow-inner shadow-black w-[4px] rounded-full  bg-yellow-600"></div> */}
      {/* <div>
        <div>
          <p className=" text-lime-800 text-[32px] font-bold">TIMER</p>
        </div>
        <div className="text-center">
          <p className="text-[42px] font-bold">00</p>
        </div>
      </div> */}
    </div>
  );
}

export default TimerSection;
