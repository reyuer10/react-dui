import React, { useState } from "react";
import { colorResultsData } from "../data/colorResultsData";
import ColorResultList from "./ColorResultList";

function ColorsResults() {
  const [resultsData, setResultsData] = useState(colorResultsData);

  return (
    <div className="relative flex flex-col items-center">
      {resultsData.map((rd) => {
        return <ColorResultList rd={rd} key={rd.colorId} />;
      })}
    </div>
  );
}

export default ColorsResults;
