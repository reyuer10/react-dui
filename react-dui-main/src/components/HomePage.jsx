import React from "react";
import SideContent from "./SideContent";
import MiddleContent from "./MiddleContent";
import EndContent from "./EndContent";
import Header from "./Header";
import ColorPicked from "./ColorPicked";
function HomePage() {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-t from-red-700 via-orange-500 to-yellow-400">
        <div className="">
          <Header />
        </div>
        <div className="flex justify-between">
          <div className=" flex items-center relative w-[500px]">
            <div>
              <SideContent />
            </div>
            <div>
              <ColorPicked />
            </div>
          </div>
          <div className="w-[500px]">
            <MiddleContent />
          </div>
          <div className="w-[500px]">
            <EndContent />
          </div>
        </div>
      </div>
      {/* <ResultsInputModal isModalOpen={isModalOpen} /> */}
    </div>
  );
}

export default HomePage;
