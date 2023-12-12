import { createSlice } from "@reduxjs/toolkit";

const iniciaState = {
  counter: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: iniciaState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
