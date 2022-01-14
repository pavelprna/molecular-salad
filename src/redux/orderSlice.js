import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { orderApi } from '../utils/OrderApi'

const initialState = {
  molecules: [],
}

export const makeOrder = createAsyncThunk(
  'order/makeOrder',
  async function (_, { rejectWithValue, dispatch, getState }) {
    try {
      const molecules = getState().order.molecules
      const moleculesRequestBody = molecules.map((m) => ({
        id: m._id,
        qty: m.qty,
      }))
      return orderApi.makeOrder(moleculesRequestBody)
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addToOrder(state, action) {
      let isNewMolecule = true

      state.molecules.map((molecule) => {
        if (molecule._id === action.payload._id) {
          molecule.qty += 1
          isNewMolecule = false
        }
        return molecule
      })

      if (isNewMolecule) {
        state.molecules.push({
          ...action.payload,
          qty: 1,
        })
      }
    },
    clearOrder() {
      return initialState
    },
  },
  extraReducers: {
    [makeOrder.pending]: (state) => {
      state.status = 'loading'
      state.error = null
    },
    [makeOrder.fulfilled]: (state, action) => {
      state.status = 'resolved'
      state.result = action.payload.result
    },
  },
})

export const { addToOrder, clearOrder } = orderSlice.actions

export default orderSlice.reducer
