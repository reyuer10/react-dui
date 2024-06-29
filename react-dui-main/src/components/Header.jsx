import React from "react";
import SettingsSections from "./SettingsSections";

function Header() {
  return (
    <div className="flex justify-between items-center font-noto-sans  shadow-md bg-yellow-400 shadow-orange-400">
      <div>
        <p className=" text-lime-700 font-rubik font-bold">COLOR GAME</p>
      </div>
      <div>
        <SettingsSections />
      </div>
    </div>
  );
}

export default Header;
