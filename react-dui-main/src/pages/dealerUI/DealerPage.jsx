import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useModal } from "../../hooks/useModal";

import Modal from "../../modal/Modal";
import BetAmount from "../modals/BetAmount";
import ModalConfirmation from "../../modal/ModalConfirmation";
import LeftSection from "./section/LeftSection";
import MiddleSection from "./section/MiddleSection";

import { useColorInput } from "../../hooks/useColorInput";
import { useColorBetInput } from "../../hooks/useColorBetInput";
import { colorData } from "../../data/colorData";
import { colorGameContext } from "../../App";
import EndContent from "../../components/EndContent";
import ModalHitJackpot from "../../modal/ModalHitJackpot";
import TripleHitJackpot from "../../modal/TripleHitJackpot";
import ModalNewGameTable from "../../modal/ModalNewGameTable";

export const dealerContext = createContext();

function DealerPage() {
  const storedTable = localStorage.getItem("table");
  const storedGameNo = localStorage.getItem("game-no");

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
  const { handleIncrementRound, socket, tableObject } = useContext(colorGameContext);

  const {
    colorBet,
    handleGetColorBet,
    handleDeleteColorBet,
    handleResetDefaultColorBet,
  } = useColorInput();


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

        socket.send(JSON.stringify({
          type: "send-to-room",
          room: storedTable,
          isModalOpen: true
        }))



      } else {
        console.log("WebSocket is not open.")
      }
    }
  };

  const handleRouteSelectView = () => {
    navigate("/color-game/select-view");
  };


  const handleOpenModalNewTableGame = () => {
    OpenModalTo(<ModalNewGameTable closeModal={closeModal} socket={socket} />)
  }


  const handleSyncTable = async () => {
    try {
      if (storedTable && storedGameNo && socket && socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify({
          type: "sync_table",
          room: storedTable,
        }))
      }
    } catch (error) {
      console.log("error sync table.", error)
    }
  }




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
      <div className="min-h-screen font-rubik bg-cover bg-[url(assets/pictures/casino-bg.jpg)]">
        <div className="flex font-black  text-amber-400 justify-between">
          <button onClick={handleRouteSelectView}>BACK</button>
        </div>
        <div className="flex justify-between h-[calc(99vh-20px)]">
          <LeftSection handleOpenRound={handleOpenRound} />
          <MiddleSection />
          <EndContent handleOpenModalNewTableGame={handleOpenModalNewTableGame} handleSyncTable={handleSyncTable} />
        </div>
      </div>
      <Modal isModalOpen={isModalOpen}>{currentModal}</Modal>
      <ModalConfirmation isConfirmationModalOpen={isConfirmationModalOpen}>
        {confirmationModal}
      </ModalConfirmation>
      <ModalHitJackpot openModal={tableObject.openModalTripleColor} >
        <TripleHitJackpot />
      </ModalHitJackpot>
    </dealerContext.Provider>
  );
}

export default DealerPage;
