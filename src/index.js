import React from 'react'
import ReactDOM from 'react-dom'
import 'fontsource-roboto'
import { FirestoreProvider } from 'react-firestore'
import { Provider } from 'react-redux'

import App from './App'
import { initializedFirebase } from './state/firebase'
import store from './state/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <FirestoreProvider firebase={initializedFirebase}>
        <App />
      </FirestoreProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
