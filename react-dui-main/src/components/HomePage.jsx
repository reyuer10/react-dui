import React, { useEffect, useState } from "react";
import MiddleContent from "./MiddleContent";
import EndContent from "./EndContent";
import Header from "./Header";
import ColorsResults from "./ColorsResults";
import StartContent from "./StartContent";
import { io } from "socket.io-client";

function HomePage() {
  const socket = io("http://localhost:3000");
  const [inputValue, setInputValue] = useState("");

  function sendMessage(text) {
    socket.emit("sendMessage", text);
  }

  useEffect(() => {
    socket.on("sendMessage", (data) => {
      console.log("Message for everyone: ", data);
      setInputValue(data);
    });

    return () => {
      socket.off("sendMessage");
    };
  }, [socket, inputValue]);

  return (
    <div>
      <div className="flex flex-col justify-between min-h-screen bg-gradient-to-t from-red-700 via-orange-500 to-yellow-400">
        <div>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="text-xl" onClick={() => sendMessage(inputValue)}>
            Send Message
          </button>
          <Header inputValue={inputValue} />
        </div>
        <div className="flex justify-between ">
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
          <div className="bg-zinc-700 overflow-hidden p-3 rounded-xl ring-8 ring-black m-4">
            <ColorsResults />
          </div>
        </div>
      </div>
      {/* <ResultsInputModal isModalOpen={isModalOpen} /> */}
    </div>
  );
}

export default HomePage;
