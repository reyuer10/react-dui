import React from "react";

function ModalInputResults({ children, openModalResults }) {
  if (!openModalResults) {
    return false;
  }
  return (
    <div className="inset-0 absolute h-screen z-20 justify-center flex items-center">
      {children}
    </div>
  );
}

export default ModalInputResults;
