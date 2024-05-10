import { AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Admin from "./pages/Admin";
import ArsipKesenian from "./pages/ArsipKesenian";
import DetailArsipKesenian from "./pages/ArsipKesenian/DetailArsipKesenian";
import Login from "./pages/Auth/Login";
import LoginAdmin from "./pages/Auth/Login/LoginAdmin";
import Registration from "./pages/Auth/Registration";
import Home from "./pages/Home";
import Komunitas from "./pages/Komunitas";
import NotFound from "./pages/NotFound";
import TemukanPelatih from "./pages/TemukanPelatih";
import DetailTemukanPelatih from "./pages/TemukanPelatih/DetailPelatih";

export default function App() {
  const location = useLocation();

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/login/admin" element={<LoginAdmin />} />
          <Route path="/auth/registration" element={<Registration />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/komunitas" element={<Komunitas />} />
          <Route path="/arsip-kesenian" element={<ArsipKesenian />} />
          <Route
            path="/arsip-kesenian/:detail"
            element={<DetailArsipKesenian />}
          />
          <Route path="/temukan-pelatih" element={<TemukanPelatih />} />
          <Route
            path="/temukan-pelatih/:detail"
            element={<DetailTemukanPelatih />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </LazyMotion>
  );
}
