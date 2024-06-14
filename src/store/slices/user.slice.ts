import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isEditProfile: false,
    isUploadLoading: false,
  },
  reducers: {
    setIsEditProfile: (state, action) => {
      state.isEditProfile = action.payload;
    },
    setIsUploadLoading: (state, action) => {
      state.isUploadLoading = action.payload;
    },
  },
});

export const { setIsEditProfile, setIsUploadLoading } = userSlice.actions;

export default userSlice.reducer;
