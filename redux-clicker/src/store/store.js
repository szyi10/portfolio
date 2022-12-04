import { createSlice, configureStore } from "@reduxjs/toolkit"

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    incremet: (state, action) => {
      state.value += action.payload
    },
    decrement: (state, action) => {
      state.value -= action.payload
    },
  },
})

export const { incremet, decrement } = counterSlice.actions

export default counterSlice.reducer
