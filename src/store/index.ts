import { configureStore } from "@reduxjs/toolkit";
import modalKomunitasReducer from "./slices/modalKomunitas.slice";

const store = configureStore({
  reducer: {
    modalKomunitas: modalKomunitasReducer,
  },
});

export default store;
