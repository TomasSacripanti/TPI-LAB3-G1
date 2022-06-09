import React from "react";

import MangaCard from "./ui/MangaCard";

const MangaItem = ({ title, chaptersCount, comment }) => {
  return (
    <MangaCard>
      <h2>{title}</h2>
      <h6>Cantidad de capitulos: {chaptersCount}</h6>
      <br></br>
      <br></br>
      <p>Comentario: {comment}</p>
    </MangaCard>
  );
};

export default MangaItem;