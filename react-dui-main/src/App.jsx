import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import SelectView from "./pages/view/SelectView";
import DealerPage from "./pages/dealerUI/DealerPage";
import TableList from "./pages/tables/TableList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="color-game/select-view" element={<SelectView />} />
        <Route path="color-game/select-table" element={<TableList />} />
        <Route path="color-game/mode/trend-display" element={<HomePage />} />
        <Route path="color-game/mode/dealer-side" element={<DealerPage />} />
      </Routes>
    </>
  );
}

export default App;
