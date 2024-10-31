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
import { useColorInput } from "../../hooks/useColorInput";
import { useColorBetInput } from "../../hooks/useColorBetInput";

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

  const { colorBet, handleGetColorBet, handleDeleteColorGet } = useColorInput();
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
  } = useColorBetInput();

  const [isColorBetEmpty, setIsColorBetEmpty] = useState(false);
  const [isBetAmountEmpty, setIsBetAmountEmpty] = useState(false);

  console.log(colorBetAmountID);

  return (
    <dealerContext.Provider
      value={{
        amount,
        colorBet,
        isColorBetEmpty,
        setIsColorBetEmpty,
        isBetAmountEmpty,
        setIsBetAmountEmpty,
        handleGetColorBet,
        handleDeleteColorGet,
        setAmount,
        OpenModalTo,
        closeModal,
        OpenModalConfirmationTo,
        closeModalConfirmaton,
        currentChipsBet,
        handleSelectBetAmount,
        chipsCurrentID,
        setChipsCurrentID,
        handleIncrementBetAmount,
        totalAmount,
        newColorData,
        handleOpenEnableColorBetAmount,
        colorBetAmountID,
        isResetAmountEnable,
        handleRemoveSelectBetAmount,
        handleResetColorBetAmount,
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
