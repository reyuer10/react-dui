import { useState } from "react";
import { colorData } from "../data/colorData";

import chips25 from "../assets/pictures/chips-bw.png";
import chips50 from "../assets/pictures/chips-100.png";
import chips100 from "../assets/pictures/chips-500.png";
import chips1000 from "../assets/pictures/chips-1000.png";

export const useColorBetInput = () => {
  const [colorResults, setColorResults] = useState([]);
  const [currentChipsBet, setCurrentChipsBet] = useState(null);
  const [chipsCurrentID, setChipsCurrentID] = useState(null);
  const [totalAmount, setTotalAmount] = useState(0);
  const [isResetAmountEnable, setIsResetAmountEnable] = useState(false);
  const [colorBetAmountID, setColorBetAmountID] = useState(null);
  const [newColorData, setNewColorData] = useState(colorData);
  const [round, setRound] = useState(1);

  const [colorAmount, setColorAmount] = useState(false);

  const handleIncrementRound = (round) => {
    return setRound((prevRound) => round + prevRound);
  };

  const handleSelectBetAmount = (amount, id) => {
    setCurrentChipsBet(amount);
    setChipsCurrentID(id);
    setIsResetAmountEnable(false);
    setColorBetAmountID(null);
  };

  const handleRemoveSelectBetAmount = () => {
    if (currentChipsBet && chipsCurrentID) {
      setCurrentChipsBet(null);
      setChipsCurrentID(null);
    }
  };

  const handleIncrementBetAmount = (id) => {
    if (currentChipsBet) {
      setTotalAmount((prevAmount) => prevAmount + currentChipsBet);

      setNewColorData((prevNewColorData) =>
        prevNewColorData.map((c) =>
          c.colorId === id
            ? {
                ...c,
                colorAmount: c.colorAmount + currentChipsBet,
                colorAmountImg:
                  c.colorAmount + currentChipsBet < 101
                    ? chips25
                    : c.colorAmount + currentChipsBet < 501
                    ? chips50
                    : c.colorAmount + currentChipsBet < 701
                    ? chips100
                    : chips1000,
              }
            : c
        )
      );
    }
  };

  const handleOpenEnableColorBetAmount = (id, amount) => {
    if (currentChipsBet === null) {
      setColorBetAmountID(id);
      setIsResetAmountEnable(true);
      setColorAmount(amount);
    }
  };

  const handleResetColorBetAmount = () => {
    if (colorBetAmountID) {
      setNewColorData((prevNewColorData) =>
        prevNewColorData.map((c) =>
          c.colorId === colorBetAmountID
            ? {
                ...c,
                totalAmount: setTotalAmount(
                  (prevAmount) => prevAmount - c.colorAmount
                ),
                colorAmount: 0,
                colorAmountImg: null,
              }
            : c
        )
      );

      setIsResetAmountEnable(false);
      setColorBetAmountID(null);
    }
  };

  const handleDeleteColor = (id) => {
    const results = colorResults.filter((c, index) => index !== id);
    localStorage.removeItem(`${id}`);
    setColorResults(results);
  };

  const handleResetDefaultBet = () => {
    setNewColorData((prevNewColorData) => {
      return prevNewColorData.map((p) => {
        return { ...p, colorAmount: 0, colorAmountImg: null };
      });
    });

    // setNewColorData((prevNewColorData) => {
    //   return prevNewColorData.map((p) => {
    //     // Assuming you want to set all properties of p to null
    //     return Object.keys(p).reduce((acc, key) => {
    //       acc[key] = null; // Set each property to null
    //       return acc;
    //     }, {});
    //   });
    // });
    setTotalAmount(0);
    setCurrentChipsBet(null);
    setChipsCurrentID(null);

    setIsResetAmountEnable(false);
    setColorBetAmountID(null);
  };

  return {
    handleIncrementBetAmount,
    handleOpenEnableColorBetAmount,
    handleResetColorBetAmount,
    handleSelectBetAmount,
    handleRemoveSelectBetAmount,
    handleDeleteColor,
    handleIncrementRound,
    setChipsCurrentID,
    handleResetDefaultBet,
    colorAmount,
    round,
    colorResults,
    currentChipsBet,
    chipsCurrentID,
    totalAmount,
    newColorData,
    colorBetAmountID,
    isResetAmountEnable,
  };
};
