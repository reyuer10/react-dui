import React from "react";
// import { useNavigate } from "react-router-dom";

function SettingsSections() {
  // const navigate = useNavigate();

  const handleRouteLogout = () => {
    // navigate("/");
  };

  return (
    <div className="flex space-x-4 mx-6 fill-current font-rubik gap-2">
      <div>
        <button
          onClick={handleRouteLogout}
          className="font-black rounded-md w-full text-lime-700"
        >
          MANAGER'S LOGIN
        </button>
      </div>
      <div className="flex justify-center">
        <button className="flex items-center justify-center rounded-md w-full text-lime-700">
          <p>SYNC</p>
        </button>
      </div>
    </div>
  );
}

export default SettingsSections;
