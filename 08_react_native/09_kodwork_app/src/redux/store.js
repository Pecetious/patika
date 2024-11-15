import {configureStore} from '@reduxjs/toolkit';
import favoritesSlice from './favoritesSlice';
export default configureStore({
  reducer: {
    favorites: favoritesSlice,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
