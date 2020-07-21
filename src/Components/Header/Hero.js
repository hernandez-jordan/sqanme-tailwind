import React, { useState } from "react";
import bannerImage from "../../Images/bannerImage.svg";

const tailwindcss = {
  banner: [
    ` container flex flex-col xl:flex-row m-auto self-center h-screen transform translate-y-40 xl:translate-y-20 inline-block 
    justify-center text-center
    xl:justify-between xl:text-left`,
  ],
  button: [
    `flex bg-indico focus:outline-none inline-block text:xl lg:text-2xl px-12 py-6 mt-8 
    font-medium lg:font-semibold items-center leading-none rounded-full text-white
    border hover:border-white transform transition-bg duration-200 ease-out hover:shadow-lg hover:bg-opacity-75
    m-auto mt-4
    xl:m-0 xl:mt-8`,
  ],
  backgroundImage: [
    ` xl:block xl:w-3/6 bg-contain lg:max-h-3/4 m-auto xl:m-0 w-4/5 mt-20 xl:mt-0`,
  ],
  arrowActive: [
    `ml-8 transition duration-200 ease-out transform translate-x-4`,
  ],
  arrowNotActive: [
    `ml-8 transition duration-200 ease-out transform translate-x-0`,
  ],
};
const style = {
  bannerDiv: {
    backgroundImage: `url(${bannerImage})`,
    backgroundRepeat: "no-repeat",
    //height: "37rem",
  },
  button: {
    width: "fit-content",
  },
};
const Hero = () => {
  const [isShown, setIsShown] = useState(false);
  const buttonArrow = (
    <svg
      id="arrow-long-right"
      xmlns="http://www.w3.org/2000/svg"
      width="26.088"
      height="10"
      viewBox="0 0 26.088 10"
      className={isShown ? tailwindcss.arrowActive : tailwindcss.arrowNotActive}
    >
      <path
        id="arrow-long-right-2"
        data-name="arrow-long-right"
        d="M27.019,12.749,22.011,7.757,20.347,9.427l2.163,2.156-21.578,0v2.357l21.572,0-2.147,2.154,1.669,1.664Z"
        transform="translate(-0.932 -7.757)"
        fill="#fff"
      />
    </svg>
  );

  return (
    <>
      <div className={tailwindcss.banner}>
        <div className="flex flex-col">
          <h1 className="lg-content-center text-4xl lg:text-6xl text-indigo-900 xl:pt-10 leading-snug font-bold">
            Networking simplified. <br />
            sQan me, with a Q!
          </h1>
          <h2 className="text-2xl text-indigo-900 mt-2 font-hairline	">
            Try sQan me Premium free for 30 days*
          </h2>
          <button
            className={tailwindcss.button}
            style={style.button}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          >
            TRY FOR FREE
            {buttonArrow}
          </button>
        </div>
        <div className={tailwindcss.backgroundImage}>
        <div
          className="bg-contain m-auto lg:w-3/4 xl:w-auto xl:h-full h-bgimage"
          style={style.bannerDiv}
        ></div>
        </div>
        
      </div>
    </>
  );
};

export default Hero;
