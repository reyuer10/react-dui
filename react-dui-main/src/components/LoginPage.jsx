import React, { useEffect, useRef, useState } from "react";
import colorGameLogo from "../assets/pictures/color-game-logo.png";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const [tableInput, setTableInput] = useState("");

  const handleLogin = () => {
    navigate("/color-game/select-view");
  };

  useEffect(() => {
    if (inputRef) {
      inputRef.current.focus();
    }
  }, []);

  
  return (
    <div className="min-h-screen font-rubik flex flex-col items-center justify-center bg-gradient-to-t from-gray-700 via-amber-600 to-amber-400">
      <div className="p-4 space-y-14 w-[500px]">
        <div className="flex justify-center">
          <img src={colorGameLogo} alt="casino-logo" className="w-[80%]" />
        </div>
        <div className="flex flex-col space-y-4">
          <input
            ref={inputRef}
            value={tableInput}
            onChange={(e) => setTableInput(e.target.value.toUpperCase())}
            placeholder="Enter table name"
            onFocus
            type="text"
            className="w-full px-4 py-2 rounded-full 
            ring-2 ring-orange-400
            focus-within:ring-2 focus-within:outline-none focus-within:ring-yellow-500 text-center font-bold transition-colors duration-150"
          />
          <button
            onClick={handleLogin}
            className=" bg-yellow-300 shadow-md font-black shadow-black border-6 rounded-full py-2 text-[18px] text-orange-700 transition-colors hover:bg-yellow-200"
          >
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
