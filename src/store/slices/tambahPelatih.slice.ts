import { createSlice } from "@reduxjs/toolkit";

export const tambahPelatihSlice = createSlice({
  name: "tambahPelatih",
  initialState: {
    isTambahPelatih: false,
  },
  reducers: {
    setIsTambahPelatih: (state, action) => {
      state.isTambahPelatih = action.payload;
    },
  },
});

export const { setIsTambahPelatih } = tambahPelatihSlice.actions;

export default tambahPelatihSlice.reducer;
