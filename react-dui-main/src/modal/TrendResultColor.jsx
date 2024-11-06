import React from "react";

function TrendResultColor({ trendColorBet }) {
  console.log(trendColorBet);
  return (
    <div className="relative font-rubik">
      <div className=" mx-auto rounded-2xl w-[370px] bg-black ">
        <p className="text-[42px] font-black  text-orange-400 text-drop-shadow text-center ">
          RESULT COLOR
        </p>
      </div>
      <div className="flex space-x-6 h-[200px] w-[500px] bg-zinc-700 p-7 shadow-inner shadow-black rounded-2xl border-[10px] border-zinc-700 ring-[10px] ring-black">
        {trendColorBet.map((t, index) => {
          return (
            <ul
              key={index}
              className="flex justify-center items-center bg-gray-300 shadow-black ring-[3px] ring-black shadow-lg h-[125px] w-[125px] rounded-[24px]"
            >
              <li
                className={`${t.colorBetBackground} h-[120px] w-[120px] rounded-full shadow-black shadow-inner`}
              ></li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default TrendResultColor;
