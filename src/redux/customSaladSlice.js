import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  composition: [],
}

export const customSaladSlice = createSlice({
  name: 'salads/custom',
  initialState,
  reducers: {
    addMolecule(state, action) {
      const { _id } = action.payload
      if (!state.composition.includes(_id)) {
        state.composition.push(_id)
      }
    },
    clearSalad() {
      return initialState
    },
  },
})

export const { addMolecule, clearSalad } = customSaladSlice.actions

export default customSaladSlice.reducer
