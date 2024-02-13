import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchAPOD from "./apodAPI";

const initialState = {
  data: {},
  loading: false,
  error: null,
};

export const fetchApodData = createAsyncThunk(
  "apod/fetchApodData",
  async () => {
    const response = await fetchAPOD();
    return response;
  }
);

const apodSlice = createSlice({
  name: "apod",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchApodData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchApodData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchApodData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default apodSlice.reducer;
