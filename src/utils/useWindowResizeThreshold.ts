import { useEffect, useRef, useState } from "react";

/**
 * 
 * @param threshold the window resize threshold
 * @returns boolean indicating it's mobile size or not
 */
const useWindowResizeThreshold = (threshold: number) => {
  const [isMobileSize, setIsMobileSize] = useState(
    window.innerWidth <= threshold
  );
  const prevWidth = useRef(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      const currWidth = window.innerWidth;
      if (currWidth <= threshold && prevWidth.current > threshold) {
        setIsMobileSize(true);
      } else if (currWidth > threshold && prevWidth.current <= threshold) {
        setIsMobileSize(false);
      }
      prevWidth.current = currWidth;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [threshold]);

  return [isMobileSize];
};

export default useWindowResizeThreshold;
