import React from "react";
import UserContext from "./userContext";
import { auth } from "../firebase/Firebase";

export const UserProvider = ({ children }) => {
  // const app = initializeApp(firebaseConfig);

  // const auth = getAuth(app);
  // const [user, setUser] = useState(null);
  return (
    // <UserContext.Provider value={{ auth }}>{children}</UserContext.Provider>
    <UserContext.Provider value={auth}>{children}</UserContext.Provider>
  );
};
