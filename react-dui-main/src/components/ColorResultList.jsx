import React from "react";

function ColorResultList({ rd }) {
  return (
    <>
      <div>
        {rd.colorResults.map((colors, index) => {
          return (
            <div
              key={index}
              className={`   flex space-x-3 my-2 ring-4 p-2 rounded  ${
                rd.timesThree
                  ? "ring-golden-yellow animate-pulse"
                  : "ring-gray-600"
              }`}
            >
              <div
                className={`${colors.firstColor} shadow-black shadow-lg h-[80px] w-[80px] rounded-2xl`}
              >
                {rd.timesThree ? (
                  <>
                    <div className=" absolute -right-1 -my-[12px] text-lime-700 bg-golden-yellow px-2 rounded-lg font-bold text-xl font-rubik ">
                      x3
                    </div>{" "}
                  </>
                ) : null}
              </div>
              <div
                className={`${colors.secondColor} shadow-black shadow-lg h-[80px] w-[80px] rounded-2xl`}
              ></div>
              <div
                className={`${colors.thirdColor} shadow-black shadow-lg h-[80px] w-[80px] rounded-2xl`}
              ></div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ColorResultList;
