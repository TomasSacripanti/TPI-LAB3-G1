import React from "react";

import AnimeSerieCard from "./ui/AnimeSerieCard";
const AnimeSerieItem = ({ title, chaptersCount, comment }) => {
  return (
    <AnimeSerieCard>
      <h2>{title}</h2>
      <h6>Cantidad de capitulos: {chaptersCount}</h6>
      <br></br>
      <br></br>
      <p>Comentario: {comment}</p>
    </AnimeSerieCard>
  );
};

export default AnimeSerieItem;
