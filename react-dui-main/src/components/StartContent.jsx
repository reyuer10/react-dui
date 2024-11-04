import React from "react";
import ColorPercentage from "./ColorPercentage";
import TableInfo from "./TableInfo";
import RoundSection from "./RoundSection";

function StartContent() {
  return (
    <div className="m-4 bg-yellow-500 shadow-inner shadow-black p-4 border-[5px] border-yellow-500 ring-[5px] ring-black rounded-3xl">
      <TableInfo />
      <RoundSection />
      <ColorPercentage />
    </div>
  );
}

export default StartContent;
