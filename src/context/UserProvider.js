import React from "react";
import UserContext from "./userContext";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase.config";

export const UserProvider = ({ children }) => {
  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);
  // const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ auth }}>{children}</UserContext.Provider>
  );
};
