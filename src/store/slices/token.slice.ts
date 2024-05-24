import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
  name: "token",
  initialState: {
    isTokenUserAvailable: localStorage.getItem("token") ? true : false,
    isTokenAdminAvailable: localStorage.getItem("token-admin") ? true : false,
  },
  reducers: {
    setIsTokenUserAvailable: (state, action) => {
      state.isTokenUserAvailable = action.payload;
    },
    setIsTokenAdminAvailable: (state, action) => {
      state.isTokenAdminAvailable = action.payload;
    },
  },
});

export const { setIsTokenUserAvailable, setIsTokenAdminAvailable } =
  tokenSlice.actions;

export default tokenSlice.reducer;
