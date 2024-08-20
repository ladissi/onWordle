// firebaseConfig.js
// import { initializeApp } from 'firebase/app';
// import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: window.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: window.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: `https://${window.env.REACT_APP_FIREBASE_PROJECT_ID}.firebaseio.com`,
  projectId: window.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: window.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: window.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: window.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: window.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Get a reference to the database service
// const database = getDatabase(app);

// export { database };