import React, { createContext, useContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import SelectView from "./pages/view/SelectView";
import DealerPage from "./pages/dealerUI/DealerPage";
import TableList from "./pages/tables/TableList";
import { getResults } from "./api/dealerApi";

export const colorGameContext = createContext();

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [results, setResults] = useState([]);
  const [round, setRound] = useState(0);
  const [colorResults, setColorResults] = useState([]);
  let roundString = round?.toString().padStart(2, "0");

  const handleIncrementRound = () => {
    setRound((prevRound) => prevRound + 1);
  };

  useEffect(() => {
    async function fetchResults() {
      try {
        setLoading(true);
        const response = await getResults();
        setResults(response);
        setRound(response?.currentRound?.round_num);
        setColorResults(response.color_results);
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
        round,
        roundString,
        results,
        error,
        loading,
        colorResults,
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
