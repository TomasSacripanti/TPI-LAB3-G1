import { useContext, useMemo } from "react";
import CategorySection from "../components/CategorySection";
import ThemeContext from "../context/ThemeContext";
import DATA from "../Data";
import "./Contents.css";

const Contents = () => {
  const { theme } = useContext(ThemeContext);

  const styles = useMemo(() => {
    if (theme === "dark") {
      return {
        classes: "category-title category-title-dark",
      };
    } else {
      return {
        classes: "category-title category-title-light",
      };
    }
  }, [theme]);

  

  return (
    <>
      <h3 className={styles}>Lista de animes </h3>
      <CategorySection list={DATA.DUMMY_ANIMES} category="animes" />
      <h3 className={styles}>Lista de mangas </h3>
      <CategorySection list={DATA.DUMMY_MANGAS} category="mangas" />
      <h3 className={styles}>Lista de series </h3>
      <CategorySection list={DATA.DUMMY_SERIES} category="series" />
      <h3 className={styles}>Lista de películas</h3>
      <CategorySection list={DATA.DUMMY_MOVIES} category="peliculas" />
    </>
  );
};

export default Contents;
