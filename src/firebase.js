import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyC_IovfdIG5ER9JupHBK47JLVA2yLuncXw",
    authDomain: "ran-my-note.firebaseapp.com",
    projectId: "ran-my-note",
    storageBucket: "ran-my-note.appspot.com",
    messagingSenderId: "1060151340488",
    appId: "1:1060151340488:web:c3a2240b282a7a1ade24fd",
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
