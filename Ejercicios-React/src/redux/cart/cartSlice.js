import {createSlice} from "@reduxjs/toolkit";

const INITIAL_STATE = {
    cartItems: [],
    shippingCost: 0,
    hidden: true  
};  

export const cartSlice = createSlice({
    name: "cart",
    initialState: INITIAL_STATE,
    reducers: {
        addToCart: (state, action) => {
            state.cartItems = [...state.cartItems, action.payload];
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
        },
        clearCart: (state) => {
            return {
                ...state,
                cartItems: [],
                shippingCost: 0
            }
        },
        toggleCart: (state) => {
           return {
               ...state,
               hidden: !state.hidden
           }
        },

    },
});

export const {addToCart, removeFromCart, clearCart, toggleCart } = cartSlice.actions;

export default cartSlice.reducer;