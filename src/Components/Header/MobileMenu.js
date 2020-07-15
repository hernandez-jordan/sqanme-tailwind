import React, { useState } from "react";
import useScroll from "../Utils/useScroll";

const tailwindcss = {
  link: [
    "block mt-4 xl:inline-block xl:mt-0 text-teal-200 hover:text-white mr-4",
  ],
  img: ["w-full"],
  menuButton: [
    "flex items-center focus:outline-none px-3 py-2 border rounded text-white border-white transition-border duration-200 ease-out",
  ],
  menuOpen: ["w-full block xl:flex justify-end xl:w-auto"],
  menuClosed: ["w-full block xl:flex justify-end xl:w-auto hidden "],
  navScrollUp: [
    "flex items-center justify-between flex-wrap p-6 shadow-lg z-10 fixed bg-teal-500 w-screen",
  ],
  navScrollDown: [
    "flex items-center justify-between flex-wrap p-6 shadow-lg z-10 fixed bg-black w-screen",
  ],
};

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuHandle = () => {
    setIsOpen(!isOpen);
  };
  const showMenu = isOpen ? tailwindcss.menuOpen : tailwindcss.menuClosed;

  const navScroll = useScroll() ? tailwindcss.navScrollUp[0] : null;

  return (
    <nav className={navScroll}>
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <svg
          className="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Path_543"
            data-name="Path 543"
            d="M206.443,22.779A16.548,16.548,0,0,0,189.9,39.327V69.049h29.06A16.548,16.548,0,0,0,235.5,52.5V22.779Zm-7.979,44.836h-6.695V60.681h6.695Z"
            transform="translate(-189.896 -22.779)"
            fill="#fff"
          />
        </svg>
        <span
          className="font-semibold text-xl tracking-tight text-gray-200
        "
        >
          sQan me
        </span>
      </div>
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
            Features
          </a>
          <a href="/#responsive-header" className={tailwindcss.link}>
            How it works
          </a>
          <a href="/#responsive-header" className={tailwindcss.link}>
            Pricing
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
  );
};

export default MobileMenu;
