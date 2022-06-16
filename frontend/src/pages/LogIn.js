import React from "react";
import LoginForm from "../components/forms/LoginForm";

const Login = ({setIsLogged}) => {
  return (
    <div className="div-wrapper">
      <LoginForm setIsLogged={setIsLogged} />
    </div>
  );
};

export default Login;
