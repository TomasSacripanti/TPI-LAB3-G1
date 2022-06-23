import {Card} from "react-bootstrap";
import "./CategoryItem.css";

const CategoryItemTwo = ({ title, director, duration, comment }) => {
  return (
    <Card className="item-container">
      <Card.Img variant="top" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Director: {director}</Card.Text>
        <Card.Text>Duracion: {duration}</Card.Text>
        <Card.Text>Comentario: {comment}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CategoryItemTwo;
