import React, { createContext, useEffect, useState } from "react";
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZXusWP3XQIIFoLo7o1ObEmUJ0ab7gtC8",
  authDomain: "project-pet-pal.firebaseapp.com",
  databaseURL: "https://project-pet-pal.firebaseio.com",
  projectId: "project-pet-pal",
  storageBucket: "project-pet-pal.appspot.com",
  messagingSenderId: "365430314403",
  appId: "1:365430314403:web:b77567c9975007fd9ef616",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export const AppContext = createContext(null);

const AppProvider = ({ children, signInWithGoogle, signOut, user }) => {
  const [appUser, setAppUser] = useState({});
  const [message, setMessage] = useState("");
  const handleSignOut = () => {
    signOut();
    setAppUser({});
    setMessage("");
  };

  useEffect(() => {
    console.log(user);
    setAppUser(user);
    // if (user) {
    //   fetch(`/users`, {
    //     method: "post",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       displayName: user.displayName,
    //       email: user.email,
    //       photoURL: user.photoURL,
    //     }),
    //   })
    //     .then((res) => res.json())
    //     .then((json) => {
    //       setAppUser(json.data);
    //       setMessage(json.message);
    //     });
    // }
  }, [user]);

  return (
    <AppContext.Provider
      value={{ appUser, signInWithGoogle, handleSignOut, message }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
  firebaseApp,
})(AppProvider);
