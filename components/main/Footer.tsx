"use client";

import React from "react";
import { RxInstagramLogo, RxTwitterLogo } from "react-icons/rx";
import { CgWebsite } from "react-icons/cg";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
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
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
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
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
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
          </div>
        </div>
        <div className="mb-[20px] text-[15px] text-center">
          <p>Radom 2024 - {new Date().getFullYear()}.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
