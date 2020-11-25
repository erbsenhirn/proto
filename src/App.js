import { Provider } from 'react-redux'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore' // <- needed if using firestore
// import 'firebase/functions' // <- needed if using httpsCallable
import { createStore, combineReducers, applyMiddleware } from 'redux'
import {
  ReactReduxFirebaseProvider,
  firebaseReducer
} from 'react-redux-firebase'
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore' // <- needed if using firestore
import logger from 'redux-logger'


const fbConfig = {
  apiKey: "AIzaSyA0fG8WrpMayozNZ4KsSh5daU1Ngpkmydc",
  authDomain: "proto-5d95f.firebaseapp.com",
  databaseURL: "https://proto-5d95f.firebaseio.com",
  projectId: "proto-5d95f",
  storageBucket: "proto-5d95f.appspot.com",
  messagingSenderId: "273046236444",
  appId: "1:273046236444:web:3bded5472844c8e41f9ed9",
}

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
}

// Initialize firebase instance
firebase.initializeApp(fbConfig)

// Initialize other services on firebase instance
firebase.firestore() // <- needed if using firestore
// firebase.functions() // <- needed if using httpsCallable

// Add firebase to reducers
const rootReducer = combineReducers({
  // firebase: firebaseReducer,
  firestore: firestoreReducer, // <- needed if using firestore
})

// Create store with reducers and initial state
const initialState = {}
const store = createStore(rootReducer, initialState, applyMiddleware(logger))

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, // <- needed if using firestore
}

// Setup react-redux so that connect HOC can be used
const App = () => {
  return (
    <div>
        Hello World!
    </div>
  );
}

export default App;
