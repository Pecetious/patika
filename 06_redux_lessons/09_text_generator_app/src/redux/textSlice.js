import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getText = createAsyncThunk("getText", async (parasNum) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_ENDPOINT}/`,
    {
      params: {
        "type": "meat-and-filler",
        "start-with-lorem": "1",
        "paras": parasNum,
      },
    }
  );
  console.log(data);
  return data;
});
export const textSlice = createSlice({
  name: "text",
  initialState: {
    items: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getText.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getText.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "succeeded";
      })
      .addCase(getText.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "failed";
      });
  },
});
export default textSlice.reducer;
