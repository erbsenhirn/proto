import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { routerMiddleware } from 'connected-react-router'
import { firestoreReducer } from 'redux-firestore'

import routerReducer, { history } from './router'

const rootReducer = combineReducers({
  router: routerReducer,
  firestore: firestoreReducer
})
const initialState = {}
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(logger, routerMiddleware(history))
)

export default store
