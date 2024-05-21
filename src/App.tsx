import Admin from "@/pages/Admin";
import Arsip from "@/pages/Admin/Arsip";
import Pelatih from "@/pages/Admin/Pelatih";
import ArsipKesenian from "@/pages/ArsipKesenian";
import DetailArsipKesenian from "@/pages/ArsipKesenian/DetailArsipKesenian";
import Login from "@/pages/Auth/Login";
import LoginAdmin from "@/pages/Auth/Login/LoginAdmin";
import Registration from "@/pages/Auth/Registration";
import Home from "@/pages/Home";
import Komunitas from "@/pages/Komunitas";
import NotFound from "@/pages/NotFound";
import TemukanPelatih from "@/pages/TemukanPelatih";
import DetailPelatih from "@/pages/TemukanPelatih/DetailPelatih";
import IkutiKursus from "@/pages/TemukanPelatih/DetailPelatih/IkutKursus";
import { AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
import { Provider } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import { useScrollToTop } from "./hooks";
import RiwayatKursus from "./pages/RiwayatKursus";
import Penilaian from "./pages/TemukanPelatih/DetailPelatih/Penilaian";
import store from "./store";

export default function App() {
  const location = useLocation();

  useScrollToTop();

  return (
    <Provider store={store}>
      <LazyMotion features={domAnimation}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/login/admin" element={<LoginAdmin />} />
            <Route path="/auth/registration" element={<Registration />} />
            <Route path="/komunitas" element={<Komunitas />} />
            <Route path="/arsip-kesenian" element={<ArsipKesenian />} />
            <Route
              path="/arsip-kesenian/:detail"
              element={<DetailArsipKesenian />}
            />
            <Route path="/temukan-pelatih" element={<TemukanPelatih />} />
            <Route
              path="/temukan-pelatih/:detail"
              element={<DetailPelatih />}
            />
            <Route
              path="/temukan-pelatih/:detail/ikuti-kursus"
              element={<IkutiKursus />}
            />
            <Route
              path="/temukan-pelatih/:detail/ikuti-kursus/penilaian"
              element={<Penilaian />}
            />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/pelatih" element={<Pelatih />} />
            <Route path="/admin/arsip" element={<Arsip />} />
            <Route path="/riwayat-kursus" element={<RiwayatKursus />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </LazyMotion>
    </Provider>
  );
}
