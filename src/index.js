import React from 'react'
import ReactDOM from 'react-dom'
import 'fontsource-roboto'
import { Provider } from 'react-redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'

import App from './App'
import store from './state/store'
import { rrfProps } from './state/firebase'

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
)
