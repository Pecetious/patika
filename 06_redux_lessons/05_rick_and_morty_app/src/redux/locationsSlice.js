import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getLocations = createAsyncThunk("getLocations", async (page) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_ENDPOINT}/location/?page=${page}`
  );
  return data.results;
});
export const locationsSlice = createSlice({
  name: "locations",
  initialState: {
    items: [],
    status: "idle",
    page: 1,
    hasNextPage: true,
  },
  reducers: [],
  extraReducers: (builder) => {
    builder
      .addCase(getLocations.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getLocations.fulfilled, (state, action) => {
        state.items = [...state.items, ...action.payload];
        state.status = "succeeded";
        state.page += 1;
        if (action.payload.length < 20) state.hasNextPage = false;
      })
      .addCase(getLocations.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "failed";
      });
  },
});
export default locationsSlice.reducer;
