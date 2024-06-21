import { useCallback, useEffect, useState } from "react";

/**
 * A custom hook to detect user scroll
 * @exports
 * @returns {*}
 */
export function useScroll() {
  const [scroll, setScroll] = useState<number>(0);

  const handleScroll = useCallback(
    () => setScroll(window.scrollY),
    [setScroll]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return scroll;
}
