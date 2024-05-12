"use client";

import { useState } from "react";
import About from "@/components/main/About";
// import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
// import Skills from "@/components/main/Skills";
import ModalContainer from "@/components/main/ModalContainer";
import Film from "@/components/main/Film";
import Link from "next/link";

export default function Home() {
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isModalBOpen, setIsModalBOpen] = useState(false);

  const openAboutModal = () => {
    setIsAboutModalOpen(true);
  };

  const openModalB = () => {
    setIsModalBOpen(true);
  };

  const closeAboutModal = () => {
    setIsAboutModalOpen(false);
  };

  const closeModalB = () => {
    setIsModalBOpen(false);
  };

  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <About openModalB={openModalB} />
        <Film />
        {/* <Skills /> */}
        {/* <Encryption /> */}
        <Projects />
      </div>
      {/* Modale */}
      <ModalContainer
        isModalBOpen={isModalBOpen}
        isAboutModalOpen={isAboutModalOpen}
        closeModalB={closeModalB}
        closeAboutModal={closeAboutModal}
      />
    </main>
  );
}
