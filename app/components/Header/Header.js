"use client";
import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-[#3b3b3f] w-full text-white h-[80px] sticky z-50 top-0">
      <div className="max-w-[1350px] mx-auto flex justify-between h-full items-center px-8">
        <h2 className="font-bold text-3xl">Guarder</h2>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Links for Desktop */}
        <nav className="hidden md:flex gap-6 h-full items-center">
          <a
            href="#home"
            className="text-[18px] flex items-center w-fit  justify-center h-full hover:bg-[#1C1C1C] px-2 cursor-pointer transition-colors duration-200"
          >
            HOME
          </a>
          <a
            href="#about"
            className="text-[18px] flex items-center justify-center h-full hover:bg-[#1C1C1C] px-2 cursor-pointer transition-colors duration-200"
          >
            ABOUT
          </a>
          <a
            href="#services"
            className="text-[18px] flex items-center justify-center h-full hover:bg-[#1C1C1C] px-2 cursor-pointer transition-colors duration-200"
          >
            SERVICES
          </a>
          <a
            href="#guards"
            className="text-[18px] flex items-center justify-center h-full hover:bg-[#1C1C1C] px-2 cursor-pointer transition-colors duration-200"
          >
            GUARDS
          </a>
          <a
            href="#contact"
            className="text-[18px] flex items-center justify-center h-full hover:bg-[#1C1C1C] px-2 cursor-pointer transition-colors duration-200"
          >
            CONTACT US
          </a>
        </nav>
      </div>

      {/* Mobile Menu Links */}
      {isMenuOpen && (
        <nav className="md:hidden bg-[#42424e] flex flex-col gap-4 p-4">
          <a
            href="#home"
            className="text-[18px] flex items-center justify-center hover:bg-[#1C1C1C] px-2 cursor-pointer transition-colors duration-200"
            onClick={toggleMenu}
          >
            HOME
          </a>
          <a
            href="#about"
            className="text-[18px] flex items-center justify-center hover:bg-[#1C1C1C] px-2 cursor-pointer transition-colors duration-200"
            onClick={toggleMenu}
          >
            ABOUT
          </a>
          <a
            href="#services"
            className="text-[18px] flex items-center justify-center hover:bg-[#1C1C1C] px-2 cursor-pointer transition-colors duration-200"
            onClick={toggleMenu}
          >
            SERVICES
          </a>
          <a
            href="#guards"
            className="text-[18px] flex items-center justify-center hover:bg-[#1C1C1C] px-2 cursor-pointer transition-colors duration-200"
            onClick={toggleMenu}
          >
            GUARDS
          </a>
          <a
            href="#contact"
            className="text-[18px] flex items-center justify-center hover:bg-[#1C1C1C] px-2 cursor-pointer transition-colors duration-200"
            onClick={toggleMenu}
          >
            CONTACT US
          </a>
        </nav>
      )}
    </div>
  );
};

export default Header;
