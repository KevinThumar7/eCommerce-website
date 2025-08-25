import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "../slice/counterSlice"
import cartReducer from "../slice/cartSlice"

const getState = () => {
  try {
    const loadedState = localStorage.getItem("cartState")
    return loadedState ? JSON.parse(loadedState) : undefined
  } catch {
    return undefined
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const saveState = (state: any) => {
  try { localStorage.setItem("cartState", JSON.stringify(state)) }
  catch { console.error() }
}

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
  },
  preloadedState: {
    cart: getState()
  }
})

store.subscribe(() => {
  saveState(store.getState().cart)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch