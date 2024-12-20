import React, { useContext, useEffect } from "react";
import MiddleContent from "./MiddleContent";
import EndContent from "./EndContent";
import Header from "./Header";
import ColorsResults from "./ColorsResults";
import StartContent from "./StartContent";
import { colorGameContext } from "../App";
import ModalInputResults from "../modal/ModalInputResults";
import TrendResultColor from "../modal/TrendResultColor";
import ModalSpinResults from "../modal/ModalSpinResults";
import HomePageEndContent from "./HomePageEndContent";

function HomePage() {
  const { openModalResults, trendColorBet, setTableObject, tableObject } = useContext(colorGameContext);

  useEffect(() => {
    if (tableObject?.isOpenModalJackpotHit) {
      const modalTimeout = setTimeout(() => {
        setTableObject(prevValue => ({
          ...prevValue,
          isOpenModalJackpotHit: false,
          displaySpinResults: "",
          displayColorResults: [],
        }))
      }, 3000);

      return () => {
        clearTimeout(modalTimeout)
      }
    }

  }, [tableObject])

  return (
    <div>
      <div className="flex flex-col justify-between min-h-screen bg-cover bg-[url(assets/pictures/casino-bg.jpg)]">
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
            <HomePageEndContent />
          </div>
        </div>
        <div>
          {/* h-[310px] */}
          <div className="bg-zinc-700 h-[340px] flex justify-start items-center rounded-xl ring-8 ring-black m-4 overflow-x-hidden overflow-y-hidden">
            <ColorsResults />
          </div>
        </div>
      </div>
      <ModalSpinResults isOpenModal={tableObject.isOpenModalJackpotHit}>
        <div className="relative h-[400px] w-[600px] bg-gradient-to-l from-transparent via-amber-400 to-transparent border-none flex justify-center items-center">
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
