import { initializeApp } from 'firebase/app';
import * as auth from "firebase/auth";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: 'AIzaSyADhX5_7V6rV2uUy0P4CYrslQ4IXgAXua0',
    authDomain: 'mealstogo-6dd86.firebaseapp.com',
    databaseURL: 'https://project-id.firebaseio.com',
    projectId: 'mealstogo-6dd86',
    storageBucket: 'mealstogo-6dd86.appspot.com',
    messagingSenderId: '105948342117',
    appId: '1:105948342117:web:3539ef8d5d256380be238c',
};

initializeApp(firebaseConfig);
const getAuth = auth.getAuth();

export const firebase = { auth, getAuth }

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
