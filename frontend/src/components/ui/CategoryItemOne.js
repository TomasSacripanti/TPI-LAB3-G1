import {Card} from "react-bootstrap";
import "./CategoryItem.css";

const CategoryItemOne = ({ title, chaptersCount, comment }) => {
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
