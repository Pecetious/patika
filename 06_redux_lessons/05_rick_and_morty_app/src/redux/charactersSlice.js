importimport { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getCharacters = createAsyncThunk("getCharacters", async (page) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_ENDPOINT}/character/?page=${page}`
  );
  return data.results;
});
export const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    items: [],
    status: "idle",
    page: 1,
    hasNextPage: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCharacters.fulfilled, (state, action) => {
        state.items = [...state.items, ...action.payload];
        state.status = "succeeded";
        state.page += 1;
        if (action.payload.length < 20) state.hasNextPage = false;
      })
      .addCase(getCharacters.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCharacters.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "failed";
      });
  },
});
export default charactersSlice.reducer;
