import React from "react";
import Logo from "../Header/Logo";

const tailwindcss = {
  link: [
    `block lg:inline-block opacity-75 text-indico hover:opacity-100 mr-6 xxl:mr-8 text-lg xxl:text-2xl
    transition-opacity duration-200 ease-out 
    `,
  ],
  img: [
    `w-full
    `,
  ],
  logo: [
    `font-medium text-3xl tracking-tight text-indico
    `,
  ],
  menuLinks: [
    `w-full block lg:flex justify-end lg:w-auto items-center
    `,
  ],
  button: [
    `bg-indico inline-block font-semibold text-lg xxl:text-2xl px-12 py-4 leading-none rounded-full text-white hover:text-white border 
    hover:border-white hover:bg-indico transition-bg duration-200 ease-out hover:shadow-lg hover:bg-opacity-75
    `,
  ],
  nav: [
    `w-10/12 m-auto flex items-center justify-between flex-wrap bg-white
    `,
  ],
};

const DesktopMenu = () => {
  return (
    <div className="pt-8 pb-8 z-10 bg-white">
      <nav className={tailwindcss.nav}>
        <Logo />
        <div className={tailwindcss.menuLinks}>
          <div className="mr-12 xxl:mr-16">
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
          <div>
            <a href="/#" className={tailwindcss.button}>
              Download
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default DesktopMenu;
