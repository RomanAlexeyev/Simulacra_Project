import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    menuItem: null,
    zoom: 'null',
  },
  reducers: {
    setMenuItem(state, action) {
      state.menuItem = action.payload;
      if (action.payload === "menu_author") {
        state.zoom = "out";
      }
    },
    setZoom(state, action) {
      state.zoom = action.payload;
    },
  },
});

export const { setMenuItem, setZoom } = menuSlice.actions;

export default menuSlice.reducer;
