import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBbSVp8upQlzKPka1zDrw_bSDbXMEgb0ws",
    authDomain: "ffgfg-807b9.firebaseapp.com",
    projectId: "ffgfg-807b9",
    storageBucket: "ffgfg-807b9.firebasestorage.app",
    messagingSenderId: "793325521191",
    appId: "1:793325521191:web:5718006ba598bf294b0102",
    measurementId: "G-NX5RFZK1DX"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
