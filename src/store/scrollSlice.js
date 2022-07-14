import { createSlice } from "@reduxjs/toolkit";

const scrollSlice = createSlice({
  name: "customScroll",
  initialState: {
    counterY: 0,
    counterX: 0,
    scrollTop: 0,
    sectionProgress: 0,
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
          if (state.counterX === 7) return;
          state.counterX += action.payload;
        }
      }
    },
    updateScroll(state, action) {
      state.scrollTop = action.payload;
    },
    changeCounter(state, action) {
      state.counterDirection = action.payload;
    },
    resetCounter(state) {
      state.counterY = 0;
      state.counterX = 0;
      state.scrollTop = 0;
      state.counterDirection = "vertical";
      state.sectionProgress = 0;
    },
    setTouchDevice(state, action) {
      state.isTouchDevice = action.payload;
    },
    updateSection(state, action) {
      state.sectionProgress = action.payload;
    },
  },
});

export const { updateCounter, updateScroll, changeCounter, resetCounter, setTouchDevice, updateSection } =
  scrollSlice.actions;

export default scrollSlice.reducer;
