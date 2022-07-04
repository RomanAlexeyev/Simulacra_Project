import { configureStore } from "@reduxjs/toolkit";

import scrollReducer from "./scrollSlice";
import menuReducer from "./menuSlice";
import themeReducer from "./themeSlice";

export default configureStore({
  reducer: {
    scroll: scrollReducer,
    menu: menuReducer,
    colorTheme: themeReducer,
  },
});
