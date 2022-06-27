import { useContext, useMemo } from "react";
import ThemeContext from "../context/ThemeContext";
import { Link } from "react-router-dom";
import ChangeTheme from "./ChangeTheme";
import "./Navbar.css";

const Navbar = ({ isLogged }) => {
  const { theme } = useContext(ThemeContext);

  const styles = useMemo(() => {
    if (theme === "dark") {
      return {
        classes: "navbar navbar-expand-lg navbar-dark bg-dark",
        object: {},
      };
    } else {
      return {
        classes: "navbar navbar-expand-lg navbar-light bg-light",
        object: {},
      };
    }
  }, [theme]);

  return (
    <nav className={styles.classes}>
      <div className="container-fluid">
        <div className="navbar-brand">Trackeador de contenidos</div>
        <div className="" id="navbarNav">
          <ul className="navbar-nav">
            {isLogged ? (
              <li className="nav-item">
                <Link className="nav-link" to="/contents/popular">
                  Contenidos populares
                </Link>
              </li>
            ) : (
              ""
            )}
            {isLogged ? (
              <li className="nav-item">
                <Link className="nav-link" to="/contents/add">
                  Agregar contenido
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Ingresar
                </Link>
              </li>
            )}
            {isLogged ? (
              <li className="nav-item">
                <Link className="nav-link" to="/contents">
                  Tus contenidos
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/register">
                  Registrarse
                </Link>
              </li>
            )}
            <li className="nav-link">
              <ChangeTheme />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
