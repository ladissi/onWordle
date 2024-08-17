// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  // Your web app's Firebase configuration
  // Copy this from your Firebase project settings
  apiKey: "AIzaSyAmnMTbsq5kwlBp9wlaRmbcKeTlGstebUw",
  authDomain: "wordlewordlist.firebaseapp.com",
  databaseURL: "https://wordlewordlist-default-rtdb.firebaseio.com",
  projectId: "wordlewordlist",
  storageBucket: "wordlewordlist.appspot.com",
  messagingSenderId: "889454888345",
  appId: "1:889454888345:web:73ac26ff9d4ea62ea03f08",
  measurementId: "G-YJNX454BE0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);

export { database };