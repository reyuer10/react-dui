import React from "react";
import TimerSection from "./TimerSection";
import ResultInput from "./ResultInput";
// import casinoPlus from "../assets/pictures/casino-logo.png";
import colorGameLogo from "../assets/pictures/color-game-logo.png";

function MiddleContent() {
  return (
    <div className="flex flex-col justify-around">
      <img src={colorGameLogo} alt="casinoLogo" className="w-[40%] m-auto" />
      {/* <ResultInput /> */}
      <TimerSection />
    </div>
  );
}

export default MiddleContent;
