import { createSlice } from "@reduxjs/toolkit";

export const pelatihSlice = createSlice({
  name: "pelatih",
  initialState: {
    isEditPelatih: false,
    isTambahPelatih: false,
  },
  reducers: {
    setIsEditPelatih: (state, action) => {
      state.isEditPelatih = action.payload;
    },
    setIsTambahPelatih: (state, action) => {
      state.isTambahPelatih = action.payload;
    },
  },
});

export const { setIsEditPelatih, setIsTambahPelatih } = pelatihSlice.actions;

export default pelatihSlice.reducer;
