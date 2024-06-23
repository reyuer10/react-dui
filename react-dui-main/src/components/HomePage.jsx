import React, { useEffect, useState } from "react";
import SideContent from "./SideContent";
import MiddleContent from "./MiddleContent";
import EndContent from "./EndContent";
import Header from "./Header";
import ResultsInputModal from "../modal/ResultsInputModal";
import ResultInput from "./ResultInput";
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

  return (
    <div className="h-screen bg-gradient-to-t from-red-700 via-orange-500 to-yellow-400">
      <div className="">
        <div className="">
          <Header />
        </div>
        <div className=" grid grid-cols-3">
          <SideContent />
          <MiddleContent />
          <EndContent />
        </div>
      </div>
      <ResultsInputModal isModalOpen={isModalOpen} />
    </div>
  );
}

export default HomePage;
