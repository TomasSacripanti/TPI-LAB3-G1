import { useMemo, useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import { Card } from "react-bootstrap";
import "./CategoryItem.css";

const CategoryItemOne = ({ title, chaptersCount, comment }) => {
  const { theme } = useContext(ThemeContext);

  const styles = useMemo(() => {
    if(theme === "dark") {
      return {
        classes: "item-container card-dark bg-dark",
        object: {
          color: "#FFFFFF",
        }
      }
    } else {
      return {
        classes: "item-container card-light bg-light",
        object: {
          color: "#212529",
        }
      }
    }
  }, [theme]);

  return (
    <Card className={styles.classes}>
      <Card.Img variant="top" />
      <Card.Body>
        <Card.Title style={styles.object} >{title}</Card.Title>
        <Card.Text style={styles.object} >Cantidad de capitulos: {chaptersCount}</Card.Text>
        <Card.Text style={styles.object} >Comentario: {comment}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CategoryItemOne;
