import React, { useState } from "react";
import { colorResultsData } from "../data/colorResultsData";
import ColorResultList from "./ColorResultList";

function ColorsResults() {
  const [resultsData, setResultsData] = useState(colorResultsData);

  console.log(resultsData);

  return (
    <div className="">
      <div>
        {resultsData.map((rd) => {
          return <ColorResultList rd={rd} key={rd.colorId} />;
        })}
      </div>
    </div>
  );
}

export default ColorsResults;
