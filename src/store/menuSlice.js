import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    menuItem: null,
  },
  reducers: {
    setMenuItem(state, action) {
        state.menuItem = action.payload;
    },
  },
});

export const { setMenuItem} =
menuSlice.actions;

export default menuSlice.reducer;
