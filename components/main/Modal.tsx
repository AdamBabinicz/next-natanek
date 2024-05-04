"use client";

import React from "react";
import { motion } from "framer-motion";

interface ModalProps {
  closeModal: () => void;
  modalContent: React.ReactNode; // Dodatkowy parametr określający treść modala
}

const Modal: React.FC<ModalProps> = ({ closeModal, modalContent }) => {
  const handleCloseModal = () => {
    closeModal();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-[60] bg-black bg-opacity-50"
      onClick={handleCloseModal}
    >
      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-lg shadow-lg overflow-hidden max-w-screen-md w-full justify-items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8">
          <div className="flex justify-end mb-2">
            <button
              onClick={handleCloseModal}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          {/* Renderowanie przekazanej treści modala */}
          {modalContent}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
