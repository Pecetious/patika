import { createSlice } from "@reduxjs/toolkit";

export const radioSlice = createSlice({
  name: "radio",
  initialState: {
    selectedValue: "#f56c8e", 
  },
  reducers: {
    setSelectedValue: (state, action) => {
      state.selectedValue = action.payload; 
      console.log(state.selectedValue)
    },
  },
});

export const { setSelectedValue } = radioSlice.actions;
export default radioSlice.reducer;
