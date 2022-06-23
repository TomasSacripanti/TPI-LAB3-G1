import React from "react";
import ChangeTheme from "./ChangeTheme";

import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ isLogged }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
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
;