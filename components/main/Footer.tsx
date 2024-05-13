import React from "react";
import { motion } from "framer-motion";
import { RxInstagramLogo, RxTwitterLogo } from "react-icons/rx";
import { CgWebsite } from "react-icons/cg";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.5 } },
  };

  const itemVariants = {
    hidden: { x: -100 },
    visible: { x: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] "
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <motion.div
          className="w-full h-full flex flex-row items-center justify-around flex-wrap"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="min-w-[200px] h-auto flex flex-col items-center justify-start"
            variants={itemVariants}
          >
            <div className="font-bold text-[16px]">Projekty</div>
            <p className="flex flex-row items-center my-[10px] cursor-pointer">
              <CgWebsite />
              <a
                href="https://nataniel.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-[15px] ml-[6px]">Blog o Natanielku</span>
              </a>
            </p>
            <p className="flex flex-row items-center my-[10px] cursor-pointer">
              <CgWebsite />
              <a
                href="https://habitat-nat.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-[15px] ml-[6px]">Habitat Nataniela</span>
              </a>
            </p>
            <p className="flex flex-row items-center my-[10px] cursor-pointer">
              <CgWebsite />
              <a
                href="https://nataniel.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-[15px] ml-[6px]">Nataniel</span>
              </a>
            </p>
          </motion.div>

          <motion.div
            className="min-w-[200px] h-auto flex flex-col items-center justify-start"
            variants={itemVariants}
          >
            <div className="font-bold text-[16px]">Media</div>
            <p className="flex flex-row items-center my-[10px] cursor-pointer">
              <RxInstagramLogo />
              <a
                href="https://www.instagram.com/ewa1989"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-[15px] ml-[6px]">Instagram</span>
              </a>
            </p>
            <p className="flex flex-row items-center my-[10px] cursor-pointer">
              <RxTwitterLogo />
              <a
                href="https://twitter.com/i/flow/login?redirect_after_login=%2FEwa24286694"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-[15px] ml-[6px]">Twitter</span>
              </a>
            </p>
          </motion.div>

          <motion.div
            className="min-w-[200px] h-auto flex flex-col items-center justify-start"
            variants={itemVariants}
          >
            <div className="font-bold text-[16px]">Linki</div>
            <p className="flex flex-row items-center my-[10px] cursor-pointer">
              <a href="#o-natanku">
                <span className="text-[15px] ml-[6px]">O Natanku</span>
              </a>
            </p>
            <p className="flex flex-row items-center my-[10px] cursor-pointer">
              <a href="#filmy">
                <span className="text-[15px] ml-[6px]">Filmy</span>
              </a>
            </p>
            <p className="flex flex-row items-center my-[10px] cursor-pointer">
              <a href="#fototeka">
                <span className="text-[15px] ml-[6px]">Fototeka</span>
              </a>
            </p>
            <p className="flex flex-row items-center my-[10px] cursor-pointer">
              <a
                href="mailto:puaro@vp.pl"
                className="text-[15px] ml-[6px] text-blue-500 hover:underline cursor-pointer"
              >
                puaro@vp.pl
              </a>
            </p>
          </motion.div>
        </motion.div>
        <div className="mb-[20px] text-[15px] text-center">
          <p>Radom 2024 - {new Date().getFullYear()}.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
