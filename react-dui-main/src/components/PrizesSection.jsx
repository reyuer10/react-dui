import React, { useContext, useEffect, useState } from "react";
import { jackpotPrizesData } from "../data/jackpotPrizesData";
import { colorGameContext } from "../App";
import WrappedLights from "../assets/cssCustom/WrappedLights";
import SpeedoMeter from "../assets/speedometer/SpeedoMeter";
import Odometer from "react-odometerjs"

function PrizesSection() {
  const [jpData, setJpData] = useState(jackpotPrizesData);
  const { jackpotPrizes } = useContext(colorGameContext);


  const [value, setValue] = useState(100000000);



  useEffect(() => {
    let amount = jackpotPrizes.map(j => j.current_grand)
    // console.log(amount[0])
    const timeoutId = setTimeout(() => setValue(amount[0]), 1000);
    return () => {
      clearTimeout(amount[0]);
    };
  }, [value]);









  return (
    <div className="flex flex-col justify-center font-rubik  m-4 rounded-xl ">
      {jackpotPrizes.map((j, index) => {
        let grandJpt = !j.current_grand ? j.grand_jp : j.current_grand
        // console.log(typeof (j.current_grand))

        return (
          <ul key={index} className={`text-center`}>

            <button
              onClick={() => {
                setValue(Math.floor(Math.random() * 1000001));
              }}
            >
              Random
            </button>
            <WrappedLights>
              <p className="jp-title  primary-drop-shadow text-[#FFF9C7] font-black ">GRAND JACKPOT</p>
              <div className="flex items-center justify-center space-x-2 ">
                <p className=" font-bold to-amber-200 gradient-text  ">
                  ₱
                </p>
                <Odometer value={value} style={{ fontWeight: 700, fontFamily: "Rubik", color: "#FCD34D" }} format="(ddd,ddd,ddd,ddd.dd)" />
              </div>
            </WrappedLights>
            <WrappedLights>
              <p className="jp-title  primary-drop-shadow text-[#FFF9C7] font-black">MAJOR JACKPOT</p>
              <p className="  font-bold to-amber-200 gradient-text">
                ₱ {!j.current_major ? j.major_jp : j.current_major}
              </p>
            </WrappedLights>

            <WrappedLights>
              <p className="jp-title  primary-drop-shadow text-[#FFF9C7] font-black">MINOR JACKPOT</p>
              <p className="  font-bold to-amber-200 gradient-text">
                ₱ {!j.current_minor ? j.minor_jp : j.current_minor}
              </p>
            </WrappedLights>
          </ul>
        );
      })}
    </div>
  );
}

export default PrizesSection;
