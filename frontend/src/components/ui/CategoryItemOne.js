import "./CategoryItem.css";

const CategoryItemOne = ({ title, chaptersCount, comment }) => {
  return (
    <div className="item-container">
      <h2>{title}</h2>
      <h6>Cantidad de capitulos: {chaptersCount}</h6>
      <br></br>
      <br></br>
      <p>Comentario: {comment}</p>
    </div>
  );
};

export default CategoryItemOne;
