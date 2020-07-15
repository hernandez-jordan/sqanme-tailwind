import React from "react";
//import Logo from "../../img/logo_emblem.svg";

const tailwindcss = {
  link: ['block lg:inline-block opacity-75 text-white hover:opacity-100 mr-8  mt-3 text-lg transition-opacity duration-200 ease-out'],
  img: ['w-full'],
  logo: ['font-semibold text-3xl tracking-tight text-white'],
  menuLinks: ['w-full block lg:flex justify-end lg:w-auto'],
  button: ['bg-indico ml-16 inline-block text-xl px-12 py-4 leading-none rounded-full text-white hover:text-white border hover:border-white hover:bg-indigo-900 transition-bg duration-200 ease-out hover:shadow-lg'],
  nav: ['w-10/12 m-auto flex items-center justify-between flex-wrap bg-black']
};

const DesktopMenu = () => {
  return (
    <div className="pt-8 pb-8 z-10 bg-black">
      <nav className={tailwindcss.nav}>
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <svg
            className="fill-current h-10 w-10 mr-2"
            width="70"
            height="70"
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
          <span className={tailwindcss.logo}>sQan me</span>
        </div>
        <div className={tailwindcss.menuLinks}>
          <div>
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
