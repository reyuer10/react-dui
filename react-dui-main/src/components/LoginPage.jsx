import React, { useState } from "react";
import casinoLogo from "../assets/pictures/casino-logo.png";
import { data } from "../data/data";

function LoginPage() {
  const [tableData, setTableData] = useState(data[0]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [tableInput, setTableInput] = useState("");

  const handleSubmit = () => {
    if (tableInput === "CG01" || tableInput === "CG02") {
      setIsLoggedIn(true);
      console.log(isLoggedIn);
      
    }
  };
  console.log(tableData)
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="p-4 space-y-14">
        <div>
          <img src={casinoLogo} alt="casino-logo" className="h-[100px] " />
        </div>
        <div className="flex flex-col space-y-4">
          <input
            value={tableInput}
            onChange={(e) => setTableInput(e.target.value)}
            placeholder="Enter table name"
            type="text"
            className="w-full px-4 py-2 rounded-md 
            ring-2 ring-black
            focus-within:ring-2  focus-within:outline-none focus-within:ring-yellow-500 text-center font-noto-sans font-semibold transition-colors duration-150"
          />
          <button
            onClick={handleSubmit}
            className="bg-yellow-500 rounded-md py-2 text-white font-bold text-[18px]"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
