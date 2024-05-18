import { configureStore } from "@reduxjs/toolkit";
import modalKomunitasReducer from "./slices/modalKomunitas.slice";
import { editPelatihSlice, tambahPelatihSlice } from "./slices/pelatih.slice";

const store = configureStore({
  reducer: {
    modalKomunitas: modalKomunitasReducer,
    tambahPelatih: tambahPelatihSlice.reducer,
    editPelatih: editPelatihSlice.reducer,
  },
});

export default store;
