import React from "react";
import ModalB from "@/components/main/ModalB";
import AboutModal from "@/components/main/AboutModal";

interface ModalContainerProps {
  isModalBOpen: boolean;
  isAboutModalOpen: boolean;
  closeModalB: () => void;
  closeAboutModal: () => void;
}

const ModalContainer: React.FC<ModalContainerProps> = ({
  isModalBOpen,
  isAboutModalOpen,
  closeModalB,
  closeAboutModal,
}) => {
  return (
    <>
      {isModalBOpen && <ModalB closeModal={closeModalB} />}
      {isAboutModalOpen && <AboutModal closeModal={closeAboutModal} />}
    </>
  );
};

export default ModalContainer;
