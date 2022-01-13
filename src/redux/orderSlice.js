import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  molecules: [],
}

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addToOrder(state, action) {
      let isNewMolecule = true

      state.molecules.map((molecule) => {
        if (molecule.id === action.payload._id) {
          molecule.qty += 1
          isNewMolecule = false
        }
        return molecule
      })

      if (isNewMolecule) {
        state.molecules.push({
          id: action.payload._id,
          qty: 1,
        })
      }
    },
  },
})

export const { addToOrder } = orderSlice.actions

export default orderSlice.reducer
