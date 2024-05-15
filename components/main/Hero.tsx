import React, { useState } from "react";
import HeroContent from "../sub/HeroContent";
import AboutModal from "@/components/main/AboutModal";

const Hero = () => {
  // Stan śledzący informację, czy modal dla sekcji "About" jest otwarty
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);

  // Funkcja otwierająca modal dla sekcji "About"
  const openAboutModal = () => {
    setIsAboutModalOpen(true);
  };

  // Funkcja zamykająca modal dla sekcji "About"
  const closeModal = () => {
    setIsAboutModalOpen(false);
  };

  return (
    <div id="start" className="relative flex flex-col h-full w-full">
      <video
        preload="none"
        playsInline
        autoPlay
        muted
        loop
        className="rotate-0 absolute sm:top-[65px] top-[40px] left-0 z-[1] w-full h-full sm:h-[800px] object-contain"
        src="/assets/1.mp4"
        style={{ maxWidth: "100%" }}
      >
        Twoja przeglądarka nie obsługuje tagu video.
      </video>
      <HeroContent openAboutModal={openAboutModal} />
      {/* Renderujemy AboutModal, jeśli isAboutModalOpen jest ustawione na true */}
      {isAboutModalOpen && <AboutModal closeModal={closeModal} />}
    </div>
  );
};

export default Hero;
