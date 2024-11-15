import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

// Async thunk for loading the user data
export const loadUser = createAsyncThunk('auth/loadUser', async () => {
  const userSession = await AsyncStorage.getItem('@USER');
  return userSession ? JSON.parse(userSession) : null;
});
export const saveUser = createAsyncThunk('auth/saveUser', async user => {
  user
    ? await AsyncStorage.setItem('@USER', JSON.stringify(user))
    : await AsyncStorage.removeItem('@USER');
  return user;
});
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthLoading: true,
  },
  extraReducers: builder => {
    builder
      .addCase(loadUser.pending, state => {
        state.isAuthLoading = true;
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthLoading = false;
      })
      .addCase(loadUser.rejected, state => {
        state.isAuthLoading = false;
      })
      .addCase(saveUser.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export default authSlice.reducer;
