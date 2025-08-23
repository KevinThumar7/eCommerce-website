import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "../counter/counterSlice"
import cartReducer from "../counter/cartSlice"

export const store = configureStore({
    reducer: {
      counter: counterReducer,
      cart: cartReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch