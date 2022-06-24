import {useEffect, useContext} from "react";
import ThemeContext from "../../context/ThemeContext";
import {Card} from "react-bootstrap";
import "./CategoryItem.css";

const CategoryItemOne = ({ title, chaptersCount, comment }) => {
  const {theme} = useContext(ThemeContext); 

  useEffect(() => {
    const cards = document.getElementsByClassName("card");
    for (let i = 0; i < cards.length; i++) {
      if (theme === "dark") {
        cards[i].classList.remove("bg-light");
        cards[i].classList.add("bg-dark");
        cards[i].classList.remove("card-light");
        cards[i].classList.add("card-dark");
      } else {
        cards[i].classList.remove("bg-dark");
        cards[i].classList.add("bg-light");
        cards[i].classList.remove("card-dark");
        cards[i].classList.add("card-light");
      }
    }
  }, [theme])

  return (
    <Card className="item-container">
      <Card.Img variant="top"/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Cantidad de capitulos: {chaptersCount}
        </Card.Text>
        <Card.Text>
          Comentario: {comment}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CategoryItemOne;
