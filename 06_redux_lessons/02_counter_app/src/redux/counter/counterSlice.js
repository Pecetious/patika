import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    currentCount: 0,
  },
  reducers: {
    increase: (state) => {
      state.currentCount++;
    },
    decrease: (state) => {
      state.currentCount--;
    },
    customIncrease: (state, action) => {
      state.currentCount += Number(action.payload);
    },
  },
});
export const { increase, decrease, customIncrease } = counterSlice.actions;
export default counterSlice.reducer;
