import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = import.meta.env.VITE_REACT_APP_APOD_API_KEY;
const BASE_URL = "https://api.nasa.gov/planetary/apod";

export const fetchApodData = createAsyncThunk('apod/fetchApodData', async ({ startDate, endDate }) => {
  try {
    let url = `${BASE_URL}?api_key=${API_KEY}`;

    if (startDate && endDate) {
      url += `&start_date=${startDate}&end_date=${endDate}`;
      }

    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
});

const apodSlice = createSlice({
  name: "apod",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
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
