import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleRouteSelectView = () => {
    navigate("/color-game/select-view");
  };

  return (
    <div className="fle shadow-md  bg-black font-rubik">
      <button
        onClick={handleRouteSelectView}
        className="flex items-center space-x-2"
      >
        <p className="font-black text-amber-400">BACK</p>
      </button>
    </div>
  );
}

export default Header;
