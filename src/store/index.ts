import { configureStore } from "@reduxjs/toolkit";
import arsipSliceReducer from "./slices/arsip.slice";
import loginReducer from "./slices/login.slice";
import modalKomunitasReducer from "./slices/modalKomunitas.slice";
import pelatihReducer from "./slices/pelatih.slice";
import tokenReducer from "./slices/token.slice";

const store = configureStore({
  reducer: {
    modalKomunitas: modalKomunitasReducer,
    pelatih: pelatihReducer,
    arsip: arsipSliceReducer,
    login: loginReducer,
    token: tokenReducer,
  },
});

export default store;
