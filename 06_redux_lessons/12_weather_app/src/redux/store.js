import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "./weatherSlice";
import provincesSlice from "./provincesSlice";
export const store = configureStore({
  reducer: {
    weather: weatherSlice,
    provinces: provincesSlice,
  },
  devtools: process.env.NODE_ENV !== "production",
});
