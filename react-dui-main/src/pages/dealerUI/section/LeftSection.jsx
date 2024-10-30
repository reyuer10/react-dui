import React from "react";
import SideContent from "../../../components/SideContent";

function LeftSection({ handleOpenRound }) {
  return (
    <div className=" space-y-4 m-4 mx-10 justify-between flex flex-col">
      <div>
        <SideContent />
      </div>
      <div>
        <button
          onClick={handleOpenRound}
          className=" py-2 text-[36px] px-12 font-black bg-red-500 border-4 border-red-500 ring-4 ring-black rounded-xl text-white primary-drop-shadow shadow-inner shadow-black"
        >
          Open Round
        </button>
      </div>
    </div>
  );
}

export default LeftSection;
