import { configureStore } from "@reduxjs/toolkit";
import frameworksSlice from "./frameworksSlice";
import scoreSlice from "./scoreSlice";

export const store = configureStore({
  reducer: {
    frameworks: frameworksSlice,
    score: scoreSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});
