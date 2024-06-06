import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLoggedIn: Cookies.get("token") ? true : false,
  },
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setIsLoggedIn } = loginSlice.actions;

export default loginSlice.reducer;
