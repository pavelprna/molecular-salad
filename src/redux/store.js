import { configureStore } from '@reduxjs/toolkit'
import moleculesReducer from './moleculeSlice'
import saladsReducer from './saladSlice'

export const store = configureStore({
  reducer: {
    molecules: moleculesReducer,
    salads: saladsReducer,
  },
})
