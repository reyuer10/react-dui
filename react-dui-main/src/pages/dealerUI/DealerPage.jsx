import React, { createContext, useContext, useEffect, useState } from "react";
import SettingsSections from "../../components/SettingsSections";
import { useNavigate } from "react-router-dom";
import { useModal } from "../../hooks/useModal";

import Modal from "../../modal/Modal";
import BetAmount from "../modals/BetAmount";
import ModalConfirmation from "../../modal/ModalConfirmation";
import LeftSection from "./section/LeftSection";
import MiddleSection from "./section/MiddleSection";
import RightSection from "./section/RightSection";

import { useColorInput } from "../../hooks/useColorInput";
import { useColorBetInput } from "../../hooks/useColorBetInput";
import { colorData } from "../../data/colorData";
import { colorGameContext } from "../../App";

export const dealerContext = createContext();

function DealerPage() {
  const storedTable = localStorage.getItem("table");

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
  const [isColorBetEmpty, setIsColorBetEmpty] = useState(false);
  const [isBetAmountEmpty, setIsBetAmountEmpty] = useState(false);
  const { handleIncrementRound, socket, setOpenModalResults } = useContext(colorGameContext);

  const {
    colorBet,
    handleGetColorBet,
    handleDeleteColorBet,
    handleResetDefaultColorBet,
  } = useColorInput();

  console.log();

  const {
    totalAmount,
    newColorData,
    chipsCurrentID,
    currentChipsBet,
    colorBetAmountID,
    isResetAmountEnable,
    handleSelectBetAmount,
    setChipsCurrentID,
    handleIncrementBetAmount,
    handleOpenEnableColorBetAmount,
    handleRemoveSelectBetAmount,
    handleResetColorBetAmount,
    handleResetDefaultBet,
    colorAmount,
  } = useColorBetInput();


  const handleOpenRound = () => {
    OpenModalTo(<BetAmount />);
    handleIncrementRound();
    if (storedTable) {
      if (storedTable && socket && socket.readyState === WebSocket.OPEN) {
        const openModal = {
          type: "send-to-room",
          room: storedTable,
          isModalOpen: true
        }

        socket.send(JSON.stringify(openModal));
        setOpenModalResults(openModal.isModalOpen)
      } else {
        console.log("WebSocket is not open.")
      }
    }
  };

  const handleRouteSelectView = () => {
    navigate("/color-game/select-view");
  };

  return (
    <dealerContext.Provider
      value={{
        amount,
        colorBet,
        colorData,
        currentChipsBet,
        isColorBetEmpty,
        isBetAmountEmpty,
        totalAmount,
        colorBetAmountID,
        isResetAmountEnable,
        newColorData,
        chipsCurrentID,
        colorAmount,
        setIsColorBetEmpty,
        setIsBetAmountEmpty,
        handleGetColorBet,
        handleDeleteColorBet,
        setAmount,
        OpenModalTo,
        closeModal,
        OpenModalConfirmationTo,
        closeModalConfirmaton,
        handleSelectBetAmount,
        setChipsCurrentID,
        handleIncrementBetAmount,
        handleOpenEnableColorBetAmount,
        handleRemoveSelectBetAmount,
        handleResetColorBetAmount,
        handleDeleteColorBet,
        handleResetDefaultBet,
        handleResetDefaultColorBet,
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
