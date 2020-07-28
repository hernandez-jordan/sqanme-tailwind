import React from "react";
import Logo from "../Header/Logo";

const tailwindcss = {
  link: [
    `block lg:inline-block opacity-75 text-indico-100 hover:opacity-100 mr-6 xxl:mr-8 text-lg xxl:text-2xl
    transition-opacity duration-200 ease-out hover:border-indico-100 border-white border-b-2 transition-border duration-500 ease-out 
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
    `bg-indico-100 inline-block font-semibold text-lg xxl:text-2xl px-12 py-4 leading-none rounded-full text-white hover:text-white  
     transition-bg duration-200 ease-out hover:shadow-lg hover:bg-indico-200
    `,
  ],
  nav: [
    `m-auto flex items-center justify-between flex-wrap bg-white
    `,
  ],
};

const DesktopMenu = () => {
  return (
    <div className="pt-8 pb-8 z-10 bg-white container">
      <nav className={tailwindcss.nav}>
        <Logo />
        <div className={tailwindcss.menuLinks}>
          <div className="mr-12 xxl:mr-16">
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
