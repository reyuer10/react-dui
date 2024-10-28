import React from "react";

function LeftSection({ handleOpenRound }) {
  return (
    <div>
      <button
        onClick={handleOpenRound}
        className="px-4 py-2 text-3xl font-black bg-red-500 border-4 border-red-500 ring-4 ring-black rounded-xl text-white primary-drop-shadow shadow-inner shadow-black"
      >
        Open Round
      </button>
    </div>
  );
}

export default LeftSection;
