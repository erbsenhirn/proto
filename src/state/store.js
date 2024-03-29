import { createSlice, configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

const editorSlice = createSlice({
  name: 'editor',
  initialState: {
    selectionId: 'card',
    selectionType: 'card',
    card: {
      name: 'Cardname',
      width: '9cm',
      height: '9cm',
      backgroundColor: 'lightgreen'
    },
    elements: {}
  },
  reducers: {
    changeSelection (state, action) {
      state.selectionId = action.payload.selectionId
      state.selectionType = action.payload.selectionType
    },
    updateCard (state, action) {
      state.card = action.payload
    },
    updateElement (state, action) {
      state.elements[action.payload.id] = action.payload.data
    }
  }
})

export const {
  changeSelection,
  updateCard,
  updateElement
} = editorSlice.actions

const store = configureStore({
  reducer: editorSlice.reducer,
  middleware: [logger]
})

export default store
