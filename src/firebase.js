import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4G48k2IZ9mE0s3WVvhe4I8Pyv0VpxDRc",
  authDomain: "vet-pets-d56a4.firebaseapp.com",
  projectId: "vet-pets-d56a4",
  storageBucket: "vet-pets-d56a4.appspot.com",
  messagingSenderId: "444225663700",
  appId: "1:444225663700:web:a97113e524438452a18141",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
