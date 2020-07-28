import React, { useState } from "react";
import useScroll from "../Utils/useScroll";
import Logo from "../Header/Logo";

const tailwindcss = {
  link: [
    `block  xl:inline-block xl:mt-0 text-teal-200 hover:text-white rounded px-2 py-2 hover:bg-white hover:bg-opacity-25`,
  ],
  img: [`w-full`],
  menuButton: [
    `transition duration-700 ease-out flex items-center focus:outline-none px-3 py-2 border rounded text-white border-white`,
  ],
  menuOpen: [
    `transition duration-700 ease-out opacity-1 translate-y-40 w-full block xl:flex justify-end xl:w-auto`,
  ],
  menuClosed: [
    `transition duration-700 ease-out opacity-0 hidden w-full block xl:flex justify-end xl:w-auto`,
  ],
  navScrollUp: [
    `transition duration-300 ease-out flex items-center justify-between flex-wrap p-6 shadow-lg z-10 bg-teal-500 w-screen
    fixed`,
  ],
  navScrollDown: [
    `transition duration-100 ease-in flex items-center justify-between flex-wrap p-6 shadow-lg z-10 bg-teal-500 w-screen
    fixed transform -translate-y-24`,
  ],
};

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuHandle = () => {
    setIsOpen(!isOpen);
  };
  const showMenu = isOpen ? tailwindcss.menuOpen : tailwindcss.menuClosed;

  const useScrollUp = useScroll().goingUp;
  //const useScrollY = useScroll().prevScrollY.current;
  const navBar = useScrollUp
    ? tailwindcss.navScrollUp
    : isOpen
    ? setIsOpen(false)
    : tailwindcss.navScrollDown;

  return (
    <>
      <nav className={navBar}>
      <Logo />
        <div className="block xl:hidden">
          <button onClick={menuHandle} className={tailwindcss.menuButton}>
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className={showMenu}>
          <div className="text-sm xl:flex-grow mt-6">
            <a href="/#responsive-header" className={tailwindcss.link}>
              Home
            </a>
            <a href="/#responsive-header" className={tailwindcss.link}>
              About
            </a>
            <a href="/#responsive-header" className={tailwindcss.link}>
              Features
            </a>
            <a href="/#responsive-header" className={tailwindcss.link}>
              Pricing
            </a>
            <a href="/#responsive-header" className={tailwindcss.link}>
              Contact
            </a>
          </div>
          <div className="border-t border-green-200 mt-6 border-opacity-25 large:hidden-border">
            <a
              href="/#"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-6 transition-bg duration-200 ease-out"
            >
              Download
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MobileMenu;
