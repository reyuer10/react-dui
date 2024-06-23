import React, { useState } from "react";
import ResultList from "./ResultList";

function ResultInput() {
  const [resultData, setResultData] = useState([
    {
      colorId: 1,
      colorName: "Blue",
      colorBackground:
        "bg-gradient-to-t from-blue-700 via-blue-400 to-blue-300",
    },
    {
      colorId: 2,
      colorName: "Red",
      colorBackground: "bg-gradient-to-t from-red-700 via-red-400 to-red-300",
    },
    {
      colorId: 3,
      colorName: "Yellow",
      colorBackground:
        "bg-gradient-to-t from-yellow-700 via-yellow-400 to-yellow-200 border-lime-600",
    },
  ]);
  return (
    <div className="font-rubik flex items-center justify-around h-[180px] p-4 space-x-8 from-yellow-300 via-yellow-400 to-orange-400 bg-gradient-to-bl border-[7px] border-yellow-300 shadow-lime-700 shadow-lg rounded-xl py-2">
      {resultData.map((r) => {
        return <ResultList key={r.colorId} r={r} />;
      })}
    </div>
  );
}

export default ResultInput;
