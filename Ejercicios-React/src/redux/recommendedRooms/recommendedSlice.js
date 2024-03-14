import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommendedRooms: [],
  isLoading: false,
  isError: false,
  errorMsg: "",
};

export const recommendedSlice = createSlice({
  name: "recommendedRooms",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.isLoading = true;
    },
    fetchSuccess: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.recommendedRooms = action.payload;
    },
    fetchFail: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMsg = action.payload;
    },
  },
});

export const { fetchStart, fetchSuccess, fetchFail } =
  recommendedSlice.reducers;

export default recommendedSlice.reducer;
