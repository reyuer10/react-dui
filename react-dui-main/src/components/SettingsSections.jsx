import React from "react";
import { useNavigate } from "react-router-dom";

function SettingsSections() {
  const navigate = useNavigate();

  const handleRouteLogout = () => {
    navigate("/")
  }

  return (
    <div className="grid grid-cols-2 fill-current font-rubik gap-2 mx-2">
      <div className="flex font-black justify-center">
        <button onClick={handleRouteLogout} className="flex items-center justify-center space-x-2 rounded-md w-full text-lime-700">
          LOGOUT
        </button>
      </div>
      <div className="flex justify-center">
        <button className="flex items-center justify-center space-x-2 rounded-md w-full text-lime-700">
          <p>SYNC</p>
        </button>
      </div>
    </div>
  );
}

export default SettingsSections;
