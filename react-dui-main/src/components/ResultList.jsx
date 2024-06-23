import React from "react";

function ResultList({ r }) {
  return (
    <div
      className={`h-[100px] w-[100px] shadow-lime-700 shadow-lg ${r.colorBackground} rounded-2xl`}
    ></div>
  );
}

export default ResultList;
