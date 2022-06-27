import { useMemo, useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import { Card } from "react-bootstrap";
import "./CategoryItem.css";

const CategoryItemThree = ({title, posterPath, vote, date}) => {
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
        <Card.Img src={`https://image.tmdb.org/t/p/w500${posterPath}`} />
        <Card.Text style={styles.object}>Puntaje: {vote}</Card.Text>
        <Card.Text style={styles.object}>Fecha de lanzamiento: {date}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CategoryItemThree;
