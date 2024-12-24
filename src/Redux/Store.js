import { configureStore } from '@reduxjs/toolkit'
import Reducer from '../Redux/Reducers'

export const store = configureStore({
    reducer: {
        cart: Reducer,

    },
})