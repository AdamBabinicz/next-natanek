"use client";

// Komponent About
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";
import Image from "next/image";

interface AboutProps {
  openModalB: () => void; // Zmieniamy nazwę propsa na openModalB
}

const About: React.FC<AboutProps> = ({ openModalB }) => {
  // Zmieniamy nazwę propsa na openModalB
  const handleClick = () => {
    openModalB(); // Wywołujemy funkcję otwierającą ModalB
    console.log("Funkcja openModalB wywołana");
  };

  return (
    <div
      className="px-8 items-center sm:flex sm:w-full sm:px-20 mt-40 z-[20]"
      id="o-natanku"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Zdjęcie */}
        <div>
          <Image
            src="/assets/7.webp"
            alt="About Image"
            width={500}
            height={500}
          />
        </div>
        {/* Treść */}
        <div>
          <h2 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
            Natanek jako kierowca
          </h2>
          <p className="text-lg mb-4 text-white">
            Natanielek przejawia zainteresowanie motoryzacją i to zarówno
            jednośladową, trójśladową i czterośladową. Nie omieszka skorzystać z
            okazji, aby nie zasiąść za kierownicą auta, gdy tata mu na to
            pozwala. Potrafi nawet użyć klaksonu, chociaż nie ma na tyle siły,
            aby go uruchomić. Radzi sobie w ten sposób, że trzymając oburącz
            kierownicę przyciska się do niej całym ciałem i trąbi.
          </p>
          <motion.a
            variants={slideInFromLeft(1)}
            className="py-2 button-primary text-center text-white cursor-pointer rounded-lg px-4 max-w-[200px]"
            onClick={handleClick} // Po kliknięciu otwieramy ModalB
          >
            Więcej informacji
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default About;
