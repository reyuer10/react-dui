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
  const [inputValue, setInputValue] = useState("");
  const [trendColorBet, setTrendColorBet] = useState([]);

  useEffect(() => {
    socket.on("sendMessage", (data) => {
      console.log("Message for everyone: ", data);
      setInputValue(data);
    });

    socket.on("received_message", (message) => {
      console.log(message);
    });

    socket.on("received_open", (isModalResultsOpen) => {
      console.log(isModalResultsOpen);
      setOpenModalResults(isModalResultsOpen);
    });

    socket.on("update_results", (data) => {
      setTrendColorBet(data);
    });

    return () => {
      socket.off("sendMessage");
      socket.off("received_message");
      socket.off("received_open");
      socket.off("update_results");
    };
  }, []);

  return (
    <div>
      <div className="flex flex-col justify-between min-h-screen bg-gradient-to-t from-red-700 via-orange-500 to-yellow-400">
        <div>
          {/* <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="text-xl" onClick={() => sendMessage(inputValue)}>
            Send Message
          </button> */}
          <Header inputValue={inputValue} />
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
          <div className="bg-zinc-700 overflow-hidden rounded-xl ring-8 ring-black m-4">
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
