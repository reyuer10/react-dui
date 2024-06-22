import React from "react";
import SideContent from "./SideContent";
import MiddleContent from "./MiddleContent";
import EndContent from "./EndContent";
import Header from "./Header";

function HomePage() {
  return (
    <div className="h-screen">
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
