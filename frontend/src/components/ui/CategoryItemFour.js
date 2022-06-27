import { useMemo, useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import { Card } from "react-bootstrap";
import "./CategoryItem.css";

const CategoryItemFour = ({
  title,
  imageURL,
  score,
  episodesCount,
  status,
  airing,
}) => {
  const { theme } = useContext(ThemeContext);

  const styles = useMemo(() => {
    if (theme === "dark") {
      return {
        classes: "item-container bg-dark",
        object: {
          textAlign: "center",
          color: "white",
        },
      };
    } else {
      return {
        classes: "item-container bg-light",
        object: {
          textAlign: "center",
          color: "#212529",
        },
      };
    }
  }, [theme]);
  return (
    <Card className={styles.classes}>
      <Card.Body>
        <Card.Title style={styles.object}>{title}</Card.Title>
        <Card.Img src={imageURL} className="anime-manga-img"/>
        <Card.Text style={styles.object}>Puntaje: {score}</Card.Text>
        {status === "Finished" || status === "Finished Airing" ? (
          <Card.Text style={styles.object}>
            Cantidad de capítulos: {episodesCount}{" "}
          </Card.Text>
        ) : (
          <Card.Text style={styles.object}>Se encuentra en emisión </Card.Text>
        )}
      </Card.Body>
    </Card>
  );
};

export default CategoryItemFour;
