import React from 'react'

import Editor from './components/Editor'
import { addCard } from './api'

const App = () => {
  addCard()

  return (
    <Editor />
  )
}

export default App
