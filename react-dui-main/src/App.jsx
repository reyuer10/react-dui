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
  const storedGameNo = localStorage.getItem("game-no")
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
  const [tableObject, setTableObject] = useState({
    result_ID: 0,
    result_spin: "",
    displaySpinResults: "",
    displayColorResults: [],
    background_color: "",
    width: "",
    border_color: "",
    code: "",
    openModalTripleColor: false,
    isEmpty: false,
    isCodeEmpty: false,
    isOpenModalJackpotHit: false,
  })

  // console.log(tableObject.displayColorResults)

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

  // console.log(tableObject.isOpenModalJackpotHit)


  const handleJoinTable = async (table, gameNo) => {
    try {
      if (socket && socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify({
          type: "join-table",
          room: table
        }))
      }
      const response = await getResults({ table_name: table, game_num: gameNo });

      navigate("/color-game/select-view");
      localStorage.setItem("table", table);
      localStorage.setItem("game-no", gameNo);


      console.log(response)
      return response
    } catch (error) {
      console.log("error joining the table", error)
    }
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
      console.log()


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
        setSerialNum(parseData.message?.response?.latestSerialNum)
        console.log(parseData)
        setTrendColorBet(parseData.message?.trendResultColor)
        setOpenModalResults(parseData.message?.isOpenModal)
        setColorPercentage(parseData.message?.response?.colorPercentage[0]);
        setColorResults(parseData.message?.response?.color_results);
        setSortColorResults(parseData.message?.response?.sortColorResults);
        setTableObject(prevValue => ({
          ...prevValue, displayColorResults: parseData.message?.displayTrendResultColor
        }))
      }

      if (parseData.type === "increment-prizes") {
        setJackpotPrizes(parseData.data);
      }

      if (parseData.type === "hit_tripleColor") {
        setTableObject(prevObjet => (
          {
            ...prevObjet,
            result_ID: parseData.result_ID,
            openModalTripleColor: parseData?.isTripleColorHit,
            result_spin: parseData?.result_spin,
          }
        ))
      }

      if (parseData.type === "reset_prizes") {
        setJackpotPrizes(parseData.response[0]);
      }


      if (parseData.message?.type === "open_modal_jackpot") {
        setTableObject(prevValue => ({
          ...prevValue,
          isOpenModalJackpotHit: parseData.message?.isOpenModal,
          displaySpinResults: parseData.message?.result_spin
        }))
      }

      if (parseData.message?.type === "update_resultSpin") {
        setSortColorResults(parseData.message?.response)
        console.log(parseData.message?.response)
      }

      if (parseData.message?.type === "fetch_newGame") {
        const { response } = parseData?.message
        console.log(response)
        setRound(response.currentRound);
        setColorPercentage(response.colorPercentage);
        setSerialNum(response.latestSerialNum);
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

        if (storedTable && storedGameNo) {
          const res = await getTableInfo({ table_name: storedTable });
          let data = res.data[0];
          setTable(data)
          setRound(data.current_round);
          setSerialNum(data.current_serialNum);


          const response = await getResults({ table_name: storedTable, game_num: storedGameNo })

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
  }, [storedTable, storedGameNo]);

  console.log(results)


  return (

    <colorGameContext.Provider
      value={{
        handleIncrementRound,
        handleJoinTable,
        setTableName,
        setOpenModalResults,
        setTableObject,
        tableObject,
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
        jackpotPrizes
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
