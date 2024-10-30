import React from "react";
import ColorsResults from "./ColorsResults";

function SideContent() {
  return (
    // h-[calc(85vh-50px)]
    <div className=" relative my-8 flex flex-col justify-between ">
      <div className="w-full justify-center flex ">
        <p className="font-rubik bg-yellow-300 text-3xl px-4 rounded-xl shadow-inner ring-4 ring-black shadow-black border-[5px] border-yellow-300  text-center absolute -top-[30px] text-white z-20 font-black primary-drop-shadow">
          RESULTS
        </p>
      </div>
      <div className="bg-zinc-700 overflow-hidden p-3 rounded-xl ring-8 ring-black h-full">
        <ColorsResults />
      </div>
    </div>
  );
}

export default SideContent;
