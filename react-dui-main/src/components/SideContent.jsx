import React from "react";
import Buttons from "./Buttons";
import SettingsSections from "./SettingsSections";
import ColorsResults from "./ColorsResults";

function SideContent() {
  return (
    <div className="m-3">
      <div className=" min-h-full bg-black">
        <ColorsResults />
      </div>
      <div>
        <SettingsSections />
      </div>
    </div>
  );
}

export default SideContent;
