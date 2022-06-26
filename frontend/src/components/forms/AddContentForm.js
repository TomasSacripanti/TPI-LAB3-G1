import { useState, useContext, useEffect, useMemo } from "react";
import ThemeContext from "../../context/ThemeContext";
import { Link } from "react-router-dom";

const AddContentForm = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("pelicula");
  const [duration, setDuration] = useState(undefined);
  const [comment, setComment] = useState("");
  const {theme} = useContext(ThemeContext);


  const styles = useMemo(() => {
    if (theme ==="dark") {
      return {
        classes: "wrapper wrapper-dark",
      }
    } else {
      return {
        classes: "wrapper wrapper-light",
      }
    }
  }, [theme])

  const inputHandler = (e) => {
    switch (e.target.id) {
      case "title":
        setTitle(e.target.value);
        break;
      case "duration":
        const number = parseInt(e.target.value);
        if (number < 0) {
          setDuration(0);
        } else {
          setDuration(number);
        }
        break;
      case "comment":
        setComment(e.target.value);
        break;
      default:
        break;
    }
  };

  const selectHandler = (e) => {
    setCategory(e.target.value);
  };

  const validateForm = (e) => {
    e.preventDefault();
    if (title === "" || comment === "" || duration === 0 || duration === null) {
      const validationMsg = document.getElementById("validation-message");
      validationMsg.style.display = "flex";
      setTimeout(() => {
        validationMsg.style.display = "none";
      }, 3000);
    } else {
      //Post a Content
    }
  };

  return (
    <div id="wrapper" className={styles.classes}>
      <div className="text-center mt-4 name">Agregue un contenido</div>
      <form className="p-3 mt-3">
        <div className="category-field">
          <span className="fas fa-category"></span>
          <select
            onChange={selectHandler}
            value={category}
            name="category"
            id="category"
          >
            <option value="pelicula">
              Pelicula
            </option>
            <option value="serie">Serie</option>
            <option value="anime">Anime</option>
            <option value="libro">Libro</option>
          </select>
        </div>
        <div className="form-field d-flex align-items-center">
          <span className="far fa-title"></span>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            placeholder="Titulo"
            onChange={inputHandler}
          />
        </div>
        <div className="form-field d-flex align-items-center">
          <span className="far fa-duration"></span>
          {category === "pelicula" ? (
            <input
              type="number"
              name="duration"
              id="duration"
              value={duration}
              placeholder="Duracion en minutos"
              onChange={inputHandler}
            />
          ) : (
            ""
          )}
          {category === "serie" || category === "anime" ? (
            <input
              type="number"
              name="duration"
              id="duration"
              value={duration}
              placeholder="Cantidad de capitulos"
              onChange={inputHandler}
            />
          ) : (
            ""
          )}
          {category === "libro" ? (
            <input
              type="number"
              name="duration"
              id="duration"
              value={duration}
              placeholder="Tiempo en horas"
              onChange={inputHandler}
            />
          ) : (
            ""
          )}
        </div>
        <div className="form-field d-flex align-items-center" id="comment-div">
          <span className="far fa-comment"></span>
          <input
            type="text"
            name="comment"
            id="comment"
            value={comment}
            placeholder="Comentario"
            onChange={inputHandler}
          />
        </div>
        <div id="validation-message">
          <p>Ingrese datos válidos para continuar</p>
        </div>
        <button onClick={validateForm} className="btn mt-3">
          Agregar contenido
        </button>
      </form>
      <div className="text-center fs-6">
        <Link to="/contents">Regresar</Link>
      </div>
    </div>
  );
};

export default AddContentForm;
