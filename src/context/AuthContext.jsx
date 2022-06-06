import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const useAuth = () => {
  const state = useContext(AuthContext);
  if(!state) {
    console.log("jjjkkk");
  }
  return state;
}


export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState();
  let navigate = useNavigate();
  const providerValue = {
    loggedIn,
    setLoggedIn,
  }
  useEffect(() => {
    if(loggedIn){
      navigate("/");
    }
    else{
      navigate("/login")
    }
  }, [loggedIn])
  return <AuthContext.Provider value={providerValue}>{children}</AuthContext.Provider>;
};
