import {createSlice} from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [], // Initialize with an empty array
  reducers: {
    addFavorite: (state, action) => {
      // Check if the job with the same ID already exists in the state
      const exists = state.some(fav => fav.id === action.payload.id);
      if (!exists) {
        state.push(action.payload); // Add the new job object if it doesn't already exist
      }
    },
    removeFavorite: (state, action) => {
      // Filter out the job with the matching ID
      return state.filter(fav => fav.id !== action.payload.id);
    },
  },
});

export const {addFavorite, removeFavorite} = favoritesSlice.actions;
export default favoritesSlice.reducer;
