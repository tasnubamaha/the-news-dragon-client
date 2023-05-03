// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYPFYGxem9Mepx0xBmqkWLZntQ_nlaz0w",
  authDomain: "chef-recipe-hunter-clien-5a8c3.firebaseapp.com",
  projectId: "chef-recipe-hunter-clien-5a8c3",
  storageBucket: "chef-recipe-hunter-clien-5a8c3.appspot.com",
  messagingSenderId: "1081831521959",
  appId: "1:1081831521959:web:aa722db29d368a83bb2582",
  measurementId: "G-WKH1PCFZSP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;