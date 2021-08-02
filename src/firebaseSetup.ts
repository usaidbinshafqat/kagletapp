import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBQRGfJynPI0BznjfK0Gg2fcn0v7IOzke4",
    authDomain: "kaglet-91224.firebaseapp.com",
    projectId: "kaglet-91224",
    storageBucket: "kaglet-91224.appspot.com",
    messagingSenderId: "407470091369",
    appId: "1:407470091369:web:b59563c510fc47655086f8"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
