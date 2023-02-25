import firebase from 'firebase/app'
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyC8iFurxCDm1rMhZWLKxbLBr_NwpPPwcrc",
    authDomain: "olxuz-clone.firebaseapp.com",
    projectId: "olxuz-clone",
    storageBucket: "olxuz-clone.appspot.com",
    messagingSenderId: "710740450167",
    appId: "1:710740450167:web:b9a8d82882c74da47c5f72",
    measurementId: "G-1KC183D8RW"
};
const server = firebase.initializeApp(firebaseConfig);
const auth = server.auth()
const provider = new firebase.auth.GoogleAuthProvider()


export { auth, provider } 