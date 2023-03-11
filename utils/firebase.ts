import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'


export const firebaseConfig = {
    apiKey: "AIzaSyDz2r-bQBn4AQiGpAlAUrc_KR_aUOYmRCE",
    authDomain: "netflix-clone-35d08.firebaseapp.com",
    projectId: "netflix-clone-35d08",
    storageBucket: "netflix-clone-35d08.appspot.com",
    messagingSenderId: "333559237781",
    appId: "1:333559237781:web:5f761acd3789d5b73fdf9c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

//connnecting to the db

const db = firebaseApp.firestore()
const auth = firebase.auth()

export {auth}
export default db