import React from "react";

function PrimaryLabel({ children }) {
  return (
    <label className="text-white font-black text-3xl primary-drop-shadow">
      {children}
    </label>
  );
}

export default PrimaryLabel;
