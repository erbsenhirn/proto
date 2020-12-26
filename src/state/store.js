import { createSlice, configureStore } from '@reduxjs/toolkit'

const selectionSlice = createSlice({
  name: 'selection',
  initialState: {
    selection: 'cards/card'
  },
  reducers: {
    changeSelection (state, action) {
      state.selection = action.payload
    }
  }
})

export const { changeSelection } = selectionSlice.actions

const store = configureStore({
  reducer: selectionSlice.reducer
})

export default store
