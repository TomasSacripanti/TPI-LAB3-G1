import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const inputHandler = (e) => {
    switch (e.target.id) {
      case "userName":
        setUser(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  const validateForm = () => {
    console.log("Validating");
  }

  return (
    <div class="wrapper">
      <div class="text-center mt-4 name">Registrarse</div>
      <form class="p-3 mt-3">
        <div class="form-field d-flex align-items-center">
          <span class="far fa-user"></span>
          <input
            type="text"
            name="userName"
            id="userName"
            placeholder="Usuario"
            value={user}
            onChange={inputHandler}
          />
        </div>
        <div class="form-field d-flex align-items-center">
          <span class="far fa-email"></span>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={inputHandler}
          />
        </div>
        <div class="form-field d-flex align-items-center">
          <span class="fas fa-key"></span>
          <input
            type="password"
            name="password"
            id="pwd"
            placeholder="Contraseña"
            value={password}
            onChange={inputHandler}
          />
        </div>
        <button onSubmit={validateForm} class="btn mt-3">Ingresar</button>
      </form>
      <div class="text-center fs-6">
        <Link to="/login">Ya tengo cuenta</Link>
      </div>
    </div>
  );
};

export default RegisterForm;
