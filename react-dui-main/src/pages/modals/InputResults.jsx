import React, { useContext, useState } from "react";
import { colorData } from "../../data/colorData";
import ColorResultsConfirmation from "./ColorResultsConfirmation";
import { dealerContext } from "../dealerUI/DealerPage";
import { colorGameContext } from "../../App";
import { postResults } from "../../api/dealerApi";

function InputResults() {
  const [resultsError, setResultsError] = useState(null);

  const {
    closeModal,
    closeModalConfirmaton,
    OpenModalConfirmationTo,
    handleGetColorBet,
    colorBet,
    handleDeleteColorBet,
    totalAmount,
    newColorData,
    handleResetDefaultBet,
    handleResetDefaultColorBet,
  } = useContext(dealerContext);

  const { round } = useContext(colorGameContext);

  let amount = newColorData.map((d) => d.colorAmount);
  let colorName = colorBet.map((d) => d.colorBetName);

  const [data, setData] = useState({
    round: round,
    totalAmount: totalAmount,
    colorAmount: {
      yellow: amount[0],
      white: amount[1],
      pink: amount[2],
      blue: amount[3],
      red: amount[4],
      green: amount[5],
    },

    colorNameResults: {
      firstColor: colorName[0],
      secondColor: colorName[1],
      thirdColor: colorName[2],
    },
  });

  const handleCancelSubmitColorResults = () => {
    closeModalConfirmaton();
  };

  // useEffect(() => {
  //   const storedColors = localStorage.getItem("color");
  //   console.log(JSON.parse(storedColors))
  //   // if (storedColors) {
  //   //   setSavedColors(JSON.parse(storedColors));
  //   // }
  // }, []);

  console.log();

  const handleSubmitColorResults = async () => {
    const dateNow = new Date()
      .toISOString()
      .split("T")
      .splice(0, 1)
      .toString()
      .replace(/-/g, "");
    const timeNow = new Date()
      .toTimeString()
      .split(" ")
      .at(0)
      .toString()
      .replace(/:/g, "");

    try {
      const response = await postResults({
        serial_num: `CG-${dateNow}${timeNow}`,
        round_num: data.round,
        result_firstColor: colorName[0],
        result_secondColor: colorName[1],
        result_thirdColor: colorName[2],
        betAmount_yellow: parseInt(data.colorAmount.yellow),
        betAmount_white: parseInt(data.colorAmount.white),
        betAmount_pink: parseInt(data.colorAmount.pink),
        betAmount_blue: parseInt(data.colorAmount.blue),
        betAmount_red: parseInt(data.colorAmount.red),
        betAmount_green: parseInt(data.colorAmount.green),
        amount_totalBet: data.totalAmount,
        current_minor: 20000,
        current_major: 500000,
        current_grand: 1000000,
      });

      closeModalConfirmaton();
      closeModal();
      handleResetDefaultBet();
      handleResetDefaultColorBet();

      return response;
    } catch (error) {
      console.log("error adding data to the server");
    }
  };

  const handleOpenConfirmationColorResults = () => {
    if (colorBet.length < 3) {
      setResultsError(true);
      return;
    }

    setResultsError(null);
    OpenModalConfirmationTo(
      <ColorResultsConfirmation
        colorBet={colorBet}
        handleCancelSubmitColorResults={handleCancelSubmitColorResults}
        handleSubmitColorResults={handleSubmitColorResults}
      />
    );
  };

  return (
    <div className="font-rubik bg-zinc-700 p-6 rounded-2xl relative">
      <div>
        <div
          className={` ${
            resultsError ? "ring-red-500" : " ring-black"
          } transition-all flex space-x-3 items-center justify-center text-2xl bg-zinc-700 w-full h-[130px] rounded-xl shadow-inner shadow-black border-[5px] border-zinc-600 ring-4 ring-black `}
        >
          {colorBet.map((c, index) => {
            return (
              <ul
                className="flex justify-center items-center bg-gray-300 shadow-black ring-[3px] ring-black shadow-lg h-[80px] w-[80px] rounded-[24px]"
                key={index}
              >
                <button
                  onClick={() => handleDeleteColorBet(index)}
                  className={`h-[75px] w-[75px] rounded-full shadow-black shadow-inner ${c.colorBetBackground}`}
                ></button>
              </ul>
            );
          })}
        </div>
        <div className="grid grid-cols-3 gap-7 my-6 bg-blue-500 p-6 border-[7px] border-blue-500 rounded-xl shadow-black shadow-inner ring-4 ring-black">
          {colorData.map((c) => {
            return (
              <ul
                className={`${
                  colorBet.length === 3 ? "" : "active:scale-95"
                }  transition-all duration-75 flex justify-center items-center bg-gray-300 shadow-black ring-[3px] ring-black shadow-lg h-[80px] w-[80px] rounded-[24px]`}
                key={c.colorId}
              >
                <button
                  onClick={() =>
                    handleGetColorBet(c.colorId, c.colorName, c.colorBackground)
                  }
                  disabled={colorBet.length === 3}
                  className={` h-[75px] w-[75px] rounded-full shadow-black shadow-inner ${c.colorBackground}`}
                ></button>
              </ul>
            );
          })}
        </div>
        <div>
          <button
            onClick={handleOpenConfirmationColorResults}
            className="text-white font-black text-3xl bg-blue-500 w-full py-2 rounded-xl shadow-inner shadow-black border-[5px] border-blue-500 ring-4 ring-black"
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}

export default InputResults;
