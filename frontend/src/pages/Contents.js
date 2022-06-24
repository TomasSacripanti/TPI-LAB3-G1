import { useEffect, useContext} from "react";
import CategorySection from "../components/CategorySection";
import ThemeContext from "../context/ThemeContext";
import DATA from "../Data";
import "./Contents.css";

const Contents = () => {
  const {theme} = useContext(ThemeContext); 

  useEffect(() => {
    const categoryTitle = document.getElementsByClassName("category-title");
    for (let i = 0; i < categoryTitle.length; i++) {
      if (theme === "dark") {
        categoryTitle[i].classList.remove("category-title-light");
        categoryTitle[i].classList.add("category-title-dark");
        console.log(categoryTitle[i].classList);
      } else {
        categoryTitle[i].classList.remove("category-title-dark");
        categoryTitle[i].classList.add("category-title-light");
        console.log(categoryTitle[i].classList);
      }
    }
  }, [theme])
  return (
    <>
      <h3 className="category-title">Lista de animes </h3>
      <CategorySection list={DATA.DUMMY_ANIMES} category="animes" />
      <h3 className="category-title">Lista de mangas </h3>
      <CategorySection list={DATA.DUMMY_MANGAS} category="mangas" />
      <h3 className="category-title">Lista de series </h3>
      <CategorySection list={DATA.DUMMY_SERIES} category="series" />
      <h3 className="category-title">Lista de películas</h3>
      <CategorySection list={DATA.DUMMY_MOVIES} category="peliculas" />
    </>
  );
};

export default Contents;
