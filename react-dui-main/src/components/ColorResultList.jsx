import React from "react";

function ColorResultList({ rd }) {
  console.log(rd);
  return (
    <div>
      {rd.colorResults.map((colors, index) => {
        return (
          <div key={index} className="flex space-x-3 my-4 justify-center">
            <div className={`${colors.firstColor} shadow-lime-700 shadow-lg h-[20px] w-[20px] rounded`}></div>
            <div className={`${colors.secondColor} shadow-lime-700 shadow-lg h-[20px] w-[20px] rounded`}></div>
            <div className={`${colors.thirdColor} shadow-lime-700 shadow-lg h-[20px] w-[20px] rounded`}></div>
          </div>
        );
      })}
    </div>
  );
}

export default ColorResultList;
