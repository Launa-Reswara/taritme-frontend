import { useEffect, useState } from "react";

export function useCheckIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    // Check screen size on mount and resize
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 950); // Adjust this breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setIsMobile]);

  return isMobile;
}
