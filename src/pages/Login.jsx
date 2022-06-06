import React from "react";
import { useAuth } from "../context/AuthContext";


const Login = () => {
  const {loggedIn, setLoggedIn} = useAuth();
  return (
    <div>
      Bipin Login
      <input data-cy="login-email" />
      <input data-cy="login-password" />
      <button data-cy="login-submit" onClick={() => setLoggedIn(true)}> Login </button>
    </div>
  );
};

export default Login;
