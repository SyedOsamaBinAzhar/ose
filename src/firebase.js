// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALyyv0r2GkJLUe37Eri3W45Hpjknp4m3U",
  authDomain: "ose-dev.firebaseapp.com",
  projectId: "ose-dev",
  storageBucket: "ose-dev.appspot.com",
  messagingSenderId: "278008022184",
  appId: "1:278008022184:web:2334c89784e478ab2cae9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;