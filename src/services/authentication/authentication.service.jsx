import { firebase } from "../../../firebaseConfig";

export const loginRequest = (email, password) =>
  firebase.auth.signInWithEmailAndPassword(firebase.getAuth, email, password);
