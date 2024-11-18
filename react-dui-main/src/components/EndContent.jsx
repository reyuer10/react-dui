import React, { useContext } from "react";
import WrappedLights from "../assets/cssCustom/WrappedLights";
import Odometer from "react-odometerjs"
import { colorGameContext } from "../App";


function EndContent({ handleOpenModalNewTableGame, handleSyncTable }) {
  const { jackpotPrizes } = useContext(colorGameContext);

  return (
    <div className="flex flex-col justify-between">

      <div className="flex flex-col justify-center font-rubik m-4 rounded-xl">
        <ul className={`text-center`}>
          <WrappedLights>
            <p className="jp-title  primary-drop-shadow text-[#FFF9C7] font-black ">GRAND JACKPOT</p>
            <div className="flex items-center justify-center space-x-2">
              <p className=" font-bold to-amber-200 gradient-text">
                ₱
              </p>
              <Odometer value={jackpotPrizes.grand_prizes} style={{ fontWeight: 700, fontFamily: "Rubik", color: "#FCD34D" }} format="(ddd,ddd,ddd,ddd.dd)" />
            </div>
          </WrappedLights>
          <WrappedLights>
            <p className="jp-title  primary-drop-shadow text-[#FFF9C7] font-black">MAJOR JACKPOT</p>
            <div className="flex items-center justify-center space-x-2 ">
              <p className=" font-bold to-amber-200 gradient-text">
                ₱
              </p>
              <Odometer value={jackpotPrizes.major_prizes} style={{ fontWeight: 700, fontFamily: "Rubik", color: "#FCD34D" }} format="(ddd,ddd,ddd,ddd.dd)" />
            </div>
          </WrappedLights>

          <WrappedLights>
            <p className="jp-title  primary-drop-shadow text-[#FFF9C7] font-black">MINOR JACKPOT</p>
            <div className="flex items-center justify-center space-x-2">
              <p className=" font-bold to-amber-200 gradient-text">
                ₱
              </p>
              <Odometer value={jackpotPrizes.minor_prizes} style={{ fontWeight: 700, fontFamily: "Rubik", color: "#FCD34D" }} format="(ddd,ddd,ddd,ddd.dd)" />
            </div>
          </WrappedLights>
        </ul>
      </div>
      <div className=" flex justify-between m-2">
        <button className="flex space-x-4 text-white w-[250px] bg-green-500 rounded-xl border-[5px] border-green-500 ring-[5px] ring-black shadow-inner shadow-black px-4 py-2 font-black primary-drop-shadow text-[36px]" onClick={handleOpenModalNewTableGame}>
          <p>NEW</p>
          <p>GAME</p>
        </button>
        <button onClick={handleSyncTable} className="text-white w-[240px] bg-blue-500 rounded-xl border-[5px] border-blue-500 ring-[5px] ring-black shadow-inner shadow-black px-4 py-2 font-black primary-drop-shadow text-[36px]">
          SYNC
        </button>
      </div>
    </div>
  );
}

export default EndContent;
