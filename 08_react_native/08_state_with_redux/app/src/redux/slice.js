import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'example',
  initialState: {
    nameList: [],
  },
  reducers: {
    addName: (state, action) => {
      state.nameList = [...state.nameList, action.payload];
    },
  },
});
export const {addName} = slice.actions;
export default slice.reducer;
