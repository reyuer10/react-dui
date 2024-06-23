import React from "react";
import SideContent from "./SideContent";
import MiddleContent from "./MiddleContent";
import EndContent from "./EndContent";
import Header from "./Header";
//  bg-gradient-to-t from-zinc-900 via-zinc-800 to-yellow-700
function HomePage() {
  return (
    <div className="h-screen bg-gradient-to-t from-green-700 via-green-600 to-green-500">
      <div className="">
        <Header />
      </div>
      <div className=" grid grid-cols-3">
        <SideContent />
        <MiddleContent />
        <EndContent />
      </div>
    </div>
  );
}

export default HomePage;
