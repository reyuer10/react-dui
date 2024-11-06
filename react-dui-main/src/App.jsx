import React, { createContext, useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import SelectView from "./pages/view/SelectView";
import DealerPage from "./pages/dealerUI/DealerPage";
import TableList from "./pages/tables/TableList";
import { getResults } from "./api/dealerApi";
import { io } from "socket.io-client";
import { getColorGameTable } from "./api/colorGameApi";

export const colorGameContext = createContext();

function App() {
  const navigate = useNavigate();
  const socket = io("http://localhost:3000/dealer");
  const [isConnected, setIsConnected] = useState(socket.connected);


  const storedTable = localStorage.getItem("table");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [results, setResults] = useState([]);
  const [round, setRound] = useState(0);
  const [colorResults, setColorResults] = useState([]);
  const [sortColorResults, setSortColorResults] = useState([]);
  const [colorPercentage, setColorPercentage] = useState([]);
  const [serialNum, setSerialNum] = useState("");
  const [openModalResults, setOpenModalResults] = useState(false);
  const [colorGameData, setColorGameData] = useState([]);
  const [tableName, setTableName] = useState("");
  const [jackpotPrizes, setJackpotPrizes] = useState([]);

  const handleIncrementRound = () => {
    setRound((prevRound) => {
      const newRound = prevRound + 1;
      socket.emit("increment_round", {
        table: storedTable,
        round: newRound,
      });

      return newRound;
    });
  };

  const handleJoinTable = (table) => {
    navigate("/color-game/select-view");
    localStorage.setItem("table", table);
  };

  useEffect(() => {
    // when socket connected
    function onConnect() {
      setIsConnected(true);
    }

    // when socket disconnected
    function onDisconnected() {
      setIsConnected(false);
    }

    console.log("is connected", isConnected);

    // Update real time round
    socket.on("updated_round", (round) => {
      setRound(round);
    });

    socket.on("update_newResults", (response) => {
      setColorPercentage(response.colorPercentage);
      setSortColorResults(response.sortColorResults);
      setSerialNum(response?.latestSerialNum[0]?.serial_num);
    });

    if (storedTable) {
      socket.emit("join_table", storedTable);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnected);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnected);
    };
  }, []);

  useEffect(() => {
    async function fetchResults() {
      try {
        setLoading(true);
        const response = await getResults();
        const colorGameResponse = await getColorGameTable();
        setResults(response);

        setColorResults(response.color_results);
        console.log(colorResults)
        setSortColorResults(response.sortColorResults);
        setColorPercentage(response.colorPercentage);
        setColorGameData(colorGameResponse.data);
        setSerialNum(response?.latestSerialNum[0]?.serial_num);
        setRound(response.currentRound);
        setJackpotPrizes(response.prizes_amount);

        console.log(response);

        return response;
      } catch (error) {
        console.log("Error fetching results.", error);
        return setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchResults();
  }, []);

  return (
    <colorGameContext.Provider
      value={{
        handleIncrementRound,
        handleJoinTable,
        setTableName,
        socket,
        tableName,
        round,
        results,
        error,
        loading,
        colorResults,
        sortColorResults,
        colorPercentage,
        colorGameData,
        openModalResults,
        setOpenModalResults,
        storedTable,
        serialNum,
        jackpotPrizes,
      }}
    >
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="color-game/select-view" element={<SelectView />} />
        <Route path="color-game/select-table" element={<TableList />} />
        <Route path="color-game/mode/trend-display" element={<HomePage />} />
        <Route path="color-game/mode/dealer-side" element={<DealerPage />} />
      </Routes>
    </colorGameContext.Provider>
  );
}

export default App;
