import { configureStore } from "@reduxjs/toolkit";
import arsipSliceReducer from "./slices/arsip.slice";
import loginReducer from "./slices/login.slice";
import modalKomunitasReducer from "./slices/modalKomunitas.slice";
import modalProtectedPageReducer from "./slices/modalProtectedPage.slice";
import pelatihReducer from "./slices/pelatih.slice";

const store = configureStore({
  reducer: {
    modalKomunitas: modalKomunitasReducer,
    pelatih: pelatihReducer,
    arsip: arsipSliceReducer,
    modalProtectedPage: modalProtectedPageReducer,
    login: loginReducer,
  },
});

export default store;
