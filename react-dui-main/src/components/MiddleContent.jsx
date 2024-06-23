import React from "react";
import TimerSection from "./TimerSection";
import ResultInput from "./ResultInput";
import casinoPlus from "../assets/pictures/casino-logo.png";

function MiddleContent() {
  return (
    <div className="flex flex-col justify-around">
      <img src={casinoPlus} alt="casinoLogo" className="w-[70%] m-auto" />
      {/* <ResultInput /> */}
      <TimerSection />
    </div>
  );
}

export default MiddleContent;
