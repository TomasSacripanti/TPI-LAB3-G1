import React from "react";
import SearchForm from "./forms/SearchForm";
import { Link } from "react-router-dom";

const Navbar = ({ isLogged }) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <button class="navbar-brand" href="/">
          Logito
        </button>
        {isLogged ? <SearchForm /> : ""}
        <div class="" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link" to="/login">
                Ingresar
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/register">
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
