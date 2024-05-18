import { createSlice } from "@reduxjs/toolkit";

export const arsipSlice = createSlice({
  name: "arsip",
  initialState: { isEditArsip: false, isTambahArsip: false },
  reducers: {
    setIsEditArsip: (state, action) => {
      state.isEditArsip = action.payload;
    },
    setIsTambahArsip: (state, action) => {
      state.isTambahArsip = action.payload;
    },
  },
});

export const { setIsEditArsip, setIsTambahArsip } = arsipSlice.actions;

export default arsipSlice.reducer;
