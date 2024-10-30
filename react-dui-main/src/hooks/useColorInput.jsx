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

    return setColorBet(getColor);
  };

  const handleDeleteColorGet = (id) => {
    const getColorId = colorBet.filter((c) => c.colorBetId !== id);
    setColorBet(getColorId);
  };

  return { handleGetColorBet, handleDeleteColorGet, colorBet };
};
