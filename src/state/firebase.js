import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { createFirestoreInstance } from 'redux-firestore'

import store from './store'

const fbConfig = {
  apiKey: 'AIzaSyA0fG8WrpMayozNZ4KsSh5daU1Ngpkmydc',
  authDomain: 'proto-5d95f.firebaseapp.com',
  databaseURL: 'https://proto-5d95f.firebaseio.com',
  projectId: 'proto-5d95f',
  storageBucket: 'proto-5d95f.appspot.com',
  messagingSenderId: '273046236444',
  appId: '1:273046236444:web:3bded5472844c8e41f9ed9'
}

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
}

firebase.initializeApp(fbConfig)
const db = firebase.firestore()
if (location.hostname === 'localhost') {
  db.useEmulator('localhost', 8080)
}
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}

export default rrfProps
