import React from "react";
import SideContent from "./SideContent";
import MiddleContent from "./MiddleContent";
import EndContent from "./EndContent";
import Header from "./Header";
import ColorPicked from "./ColorPicked";
import ColorsResults from "./ColorsResults";
function HomePage() {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-t from-red-700 via-orange-500 to-yellow-400">
        <div>
          <Header />
        </div>
        <div className="flex justify-between ">
          <div className=" flex items-center relative w-[500px]">
            <div>
              <SideContent />
            </div>
            {/* <div>
              <ColorPicked />
            </div> */}
          </div>
          <div className="w-[500px]">
            <MiddleContent />
          </div>
          <div className="w-[500px]">
            <EndContent />
          </div>
        </div>
        <div>
          <div className="bg-zinc-700 overflow-hidden p-3 rounded-xl ring-8 ring-black mx-4">
            <ColorsResults />
          </div>
        </div>
      </div>
      {/* <ResultsInputModal isModalOpen={isModalOpen} /> */}
    </div>
  );
}

export default HomePage;
