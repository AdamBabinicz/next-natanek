import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion"; // Importuj animacje
import Image from "next/image";

interface AboutProps {
  openModalB: () => void;
}

const About: React.FC<AboutProps> = ({ openModalB }) => {
  const handleClick = () => {
    openModalB();
    console.log("Funkcja openModalB wywołana");
  };

  const style = {
    background: "linear-gradient(to right, #9F7AEA, #00F3FF)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  };

  return (
    <div
      className="px-8 py-10 sm:my-4 items-center sm:flex sm:w-full sm:px-20 z-[20]"
      id="o-natanku"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          className="md:order-1"
          variants={slideInFromLeft(0.5)}
          initial="hidden"
          animate="visible"
        >
          <Image
            src="/assets/7.webp"
            alt="About Image"
            width={500}
            height={500}
          />
        </motion.div>
        <motion.div
          className="md:order-2"
          variants={slideInFromRight(0.5)}
          initial="hidden"
          animate="visible"
        >
          <h2
            className="text-[40px] font-semibold relative sm:py-20"
            style={style}
          >
            Natanek jako kierowca
          </h2>
          <p className="text-lg mb-4 text-white">
            Natanielek przejawia zainteresowanie motoryzacją i&nbsp;to zarówno
            jednośladową, dwuśladową i&nbsp;trójśladową. Nie omieszka skorzystać
            z&nbsp;okazji, aby nie zasiąść za kierownicą auta, gdy tata mu na to
            pozwala. Potrafi nawet użyć klaksonu, chociaż nie ma na tyle siły,
            aby go uruchomić. Radzi sobie w&nbsp;ten sposób, że trzymając
            oburącz kierownicę przyciska się do niej całym ciałem i&nbsp;trąbi.
          </p>
          <motion.a
            variants={slideInFromRight(0.7)}
            initial="hidden"
            animate="visible"
            className="py-2 button-primary text-center text-white cursor-pointer rounded-lg px-4 max-w-[200px]"
            onClick={handleClick}
          >
            Więcej informacji
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
