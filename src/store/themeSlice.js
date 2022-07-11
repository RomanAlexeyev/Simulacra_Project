import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "colorTheme",
  initialState: {
    theme: "dark",
    isChanging: false,
  },
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload;
    },
    setThemeIsChanging(state, action) {
      state.isChanging = action.payload;
    },
  },
});

export const { setTheme, setThemeIsChanging } = themeSlice.actions;

export default themeSlice.reducer;
