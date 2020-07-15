import React from "react";
import UseWindowDimensions from "../Utils/useWindowDimensions";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import Hero from "./Hero";

const Header = () => {
  const { width } = UseWindowDimensions();
  return (
    <header>
      {width >= 1280 ? <DesktopMenu /> : <MobileMenu />}
      <Hero />
    </header>
  );
};

export default Header;
