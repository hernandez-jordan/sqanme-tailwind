import { useEffect, useRef, useState } from 'react';

const useScroll = () => {
  const [goingUp, setGoingUp] = useState(true);
  const prevScrollY = useRef(0);
  //const isBrowser = typeof window !== `undefined`;
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY && goingUp) {
        setGoingUp(false);
      }
      if (prevScrollY.current > currentScrollY && !goingUp) {
        setGoingUp(true);
      }
      prevScrollY.current = currentScrollY;
    };
    
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    //console.log(goingUp, prevScrollY)
    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp, prevScrollY])
  return ({prevScrollY, goingUp})
}

export default useScroll