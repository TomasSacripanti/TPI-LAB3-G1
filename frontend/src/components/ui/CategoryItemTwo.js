import "./CategoryItem.css";

const CategoryItemTwo = ({ title, director, duration, comment }) => {
  return (
    <div className="item-container">
      <h2>{title}</h2>
      <h3>Dirigida por: {director}</h3>
      <br></br>
      <h6>La pelicula dura {duration} minutos</h6>
      <br></br>
      <br></br>
      <p>Comentario: {comment}</p>
    </div>
  );
};

export default CategoryItemTwo;
