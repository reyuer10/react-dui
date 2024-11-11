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
import ProtectedRoutes from "./pages/ProtectedRoutes";
import ProtectedTable from "./pages/ProtectedTable";

export const colorGameContext = createContext();



function App() {
  const navigate = useNavigate();

  const storedTable = localStorage.getItem("table");
  const [socket, setSocket] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

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

  // const [tableData, setTableData] = useState({
  //   results: [],
  //   colorResults: [],
  //   sortColorResults: [],
  //   colorPercentage: [],
  //   colorGameData: [],
  //   jackpotPrizes: [],
  // });


  const handleIncrementRound = () => {
    setRound((prevRound) => {
      const newRound = prevRound + 1;
      // socket.emit("increment_round", {
      //   table: storedTable,
      //   round: newRound,
      // });

      return newRound;
    });
  };


  const handleJoinTable = (table) => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify({
        type: "join-table",
        room: table
      }))
    }
    navigate("/color-game/select-view");
    localStorage.setItem("table", table);

  };

  const handleUpdateNewResults = (response) => {
    setColorPercentage(response.colorPercentage);
    setSortColorResults(response.sortColorResults);
    setSerialNum(response?.latestSerialNum[0]?.serial_num);
    setColorResults(response.color_results);
    setJackpotPrizes(response.prizes_amount);
  };

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:3000");
    ws.onopen = () => {
      setIsConnected(true)
      setSocket(ws)
      console.log("WebSocket is connected.");


      if (storedTable) {
        const joinedTable = {
          type: "join-table",
          room: storedTable
        }
        ws.send(JSON.stringify(joinedTable))
      }
    };



    ws.onmessage = (event) => {
      const parseData = JSON.parse(event.data);
      if (parseData.type === "join-table") {
        console.log(`A new client joined room ${parseData.room}`)
      }
      if (parseData.type === "send-to-room") {
        // let boolTrue = parseData.isModalOpen
        console.log(parseData)
        // setOpenModalResults(boolTrue)
        // console.log(openModalResults)
      }
    };


    ws.onclose = () => {
      setIsConnected(false)
      console.log("WebSocket is not connected.")
    };

    ws.onerror = () => {
      console.log("WebSocket is not open.")
    };
    return () => {
      if (!ws) {
        ws.close()
      }
    }
  }, []);

  useEffect(() => {
    async function fetchResults() {
      try {
        setLoading(true);

        const [response, colorGameResponse] = await Promise.all([
          getResults(),
          getColorGameTable(),
        ]);

        setResults(response);
        setColorResults(response.color_results);
        setSortColorResults(response.sortColorResults);
        setColorPercentage(response.colorPercentage);
        setColorGameData(colorGameResponse.data);
        setSerialNum(response?.latestSerialNum[0]?.serial_num);
        setJackpotPrizes(response.prizes_amount);
        setRound(response.currentRound);




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
        setOpenModalResults,
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
        storedTable,
        serialNum,
        jackpotPrizes,
      }}
    >


      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="color-game/mode/trend-display" element={<HomePage />} />
          <Route path="color-game/select-table" element={<TableList />} />
          <Route element={<ProtectedTable />}>
            <Route path="color-game/select-view" element={<SelectView />} />
            <Route path="color-game/mode/dealer-side" element={<DealerPage />} />
          </Route>
        </Route>
      </Routes>

    </colorGameContext.Provider>
  );
}

export default App;
