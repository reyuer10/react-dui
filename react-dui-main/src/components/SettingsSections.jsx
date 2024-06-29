import React from "react";

function SettingsSections() {
  return (
    <div className="grid grid-cols-2 fill-current font-rubik gap-2 mx-2">
      <div className="flex justify-center">
        <button className="flex font-bold items-center justify-center space-x-2 rounded-md w-full text-lime-700">
          <p>LOGOUT</p>
        </button>
      </div>
      <div className="flex justify-center">
        <button className="flex font-bold items-center justify-center space-x-2 rounded-md w-full text-lime-700">
          <p>SYNC</p>
        </button>
      </div>
    </div>
  );
}

export default SettingsSections;
