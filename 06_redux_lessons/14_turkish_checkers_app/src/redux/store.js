import { configureStore } from "@reduxjs/toolkit";
import gameSlice  from "./gameSlice";
export const store = configureStore({
  reducer: {
    game: gameSlice
  },
  devTools: process.env.NODE_ENV !== "production",
});
