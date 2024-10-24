import React from "react";
import colorGameLogo from "../../assets/pictures/color-game-logo.png";
import { useNavigate } from "react-router-dom";

function SelectView() {
  const navigate = useNavigate();
  const handleChangeTable = () => {
    navigate("/color-game/select-table");
  };

  const handleRouteTrendDisplay = () => {
    navigate("/color-game/mode/trend-display");
  };

  const handleRouteDealerPage = () => {
    navigate("/color-game/mode/dealer-side");
  };

  return (
    <div className="min-h-screen box-border flex flex-col font-rubik items-center justify-center bg-gradient-to-t from-gray-700 via-amber-600 to-amber-400">
      <div className="absolute left-0 top-0 p-5">
        <button onClick={handleChangeTable} className="font-bold text-orange-700">
          BACK
        </button>
      </div>
      <div className="p-4 space-y-14 w-[500px]">
        <div className="flex justify-center">
          <img src={colorGameLogo} alt="casino-logo" className="w-[80%]" />
        </div>
        <div className="text-center flex items-center p-2 justify-evenly text-3xl font-black text-black border-4 border-black shadow shadow-black rounded-full">
          <p className="text-white primary-drop-shadow">Table Name:</p>
          <p className="bg-black rounded-full px-5 py-1 text-white">CJ01</p>
        </div>
        <div className="space-y-6 bg-zinc-700 border-[6px] border-black p-6 rounded-3xl">
          <div className="flex flex-col space-y-4 text-center text-black font-bold text-xl">
            <div className="font-black text-white z-20 bg-zinc-700">
              Select Mode
            </div>
            <button
              onClick={handleRouteTrendDisplay}
              className=" bg-yellow-300 text-orange-700 shadow-md shadow-black rounded-full py-2 font-black text-[18px]  transition-colors hover:bg-yellow-200"
            >
              Trend Display
            </button>
            <button
              onClick={handleRouteDealerPage}
              className=" bg-yellow-300 text-orange-700 shadow-md shadow-black rounded-full py-2 font-black text-[18px]  transition-colors hover:bg-yellow-200"
            >
              Dealer
            </button>
          </div>
          {/* <div className="text-center text-xl space-y-4">
            <p className="font-black text-white">Change Table</p>
            <button
              onClick={handleChangeTable}
              className=" bg-yellow-300 shadow-md shadow-black border-6 w-full rounded-full py-2 font-black text-[18px] text-orange-700 transition-colors hover:bg-yellow-200"
            >
              Back
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default SelectView;
