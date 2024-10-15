import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCountries = createAsyncThunk("getCountries", async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_ENDPOINT}/countriesData`,
    {
      headers: {
        authorization: process.env.REACT_APP_API_KEY,
        "content-type": "application/json",
      },
    }
  );
  if (!data) {
    return false;
  }
  const countries = data.result.map((item) => item.country);
  return countries;
});
export const getCountryData = createAsyncThunk(
  "getCountryData",
  async (country) => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_ENDPOINT}/countriesData`,
      {
        params: {
          country: country,
        },
        headers: {
          authorization: process.env.REACT_APP_API_KEY,
          "content-type": "application/json",
        },
      }
    );
    if (!data) {
      return false;
    }
    return data.result[0];
  }
);
export const getTotalData = createAsyncThunk("getTotalData", async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_ENDPOINT}/totalData`,
    {
      headers: {
        authorization: process.env.REACT_APP_API_KEY,
        "content-type": "application/json",
      },
    }
  );
  if (!data) {
    return false;
  }
  return data.result;
});
export const statisticsSlice = createSlice({
  name: "statistics",
  initialState: {
    status: "idle",
    countries: [],
    totalData: null,
    countryData: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCountries.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCountries.fulfilled, (state, action) => {
        state.countries = action.payload;
        state.status = "succeeded";
      })
      .addCase(getCountries.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getTotalData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getTotalData.fulfilled, (state, action) => {
        state.totalData = action.payload;
        state.status = "succeeded";
      })
      .addCase(getTotalData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getCountryData.pending, (state) => {
        state.status = "loading";
        state.totalData = null;
      })
      .addCase(getCountryData.fulfilled, (state, action) => {
        state.countryData = action.payload;
        state.status = "succeeded";
      })
      .addCase(getCountryData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export default statisticsSlice.reducer;
