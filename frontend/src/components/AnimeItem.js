import React from "react";

import AnimeCard from "./ui/AnimeCard";
const AnimeItem = ({ title, chaptersCount, comment }) => {
  return (
    <AnimeCard>
      <h2>{title}</h2>
      <h6>Cantidad de capitulos: {chaptersCount}</h6>
      <br></br>
      <br></br>
      <p>Comentario: {comment}</p>
    </AnimeCard>
  );
};

export default AnimeItem;
