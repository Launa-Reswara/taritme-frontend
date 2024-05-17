import { configureStore } from "@reduxjs/toolkit";
import modalKomunitasReducer from "./slices/modalKomunitas.slice";
import tambahPelatihReducer from "./slices/tambahPelatih.slice";

const store = configureStore({
  reducer: {
    modalKomunitas: modalKomunitasReducer,
    tambahPelatih: tambahPelatihReducer,
  },
});

export default store;
