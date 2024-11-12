import React, { createContext, useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import SelectView from "./pages/view/SelectView";
import DealerPage from "./pages/dealerUI/DealerPage";
import TableList from "./pages/tables/TableList";
import { getResults } from "./api/dealerApi";
import { getColorGameTable } from "./api/colorGameApi";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import ProtectedTable from "./pages/ProtectedTable";
import { getTableInfo } from "./api/tableApi";

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
  const [trendColorBet, setTrendColorBet] = useState([]);
  const [table, setTable] = useState([])

  const handleIncrementRound = () => {
    setRound((prevRound) => {
      const newRound = prevRound + 1;

      socket.send(JSON.stringify({
        type: "increment_round",
        room: storedTable,
        round: newRound
      }))
      return newRound;
    });
  };


  const handleJoinTable = async (table) => {
    try {
      if (socket && socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify({
          type: "join-table",
          room: table
        }))
      }
      const response = await getResults({ table_name: table });

      navigate("/color-game/select-view");
      localStorage.setItem("table", table);

      return response
    } catch (error) {
      console.log("error joining the table", error)
    }
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
      console.log(parseData.message?.type === "new_results")
      // parseData.type === "increment-prizes"
      if (parseData.type === "join-table") {
        console.log(`A new client joined room ${parseData.room}`)
      }


      if (parseData?.message?.type === "increment_round") {

        setRound(parseData.message?.round);

      }
      if (parseData && parseData.message?.isModalOpen === true) {
        setOpenModalResults(parseData.message)
      }

      if (parseData && parseData.message?.results) {
        setTrendColorBet(parseData.message?.results)
      }

      if (parseData.message?.type === "new_results") {
        // 
        // setColorGameData(parseData.message?.newColorGameResults?.data);
        // setSerialNum(parseData.message?.response?.latestSerialNum[0]?.serial_num);
        setTrendColorBet(parseData.message?.trendResultColor)
        setOpenModalResults(parseData.message?.isOpenModal)
        setColorPercentage(parseData.message?.response?.colorPercentage[0]);
        // console.log(parseData.message?.response?.prizes_amount);
        setColorResults(parseData.message?.response?.color_results);
        setSortColorResults(parseData.message?.response?.sortColorResults);

      }

      if (parseData.type === "increment-prizes") {
        setJackpotPrizes(parseData.data);
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

        if (storedTable) {
          const res = await getTableInfo({ table_name: storedTable });
          let data = res.data[0];
          setTable(data)
          setRound(data.current_round);
          setSerialNum(data.current_serialNum);


          const response = await getResults({ table_name: storedTable })

          // console.log(response)

          setResults(response);
          setColorResults(response.color_results);
          setSortColorResults(response.sortColorResults);
          setColorPercentage(response.colorPercentage[0]);

          setJackpotPrizes(response.prizes_amount[0]);

        }
        const colorGameResponse = await getColorGameTable()
        setColorGameData(colorGameResponse.data);




      } catch (error) {
        console.log("Error fetching results.", error);
        return setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchResults();
  }, [storedTable]);


  // console.log(results)

  return (

    <colorGameContext.Provider
      value={{
        handleIncrementRound,
        handleJoinTable,
        setTableName,
        setOpenModalResults,
        table,
        trendColorBet,
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

          <Route path="color-game/select-table" element={<TableList />} />
          <Route element={<ProtectedTable />}>
            <Route path="color-game/select-view" element={<SelectView />} />
            <Route path="color-game/mode/trend-display" element={<HomePage />} />
            <Route path="color-game/mode/dealer-side" element={<DealerPage />} />
          </Route>
        </Route>
      </Routes>

    </colorGameContext.Provider>
  );
}

export default App;
