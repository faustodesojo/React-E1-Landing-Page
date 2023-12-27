import { createSlice } from "@reduxjs/toolkit";
import {
  addItemToCart,
  removeItemFromCart,
  resetShippingCost,
} from "./cart-utilities";
import { SHIPPING_COST } from "../../components/utils/constants";

const INITIAL_STATE = {
  cartItems: [],
  shippingCost: 0,
  hidden: true,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    addToCart: (state, action) => {
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    },
    removeFromCart: (state, action) => {
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
        shippingCost: resetShippingCost(state.cartItems, SHIPPING_COST),
      };
    },
    clearCart: (state) => {
      return {
        ...state,
        cartItems: [],
        shippingCost: 0,
      };
    },
    toggleCart: (state) => {
      return {
        ...state,
        hidden: !state.hidden,
      };
    },
  },
});

export const { addToCart, removeFromCart, clearCart, toggleCart } =
  cartSlice.actions;

export default cartSlice.reducer;
