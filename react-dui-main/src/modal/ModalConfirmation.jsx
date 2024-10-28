import React from "react";

function ModalConfirmation({ isConfirmationModalOpen, children }) {
  if (!isConfirmationModalOpen) {
    return false;
  }
  return <div>{children}</div>;
}

export default ModalConfirmation;
