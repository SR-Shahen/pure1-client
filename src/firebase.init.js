// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA-z59l52UaXjVhap46Jm6M1OOda2mUK7A",
    authDomain: "pure-one-1ffa5.firebaseapp.com",
    projectId: "pure-one-1ffa5",
    storageBucket: "pure-one-1ffa5.appspot.com",
    messagingSenderId: "990265393753",
    appId: "1:990265393753:web:33839580111b9064a9e748"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;