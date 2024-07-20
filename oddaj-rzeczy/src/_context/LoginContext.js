"use client";
import { createContext, useContext, useState } from "react";

const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
  const [userIsLogged, setUserIsLogged] = useState(false);
  const [userEmail, setUserEmail] = useState('')
  return (
    <LoginContext.Provider value={{ userIsLogged, setUserIsLogged, userEmail, setUserEmail }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLoginContext = () => useContext(LoginContext);
