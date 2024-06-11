import { createSlice } from "@reduxjs/toolkit";

export const pelatihSlice = createSlice({
  name: "pelatih",
  initialState: {
    isEditPelatih: false,
    isTambahPelatih: false,
    id: 0,
    initialData: {
      id: 0,
      email: "",
      name: "",
      no_hp: "",
      description: "",
      image: "",
      price: "",
      status: "",
    },
    isUploadLoading: false,
    isOpenSearchCommand: false,
  },
  reducers: {
    setIsEditPelatih: (state, action) => {
      state.isEditPelatih = action.payload;
    },
    setIsTambahPelatih: (state, action) => {
      state.isTambahPelatih = action.payload;
    },
    setId: (state, action) => {
      state.id = action.payload;
    },
    setInitialData: (state, action) => {
      state.initialData = action.payload;
    },
    setIsUploadLoading: (state, action) => {
      state.isUploadLoading = action.payload;
    },
    setIsOpenSearchCommand: (state, action) => {
      state.isOpenSearchCommand = action.payload;
    },
  },
});

export const {
  setIsEditPelatih,
  setIsTambahPelatih,
  setId,
  setInitialData,
  setIsOpenSearchCommand,
  setIsUploadLoading,
} = pelatihSlice.actions;

export default pelatihSlice.reducer;
