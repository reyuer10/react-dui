import React from "react";
import { useNavigate } from "react-router-dom";

function Header({ inputValue }) {
  const navigate = useNavigate();

  const handleRouteSelectView = () => {
    navigate("/color-game/select-view");
  };

  return (
    <div className="flex font-noto-sans  shadow-md bg-yellow-400 shadow-orange-400">
      <button
        onClick={handleRouteSelectView}
        className="flex items-center space-x-2"
      >
        <p className=" text-lime-700 font-rubik font-bold">{inputValue}</p>
      </button>
    </div>
  );
}

export default Header;
