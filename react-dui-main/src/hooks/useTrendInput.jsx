import { useState } from "react";

export const useTrendInput = () => {
  const [round, setRound] = useState(0);

  const handleIncrementRound = () => {
    setRound((prevRound) => prevRound + 1);
  };

  return { handleIncrementRound, round };
};
