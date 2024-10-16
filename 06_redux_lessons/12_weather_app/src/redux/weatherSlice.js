import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getWeatherData = createAsyncThunk("getWeatherData", async (province) => {
  const url = `${process.env.REACT_APP_WEATHER_API_ENDPOINT}/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${province}&days=7&aqi=yes&alerts=no`;
  const { data } = await axios(url);
  if (!data) return false;
  console.log(data);
  return data;
});
export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    status: "idle",
    weatherData: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWeatherData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getWeatherData.fulfilled, (state, action) => {
        state.weatherData = action.payload;
        state.status = "succeeded";
      })
      .addCase(getWeatherData.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "failed";
      });
  },
});
export default weatherSlice.reducer;
