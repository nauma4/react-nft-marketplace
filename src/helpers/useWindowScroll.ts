import { useState, useEffect } from "react";

interface ScrollPosition {
  x: number;
  y: number;
}

const useWindowScroll = (): ScrollPosition => {
  const [scroll, setScroll] = useState<ScrollPosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScroll({ x: window.scrollX, y: window.scrollY });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scroll;
};

export default useWindowScroll;
