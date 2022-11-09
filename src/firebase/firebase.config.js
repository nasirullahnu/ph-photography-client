// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyf5FZ4cZZxihIkS0rSKj9RsdL6ELOvsU",
  authDomain: "ph-photography.firebaseapp.com",
  projectId: "ph-photography",
  storageBucket: "ph-photography.appspot.com",
  messagingSenderId: "112840653671",
  appId: "1:112840653671:web:766a93fd1320a0a2bc4dc2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;