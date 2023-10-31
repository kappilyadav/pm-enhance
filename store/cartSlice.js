"use client"

import { createSlice } from '@reduxjs/toolkit'


export const cartSlice = createSlice({
    name: 'cart',

    initialState: {
        cartItems: [],
    },

    reducers: {
        addToCart: (state, action) => {
            //state.cartItems = action.payload.id;

            const item = state.cartItems.find((p) => p.id === action.payload.id)

            if (item) {

            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
        },

        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((p) => p.id !== action.payload.id)
        }
    },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer