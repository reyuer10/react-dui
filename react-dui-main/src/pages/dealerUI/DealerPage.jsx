import React, { createContext, useEffect, useState } from "react";
import SettingsSections from "../../components/SettingsSections";
import { useNavigate } from "react-router-dom";
import { useModal } from "../../hooks/useModal";
import Modal from "../../modal/Modal";
import BetAmount from "../modals/BetAmount";
import ModalConfirmation from "../../modal/ModalConfirmation";
import LeftSection from "./section/LeftSection";
import MiddleSection from "./section/MiddleSection";
import RightSection from "./section/RightSection";

export const dealerContext = createContext();

function DealerPage() {
  const {
    OpenModalTo,
    closeModal,
    currentModal,
    isModalOpen,
    OpenModalConfirmationTo,
    closeModalConfirmaton,
    confirmationModal,
    isConfirmationModalOpen,
  } = useModal();
  const navigate = useNavigate();
  const [amount, setAmount] = useState(0);

  const handleRouteSelectView = () => {
    navigate("/color-game/select-view");
  };

  const handleOpenRound = () => {
    OpenModalTo(<BetAmount />);
  };

  return (
    <dealerContext.Provider
      value={{
        amount,
        setAmount,
        OpenModalTo,
        closeModal,
        OpenModalConfirmationTo,
        closeModalConfirmaton,
      }}
    >
      <div className="min-h-screen font-rubik bg-gradient-to-t from-gray-700 via-amber-600 to-amber-400">
        <div className="flex font-black  text-orange-700 justify-between border-b border-orange-700 shadow shadow-orange-700">
          <button onClick={handleRouteSelectView}>BACK</button>
          <SettingsSections />
        </div>
        <div className="flex justify-between h-[calc(99vh-20px)] ">
          <LeftSection handleOpenRound={handleOpenRound} />
          <MiddleSection />
          <RightSection />
        </div>
      </div>
      <Modal isModalOpen={isModalOpen}>{currentModal}</Modal>
      <ModalConfirmation isConfirmationModalOpen={isConfirmationModalOpen}>
        {confirmationModal}
      </ModalConfirmation>
    </dealerContext.Provider>
  );
}

export default DealerPage;
