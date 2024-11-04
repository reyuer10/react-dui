import { colorData } from "../data/colorData";

export const useColor = () => {
  const handleGetColor = (color) => {
    const findColor = colorData.find((c) => c.colorName === color);
    return findColor ? findColor.colorBackground : null;
  };

  return { handleGetColor };
};
