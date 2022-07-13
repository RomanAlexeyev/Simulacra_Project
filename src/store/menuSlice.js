import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    UIlistening: true,
    menuItem: null,
    menuItemActive: null,
    logoIsActive: false,
    zoom: null,
  },
  reducers: {
    setUIlistening(state, action) {
      state.UIlistening = action.payload;
    },
    setMenuItem(state, action) {
      state.menuItem = action.payload;
      if (action.payload === "menu_author") {
        state.zoom = "out";
      }
      if (action.payload === null) {
        state.UIlistening = true;
        state.menuItemActive = null;
        state.logoIsActive = false;
      } else {
        state.logoIsActive = true;
      }
    },
    setActiveMenuItem(state, action) {
      state.menuItemActive = action.payload;
    },
    setLogoIsActive(state, action) {
      state.logoIsActive = action.payload;
    },
    setZoom(state, action) {
      state.zoom = action.payload;
    },
  },
});

export const {
  setUIlistening,
  setMenuItem,
  setActiveMenuItem,
  setLogoIsActive,
  setZoom,
} = menuSlice.actions;

export default menuSlice.reducer;
