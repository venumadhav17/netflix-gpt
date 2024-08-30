// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNTQrvJ-Cz-zLKLeDEotC0ddLKDNkVlZU",
  authDomain: "netflixgpt-49f6d.firebaseapp.com",
  projectId: "netflixgpt-49f6d",
  storageBucket: "netflixgpt-49f6d.appspot.com",
  messagingSenderId: "283222289545",
  appId: "1:283222289545:web:53d8c58c802f8888c06a58",
  measurementId: "G-7F2TG79189",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
