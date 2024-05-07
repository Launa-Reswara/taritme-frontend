import { AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Registration from "./pages/Auth/Registration";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default function App() {
  const location = useLocation();

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/registration" element={<Registration />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </LazyMotion>
  );
}
