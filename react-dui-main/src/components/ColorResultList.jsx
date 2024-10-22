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
                className={`bg-gray-300 relative flex justify-center items-center shadow-black ring-[3px] ring-black shadow-lg h-[80px] w-[80px] rounded-[22px]`}
              >
                {rd.timesThree ? (
                  <>
                    <div className=" absolute -right-[196px] top-0 -my-[12px] text-lime-700 bg-golden-yellow px-2 rounded-lg font-bold text-xl font-rubik ">
                      x3
                    </div>{" "}
                  </>
                ) : null}
                <div
                  className={`${colors.firstColor} flex justify-center items-center shadow-inner shadow-zinc-500 h-[77px] w-[77px] rounded-full my-2`}
                ></div>
              </div>
              <div
                className={`flex justify-center items-center bg-gray-300 shadow-black ring-[3px] ring-black shadow-lg h-[80px] w-[80px] rounded-[22px]`}
              >
                <div
                  className={`${colors.secondColor} flex justify-center items-center shadow-inner shadow-zinc-500 h-[77px] w-[77px] rounded-full my-2`}
                ></div>
              </div>
              <div
                className={`bg-gray-300 flex items-center justify-center shadow-black ring-[3px] ring-black shadow-lg h-[80px] w-[80px] rounded-[22px]`}
              >
                <div
                  className={`${colors.thirdColor} flex justify-center items-center shadow-inner shadow-zinc-500 h-[77px] w-[77px] rounded-full my-2`}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ColorResultList;
