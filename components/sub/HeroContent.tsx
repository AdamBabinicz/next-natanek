"use client";

// Komponent HeroContent
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

interface HeroContentProps {
  openAboutModal: () => void;
}

const HeroContent: React.FC<HeroContentProps> = ({ openAboutModal }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="px-8 items-center sm:flex sm:w-full sm:px-20 mt-40 z-[20]"
    >
      <div className="h-full w-full flex flex-col justify-center text-center sm:text-start">
        <div className="mx-auto">
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
          >
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[13px]">Fototeka Natanielka</h1>
          </motion.div>
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
          >
            <span>
              Natanek
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                w{" "}
              </span>
              obiektywie
            </span>
          </motion.div>
          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-lg text-white my-5 max-w-[600px]"
          >
            Natanek jest bardzo żywiołowym i pogodnym dzieckiem. Interesuje się
            szczególnie sprzętem gospodarstwa domowego. Zna niektóre odgłosy
            natury, rozpoznaje i naśladuje zwierzątka. Reaguje na poruszające
            się samoloty i samochody.
          </motion.p>
          {/* Renderujemy przycisk "Otwórz modal" */}
          <motion.a
            variants={slideInFromLeft(1)}
            className="py-2 button-primary text-center text-white cursor-pointer rounded-lg px-4 max-w-[200px]"
            onClick={openAboutModal} // Po kliknięciu otwieramy AboutModal
          >
            Otwórz
          </motion.a>
        </div>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/assets/3.png"
          alt="work icons"
          height={650}
          width={650}
          priority
          className="object-cover hidden sm:block"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
