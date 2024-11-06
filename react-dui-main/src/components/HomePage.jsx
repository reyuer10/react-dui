import React, { useContext, useEffect, useState } from "react";
import MiddleContent from "./MiddleContent";
import EndContent from "./EndContent";
import Header from "./Header";
import ColorsResults from "./ColorsResults";
import StartContent from "./StartContent";
import { colorGameContext } from "../App";
import ModalInputResults from "../modal/ModalInputResults";
import InputResults from "../pages/modals/InputResults";
import TrendResultColor from "../modal/TrendResultColor";

function HomePage() {
  const { socket, openModalResults, setOpenModalResults } =
    useContext(colorGameContext);
  const [trendColorBet, setTrendColorBet] = useState([]);

  const handleOpenModalResults = (openModal) => setOpenModalResults(openModal);
  const handleCloseModalResults = (closeModal) =>
    setOpenModalResults(closeModal);
  const handleUpdateResults = (results) => setTrendColorBet(results);
  const handleResetColorResults = (reset) => setTrendColorBet(reset);

  useEffect(() => {
    socket.on("received_open", handleOpenModalResults);
    socket.on("received_close", handleCloseModalResults);
    socket.on("update_results", handleUpdateResults);
    socket.on("update_resetResults", handleResetColorResults);

    return () => {
      socket.off("sendMessage");
      socket.off("received_message");
      socket.off("received_open");
      socket.off("update_results");
      socket.off("close_results");
    };
  }, []);

  return (
    <div>
      <div className="flex flex-col justify-between min-h-screen bg-gradient-to-t from-red-700 via-orange-500 to-yellow-400">
        <div>
          <Header />
        </div>
        <div className="flex justify-between">
          <div className=" flex items-center relative w-[500px]">
            <StartContent />
          </div>
          <div className="w-[500px]">
            <MiddleContent />
          </div>
          <div className="w-[500px]">
            <EndContent />
          </div>
        </div>
        <div>
          <div className="bg-zinc-700 h-[310px] flex justify-start items-center rounded-xl ring-8 ring-black m-4 overflow-x-hidden">
            <ColorsResults />
          </div>
        </div>
      </div>
      {/* <ResultsInputModal isModalOpen={isModalOpen} /> */}
      <ModalInputResults openModalResults={openModalResults}>
        <TrendResultColor trendColorBet={trendColorBet} />;
      </ModalInputResults>
    </div>
  );
}

export default HomePage;
