import { configureStore } from "@reduxjs/toolkit";
import apodReducers from "../features/apod/apodSlice";

export const store = configureStore({
  reducer: {
    apod: apodReducers,
  },
});
