import { createSlice } from '@reduxjs/toolkit'
import { TEMPRATURE_UNIT } from '@constants'

const counterSlice = createSlice({
  name: 'weather',
  initialState: {
    unit: TEMPRATURE_UNIT.STANDARD
  },
  reducers: {
    setUnit: (state, action) => {
      state.unit = action.payload
    }
  }
})

export const { setUnit } = counterSlice.actions
export default counterSlice.reducer