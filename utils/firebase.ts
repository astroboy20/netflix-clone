
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import { initializeApp, getApp, getApps } from 'firebase/app'


const firebaseConfig = {
  apiKey: "AIzaSyDz2r-bQBn4AQiGpAlAUrc_KR_aUOYmRCE",
  authDomain: "netflix-clone-35d08.firebaseapp.com",
  projectId: "netflix-clone-35d08",
  storageBucket: "netflix-clone-35d08.appspot.com",
  messagingSenderId: "333559237781",
  appId: "1:333559237781:web:5f761acd3789d5b73fdf9c"
};


//initialize app
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp

//connnecting to the db

const db = getFirestore()
const auth = getAuth()


export default app
export {auth, db}
