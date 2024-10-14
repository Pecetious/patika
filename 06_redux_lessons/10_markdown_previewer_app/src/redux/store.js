import { configureStore } from "@reduxjs/toolkit";
import markdownSlice from "./markdownSlice";
export const store = configureStore({
  reducer: {
    markdown: markdownSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});
