"use client";

import React, { useState } from "react";
import { Socials } from "@/constants";
import Image from "next/image";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleMenuClick = () => {
    if (showMenu) {
      setShowMenu(false);
    }
  };

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-40 px-10">
      {showMenu && <div className="" onClick={toggleMenu}></div>}
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="#start" className="flex items-center">
          <Image
            src="/assets/1.webp"
            alt="Logo"
            width={70}
            height={70}
            priority
            className="cursor-pointer object-cover hover:animate-slowspin"
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Natanielek
          </span>
        </a>
        {/* Przycisk menu */}
        <div className="md:hidden">
          {!showMenu && (
            <div
              onClick={toggleMenu}
              className="fixed top-4 right-4 z-10 cursor-pointer"
            >
              <Image
                src="/assets/menu-icon.png"
                alt="Menu"
                width={24}
                height={24}
              />
            </div>
          )}
          {showMenu && (
            <div
              onClick={toggleMenu}
              className="fixed top-4 right-4 z-10 cursor-pointer"
            >
              <Image
                src="/assets/close-icon.png"
                alt="Close"
                width={24}
                height={24}
              />
            </div>
          )}
        </div>
        {/* Przyciski Navbaru na dużych ekranach */}
        <div className="hidden md:flex gap-4 justify-between  h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
          <a href="#o-natanku" className="text-gray-200 cursor-pointer">
            O Natanku
          </a>
          <a href="#filmy" className="text-gray-200 cursor-pointer">
            Filmy
          </a>
          <a href="#fototeka" className="text-gray-200 cursor-pointer">
            Fototeka
          </a>
          <div className="flex gap-5">
            {Socials.map((social) => (
              <a
                href={social.link}
                key={social.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={social.src}
                  alt={social.name}
                  key={social.name}
                  width={24}
                  height={24}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* Menu - widoczne na urządzeniach mobilnych */}
      {showMenu && (
        <div className="md:hidden fixed top-0 left-0 flex flex-col items-center justify-center w-full h-screen bg-blue-600 text-gray-100">
          <a
            href="#o-natanku"
            className="text-lg cursor-pointer mb-4"
            onClick={() => {
              handleMenuClick();
            }}
          >
            O Natanku
          </a>
          <a
            href="#filmy"
            className="text-lg cursor-pointer mb-4"
            onClick={() => {
              handleMenuClick();
            }}
          >
            Filmy
          </a>
          <a
            href="#fototeka"
            className="text-lg cursor-pointer mb-4"
            onClick={() => {
              handleMenuClick();
            }}
          >
            Fototeka
          </a>
          <div className="flex gap-5">
            {Socials.map((social) => (
              <a
                href={social.link}
                key={social.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={social.src}
                  alt={social.name}
                  key={social.name}
                  width={24}
                  height={24}
                />
              </a>
            ))}
          </div>
          <img
            src="/assets/6.webp"
            alt="..."
            className="flex justify-center mt-20 object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;
