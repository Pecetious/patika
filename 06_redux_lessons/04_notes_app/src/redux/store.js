import { configureStore } from '@reduxjs/toolkit';
import radioReducer from './radioSlice'; 
import notesReducer from "./notesSlice"

const store = configureStore({
  reducer: {
    radio: radioReducer, 
    notes: notesReducer,
  },
});

export default store;
