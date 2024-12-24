import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const isFind = state.find((element) => element.id === action.payload.id);
            if (!isFind) {
                state.push(action.payload);
            }
        },
        removeItem: (state, action) => {
            return state.filter((item) => item.id !== action.payload.id);

        },
    },
})

export const { addToCart, removeItem } = CartSlice.actions

export default CartSlice.reducer