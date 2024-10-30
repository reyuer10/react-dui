import { useState } from "react";

export const useColorBetInput = () => {
  const [colorResults, setColorResults] = useState([]);

  const handleAddColor = (cID, cName, cBackground) => {
    const newColor = {
      newColorID: cID,
      newColorName: cName,
      newColorBackground: cBackground,
    };

    const newColors = [...colorResults, newColor];
    localStorage.setItem("color", JSON.stringify(newColors));
    setColorResults(newColors);
  };

  const handleDeleteColor = (id) => {
    const results = colorResults.filter((c, index) => index !== id);
    localStorage.removeItem(`${id}`);
    setColorResults(results);
  };

  return { colorResults, handleAddColor, handleDeleteColor };
};
