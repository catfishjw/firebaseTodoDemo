// Import the functions you need from the SDKs you need
import { initializeApp } from'https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js';
import { FIREBASE_API_KEY, FIREBASE_AUTH_DOMAIN, FIREBASE_PROJECT_ID, FIREBASE_STORAGE_BUCKET, FIREBASE_MESSAGING_SENDER_ID, FIREBASE_APP_ID } from '../env.js';
// TODO: Add SDKs for Firebase products
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID
};

// REPLACE THIS WITH YOUR FIREBASE CREDENTIALS
// You should create a new file called env.js within the public folder and add the following code:
/* export const FIREBASE_API_KEY = "-";
   export const FIREBASE_AUTH_DOMAIN = "-";
   export const FIREBASE_PROJECT_ID = "-";
   export const FIREBASE_STORAGE_BUCKET = "-";
   export const FIREBASE_MESSAGING_SENDER_ID = "-";
   export const FIREBASE_APP_ID = "-";
*/


// Initialize Firebase
export const app = initializeApp(firebaseConfig);