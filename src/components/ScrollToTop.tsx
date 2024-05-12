import { useEffect } from "react";
import { useLocation } from "react-router";

/**
 * Solve the problem of not auto scroll to top problem when navigate from one route to another route
 * @see https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}
