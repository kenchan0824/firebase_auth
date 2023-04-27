import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  GoogleAuthProvider,
  signInWithRedirect, 
} from "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyAS5YuXD6bfQSrUQQBwx0kw1biqO_bvLIM',
  authDomain: 'auth-6b369.firebaseapp.com',
  databaseURL: 'https://auth-6b369.firebaseio.com',
  projectId: 'auth-6b369',
  storageBucket: 'auth-6b369.appspot.com',
  messagingSenderId: 'sender-id',
  appId: 'auth',
  measurementId: 'G-measurement-id',
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export function createUser(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
};

export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  return signInWithRedirect(auth, provider);
}