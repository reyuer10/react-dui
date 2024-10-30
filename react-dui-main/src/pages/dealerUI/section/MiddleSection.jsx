import React from "react";
import colorGameLogo from "../../../assets/pictures/color-game-logo.png";
import TimerSection from "../../../components/TimerSection";

function MiddleSection() {
  return (
    <div className=" flex flex-col justify-between items-center">
      <img className="w-[400px] my-8" src={colorGameLogo} alt="colorGameLogo" />
      <TimerSection />
    </div>
  );
}

export default MiddleSection;
