import React from "react";
import SearchForm from "./forms/SearchForm";
import { Link } from "react-router-dom";

const Navbar = ({ isLogged }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button className="navbar-brand" href="/">
          Logito
        </button>
        {isLogged ? <SearchForm /> : ""}
        <div className="" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Ingresar
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/register">
                Registrarse
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
