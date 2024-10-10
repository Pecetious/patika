import { createSlice } from "@reduxjs/toolkit";

export const scoreSlice = createSlice({
  name: "score",
  initialState: { score: 0 },
  reducers: {
    increaseScore: (state) => {
      state.score += 50;
    },
    decreaseScore: (state) => {
      state.score -= 10;
    },
    resetScore: (state) => {
      state.score = 0;
    },
  },
});
export const { increaseScore, decreaseScore, resetScore } = scoreSlice.actions;
export default scoreSlice.reducer
