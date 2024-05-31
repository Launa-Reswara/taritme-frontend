import ProtectedRoute from "@/components/ProtectedRoute";
import { Toaster } from "@/components/ui/toaster";
import { useScrollToTop } from "@/hooks";
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
import Profile from "@/pages/Profile";
import RiwayatKursus from "@/pages/RiwayatKursus";
import TemukanPelatih from "@/pages/TemukanPelatih";
import DetailPelatih from "@/pages/TemukanPelatih/DetailPelatih";
import IkutiKursus from "@/pages/TemukanPelatih/DetailPelatih/IkutKursus";
import Penilaian from "@/pages/TemukanPelatih/DetailPelatih/Penilaian";
import store from "@/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
import { Provider } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";

export default function App() {
  const location = useLocation();
  const queryClient = new QueryClient();

  useScrollToTop();

  return (
    <Provider store={store}>
      <LazyMotion features={domAnimation}>
        <QueryClientProvider client={queryClient}>
          <AnimatePresence mode="wait">
            <Toaster />
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route
                path="/auth/login"
                element={
                  <ProtectedRoute.UserAuth>
                    <Login />
                  </ProtectedRoute.UserAuth>
                }
              />
              <Route
                path="/auth/login/admin"
                element={
                  <ProtectedRoute.AdminAuth>
                    <LoginAdmin />
                  </ProtectedRoute.AdminAuth>
                }
              />
              <Route
                path="/auth/registration"
                element={
                  <ProtectedRoute.UserAuth>
                    <Registration />
                  </ProtectedRoute.UserAuth>
                }
              />
              <Route path="/komunitas" element={<Komunitas />} />
              <Route path="/arsip-kesenian" element={<ArsipKesenian />} />
              <Route
                path="/arsip-kesenian/:id"
                element={<DetailArsipKesenian />}
              />
              <Route path="/temukan-pelatih" element={<TemukanPelatih />} />
              <Route
                path="/temukan-pelatih/:detail"
                element={<DetailPelatih />}
              />
              <Route
                path="/temukan-pelatih/:detail/ikuti-kursus"
                element={
                  <ProtectedRoute.User>
                    <IkutiKursus />
                  </ProtectedRoute.User>
                }
              />
              <Route
                path="/temukan-pelatih/:detail/ikuti-kursus/penilaian"
                element={
                  <ProtectedRoute.User>
                    <Penilaian />
                  </ProtectedRoute.User>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute.User>
                    <Profile />
                  </ProtectedRoute.User>
                }
              />
              <Route
                path="/admin"
                element={
                  <ProtectedRoute.Admin>
                    <Admin />
                  </ProtectedRoute.Admin>
                }
              />
              <Route
                path="/admin/pelatih"
                element={
                  <ProtectedRoute.Admin>
                    <Pelatih />
                  </ProtectedRoute.Admin>
                }
              />
              <Route
                path="/admin/arsip"
                element={
                  <ProtectedRoute.Admin>
                    <Arsip />
                  </ProtectedRoute.Admin>
                }
              />
              <Route
                path="/riwayat-kursus"
                element={
                  <ProtectedRoute.User>
                    <RiwayatKursus />
                  </ProtectedRoute.User>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </QueryClientProvider>
      </LazyMotion>
    </Provider>
  );
}
