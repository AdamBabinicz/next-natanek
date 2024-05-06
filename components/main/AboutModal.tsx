import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface AboutModalProps {
  closeModal: () => void;
}

const AboutModal: React.FC<AboutModalProps> = ({ closeModal }) => {
  const handleCloseModal = () => {
    closeModal();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-[50] bg-black bg-opacity-50"
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
          <h2 className="text-xl font-semibold mb-10 text-center">
            <strong>Nataniel znaczy 'podarowany przez Boga'</strong>
          </h2>
          <div className="mb-4">
            <Image
              src="/assets/14.jpg"
              alt="Image"
              className="max-h-[300px] rounded-lg object-cover w-full"
              width={500}
              height={300}
            />
          </div>
          <p className="text-gray-700 text-left">
            Imię dla swojego dziecka, rodzice wybrali nie bez powodu, bo życie
            to największy dar, jaki Bóg daje ludziom tu, na Ziemi. Zapewne z
            powodu szczęścia, jakie ich i całą rodzinę spotkało, pierworodny syn
            Ewy i Mariusza nosi to piękne, biblijne imię.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutModal;
