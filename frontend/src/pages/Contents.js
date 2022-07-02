import { useContext, useMemo } from "react";
import CategorySection from "../components/CategorySection";
import ThemeContext from "../context/ThemeContext";
import DataContext from "../context/DataContext";
import UsersListContext from "../context/UsersListContext";
import "./Contents.css";

const Contents = () => {
  const { theme } = useContext(ThemeContext);

  const { data } = useContext(DataContext);

  const { activeUser } = useContext(UsersListContext);

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
      <h3 className={styles.classes}>Tu lista de series </h3>
      <CategorySection
        list={data.filter(
          (content) =>
            content.category === "serie" && content.userId === activeUser
        )}
        category="series"
      />
      <h3 className={styles.classes}>Tu lista de películas</h3>
      <CategorySection
        list={data.filter(
          (content) =>
            content.category === "pelicula" && content.userId === activeUser
        )}
        category="peliculas"
      />
      <h3 className={styles.classes}>Tu lista de animes </h3>
      <CategorySection
        list={data.filter(
          (content) =>
            content.category === "anime" && content.userId === activeUser
        )}
        category="animes"
      />
      <h3 className={styles.classes}>Tu lista de mangas </h3>
      <CategorySection
        list={data.filter(
          (content) =>
            content.category === "manga" && content.userId === activeUser
        )}
        category="mangas"
      />
    </>
  );
};

export default Contents;
