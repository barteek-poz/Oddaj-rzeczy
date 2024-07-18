"use client";
import { createContext, useContext, useState } from "react";

const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
  const [userIsLogged, setUserIsLogged] = useState(false);
  return (
    <LoginContext.Provider value={{ userIsLogged, setUserIsLogged }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLoginContext = () => useContext(LoginContext);
