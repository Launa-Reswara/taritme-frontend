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

export const editPelatihSlice = createSlice({
  name: "editPelatih",
  initialState: {
    isEditPelatih: false,
  },
  reducers: {
    setIsEditPelatih: (state, action) => {
      state.isEditPelatih = action.payload;
    },
  },
});

export const { setIsTambahPelatih } = tambahPelatihSlice.actions;
export const { setIsEditPelatih } = editPelatihSlice.actions;
