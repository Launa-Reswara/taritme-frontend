import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isEditProfile: false,
  },
  reducers: {
    setIsEditProfile: (state, action) => {
      state.isEditProfile = action.payload;
    },
  },
});

export const { setIsEditProfile } = userSlice.actions;

export default userSlice.reducer;
