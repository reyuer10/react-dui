import React from "react";
import TimerSection from "./TimerSection";
import ResultInput from "./ResultInput";
// import casinoPlus from "../assets/pictures/casino-logo.png";
import colorGameLogo from "../assets/pictures/color-game-logo.png";

function MiddleContent() {
  return (
    <div className="flex flex-col justify-between h-full items-center ">
      <div>
        <img src={colorGameLogo} alt="casinoLogo" className="w-[400px] my-8" />
      </div>
      {/* <ResultInput /> */}
      <div>
        <TimerSection />
      </div>
    </div>
  );
}

export default MiddleContent;
