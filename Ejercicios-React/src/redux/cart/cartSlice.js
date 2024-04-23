import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
    removeFromCart(state, action) {
      const indexToRemove = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (indexToRemove !== -1) {
        state.splice(indexToRemove, 1);
      }
    },
    clearCart() {
      return [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
