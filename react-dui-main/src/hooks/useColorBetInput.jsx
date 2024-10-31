import { useState } from "react";
import { colorData } from "../data/colorData";

export const useColorBetInput = () => {
  const [colorResults, setColorResults] = useState([]);
  const [currentChipsBet, setCurrentChipsBet] = useState(null);
  const [chipsCurrentID, setChipsCurrentID] = useState(null);
  const [totalAmount, setTotalAmount] = useState(0);

  const [isResetAmountEnable, setIsResetAmountEnable] = useState(false);
  const [colorBetAmountID, setColorBetAmountID] = useState(null);

  const [newColorData, setNewColorData] = useState(colorData);

  const handleSelectBetAmount = (amount, id) => {
    setCurrentChipsBet(amount);
    setChipsCurrentID(id);
    setIsResetAmountEnable(false);
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
            ? { ...c, colorAmount: c.colorAmount + currentChipsBet }
            : c
        )
      );
    }
  };

  const handleOpenEnableColorBetAmount = (id) => {
    if (currentChipsBet === null) {
      setColorBetAmountID(id);
      setIsResetAmountEnable(true);
    }
  };

  const handleResetColorBetAmount = () => {
    if (colorBetAmountID) {
      setIsResetAmountEnable(false);

      setNewColorData((prevNewColorData) =>
        prevNewColorData.map((c) =>
          c.colorId === colorBetAmountID
            ? {
                ...c,
                totalAmount: setTotalAmount(
                  (prevAmount) => prevAmount - c.colorAmount
                ),
                colorAmount: 0,
              }
            : c
        )
      );
    }
  };

  const handleDeleteColor = (id) => {
    const results = colorResults.filter((c, index) => index !== id);
    localStorage.removeItem(`${id}`);
    setColorResults(results);
  };

  return {
    handleIncrementBetAmount,
    handleOpenEnableColorBetAmount,
    handleResetColorBetAmount,
    handleSelectBetAmount,
    handleRemoveSelectBetAmount,
    handleDeleteColor,
    setChipsCurrentID,
    colorResults,
    currentChipsBet,
    chipsCurrentID,
    totalAmount,
    newColorData,
    colorBetAmountID,
    isResetAmountEnable,
  };
};
