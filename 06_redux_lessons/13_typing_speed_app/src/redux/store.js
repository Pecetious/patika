import { configureStore } from "@reduxjs/toolkit";
import wordsSlice from "./wordsSlice"
export const store = configureStore({
  reducer: {
    words: wordsSlice
  },
  devTools: process.env.NODE_ENV !== "production",
});
