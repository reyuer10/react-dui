import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleRouteSelectView = () => {
    navigate("/color-game/select-view");
  };

  return (
    <div className="flex shadow-orange-400 shadow-md  bg-yellow-400 font-rubik">
      <button
        onClick={handleRouteSelectView}
        className="flex items-center space-x-2"
      >
        <p className="font-black text-orange-700">BACK</p>
      </button>
    </div>
  );
}

export default Header;
