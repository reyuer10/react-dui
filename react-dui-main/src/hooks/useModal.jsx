import { useCallback, useState } from "react";

export const useModal = () => {
  const [isModalOpen, setIsOpenModal] = useState(false);
  const [currentModal, setCurrentModal] = useState(null);

  const [confirmationModal, setConfirmationModal] = useState(null);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  const OpenModalTo = useCallback((modal) => {
    setCurrentModal(modal);
    setIsOpenModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setCurrentModal(null);
    setIsOpenModal(false);
  }, []);

  const OpenModalConfirmationTo = useCallback((modal) => {
    setConfirmationModal(modal);
    setIsConfirmationModalOpen(true);
  }, []);

  const closeModalConfirmaton = useCallback(() => {
    setConfirmationModal(null);
    setIsConfirmationModalOpen(false);
  }, []);

  return {
    OpenModalTo,
    closeModal,
    isModalOpen,
    currentModal,
    OpenModalConfirmationTo,
    closeModalConfirmaton,
    confirmationModal,
    isConfirmationModalOpen,
  };
};
