import { configureStore } from "@reduxjs/toolkit";
import statisticsSlice from "./statisticsSlice";
export const store = configureStore({
  reducer: {
    statistics: statisticsSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});
