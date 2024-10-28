import React from "react";

function Modal({ children, isModalOpen }) {
  if (!isModalOpen) {
    return false;
  }
  return (
    <div className="inset-0 fixed w-full flex justify-center items-center flex-col">
      <div>{children}</div>
    </div>
  );
}

export default Modal;
