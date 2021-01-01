import { createSlice, configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

const editorSlice = createSlice({
  name: 'editor',
  initialState: {
    selection: 'card/card',
    card: {
      name: 'Cardname',
      width: '9cm',
      height: '9cm',
      backgroundColor: 'lightgreen'
    },
    elements: []
  },
  reducers: {
    changeSelection (state, action) {
      state.selection = action.payload
    },
    updateCard (state, action) {
      state.card = action.payload
    },
    updateElements (state, action) {
      state.elements = action.payload
    }
  }
})

export const { changeSelection, updateCard, updateElements } = editorSlice.actions

const store = configureStore({
  reducer: editorSlice.reducer,
  middleware: [logger]
})

export default store
