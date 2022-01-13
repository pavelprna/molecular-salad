import { configureStore } from '@reduxjs/toolkit'
import moleculesReducer from './moleculeSlice'
import saladsReducer from './saladSlice'
import orderReducer from './orderSlice'
import customSaladReducer from './customSaladSlice'

export const store = configureStore({
  reducer: {
    molecules: moleculesReducer,
    salads: saladsReducer,
    customSalad: customSaladReducer,
    order: orderReducer,
  },
})
