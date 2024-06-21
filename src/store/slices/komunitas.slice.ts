import { createSlice } from "@reduxjs/toolkit";

export const komunitasSlice = createSlice({
  name: "komunitas",
  initialState: {
    idModal: 0,
    dataModalKomunitas: {
      id: 0,
      name: "",
      image: "",
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

export const { setIdModal, setModalKomunitas } = komunitasSlice.actions;

export default komunitasSlice.reducer;
