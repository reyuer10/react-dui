import React from "react";

function ModalConfirmation({ isConfirmationModalOpen, children }) {
  if (!isConfirmationModalOpen) {
    return false;
  }
  return <div className="z-50" >{children}</div>;
}

export default ModalConfirmation;
