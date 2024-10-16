import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProvinces = createAsyncThunk("getProvinces", async () => {
  const { data } = await axios.get(process.env.REACT_APP_PROVINCES_API_ENDPOINT);
  if (!data) return false;
  return data.data;
});
export const provincesSlice = createSlice({
  name: "provinces",
  initialState: {
    provinces: null,
    status: "idle",
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProvinces.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProvinces.fulfilled, (state, action) => {
        state.provinces = action.payload;
        state.status = "succeeded";
      })
      .addCase(getProvinces.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "failed";
      });
  },
});
export default provincesSlice.reducer