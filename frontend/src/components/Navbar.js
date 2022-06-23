import {useContext} from "react";
import ThemeContext from "../context/ThemeContext";
import { Link } from "react-router-dom";
import ChangeTheme from "./ChangeTheme";
import "./Navbar.css";

const Navbar = ({ isLogged }) => {
  const {theme} = useContext(ThemeContext);
  if (theme === "light") {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="navbar-brand">Trackeador de contenidos</div>
          <div className="" id="navbarNav">
            <ul className="navbar-nav">
  
              {isLogged ? <li className="nav-item"><Link className="nav-link" to="/contents/add">Agregar contenido</Link></li> : <li className="nav-item"><Link className="nav-link" to="/login">Ingresar</Link></li>}
              {isLogged ? <li className="nav-item"><Link className="nav-link" to="/contents">Contenidos</Link></li> : <li className="nav-item"><Link className="nav-link" aria-current="page" to="/register">Registrarse</Link></li>}
              <li className="nav-link"><ChangeTheme/></li>
  
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="navbar-brand">Trackeador de contenidos</div>
        <div className="" id="navbarNav">
          <ul className="navbar-nav">

            {isLogged ? <li className="nav-item"><Link className="nav-link" to="/contents/add">Agregar contenido</Link></li> : <li className="nav-item"><Link className="nav-link" to="/login">Ingresar</Link></li>}
            {isLogged ? <li className="nav-item"><Link className="nav-link" to="/contents">Contenidos</Link></li> : <li className="nav-item"><Link className="nav-link" aria-current="page" to="/register">Registrarse</Link></li>}
            <li className="nav-link"><ChangeTheme/></li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;