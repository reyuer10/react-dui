import React from "react";

function ResultList({ r }) {
  return (
    <div
      className={`h-[100px] w-[100px] flex justify-center items-center bg-gray-300 shadow-lg ring-4 ring-black rounded-[24px]`}
    >
      <div
        className={`h-[95px] w-[95px] rounded-full shadow-black shadow-inner ${r.colorBackground}`}
      ></div>
    </div>
  );
}

export default ResultList;
