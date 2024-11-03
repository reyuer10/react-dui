import { useState } from "react";

export const useColorInput = () => {
  const [colorBet, setColorBet] = useState([]);

  const handleGetColorBet = (colorBetId, colorBetName, colorBetBackground) => {
    const newColorBet = {
      colorBetId: colorBetId,
      colorBetName: colorBetName,
      colorBetBackground: colorBetBackground,
    };
    const getColor = [...colorBet, newColorBet];

    // localStorage.setItem("color", JSON.stringify(getColor));

    return setColorBet(getColor);
  };

  const handleDeleteColorBet = (id) => {
    const getColorId = colorBet.filter((c, index) => index !== id);
    // localStorage.removeItem(`${getColorId}`);
    // localStorage.setItem("color", JSON.stringify(getColorId));
    setColorBet(getColorId);
  };

  const handleResetDefaultColorBet = () => {
    return setColorBet([]);
  };

  return {
    handleGetColorBet,
    handleDeleteColorBet,
    handleResetDefaultColorBet,
    colorBet,
  };
};
