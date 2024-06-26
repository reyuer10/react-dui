import React, { useEffect, useState } from "react";
import SideContent from "./SideContent";
import MiddleContent from "./MiddleContent";
import EndContent from "./EndContent";
import Header from "./Header";
import ResultsInputModal from "../modal/ResultsInputModal";
import ResultInput from "./ResultInput";
import ColorPicked from "./ColorPicked";
//  bg-gradient-to-t from-zinc-900 via-zinc-800 to-yellow-700
function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        console.log("You press enter");
        setIsModalOpen(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  // className="h-screen bg-gradient-to-t from-red-700 via-orange-500 to-yellow-400"
  // grid grid-cols-3
  // header div = col-span-3
  return (
    <div>
      <div className="min-h-screen  bg-gradient-to-t from-red-700 via-orange-500 to-yellow-400">
        <div className="">
          <Header />
        </div>
        <div className="flex">
          <div className="flex relative">
            <SideContent />
            <ColorPicked />
          </div>
          <div className="">
            <MiddleContent />
            <EndContent />
          </div>
        </div>
      </div>
      <ResultsInputModal isModalOpen={isModalOpen} />
    </div>
  );
}

export default HomePage;
