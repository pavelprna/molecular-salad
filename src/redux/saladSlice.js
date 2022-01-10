import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { saladsApi } from '../utils/SaladsApi'

const initialState = {
  result: [],
}

export const fetchSalads = createAsyncThunk(
  'salads',
  async function (_, { rejectWithValue }) {
    try {
      return saladsApi.getList()
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const saladsSlice = createSlice({
  name: 'molecules',
  initialState,
  extraReducers: {
    [fetchSalads.pending]: (state) => {
      state.status = 'loading'
      state.error = null
    },
    [fetchSalads.fulfilled]: (state, action) => {
      state.status = 'resolved'
      state.result = action.payload.result
    },
  },
})

export default saladsSlice.reducer
