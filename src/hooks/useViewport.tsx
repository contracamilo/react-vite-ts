import { useState, useEffect } from "react";

export const useViewport = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, [width]);

  const isMobile = width <= 768;
  const isDesktop = width >= 768;

  return { width, isMobile, isDesktop };
};
