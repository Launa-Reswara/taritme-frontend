import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const tokenSlice = createSlice({
  name: "token",
  initialState: {
    isTokenUserAvailable: Cookies.get("token") ? true : false,
    isTokenAdminAvailable: Cookies.get("token-admin") ? true : false,
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
