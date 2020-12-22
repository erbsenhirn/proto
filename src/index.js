import React from 'react'
import ReactDOM from 'react-dom'
import 'fontsource-roboto'
import { FirestoreProvider } from 'react-firestore'

import App from './App'
import { initializedFirebase } from './state/firebase'

ReactDOM.render(
  <React.StrictMode>
    <FirestoreProvider firebase={initializedFirebase}>
      <App />
    </FirestoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
