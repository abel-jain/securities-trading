import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdGBK4EL7rtVqcJTaqv0VaIevuNFNjYsQ",
  authDomain: "abel-sideproject.firebaseapp.com",
  projectId: "abel-sideproject",
  databaseURL: "https://abel-sideproject-default-rtdb.asia-southeast1.firebasedatabase.app/",
  storageBucket: "abel-sideproject.appspot.com",
  messagingSenderId: "308746980965",
  appId: "1:308746980965:web:fc83a7fbfee32a9c2fc08c",
  measurementId: "G-SCWNCV8722"
};

// Initialize Firebase
const firebaseInit = initializeApp(firebaseConfig);
const database = getDatabase(firebaseInit);

export default database

