import React, { useState, createContext } from "react";
import { loginRequest } from "./authentication.service";
import { firebase } from "../../../firebaseConfig";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  //ตรวจสอบถ้าผู้ใช้ยังอยู่ในระบบไม่ต้อง login ใหม่
  firebase.auth.onAuthStateChanged(firebase.getAuth, (usr) => {
    if (usr) {
      setUser(usr);
      setIsLoading(false);
      //console.log("login");
    } else {
      setIsLoading(false);
      //console.log("logout");
    }
  });

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    setIsLoading(true);
    if (password !== repeatedPassword) {
      setError("Error: Passwords do not match");
      setTimeout(() => setIsLoading(false), 2000);
      return;
    }
    firebase.auth
      .createUserWithEmailAndPassword(firebase.getAuth, email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onLogout = () => {
    firebase.auth
      .signOut(firebase.getAuth)
      .then(() => {
        setUser(null);
        setError(null);
      })
      .catch((e) => console.log(e));
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
