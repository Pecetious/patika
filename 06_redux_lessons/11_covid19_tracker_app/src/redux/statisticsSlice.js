import { asyncThunkCreator, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCountries = asyncThunkCreator("getCountries", async () => {
  const { data } = axios.get(
    `${process.env.REACT_APP_API_ENDPOINT}/countriesData`,
    {
      headers: {
        authorization: process.env.REACT_APP_API_KEY,
        "content-type": "application/json",
      },
    }
  );
  console.log(data);
  return data.result.country;
});
export const statisticsSlice = createSlice({
  name: "statistics",
  initialState: {
    status: "idle",
    countries: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCountries.fulfilled, (state, action) => {
        state.countries = action.payload;
        state.status = "succeeded";
      })
      .addCase(getCountries.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export default statisticsSlice.reducer;
