import { configureStore } from "@reduxjs/toolkit";
import textSlice from "./textSlice";
export const store = configureStore({
  reducer: {
    text: textSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});
