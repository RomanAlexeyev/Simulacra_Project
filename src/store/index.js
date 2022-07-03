import { configureStore } from "@reduxjs/toolkit";

import scrollReducer from "./scrollSlice";

export default configureStore({
    reducer: {
        scroll: scrollReducer,
    },
});