import React from "react";
import UseWindowDimensions from "../Utils/useWindowDimensions";

const tailwindcss = {
  DesktopLogo: [
    `font-medium text-5xl tracking-tight text-indico-100  `,
  ],
  MobileLogo: [
    `font-normal text-2xl tracking-tight text-white`,
  ]
};


const Logo = () => {
  const { width } = UseWindowDimensions();
  const widthSize = width >= 1280 ;
  const logoFont = widthSize ? tailwindcss.DesktopLogo : tailwindcss.MobileLogo ;
  const logoDimension = widthSize ? 80 : 40 ; 
  const logoFill = widthSize ? "#28C1AA" : "#fff";

  return (
    <a href="#Home" className="flex items-center">
      <svg
        //className="fill-current h-14 w-14 mr-2"
        width={logoDimension}
        height={logoDimension}
        viewBox="0 0 54 54"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Path_543"
          data-name="Path 543"
          d="M206.443,22.779A16.548,16.548,0,0,0,189.9,39.327V69.049h29.06A16.548,16.548,0,0,0,235.5,52.5V22.779Zm-7.979,44.836h-6.695V60.681h6.695Z"
          transform="translate(-189.896 -22.779)"
          fill={logoFill}
        />
      </svg>
      <span className={logoFont}>sQan me</span>
    </a>
  );
};

export default Logo;
