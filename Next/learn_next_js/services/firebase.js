import { initializeApp, getApp } from "firebase/app";
import { getDatabase, set, ref, child, get, push, update, onValue, remove } from "firebase/database";
import { getAuth } from "firebase/auth";


let app

try {
    app = getApp()
} catch (error) {
    // const firebaseConfig = {
    //     apiKey: process.env.FIREBASE_API_KEY,
    //     authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    //     databaseURL: process.env.FIREBASE_DATABASE_URL,
    //     projectId: process.env.FIREBASE_PROJECT_ID,
    //     storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    //     messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    //     appId: process.env.FIREBASE_APP_ID
    //   };
    
    const firebaseConfig = {
        apiKey: "AIzaSyDrYpNPD5_a_I7IqU-TbPWSZL1sNyHFoTg",
        authDomain: "facultbase.firebaseapp.com",
        databaseURL: "https://facultbase-default-rtdb.firebaseio.com",
        projectId: "facultbase",
        storageBucket: "facultbase.appspot.com",
        messagingSenderId: "1096619820940",
        appId: "1:1096619820940:web:035bff037af4b31703f8a9"
      }; 

    //   console.log(firebaseConfig)
      
      app = initializeApp(firebaseConfig);
}

const db = getDatabase(app)

export { db, set, ref, child, get, push, update, getAuth, onValue, remove }