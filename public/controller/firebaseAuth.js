import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js';
import { app } from "./firebaseCore.js";
import { signInView } from '../view/signInPage.js';
import { homepageView } from '../view/homepage.js';

const auth = getAuth(app);

export let currentUser = null;

// These functions are used to check if the user is logged in or not.
export function attachAuthStateChangeObserver() {
  onAuthStateChanged(auth, authStateChangeObserver);
}
function authStateChangeObserver(user) {
  if (user) {
    currentUser = user;
    homepageView();
  } else {
    currentUser = null;
    signInView();
  }
}

export async function createAccount(e) {
  e.preventDefault();
  const email = document.getElementById('sign-up-email').value;
  const password = document.getElementById('sign-up-password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  if (password !== confirmPassword) {
    alert('Passwords do not match.');
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    currentUser = userCredential.user;
    return currentUser;
  } catch (error) {
    alert(error.message);
    return; 
  }
}

export async function signIn(e) {
  e.preventDefault();
  const email = document.getElementById('sign-in-email').value;
  const password = document.getElementById('sign-in-password').value;

  try{
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    currentUser = userCredential.user;
    return currentUser;
  } catch (error) {
    alert(error.message);
    return;
  }
}

export async function signOut() {
  if (confirm('Are you sure you want to sign out?')) {
      auth.signOut();
  }
 signInView();
}
