import React from "react";
import colorGameLogo from "../../assets/pictures/color-game-logo.png";
import { useNavigate } from "react-router-dom";

function SelectView() {
  const navigate = useNavigate();
  const handleChangeTable = () => {
    navigate("/color-game/page/login");
  };

  const handleRouteTrendDisplay = () => {
    navigate("/color-game/page/mode/trend-display");
  };

  const handleRouteDealerPage = () => {
    navigate("/color-game/page/mode/dealer-side");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-t from-gray-700 via-amber-600 to-amber-400">
      <div className="p-4 space-y-14 w-[500px]">
        <div className="flex justify-center">
          <img src={colorGameLogo} alt="casino-logo" className="w-[80%]" />
        </div>
        <div className="text-center text-[18px] text-black font-black">
          <p className="text-3xl">Table Name: CJ01</p>
        </div>
        <div className="space-y-6">
          <div className="flex flex-col space-y-4 text-center text-black font-bold text-xl">
            <p className="font-black">Select Mode: </p>
            <button
              onClick={handleRouteTrendDisplay}
              className=" bg-yellow-300 shadow-md shadow-black border-6 rounded-full py-2 font-black text-[18px] text-orange-700 transition-colors hover:bg-yellow-200"
            >
              Trend Display
            </button>
            <button
              onClick={handleRouteDealerPage}
              className=" bg-yellow-300 shadow-md shadow-black border-6 rounded-full py-2 font-black text-[18px] text-orange-700 transition-colors hover:bg-yellow-200"
            >
              Dealer
            </button>
          </div>
          <div className="text-center text-xl space-y-4">
            <p className="font-black">Change Table: </p>
            <button
              onClick={handleChangeTable}
              className=" bg-yellow-300 shadow-md shadow-black border-6 w-full rounded-full py-2 font-black text-[18px] text-orange-700 transition-colors hover:bg-yellow-200"
            >
              Log out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectView;
