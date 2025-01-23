import { useEffect, useState } from "react";

export const useScreenDetector = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const handleWindowsSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowsSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowsSizeChange);
    };
  }, []);

  const isMobile = width < 1024;
  const isLaptop = width > 1024;

  return { isMobile, isLaptop };
};
