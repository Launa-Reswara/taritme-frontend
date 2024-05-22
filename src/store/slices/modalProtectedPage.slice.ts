import { createSlice } from "@reduxjs/toolkit";

const modalProtectedPageSlice = createSlice({
  name: "modalProtectedPage",
  initialState: {
    isOpenModalProtectedPage: false,
  },
  reducers: {
    setIsOpenModalProtectedPage: (state, action) => {
      state.isOpenModalProtectedPage = action.payload;
    },
  },
});

export const { setIsOpenModalProtectedPage } = modalProtectedPageSlice.actions;

export default modalProtectedPageSlice.reducer;
