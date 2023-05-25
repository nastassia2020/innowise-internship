import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
// }

const firebaseConfig = {
  apiKey: 'AIzaSyDsHESOjWCrPOqgeSCKZ7z5gaUvm8c_iWc',
  authDomain: 'mini-paint-20022.firebaseapp.com',
  databaseURL: 'https://mini-paint-20022-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'mini-paint-20022',
  storageBucket: 'mini-paint-20022.appspot.com',
  messagingSenderId: '275503139581',
  appId: '1:275503139581:web:86a2390f6dbc03f6ae4c94',
  measurementId: 'G-V0ZJDZ9Q24',
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const auth = getAuth()
export const provider = new GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
