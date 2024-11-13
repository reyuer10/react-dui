import React, { useContext, useEffect, useState } from "react";
import MiddleContent from "./MiddleContent";
import EndContent from "./EndContent";
import Header from "./Header";
import ColorsResults from "./ColorsResults";
import StartContent from "./StartContent";
import { colorGameContext } from "../App";
import ModalInputResults from "../modal/ModalInputResults";
import TrendResultColor from "../modal/TrendResultColor";
import ModalSpinResults from "../modal/ModalSpinResults";

function HomePage() {
  const { openModalResults, trendColorBet, setTableObject, tableObject } = useContext(colorGameContext);

  console.log(tableObject.isOpenModalJackpotHit);

  // useEffect(() => {


  //   if (tableObject?.isOpenModalJackpotHit) {
  //     const modalTimeout = setTimeout(() => {
  //       setTableObject(prevValue => ({
  //         ...prevValue,
  //         isOpenModalJackpotHit: false,
  //         displaySpinResults: "",
  //       }))
  //     }, 3000);

  //     return () => {
  //       clearTimeout(modalTimeout)
  //     }
  //   }

  // }, [tableObject])

  console.log(tableObject.displaySpinResults)


  return (
    <div>
      <div className="flex flex-col justify-between min-h-screen bg-gradient-to-t from-red-700 via-orange-500 to-yellow-400">
        <div>
          <Header />
        </div>
        <div className="flex justify-between">
          <div className=" flex items-center relative">
            <StartContent />
          </div>
          <div>
            <MiddleContent />
          </div>
          <div>
            <EndContent />
          </div>
        </div>
        <div>
          <div className="bg-zinc-700 h-[310px] flex justify-start items-center rounded-xl ring-8 ring-black m-4 overflow-x-hidden">
            <ColorsResults />
          </div>
        </div>
      </div>
      <ModalSpinResults isOpenModal={tableObject.isOpenModalJackpotHit}>
        <div className="relative h-[400px] w-[600px] bg-gradient-to-t from-golden-yellow via-transparent to-golden-yellow rounded-3xl flex justify-center items-center">
          <div className="ribbon">
            {tableObject.displaySpinResults}
          </div>
          <div className="space-y-8">
            <div>
              <p className="text-[42px] font-black font-rubik jp-title text-[#FFF9C7]">CONGRATULATIONS!</p>
            </div>
            <div className="flex space-x-8 justify-center items-center" >
              {tableObject.displayColorResults.map((d, index) => {
                return (
                  <ul
                    key={index}
                    className="flex justify-center items-center bg-gray-300 shadow-black ring-[3px] ring-black shadow-lg h-[125px] w-[125px] rounded-[24px]"
                  >
                    <li
                      className={`${d.colorBetBackground} h-[120px] w-[120px] rounded-full shadow-black shadow-inner`}
                    ></li>
                  </ul>
                );
              })}
            </div>
          </div>

        </div>
      </ModalSpinResults>
      <ModalInputResults openModalResults={openModalResults}>
        <TrendResultColor trendColorBet={trendColorBet} />;
      </ModalInputResults>
    </div>
  );
}

export default HomePage;
