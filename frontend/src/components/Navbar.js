import React from "react";
import SearchForm from "./forms/SearchForm";

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
              <a class="nav-link" href="#">
                Ingresar
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Registrarse
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
