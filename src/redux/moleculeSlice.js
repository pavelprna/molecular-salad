import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { moleculesApi } from '../utils/MoleculesApi'

const initialState = {
  result: [],
}

export const fetchMolecules = createAsyncThunk(
  'molecules',
  async function (_, { rejectWithValue }) {
    try {
      return moleculesApi.getList()
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const moleculesSlice = createSlice({
  name: 'molecules',
  initialState,
  reducers: {
    removeMolecule(state, action) {
      state.result = state.result.map((molecule) => {
        if (molecule._id === action.payload._id) {
          molecule.qty -= 1
        }
        return molecule
      })
    },
  },
  extraReducers: {
    [fetchMolecules.pending]: (state) => {
      state.status = 'loading'
      state.error = null
    },
    [fetchMolecules.fulfilled]: (state, action) => {
      state.status = 'resolved'
      state.result = action.payload.result
    },
  },
})

export const { removeMolecule } = moleculesSlice.actions

export default moleculesSlice.reducer
