import { Link } from "react-router-dom";
import "./Forms.css";

const LoginForm = ({setIsLogged}) => {
  return (
    <div class="wrapper">
      <div class="text-center mt-4 name">Iniciar sesión</div>
      <form class="p-3 mt-3">
        <div class="form-field d-flex align-items-center">
          <span class="far fa-user"></span>
          <input
            type="text"
            name="userName"
            id="userName"
            placeholder="Usuario"
          />
        </div>
        <div class="form-field d-flex align-items-center">
          <span class="fas fa-key"></span>
          <input
            type="password"
            name="password"
            id="pwd"
            placeholder="Contraseña"
          />
        </div>
        <button class="btn mt-3">Ingresar</button>
      </form>
      <div class="text-center fs-6">
        <Link to="/register">Aún no tengo cuenta</Link>
      </div>
    </div>
  );
};

export default LoginForm;
