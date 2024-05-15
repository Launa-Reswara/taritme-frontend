import { createSlice } from "@reduxjs/toolkit";

export const modalKomunitasSlice = createSlice({
  name: "modalKomunitas",
  initialState: {
    idModal: 0,
    dataModalKomunitas: {
      id: 0,
      name: "",
      previewImage: "",
      description: "",
    },
  },
  reducers: {
    setIdModal: (state, action) => {
      state.idModal = action.payload;
    },
    setModalKomunitas: (state, action) => {
      state.dataModalKomunitas = action.payload;
    },
  },
});

export const { setIdModal, setModalKomunitas } = modalKomunitasSlice.actions;

export default modalKomunitasSlice.reducer;
