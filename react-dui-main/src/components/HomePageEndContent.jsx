import React, { useContext } from 'react'
import WrappedLights from '../assets/cssCustom/WrappedLights'
import { colorGameContext } from '../App';
import Odometer from "react-odometerjs"

function HomePageEndContent() {
    const { jackpotPrizes } = useContext(colorGameContext);
    return (
        <div className="flex flex-col justify-center font-rubik  m-4 rounded-xl">
            <ul className={`text-center`}>
                <WrappedLights>
                    <p className="jp-title  primary-drop-shadow text-[#FFF9C7] font-black ">GRAND JACKPOT</p>
                    <div className="flex items-center justify-center space-x-2 ">
                        <p className=" font-bold to-amber-200 gradient-text">
                            ₱
                        </p>
                        <Odometer value={jackpotPrizes.grand_prizes} style={{ fontWeight: 700, fontFamily: "Rubik", color: "#FCD34D" }} format="(ddd,ddd,ddd,ddd.dd)" />
                    </div>
                </WrappedLights>
                <WrappedLights>
                    <p className="jp-title  primary-drop-shadow text-[#FFF9C7] font-black">MAJOR JACKPOT</p>
                    <div className="flex items-center justify-center space-x-2 ">
                        <p className=" font-bold to-amber-200 gradient-text  ">
                            ₱
                        </p>
                        <Odometer value={jackpotPrizes.major_prizes} style={{ fontWeight: 700, fontFamily: "Rubik", color: "#FCD34D" }} format="(ddd,ddd,ddd,ddd.dd)" />
                    </div>
                </WrappedLights>

                <WrappedLights>
                    <p className="jp-title  primary-drop-shadow text-[#FFF9C7] font-black">MINOR JACKPOT</p>
                    <div className="flex items-center justify-center space-x-2 ">
                        <p className=" font-bold to-amber-200 gradient-text  ">
                            ₱
                        </p>
                        <Odometer value={jackpotPrizes.minor_prizes} style={{ fontWeight: 700, fontFamily: "Rubik", color: "#FCD34D" }} format="(ddd,ddd,ddd,ddd.dd)" />
                    </div>
                </WrappedLights>
            </ul>
        </div>
    )
}

export default HomePageEndContent