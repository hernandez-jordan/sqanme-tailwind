import React, { useState } from "react";
import bannerImage from "../../Images/bannerImage.svg";
import useHover from "../Utils/useHover";

const tailwindcss = {
  banner: [
    "flex justify-between px-6 lg:px-0 lg:w-10/12 m-auto self-center h-screen transform translate-y-20 lg:translate-y-40 inline-block",
  ],
  button: [
    `flex bg-indico focus:outline-none inline-block text-2xl px-12 py-6 mt-8 font-semibold items-center leading-none rounded-full 
    text-white hover:text-white border hover:border-white hover:bg-indigo-900 transition-bg duration-200 ease-out hover:shadow-lg`,
  ],
  backgroundImage: [
    "xl:block w-3/6 bg-contain max-h-3/4 sm:hidden"
  ],
  arrowActive:[
    "ml-8 transition duration-500 delay-1000 ease-in-out transform hover:translate-x-4"
  ],
  arrowNotActive:[
    "ml-8"
  ],
};
const style = {
  bannerDiv: {
    backgroundImage: `url(${bannerImage})`,
    backgroundRepeat: "no-repeat",
  },
};
const Hero = () => {
  // const [hoverRef, isHovered] = useHover();
  const [isShown, setIsShown] = useState(false);
  
  return (
    <>
      <div className={tailwindcss.banner}>
        <div>
          <h1 className="text-4xl lg:text-6xl text-indigo-900 pt-10 leading-snug font-bold">
            Networking simplified. <br />
            sQan me, with a Q!
          </h1>
          <h2 className="transition duration-500 ease-in-out bg-blue-500 transform hover:translate-x-12 ">
            HOLLAA IM JORDAN
          </h2>
          <h2 className="text-2xl text-indigo-900 mt-2 font-hairline	">
            Try sQan me Premium free for 30 days*
          </h2>
          <div className={(isShown) ? tailwindcss.arrowActive : tailwindcss.arrowNonActive}>test</div>
          <button
            className={tailwindcss.button}
            //ref={hoverRef}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          >
           TRY FOR FREE
            {/* {isHovered ? console.log("hover") : console.log("not hovering")} */}
           
            <svg
              id="arrow-long-right"
              xmlns="http://www.w3.org/2000/svg"
              width="26.088"
              height="10"
              viewBox="0 0 26.088 10"
              className={(isShown) ? tailwindcss.arrowActive : tailwindcss.arrowNonActive}
            >
              <path
                id="arrow-long-right-2"
                data-name="arrow-long-right"
                d="M27.019,12.749,22.011,7.757,20.347,9.427l2.163,2.156-21.578,0v2.357l21.572,0-2.147,2.154,1.669,1.664Z"
                transform="translate(-0.932 -7.757)"
                fill="#fff"
              />
            </svg>
          </button>
          {/* {isShown && (
        <div className={tailwindcss.arrowActive}
        >
          I'll appear when you hover over the button.
        </div>
      )} */}
      {/* { <div className={(isShown) ? tailwindcss.arrowActive : tailwindcss.arrowNonActive}>hi</div>} */}
        </div>
        <div
          className={tailwindcss.backgroundImage}
          style={style.bannerDiv}
        ></div>
      </div>
    </>
  );
};

export default Hero;
