import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "colorTheme",
  initialState: {
    theme: "light",
  },
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
