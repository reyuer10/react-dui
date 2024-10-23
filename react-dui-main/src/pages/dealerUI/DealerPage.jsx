import React from "react";
import SettingsSections from "../../components/SettingsSections";
import { useNavigate } from "react-router-dom";

function DealerPage() {
  const navigate  = useNavigate()

  const handleRouteSelectView = () => {
    navigate("/color-game/select-view")
  }
  return (
    <div className="min-h-screen font-rubik bg-gradient-to-t from-gray-700 via-amber-600 to-amber-400">
      <div className="flex font-black  text-orange-700 justify-between border-b border-orange-700 shadow shadow-orange-700">
        <button onClick={handleRouteSelectView}>BACK</button>
        <SettingsSections />
      </div>
    </div>
  );
}

export default DealerPage;
