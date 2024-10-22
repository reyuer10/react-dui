import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import SelectView from "./pages/view/SelectView";
import DealerPage from "./pages/dealerUI/DealerPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="color-game/page/login" element={<LoginPage />} />
        <Route path="color-game/page/select-view" element={<SelectView />} />
        <Route
          path="color-game/page/mode/trend-display"
          element={<HomePage />}
        />
        <Route
          path="color-game/page/mode/dealer-side"
          element={<DealerPage />}
        />
      </Routes>
    </>
  );
}

export default App;
