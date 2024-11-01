import React, { createContext, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import SelectView from "./pages/view/SelectView";
import DealerPage from "./pages/dealerUI/DealerPage";
import TableList from "./pages/tables/TableList";
import { useTrendInput } from "./hooks/useTrendInput";

export const colorGameContext = createContext();

function App() {
  const { round, handleIncrementRound } = useTrendInput();

  return (
    <colorGameContext.Provider value={{ round, handleIncrementRound }}>
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
