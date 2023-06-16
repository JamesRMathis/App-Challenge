import { initializeApp } from "firebase/app"

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "app-challenge-e9850.firebaseapp.com",
    projectId: "app-challenge-e9850",
    storageBucket: "app-challenge-e9850.appspot.com",
    messagingSenderId: "483675367428",
    appId: process.env.REACT_APP_FIREBASE_ID
}

const app = initializeApp(firebaseConfig)
export default app