import React from "react";
import SearchForm from "./forms/SearchForm";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ isLogged }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <div className="navbar-brand">Reviews App</div>
        {isLogged ? <SearchForm /> : ""}
        <div className="" id="navbarNav">
          <ul className="navbar-nav">
            {isLogged ? <li className="nav-item"><Link className="nav-link" to="/add">Agregar Review</Link></li> : <li className="nav-item"><Link className="nav-link" to="/login">Ingresar</Link></li>}
            {isLogged ? <li className="nav-item"><Link className="nav-link" to="/reviews">Reviews</Link></li> : <li className="nav-item"><Link className="nav-link" aria-current="page" to="/register">Registrarse</Link></li>}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
