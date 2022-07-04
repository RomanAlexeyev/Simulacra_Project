import { createSlice } from "@reduxjs/toolkit";

const scrollSlice = createSlice({
  name: "customScroll",
  initialState: {
    counterY: 0,
    counterX: 0,
    counterDirection: "vertical",
    isTouchDevice: false,
  },
  reducers: {
    updateCounter(state, action) {
      if (state.counterDirection === "vertical") {
        if (state.counterY === 0 && action.payload < 0) return;
        state.counterY += action.payload;
      } else {
        if (state.counterX === 0 && action.payload < 0) {
          state.counterDirection = "vertical";
          state.counterY += action.payload;
        } else {
          if (state.counterX > 4) return;
          state.counterX += action.payload;
        }
      }
    },
    changeCounter(state, action) {
      state.counterDirection = action.payload;
    },
    resetCounter(state) {
      state.counterY = 0;
      state.counterX = 0;
      state.counterDirection = "vertical";
    },
    setTouchDevice(state, action) {
      state.isTouchDevice = action.payload;
    },
  },
});

export const { updateCounter, changeCounter, resetCounter, setTouchDevice } =
  scrollSlice.actions;

export default scrollSlice.reducer;
